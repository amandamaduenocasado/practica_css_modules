import styles from './card.module.css';

const Card = ({ url, title, text, color }) => {
    const colorStyles = styles[`${color}`];
    const  { cardStyles, headerStyles, buttonStyles} = styles;
    return (
        <div className = {`${cardStyles} ${colorStyles}`}>
            <img src = {url} alt='' />
            <h2 className = {headerStyles}>{title}</h2>
            <p className = {textStyles}>{text}</p>
            <button className = {`${buttonStyles} ${colorStyles}`}>Learn More</button>
        </div>
    );
};

export default Card;