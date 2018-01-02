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
  });


})
