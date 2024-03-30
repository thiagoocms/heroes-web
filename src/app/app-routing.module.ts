import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent } from './components/hero/list-hero/list-hero.component';
import { CreateHeroComponent } from './components/hero/create-hero/create-hero.component';

const routes: Routes = [
  { path: 'create', component: CreateHeroComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
