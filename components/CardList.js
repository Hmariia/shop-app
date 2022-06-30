import Card from "./Card"
import cardStyles from '../styles/Card.module.css'

const CardList = ({ items }) => {
  return (
    <div className={cardStyles.cardBox}>
      {items.map((item, index) => (
        <Card item={item} key={index}/>
      ))}
    </div>
  )
}

export default CardList