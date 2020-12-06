const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//The root app
let app = express();

//Find a free port to use
const port = process.env.PORT || 3000 ;

//Used to send the conformation mail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        //Uses this account to send the email, variables assigned using heroku config vars
        user : process.env.UserEmail,
        pass : process.env.UserPassword
    }
});

//Listen for requestion on the specified port
app.listen(port, (err) => {
    if(err) console.log("error starting server:"+err);
    else console.log("server started at port" + port);
});

//Body parser to obtain in Data of post in  redable format
app.use(bodyParser.json());
//Fix for urlencodere deprication
app.use(bodyParser.urlencoded({extended: false}));

//For static files
app.use(express.static(__dirname));
app.get('/', (req, res)=>{
    //Serve the registration file on a get request
    res.sendFile(path.join(__dirname,"registration.html"));
});

//Process the data sent from the registration page 
app.post("/", (req, res)=>{
    //Obtain the required variables of the form
    let ParentName = req.body.parentName;
    let ParentEmail = req.body.parentEmail;
    let ChildName = req.body.childName;
    let SlotDate = req.body.classDate;
    let SlotTime = req.body.classTime;

    //Form the mail
    const mailOptions = {
        from : "ikesh.temp@gmail.com",
        to : ""+ParentEmail,
        subject : "NotchUp Trial Class Booked Succesfully",
        text : "Dear "+ParentName+"\n"+ChildName+"'s class on "+SlotDate+" at "+ SlotTime +" has been succesfully booked.",
        html : ""
    }
    //Send the mail using the transported object
    transporter.sendMail(mailOptions, (err) => {
        if(err) console.log(err);
    });
    //respond with a "Check you email" page
    res.send("<h1>Wait for a conformation Mail<h1>");
});