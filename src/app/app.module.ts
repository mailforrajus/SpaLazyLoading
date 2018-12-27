import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { IndexComponent } from './components/index/index.component';
import { lazyLoad } from './routings/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { PageOneService } from './services/page-one.service';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    IndexComponent
  ],
  imports: [
BrowserModule,lazyLoad, HttpClientModule
  ],
  providers: [PageOneService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
