const express = require('express');
const app = express();

//Serve static files from "static" folder
app.use(express.static(__dirname + '/static'));

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});