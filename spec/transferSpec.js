
describe('Transfer', function() {

  //MOCKS

  function FakeAccount() {
    this.balance = 1
  }

  FakeAccount.prototype.depositMoney = function (money) {
    this.balance += money
    return money
  };

  FakeAccount.prototype.getBalance = function (money) {
    return this.balance
  };

  function FakeDateFormat() {

  }

  FakeDateFormat.prototype._createDate = function() {
    return '01/01/2018'
  };

  //MOCKS

  beforeEach(function() {
    transfer = new Transfer(FakeDateFormat)
    fakeaccount = new FakeAccount()
  });

  describe('recordTransfer', function() {
    it('record an amount of money in the moneyTransfered variable and add it in the Account balance', function() {
      transfer.recordTransfer(fakeaccount.depositMoney(1000), fakeaccount.getBalance())
      expect(transfer.balanceAfterTransfer).toEqual(1001)
      expect(transfer.moneyTransfered).toEqual(1000)
    });
  });

  describe('recordDate', function() {
    it('record the currante Date in the this.date variable', function() {
      console.log(transfer.dateformat)
      transfer._recordDate()
      expect(transfer.date).toEqual("01/01/2018")
    });
  });

});
