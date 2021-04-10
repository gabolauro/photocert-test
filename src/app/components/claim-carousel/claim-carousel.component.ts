import { Component, OnInit, HostListener, ViewChild, Output, EventEmitter } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

import * as dataClaim from './dataClaim.json'; // Load data JASON

@Component({
  selector: 'app-claim-carousel',
  templateUrl: './claim-carousel.component.html',
  styleUrls: ['./claim-carousel.component.css']
})
export class ClaimCarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop:false,
    nav:false,
    dots:false,
    autoplay:false,
    navText: ['', ''],
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    items:6
  }

  claim: any[];

  location: boolean = false;
  imgDisplay: string;
  lat: number;
  lng: number;
  switch: boolean = false;


  constructor() { 

  	this.claim = dataClaim['default'];

   }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<any>();

  selectImg(item: any) {
  	// console.log(item)
  	this.lat = item.lat;
  	this.lng = item.lng;
  	this.imgDisplay = item.img;
  	this.location = true;

  	this.newItemEvent.emit(item);
  }



  @Output() switchEvent = new EventEmitter<boolean>();

  switchDisplay() {

  	this.switch = !this.switch
  	this.switchEvent.emit(this.switch);

  }


  //Slide width keypress arows
  @ViewChild('owlCar1') owlCar1: any;
  @ViewChild('owlCar2') owlCar2: any;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event);

    if (event.keyCode == 39) {
      // console.log(this.owlCar1.nativeElement.text);
        this.owlCar1.next()
        this.owlCar2.next()
    }
    if (event.keyCode == 37) {
      // console.log(this.owlCar1.nativeElement.text);
        this.owlCar1.prev()
        this.owlCar2.prev()
    }
  }

}
