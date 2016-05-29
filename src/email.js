var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.126.com',
    auth: {
        user: 'xxx_cn@126.com',
        pass: 'kysdxxxx'
    }
});


var mailOptions = {
    to: user.email,
    subject: '欢迎',
    text: 'welcome ~~~~',
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
})