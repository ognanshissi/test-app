import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigateService } from 'src/app/services/navigate.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  step2Form: FormGroup = new FormGroup({});

  nbEmloyer = [{label: '0-9', value: 'Entre 0 et 9'},
  {label: '10-29', value: 'Entre 10 et 29'},
  {label: '30-49', value: 'Entre 30 et 49'}]

  constructor(public fb: FormBuilder, public stepperServ :StepperService, private navServ: NavigateService) { }

  ngOnInit(): void {
    //console.log(this.stepperServ.getItems());
    this.initForm()
    
  }

  initForm(){
    this.step2Form = this.fb.group({
      companyName: [''],
      companyLength: [''],
      companyLocation: ['']
    });

    const data = this.stepperServ.getCompanie();
    console.log(data);
    
    this.step2Form.patchValue(data);
  }

  goToStep1(page: string) {
    this.navServ.goToPage(page)
    
    console.log(this.stepperServ.getItems());
  }

  onSubmit(url: string) {
    //this.step1Form.patchValue({formule: this.formulchoise})
    
    const body = this.step2Form.value
    //this.loadingData = true;
    console.log(body)
    this.stepperServ.addCompanie(body);
    this.navServ.goToPage(url);
  }

}
