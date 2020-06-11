import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { JobReferenceComponent } from './components/job-reference/job-reference.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'student', component: StudentListComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'jobreferal', component: JobReferenceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
