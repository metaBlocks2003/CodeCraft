import express from "express"
import bodyParser from "body-parser";
import qr from "qr-image"
import inquirer from "inquirer";
import fs from "fs"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
var port = 3000

app.use(bodyParser.urlencoded({ extended: false }))


app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get('/', (req, res)=>{
    res.render("index.ejs")
})

app.post("/generate", (req,res)=>{
    const userInp = req.body["txt"] 
    var qr_png = qr.image(userInp);
    qr_png.pipe(fs.createWriteStream(`public/qr.png`));
    console.log(userInp)
  
})
app.get('/Generate', (req, res)=>{
  res.render("gen.ejs")
})
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
