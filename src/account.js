(function(exports) {

  function Account(name, surname, transfer = Transfer) {
    this.transfer = transfer
    this.transfersList = []
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

  Account.prototype.withdrawMoney = function (money) {
    this.balance -= money
    return  money
  };

  Account.prototype.createNewTransfer = function () {
    this.transfersList.push(new this.transfer())
  };

  Account.prototype.depositAndRecord = function (moneyToTransfer) {
    this.createNewTransfer()
    this.depositMoney(moneyToTransfer)
    this._lastTransferInstance().recordTransfer(moneyToTransfer, this.getBalance())
  };

  Account.prototype.withdrawAndRecord = function (moneyToTransfer) {
    this.createNewTransfer()
    this._lastTransferInstance().recordTransfer(this.withdrawMoney(moneyToTransfer), this.getBalance())
  };

  Account.prototype._lastTransferInstance = function () {
    return this.transfersList.slice(-1)[0]
  };

  Account.prototype.accountStatement = function () {
    transfersInfo= this.transfersList.map(transf => `${transf.date}   || ${transf.moneyTransfered} ||     ${transf.balanceAfterTransfer}\n`)
    var statement = 'date || transferment || balance \n' +
                    `${transfersInfo.join('')}`
    return statement
  };

  exports.Account = Account;

})(this);
