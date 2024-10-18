import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectContactsPage } from './select-contacts.page';

describe('SelectContactsPage', () => {
  let component: SelectContactsPage;
  let fixture: ComponentFixture<SelectContactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
