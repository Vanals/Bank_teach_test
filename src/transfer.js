(function(exports) {

  function Transfer(dateformat = DateFormat) {
    this.dateformat = new dateformat()
    this.balanceAfterTransfer = 0;
    this.moneyTransfered = 0;
    this.date = 'NotGiven';
  }

  Transfer.prototype.recordTransfer = function(moneyTransfering, Balance) {
    this.balanceAfterTransfer = Balance;
    this.moneyTransfered = moneyTransfering;
    this._recordDate();
  };

  Transfer.prototype._recordDate = function () {
    this.date = this.dateformat._createDate()
  };

  Transfer.prototype._getDate = function() {
    return this.date;
  };

  exports.Transfer = Transfer;

})(this);
