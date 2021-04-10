import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
})
export class ClaimDetailComponent implements OnInit {

  id: number;
  image: string;
  date: string;
  time: string;
  weather: string;
  GPSPrecision: string;
  validated: boolean;
  lat: number;
  lng: number;
  selected: boolean = false;
  switch: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any) {

    console.log(newItem);
	this.id = newItem.id
	this.image = newItem.img
	this.date = newItem.date
	this.time = newItem.time
	this.weather = newItem.weather
	this.GPSPrecision = newItem.GPSPrecision
	this.validated = newItem.validated
	this.lat = newItem.lat
	this.lng = newItem.lng
	this.selected = true;

  }

  switchDisplay(claim) {
  	// console.log(claim)
  	this.switch = claim;
  }

}
