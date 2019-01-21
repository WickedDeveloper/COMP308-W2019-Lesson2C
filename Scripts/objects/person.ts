module objects {
    export abstract class Person {
    
        // private instance variables
        private _age: number;
        private _name: string;
    
        // public properties
        get name(): string {
            return this._name;
        }
    
        set name(newName: string) {
            this._name = newName;
        }
    
        get age(): number {
            return this._age;
        }
    
        set age(newAge: number) {
            this._age = newAge;
        }
    
        constructor(age: number, name: string) {
            this.age = age;
            this.name = name;
        }
    
        // private methods
    
        // public methods
        public saysHello(): void {
            console.log(`%c ${this.name} says hello!`,
                "font-size: 20px; color: blue; font-weight: bold;");
        }
    }
    }