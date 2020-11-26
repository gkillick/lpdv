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
        public total: number,

        ){
            this.summary= ""
            for(let item_order of this.itemOrders){
                if(item_order.amount > 0){
                    this.summary= this.summary+ item_order.item.name + " "
                    this.summary= this.summary+ item_order.amount+ " "
                }
            }
        }



    addItemOrder(itemOrder: ItemOrder){
        this.itemOrders.push(itemOrder)
        if(itemOrder.amount > 0){
        this.summary = this.summary + itemOrder.item.name + " " + itemOrder.amount + " "
        }
    }

    updateSummary(){
            this.summary= ""
            for(let item_order of this.itemOrders){
                if(item_order.amount > 0){
                    this.summary= this.summary+ item_order.item.name + " "
                    this.summary= this.summary+ item_order.amount+ " "
                }
            }
    }
}

