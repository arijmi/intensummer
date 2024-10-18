import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerStatsPage } from './player-stats.page';

describe('PlayerStatsPage', () => {
  let component: PlayerStatsPage;
  let fixture: ComponentFixture<PlayerStatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayerStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
