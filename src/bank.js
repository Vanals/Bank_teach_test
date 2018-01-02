(function(exports) {

  function Bank(account = Account) {
    this.account = account
    this.accounts = []
  }

  Bank.prototype.newAccount = function(ownerName) {
    this.accounts.push(new this.account(ownerName))
  };

exports.Bank = Bank;

})(this);

// Create account
// take care of deposit and withdraw through the account


// map the array, if oneofthelement.key === marco Return that hash/element
