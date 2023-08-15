export class Person
{
    constructor(firstName,lastName,age)
    {
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.age = age ;
    }

    info()
    {
        console.log(this.firstName,this.lastName,this.age)
    }
}