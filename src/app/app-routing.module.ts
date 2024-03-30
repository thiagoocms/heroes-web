import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent } from './components/hero/list-hero/list-hero.component';
import { CreateHeroComponent } from './components/hero/create-hero/create-hero.component';
import { UpdateHeroComponent } from './components/hero/update-hero/update-hero.component';

const routes: Routes = [
  { path: 'create', component: CreateHeroComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListHeroComponent },
  { path: 'update/:id', component: UpdateHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
