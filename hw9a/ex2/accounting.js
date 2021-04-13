module.exports = class Account {
    constructor(name) {
      this.name = name;
    }
    credit(balance) {
       this.balance = balance
    }

    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
  };