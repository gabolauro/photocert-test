import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCarouselComponent } from './claim-carousel.component';

describe('ClaimCarouselComponent', () => {
  let component: ClaimCarouselComponent;
  let fixture: ComponentFixture<ClaimCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
