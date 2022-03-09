import styles from './Transacao.module.css'

function Transacao({valor, data, category, type}){
    console.log(type)
    return(
        <article>
            <p className='tipo'>{category}</p>
            <p className='data'>{data}</p>
            <p className={styles[type.class]}>{valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>
        </article>
    )
}

export default Transacao