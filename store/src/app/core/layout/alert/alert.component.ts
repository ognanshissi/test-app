import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message = 'hello world';
  @Input() type: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success' = 'primary';

  hideDialog = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.hideDialog = true;
  }

}
