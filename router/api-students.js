const router = require('express').Router();
const conn = require('../connection');

router.post('/add', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let mno = req.body.mno
 
    let formErrors = [];
    if(name == "") {
        formErrors.push("Name must be added")
    }
    if(email == "") {
        formErrors.push("Email must be added")
    }
    if(mno == "") {
        formErrors.push("Mobile Number must be added")
    }

    let objResponse = {
        "status" : 200,
        "message": ""
    }

    if(formErrors.length == 0) {
        let sql = "INSERT INTO students SET name = ?, email = ?, mno = ?, created_at = now()";    
        conn.query(sql, [name, email, mno], (err, result) => {
            if(err) throw err
            objResponse.status = "200"
            objResponse.message = "Good"
            res.send(objResponse)
        })
    } else {
        // console.log(res);
        objResponse.status = "404"
        objResponse.message = formErrors
        // console.log(objResponse)
        res.send(objResponse)
    }

});

router.get('/', (req, res) => {
    let sql = `SELECT * FROM students ORDER BY id DESC`;
    conn.query(sql, (err, data) => {
        res.send({Students: data});
    })
})

router.post('/edit', (req, res) => {
    let formData = req.body 
    let id      = formData.id
    let name    = formData.name
    let email   = formData.email
    let mno     = formData.mno
 
    let formErrors = [];
    if(name == "") {
        formErrors.push("Name must be added")
    }
    if(email == "") {
        formErrors.push("Email must be added")
    }
    if(mno == "") {
        formErrors.push("Mobile Number must be added")
    }

    let objResponse = {
        "status" : 200,
        "message": ""
    }

    if(formErrors.length == 0) {
        let sql = `UPDATE students SET name = ?, email = ?, mno = ? WHERE id = ?`;
        conn.query(sql, [name, email, mno, id], (err, result) => {
            if(err) throw err
            objResponse.status = "200"
            objResponse.message = "Good"
        })
    } else {
        objResponse.status = "404"
        objResponse.message = formErrors
    }
    res.send(objResponse)
})

router.post('/delete', (req, res) => {
    let id = req.body.id
    let sql = `DELETE FROM students WHERE id = ?`;
    
    let objResponse = {
        "status" : 200,
        "message": ""
    }
    
    conn.query(sql, [id], (err, result) => {
        if(err) throw err
        objResponse.status = "200"
        objResponse.message = "Good"
        res.send(objResponse);
    });
});

module.exports = router