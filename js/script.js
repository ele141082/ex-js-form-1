//alert("ciao ciao");

const inputuserName = document.getElementById("username");
const userNameError = document.getElementById("alertuser");
const inputpassWord = document.getElementById("password");
const inputripPass = document.getElementById("ripeti password");
const checkBox = document.getElementById("check");
const btnInvia = document.getElementById("invia");
const userName = inputuserName.value;
//inputuserName.value = userName > 4 && userName < 10;

btnInvia.addEventListener("click",
function () {
    const userName = inputuserName.value;
    console.log(userName);
   if(inputuserName.value > 4 && inputuserName.value < 10) {
     console.log(inputuserName.value);
     userNameError.classList.add("d-none");
   }  else{
     //userNameError.innerHTML = "Nome utente deve contenere almeno 4 caratteri e non più di 10";
     userNameError.classList.remove("d-none");
   } 


} 

)

//let username = (userName.value > 4 && userName.value < 10);
//console.log(username);