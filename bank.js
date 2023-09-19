function BankAccount(ac,name,type,balance,isActive)
{
    this.ac=ac
    this.name=name
    this.type=type
    this.balance=balance
    this.isActive=isActive
    this.deposit=function(amount)
    {
        this.balance += amount;
        console.log(`your updated balance is : ${this.data}rs`);
    }
    this.withdrawl=function(amount)
    {
        if(this.balance>=amount)
        {
            this.balance -= amount;
            console.log(`your updated balance is : ${this.data}rs`);
        }
        else
        {
            console.log("insufficient balance")
        }
    }
}
let ac1= new BankAccount(3463246446,"aaa","savings",3000,true)
let ac2= new BankAccount(34632464436,"aaau","savings",4000,false)
ac1.deposit(2000)
ac1.withdrawl(4000)