import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bandNameGenerator);


function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body.street + req.body.pet;
  console.log(bandName);
  next();

};

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) =>{
  res.send(`<h1> Your band name is:</h1> <h2>${bandName}! Cool band name :)</h2>`)
});

app.listen(port, () =>{
  console.log(`Server running on port ${port}...`);
});
