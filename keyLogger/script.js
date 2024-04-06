const result = document.getElementsByClassName("showkey")[0];
let currentKey;
let keyArray=[]

console.log("hello");

function keyhandle(e){
    currentKey=e.key;
    keyArray.push(e.key);
    console.log(currentKey);
    result.textContent = currentKey;
}