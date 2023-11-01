import { Component, OnInit } from '@angular/core';
import { MouseenterDirective } from '../Shared/Directive/img-hover.directive';
import { DataStorageService } from '../Shared/data-storage.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private data: DataStorageService){}
  imgSrc: string = "https://sandybumfit.files.wordpress.com/2018/07/start-your-fitness-journey.png"

  onMouseOver(): void
  {this.imgSrc = "https://i.etsystatic.com/8074329/r/il/8a9ef9/4541095098/il_fullxfull.4541095098_ep6i.jpg"
  }

onMouseOut():void {
    this.imgSrc = "https://i.etsystatic.com/8074329/r/il/8a9ef9/4541095098/il_fullxfull.4541095098_ep6i.jpg";
  }
ngOnInit(): void {
  this.data.fetchExercises();
}
}
