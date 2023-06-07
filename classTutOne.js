

//Create a JavaScript class called BankAccount that represents a bank account. The class should have the following properties and methods:

//Properties:
//
//owner: Represents the account owner's name.
//balance: Represents the current balance of the account.
//Methods:
//
//deposit(amount): Accepts a parameter amount and adds it to the account's balance.
//withdraw(amount): Accepts a parameter amount and subtracts it from the account's balance.
//getBalance(): Returns the current balance of the account.
//Instructions:
//
//Define the BankAccount class with the specified properties and methods.
//Implement the deposit method to add the given amount to the account's balance.
//Implement the withdraw method to subtract the given amount from the account's balance, but make sure to check if the account has enough funds before performing the withdrawal.
//Implement the getBalance method to return the current balance of the account.


class BankAccount {
	constructor(owner) {
  	this.owner = owner;
    this.balance = 0;
  }
  
  deposit(amount) {
  	this.balance += amount;
  }
  
  withdraw(amount) {
  	if(this.balance >= amount){
    	this.balance -= amount;
    }
    else{
    console.log("Insufficient funds");
    }
  	
  }
   getBalance() {
    return this.balance;
  }
  
}


//If you want to avoid assigning the instance of the BankAccount class to any variable, you can directly create the instance without assigning it to a variable. Here's an example:
//
//
//new BankAccount("John Doe").deposit(100);
//
//
//In this example, we create an instance of the BankAccount class with the owner name "John Doe" and immediately call the deposit method with the amount of 100. However, since we haven't assigned the instance to a variable, we can't access or use it later in the code.
//
//Please note that this approach has limited usefulness because you won't be able to interact with the instance beyond the immediate method call. Assigning the instance to a variable allows you to store and use it for later interactions, such as calling other methods or accessing properties.
//
//If you have a specific use case or requirement, please provide more details, and I'll be happy to assist you accordingly.


let account = new BankAccount("John Doe");

account.deposit(100);

// console.log(account); 
 
 account.withdraw(550);
 
 console.log(account);