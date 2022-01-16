import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Project } from '../../../core/model/project';

@Component({
  selector: 'app-item',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() editable!: boolean;
  @Input() item!: Project;
  @Input() newItem: string | undefined;
  @Output() remove = new EventEmitter<Project>(); // EventEmitter raises an event

  constructor(private sharingService: SharingService) {}

  ngOnInit() {
    this.item.date = this.translateDate(this.item.date);
    this.getIsDesktopScreen();
  }

  getIsDesktopScreen() {
    return this.sharingService.getIsDesktop();
  }

  // brug date pipe
  translateDate(date: Date) {
    const danishFormat = date;
    return danishFormat;
  }
}
