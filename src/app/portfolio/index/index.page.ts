import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public items: Array<{ id: string; title: string; note: string; }> = [];
  constructor() {
    for (let i = 1; i < 21; i++) {
      this.items.push({
        id: `guID-${i}`,
        title: `Item ${i}`,
        note: `#${i}`
      });
    }
  }

  ngOnInit() {
  }

}
