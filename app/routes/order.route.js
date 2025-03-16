const express = require('express');
const router = express.Router();
const { Order, OrderDetail } = require('../models/OrderFood'); // Adjust the path as necessary
const FoodTable = require('../models/FoodTable')
const FoodMenu = require('../models/FoodMenu')
// POST: Create a new order

router.get('/detail', async (req, res) => {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: OrderDetail,
            include: [FoodMenu], // Include any necessary associated models
          },
          {
            model: FoodTable, // Include the FoodTable model if necessary
           
          },
        ],
        order: [['createdAt', 'DESC']],
      });

      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  });
  
router.get('/',async (req,res)=>{
  try{
    const order = await Order.findAll()
    res.status(200).json(order)
  }catch(err){
    res.status(404).json(err)
  }
})

router.get('/detail',async (req,res)=>{
  try{
    const detail = await OrderDetail.findAll()
    res.status(200).json(detail)

  }catch(err){
    res.status(404).json(err)
  }
})


router.post('/', async (req, res) => {
  try {
    const { tableId, orderDetails, status } = req.body;

    const newOrder = await Order.create({
        tableId,
        status: status || 'Pending', 
    });
    if (orderDetails && orderDetails.length > 0) {
        const orderDetailRecords = orderDetails.map(detail => ({
            ...detail,
            orderId: newOrder.id,
        }));
        await OrderDetail.bulkCreate(orderDetailRecords);
    }

    res.status(201).json(newOrder);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order',detail: error.message });
}
});


// PUT: Update an existing order
router.put('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { tableId, orderDetails } = req.body;

        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        await order.update({ tableId });

        if (orderDetails && orderDetails.length > 0) {
            // Delete existing details
            await OrderDetail.destroy({ where: { orderId: id } });

            // Add new details
            const orderDetailRecords = orderDetails.map(detail => ({
                ...detail,
                orderId: id,
            }));
            await OrderDetail.bulkCreate(orderDetailRecords);
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update order' });
    }
});

// DELETE: Remove an order
router.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        await order.destroy();

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete order' });
    }
});

module.exports = router;
