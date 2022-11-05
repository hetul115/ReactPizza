import { atom } from "recoil";

export const globalCart = atom({
    key:'globalCart',
    default:{
        id:'',
        items:[],
        total_amt:0
    },
})