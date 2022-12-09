const mysql = require('mysql')

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
});

conn.connect((err, res) => {
    if(err) throw err
    console.log(`Database Connected Successfully ...`)
})

module.exports = conn