import { Component } from '@angular/core';
import { ModalService } from '../modal.service'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {


  constructor(public ModalService: ModalService) {
    this.ModalService.showModal = false;
    this.ModalService.modalValue;
  }

  toggleModal(modalValueInput: string) {
    this.ModalService.modalValue = modalValueInput
    this.ModalService.showModal = !this.ModalService.showModal;
  }
}
