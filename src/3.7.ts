{
    //

    class Count {
       static amount: number=0

       static increment(){
            return (Count.amount= Count.amount + 1)
        }
        decrement(){
            return (Count.amount = Count.amount -1)
        }
    }

    // const newbalance1 = new Count()
    // console.log(newbalance1.increment())
    // console.log(newbalance1.increment())
    // console.log(newbalance1.increment())

    // const newbalance2 = new Count()
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())

    //
}