function sendEmail(event){
    event.preventDefault();
    const data  = {
        name :document.getElementById("name").value,
        email :document.getElementById("email").value,
        number :document.getElementById("number").value,
        message :document.getElementById("message").value
    }
    emailjs.send("service_9851phq","template_x5725l9",data)
    .then(function(res){
        alert("success")
        document.getElementById("formcontact").reset()
    },function(error){
        alert("failed",error)
    })
}