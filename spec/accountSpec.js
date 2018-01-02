describe('Account', function() {

  beforeEach(function() {
    account = new Account('Marco', 'Vanali')
  });

  describe('getName', function() {
    it('get the name of the accoutn woner store in the this.name variable', function() {
      expect(account.getName()).toEqual('Marco')
    });
  });

  describe('getSurname', function() {
    it('get the name of the accoutn woner store in the this.name variable', function() {
      expect(account.getSurname()).toEqual('Vanali')
    });
  });

  describe('getBalance', function() {
    it('get your actual balance', function() {
      expect(account.getBalance()).toEqual(0)
    });
  });

  describe('depositMoney', function() {
    it('deposit an ammount of money in the balance variable', function() {
      account.depositMoney(1000)
      expect(account.getBalance()).toEqual(1000)
    });
  });

  describe('createNewDeposit', function() {
    it('create a new instance of the class Deposit and push it in the deposits array', function() {
      account.crateNewDeposit()
      expect(account.deposits[0].constructor).toEqual(Deposit)
    });
  });

});
