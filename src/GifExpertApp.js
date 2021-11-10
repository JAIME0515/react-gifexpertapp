import React, { useState } from 'react';
import { CategoryAdd } from './Components/CategoryAdd';
import { GifGird } from './Components/GifGrid';


export const GifExpertApp = (() => {
    //const categories = ['Onepunch', 'dragonball', 'samuraix']
    const [categories, setCategories] = useState(['dragonball']);
    return(
    <>
    <h1> GifExpertApp</h1>
    <CategoryAdd setCategories={ setCategories}/> 
    <hr></hr>
    
    <ol>
        {
            categories.map((category) => { 
                return <GifGird key={category} category={category}/> 

            })
            
        }
    </ol>

    </>);

})

