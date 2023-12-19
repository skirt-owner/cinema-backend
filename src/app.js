const express = require('express');

const app = express();

const serverPort = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});