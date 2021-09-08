import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../actions/items";
import Item from "../Item/Item";
import style from "./Main.module.scss";

const Main = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const isFetching = useSelector(state => state.items.isFetching);

    useEffect(()=> {
        dispatch(getItems(items))
    }, [])

    return (
        <div className={style.item__inner}>
            {
                isFetching === false
                ?
                items.map((item, index) => <Item key={index} item={item}/>)
                :
                <div className={style.fetching}></div>  
            }
        </div>
    );
};

export default Main;