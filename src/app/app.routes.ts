import { Routes } from '@angular/router';
import { Course } from './Course/course/course';
import { App } from './app';
import { Duration } from './Duration/duration/duration';
import { Teacher } from './Teacher/teacher/teacher';

export const routes: Routes = [
    { path: 'home', component: App, title: 'app' },
    { path: 'course', component: Course, title: 'course' },// path: 'whatevertext_you_will_give_same_text_nee_to_pass_in_browser'
    { path: 'duration', component: Duration, title: 'duration' },
    { path: 'teacher', component: Teacher, title: 'teacher' }
];
//search how to create route in angualr 