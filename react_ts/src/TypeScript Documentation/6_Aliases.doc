// In TypeScript, both type aliases and interface are used to define custom types.
// They have overlapping capabilities but also some key differences. 
// Understanding when to use each can help you write clearer and more maintainable code.

/********Key Differences ***********/
/* 
1.Declaration Merging:
  Interface: Interfaces can be merged. If you define an interface multiple times,
            TypeScript will merge them into a single definition. 
  Type Alias: Type aliases cannot be merged. Defining a type alias with the same name multiple times
             will result in a compilation error.
*/
// Interface merging
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = { name: "Alice", age: 30 };

// Type alias - this will cause an error
type Employee = {
    name: string;
};
// type Employee = {
//     age: number;  // Error: Duplicate identifier 'Employee'.
// };


/*
2.Extending Types:

Interface: Interfaces can extend other interfaces and classes. This allows for building complex types through inheritance.
Type Alias: Type aliases can extend interfaces and other types using intersections.
*/
// Extending with interface
interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark(): void;
}

const dog: Dog = {
    name: "Buddy",
    bark: () => console.log("Woof!"),
};

// Extending with type alias
type Person1 = {
    name: string;
};

type Employee1 = Person1 & {
    employeeId: number;
};

const employee1 : Employee1 = {
    name: "Alice",
    employeeId: 123,
};

/*
 ************ Summary ************

Interfaces:
    Can be merged.
    Can extend other interfaces and classes.
    Can be implemented by classes.
    Ideal for defining the shape of objects and classes.


Type Aliases:
    Cannot be merged.
    Can create union types, intersection types, and complex type compositions.
    Cannot be implemented by classes directly.
    More flexible in defining complex types, including primitives, unions, and tuples.


*****************When to Use Which***********
Use interface:
    When you need to define the shape of an object or class.
    When you need to take advantage of declaration merging.
    When you need to extend or implement structures in a class hierarchy.
Use type:
    When defining primitive types, union types, tuples, or any other complex types.
    When you need more flexibility and composition in types.
    When you want to avoid potential issues with declaration merging.
*/