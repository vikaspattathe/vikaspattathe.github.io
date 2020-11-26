let username= document.getElementById("username");
let pwd= document.getElementById("pwd");

let usname='admin';
let passwd=12345;

function validateUsername(callback){
  let uValidate=false;
  let pValidate=false;
  if(username.value==usname){
    username.style.border=("0px");
    uValidate= true;
  } 
  else if(username.value==''){   //if only username is empty
    username.setAttribute('placeholder','username should not be empty');
    username.style.border=("2px solid red");
    uValidate=false;
  }
  else{
    username.setAttribute('onfocus','this.value=""');
    username.setAttribute('placeholder','Wrong username');
    username.style.border=("2px solid red");
    uValidate=false;
  }

  pValidate=callback();
  return uValidate&&pValidate;
}

function validatePassword(){
  if(pwd.value==passwd){
    pwd.style.border=("0px");
    return true;
  }
  else if(pwd.value==''){   //if only pass is empty
    pwd.setAttribute('placeholder','Password should not be empty');
    pwd.style.border=("2px solid red");
    return false;
  }
  else{
    pwd.setAttribute('onfocus','this.value=""');
    pwd.setAttribute('placeholder','Wrong password');
    pwd.style.border=("2px solid red");
    return false;
  }

}

function validate(){
  return validateUsername(validatePassword);
}

