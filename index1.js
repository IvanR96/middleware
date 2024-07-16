import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) =>{
  console.log(req.body);
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
