import navStyles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
        <div className={navStyles.namecontainer}>
            <h3>Päivi Heiskanen</h3>
            <div></div>
        </div>
        <div className={navStyles.listcontainer}>
              <ul>
                <li>
                  <Link href='/'>New arivals</Link>
                </li>
                <li>
                  <Link href='/'>About us</Link>
                </li>
                <li>
                  <Link href='/'>Sale</Link>
                </li>
                <li className={navStyles.dropdown}>
                  <button className={navStyles.button}>Products</button>
                  <div className={navStyles.content}>
                    <Link href="#">Link 1</Link>
                    <Link href="#">Link 2</Link>
                    <Link href="#">Link 3</Link>
                  </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar