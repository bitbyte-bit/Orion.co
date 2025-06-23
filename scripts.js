const opener=document.createElement('div');
opener.className='loader';
const text=document.createElement('p');text.innerText='loading resources.....';
text.className='loader-text';
setTimeout(() => {
    nextText()
}, 2000);function nextText(){
    text.innerText='almost there...';
}
setTimeout(() => {
    lastText()
}, 3000);function lastText(){
    text.innerText='you are all set!';
}
setTimeout(() => {
    welcome()
}, 4000);function welcome(){
    text.innerHTML=`
    <h1 class='opener1'>orion <br><br><h2 class='moto'>your only shopping buddy</h2></h1>`;
}
const load=document.createElement('div');
load.className='circle';
opener.appendChild(text)
opener.appendChild(load)
application.appendChild(opener)
//timer //
setTimeout(() => {
    removeLoader();
}, 10000);function removeLoader(){
    application.removeChild(opener)
}





