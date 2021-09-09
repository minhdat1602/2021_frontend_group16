import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';
@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  constructor() { }

  ngoaithats: String[] = [
    "/assets/img/ngoaithat-1.jpg",
    "/assets/img/ngoaithat-2.jpg"
  ];
  noithats: String[] = [
    "assets/img/noithat1.jpg",
    "assets/img/noithat1.jpg"
  ];
  kientrucs: String[] = [
    "assets/img/kientruc1.png",
    "assets/img/kientruc2.png",
    "assets/img/kientruc2.png"
  ];
  kientruc?: String;

  ngOnInit(): void {
    AOS.init();
    this.kientruc = this.kientrucs[0];
  }
  changeKT(num: number): void {
    this.kientruc = this.kientrucs[num];
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 600,
    // autoplay: true,
    items: 1,

  }

}
