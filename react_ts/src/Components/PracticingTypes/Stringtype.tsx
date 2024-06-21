import React, { useEffect, useRef, useState } from 'react'

const Stringtype = () => {

    let name = "Teja";
    console.log(name.toUpperCase());

    const [name1, setName1] = useState<string>("Teja");
    /*Type script will automatically infer the default type*/
    const [name2, setName2] = useState("Satish");
    let useRefName = useRef<string>("Teja");

    function printName(name: string): string {
        // setName1(1);
        return `Hai this is ${name}`;
    };
    let response: string = printName(name);
    console.log(response);
    useEffect(() => {
        setName1("Raja")
        setName2(name2.toUpperCase());
    }, [])

    return (
        <>
            <div>{name}</div>
            <div>{name1}</div>
            <div>{useRefName.current}</div>
        </>
    )
}

export default Stringtype;