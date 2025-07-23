import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../TeacherService/teacher';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teacher.html',
  styleUrl: './teacher.scss'
})
export class Teacher implements OnInit{
  constructor(private teacherService: TeacherService) {}

  teacherData: any;

  teacherForm = new FormGroup({
    teacherId: new FormControl(0),
    teacherName: new FormControl(),
    age: new FormControl(),
    experience: new FormControl(),
    address: new FormControl(),
    skillSet: new FormControl()
  })

  ngOnInit(): void {
    this.teacherService.getTeacher().subscribe(response => {
      this.teacherData = response;
      console.log(response);
    });
  }

  saveTeacher(){
    const formTeacher = this.teacherForm;

    if(formTeacher.value.teacherId != 0){
    this.teacherService.updateTeacher(formTeacher.value).subscribe({
      next: () => {
        alert("Teacher Updated!");
        this.teacherForm.reset();
        this.ngOnInit();
      }
      });
    }
    else{
      this.teacherService.addTeacher(formTeacher.value).subscribe({
      next: () => {
        alert("Teacher Saved!");
        this.teacherForm.reset();
        this.ngOnInit();
      }
      });
    }
  }

  editTeacher(teacher: any) {
    this.teacherForm.patchValue(teacher);
    console.log(teacher);
  }

  deleteTeacher(id:any){
    this.teacherService.removeTeacher(id).subscribe({
      next: ()=>{
        alert("Teacher Removed!");
        this.ngOnInit();
      }
    });
  }
}
