import { TestBed } from '@angular/core/testing';
import { AddtaskService } from './task.service';
import { HttpModule } from '@angular/http';



describe('AddtaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpModule],
    providers:[AddtaskService]
  }));

  it('should be created', () => {
    const service: AddtaskService = TestBed.get(AddtaskService);
    expect(service).toBeTruthy();
  });
});
