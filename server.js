const express = require("express")
var axios = require("axios").default;
const path = require("path");
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    console.log(path.join(__dirname, 'public'));
    return res.sendFile('public/index.html', { root : __dirname});
})

app.get('/searchword', (req, res) => {
    // res.send('Hello World!')
    console.log(req.query)

    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: { entry:req.query.entry },
        headers: {
            'X-RapidAPI-Key': 'e3356e3a27mshe4f65aab8808fcbp1d83a4jsnbeb8933967c3',
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });

   
   
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} = http://localhost:3000`)
})