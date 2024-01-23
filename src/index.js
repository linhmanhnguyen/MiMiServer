const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const messageRouter = require('./routes/chat.route');
const conversationRouter = require('./routes/conversation.route');
const accountRouter = require('./routes/account.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/accounts', accountRouter);
app.use('/messages', messageRouter);
app.use('/conversations', conversationRouter);

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000/');
});
