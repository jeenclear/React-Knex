const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();
const port = 8083;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use(express.json());
app.use("/api", router);
//app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});