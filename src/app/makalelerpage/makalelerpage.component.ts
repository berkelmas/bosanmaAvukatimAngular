import { Component, OnInit } from '@angular/core';
import { MakalelerService } from '../makaleler.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-makalelerpage',
  templateUrl: './makalelerpage.component.html',
  styleUrls: ['./makalelerpage.component.scss']
})
export class MakalelerpageComponent implements OnInit {
  firstSixArticle: any;
  environment: {} = environment;

  constructor(private makalelerService: MakalelerService) { }

  ngOnInit() {
    this.makalelerService.firstSixArticle.subscribe(res => this.firstSixArticle = res);
  }


}
