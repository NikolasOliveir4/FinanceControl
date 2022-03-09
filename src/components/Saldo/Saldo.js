import styles from './Saldo.module.css'

function Saldo({props}){
    return (
        <div className={styles.saldo}>
            {props && props.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
            <p>Saldo disponível</p>
        </div>
    )
}

export default Saldo