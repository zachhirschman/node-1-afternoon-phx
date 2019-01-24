const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3001
const cC = require("./controllers/messages_controller")
app.use(bodyParser.json())
app.post("/api/messages", cC.create)
app.get("/api/messages", cC.read)
app.put("/api/messages/:id", cC.update)
app.delete("/api/messages/:id", cC.delete)

app.use(express.static(__dirname + "/../public/build"));

app.listen(port, () =>{console.log(`listening on ${port}.`)})
