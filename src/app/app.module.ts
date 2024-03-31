import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListHeroComponent } from './components/hero/list-hero/list-hero.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CreateHeroComponent } from './components/hero/create-hero/create-hero.component';
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UpdateHeroComponent } from './components/hero/update-hero/update-hero.component';
import { CompareHeroComponent } from './components/hero/compare-hero/compare-hero.component';



@NgModule({
  declarations: [
    AppComponent,
    ListHeroComponent,
    CreateHeroComponent,
    UpdateHeroComponent,
    CompareHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
