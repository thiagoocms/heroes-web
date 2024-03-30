import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';

export interface he {
  name:string
  description: string
}
const heroes =  [
  { name: 'Superman', description: 'O Homem de Aço' },
  { name: 'Batman', description: 'O Cavaleiro das Trevas' },
  { name: 'Mulher-Maravilha', description: 'A Princesa de Themyscira' },
  { name: 'Homem-Aranha', description: 'O Amigão da Vizinhança' },
  { name: 'Homem de Ferro', description: 'O Vingador Dourado' },
  { name: 'Capitão América', description: 'O Sentinela da Liberdade' },
  { name: 'Flash', description: 'O Velocista Escarlate' },
  { name: 'Lanterna Verde', description: 'O Guardião do Setor Espacial 2814' }
];

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit{

  displayedColumns: string[] = ['name', 'race', 'strength', 'agility', 'dexterity', 'intelligence', 'action'];
  
  dataSource: any = null;

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
  this.heroService.findAll().subscribe(res => {
    this.dataSource = new MatTableDataSource<Hero>(res)
  })
  }

  delete(id: string) {
    console.log(id)
  }
}
