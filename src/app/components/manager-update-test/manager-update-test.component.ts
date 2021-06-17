import { Component, OnInit } from '@angular/core';
import { FireBaseService } from 'src/app/services/fire-base.service';

@Component({
  selector: 'app-manager-update-test',
  templateUrl: './manager-update-test.component.html',
  styleUrls: ['./manager-update-test.component.css']
})
export class ManagerUpdateTestComponent implements OnInit {

  constructor(public fireBaseService:FireBaseService) { }

  ngOnInit(): void {
  }

}
