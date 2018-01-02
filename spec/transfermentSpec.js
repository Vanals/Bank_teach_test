
describe('Transferment', function() {

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
  //MOCKS

  beforeEach(function() {
    transferment = new Transferment()
    fakeaccount = new FakeAccount()
  });



  describe('recordTransferment', function() {
    it('record an amount of money in the moneyTransfered variable and add it in the Account balance', function() {
      transferment.recordTransferment(fakeaccount.depositMoney(1000), fakeaccount.getBalance())
      expect(transferment.balanceAfterTransferment).toEqual(1001)
      expect(transferment.moneyTransfered).toEqual(1000)
    });
  });

  describe('recordDate', function() {
    it('record the currante Date in the this.date variable', function() {
      transferment._recordDate()
      expect(transferment._getDate()).toEqual("01/02/2018")
    });
  });

});
