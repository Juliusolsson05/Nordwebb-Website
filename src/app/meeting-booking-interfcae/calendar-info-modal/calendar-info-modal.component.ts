import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-calendar-info-modal',
  templateUrl: './calendar-info-modal.component.html',
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
export class CalendarInfoModalComponent {
  showModalStored: any = localStorage.getItem('showInfo')
  showModal: boolean = (this.showModalStored !== null) ? this.showModalStored : true;;

  constructor() {

  }

  toggleModal() {
    this.showModal = false
  }
}

