import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() item: Item | undefined;
  @Output() formSubmit: EventEmitter<Item> = new EventEmitter<Item>();
  isNewItem: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.isNewItem = false;
    }else{
      this.isNewItem = true;
      this.item = new Item('', 0)
    }
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value)
    form.reset();
  }

}
