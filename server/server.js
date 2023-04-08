require("dotenv").config();
const express = require("express");

const app = express();


app.get("/getLawyers", (req, res) => {
    res.json({
        status: "success",
        lawyer: "John Smith"
    });

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

