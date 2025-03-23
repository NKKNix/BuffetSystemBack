const express = require('express');
const sequelize = require('./app/config/database');
const MenuRoute = require('./app/routes/menu.route')
const TableRoute = require('./app/routes/foodtable.route')
const OrderRoute = require('./app/routes/order.route')
const genQR = require('./app/routes/qrcode.route')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./app/config/swagger'); // <-- ตรวจว่า path ตรงกับไฟล์
const cors = require('cors');


app.use(cors()); 
app.use(express.json());
app.use('/menu',MenuRoute)
app.use('/table',TableRoute)
app.use('/order',OrderRoute)
app.use('/qrcode',genQR)

app.get('/', (_, res) => {
  res.send('Welcome to Buffet System api!')
})


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to Supabase PostgreSQL database has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  }
)
  