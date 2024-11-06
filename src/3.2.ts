{
    //
    // opp -inheritance

    class person{
        name: string;
        address: string;
        roll: number;


        constructor(name: string,  address: string, roll: number){
            this.name= name;
            this.address= address;
            this.roll= roll;
        }

        getSleep(numOfHours: number){
            console.log(`${this.name} get sleep until ${numOfHours} hours`)
        }
    }

    class student extends person{
     
        constructor(name: string,  address: string, roll: number){
            super(name, address, roll)
        }
    }

    class teacher extends person{
        designation:string;

        constructor(name: string,  address: string, roll: number, designation: string){
           super(name, address, roll)
            this.designation= designation;
        }

        getSleep(numOfHours: number){
            console.log(`${this.name} get sleep until ${numOfHours} hours`)
        }

        takeClass(numOfClass: number){
            console.log(`${this.name} take classes for ${numOfClass} hours`)
        }
    }

    const student1 = new student('Mr. Khan', 'Bashundhara', 1330358030);
    student1.getSleep(8)

    const teacher1= new teacher('Sinthia mam', 'dhaka', 42, 'assistant lecturer');
    teacher1.takeClass(6)
    //
}