import styles from './Transacao.module.css'

function Transacao({valor, data, category, type}){
    console.log(type)
    return(
        <article>
            <p className={styles.tipo}>{category}</p>
            <p className={styles.data}>{data}</p>
            <p className={styles[type.class]}>R${valor}</p>
        </article>
    )
}

export default Transacao