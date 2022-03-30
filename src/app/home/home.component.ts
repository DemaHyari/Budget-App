import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[] = new Array<Item>();
  totalBudget: number= 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  addItem(item: Item){
    this.items.push(item);
    this.totalBudget += item.amount; 
  }
  deleteItem(item: Item){
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.totalBudget -= item.amount
    console.log('5244')
  }
  updateItem(updateEvent: UpdateEvent){
    this.items[this.items.indexOf(updateEvent.old)]= updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
