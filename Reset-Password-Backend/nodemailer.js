import nodemailer from 'nodemailer';

const mail = (randomOTP, Useremail) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.example.com", // Replace with the actual SMTP server host
        port: 587, // Replace with the actual port
        secure: false, // use TLS
        auth: {
            user: "pottersamplemail@gmail.com",
            pass: "Rahul@123"
        }
    });

    const messagesubject = "Reset Your Password";
    const mailtext = `Your OTP - ${randomOTP}`;

    const info = {
        from: "pottersamplemail@gmail.com",
        to: Useremail,
        subject: messagesubject,
        text: mailtext
    };

    transporter.sendMail(info, (err) => {
        if (err) {
            console.log("Mail error: ", err);
        } else {
            console.log("Email has been sent");
        }
    });
};

export default mail;
