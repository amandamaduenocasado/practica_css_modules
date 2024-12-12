import styles from './container.module.css';

const Container = ({children}) =>{
    const {box} = styles;

    return <div className={`${box}`}>{children}</div>;
}

export default Container;