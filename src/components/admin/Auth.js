import {useState, useEffect} from 'react'
export default function Auth() {
    const [aemail, setaEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSub = (e) => {
      e.preventDefault();
      
        const fetcher = async (lgn, pass) => {
        const response1 = await fetch("http://localhost:8080/api/user/");
        const data1 = await response1.json();
        const data2 = data1.rows
        console.log(data2)
        const result = data2.find(({ name_adm }) => name_adm === lgn);
        console.log(result)
    try{
        if(lgn == result.name_adm && pass == result.pwd){
            console.log('pass')
                let token = Math.floor(Math.random() * (1000000 - 1) + 1);
              console.log(token)
              console.log('pass')
              localStorage.setItem('test1', token);
              localStorage.setItem('adm_name', aemail);
              localStorage.setItem('isAuthAdm', true)
              window.location.href='/adm/';
              console.log('reboot is compl')
        }else{
            console.log('fail')
            alert('Ошибка авторизации')
        }
    }catch(err){
      console.log('Ошибка авторизации \n error info: ', err)
      alert('Ошибка авторизации пожалуйста, обратитесь в тех поддержку: admin@dn-games.ru')
    }
    }  
    
    fetcher(aemail, password)

  };



    return (
      <form onSubmit={handleSub}>
        <div>
          <label htmlFor='email'>Login</label>
          <input type='text' id='email' value={aemail} onChange={(e) => setaEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Пароль</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button>Войти</button>
      </form>
    );
  }