import {Map} from "immutable";
import DATA_ACTIONS from "./action";

const initState = new Map({
    data: []
})

const DataReduce=(state=initState,actions)=>{
    switch(actions.type){
        case DATA_ACTIONS.SET_JSON:
			return state.set('data', actions.data);
        default:
			return state;
    }
}

export default DataReduce;