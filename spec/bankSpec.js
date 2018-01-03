describe('bank', function() {

  beforeEach(function() {
    bank = new Bank()
  });

  describe('newAccount', function() {
    it('create a new account', function() {
      bank.newAccount('Marco Vanali')
      expect(bank.accounts[0].owner).toEqual('Marco Vanali')
      expect(bank.accounts[0].constructor).toEqual(Account)
    });

    it('raise an error if account already exist', function() {
      bank.newAccount('Marco Vanali')
      expect(function() {
      bank.newAccount('Marco Vanali')
      }).toThrow('Account already exist');
    });

  });

  describe('selectAccountOf', function() {
    it('return an Account instance in base of its owner', function() {
      bank.newAccount('Marco Vanali')
      expect(bank.selectAccountOf('Marco Vanali').owner).toEqual('Marco Vanali')
    });
  });


})
