(function(exports) {

  function Deposit() {
    this.balanceAtTheTime = 0
    this.moneyDeposited = 0
    this.date = "NotGiven"
  }

  Deposit.prototype.recordDeposit = function (moneyDepositing, Balance) {
    this.balanceAtTheTime = Balance
    this.moneyDeposited = moneyDepositing
    this._recordDate()
  };

  Deposit.prototype._recordDate = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    today = mm + '/' + dd + '/' + yyyy;
    return this.date = today
  };

  Deposit.prototype._getDate = function () {
    return this.date
  };

  
  exports.Deposit = Deposit;

})(this);
