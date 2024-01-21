const express = require('express')
const app = express();
const path = require('path');
const hbs = require('hbs');
const Register = require("./models/registers");

require('./db/conn')


const port = process.env.PORT || 3000


const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine','hbs');
app.set('views',template_path)
hbs.registerPartials(partial_path)

app.get('/',(req,res) => {
    res.render("index");
})

// create a new document 
app.post("/register", async(req,res) => {
    try{
        // res.send(req.body.firstname);
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        // console.log("hii");
        // console.log(password);
        // console.log(cpassword);

        if(password === cpassword){
            const registerEmployee  = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                gender : req.body.gender,
                phone : req.body.phone,
                // age : req.body.age,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            })
            console.log(req.body.phone);
            console.log(req.body.gender);
            const registered = await registerEmployee.save();
            res.status(201).render("login")
        }

        else{

            res.send("passwords are not matching");
        }
    }
    catch(err){
        // console.log(err);
        res.status(400).send(err);
    }
})

app.get('/',(req,res) => {
    res.send('Hii! I am Komal')
})

app.listen(port , () => {
    console.log(`Server is running at port number ${port}`)
})