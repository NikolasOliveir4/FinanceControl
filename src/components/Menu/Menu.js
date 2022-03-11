import {AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {BsGraphUp, BsPiggyBank, BsCreditCard2Back, BsFileText} from 'react-icons/bs'

import { Link } from 'react-router-dom'

import styles from './Menu.module.css'

function Menu(){
    return(
        <div>
            <ul className={styles.menu}>
                
                <li className={styles.item}>
                    <Link to="/">
                    <button>
                    <AiOutlineHome /> HOME
                    </button>
                    </Link>
                
                </li>
                <li className={styles.item}>
                   
                    <Link to="/faturas">
                        <button>
                        <BsFileText /> FATURAS
                        </button>
                    </Link>
                    
                </li>
                <li className={styles.item}>
                    
                    <Link to="/">
                    <button>
                    <BsGraphUp /> INVESTIMENTOS
                    </button>
                    </Link>
                    
                </li>
                <li className={styles.item}>
                    
                    <Link to="/">
                        <button>
                        <BsPiggyBank /> POUPANÇA
                        </button>
                        
                    </Link>
                    
                </li>

                <li className={styles.item}>
                    <Link to="/">
                        <button>
                            <FaRegMoneyBillAlt /> EMPRÉSTIMOS
                        </button>
                    </Link>
                </li>
                <li className={styles.item}>
                    
                    <Link to="/">
                        <button>
                        <BsCreditCard2Back /> CARTÃO
                        </button>
                    </Link>
                    
                </li>

                <li className={styles.item}>
                    
                    <Link to="/">
                        <button>
                        <AiOutlineShoppingCart /> GASTOS
                        </button>
                    </Link>
                    
                </li>
               
               
               
            </ul>
        </div>
    )
}

export default Menu