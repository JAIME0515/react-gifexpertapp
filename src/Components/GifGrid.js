import { GifGridItem } from "./GifGriditem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export const GifGird = ({category})=>{
    const {data:images,loading} = useFetchGifs(category);

    return(
    <>
    <h3> {category}</h3> 
    { loading && <p>Loading</p>}
    <div className="tarjeta-grid">
    
    {
        images.map( img =>(
            <GifGridItem 
            key={ img.id}
            {...img} />
        ))

    }
   
    </div>
    </>
    )
}
