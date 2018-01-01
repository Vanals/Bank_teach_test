describe('Account', function() {

  beforeEach(function() {
    account = new Account('Marco', 'Vanali')
  });

  it('Check if personal information can be stored in an instance of the Account class', function() {
    expect(account.name).toEqual('Marco')
    expect(account.surname).toEqual('Vanali')
  });
});
