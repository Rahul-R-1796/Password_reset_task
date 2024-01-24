import nodemailer from 'nodemailer';

const mail = (randomOTP, Useremail) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
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

    transporter.sendMail(info, (err, info) => {
        if (err) {
            console.log("Mail error: ", err);
        } else {
            console.log("Email has been sent: ", info.response);
        }
    });
};

export default mail;
