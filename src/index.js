const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

const authRouter = require('./routes/auth.route');
const accountRouter = require('./routes/account.route');
const messageRouter = require('./routes/message.route');
const conversationRouter = require('./routes/conversation.route');
const crawlDataRouter = require('./routes/crawl.route')
const swaggerSpec = require('./utils/swagger');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/accounts', accountRouter);
app.use('/messages', messageRouter);
app.use('/conversations', conversationRouter);
app.use('/crawl-data', crawlDataRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000/');
});
