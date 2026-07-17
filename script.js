// ===========================
// USER DATA
// ===========================

const correctPin = "1234";
const userName = "Laraib Zia";

let balance = 200000;
let transactions = [];


// ===========================
// ELEMENTS
// ===========================

const loginSection = document.getElementById("login-section");
const dashboard = document.getElementById("dashboard");

const pinInput = document.getElementById("pin");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("login-message");

const welcomeText = document.getElementById("welcomeText");
const welcomeSubText = document.getElementById("welcomeSubText");

const balanceText = document.getElementById("balance");

const amountInput = document.getElementById("amount");

const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balanceBtn = document.getElementById("balanceBtn");
const historyBtn = document.getElementById("historyBtn");
const logoutBtn = document.getElementById("logoutBtn");

const historyList = document.getElementById("history-list");

const eyeIcon = document.getElementById("togglePassword");


// ===========================
// LOGIN
// ===========================

loginBtn.addEventListener("click", login);

function login(){

    const enteredPin = pinInput.value;

    if(enteredPin === correctPin){

        loginSection.style.display = "none";

        dashboard.style.display = "block";

        welcomeText.innerHTML = `👋 Welcome Back, <br>${userName}`;

        welcomeSubText.innerHTML = "Have a wonderful day ❤️";

        updateBalance();

    }

    else{

        loginMessage.innerHTML = "❌ Incorrect PIN";

    }

}
eyeIcon.addEventListener("click", function(){

    if(pinInput.type === "password"){

        pinInput.type = "text";

        eyeIcon.classList.remove("fa-eye");

        eyeIcon.classList.add("fa-eye-slash");

    }

    else{

        pinInput.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");

        eyeIcon.classList.add("fa-eye");

    }

});

function updateBalance(){

    balanceText.innerHTML =
        "PKR " + balance.toLocaleString();

}
// ===========================
// Deposit Money
// ===========================

depositBtn.addEventListener("click", depositMoney);

function depositMoney(){

    const amount = Number(amountInput.value);

    if(amount <= 0 || isNaN(amount)){

        alert("Please enter a valid amount.");

        return;

    }

    balance += amount;

    updateBalance();

    transactions.push(`✅ Deposited PKR ${amount.toLocaleString()}`);

    amountInput.value = "";

}
// ===========================
// Withdraw Money
// ===========================

withdrawBtn.addEventListener("click", withdrawMoney);

function withdrawMoney(){

    const amount = Number(amountInput.value);

    if(amount <= 0 || isNaN(amount)){

        alert("Please enter a valid amount.");

        return;

    }

    if(amount > balance){

        alert("❌ Insufficient Balance!");

        return;

    }

    balance -= amount;

    updateBalance();

    transactions.push(`💸 Withdraw PKR ${amount.toLocaleString()}`);

    amountInput.value = "";

}
// ===========================
// Check Balance
// ===========================

balanceBtn.addEventListener("click", function(){

    alert(`Your Current Balance is PKR ${balance.toLocaleString()}`);

});
// ===========================
// Transaction History
// ===========================

historyBtn.addEventListener("click", showHistory);

function showHistory(){

    historyList.innerHTML = "";

    if(transactions.length === 0){

        historyList.innerHTML = "<li>No Transactions Yet.</li>";

        return;

    }

    transactions.forEach(function(item){

        historyList.innerHTML += `<li>${item}</li>`;

    });

}
// ===========================
// Logout
// ===========================

logoutBtn.addEventListener("click", logout);

function logout(){

    dashboard.style.display = "none";

    loginSection.style.display = "block";

    pinInput.value = "";

    loginMessage.innerHTML = "";

}
