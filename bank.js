class BankAccount {
  #balance;
  constructor(ownerName, initialAmount = 0) {
    this.owner = ownerName;
    this.#balance = initialAmount;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      alert("Please enter a valid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    } else {
      alert("Invalid or insufficient balance.");
      return false;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Accounts
const acc1 = new BankAccount("Srikanta", 1000);
const acc2 = new BankAccount("Ravi", 500);

// DOM Updater
function updateBalances() {
  document.getElementById("balance1").textContent = acc1.getBalance();
  document.getElementById("balance2").textContent = acc2.getBalance();
}

// Manual Deposit
function manualDeposit(accountNum) {
  const amount = parseFloat(prompt("Enter amount to deposit:"));
  if (!isNaN(amount)) {
    if (accountNum === 1) {
      acc1.deposit(amount);
    } else {
      acc2.deposit(amount);
    }
    updateBalances();
  }
}

// Manual Withdraw
function manualWithdraw(accountNum) {
  const amount = parseFloat(prompt("Enter amount to withdraw:"));
  if (!isNaN(amount)) {
    if (accountNum === 1) {
      acc1.withdraw(amount);
    } else {
      acc2.withdraw(amount);
    }
    updateBalances();
  }
}

// Transfer
function transferAmount(from, to) {
  const amount = parseFloat(prompt("Enter amount to transfer:"));
  if (!isNaN(amount)) {
    const sender = from === 1 ? acc1 : acc2;
    const receiver = to === 1 ? acc1 : acc2;

    if (sender.withdraw(amount)) {
      receiver.deposit(amount);
      alert(`Transferred ₹${amount} from ${sender.owner} to ${receiver.owner}`);
      updateBalances();
    }
  }
}

window.onload = updateBalances;