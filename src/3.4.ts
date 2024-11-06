{
    //

    // instanceof guard

    class Animal{
        name: string;
        species: string;


        constructor(name:string, species: string){
            this.name= name,
            this.species=species
        }

        zoo(){
            console.log(`The species name is ${name}`)
        }
    }


    // smartly handle function

 

    class Dog extends Animal{
        constructor(name:string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log(`my dog is barking`)
        }
    }
    class Cat extends Animal{
        constructor(name:string, species: string){
            super(name, species)
        }
        makeMew(){
            console.log(`my cat is barking`)
        }
    }
    const isDog= (animal: Animal)=>{
        return animal instanceof Dog
    }

    const isCat = (animal: Animal)=>{
        return  animal instanceof Cat;
    }


    const getAnimal =( animal: Animal)=>{
        if(isDog(animal)){
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMew()
        }else{
            animal.zoo()
        }
    }


    const dog = new Dog('Mr. Dog bhai', "Dog")
    const cat = new Cat('Mrs. Cat apa', 'Cat')
    getAnimal(dog)



    //
}