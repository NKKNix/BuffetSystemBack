const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const FoodTable = require('../models/FoodTable');
const TableURL = "http://127.0.0.1:3000/โต๊ะอาหาร/"

router.get('/generate-qrcode', async (req, res) => {
  try {
    const url = req.query.url || 'https://example.com';
    const qrCodeImage = await QRCode.toDataURL(url);
    res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
  } catch (err) {
    console.error('Error generating QR code:', err);
    res.status(500).send('Internal Server Error');
  }
  });

router.get('/table/:id', async (req, res) => {
  try {
    const url = await FoodTable.findByPk(req.params.id);
    const qrCodeImage = await QRCode.toDataURL(`${TableURL}${url.id}`);
    res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
  } catch (err) {
    res.status(500).json({ error: "create qr error" });
  }
});


module.exports = router;