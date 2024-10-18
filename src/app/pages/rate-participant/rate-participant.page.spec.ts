import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateParticipantPage } from './rate-participant.page';

describe('RateParticipantPage', () => {
  let component: RateParticipantPage;
  let fixture: ComponentFixture<RateParticipantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RateParticipantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
