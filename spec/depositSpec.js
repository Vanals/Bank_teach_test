describe('Deposit', function() {

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
    deposit = new Deposit()
    fakeaccount = new FakeAccount()
  });



  describe('recordDeposit', function() {
    it('record an amount of money in the moneyDeposited variable and add it in the Account balance', function() {
      deposit.recordDeposit(fakeaccount.depositMoney(1000), fakeaccount.getBalance())
      expect(deposit.balanceAtTheTime).toEqual(1001)
      expect(deposit.moneyDeposited).toEqual(1000)
    });
  });

  describe('recordDate', function() {
    it('record the currante Date in the this.date variable', function() {
      deposit._recordDate()
      expect(deposit._getDate()).toEqual("01/01/2018")
    });
  });

// Now that u tested recordDeposit u need to create a method in the account class which Run
//recorddeposit on a new instance of the deposit class recording all the information and passing as argument
// the balance and the money u deposited running the account method depositMoney.

});
