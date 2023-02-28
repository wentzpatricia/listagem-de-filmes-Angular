import { Component, Input, OnInit } from '@angular/core';
import { MovieModal } from '../../model/movie-modal';

@Component({
  selector: 'app-info-modal',
  template: ` <div class="modal">
    <div class="modal__rating">
      <img
        class="img"
        src="../../../../assets/img/star.png"
        alt="star ilustration"
      />
      <h2>{{ modalData.imdbRating }}</h2>
    </div>

    <div class="modal-text">
      <h1 class="modal-text__title">{{ modalData.Title }}</h1>
      <h3 class="modal-text__director">Director: {{ modalData.Director }}</h3>
      <h3 class="modal-text__date">
        Released: {{ modalData.Released | date: 'fullDate' }}
      </h3>
      <div></div>
      <h3 class="modal-text__runtime">{{ modalData.Runtime }}</h3>
      <h3 class="modal-text__type">Type: {{ modalData.Type }}</h3>
      <h3 class="modal-text__genre">Genre: {{ modalData.Genre }}</h3>
      <h3 class="modal-text__plot">{{ modalData.Plot }}</h3>
    </div>
  </div>`,
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent {
  @Input() modalData!: MovieModal;
}
