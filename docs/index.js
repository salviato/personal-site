const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: '/views'
}));
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Views
app.get('/', (req, res) => {
    res.render('en');
});
app.get('/pt', (req, res) => {
    res.render('pt');
});
app.post('/send', (req, res) => sendMail('send', req, res));
app.post('/enviar', (req, res) => sendMail('enviar', req, res));


// Send Form
async function sendMail(url, req, res) {
    const output = `
        <p>You have a new contact request</p>
        <h3> Contact Details</h3>
        <ul>
            <li> Name: ${req.body.name}</li>
            <li> Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'lolita.dare@ethereal.email',
            pass: 'wVWmAs8VZRpmsQx2ag'
        }
    //    tls:{
    //        rejectUnauthorized: false
    //    }
    });

    let info = await transporter.sendMail({
        from: '"WebSite Contact" <thingao@hotmail.com>',
        to: "tgoloureiro@gmail.com", // list of receivers
        subject: "Node Contact Request",
        text: "Text", // plain text body
        html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
    if(url == 'send') {
        res.render('en', {msg: 'Email has been sent'});    
    }
    else {
        res.render('pt', {msg: 'Email enviado'});    
    };
}

//app.listen(3000, () => console.log('server started'));