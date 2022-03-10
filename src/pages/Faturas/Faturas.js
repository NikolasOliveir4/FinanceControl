import { useEffect, useState } from "react"

import Menu from "../../components/Menu/Menu"
import Transacao from "../../components/Transacao/Transacao"


import styles from './Faturas.module.css'

function Faturas(){

    const [transf, setTransf] = useState([])

    const [style, setStyle]= useState({ 
        
        class: 'valor_pos', })
    const [style2, setStyle2]= useState({ 
        
        class: 'valor_neg', })
        
    useEffect(()=> {
        fetch(`http://localhost:4000/transacoes`,{
        method: 'GET',
        headers: {
            'Content-type': 'aplication/json',
        },
    })  
        .then((resp)=> resp.json())
        .then((data) =>{
            setTransf(data)
        })
        .catch((err) => console.log(err))
    }, [transf])

    return(
        <div className={styles.faturas}>
            <section>
            <Menu />    
            </section>
            
            <div className={styles.display}>
            
            
            
            {transf.length > 0 ? 
            transf.map((transf) =>(
                <div className={styles.column}>
                   {transf.category.id < 3 ?(
                       <Transacao 
                       valor={transf.transf}
                       data={transf.data}
                       category={transf.category.name}
                       type={style}
                       />
                   ):(
                    <Transacao 
                    valor={transf.transf}
                    data={transf.data}
                    category={transf.category.name}
                    type={style2}
                    />
                   )
                    
                   } 
                </div>
                
                
                
            )): <p> Não há faturas</p>}
            </div>
            

        </div>
    )
}

export default Faturas