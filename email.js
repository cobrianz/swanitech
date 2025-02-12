function contact(event) {
    event.preventDefault(); 

    const submitBtn = document.getElementById("submit-btn");
    const loader = document.getElementById("loader");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    const userName = document.getElementById("user_name").value;
    const userEmail = document.getElementById("user_email").value;
    const userMessage = document.getElementById("message").value;
    if (!userName || !userEmail || !userMessage) {
        alert("Please fill out all fields.");
        return;
    }

    loader.style.display = "block";
    submitBtn.disabled = true;
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    const params = {
        from_name: userName,  
        reply_to: userEmail, 
        message: userMessage   
      };

    emailjs.send("service_qpjzd1v", "template_0f02tvl", params)
        .then((response) => {
            console.log("Email Sent Successfully!", response);
            loader.style.display = "none";
            successMessage.style.display = "block";
            submitBtn.disabled = false; 
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Email Sending Failed:", error);
            loader.style.display = "none";
            errorMessage.style.display = "block"; 
            submitBtn.disabled = false;
        });
}
