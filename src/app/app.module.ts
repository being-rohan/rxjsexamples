import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColdhotobsrvblesComponent } from './shareed/components/coldhotobsrvbles/coldhotobsrvbles.component';
import { WethereportComponent } from './shareed/components/wethereport/wethereport.component';

@NgModule({
  declarations: [
    AppComponent,
    ColdhotobsrvblesComponent,
    WethereportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
