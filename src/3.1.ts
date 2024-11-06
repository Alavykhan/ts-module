{
    //
    // opp class

    class Animal {
    //    public name: string;
    //    public species: string;
    //    public size: number;


        // parameter properties

        constructor(public name:string, public species: string, public size: number){
            // this.name= name;
            // this.species= species;
            // this.size= size
        }


        showingExistence(){
            console.log(`The animal ${this.name} belongs from ${this.species} family`)
        }


    }

    
    const dogi= new Animal('german shaperd', 'dog', 20)

    const snake= new Animal ('king cobra', 'snake', 10)
        dogi.showingExistence()   
        snake
    //
}