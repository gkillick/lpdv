import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Item, ItemForm} from '../models/item.interface';
import { DataService } from '../services/data.service';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  myForm: FormGroup;
  errorMessage: string

  //types of foods
  types: any[] = [
    {value: 'viennoiserie', viewValue: 'Viennoiserie'},
    {value: 'pains', viewValue: 'Pains'},
    {value: 'noel', viewValue: 'Nöel'},
  ];
  tax_classifications: any[] = [
    {value: 'normal', viewValue: 'normal'},
    {value: 'no_tax_6', viewValue: 'tax before 6'},
    {value: 'no_tax', viewValue: 'no tax'},
  ]

  constructor(private itemsService: ItemsService, private fb: FormBuilder, private dialogRef: MatDialogRef<AddItemComponent>) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      item_type: ['', Validators.required],
      price: ['', Validators.required],
      sliced_option: ['', Validators.required],
      tax_catagory: ['', Validators.required]
    });
  }

  async submitHandler() {

    const itemForm: ItemForm = this.myForm.value;

    try {

      if(itemForm.sliced_option){

        var {sliced_option: boolean, ...slicedItem} = {...itemForm, sliced: true, combined_name: itemForm.name}
        var {sliced_option: boolean, ...unslicedItem} = {...itemForm, sliced: false, combined_name: itemForm.name}
        slicedItem.name = slicedItem.name + "Tr."

        this.itemsService.addItems([slicedItem, unslicedItem]).then(resp => {
            this.dialogRef.close()
        }).catch(err => {
          console.log(err)
        })

      }else{

        var {sliced_option: boolean, ...unslicedItem} = {...itemForm, sliced: false, combined_name: itemForm.name}

        this.itemsService.addItem(unslicedItem).then(resp => {
            this.dialogRef.close()
        }).catch(err => {
          console.log(err)
        })

      }

    } catch(err) {
      console.error(err)
    }
  }

}
