import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modulo-inicial/home/home.component";
import {UsersComponent} from "./users/users/users.component";
import {CursosComponent} from "./cursos/cursos/cursos.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'cursos', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
