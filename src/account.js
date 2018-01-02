(function(exports) {

  function Account(name, surname, deposit = Deposit) {
    this.deposit = deposit
    this.transfermentsList = []
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
    this.transfermentsList.push(new this.deposit())
  };

  Account.prototype.depositAndRecord = function (moneyToDeposit) {
    this.createNewDeposit()
    this.depositMoney(moneyToDeposit)
    this._lastDepositInstance().recordDeposit(moneyToDeposit, this.getBalance())
  };

  Account.prototype._lastDepositInstance = function () {
    return this.transfermentsList.slice(-1)[0]
  };

  exports.Account = Account;
})(this);
