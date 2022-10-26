// login option 
const loginBtn = document.getElementById("Login");
loginBtn.addEventListener("click", function(){
      const loginArea = document.getElementById("login-area");
      loginArea.style.display="none";
      const transactionArea = document.getElementById("transaction-area")
      transactionArea.style.display="block";
})


// deposit option 1

      const depositBtn = document.getElementById("addDeposit");
      depositBtn.addEventListener("click",function(){
      // const depositAmount = document.getElementById("depositAmount").value;
      // const depositNumber = parseFloat(depositAmount);

      const depositNumber = getInputNumber("depositAmount");

// current deposit option 
      // const currentDeposit = document.getElementById('currentDeposit').innerText;
      // const currentDepositNumber = parseFloat(currentDeposit);
      // const totalDeposit = depositNumber + currentDepositNumber;
      // document.getElementById('currentDeposit').innerText = totalDeposit;
      updateSpanText("currentDeposit",depositNumber);


//current balance option 
      // const currentBalance = document.getElementById("currentBalance").innerText;
      // const currentBalanceNumber = parseFloat(currentBalance);
      // const totalBalance = depositNumber +currentBalanceNumber;
      // document.getElementById("currentBalance").innerText = totalBalance;

      updateSpanText("currentBalance",depositNumber);
     

      document.getElementById("depositAmount").value= "";



})

// withdraw option part 

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
//      const withdrawAmount = document.getElementById("withdrawAmount").value;
//      const withdrawNumber=parseFloat(withdrawAmount);
        const withdrawAmount = getInputNumber("withdrawAmount");
        console.log(withdrawAmount);

        updateSpanText("currentWithdraw",withdrawAmount);
        updateSpanText("currentBalance",-1*withdrawAmount);
})

function getInputNumber(id){
            const withdrawAmount = document.getElementById(id).value;
            const withdrawNumber=parseFloat(withdrawAmount);
            return withdrawNumber;
}



function updateSpanText(id ,depositNumber){
      const current = document.getElementById(id).innerText;
      const currentNumber = parseFloat(current);
      const total = depositNumber +currentNumber;
      document.getElementById(id).innerText = total;
}