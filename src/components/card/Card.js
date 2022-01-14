import classes from './Card.module.css';

function Card(props) {
    return (
        <div className={classes.container}>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}

export default Card;
