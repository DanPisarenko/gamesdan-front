import {useState, useEffect} from 'react'
import {getCards} from "../api.js"
import Card from "./Card"
import './style_comps.css'


export default function Catolog() {

    const [pords, setProds] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);
let admr = localStorage.getItem('isAuthAdm')



useEffect(() => {
    const setNewCards = async () => {
        let res = await getCards();
        setIsLoaded(true);
        console.log(res);
        setProds(res);
    };
    setNewCards();
}, []);
function delPos(e) {
  if (window.confirm("Вы хотите удалить инфу о товаре?") == true) {
  fetch(`https://sympatheticgrowlingservice.danpamag.repl.co/api/product/${e}`,{
      method: 'DELETE'
  }).then((result) => {
      result.json().then((res) =>{
          console.log(res)
          window.location.reload()
      })
  })}else{
    alert('ОТМЕНА ДЕЙСТВИЯ')
  }
}

if (!isLoaded) {
    return(
<div className='loading_block'>
  <div className='bb'>
    <h2>Пожалуйста подождите, данные загружаются</h2>
    <p>Примечание: Данные могут загружаются примерно 20 сек-1 мин.</p>
  </div>
</div>
    );
  } else {
    if(!admr){
          return (
        <div className="cards_main">
        <div className="ff">

        {pords.map((el, index) => {return <Card key={index} prod={el}/>})}
      </div>
      </div>
    );
    }else{
      return (
        <div className="cards_main">
        <div className="ff">

        {pords.map((e) => {return(

<div className="card_prod" key={e.id}> 
<button style={{width: "64px"}} onClick={()=> delPos(e.id)}>Удалить</button>
<img className="img_crd" src={e.image} alt="image product" />
<div className="descr">
    <h4>{e.price}</h4>
    <a style={{fontSize: "12pt"}} href={`/gamesdan-front/prod/${e.id}`}>{e.name_product}</a>

</div>
</div>
        )})}
      </div>
      </div>
    );
    }

  }



}