import Card from '../card/Card';
import classes from './CardList.module.css';

function CardList(props) {
    return (
        <div className={classes.cardList}>

            {props.monsters.map((monster) => <Card key={monster.id} monster={monster} />)}
        </div>
    );
}

export default CardList;
