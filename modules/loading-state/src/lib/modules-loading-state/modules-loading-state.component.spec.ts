import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesLoadingStateComponent } from './modules-loading-state.component';

describe('ModulesLoadingStateComponent', () => {
  let component: ModulesLoadingStateComponent;
  let fixture: ComponentFixture<ModulesLoadingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesLoadingStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesLoadingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
