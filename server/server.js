const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/../client/public')));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})