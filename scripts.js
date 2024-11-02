var typed=new Typed(".Text",{
    strings:["Front end developer","full stack developer","Software Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
function sendMail(){
    let parms ={
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        subject : document.getElementById("subject").value ,
        message : document.getElementById("message").value ,

    }
    emailjs.send("service_8bpsb16","template_8vr8kik", parms).then(alert("emaill send!!"))
}
