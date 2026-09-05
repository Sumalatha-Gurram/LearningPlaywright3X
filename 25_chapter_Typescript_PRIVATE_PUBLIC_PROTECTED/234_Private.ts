class BankAccount {
    private balance: number = 10000;

    showBalance() {
        console.log(this.balance);
    }
}

let account = new BankAccount();

account.showBalance();