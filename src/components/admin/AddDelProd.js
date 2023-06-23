import  axios from "axios";
import { useState } from "react";

export default function AddDelProd() {

    const [data, setData] = useState({
        nm:  '',
        price:  '',
        sys:  '',
        dst:  '',
        descr:  '',
        imgcov:  '',
        genre:  '',
    })
    const url = 'http://localhost:8080/api/product'
    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            nm: data.nm,
            price: data.price,
            sys: data.sys,
            dst: data.dst,
            descr: data.descr,
            imgcov: data.imgcov,
            genre: data.genre,
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
        <div>
            <h2>Добавление компании</h2>
            <form className='form-company' onSubmit={(e) => submit(e)}>
        <input onChange={(e)=>handle(e)} value={data.nm} placeholder='имя должности' type="text" name='nm' id='nm'></input>
        <input onChange={(e)=>handle(e)} value={data.price} placeholder='цена' type="text" name='price' id='price'></input>
        <input onChange={(e)=>handle(e)} value={data.sys} placeholder='Система' type="text" name='sys' id='sys'></input>
        <input onChange={(e)=>handle(e)} value={data.dst} placeholder='Система' type="text" name='dst' id='dst'></input>
        <input onChange={(e)=>handle(e)} value={data.descr} placeholder='Описание' type="text" name='descr' id='descr'></input>
        <input onChange={(e)=>handle(e)} value={data.imgcov} placeholder='изображение обложки' type="text" name='imgcov' id='imgcov'></input>
        <input onChange={(e)=>handle(e)} value={data.genre} placeholder='жанр' type="text" name='genre' id='genre'></input>
        <button>Добавить</button>

        </form>
        </div>
    )
}