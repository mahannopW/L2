const username = "ABC123"
const password = "0000"
function checker(){
const name = document.querySelector('#Username');
name.value;
console.log(name.value);
const pass = document.querySelector('#password');
pass.value;
console.log(pass.value);
if((name.value!=0)&&(pass.value!=0)){
if((name.value==username)&&(pass.value==password)){
    const title = document.querySelector('p');
    title.textContent='Your username and password are correct! You are logged in.';
    const box = document.querySelector('div.cen');
    box.textContent='';
}
else{
    const box = document.querySelector('div.cen');
    box.textContent='';
    const title = document.querySelector('p');
    title.textContent='Your username or password is incorrect! Please try again.';
}
}
}
const check = document.querySelector('#Buttonlogin');
check.addEventListener('click',checker);