{
    //
    class bankAccount{
       public name:string;
       readonly id: number;
       protected balance: number;

        constructor(name:string, id: number, balance:number){
            this.name= name;
            this.id= id;
            this.balance= balance;
        }

        // addBalance(amount: number){
        //     this.balance=this.balance+amount
        // }
        // getBalance(){
        //     return this.balance
        // }

        set deposit(amount: number){
            this.balance= this.balance+amount;
        }


        get Balance(){
            return this.balance
        }

    }
        const goriban = new bankAccount('Mr. Gorib', 242, 20);
        // goriban.addBalance(50)
        // const newbalance=goriban.getBalance()
        // console.log(newbalance)
         goriban.deposit=50;
        const myBalance = goriban.Balance;
        console.log(myBalance);
    //
}