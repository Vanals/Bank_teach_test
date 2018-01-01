(function(exports) {

  function Deposit() {
    this.balanceAtTheTime = 0
    this.moneyDeposited = 0
  }

  Deposit.prototype.recordDeposit = function (moneyDepositing, Balance) {
    this.balanceAtTheTime = Balance
    this.moneyDeposited = moneyDepositing
    // date
    //
  };

  exports.Deposit = Deposit;

})(this);
