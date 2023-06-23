import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import './style_comps.css'

export default function PageOfProd(){


    const [data, setData] = useState({
        id_prod:  '',
        name_product:  '',
        user_name:  '',
        email:  '',
        descript:  ''
    })

    const [prod, setProd]= useState([])
    const [pst, setPost]= useState([])
    const [nm, setNM]= useState('')
    const [sm, setSMPr]= useState('')
const {id} = useParams()
    
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sympatheticgrowlingservice.danpamag.repl.co/api/product/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setProd(res.data.rows)
                    setNM(res.data.rows[0].name_product)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sympatheticgrowlingservice.danpamag.repl.co/api/fdbk/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setPost(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    function transf(e){
 window.location.href = `/buy/${e}`

    }

    const url = 'https://sympatheticgrowlingservice.danpamag.repl.co/api/fdbk'
    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            id_prod: id,
            name_product: nm,
            user_name: data.user_name,
            email: data.email,
            descript: data.descript,
        }).then(res => {
            console.log(res.data)
            window.location.reload()

        })
    }


    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }


    return(
<div className="Prod-page">
    {prod.map((e)=> {
        return(
            <div className="prod-item" key={e.id}>
                <h2>{e.name_product}</h2>
             <img className="img_crd" src={e.image} alt="image product" />
                   <div className="descr">
                       <h4>{e.price} руб</h4>
                       <p>Жанр: {e.genre}</p>
                       <p>Игра для: {e.system_game}</p>
                       <p>Поставляется как: {e.dist}</p>
                       <p className="title_prod">{e.descript}</p>
                       <button onClick={() => transf(e.id)}>Купить</button>

                   </div>   
            </div>
        )
        
    })}
    <div className="feedback">
        <h2>Комментраии к игре</h2>
        <div className="pub-post">
        <form className='form-company' onSubmit={(e) => submit(e)}>
        <input onChange={(e)=>handle(e)} value={data.user_name} placeholder='имя пользователя' type="text" name='user_name' id='user_name'  required="required"></input>
        <input onChange={(e)=>handle(e)} value={data.email} placeholder='почта' type="email" name='email' id='email' required="required"></input>
        <input onChange={(e)=>handle(e)} value={data.descript} placeholder='описание' type="text" name='descript' id='descript'  required="required"></input>
        
       
        <button>Добавить</button>

        </form>
        </div>
        <h3>Что пишут другие:</h3>

        <div className="feedback-list">
            {pst.map((e) => {
                return(
                    <div className="feedback-list-item" key={e.id}>
                        <h4>{e.user_name}</h4>
                        <p>{e.descript}</p>
                    </div>
                )
            })}
        </div>
    </div>
</div>
    )
}