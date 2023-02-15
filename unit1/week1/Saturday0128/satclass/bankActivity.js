class Account {
  contructor(funds) {
    this.funds = funds
    this.dateOpen = new Date()
  }
  addAmount(num) {
    // if (num < 100) console.log('Must have at least $100 to add this')
    // else { //so this stuff was throwing off the code...
    this.amount = num
    console.log(`Added an amount with ${num}`)
    // }
  }
}

let myAccount = new Account(100)
myAccount.addAmount(50)
console.log(myAccount) //lowercase in account "Account" previously defined...

// https://error-tldr.notion.site/Bank-Accounts-Activity-a88fb8c143434b4a90fd9adb216eea70

// my partner nick silvestri came up with this after we branched off:

class Account {
  constructor(name, funds, dateOpen) {
    this.name = name
    this.funds = funds
    this.dateOpen = Date()
  }
  createAccount(num) {
    if (num < 100) console.log('You need at least $100')
    else {
      this.funds = num
      console.log(`You created an account. Your balance is $${num}`)
    }
  }
  addDeposit(num) {
    this.funds += num
    console.log(
      `You have added $${num}, you now have $${this.funds} available.`
    )
  }
  makeWithdraw(num) {
    this.funds -= num
    console.log(
      `You have withdrew $${num}, you now have $${this.funds} available.`
    )
  }
}
let nicksAccount = new Account('Nick')
nicksAccount.createAccount(500)
nicksAccount.makeWithdraw(200)
nicksAccount.addDeposit(1000)
