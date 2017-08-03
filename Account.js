var currentAccount = 0;

function accounts() {
var getAccounts = document.getElementById("accounts").value;
var splitAccounts = getAccounts.split(',');
var rawAccount = splitAccounts[currentAccount].split('"');
var username = rawAccount[1].split(':')[0];
var pass = rawAccount[1].split(':')[1];

document.getElementById("accountName").innerHTML = "Username: " + username;
document.getElementById("accountPass").innerHTML = "Pass: " + pass;
console.log(rawAccount[1]);
}

function copyUser(){
var getAccounts = document.getElementById("accounts").value;
var splitAccounts = getAccounts.split(',');
var rawAccount = splitAccounts[currentAccount].split('"');
var username = rawAccount[1].split(':')[0];
copyTextToClipboard(username)
}
function copyUSR(){
var getAccounts = document.getElementById("accounts").value;
var splitAccounts = getAccounts.split(',');
var rawAccount = splitAccounts[currentAccount].split('"');
var username = rawAccount[1]
copyTextToClipboard(username)
}
function copyPass() {
var getAccounts = document.getElementById("accounts").value;
var splitAccounts = getAccounts.split(',');
var rawAccount = splitAccounts[currentAccount].split('"');
var pass = rawAccount[1].split(':')[1];
copyTextToClipboard(pass)
}


function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}