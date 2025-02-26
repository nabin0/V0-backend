const express = require("express");
const app = express()


const PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
    res.send("Hello this is hoepage")
});

const start = async () => {
    try {
        app.listen(PORT, () =>{
            console.log("Connected To PORT Successfully.");
            
        })
    } catch (error) {
        console.log(error);
    }
}

start();