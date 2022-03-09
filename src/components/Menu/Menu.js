import { Link } from 'react-router-dom'

import styles from './Menu.module.css'

function Menu(){
    return(
        <div>
            <ul className={styles.menu}>
                
                <li className={styles.item}>
                    
                    <Link to="/"><button>HOME</button></Link>
                
                </li>
                <li className={styles.item}>
                   
                    <Link to="/faturas"><button>FATURAS</button></Link>
                    
                </li>
                <li className={styles.item}>
                    
                    <Link to="/"><button>INVESTIMENTO</button></Link>
                    
                </li>
                <li className={styles.item}>
                    
                    <Link to="/"><button>POUPANÇA</button></Link>
                    
                </li>
                <li className={styles.item}>
                    
                    <Link to="/"><button>RECARGA RÁPIDA</button></Link>
                    
                </li>
                <li className={styles.item}>
                   
                    <Link to="/"><button>EMPRÉSTIMO</button></Link>
                   
                </li>
                <li className={styles.item}>
                    
                    <Link to="/"><button>CARTÕES</button></Link>
                    
                </li>
               
               
               
            </ul>
        </div>
    )
}

export default Menu