import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test = {
    email: "",
    
  }
  constructor(private serverService: ServerService ) { }

  ngOnInit(): void {
  }
  gettest() {
    this.serverService.postWithToken("api/users/getUser",this.test).subscribe(data => {
      console.log(data)
      
    })

  }

}
