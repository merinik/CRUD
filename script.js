//let text = document.getElementsByClassName('mek')[0];
//let text = document.getElementsById('usName');
//console.log(text);

let usName = document.getElementById('usName');
let usAge = document.getElementById('usAge');

function getVal () {
        fetch("http://localhost:3000/addInfo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({login:usName.value, pass:usAge.value})
        })
}
