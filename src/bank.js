(function(exports) {

  function Bank(account = Account) {
    this.account = account
    this.accounts = []
  }

  Bank.prototype.newAccount = function(ownerName) {
    this.accounts.push(new this.account(ownerName))
    // TO DO: return error if account already exist
  };

Bank.prototype.selectAccountOf = function(ownerName) {
  var result = this.accounts.filter(account => account.owner === ownerName);
  return result[0]
};



exports.Bank = Bank;

})(this);

// Create account
// take care of deposit and withdraw through the account
