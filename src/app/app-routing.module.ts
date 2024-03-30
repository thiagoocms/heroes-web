import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent } from './components/hero/list-hero/list-hero.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
