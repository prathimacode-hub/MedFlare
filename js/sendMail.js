function sendEmail(recvEmail, data) {
    console.log(recvEmail, data);

    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "YOUR USERNAME HERE",
        Password: "YOUR PASSWD HERE",
        To: recvEmail,
        From: "sender email",
        Subject: "Test email",
        Body: data
    }).then(
        message => alert(message)
    );
}