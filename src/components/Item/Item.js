import style from "./Item.module.scss";

const Item = (props) => {
    const item = props.item;

    return (
        <div className={style.item}>
            <div className={style.item__header}>{item.header}</div>
            <ul className={style.item__options}>
                {
                    item.options.map((option, id) => <li 
                        key={id} 
                        className={style.item__option}>{option}</li>)
                }
            </ul>
            <div className={style.item__text}>{item.text}</div>
        </div>
    );
};

export default Item;