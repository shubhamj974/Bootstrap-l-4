import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FeaHeaderComponent } from './components/fea-header/fea-header.component';
import { FeaMainComponent } from './components/fea-main/fea-main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    InspirationComponent,
    FeatureComponent,
    FeaHeaderComponent,
    FeaMainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
