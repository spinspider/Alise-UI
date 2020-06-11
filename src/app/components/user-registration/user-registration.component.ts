import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import {AppComponent} from 'src/app/app.component';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {

user_details = {
    email: '',
    department: '',
    batch: '',
    domain:'',
    location:'',
    phone_number : '',
    password:'',
    first_name:'',
    last_name:''
    };

  status: boolean ;

  DepartmentList: any = ['Mech', 'Civil', 'CSE'];
  BatchList: any = ['2014-2018', '2015-2019', '2016-2020'];
  DomainList: any = ['Android', 'Networking', 'Web Develipment'];
  LocationList: any = ['Chennai', 'Bengalore', 'Trichy'];
  
  page_name = 'register';

  constructor(private studentService : StudentService,private router: Router,private appcomponent :AppComponent) { }

  ngOnInit() {
    this.checkpage();
  }

  	checkpage(){
  	     this.status= true;
         console.log("check page");
         console.log("call from registerpage",this.appcomponent.navigation_check(this.page_name))
	}


		form = new FormGroup({

		    department: new FormControl('', Validators.required),
		    batch: new FormControl('', Validators.required),
		    email: new FormControl('', Validators.required),
		    domain : new FormControl('', Validators.required),
		    location : new FormControl('', Validators.required),
		    phone_number : new FormControl('', Validators.required),
		    password : new FormControl('', Validators.required),
		    first_name : new FormControl('', Validators.required),
		    last_name : new FormControl('', Validators.required),
		    info   : new FormControl('', Validators.required)
		    
		});

  
		 get f(){

		    return this.form.controls;

		  };

		  public submit(): void {
		        console.log("from values",this.user_details);
		    this.studentService.create(this.user_details)
		      .subscribe(
		        response => {
		          console.log("success call",response);
		           this.router.navigate(['/login']);

		        },
		        error => {
		          console.log(error);
		        });
 		  }

	//	submit(){
	//	    console.log("from values",this.user_details);
	//	    this.studentService.create(this.user_details)
	//	      .subscribe(
	//	        response => {
	//	          console.log("success call",response);
	//	          this.router.navigate(['/login']);
   //
	//	        },
	//	        error => {
	//	          console.log(error);
	//	        });
	//	};

	    selected(){
		    console.log("department",this.user_details.department);
		    console.log("email",this.user_details.email);
	    };

		st(){
		    console.log("batch",this.user_details.batch);
		};
		status_value(value){
		  if(value==1){
		  this.status=false;
          }else{
             this.status=true;
          }
		  console.log("status value",this.status);
		}

}
