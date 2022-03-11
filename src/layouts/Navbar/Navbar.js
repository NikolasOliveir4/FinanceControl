import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

import Container from '../Container/Container'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
               
                <Link className={styles.logo} to='/'>
                    
                    <span>
                        FinanceControl
                        </span>
                </Link>
                
               
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/faturas">Faturas</Link></li>
                    <li className={styles.item}><Link to="/contato">Contato</Link></li>
                    
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar