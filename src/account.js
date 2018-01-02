(function(exports) {

  function Account(name, surname, deposit = Deposit) {
    this.deposit = deposit
    this.depositsList = []
    this.name = name
    this.surname = surname
    this.balance = 0
  }

  Account.prototype.getName = function () {
    return this.name
  };

  Account.prototype.getSurname = function () {
    return this.surname
  };

  Account.prototype.getBalance = function () {
    return this.balance
  };

  Account.prototype.depositMoney = function (money) {
    this.balance += money
    return money
  };

  Account.prototype.createNewDeposit = function () {
    this.depositsList.push(new this.deposit())
  };



  exports.Account = Account;
})(this);
