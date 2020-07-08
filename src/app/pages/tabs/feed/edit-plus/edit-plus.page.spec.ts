import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPlusPage } from './edit-plus.page';

describe('EditPlusPage', () => {
  let component: EditPlusPage;
  let fixture: ComponentFixture<EditPlusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
