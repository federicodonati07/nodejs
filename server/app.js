//  requirements  //
let express = require("express")
const path = require("path")

//  variables  //
let app = express()


//  main app requests  //

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "view/index.html"))
})


//  bind app (express) server on port: 3000  //
app.listen(3000, ()=>{
    console.log("listening: [3000]")
})