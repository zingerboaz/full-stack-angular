import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SaleComponent } from './components/sale/sale.component';
import { HomComponent } from './components/hom/hom.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignResultComponent } from './components/sign-result/sign-result.component';
import { SignUp1Component } from './components/sign-up1/sign-up1.component';
import { LoginComponent } from './components/login/login.component';
import { CodeComponent } from './components/code/code.component';
import { SignResult1Component } from './components/sign-result1/sign-result1.component';
import { SignResult2Component } from './components/sign-result2/sign-result2.component';
import { TestComponent } from './components/test/test.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Login1Component } from './components/login1/login1.component';



@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    HomComponent,
    SignUpComponent,
    SignResultComponent,
    SignUp1Component,
    LoginComponent,
    CodeComponent,
    SignResult1Component,
    SignResult2Component,
    TestComponent,
    RegistrationComponent,
    Login1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
