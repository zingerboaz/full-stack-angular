import { Component, Input, OnInit } from '@angular/core';
import { personModel } from '../models/person.model';

@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.component.html',
  styleUrls: ['./manager-users.component.css']
})
export class ManagerUsersComponent implements OnInit {
@Input()users:any[];
buttDisble:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
