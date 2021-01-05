//all the import
const express = require('express')
const app = express()
//will be in port 4000
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');
//enable get, post,put,delete,option
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static',express.static(path.join(__dirname, 'build//static')));

//bodyparser 
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())
//path connect to mongodb
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.abnid.mongodb.net/songs?retryWrites=true&w=majority';
//mongoose connect to database: mongodb
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;
//declare variables
var songSchema = new Schema({
    title:String,
    artist:String,
    songImg:String,
    year:String,
    webUrl:String
});
// define variable song
var SongModel = mongoose.model("song", songSchema);

app.get('/api/songs', (req,res)=> {

SongModel.find((err, data) =>{
    res.json(data);
})

})
//get to find the id *for delete, update,etc.*
app.get('/api/songs/:id', (req,res)=>{
    console.log(req.params.id);

    SongModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

//find id and delete 
app.delete('/api/songs/:id',(req,res)=>{
    console.log("Delete Song: " + req.params.id);

    SongModel.findByIdAndDelete(req.params.id,(err,data)=>{
        res.send(data);
    })
})
//find id and update
app.put('/api/songs/:id', (req,res)=>{
    console.log("Update song: "+req.params.id);
    console.log(req.body);

    SongModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
        (err,data)=>{
            res.send(data);
        })

})
//post for update the variable
app.post('/api/songs', (req,res) =>{
    console.log('Song Recieved!');
    console.log(req.body.title);
    console.log(req.body.artist);
    console.log(req.body.songImg);
    console.log(req.body.year);
    console.log(req.body.webUrl);
    

    SongModel.create({
        title:req.body.title,
        artist:req.body.artist,
        songImg:req.body.songImg,
        year:req.body.year,
        webUrl:req.body.webUrl
    })

    res.send('Item Added');
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})