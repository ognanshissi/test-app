import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {


  recapData = []

  constructor(public stepperServ :StepperService) { }

  ngOnInit(): void {
    this.recapData
  }

}
