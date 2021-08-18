import {ItemOrder} from "./item_order.interface";

export interface CustomerFormData {
  first_name: string;
  last_name: string;
  telephone: number;
  date: string;
}


export interface ItemFormInfo {
  name: string;
  id: string;
  number: number;
  sliced: boolean;
  item_type: string;
}

export interface SubmitFormData {
  itemOrders: ItemOrder[];
  personalData: CustomerFormData;
}
