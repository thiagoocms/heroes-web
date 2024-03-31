import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareHeroComponent } from './compare-hero.component';

describe('CompareHeroComponent', () => {
  let component: CompareHeroComponent;
  let fixture: ComponentFixture<CompareHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareHeroComponent]
    });
    fixture = TestBed.createComponent(CompareHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
