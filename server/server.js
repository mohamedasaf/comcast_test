const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }))

app.get("/getallmarketssummaries", (req, res) => {
    fetch("https://api.bittrex.com/v3/markets/summaries").then((res) => res.json()).then((data) => {
        res.send(data)
    })
})

app.get("/getmarketsummary/:query", (req, res) => {
    var searchkey = req.params.query;        
    fetch(`https://api.bittrex.com/v3/markets/${searchkey}/summary`).then((res) => res.json()).then((data) => {        
        res.send(data)
    })
})

const port = 3001;
app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
