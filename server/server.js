require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

app.use(express.json());

//show all lawyers
app.get("/api/ver1/lawyer", (req, res) => {

    db.query("SELECT * FROM LAWYERS;")
    res.status(200).json({
        status: "success",
        data: {
            lawyer: ["John Smith", "Jane Doe"]
        }
        
    });

});

//get a lawyer
app.get("/api/ver1/lawyer/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status : "success",
        data : {
            name : "Jane Doe"
        }
    });
});

//create a lawyer
app.post("/api/ver1/lawyer", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        status : "success",
        data : {
            name : "Jane Doe"
        }
    });
});

//update a lawyer
app.put("/api/ver1/lawyer/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
    status : "success",
        data : {
            name : "Jane Doe"
        }
    });
})

//delete a lawyer

app.delete("/api/ver1/lawyer/:id", (req,res) => {
    res.status(200).json({
        status: "success",
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

