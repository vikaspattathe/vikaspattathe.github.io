let email= document.getElementById("email");
let pwd= document.getElementById("pwd");

let regexp=/^([\w\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

function validateEmail(){
  if(email.value==''){   //if only email is empty
    email.setAttribute('placeholder','Email should not be empty');
    email.style.border=("2px solid red");
    return false;
  }
  if(!(regexp.test(email.value))){
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

function validatePassword(){
  if(pwd.value==''){   //if only pass is empty
    pwd.setAttribute('placeholder','Password should not be empty');
    pwd.style.border=("2px solid red");
    return false;
  }
  if(pwd.value.length<8){
    pwd.setAttribute('onfocus','this.value=""');
    pwd.setAttribute('placeholder','Passwords are atleast 8 characters');
    pwd.style.border=("2px solid red");
    return false;
  }
  else{
    pwd.style.border=("0px");
    return true;
  }

}

function validate(){
  validateEmail();
  validatePassword(); 
  return validateEmail()&&validatePassword();
}

