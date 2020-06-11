import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { JobReferenceComponent } from './components/job-reference/job-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LoginSignupComponent,
    StudentListComponent,
    NewsFeedComponent,
    UserRegistrationComponent,
    JobReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
