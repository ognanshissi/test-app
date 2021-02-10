import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RecapComponent } from './pages/recap/recap.component';
import { Step1Component } from './pages/step1/step1.component';
import { Step2Component } from './pages/step2/step2.component';
import { Step3Component } from './pages/step3/step3.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';
import { StepperService } from './services/stepper.service';

const routes: Routes = [
  {
    path: 'home',
   component: HomeComponent
  },
  {
    path: 'recap',
    component: RecapComponent
  },
  {
    path: 'step1',
    component: Step1Component
  },
  {
    path: 'step2',
    component: Step2Component
  },
  {
    path: 'step3',
    component: Step3Component
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent, RecapComponent, Step1Component ,Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule
    
  ],
  providers: [StepperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
