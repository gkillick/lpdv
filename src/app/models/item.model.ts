import { type } from 'os';

export class Item{
    

    constructor(public name: string, public item_type: string, public price: string){

    }
}
    //const {type, data} = resp_data


export class Order{
    constructor(public name:string, public itemOrders: ItemOrder[]){}
}
export class ItemOrder{
    constructor(
        public item: Item,
        public amount: number
       
        


    ){}
}