const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotevn").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const port = process.env.PORT;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/" ,(req ,res) =>{
    res.send("Hellow World");
});
                      //BACK END WORK SIMPLE PASSING TOKEN AND REQUESTS
app.post("/pay" , async(req ,res)=>{
    console.log(req.body.token)
    await stripe.charges.create({
        source : req.body.token,id,
        amount :req.body.amount,
        currency : "usd",

    });
});

app.listen(port,()=>{
    console.log(`server id running on Port${port}`);
});