import { Item } from './item.model';
import { Order } from './order.model';

export class ItemOrder{

    //item order will have a reference to the item it belongs to and contain sliced data if needed

    constructor(
        public id:string,
        public user_id:string,
        public itemName: string,
        public combined_name,
        public order_id: string,
        public item_id: string,
        public amount: number,
        public sliced: boolean,
        public date: Date,
    ){}

    static newItemOrder(params: any){
        return new ItemOrder(params.id, params.user_id, params.string, params.combined_name, params.order_id, params.item_id, params.amount, params.sliced, params.date)
    }
}