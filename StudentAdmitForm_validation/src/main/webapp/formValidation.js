function printError(elementId, hintMsg)
{ 
    document.getElementById(elementId).innerHTML=hintMsg;
}

function validateForm()
{
    const firstName = document.myForm.value.trim();
    const lastName = document.myForm.lName.value.trim();
    const email = document.myForm.email.value.trim();
    const phone = document.myForm.phoneNo.value.trim();
    const gender = document.myForm.gender.value.trim();
    const dob = document.myForm.dob.value.trim();
    const address = document.myForm.address.value.trim();
    const state = document.myForm.state.value.trim();
    const country = document.myForm.country.value.trim();
    const eduQualification = document.myForm.eduQualification.value.trim();
    const program = document.myForm.program.value.trim();
    const department = document.myForm.dept.value.trim();
    const entranceTestRno  = document.myForm.entranceTestRno.value.trim();
    const marksheet = document.myForm.highestQualificationMarksheet.value.trim();
    const photo = document.myForm.photo.value.trim();
    const remarks = document.myForm.remarks.value.trim();
    let noFName = true;
    let noLName = true;
    let noEmail = true;
    let noPhoneNo = true;
    let noRno = true;

    if(firstName == ""){
        printError("noFName","please enter your name"); 
    }else{
        let regex=/^[a-zA-Z\s]+$/; 
        if(regex.test(firstName) == false){
        printError("noFName","please enter a valid First Name"); 
    }else{
        printError("noFName","");
        noFName=false; 
        }
    }

    if(lastName == ""){
        printError("noLName","please enter your name"); 
    }else{
        let regex=/^[a-zA-Z\s]+$/; 
        if(regex.test(lastName)==false){
        printError("noLName","please enter a valid Last Name"); 
    }else{
        printError("noLName","");
        noLName=false; 
        }
    }

    if(email == ""){
        printError("noEmail","please enter your email address");
    }else{
        let regex=/^\S+@\S+\.\S+$/; 
        if(regex.test(email)==false){
            printError("noEmail","please enter a valid email address"); 
        }else{
            printError("noEmail","");
            noEmail=false; 
        }
    }

    if(phone == "")
    {
        printError("noPhoneNo","Please enter a Phone number");
    }
    else{
        let regex = /^(0|91)?[6-9][0-9]{9}$/;
        if(regex.test(phone) == false){
            printError("noPhoneNo","please enter a valid Phone Number");
        }
        else{
            printError("noPhone","");
            noPhoneNo = false;
        }
    }

    if(entranceTestRno == "")
    {
        printError("noRno","please enter a Enrollment Number");
    }
    else{
        let regex = /^[2][3][0-9]{6}[1-9]$/;
        if(regex.test(entranceTestRno) == false){
            printError("noRno","Please enter a valid Enrollment Number");
        }
        else{
            printError("noRno","");
            noRno = false;
        }
    }

    if((noFName || noLName || noEmail || noPhoneNo || noRno )==true){
        return false; 
    }
    else{
        var verify = "Please Verify your personal details for 5 secs....";
        alert(verify);
        setTimeout(function(){
            alert("Submitting the Form!!!")
        },5000); 
    }
};

