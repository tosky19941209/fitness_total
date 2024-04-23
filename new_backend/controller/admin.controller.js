const getToken = require("../other/gettoken")
const verifyToken = require("../other/verifytoken")
const ExtractJwt = require("passport-jwt").ExtractJwt

// Function to send an email
const nodemailer = require('nodemailer');

// Function to send an email
function sendEmail(fromEmail, toEmail, subject, text, callback) {
  // Create a Nodemailer transporter using Gmail
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'felixeliass@gmail.com',
      pass: 'tlkwjdqhd' // Enter your Gmail account password here
    }
  });

  // Set up the email message
  let mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    text: text
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log('Email sent: ' + info.response);
      callback(null, info.response);
    }
  });
}

exports.test = (req, res) => {
  const fromEmail = 'felixeliass1994@gmail.com';
  const toEmail = 'warrytomas51@gmail.com';
  const subject = 'Test Email';
  const text = 'Hello, this is a test email!';

  sendEmail(fromEmail, toEmail, subject, text, (err, message) => {
    if (err) {
      res.status(500).send('Error sending email');
    } else {
      res.send('Email sent successfully');
    }
  });
};


exports.signup = async (req, res) => {
    const user = require('../model/users')
    const newData = req.body
    const { username, password, email, height, weight } = newData
    user.findOne({ email })
        .then((response) => {
            if (response) {
                res.send({
                    message: "User is already existed"
                })
            } else {
                const newUser = new user(newData)
                newUser.save()
                    .then(() => {
                        res.send({
                            message: "success"
                        })
                    })
                    .catch((err) => {
                        console.log("err: ", err)
                    })
            }
        })
}

exports.signupUpdate = async (req, res) => {
    const user = require('../model/users')
    const header = req.body.header
    const updateData = req.body.updateData
    const { email, password } = header
    user.findOneAndUpdate({
        email: email,
        password: password
    }, updateData, { new: true })
        .then((response) => {
            if (response) {
                res.send({
                    message: "success"
                })
            } else {
                res.send({
                    message: "Email or password is not correct."
                })
            }
        })
        .catch((err) => {
            console.log(err)
        });
}

exports.signin = async (req, res) => {
    console.log("Signin")
    const users = require('../model/users')
    const newData = req.query
    const { email, password } = newData
    users.findOne({ email, password })
        .then((user) => {
            if (user) {
                res.json({
                    name: user.username,
                    token: getToken(user),
                    message: "success"
                })
            } else {
                res.json({
                    name: '',
                    message: "failed"
                })
            }
        })
}

exports.signinWithToken = async (req, res) => {
    res.send(req.body)
}