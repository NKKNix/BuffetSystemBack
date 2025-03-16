const express = require('express');
const sequelize = require('./app/config/database');
const MenuRoute = require('./app/routes/menu.route')
const TableRoute = require('./app/routes/foodtable.route')
const OrderRoute = require('./app/routes/order.route')
const genQR = require('./app/routes/qrcode.route')
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors()); 
app.use(express.json());
app.use('/menu',MenuRoute)
app.use('/table',TableRoute)
app.use('/order',OrderRoute)
app.use('/qrcode',genQR)

// Sync database and start server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

 
  