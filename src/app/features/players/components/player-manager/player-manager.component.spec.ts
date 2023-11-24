import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerManagerComponent } from './player-manager.component';

describe('PlayerManagerComponent', () => {
  let component: PlayerManagerComponent;
  let fixture: ComponentFixture<PlayerManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerManagerComponent]
    });
    fixture = TestBed.createComponent(PlayerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
