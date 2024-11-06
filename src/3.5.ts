{
    //
    // access modifiers

    class BankAccount{
      public  name: string;
      public readonly id:number;
      protected _balance:number;

        constructor(name:string, id:number, balance: number){
            this.name=name,
            this.id= id,
            this._balance= balance
        }

        addDeposit(amount : number){
            this._balance= this._balance + amount
        }
        getBalance(){
            return this._balance
        }
        withdrawDeposit(amount: number){
            this._balance= this._balance-amount
        }
    }

    class childAccount extends BankAccount{
        test(){
            this.
        }
    }


    const accountBalance= new BankAccount('Mr. Gorib', 242, 20)
        accountBalance.addDeposit(300);
        accountBalance.withdrawDeposit(30) 
        const knowMyBalance = accountBalance.getBalance();
        console.log(knowMyBalance)
    //
}