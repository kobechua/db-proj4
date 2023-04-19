require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors())

app.use(express.json());

//LAWYER OPERATIONS

//show all lawyers
app.get("/api/ver1/lawyer", async (req, res) => {
    try{
        const qresult = await db.query("select * from lawyer");
        // console.log(qresult);
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
    // console.log(req.params.id);
    
    try{
        const qresult = await db.query(`select * from lawyer where l_lawyerid = $1`, [req.params.id])
        res.status(200).json({
            status : "success",
            data : {
                lawyer : qresult.rows[0]
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
        // console.log(qresult);
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
        const qresult = await db.query("update lawyer set l_firstname = $1, l_lastname = $2, l_phonenumber = $4, l_address = $5, l_dob = $6, l_ssn = $7, l_description = $8 where l_lawyerid = $3", [req.body.l_firstname, req.body.l_lastname, req.body.l_lawyerid, req.body.l_phonenumber, req.body.l_address, req.body.l_dob, req.body.l_ssn, req.body.l_description])
        // console.log(req.params.id);
        // console.log(qresult);
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

//show all client
app.get("/api/ver1/client", async (req, res) => {
    try{
        const qresult = await db.query("select * from client");
        // console.log(qresult);
        res.status(200).json({
            status: "success",
            results: qresult.rows.length,
            data: {
                client: qresult.rows,
            },
            
        });
    } catch(err) {
        console.log(err)
    }


});

//get a client
app.get("/api/ver1/client/:id", async (req, res) => {
    // console.log(req.params.id);
    
    try{
        const qresult = await db.query(`select * from client where cl_clientid = $1`, [req.params.id])
        res.status(200).json({
            status : "success",
            data : {
                client : qresult.rows[0]
            }
        });
        // console.log(qresult.rows[0]);
    } catch(err) {
        console.log(err);
    }
    
});

//create a client
app.post("/api/ver1/client", async (req, res) => {
    try {
        const qresult = await db.query("insert into client (cl_firstname, cl_lastname, cl_clientid, cl_phonenumber, cl_address, cl_dob, cl_ssn, cl_description) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *", [req.body.cl_firstname, req.body.cl_lastname, req.body.cl_clientid, req.body.cl_phonenumber, req.body.cl_address, req.body.cl_dob, req.body.cl_ssn, req.body.cl_description])
        // console.log(qresult);
        res.status(200).json({
            status : "success",
            data : {
                client : qresult.rows[0]
        }
    })    
    }   catch(err) {
        console.log(err)
    }
    
});


//update a client
app.put("/api/ver1/client/:id", async (req, res) => {

    try{
        const qresult = await db.query("update client set cl_firstname = $1, cl_lastname = $2, cl_phonenumber = $4, cl_address = $5, cl_dob = $6, cl_ssn = $7, cl_description = $8 where cl_clientid = $3", [req.body.cl_firstname, req.body.cl_lastname, req.body.cl_clientid, req.body.cl_phonenumber, req.body.cl_address, req.body.cl_dob, req.body.cl_ssn, req.body.cl_description])
        // console.log(req.params.id);
        // console.log(qresult);
        res.status(200).json({
        status : "success",
            data : {
                client : qresult.rows[0]
            }
        });

    } catch(err) {
        console.log(err)
    }

})

//delete a client

app.delete("/api/ver1/client/:id", async (req,res) => {
    try {
        const qresult = await db.query("delete from client where cl_clientid = $1", [req.params.id])
        res.status(200).json({
            status: "success",
        });
    } catch(err) {
        console.log(err)
    }

});

//CASE OPERATIONS

//select all cases
app.get("/api/ver1/cases", async (req, res) => {
    try{
        const qresult = await db.query("select * from cases");
        console.log(qresult);
        res.status(200).json({
            status: "success",
            results: qresult.rows.length,
            data: {
                cases: qresult.rows,
            },
            
        });
    } catch(err) {
        console.log(err)
    }


});

//get a case
app.get("/api/ver1/cases/:id", async (req, res) => {
    console.log(req.params.id);
    
    try{
        const qresult = await db.query(`select * from cases where cs_casenumber = $1`, [req.params.id])
        res.status(200).json({
            status : "success",
            data : {
                cases : qresult.rows[0]
            }
        });
        // console.log(qresult.rows[0]);
    } catch(err) {
        console.log(err);
    }
    
});

//create a case
app.post("/api/ver1/cases", async (req, res) => {
    try {
        const qresult = await db.query("insert into cases (cs_lawyerid, cs_clientid, cs_casenumber, cs_courtid, cs_date, cs_description) values ($1,$2,$3,$4,$5,$6) returning *", [req.body.cs_lawyerid, req.body.cs_clientid, req.body.cs_casenumber, req.body.cs_courtid, req.body.cs_date, req.body.cs_description])
        console.log(qresult);
        res.status(200).json({
            status : "success",
            data : {
                cases : qresult.rows[0]
        }
    })    
    }   catch(err) {
        console.log(err)
    }
    
});


//update a case
app.put("/api/ver1/cases/:id", async (req, res) => {

    try{
        const qresult = await db.query("update cases set cs_lawyerid = $1, cs_clientid = $2, cs_courtid = $4, cs_date = $5, cs_description = $6 where cs_casenumber = $3", [req.body.cs_lawyerid, req.body.cs_clientid, req.body.cs_casenumber, req.body.cs_courtid, req.body.cs_date, req.body.cs_description])
        console.log(req.params.id);
        console.log(qresult);
        res.status(200).json({
        status : "success",
            data : {
                cases : qresult.rows[0]
            }
        });

    } catch(err) {
        console.log(err)
    }

})

//delete a case

app.delete("/api/ver1/cases/:id", async (req,res) => {
    try {
        const qresult = await db.query("delete from cases where cs_casenumber = $1", [req.params.id])
        res.status(200).json({
            status: "success",
        });
    } catch(err) {
        console.log(err)
    }

});

//COURT OPERATIONS

//select all court
app.get("/api/ver1/court", async (req, res) => {
    try{
        const qresult = await db.query("select * from court");
        console.log(qresult);
        res.status(200).json({
            status: "success",
            results: qresult.rows.length,
            data: {
                court: qresult.rows,
            },
            
        });
    } catch(err) {
        console.log(err)
    }


});

//get a court
app.get("/api/ver1/court/:id", async (req, res) => {
    console.log(req.params.id);
    
    try{
        const qresult = await db.query(`select * from court where cr_courtid = $1`, [req.params.id])
        res.status(200).json({
            status : "success",
            data : {
                court : qresult.rows[0]
            }
        });
        // console.log(qresult.rows[0]);
    } catch(err) {
        console.log(err);
    }
    
});

//create a court
app.post("/api/ver1/court", async (req, res) => {
    try {
        const qresult = await db.query("insert into court (cr_courtname, cr_courtstate, cr_courtid, cr_zipcode) values ($1,$2,$3,$4) returning *", [req.body.cr_courtname, req.body.cr_courtstate, req.body.cr_courtid, req.body.cr_zipcode])
        console.log(qresult);
        res.status(200).json({
            status : "success",
            data : {
                court : qresult.rows[0]
        }
    })    
    }   catch(err) {
        console.log(err)
    }
    
});


//update a court
app.put("/api/ver1/court/:id", async (req, res) => {

    try{
        const qresult = await db.query("update court set cr_courtname = $1, cr_courtstate = $2, cr_zipcode = $4 where cr_courtid = $3", [req.body.cr_courtname, req.body.cr_courtstate, req.body.cr_courtid, req.body.cr_zipcode])
        console.log(req.params.id);
        console.log(qresult);
        res.status(200).json({
        status : "success",
            data : {
                court : qresult.rows[0]
            }
        });

    } catch(err) {
        console.log(err)
    }

})

//delete a court

app.delete("/api/ver1/court/:id", async (req,res) => {
    try {
        const qresult = await db.query("delete from court where cr_courtid = $1", [req.params.id])
        res.status(200).json({
            status: "success",
        });
    } catch(err) {
        console.log(err)
    }

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

