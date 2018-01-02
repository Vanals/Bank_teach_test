(function(exports) {

  function Transferment() {
    this.balanceAfterTransferment = 0
    this.moneyTransfered = 0
    this.date = "NotGiven"
  }

  Transferment.prototype.recordTransferment = function (moneyTransfering, Balance) {
    this.balanceAfterTransferment = Balance
    this.moneyTransfered = moneyTransfering
    this._recordDate()
  };

  Transferment.prototype._recordDate = function () {
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

  Transferment.prototype._getDate = function () {
    return this.date
  };


  exports.Transferment = Transferment;

})(this);
