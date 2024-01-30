const express = require('express');
require('dotenv').config()
const port = 5000;

const app = express();

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})