import { DataService } from '../services/data.service';
import { ItemOrder } from './item_order.model';

export class Order{

    summary: string
    orderNumber: number

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
        public total: number
        
        ){
    }

    addItemOrder(itemOrder: ItemOrder){

        this.itemOrders.push(itemOrder)

    }

}

