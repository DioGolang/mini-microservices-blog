const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const postRoutes = require('./presentation/routes/post.routes')
const errorHandler = require('./application/middlewares/error.handler')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ data: 'hello word!' });
});
app.use('/posts', postRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`running in http://localhost:${port}`);
});
