const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const authRouter = require('./routes/auth.route');
const accountRouter = require('./routes/account.route');
const messageRouter = require('./routes/chat.route');
const conversationRouter = require('./routes/conversation.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/accounts', accountRouter);
app.use('/messages', messageRouter);
app.use('/conversations', conversationRouter);

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000/');
});
