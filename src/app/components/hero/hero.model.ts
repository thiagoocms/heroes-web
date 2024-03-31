export class Hero {
    hero_id: string | undefined;
    name: string = "";
    race: string = "";
    strength: number = 0;
    agility: number = 0;
    dexterity: number = 0;
    intelligence: number = 0;

    constructor(name: string,
    race: string,
    strength: number,
    agility: number,
    dexterity: number,
    intelligence: number) {
        this.name = name;
        this.race = race;
        this.strength = strength;
        this.agility = agility;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
    }
}

export class HeroCompare {
    hero_id: string = '';
    opponent_id: string = '';
    strength_difference: number = 0;
    agility_difference: number = 0;
    dexterity_difference: number = 0;
    intelligence_difference: number = 0;
}

export class HeroCompareRequest {
    hero_id: string = '';
    opponent_id: string = '';
   constructor(heroId: string, opponentId: string) {
    this.hero_id = heroId
    this.opponent_id = opponentId
   }
}