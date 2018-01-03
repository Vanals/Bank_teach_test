(function(exports) {

  function Bank(account = Account) {
    this.account = account
    this.accounts = []
  }

  Bank.prototype.newAccount = function(ownerName) {
    if (this.selectAccountOf(ownerName) === undefined) {
      this.accounts.push(new this.account(ownerName))
    } else {
      throw 'Account already exist'
    }
  };

Bank.prototype.selectAccountOf = function(ownerName) {
  var result = this.accounts.filter(account => account.owner === ownerName);
  return result[0]
};

Bank.prototype.depositMoneyInAccount = function(ownerName, amount) {
  this.selectAccountOf(ownerName).depositAndRecord(amount)
};

Bank.prototype.withdrawMoneyFromAccount = function(ownerName, amount) {
  this.selectAccountOf(ownerName).withdrawAndRecord(amount)
};

Bank.prototype.accountStatementOf = function(ownerName) {
  return this.selectAccountOf(ownerName).accountStatement()
};

Bank.prototype.getBalanceOf = function(ownerName) {
  return this.selectAccountOf(ownerName).getBalance()
};

exports.Bank = Bank;

})(this);
