import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CoursesService, CourseGuardService, AuthService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Angular Route
https://www.youtube.com/watch?v=Bhl0_uHg6Pc&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=73&pp=iAQB - CanDeactivate Route Guard in Angular */