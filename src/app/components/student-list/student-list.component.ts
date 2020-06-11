import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import {AppComponent} from 'src/app/app.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student_lists: any;
  currentTutorial = null;
  currentIndex = -1;
  find_list = {
    domain: '',
    location: ''
  };
  selectedLevel;
  DomainList: any = ['Android', 'Networking', 'Web Development'];
  LocationList: any = ['Chennai', 'Bengalore', 'Trichy'];

  page_name = 'student';
  
constructor(private studentService: StudentService,private appcomponent :AppComponent) { }

 ngOnInit() {
    this.checkpage();
    this.getstudentinfo();
  }

  checkpage(){
         console.log("check page");
         console.log("this.appcomponent",this.appcomponent.navigation_check(this.page_name))
  }

  getstudentinfo() {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.student_lists = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
   
  setActiveStudent(student_list, index) {
    this.currentTutorial = student_list;
    this.currentIndex = index;
  }
  
  form = new FormGroup({

    domain: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required)

  });
  
  
 get f(){

    return this.form.controls;

  }


  submit(){
          console.log("lllllllll",this.find_list);
    this.studentService.getinfo(this.find_list)
      .subscribe(
        data => {
          this.student_lists = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
   selected(){
    console.log("domain",this.find_list.domain);
  }
  st(){
      console.log("location",this.find_list.location);

  }

}
