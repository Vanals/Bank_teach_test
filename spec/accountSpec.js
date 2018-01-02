describe('Account', function() {

  beforeEach(function() {
    account = new Account('Marco', 'Vanali')
  });

  describe('getName', function() {
    it('get the name of the account owner store in the this.name variable', function() {
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

  describe('transferMoney', function() {
    it('transfer an ammount of money in the balance variable', function() {
      account.transferMoney(1000)
      expect(account.getBalance()).toEqual(1000)
    });  // +
  });

  describe('createNewTransferment', function() {
    it('create a new instance of the class Transferment and push it in the transfermentsList array', function() {
      account.createNewTransferment()
      expect(account.transfermentsList[0].constructor).toEqual(Transferment)
    });
  });

});
