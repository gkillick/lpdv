
export interface ItemForm {
        uid: string,
        id: string
        name: string, 
        item_type: string, 
        price: number, 
        sliced_option: boolean,
        tax_catagory: string
}


export interface Item {
        uid: string
        id: string
        name: string, 
        item_type: string, 
        price: number, 
        sliced: boolean,
        tax_catagory: string
}
