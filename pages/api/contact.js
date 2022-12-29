import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const { email, fullname, subject, message } = req.body;
  try {
    await sendgrid.send({
      to: 'martin.krivda@kobchocen.cz', // Your email where you'll receive emails
      from: 'hello@martinkrivda.cz', // your website email address here
      subject: `[Lead from website] : ${subject}`,
      html: `<!DOCTYPE html">
        <html lang="cs">
        <head>
            <meta charset="utf-8">
  
            <title>New message from my website</title>
            <meta name="description" content="Message from website contact form">
            <meta name="author" content="Martin Křivda">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  
        </head>
  
        <body>
          <div>
                </div>
                <div>
                <h3>You've got a new mail from ${fullname}, their email is: ✉️${email} </h3>
                <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${message}</p>
                </div>
                </div>
        </body>
        </html>`,
    });
  } catch (error) {
    //console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
