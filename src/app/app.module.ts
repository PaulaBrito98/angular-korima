import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulo-inicial/home/home.component';
import { UsersComponent } from './users/users/users.component';
import { NavComponent } from './nav/nav.component';
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import { CursosComponent } from './cursos/cursos/cursos.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    CursosComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
