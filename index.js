var mongodb = require('mongodb')
var express = require('express')
var cor = require('cors')
//var bodyParser = require('body-parser')

var mangoclient = mongodb.MongoClient
var url = "mongodb+srv://chiranjeevi:123ChirU321@quizusers.tg3kp.mongodb.net/?retryWrites=true&w=majority"

app=express()
app.use(cor())
//app.use(bodyParser())
/*
app.post('/ins',(req,res)=>{
    MongoClient.connect(url,(err,cluster)=>{
        if(err){
            res.send(err)
        }
        else{
            var name = req.body.name
            var phone = req.body.phone
            var email = req.body.email
            var password = req.body.password
            var data ={
                name:name,
                phone:phone,
                email:email,
                password:password
            }
            var dbobj = cluster.db('UserData')
            dbobj.collection('Chiranjeevi').insertOne(data,(err,suc)=>{
                if(err){
                    res.send("data not inserted")
                }
                else{
                    res.send(suc)
                }
            })
        }
    })
})
*/
app.get("/data",(req,res) =>{  //http://localhost:9009/data
    mangoclient.connect(url,function(err,clus){
        if (err){
            res.send("Error connecting to data base")
        }
        else{
            var dbref = clus.db("QuestionPapers")
            var item = dbref.collection('Test1')
            item.find().toArray((error,result)=>{
                if (error){
                    res.send("error")
                }
                else{
                    console.log(result)
                    res.send(result)
                }
            })
        }
    })
})

app.listen(9009,function(){
    console.log("started")
})