import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinusPage } from './minus.page';

describe('MinusPage', () => {
  let component: MinusPage;
  let fixture: ComponentFixture<MinusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
