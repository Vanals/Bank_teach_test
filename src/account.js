(function(exports) {

  function Account(name, surname) {
    this.name = name
    this.surname = surname
  }

  Account.prototype.getName = function () {
    return this.name
  };

  Account.prototype.getSurname = function () {
    return this.surname
  };

  exports.Account = Account;
})(this);
