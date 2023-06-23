import  axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Buylist() {

    const [data, setData] = useState({
        id_prod:  '',
        name_product:  '',
        user_name:  '',
        email:  '',
        paid_type:  '',
        ticket:  '',
        summ:  '',
    })
    const [prod, setProd]= useState([])
    const [nm, setNM]= useState('')
    const [idpr, setIdPr]= useState('')
    const [sm, setSMPr]= useState('')
const {id} = useParams()
    
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sympatheticgrowlingservice.danpamag.repl.co/api/product/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setProd(res.data.rows)
                    setNM(res.data.rows[0].name_product)
                    setIdPr(res.data.rows[0].id)
                    setSMPr(res.data.rows[0].price)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);    


const tk  = Math.floor(Math.random() * (200000 - 100000) + 100000);
    const url = 'http://localhost:8080/api/list'
    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            id_prod: id,
            name_product: nm,
            user_name: data.user_name,
            email: data.email,
            paid_type: data.paid_type,
            ticket: tk,
            summ: sm,
        }).then(res => {
            console.log(res.data)
            window.location.href = `/gamesdan-front/buycomp/${tk}`

        })
    }


    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(data)
    }
    function delPos(e) {
        fetch(`https://sppjfapi.andrieiiuzlov.repl.co/api/positions/${e}`,{
            method: 'DELETE'
        }).then((result) => {
            result.json().then((res) =>{
                console.log(res)
                window.location.reload()
            })
        })
    }
    return(
        <div className="buylist">
            <div style={{ width: "500px",display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            <h2>Укажите данные для платежа</h2>
            <form className='form-company' onSubmit={(e) => submit(e)}>
        <input onChange={(e)=>handle(e)} value={data.user_name} placeholder='имя пользователя' type="text" name='user_name' id='user_name'></input>
        <input onChange={(e)=>handle(e)} value={data.email} placeholder='почта' type="email" name='email' id='email'></input>
        <select  onChange={(e)=>handle(e)} value={data.paid_type} name="paid_type" id="paid_type">
  <option value="VISA">VISA</option>
  <option value="MasterCard">MasterCard</option>
  <option value="MIR">МИР</option>
  <option value="Наличные курьеру">наличные</option>
</select>
       
        <button>Добавить</button>

        </form>
        </div>
        </div>
    )
}