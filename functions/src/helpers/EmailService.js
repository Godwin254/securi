const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }

    //send email via sendgrid
    async sendEmail(toEmail, subject, content) {
      const msg = {
            to: toEmail,
            from: process.env.SENDGRID_SENDER_EMAIL, 
            subject: subject,
            text: content,
      };

      console.log(msg)

      try {
            await sgMail.send(msg);
            console.log('Email sent successfully');
            return { success: true, message: 'Email sent successfully' };
      } catch (error) {
            console.error('Error sending email:', error.response.body.errors);
            return { success: false, message: 'Email sending failed' };
      }
    }

    //send via nodemailer
    async sendEmailV2 (toEmail, subject, content){
      try{
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                service: process.env.SMTP_SERVICE,
                post: Number(process.env.SMTP_PORT),
                secure: Boolean(process.env.SMTP_SECURE),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            });

            const accessLogs = [{"log1": 1},{"log1": 1}]
    
            const mailOptions = {
                from: `"SECURI" <${process.env.SMTP_USER}>`,
                to: toEmail,
                subject: subject,
                text: content,
                //html: `<p>Here are your access logs:</p><pre>${JSON.stringify(accessLogs, null, 2)}</pre>`,
            }
    
            transporter.sendMail(mailOptions, (err, info) => {
                  if (err) {
                        console.log("Error occured while sending email: ", err);
                  }
                  console.log(`Email sent successfullly!`, info);
            });
            
            return { success: true, message: 'Email sent successfully' };
        }catch(err){
            console.log("Email not sent: ", err);
            return { success: false, message: 'Email sending failed' };
        }
    }
}

module.exports = EmailService;