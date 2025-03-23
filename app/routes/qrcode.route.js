const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const FoodTable = require('../models/FoodTable');
const TableURL = process.env.TABLE_URL || 'http://localhost:3000/table/';


router.get('/table/:id', async (req, res) => {
  try {
    const url = await FoodTable.findByPk(req.params.id);
    const qrCodeImage = await QRCode.toDataURL(`${TableURL}${url.id}`);
    res.send({qrcode:`${qrCodeImage}`});
  } catch (err) {
    res.status(500).json({ error: "create qr error" });
  }
});


module.exports = router;