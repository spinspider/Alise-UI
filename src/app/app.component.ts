import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   title = 'Angular8ClientCrud';
   visible: boolean ;
   login_page = 'login';
   register_page = 'register';

   constructor(private studentService : StudentService,private router: Router) { }

  ngOnInit() {
    //this.geturlinfo();
  }

  geturlinfo(){
    var url=window.location.href;
    var res = url.split("/"); 
     console.log("rrrrrrrrrrrrrrr",res[3]);
     if(res[3]==this.login_page || res[3]==this.register_page){
       console.log("lllllllllll",res[3]);
       this.visible = false;
       console.log("ppppppppppppp",this.visible);
     }else{
    console.log("true",res[3])
       this.visible = true;
     }
  
  };

  navigation_check(data){
    console.log("navigatio check",data)
    if(data==this.login_page || data == this.register_page ){
       console.log("true",data);
       console.log("oncalling",this.visible)
       this.visible = false;
        return false;
     }else{
    console.log("trueelse",data)
       this.visible = true;
        return true;
     }
  };

  public logout(): void {
        this.studentService.logout()
          .subscribe(
            response => {
              console.log("success call",response);
               this.router.navigate(['/login']);

            },
            error => {
              console.log(error);
            });
      }
 
};
