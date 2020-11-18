import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  //form object
  myForm: FormGroup;

  loading = false;
  success = false;

  items = {
    "breads": ["bagels", "baguettes"],
    "baked_goods": ["cookes","chocolatines"]
  }
  
  

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NewOrderComponent>) { }

  group={};

  ngOnInit(): void {



    this.myForm = this.fb.group({
      name: ['', Validators.required],
    });
    for (var key in this.items) {
      this.items[key].forEach(element => {
        console.log(element)
        this.myForm.addControl(element, new FormControl('', ))
      });
  }


  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      //use this object to create order
      console.log(formValue)
      this.success = true;
      this.dialogRef.close()
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
    
  }

}
