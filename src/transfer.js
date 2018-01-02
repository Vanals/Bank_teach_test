(function(exports) {

  function Transfer() {
    this.balanceAfterTransfer = 0;
    this.moneyTransfered = 0;
    this.date = 'NotGiven';
  }

  Transfer.prototype.recordTransfer = function(moneyTransfering, Balance) {
    this.balanceAfterTransfer = Balance;
    this.moneyTransfered = moneyTransfering;
    this._recordDate();
  };

  Transfer.prototype._recordDate = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // January is 0!
    var yyyy = today.getFullYear();

    if (dd<10) {
        dd = '0'+dd;
    }

    if (mm<10) {
        mm = '0'+mm;
    }

    today = mm + '/' + dd + '/' + yyyy;
    return this.date = today;
  };

  Transfer.prototype._getDate = function() {
    return this.date;
  };


  exports.Transfer = Transfer;

})(this);
