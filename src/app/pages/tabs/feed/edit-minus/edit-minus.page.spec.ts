import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMinusPage } from './edit-minus.page';

describe('EditMinusPage', () => {
  let component: EditMinusPage;
  let fixture: ComponentFixture<EditMinusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMinusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMinusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
