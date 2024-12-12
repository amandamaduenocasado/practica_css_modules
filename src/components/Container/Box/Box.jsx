import styles from './box.module.css';

const Box = ({color, title, text})=>{
    const {box, buttonStyle, titleStyle, image} = styles;
    const colorStyle = styles[`bg${color}`];
    const colortextStyle = styles[`tx${color}`];
    return (
        <div className={`${colorStyle} ${box}`}>
            <img className={`${image}`} src={`/images/${title}.svg`} alt="" />
            <h2 className={titleStyle}>{title}</h2>
            <p>{text}</p>
            <button className={`${buttonStyle} ${colortextStyle}`}>Learn More</button>
        </div>
    )
}

export default Box;