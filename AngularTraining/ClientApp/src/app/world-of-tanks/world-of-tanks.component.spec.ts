import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldOfTanksComponent } from './world-of-tanks.component';

describe('WorldOfTanksComponent', () => {
  let component: WorldOfTanksComponent;
  let fixture: ComponentFixture<WorldOfTanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldOfTanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldOfTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
