import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories})=>{
    const [inputValue, setInputValue] = useState('')
    
    const cambioinput = (e) =>{
        setInputValue(e.target.value);
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
        setCategories(cats => [inputValue,...cats]);
        setInputValue('');    
    }
        
    }
    return(
    
        <form onSubmit={handlesubmit}>
        <input type="text" value={inputValue} onChange={cambioinput}/>
        
        </form>   
    )
    

}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}