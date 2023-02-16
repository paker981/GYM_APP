import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public packages: string[] = ["Monthly","Quarterly","Yearly"];
  public genders: string[] = ["Male", "Female"];
  public importantList: string[] = [
    "Toxic Fat reduction",
    "Energy and Endurance",
    "Bulding Lean Muscle",
    "Helthier Digestive System",
    "Sugar Craving Body",
    "Fitness"
  ]

  public registerForm!: FormGroup;
  public userIdToUpdate!: string;
  public isUpdateActive: boolean = false;



  constructor(private fb: FormBuilder, private api: ApiService, private toast: NgToastService, private activatedRoute: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      weight: [''],
      height: [''],
      gender: [''],
      bmi: [''],
      bmiResult: [''],
      requireTrainer: [''],
      package: [''],
      important: [''],
      haveGymBefore: [''],
      enquiryDate: ['']
    });
    
    this.registerForm.controls['height'].valueChanges.subscribe(res=>{
      this.calculateBmi(res);
    });

    this.activatedRoute.params.subscribe(val=>{
      this.userIdToUpdate=val['id'];
      this.api.getMemeber(this.userIdToUpdate)
      .subscribe(res=>{
        this.isUpdateActive = true;
        this.fillFormToUpdate(res);
      })
    })
  }

  submit(){
    this.api.addMember(this.registerForm.value)
    .subscribe(res=>{
      this.toast.success({detail:"Success",summary:"Member added!",duration:3000});
      this.registerForm.reset();
    })
  }

  update(){
    this.api.updateMember(this.userIdToUpdate,this.registerForm.value)
    .subscribe(res=>{
      this.toast.success({detail:"Success",summary:"Member updated!",duration:3000});
      this.registerForm.reset();
      this.router.navigate(['list']);
    })
  }


  

  calculateBmi(heightValue: number){
    const weight = this.registerForm.value.weight;
    const height = heightValue;
    const bmi = weight / (height * height);
    this.registerForm.controls['bmi'].patchValue(bmi);

    switch (true) {
      case bmi < 18.5:
        this.registerForm.controls['bmiResult'].patchValue("Underweight");
        break;
      case (bmi >= 18.5 && bmi < 25):
          this.registerForm.controls['bmiResult'].patchValue("Normal");
        break;
      case (bmi >= 25 && bmi < 30):
          this.registerForm.controls['bmiResult'].patchValue("Overweight");
        break;  

      default:
        this.registerForm.controls['bmiResult'].patchValue("Obese");
      break;
    }
  }

  fillFormToUpdate(user: User){
    this.registerForm.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
      weight: user.weight,
      height: user.height,
      bmi: user.bmi,
      bmiResult: user.bmiResult,
      gender: user.gender,
      requireTrainer: user.requireTrainer,
      package: user.package,
      important: user.important,
      haveGymBefore: user.haveGymBefore,
      enquiryDate: user.enquiryDate
    })

  }


}
