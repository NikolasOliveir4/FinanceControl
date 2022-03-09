import LinkButton from '../../components/ButtonHome/LinkButton'
import Menu from '../../components/Menu/Menu'
import Saldo from '../../components/Saldo/Saldo'
import styles from './Home.module.css'

import {useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react'
import NewTransf from '../../transf/NewTransf'
import ButtonTransf from '../../components/ButtonTransf/ButtonTransf'



function Home(){
    const [showNewTransf, setShowNewTransf] = useState(false)
    const [showTransfNeg, setShowTransfNeg] = useState(false)
    const [showTransfPos, setShowTransfPos] = useState(false)
    const [saldo, setSaldo] = useState([])
    const [tipo, setTipo] = useState('')
    const [soma, setSoma] = useState()

    

   useEffect(()=>{
        somarSaldo()
   },[saldo])
   
    useEffect(()=> {
    fetch(`http://localhost:4000/transacoes`,{
    method: 'GET',
    headers: {
        'Content-type': 'aplication/json',
    },
})  
    .then((resp)=> resp.json())
    .then((data) =>{
        setSaldo(data)
    })
    .catch((err) => console.log(err))
}, [])
    

    function somarSaldo(){  

        console.log(saldo)
        

        setSoma(saldo.map(a=> +a.transf).reduce(function(acumulador, atual){
            return acumulador + atual
        },0))

        
        

        
      
    }
   


    
    

    function createPost(transf){
        //initialize cost and services
        

        fetch('http://localhost:4000/transacoes',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(transf),

        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            
           
        })
        .catch(err=>console.log(err))

        

    fetch(`http://localhost:4000/transacoes`,{
        method: 'GET',
        headers: {
        'Content-type': 'aplication/json',
    },
})  
    .then((resp)=> resp.json())
    .then((data) =>{
        setSaldo(data)
    })
    .catch((err) => console.log(err))

    somarSaldo()
        
    }

    function addType(){
        setTipo('categories_positivas')
        console.log(tipo)
        setShowTransfPos(!showTransfPos)
        setShowTransfNeg(false)
        
    }
    function addType2(){
        setTipo('categories_negativas')
        console.log(tipo)
        setShowTransfNeg(!showTransfNeg)
        setShowTransfPos(false)
        
    }

    function toggleNewTransf(){
        setShowNewTransf(!showNewTransf)
        setShowTransfNeg(false)
        setShowTransfPos(false)
        console.log('apertou o botão')
    }
    return(
        <div className={styles.home}>
           <section>
            <Menu />
           </section>
           <div className={styles.display}>
            <div>
            <Saldo props={soma}/>
            </div>
            
            <div className ={styles.buttons}>
                <button  onClick={toggleNewTransf} className={styles.btn}>
                        {!showNewTransf ? '+' : '+'}
                </button>
                <div className={styles.barra}></div>
                <LinkButton text='Faturas' to='/faturas'/>
            </div>
            
                        
                        <div>

                        { showNewTransf && (
                            <div>
                               
                                <button onClick={addType} className={styles.btn_transf}>
                                Entrada
                                </button>
                                <button onClick={addType2} className={styles.btn_fatura}>
                                Saída   
                                </button>
                            </div>
                            )}
                        <div className={styles.form}>
                        {showTransfNeg &&(
                            <NewTransf
                            handleSubmit={createPost}
                            btnText='Adicionar'
                            e={tipo}                               
                            />
                        )}
                        {showTransfPos &&(
                            <NewTransf
                            handleSubmit={createPost}
                            btnText='Adicionar'
                            e={tipo}                               
                            />
                        )}
                        </div>
                        


                           
                    </div>

           </div>
        </div>
    )
}

export default Home