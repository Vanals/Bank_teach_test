(function(exports) {

  function Account(name, surname, transferment = Transferment) {
    this.transferment = transferment
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

  Account.prototype.createNewTransferment = function () {
    this.transfermentsList.push(new this.transferment())
  };

  Account.prototype.transferAndRecord = function (moneyToTransfer) {
    this.createNewTransferment()
    this.transferMoney(moneyToTransfer)
    this._lastTransfermentInstance().recordTransferment(moneyToTransfer, this.getBalance())
  };

  Account.prototype._lastTransfermentInstance = function () {
    return this.transfermentsList.slice(-1)[0]
  };

  exports.Account = Account;

})(this);
