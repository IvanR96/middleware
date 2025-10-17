import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res) =>{
  let street = req.body.street;
  let pet = req.body.pet;

  console.log(`The street name is ${street} and the pet name is ${pet}!`);
});
app.listen(port, () =>{
  console.log(`Server running on port ${port}`);
});