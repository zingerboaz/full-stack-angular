import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { ServerService } from 'src/app/services/server.service';


@Component({
  selector: 'app-sign-result2',
  templateUrl: './sign-result2.component.html',
  styleUrls: ['./sign-result2.component.css']
})
export class SignResult2Component implements OnInit {
  updatedcompletepersonForm: any;
  updatepersonForm: any;
  user: any;
  constructor(private serverService: ServerService, private homeService: HomeService) { }

  ngOnInit(): void {

    this.user = this.homeService.getUser();
    console.log(this.user)
    this.updatepersonForm = new FormGroup(  {
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      academic: new FormControl('', [Validators.required]),
      age: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(120)]),
      year: new FormControl(0, [Validators.required, Validators.min(2020), Validators.max(2030)]),
    });
  }

  sendForm() {
    const obj: any = {};
    for (const field in this.updatepersonForm.controls) { // 'field' is a string
      obj[field] = this.updatepersonForm.controls[field].value;
      console.log(obj)
    }

    const data = { ...this.user, ...obj };

    this.serverService.updateUser(data).subscribe(res => {
      this.homeService.setUser(data);
    }, err => {
      console.log(err);

    });
    console.log(data)

  }

}
