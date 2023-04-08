require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use((req, res, next) => {
    res.status(404).json({
        "status": "failed"
    });

});

app.get("/api/ver1/lawyer", (req, res) => {
    res.json({
        status: "success",
        data: {
            lawyer: ["John Smith", "Jane Doe"]
        }
        
    });

});

app.get("/api/ver1/lawyer/:id", (req, res) => {
    console.log(req.params); 
});

app.post("/api/ver1/lawyer", (req, res) => {
    console.log(req);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

