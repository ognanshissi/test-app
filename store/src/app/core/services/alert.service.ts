import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IAlert {type: 'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success', message: string}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private list: IAlert[] = [];

  private readonly _alertList$: BehaviorSubject<IAlert[]> = new BehaviorSubject<IAlert[]>(this.list);
  public alertList$ = this._alertList$.asObservable();

  constructor(){}

  removeAlert(index: number) {
    this.list = this.list.filter((value: IAlert, i: number) => {
      if (i === index) {
        return false;
      }
      return true;
    });

    this._alertList$.next(this.list);
  }

  show(body: IAlert) {
    this.list = [...this.list, body];
    this._alertList$.next(this.list);
  }

  clearAlert() {
    this._alertList$.next([]);
  }


}
