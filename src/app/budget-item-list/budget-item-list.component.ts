import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemDetailsComponent } from '../edit-item-details/edit-item-details.component';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems!: Item[];
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() updateItem: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onDeleteItem(item: Item) {
    this.deleteItem.emit(item)
  }
  onCardClick(item: Item){
    this.dialog.open<EditItemDetailsComponent>(EditItemDetailsComponent, {
      width: '70vw',
      data: item
    }).afterClosed().subscribe(result => {
      if(result){
        this.updateItem.emit({
          old: item,
          new: result
        })
      }
    });
  }

}
export interface UpdateEvent {
  old: Item;
  new: Item;
}