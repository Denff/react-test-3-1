import axios from "axios";
import { setIsFetching, setItems } from "../reducers/itemsReducer";

export const getItems = (items) => {
    if(!items) {
        console.log("the server is not connected or it simply does not exist");
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true));
            await axios.get(`http://localhost:8000/items`)
                .then(res => {
                    const items = res.data;
                    dispatch(setItems({ items }));
                });
    }
}
