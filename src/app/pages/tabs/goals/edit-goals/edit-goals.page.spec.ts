import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditGoalsPage } from './edit-goals.page';

describe('EditGoalsPage', () => {
  let component: EditGoalsPage;
  let fixture: ComponentFixture<EditGoalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGoalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditGoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
