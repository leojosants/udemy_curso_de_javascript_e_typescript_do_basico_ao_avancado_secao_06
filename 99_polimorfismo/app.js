/*******************************************************************************/
function Account(agency, account_number, balance) {
    this.agency = agency;
    this.account_number = account_number;
    this.balance = balance;
}

Account.prototype.withdraw = function (value) {
    if (value > this.balance) {
        console.log(`-> saldo insuficiente: R$${this.balance}`);
        return;
    }

    this.balance -= value;
    console.log(`-> saque realizado valor R$${value}`);
    this.seeBalance();
};

Account.prototype.deposit = function (value) {
    this.balance += value;
    console.log(`-> deposito realizado valor R$${value}`);
    this.seeBalance();
};

Account.prototype.seeBalance = function () {
    console.log(`Agência ..: ${this.agency}`);
    console.log(`Banco ....: ${this.account_number}`);
    console.log(`Saldo.....: R$ ${this.balance.toFixed(2)}\n`);
};

/*******************************************************************************/
function CurrentAccount(agency, account_number, balance, limit) {
    Account.call(this, agency, account_number, balance); // heritage
    this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

// overwrite
CurrentAccount.prototype.withdraw = function (value) {
    if (value > (this.balance + this.limit)) {
        console.log(`-> saldo insuficiente: R$${this.balance}`);
        return;
    }

    this.balance -= value;
    console.log(`-> saque realizado valor R$${value}`);
    this.seeBalance();
};

/*******************************************************************************/
function SavingsAccount(agency, account_number, balance) {
    Account.call(this, agency, account_number, balance); // heritage
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

/*******************************************************************************/
const instanceateAccount = (agency, account_number, balance) => {
    return new Account(agency, account_number, balance);
}

const instanceateCurrentAccount = (agency, account_number, balance, limit) => {
    return new CurrentAccount(agency, account_number, balance, limit);
}

const instanceateSavingsAccount = (agency, account_number, balance, limit) => {
    return new SavingsAccount(agency, account_number, balance, limit);
}

/*******************************************************************************/
const account = instanceateAccount(11, 22, 10.0);
console.log('Account');
account.deposit(11.0);
account.deposit(10.0);
account.withdraw(31.0);
account.withdraw(0.01);

const current_account = instanceateCurrentAccount(11, 22, 0, 100.0);
console.log('\nCurrent Account');
current_account.deposit(10.0);
current_account.withdraw(110.0);
current_account.withdraw(1.0);

const savings_account = instanceateSavingsAccount(12, 33, 0);
console.log('\nSavings Account');
savings_account.deposit(10.0);
savings_account.withdraw(10.0);
savings_account.withdraw(1.0);