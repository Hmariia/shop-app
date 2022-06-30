import styles from '../styles/Item.module.css'

const card = () => {
  return (
    <div className={styles.container}>
        <img src='/hg.jpg'></img>
        <h4>Item 1</h4>
        <h4>€18.00</h4>
    </div>
  )
}

export default card