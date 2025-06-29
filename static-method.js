class animal{
    constructor(name){
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    static capitalizeName(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
}

let dog = new animal("charlie");
dog.walk();

//* We could also use this
// class animal{
//     constructor(name){
//         this.name = animal.capitalizeName(name);
//     }
//     static capitalizeName(name){
//         return name.charAt(0).toUpperCase() + name.slice(1);
//     }
//     walk(){
//         console.log(`${this.name} is walking`);
//     }
// }

// let dog = new animal("dog");
// dog.walk();