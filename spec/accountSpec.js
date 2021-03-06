describe('Account', function() {

  beforeEach(function() {
    account = new Account('Marco Vanali')
  });

  //MOCKS

  function FakeTransfer() {
    this.balanceAfterTransfer = 0;
    this.moneyTransfered = 0;
    this.date = '01/01/2018'
  }

  FakeTransfer.prototype.recordTransfer = function(moneyTransfering, Balance) {
    this.balanceAfterTransfer = Balance;
    this.moneyTransfered = moneyTransfering;
  };

  //MOCKS

  describe('getOwner', function() {
    it('get the name of the account owner store in the this.owner variable', function() {
      expect(account.getOwner()).toEqual('Marco Vanali')
    });
  });

  describe('getBalance', function() {
    it('get your actual balance', function() {
      expect(account.getBalance()).toEqual(0)
    });
  });

  describe('depositMoney', function() {
    it('depositan ammount of money in the balance variable', function() {
      account.depositMoney(1000)
      expect(account.getBalance()).toEqual(1000)
    });
  });

  describe('withdrawMoney', function() {
    it('withdrawn an ammount of money from the balance variable', function() {
      account.depositMoney(1000)
      account.withdrawMoney(200)
      expect(account.getBalance()).toEqual(800)
      expect(account.withdrawMoney(200)).toEqual(-200)
    });
  });

  describe('createNewTransfer', function() {
    it('create a new instance of the class Transfer and push it in the transfersList array', function() {
      account.createNewTransfer()
      expect(account.transfersList[0].constructor).toEqual(Transfer)
    });
  });

  describe('accountStatement', function() {
    it('print out a table with the information about all the transferments', function() {
      accountWithFakeTransfer = new Account(FakeTransfer)
      accountWithFakeTransfer.depositAndRecord(1000)
      accountWithFakeTransfer.withdrawAndRecord(200)
      expect(accountWithFakeTransfer.accountStatement()).toEqual(`date || transferment || balance \n01/03/2018   || 1000 ||     1000\n01/03/2018   || -200 ||     800\n`)
    });
  });


});
