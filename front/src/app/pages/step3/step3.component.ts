import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigateService } from 'src/app/services/navigate.service';
import { ProductService } from 'src/app/services/product.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  step3Form: FormGroup = new FormGroup({});

  constructor(private productServ: ProductService, public fb: FormBuilder, public stepperServ :StepperService, private navServ: NavigateService) { }

  products: any [] = []

  ngOnInit(): void {
    this.getAll();
    this.initForm();
  }

  initForm(){
    this.step3Form = this.fb.group({
      productsCtrl: this.fb.array([])
    });

    const data = this.stepperServ.getProducts();
    console.log(data);
    
    this.step3Form.patchValue(data);
  }

  goToStep2(page: string) {
    this.navServ.goToPage(page)
    
    console.log(this.stepperServ.getProducts());
  }


  getAll() {
    this.productServ.all().subscribe(res => {
      this.products = res.products;
      console.log(this.products)
    })
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.step3Form.get('productsCtrl') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit(url: string) {
    //this.step1Form.patchValue({formule: this.formulchoise})
    
    const body = this.step3Form.value
    //this.loadingData = true;
    console.log(body)
    this.stepperServ.addProduct(body);
    this.navServ.goToPage(url);
  }

}
