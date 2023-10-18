       
<script scr="https://smtpjs.com/v3/smtp.js">
  
  function sendEmail(){
      Email.send({
Host : "smtp.gmail.com",
Username : "ezhilvannanm2020csbs@gmail.com",
Password : "Ezhilvannan792002",
To : 'ezhilvannanm202csbs@gmail.com',
From : document.getElementById("email").value,
Subject : "New Contact Form Enquriy",
Body : "And this is the body"
}).then(
message => alert(message)
);
    }