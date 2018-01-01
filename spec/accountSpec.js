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
    it('Get your actual balance', function() {
      expect(account.getBalance()).toEqual(0)
    });
  });





});
