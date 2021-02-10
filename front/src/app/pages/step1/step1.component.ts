import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigateService } from 'src/app/services/navigate.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  step1Form: FormGroup = new FormGroup({});

  constructor(public fb: FormBuilder, public stepperServ :StepperService, private navServ: NavigateService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.step1Form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });

    const data = this.stepperServ.getItems();
    console.log(data);
    
    this.step1Form.patchValue(data);
  }

  onSubmit(url: string) {
    //this.step1Form.patchValue({formule: this.formulchoise})
    
    const body = this.step1Form.value
    //this.loadingData = true;
    console.log(body)
    this.stepperServ.addIUserInfo(body);
    this.navServ.goToPage(url);
  }

  



}
