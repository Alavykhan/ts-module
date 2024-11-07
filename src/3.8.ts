{
    // 
    // --Polymorphism

  class person {
    getSleep(){
        return console.log(`get sleep for 8 hours`)
    }
  }

  class student extends person{
    getSleep() {
        return console.log(`get sleep for 7 hours`)
    }
  }

  class developer extends person{
    getSleep() {
        return console.log(`get sleep for 6 hours`)
    }
  }

  const person1 = new person()
  const person2 = new student()
  const person3 = new developer()

  const getSleepingHours= (param: person)=>{
    param.getSleep()
  }

  getSleepingHours(person1)
  getSleepingHours(person2)
  getSleepingHours(person3)

//   second practice

class shape{
    getArea(){
        return 0;
    }
}



class circle extends shape{
    radius: number;

    constructor(radius: number){
        super();
        this.radius= radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


class rectangle extends shape{
    height: number;
    width: number;

    constructor(height: number, width: number){
        super();
        this.height= height;
        this.width= width;
    }
    getArea(): number {
        return this.height * this.width
    }
}



const getShapeArea= (param: shape)=>{
    console.log(param.getArea())
}


const res1 = new shape();
const res2 = new circle(10);
const res3 = new rectangle(15, 10)
getShapeArea(res3)
    // 
}