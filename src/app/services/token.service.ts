import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  user: any = {};
  constructor() { }

setUser(datalogin:any){
this.user=datalogin
}


}
