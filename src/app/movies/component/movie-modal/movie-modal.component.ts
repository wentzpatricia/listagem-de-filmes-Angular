import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent {
  public showModal: boolean = false;

  toggle() {
    this.showModal = !this.showModal;
  }
}
