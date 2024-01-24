
import nodemailer from 'nodemailer';

const transporter = 
    nodemailer.createTransport({
      service:'gmail',
        auth: {
  
    user: "pottersamplemail@gmail.com",
    pass: "blxb tjxu etql uspx",
  },
});

const mail = (otp, recipientEmail) => {
  const mailOptions = {
    from: "pottersamplemail@gmail.com",
    to: recipientEmail,
    subject: 'Password Reset OTP',
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Mail error', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export default mail;
