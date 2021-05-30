import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
   login={
  email:"",
  password:"",
}
  constructor(private serverService: ServerService,private tokenService: TokenService) { }

  ngOnInit(): void {
  
  }
  
  getlogin(){
  this.serverService.createToken(this.login).subscribe(data =>{
  console.log(data)
  if(data && data.token)
  this.tokenService.setUser(data)
    this.serverService.token(data.token)
})
  }

}
