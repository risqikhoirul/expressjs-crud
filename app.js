const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const host = "localhost";
//
//
app.use(bodyParser.urlencoded({ extended: true }));

//views engine ejs
app.set("view engine", "ejs");
//public express static
app.use(express.static("public"));
//mysql
const db = mysql.createConnection({
  host: "localhost",
  database: "name",
  user: "root",
  password: "",
});

//tanpa db
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.get("/update/:id", (req, res) => {
  let id = req.params.id;
  res.render("update", { id, title: "Edit Portofolio" });
});

//use db
app.get("/portofolio", (req, res) => {
  const sql = "SELECT * FROM portofolio";
  db.query(sql, (err, result) => {
    const porto = JSON.parse(JSON.stringify(result));

    res.render("portofolio", { porto, title: "Portofolio" });
  });
});

//create add
app.post("/add", (req, res) => {
  const insertSql = `INSERT INTO portofolio (nama, link) VALUES ('${req.body.nama}','${req.body.link}')`;
  db.query(insertSql, (err, result) => {
    if (err) throw err;
    res.redirect("/portofolio");
  });
});

//update edit
app.post("/edit", (req, res) => {
  // res.render("update", { title: "Edit Portofolio" });
  const updateSql = `UPDATE portofolio
    SET nama = '${req.body.nama}', link= '${req.body.link}'
    WHERE no = ${req.body.no};`;
  db.query(updateSql, (err, result) => {
    if (err) throw err;
    res.redirect("/portofolio");
  });
});

//delete
app.post("/delete", (req, res) => {
  const deleteSql = `DELETE FROM portofolio WHERE no='${req.body.no}';`;
  db.query(deleteSql, (err, result) => {
    if (err) throw err;
    res.redirect("/portofolio");
  });
});

// error
app.use((req, res, next) => {
  res.status(404).send(" 404 not found. Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 Something broke!");
});
//listen
app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`);
});
