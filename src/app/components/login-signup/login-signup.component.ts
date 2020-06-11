import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import {AppComponent} from 'src/app/app.component';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  login_data = {
    email:'',
    password:''
  };

  page_name = 'login';
  visible: boolean;


  constructor(private studentService : StudentService,private router: Router,private appcomponent :AppComponent) { }

  ngOnInit() {
    this.checkpage();
  }


	public submit(): void {
	    console.log("login_data",this.login_data);
	    this.studentService.loginCall(this.login_data)
	      .subscribe(
	        response => {
	          console.log("success call",response);
	           this.router.navigate(['/student']);

	        },
	        error => {
	          console.log(error);
	        });
	};

	checkpage(){
           console.log("check page")
         //    this.visible = this.studentService.nav(this.page_name);
		 //  this.studentService.nav(this.page_name);
         console.log("this.appcomponent",this.appcomponent.navigation_check(this.page_name))
	}

}
