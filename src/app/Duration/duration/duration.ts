import { Component, OnInit } from '@angular/core';
import { DurationService } from '../../DurationService/duration';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duration',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './duration.html',
  styleUrl: './duration.scss'
})
export class Duration implements OnInit{
  constructor(private durationService:DurationService){}

  durationData: any;

  durationForm = new FormGroup({
    durationId: new FormControl(0),
    days: new FormControl("")
  });

  ngOnInit(): void {
    this.durationService.getDuration().subscribe(response => {
      this.durationData = response;
      console.log(response);
    });
  }

  saveDuration() {
    const formDuration = this.durationForm;

    // if(Number (formDuration.value.days) > 365){

    //   alert("Days cannot exceed than 365 days!")

    // }
    // else{
    //   alert("Success!")
    // }

    //   return false; // means ise niche a code execute ni hoga - yahi se breac ho jayega
    if(formDuration.value.durationId != 0){
    this.durationService.updateDuration(formDuration.value).subscribe({
      next: () => {
        alert("Days Updated!");
        this.durationForm.reset();
        this.ngOnInit();
      }
      });
    }
    else{
      this.durationService.addDuration(formDuration.value).subscribe({
      next: () => {
        alert("Days Saved!");
        this.durationForm.reset();
        this.ngOnInit();
      }     
      });               
       //alert("Days cannot exceed than 365 days!")
    }  

}

editDuration(duration: any) {
    this.durationForm.patchValue(duration);
    console.log(duration);
}

deleteDuration(id:any){
    this.durationService.removeDuration(id).subscribe({
      next: ()=>{
        alert("Days Removed!");
        this.ngOnInit();
      }
    });
  }

}
