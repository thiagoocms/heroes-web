import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ToastrService } from 'ngx-toastr';
import { Hero, HeroCompare, HeroCompareRequest } from '../hero.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-compare-hero',
  templateUrl: './compare-hero.component.html',
  styleUrls: ['./compare-hero.component.css']
})
export class CompareHeroComponent implements OnInit {

  constructor(private heroService: HeroService, private toast: ToastrService){}

  selectedHero: string = ''
  selectedOponent: string = ''
  bool: boolean = false
  hero: HeroCompare = new HeroCompare()
  
  options: Hero[] = []

  displayedColumns: string[] = ['name', 'race', 'strength', 'agility', 'dexterity', 'intelligence'];
  dataSource = new MatTableDataSource<Hero>([]);

  ngOnInit(): void {
    this.heroService.findAll().subscribe(res => {
      this.options = res
    })
    }

  compare() {
    let heroRequest = new HeroCompareRequest(this.selectedHero, this.selectedOponent)
    this.heroService.compareTo(heroRequest).subscribe(res => {
      this.hero.agility_difference = res.agility_difference
      this.hero.dexterity_difference = res.dexterity_difference
      this.hero.intelligence_difference = res.intelligence_difference
      this.hero.strength_difference = res.strength_difference
      this.bool = true
    },
    err => {
      this.toast.error(err.error.message);
      
    })
  }

  getColor(value: number): string {
    return value >= 0 ? 'green' : 'red';
  }

}
