import nodemailer from 'nodemailer'


const mail = (randomOTP,Useremail) => {
    const transporter = nodemailer.createTransport({
        host: "https://password-reset-task01.onrender.com",
        port:"https://password-reset-task01.onrender.com",
        auth: {
            user:"pottersamplemail@gmail.com",
            pass:"Rahul@123"
        },
        tls:{
            rejectUnauthorized:true
        }
    
    })
    
    const messagesubject = "Reset Your Password"
    const mailtext = `Your OTP - ${randomOTP}`
    
    const info = {
    from:"pottersamplemail@gmail.com",
    to:Useremail,
    subject:messagesubject,
    text:mailtext
    }
    
    transporter.sendMail(info,(err)=>{
    if(err){
        console.log("mail error ",err)
    }else{
        console.log("email has sent")
    }
    })
}

export default mail;
