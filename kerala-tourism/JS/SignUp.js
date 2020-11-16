let email= document.getElementById("email");
let pwd= document.getElementById("pwd");
let mobile= document.getElementById("mobile");
let pwdconfirm= document.getElementById("pwdconfirm");

let emailRegexp=/^([\w\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
let pwdRegexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z!@#\$%\^\&\*\d]{8,}$/;
let mobileRegexp=/^[0-9]{3}[\.\-\s]?[0-9]{3}[\.\-\s]?[0-9]{4}$/;

function validateEmail(){
  if(!(emailRegexp.test(email.value))){
    email.setAttribute('onfocus','this.value=""');
    email.setAttribute('placeholder','Wrong email');
    email.style.border=("2px solid red");
    return false;
  } 
  else{
    email.style.border=("0px");
    return true;
  }
}


pwd.addEventListener('keyup', function() {
  let n=/^(.*[0-9].*)$/;
  let upper=/^(.*[A-Z].*)$/;
  let lower=/^(.*[a-z].*)$/;
  let strength=0;
  
  if(n.test(pwd.value)){
    strength++;
  }
  if(upper.test(pwd.value)){
    strength++;
  }
  if(lower.test(pwd.value)){
    strength++;
  }
  if((pwd.value.length)>=8){
    strength++;
  }
  if((pwd.value.length)==0){
    strength=0;
  }

  if(strength==0){
    document.getElementById("very weak").style.backgroundColor = "lightgrey";
    document.getElementById("weak").style.backgroundColor = "lightgrey";
    document.getElementById("medium").style.backgroundColor = "lightgrey";
    document.getElementById("strong").style.backgroundColor = "lightgrey";
    document.getElementById("strength").innerHTML = ". . .";

  }
  if(strength==1){
    document.getElementById("very weak").style.backgroundColor = "red";
    document.getElementById("weak").style.backgroundColor = "lightgrey";
    document.getElementById("medium").style.backgroundColor = "lightgrey";
    document.getElementById("strong").style.backgroundColor = "lightgrey";
    document.getElementById("strength").innerHTML = "Very Weak";

  }
  else if(strength==2){
    document.getElementById("very weak").style.backgroundColor = "orange";
    document.getElementById("weak").style.backgroundColor = "orange";
    document.getElementById("medium").style.backgroundColor = "lightgrey";
    document.getElementById("strong").style.backgroundColor = "lightgrey";
    document.getElementById("strength").innerHTML = "Weak";
  }
  else if(strength==3){
    document.getElementById("very weak").style.backgroundColor = "yellow";
    document.getElementById("weak").style.backgroundColor = "yellow";
    document.getElementById("medium").style.backgroundColor = "yellow";
    document.getElementById("strong").style.backgroundColor = "lightgrey";
    document.getElementById("strength").innerHTML = "Medium";
  }
  else if(strength==4){
    document.getElementById("very weak").style.backgroundColor = "green";
    document.getElementById("weak").style.backgroundColor = "green";
    document.getElementById("medium").style.backgroundColor = "green";
    document.getElementById("strong").style.backgroundColor = "green";
    document.getElementById("strength").innerHTML = "Strong";
  }

});

function validatePassword(){
  if(!(pwdRegexp.test(pwd.value))){
    pwd.setAttribute('onfocus','this.value=""');
    pwd.setAttribute('placeholder','min 8 chars,1 uppercase,1 lower case,1 number required');
    pwd.style.border=("2px solid red");
    return false;
  } 
  else{
    pwd.style.border=("0px");
    return true;
  }

}

function validateNumber(){
  if(!mobileRegexp.test(mobile.value)){   
    mobile.setAttribute('onfocus','this.value=""');
    mobile.setAttribute('placeholder','Enter your 10 digit number');
    mobile.style.border=("2px solid red");
    return false;
  }
  else{
    mobile.style.border=("0px");
    return true;
  }
}

function validatePasswordConfirm(){
  if(pwd.value!=pwdconfirm.value){
    pwdconfirm.setAttribute('onfocus','this.value=""');
    pwdconfirm.setAttribute('placeholder','Passwords do not match');
    pwdconfirm.style.border=("2px solid red");
    return false;
  }
  else{
    pwdconfirm.style.border=("0px");
    return true;
  }
}

function validate(){
  validateEmail();
  validatePassword(); 
  validateNumber();
  validatePasswordConfirm();
  return validateEmail()&&validatePassword()&&validateNumber()&&validatePasswordConfirm();
}

