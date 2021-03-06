import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../models/item.model';
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
  loading = false;
  success = false;

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
      sliced: ['', Validators.required],
      tax_catagory: ['', Validators.required]
    });
  }

  async submitHandler() {
    this.loading = true;

    const formValue: Item = this.myForm.value;

    try {
      //use this object to create product
      console.log(formValue)
      const item: Item = Item.newItem(formValue)
      //this will verify that sliced and non sliced items can be called for the same item
      item.name = item.name.toLowerCase()
      item.combined_name = item.name
          //if sliced duplicate 
      if(item.sliced){
        item.sliced_option = true
        let item2 = Item.newItem(item)
       item2.sliced = true
       item.sliced = false
        item2.name = item2.name + " Tr."
        this.itemsService.addItem(item2).subscribe(
          response => {
            console.log(response)
            this.dialogRef.close()
          }, errorRes => {
            console.log(errorRes)
            this.dialogRef.close(errorRes)
          }
        )

      }else{
        item.sliced_option = false
      }
      
      
      this.itemsService.addItem(item).subscribe(
        response => {
          console.log(response)
          this.dialogRef.close()
        }, errorRes => {
          console.log(errorRes)
          this.dialogRef.close(errorRes)
        }
      )
      //this.dataService.addItem(item)
      this.success = true;

    } catch(err) {
      console.error(err)
    }

    this.loading = false;
    
  }

}
