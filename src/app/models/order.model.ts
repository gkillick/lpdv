import { ItemOrder } from './item_order.model';

export class Order{

    static traker: number = 1
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
        public total: number,

        ){
            this.orderNumber = Order.traker
            Order.traker+=1
            this.summary= ""
            for(let item_order of this.itemOrders){
            this.summary= this.summary+ item_order.item.name + " "
            this.summary= this.summary+ item_order.amount+ " "
            }
        }


    addItemOrder(itemOrder: ItemOrder){
        this.itemOrders.push(itemOrder)
        this.summary = this.summary + itemOrder.item.name + " " + itemOrder.amount + " "
    }

    updateSummary(){
            this.summary= ""
            for(let item_order of this.itemOrders){
            this.summary= this.summary+ item_order.item.name + " "
            this.summary= this.summary+ item_order.amount+ " "
            }
    }
}

