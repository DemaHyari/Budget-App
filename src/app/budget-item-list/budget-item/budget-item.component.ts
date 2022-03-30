import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() removeBtnClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  removeItem(){
    this.removeBtnClick.emit()
  }
  cardClicked(){
    this.cardClick.emit()
  }
}
