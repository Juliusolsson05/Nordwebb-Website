import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public showModal: boolean = false;
  public modalValue: string = ''
  public userPhoneNumber: string = '';

  constructor() { }
}
