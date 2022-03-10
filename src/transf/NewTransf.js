import { useState, useEffect} from 'react'

import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import Message from '../layouts/Message/Message'
import Select from '../form/Select'

import styles from './NewTransf.module.css'

function ServiceForm({handleSubmit, btnText, e}){
    const [categories, setCategories] = useState([])
    const [message, setMessage] = useState()
    const [transf, setTransf] = useState({})
    const [type, setType] = useState()
    
    var data = new Date();
    var dia = String(data. getDate()). padStart(2, '0');
    var mes = String(data. getMonth() + 1). padStart(2, '0');
    var ano = data. getFullYear();
    const dataAtual = dia + '/' + mes + '/' + ano;

    
    useEffect(()=> {
        const trans =
        fetch(`http://localhost:4000/${e}`,{
        method: 'GET',
        headers: {
            'Content-type': 'aplication/json',
        },
    })  
        .then((resp)=> resp.json())
        .then((data) =>{
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    function submit(e){
        
        e.preventDefault()
        if(transf.category == null || transf.transf == null){
            setMessage('Preencha todos os campos')
            setType('error')    
        }
       else{
           handleSubmit(transf)    
       }
    }

 

    function handleChange(e){
        setTransf({...transf,
            data: dataAtual,
            [e.target.name]: e.target.value},
            )
             
    }

    function handleCategory(e){
        
        setTransf({...transf, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
        
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            
            <Input 
                type='number'
                text='Valor transação'
                name='transf'
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />  

       
            <Select name='category_id' placeholder='Tipo da transação' options={categories} handleOnChange={handleCategory} value={transf.category ? transf.category.id : ''}/>
            <SubmitButton text={btnText} />
            {message && <Message type={type} msg={message} />}
        </form>
    )
}

export default ServiceForm
