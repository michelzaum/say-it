const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(routes);

app.listen(3030, () => console.log('Server started at port 3030'));