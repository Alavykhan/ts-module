{
    //

    // typeof --> type guard 
    type Alphanumeric =  number | string;
    const add=(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric=>{
        if(typeof param1=== 'number' && typeof param2 === 'number'){
            return param1 + param2
        }else{
            const res1= param1.toString() + param2.toString()
            return res1;
        }
    }
    const res =add(10,20)
    console.log(res)


    // in guard

    type publicUser={
        name:string;
    }
    type adminUser = {
        name: string;
        role:'admin'
    }

    const normal: publicUser={
        name:'Mr. Normal Bhai'
    }

    const admin: adminUser={
        name:'Admin bhai',
        role:'admin'
    }


    const getUser = (user: publicUser | adminUser)=>{
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My name is ${user.name}`)
        }
    }
    getUser(normal)


    //
}