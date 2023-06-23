import './style_comps.css'


export default function Card(fn){

    return(
        <div className="card_prod"> 
                   <img className="img_crd" src={fn.prod.image} alt="image product" />
                   <div className="descr">
                       <h4>{fn.prod.price}</h4>
                       <a style={{fontSize: "12pt"}} href={`/gamesdan-front/prod/${fn.prod.id}`}>{fn.prod.name_product}</a>

                   </div>
               </div>
   )


}