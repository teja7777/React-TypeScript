import React, { useState } from 'react'

const Stringtype = () => {
    let name = "Teja";
    console.log(name.toUpperCase());
    function printName(name: string): string {
        // setName1(1);
        setName1("Raja")
        setName2(name2.toUpperCase());
        return `Hai this is ${name}`;
    };
    let response: string = printName(name);
    console.log(response);

    const [name1, setName1] = useState<string>("Teja");
    /*Type script will automatically infer the default type*/
    const [name2, setName2] = useState("Satish");
    return (
        <>
            <div>{name}</div>
            <div>{name1}</div>
        </>
    )
}

export default Stringtype;