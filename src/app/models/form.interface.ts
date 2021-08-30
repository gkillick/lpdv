import {ItemOrder} from "./item_order.interface";

export interface CustomerFormData {
  first_name: string;
  last_name: string;
  telephone: number;
  date: string;
  total: number;
  sub_total: number;
  tax: number;
  timeOfDay: string;
  payed: boolean;
  notes: string;
}


export interface ItemFormInfo {
  name: string;
  id: string;
  number: number;
  sliced: boolean;
  item_type: string;
  tax_category: string;
  price: number;
}

export interface SubmitFormData {
  itemOrders: ItemOrder[];
  orderMetadata: CustomerFormData;
}
