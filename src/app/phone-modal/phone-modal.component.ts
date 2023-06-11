import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalService } from '../modal.service'
import { HTTPRequestsService } from './../http-requests.service';

@Component({
  selector: 'app-phone-modal',
  templateUrl: './phone-modal.component.html',
  styleUrls: ['./phone-modal.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', style({ opacity: 0 })),
      ]),
      // Ny övergång för att visa eller dölja modalen
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})



export class PhoneModalComponent {



  constructor(public ModalService: ModalService, private HTTPRequestsService: HTTPRequestsService) {
    this.ModalService.showModal = false;
    this.ModalService.modalValue;
    this.ModalService.userPhoneNumber;
  }

  toggleModal(modalValueInput: string) {
    this.ModalService.modalValue = modalValueInput
    this.ModalService.showModal = !this.ModalService.showModal;
  }

  sendPhoneRequest() {
    this.HTTPRequestsService.sendUserInput(this.ModalService.modalValue, this.ModalService.userPhoneNumber).subscribe((response) =>
      console.log(response)
    );
  }

  onSubmit(event: Event) {
    console.log(this.ModalService.modalValue, this.ModalService.userPhoneNumber);
    event.preventDefault();
    this.sendPhoneRequest();
  }
}

