/* Add your JavaScript to this file */
window.onload = () =>{
    let email = document.querySelector(".newsletter form #email");
    let subscribe = document.querySelector(".newsletter form .btn");
    const emailStructure = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
    let message = document.querySelector(".newsletter .message");

    subscribe.onclick = (event)=>{
        event.preventDefault();
        if (email.value.length > 0 && emailStructure.test(email.value.toLowerCase())) {
            message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        }
        else {
            message.innerHTML = "Please enter a valid email address";
        }
    }
    email.onclick = (event) =>{
        message.innerHTML = "";
    }
}