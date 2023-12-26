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

// const questions = 
//   {
//     message: 'Type what you want: ',
//     name: "name",
//     }
// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     const userInp = answers.name
//     var qr_png = qr.image(userInp);
//     qr_png.pipe(fs.createWriteStream(`public/qr.png`));
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });



app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get('/', (req, res)=>{
    res.render("index.ejs")
})

app.post("/generate", (req,res)=>{
//   const questions = 
//   {
//     type: 'input',
//     message: 'Type what you want: ',
//     name: 'txt',
//     }
// inquirer
//   .prompt(questions)
//   .then(() => {
    const userInp = req.body["txt"] 
    var qr_png = qr.image(userInp);
    qr_png.pipe(fs.createWriteStream(`public/qr.png`));
    console.log(userInp)
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });


  // const gen = req.body["txt"]
  // console.log(gen)
})
app.get('/Generate', (req, res)=>{
  res.render("gen.ejs")
})
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
