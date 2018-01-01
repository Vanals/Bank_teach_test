# Bank teach test

Tech test training from makers Academy.
Language chosen : Javascript.

### Specification

#### Requirements
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### User Stories

```
As a client
So I can manage my money
I want be able to create a new bank account with my personal information.
```

```
As a client
So I can see if I am spending too much
I want be able to check my actual balance
```

```
As a client
So I can keep my money safely
I want be able to deposit an amount of money in my account.
```

```
As a client
So I can buy a new ultra HD tv
I want be able to withdraw the money I need.
```



```
As a client
So I can check my balance history
I want be able to check the data, amount, and past balance of my deposits and withdraws
```
