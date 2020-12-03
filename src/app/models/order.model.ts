import { DataService } from '../services/data.service';
import { ItemOrder } from './item_order.model';

export class Order{

    summary: string
    orderNumber: number
    itemOrders: ItemOrder[]

    constructor(
        public id: string,
        public user_id: number,
        public first_name:string, 
        public last_name:string,
        public telephone: number,
        public date: Date,
        public sub_total: number,
        public tax: number,
        public total: number
        
        ){
    }

    static newOrder(params: any){
        return new Order(params.id, params.user_id, params.first_name, params.last_name, params.telephone,params.date, params.sub_total, params.tax,params.total )
    }

    addItemOrder(itemOrder: ItemOrder){

        this.itemOrders.push(itemOrder)

    }

}

