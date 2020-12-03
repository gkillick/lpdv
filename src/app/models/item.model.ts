export class Item{

    constructor(
        public id:string,
        public user_id:string,
        public name: string, 
        public item_type: string, 
        public price: number, 
        public sliced: boolean,
        public sliced_option: boolean,
        public tax_catagory: string
        ){


    }
    static newItem(params: any):Item{
        let item = new Item(params.id, params.user_id, params.name, params.item_type, params.price, params.sliced,params.sliced_option, params.tax_catagory);
        return item;
    }
}
    //const {type, data} = resp_data


