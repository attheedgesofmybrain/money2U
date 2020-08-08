import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGoalsPage } from './add-goals.page';

describe('AddGoalsPage', () => {
  let component: AddGoalsPage;
  let fixture: ComponentFixture<AddGoalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGoalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
