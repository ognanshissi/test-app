import { AlertService, IAlert } from './../../services';
import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alertList$: Observable<IAlert[]> = new Observable<IAlert[]>();

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.alertList$ = this.alertService.alertList$;
  }

  closeDialog(index: number): void {
    this.alertService.removeAlert(index);
  }

}
