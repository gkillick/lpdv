import { ItemOrder } from './item_order.model';

export class Order{
    constructor(
        public id:number,
        public user_id: number,
        public first_name:string, 
        public last_name:string,
        public telephone: number,
        public date: string,
        public itemOrders: 
        ItemOrder[]){}
}
