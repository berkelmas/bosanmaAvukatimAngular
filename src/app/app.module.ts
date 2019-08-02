import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakalelerpageComponent } from './makalelerpage/makalelerpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainmakalelerComponent } from './mainmakaleler/mainmakaleler.component';
import { MakaledetayComponent } from './makaledetay/makaledetay.component';

import { convertHtmlToText } from './convertHtmlToText.pipe';
import { GizlilikpageComponent } from './gizlilikpage/gizlilikpage.component';
import { AvukatadanisinpageComponent } from './avukatadanisinpage/avukatadanisinpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MakalelerpageComponent,
    MainpageComponent,
    MainmakalelerComponent,
    MakaledetayComponent,

    convertHtmlToText,

    GizlilikpageComponent,

    AvukatadanisinpageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cezaavukatimid'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ Title, Meta ],
  bootstrap: [AppComponent]
})
export class AppModule { }
