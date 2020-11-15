import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  myForm: FormGroup;

  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddItemComponent>) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      //use this object to create product
      await console.log(formValue);
      this.success = true;
      this.dialogRef.close()
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
    
  }

}
