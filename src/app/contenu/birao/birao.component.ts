import { Component, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-birao',
  standalone: true,
  imports: [NgFor,NgbCarousel,NgbCarouselModule,FormsModule],
  templateUrl: './birao.component.html',
  styleUrl: './birao.component.css'
})
export class BiraoComponent {
  //carousel:any;

  //images =["President.JPG","IMG_1259 (copie).JPG","5.jpg"].map((n)=>`assets/Projet_/${n}`)

	images_contenu =[
		{
			"Nom":"ZAINJAFY Arisona",
			"Poste":"Président",
			"IMG":"bureau/President.JPG"
		},
		{
			"Nom":"HELINIRINA Soamanarivo",
			"Poste":"Vice-Présidente",
			"IMG":"bureau/432348085_443566971357448_1083196586681801592_n.jpg"
		},
		{
			"Nom":"MEME Florentine",
			"Poste":"Trésorière",
			"IMG":"bureau/IMG_E3130.JPG"
		},/*
		{
			"Nom":"RAZAFINANDRASANA Emilienne Francine",
			"Poste":"Sécretaire",
			"IMG":"bureau/SEC.jpg"
		},*/
	]

	images_contenu_=[
		{
			"Nom":"RAZAFINANDRASANA Emilienne Francine",
			"Poste":"Sécretaire",
			"IMG":"bureau/SEC.jpg"
		},
		{
			"Nom":"RANDRIANIRINA Etienne Joël",
			"Poste":"Chef de choeur - Auteur Compositeur",
			"IMG":"bureau/Untitled - 2.png"
		},
		{
			"Nom":"Heriniaina",
			"Poste":"Chef de choeur",
			"IMG":"bureau/Heriniaina.JPG"
		},
	]

	vaomiera = [
		{
			"Nom":"Vaomieran'ny HIRA",
			"tache":"",
			"image":"assets/komity/VAOMIERAN'NY HIRA.JPG"
		},
		{
			"Nom":"Vaomieran'ny FITAOVANA",
			"tache":"",
			"image":"assets/komity/VAOMIERAN'NY FITAOVANA.JPG"
		},
		{
			"Nom":"Vaomieran'ny SERASERA",
			"tache":"",
			"image":"assets/komity/VAOMIERAN'NY SARASERA.JPG"
		},
		{
			"Nom":"Vaomieran'ny SORATRA MASINA",
			"tache":"",
			"image":"assets/komity/VAOMIERAN'NY SORATRA MASINA.JPG"
		},
		{
			"Nom":"Vaomieran'ny VOLA",
			"tache":"",
			"image":"assets/komity/VAOMIERAN'NY VOLA.JPG"
		}
	]

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;  togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}
