//let text = document.getElementsByClassName('mek')[0];
//let text = document.getElementsById('usName');
//console.log(text);

let usName = document.getElementById('usName');
let usPass = document.getElementById('usPass');
let usEmail = document.getElementById('usEmail');

function getVal () {
        fetch("/addInfo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({login:usName.value, pass:usPass.value, email:usEmail.value})
        })
}
