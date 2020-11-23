import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {AddUrlComponent} from './add-url/add-url.component';


const routes: Routes = [
  {path: '', component : HomeComponent },
  {path: 'detail/:url', component: DetailComponent},
  {path: 'addurl', component: AddUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
