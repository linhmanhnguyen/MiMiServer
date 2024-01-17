const express = require('express');
const bodyParser = require('body-parser');

// Import đúng cách: sử dụng require cho đối tượng kết nối cơ sở dữ liệu
const db = require('./configs/MySQLConnect');

const app = express();

const messageRouter = require('./routes/chat.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', messageRouter);

app.get('/messages', (req, res) => {
  // Sử dụng đối tượng kết nối cơ sở dữ liệu từ module MySQLConnect
  db.query('SELECT * FROM Messages', (error, results) => {
    if (error) {
      console.error('Lỗi truy vấn:', error);
      res.status(500).send('Lỗi server');
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000/`);
});
