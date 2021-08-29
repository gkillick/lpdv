import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item, ItemForm } from '../models/item.interface';
import { DataService } from '../services/data.service';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  myForm: FormGroup;
  item: Item

  //types of foods
  types: any[] = [
    {value: 'viennoiserie', viewValue: 'Viennoiserie'},
    {value: 'pains', viewValue: 'Pains'},
    {value: 'noel', viewValue: 'Nöel'}
  ];
  tax_classifications: any[] = [
    {value: 'normal', viewValue: 'normal'},
    {value: 'no_tax_6', viewValue: 'tax before 6'},
    {value: 'no_tax', viewValue: 'no tax'},
  ]

  constructor(private itemsService: ItemsService, private fb: FormBuilder, private dialogRef: MatDialogRef<EditItemComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.item = data.item
   }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: [this.item.name, Validators.required],
      item_type: [this.item.item_type, Validators.required],
      price: [this.item.price, Validators.required],
      sliced_option: [this.item.sliced_option, Validators.required],
      tax_catagory: [this.item.tax_catagory, Validators.required]
    });
  }

  async submitHandler() {
    const itemForm: ItemForm = this.myForm.value;

    try {

        const item = {...itemForm, id: this.item.id, uid: this.item.uid};
        item.name = item.name.toLowerCase();

        this.itemsService.editItem(item).then(resp => {
          console.log(resp);
          this.dialogRef.close();
        }).catch(err => {
          console.log(err);
        });
    } catch(err) {
      console.error(err);
    }

  }

  delete(){
    this.itemsService.deleteItem(this.item).then(resp => {
        console.log(resp)
        this.dialogRef.close()
      }).catch(err => {
        console.log(err)
      })
  }

}
