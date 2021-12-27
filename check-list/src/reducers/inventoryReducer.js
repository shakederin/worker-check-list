import { fullEquipmentList } from "../app/DB";
const inisialState = [...fullEquipmentList];

export const inventoryReducer = (state = [], action) =>{
    switch(action.type){
        case "Update_Inventory":
            const newState = action.payload.map((item)=>{
                for(const product of inisialState){
                    if(product.name === item.name){
                        return {...item,
                             fullQuantity: product.fullQuantity,
                             missing:product.fullQuantity- item.current}
                    }
                }
                
            })
            return newState;
        case "Add_Product":
        case "Remove_Product":         
        default:
            return state;
    }
}