const express = require('express');
const colors = require("colors");
require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./congiq/db')
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routers/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
