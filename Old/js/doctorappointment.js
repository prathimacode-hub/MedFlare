//Form validation using sweet alert
const title = document.getElementById("title");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const history = document.getElementById("history");
const attendedYes = document.getElementById("attendedYes");
const attendedNo = document.getElementById("attendedNo");
const appointmentStatus = document.getElementById ("status");
const appointmentType = document.getElementById("appointment-type");
const appointmentDate = document.getElementById("appointment-date");
const appointmentTime = document.getElementById("appointment-time");

const form = document.getElementById("appointmentForm");

function isEmail(email) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;                
    return regexp.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^\d{10}$/;
    return re.test(phone.toLowerCase().trim());
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (title.value == ""){
        swal("Error !", "Please enter a valid title", "error");
    }
    else if (firstName.value.length < 3) {
        swal("Error !", "Please enter a valid first name", "error");
    }
    else if (lastName.value.length < 3) {
        swal("Error !", "Please enter a valid last name", "error");
    }
    else if (!isEmail(email.value)){
        swal("Error !", "Please enter a valid email", "error");
    }
    else if (!validatePhone(phone.value)){
        swal("Error !", "Please enter a valid phone number of 10 digits only", "error");
    }
    else if (dob.value==""){
        swal("Error !", "Please enter a valid DOB", "error");
    }
    else if (gender.value==""){
        swal("Error !", "Please select your gender", "error");
    }
    else if ( street.value==""){
        swal("Error !","Please enter your address","error");
    }    
    else if ( city.value==""){
        swal("Error !","Please enter your city","error");
    }
    else if ( state.value==""){
        swal("Error !","Please select your state","error");
    }
    else if( attendedYes.checked == false && attendedNo.checked == false){
        swal("Error !","Please say if you have previously attended our facility","error");
    }
    else if (appointmentStatus.value ==""){
        swal("Error !","Please select your appointment status","error");
    }
    else if ( appointmentType.value ==""){
        swal("Error !","Please select your appointment type","error");
    }
    else if ( appointmentDate.value ==""){
        swal("Error !","Please select your appointment date","error");
    }
    else if ( appointmentTime.value ==""){
        swal("Error !","Please select your appointment time","error");
    }
    else{
        swal("Thank you !","We will contact you soon","success");
        form.submit();
    }
    
})

