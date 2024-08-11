// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
require('./DB/mongoDb');
const Otp = require('./Model/emailModel');

const app = express();
app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();


app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  try {
   
    await Otp.findOneAndUpdate({ email }, { otp }, { upsert: true });

    await transporter.sendMail({
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`
    });

    res.status(200).send('OTP sent');
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).send('Error sending OTP');
  }
});


app.post('/api/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await Otp.findOne({ email, otp });

    if (otpRecord) {
      
      res.status(200).json({ success: true });
    } else {
      
      res.status(400).json({ success: false });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).send('Error verifying OTP');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
