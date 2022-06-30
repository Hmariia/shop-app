import styles from '../styles/Card.module.css'

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
        <img src={item.image}></img>
        <div className={styles.text}>
          <h4>{item.name}</h4>
          <h4>{item.price}</h4>
        </div>
    </div>
  )
}

export default Card