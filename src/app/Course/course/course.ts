import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../CourseService/course';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-course',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './course.html',
  styleUrls: ['./course.scss']
})
export class Course implements OnInit {
  constructor(private courseService: CourseService) {}

  courseData: any;

  courseForm = new FormGroup({
    id: new FormControl(0),
    courseName: new FormControl("")
  });

  ngOnInit(): void {
    this.courseService.getCourse().subscribe(response => {
      this.courseData = response;
      console.log(response);
    });
  }

  saveCourse() {
    const formCourse = this.courseForm;

    if(formCourse.value.id != 0){
    this.courseService.updateCourse(formCourse.value).subscribe({
      next: () => {
        alert("Course Updated!");
        this.courseForm.reset();
        this.ngOnInit();
      }
      });
    }
    else{
      this.courseService.addCourse(formCourse.value).subscribe({
      next: () => {
        alert("Course Saved!");
        this.courseForm.reset();
        this.ngOnInit();
      }
      });
    }
  

    
  }

  editCourse(course: any) {
    this.courseForm.patchValue(course);
    console.log(course);

}

  deleteCourse(id:any){
    this.courseService.removeCourse(id).subscribe({
      next: ()=>{
        alert("Course Removed!");
        this.ngOnInit();
      }
    });
  }
}
