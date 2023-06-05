import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const config = dotenv.config();

const handler = (req, res) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    fetch('')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: email,
            pass: password,
        },
        secure: true,
    });

    const mailData = {
        from: email,
        to: req.body.email,
        subject: "Newsletter Thiago's Site",
        text: "Mensagem de teste  do meu site.",
        html: `<div style="background-color: blue;color: white">Bem vindo!!!</div>`
    }

    if (req.method === 'POST') {
        console.log(req.body.email);
        transporter.sendMail(mailData, (err, info) => {
            if(err) {
                console.log(err);
            }else {
                console.log(info);
            }
        })
    }
}

export default handler;