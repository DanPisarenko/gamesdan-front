import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";




export default function Complete(){

    let styles = {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    let styles2= {
        width: "280px",
        padding: "15px",
    }

    const [prod, setProd]= useState([])
    const {id} = useParams()
        
        useEffect(() => {
            if ( id ) {
                axios.get(`https://sympatheticgrowlingservice.danpamag.repl.co/api/list/${id}`)
                    .then(res => {
                        console.log(res.data.rows)
                        setProd(res.data.rows)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }, [ id ]);
    return(
        <div className="cntr" style={styles}>
            <div className="checkout" style={styles2}>
            <h2>Покупка завершена</h2>
            <h3>АО Дан-Игромир</h3>
            {prod.map((e)=>{
                return(
                <div>
                <p>Название продукта {e.name_product}</p>
                <b>Сумма: {e.summ} руб.</b>
                <br/>
                <b>ФИО Покупателя: {e.user_name}</b>
                    <br/>
                <b>E-mail Покупателя: {e.email}</b>
                 <br></br>   
                <b>Оплата: {e.paid_type}</b>
                </div>)
            })}
            <div style={{marginTop: "32px"}}>
            <Link to='/gamesdan-front/' style={{fontSize: "12pt"}}>Вернуться на главную страницу</Link>
            </div>
            </div>
        </div>
    )
}