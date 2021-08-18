const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
const msg = {
    to: email,
    from: 'satheeshrockzzz@gmail.com',
    subject: 'Thanks for Joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
}   
sgMail.send(msg).then(() => {
    console.log('Message sent')
}).catch((error) => {
    console.log(error.response.body.errors[0].message)
    // console.log(error.response.body)
})
}

const sendCancellationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'satheeshrockzzz@gmail.com',
        subject: 'Sorry to see you go!',
        text:`Goodbye, ${name}. I hope to see you back sometime later.`
    }).then(() => {
        console.log('Message Successfully sent')
    }).catch((error) => {
        console.log(error.response.body.errors[0].message)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}


