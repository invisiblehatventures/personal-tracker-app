import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndexPage } from './index/index.page';
import { ShowPage } from './show/show.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage
  },
  {
    path: ':id',
    component: ShowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexPage,
    ShowPage
  ]
})
export class PortfolioPageModule {}
