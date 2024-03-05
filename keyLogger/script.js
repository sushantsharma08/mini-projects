const result = document.getElementsByClassName("showkey");
let currentKey;
let keyArray=[]

console.log("hello");

function keyhandle(e){
    currentKey=e.key;
    keyArray.push(e.key);
    console.log(e.key);
    result.textContent = currentKey;
    console.log(result.textContent);
}

