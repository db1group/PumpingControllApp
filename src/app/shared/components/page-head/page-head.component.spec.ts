import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadComponent } from './page-head.component';

describe('PageHeadComponent', () => {
  let component: PageHeadComponent;
  let fixture: ComponentFixture<PageHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeadComponent]
    });
    fixture = TestBed.createComponent(PageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
