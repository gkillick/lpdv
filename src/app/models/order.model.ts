import { ItemOrder } from './item_order.model';

export class Order{
    constructor(
        public id: string,
        public user_id: number,
        public first_name:string, 
        public last_name:string,
        public telephone: number,
        public date: Date,
        public itemOrders: 
        ItemOrder[],
        public before_tax: number,
        public tax: number,
        public total: number,
        public description: string,
        ){


            this.description = ""
            for(let item_order of this.itemOrders){
            this.description = this.description + item_order.item.name + " "
            this.description = this.description + item_order.amount+ " "
            }
        }
}

