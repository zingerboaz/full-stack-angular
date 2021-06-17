import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseService } from 'src/app/services/fire-base.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-practises',
  templateUrl: './practises.component.html',
  styleUrls: ['./practises.component.css']
})
export class PractisesComponent implements OnInit {
  
  constructor(private serverService: ServerService, public fireBase: FireBaseService, private router: Router) { }

  ngOnInit(): void {
  }
  getAllTests() {
    this.serverService.getWithTokenArry("api/tests/getAllTests").subscribe(data => {
     this.fireBase.allTests = data as [];
      console.log(this.fireBase.allTests)
      console.log('in get all test')
    })
  }
  showImg(index){
      this.fireBase.currentTestIndex = index;
      this.router.navigate(['/test-page'])
  }
}
