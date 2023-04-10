require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

app.use(express.json());

//LAWYER OPERATIONS

//show all lawyers
app.get("/api/ver1/lawyer", async (req, res) => {
    try{
        const qresult = await db.query("SELECT * FROM LAWYER");
        console.log(qresult);
        res.status(200).json({
            status: "success",
            results: qresult.rows.length,
            data: {
                lawyer: qresult.rows,
            },
            
        });
    } catch(err) {
        console.log(err)
    }


});

//get a lawyer
app.get("/api/ver1/lawyer/:id", async (req, res) => {
    console.log(req.params.id);
    
    try{
        const qresult = await db.query(`SELECT * FROM LAWYER WHERE L_LAWYERID = $1`, [req.params.id])
        res.status(200).json({
            status : "success",
            data : {
                lawyers : qresult.rows[0]
            }
        });
        // console.log(qresult.rows[0]);
    } catch(err) {
        console.log(err);
    }
    
});

//create a lawyer
app.post("/api/ver1/lawyer", async (req, res) => {
    try {
        const qresult = await db.query("insert into lawyer (l_firstname, l_lastname, l_lawyerid, l_phonenumber, l_address, l_dob, l_ssn, l_description) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *", [req.body.l_firstname, req.body.l_lastname, req.body.l_lawyerid, req.body.l_phonenumber, req.body.l_address, req.body.l_dob, req.body.l_ssn, req.body.l_description])
        console.log(qresult);
        res.status(200).json({
            status : "success",
            data : {
                lawyer : qresult.rows[0]
        }
    })    
    }   catch(err) {
        console.log(err)
    }
    
});


//update a lawyer
app.put("/api/ver1/lawyer/:id", async (req, res) => {

    try{
        const qresult = await db.query("UPDATE lawyer SET l_firstname = $1, l_lastname = $2, l_phonenumber = $4, l_address = $5, l_dob = $6, l_ssn = $7, l_description = $8 where l_lawyerid = $3", [req.body.l_firstname, req.body.l_lastname, req.body.l_lawyerid, req.body.l_phonenumber, req.body.l_address, req.body.l_dob, req.body.l_ssn, req.body.l_description])
        console.log(req.params.id);
        console.log(qresult);
        res.status(200).json({
        status : "success",
            data : {
                lawyer : qresult.rows[0]
            }
        });

    } catch(err) {
        console.log(err)
    }

})

//delete a lawyer

app.delete("/api/ver1/lawyer/:id", async (req,res) => {
    try {
        const qresult = await db.query("delete from lawyer where l_lawyerid = $1", [req.params.id])
        res.status(200).json({
            status: "success",
        });
    } catch(err) {
        console.log(err)
    }

});



//CLIENT OPERATIONS




const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

