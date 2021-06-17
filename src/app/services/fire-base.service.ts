import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  allUsers=[];
  allTests = [];
  currentTestIndex = null; 

  constructor() { }
}
