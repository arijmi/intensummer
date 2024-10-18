import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteMemberPage } from './invite-member.page';

describe('InviteMemberPage', () => {
  let component: InviteMemberPage;
  let fixture: ComponentFixture<InviteMemberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InviteMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
