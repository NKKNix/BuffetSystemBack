/**
 * @swagger
 * /order:
 *   get:
 *     summary: Get all orders
 *     tags:
 *       - Order
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "3"
 *                   tableId:
 *                     type: string
 *                     example: "2"
 *                   status:
 *                     type: string
 *                     example: "Pending"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-03-23T14:09:23.598Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-03-23T14:09:23.598Z"

 *   post:
*     summary: Create a new order with order details
 *     tags:
 *       - Order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tableId
 *               - orderDetails
 *             properties:
 *               tableId:
 *                 type: string
 *                 example: "2"
 *               status:
 *                 type: string
 *                 example: "Pending"
 *               orderDetails:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - menuId
 *                     - amount
 *                   properties:
 *                     menuId:
 *                       type: integer
 *                       example: 1
 *                     amount:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       201:
 *         description: Order and order details created successfully

 * /order/orders/{id}:
 * 
 *   put:
 *     summary: Update an order
 *     tags:
 *       - Order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tableId:
 *                 type: string
 *                 example: "2"
 *               status:
 *                 type: string
 *                 example: "Completed"
 *     responses:
 *       204:
 *         description: Order updated successfully

 *   delete:
 *     summary: Delete an order
 *     tags:
 *       - Order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order to delete
 *     responses:
 *       200:
 *         description: Order deleted successfully
 */
