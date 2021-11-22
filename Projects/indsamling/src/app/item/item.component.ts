import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../core/model/project';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() editable!: boolean;
  @Input() item!: Project;
  @Input() newItem: string | undefined;
  @Output() remove = new EventEmitter<Project>(); // EventEmitter raises an event

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
