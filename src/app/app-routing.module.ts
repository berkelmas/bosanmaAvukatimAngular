import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { MakalelerpageComponent } from './makalelerpage/makalelerpage.component';

import { MainmakalelerComponent } from './mainmakaleler/mainmakaleler.component';
import { MakaledetayComponent } from './makaledetay/makaledetay.component';
import { GizlilikpageComponent } from './gizlilikpage/gizlilikpage.component';
import { AvukatadanisinpageComponent } from './avukatadanisinpage/avukatadanisinpage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'gizlilik-politikasi', component: GizlilikpageComponent},
  {path: 'avukata-danisin', component: AvukatadanisinpageComponent},
  {path: 'yayinlar', component: MakalelerpageComponent, children: [

    {path: '', component: MainmakalelerComponent},
    {path: ':sayfa', component: MainmakalelerComponent},
    {path: ':kategori/sayfa/:sayfa', component: MainmakalelerComponent},

    {path: ':id/:makaleslug', component: MakaledetayComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
