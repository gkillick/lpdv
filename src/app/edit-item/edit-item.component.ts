import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../models/item.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  myForm: FormGroup;

  loading = false;
  success = false;
  item: Item

  //types of foods
  types: any[] = [
    {value: 'viennoiserie', viewValue: 'Viennoiserie'},
    {value: 'pains', viewValue: 'Pains'},
  ];
  tax_classifications: any[] = [
    {value: 'normal', viewValue: 'normal'},
    {value: 'no_tax_6', viewValue: 'tax before 6'},
    {value: 'no_tax', viewValue: 'no tax'},
  ]

  constructor(private dataService: DataService, private fb: FormBuilder, private dialogRef: MatDialogRef<EditItemComponent>, @Inject(MAT_DIALOG_DATA) data) {
    console.log(data)
    this.item = data.item
   }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: [this.item.name, Validators.required],
      item_type: [this.item.item_type, Validators.required],
      price: [this.item.price, Validators.required],
      sliced: [this.item.sliced, Validators.required],
      tax_catagory: [this.item.tax_catagory, Validators.required]
    });
  }

  async submitHandler() {
    this.loading = true;

    const formValue: Item = this.myForm.value;

    try {
      //use this object to create product

      const item: Item = new Item(this.item.id, formValue.name, formValue.item_type, formValue.price, formValue.sliced, formValue.tax_catagory)
      //this.dataService.saveItem(item)
      this.success = true;
      this.dialogRef.close()
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
    
  }

  delete(){

    //this.dataService.deleteItemById(this.item.id)

    this.dialogRef.close()
  }

}
