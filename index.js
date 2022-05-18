const express = require("express");
const app = express();
const port = 3000;


app.use(express.json())
app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});