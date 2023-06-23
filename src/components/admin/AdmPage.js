import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function AdmPage(){

    
    let usr = localStorage.getItem('adm_name')
    let admr = localStorage.getItem('isAuthAdm')
    const [list_buy, setProd] = useState([])

    useEffect(() => {
            axios.get(`http://localhost:8080/api/list/`)
                .then(res => {
                    console.log(res.data.rows)
                    setProd(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
    }, [  ]);


    if(!admr) {
        window.location.href = "/adm/auth"
        return(
            <h2>Вы не авторизовались. Вы будуете перенаправлены на страницу авторизации</h2>
        )
    }
    return(
        <div className="amdns">
            <div className="item-amd">
           <h2> Hello {usr}</h2>
            <Link to="/adm/prod-ed">операции с продукциями</Link>
            <div className="feedbacks">

            </div>
            <div className="bills">
                <h2>Проданы следующим покупателям</h2>
                <ul>
            {list_buy.map((e) => {
                return(
                    <li className="item-bill">
                      <Link to={`/buycomp/${e.ticket}`}>{e.user_name} {e.name_product}</Link>
                        
                    </li>
                )
            })}</ul>
            </div>
            </div>
        </div>
    )
}