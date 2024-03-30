import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent {

  name: string = ""
  selectedRace: string = "HUMAN"
  progressIntelligence: number = 50;
  progressAgility: number = 25;
  progressDexterity: number = 20;
  progressStrength: number = 30;

  constructor(private heroService: HeroService, private toast: ToastrService, private router: Router) { }
  
  create():void {
    let hero = new Hero(this.name, this.selectedRace, this.progressStrength, 
      this.progressAgility, this.progressDexterity, this.progressIntelligence)
      this.heroService.create(hero) .subscribe(res => {
        console.log(res);
        this.toast.success(`O heroi ${this.name} foi salvo com sucesso!`)
        this.router.navigate(["/list"]);
      },
      err => {
        console.log(err)
        this.toast.error(err.error.message)
      });
  }

}
