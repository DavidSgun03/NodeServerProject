const express = require('express');
const app = express();//calling express as a function

app.set('view engine', 'ejs')
app.use(express.static("public"));
app.listen(4040);