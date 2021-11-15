import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hestenet 2.0';
  filter: 'all' | 'active' | 'done' = 'all';
  allItems = [
    { description: 'hest1', done: true },
    { description: 'hest2', done: true },
    { description: 'hest3', done: true },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    console.log(description);
    this.allItems.unshift({
      description,
      done: false,
    });
  }

  remove(item: { description: string; done: boolean }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
