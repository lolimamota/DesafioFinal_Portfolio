import React from "react";

export default function ProjectTest(){
    
        const Array = [{Nome: A}, {Nome: B}, {Nome: C}, {Nome: D}, {Nome: E}, {Nome: F}, {Nome: G}, {Nome: H}, {Nome: I}, {Nome: J}, {Nome: K}, {Nome: L}]


    return(
        <>
        {Array.map((item) => (
            <h2>{item.Nome}</h2>
        ))}
        </>
    )
}