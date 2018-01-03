# Bank teach test

Tech test training from makers Academy.
Language chosen : Javascript.

This tech-test challenge was to create a Bank script where a user can deposit and withdraw money and get an account statement of all the transfers.

IMAGE

## How to use

1) Clone the project
```
git clone https://git@github.com:Vanals/Bank_tech_test.git
```

2)Change into the project directory using the terminal
```
cd Bank_tech_test
```

3)Open Google Chrome or any Internet Server


4)Click "Alt" + "Command" + "I" to open the console on the browser (The shortcuts are if you are using a Mac)

5) Following the picture above you can try the script doing deposit, withdraw and getting an account statement. You can start with the command below.

```
bank = new Bank();
```
## Approach

Given the tech test requirement I started drawing a diagram getting an idea of how my script had to work/communicate. I named the classes deciding which responsability they should have.

Given the task, the script had to allow an user to deposit, withdraw money and get an account statement with the information of all the transfers.
The account statement had to contain the data, balance and amount of money of the transfer.

Secondly I wrote user stories ad guide and then following the TDD approach developed my code.

#### Requirements (make a list interface)
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
date || transfer || balance
14/01/2012 ||  200 || 200
13/01/2012 || -10  || 190
10/01/2012 || 210 ||  400
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
I want be able to check the data, amount, and past balance of my deposits and withdraws.
```
