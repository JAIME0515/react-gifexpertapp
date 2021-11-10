import { useEffect, useState } from "react/cjs/react.development"
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) =>{
    const [state, Setstate] = useState({
        data: [], 
        loading: true
    });
    
    useEffect(() =>{
      getGifs( category)
      .then( imgs  => {
        console.log(imgs) 
        Setstate({
            data: imgs,
            loading: false
            }
            );
     
    }).catch(console.error);
    }, [category])
    
    return state;
}