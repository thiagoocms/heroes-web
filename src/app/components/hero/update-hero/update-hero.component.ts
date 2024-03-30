import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {

  id: string = ""
  name: string = ""
  selectedRace: string = ""
  progressIntelligence: number = 0;
  progressAgility: number = 0;
  progressDexterity: number = 0;
  progressStrength: number = 0;

  constructor(private heroService: HeroService, private toast: ToastrService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (typeof id == "string") {
      this.heroService.findById(id).subscribe(res => {
        this.id = res.hero_id!!;
        this.name = res.name;
        this.selectedRace = res.race
        this.progressIntelligence = res.intelligence;
        this.progressAgility = res.agility;
        this.progressDexterity = res.dexterity;
        this.progressStrength = res.strength;
  
      },
      err => {
        this.toast.error(err.error.message)
        this.router.navigate(['/list'])
      })
    } else {
      this.toast.warning("Heroi não encontrado!")
      this.router.navigate(['/list'])
    }
  }

  update() {
    let hero = new Hero(this.name, this.selectedRace, this.progressStrength, 
      this.progressAgility, this.progressDexterity, this.progressIntelligence)
      this.heroService.update(this.id, hero) .subscribe(res => {
        console.log(res);
        this.toast.success(`O heroi ${this.name} foi atualizado com sucesso!`)
        this.router.navigate(["/list"]);
      },
      err => {
        console.log(err)
        this.toast.error(err.error.message)
      });

  }

}
