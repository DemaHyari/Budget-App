import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-edit-item-details',
  templateUrl: './edit-item-details.component.html',
  styleUrls: ['./edit-item-details.component.scss']
})
export class EditItemDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Item
  ) { }

  ngOnInit(): void {
  }
  onSubmitted(itemUpdated: Item){
    this.dialogRef.close(itemUpdated)
  }
  cancel(){
    this.dialogRef.close()
  }
}
