var add=0;
function onClikck() {
    console.log(add);
    if(add<10){
        add=add+1
    }
}
function onClikckk() {
    console.log(add);
    if(add>0){
        add=add-1
    }   
}
const button = document.querySelector('#add');
button.addEventListener('click',onClikck);
const button1 = document.querySelector('#minus');
button1 .addEventListener('click',onClikckk);
