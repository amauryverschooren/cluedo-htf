import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KladblokComponent } from './kladblok.component';

describe('KladblokComponent', () => {
  let component: KladblokComponent;
  let fixture: ComponentFixture<KladblokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KladblokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KladblokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
