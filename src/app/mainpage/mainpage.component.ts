import { Component, OnInit } from '@angular/core';
import { MakalelerService } from '../makaleler.service';
import { Title, Meta } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  firstSixArticle: any;

  firstFourBosanma: any;
  firstFourNafaka: any;
  firstFourVelayet: any;
  firstFourAileicisiddet: any;
  firstFourMalpaylasimi: any;

  environment: {} = environment;

  constructor(private makalelerService: MakalelerService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Boşanma Avukatım - Ana Sayfa');
    this.metaService.updateTag({name: 'description', content: 'Boşanma Avukatım, Aile Hukukunda Hukuki Danışmanlık İçin Kurulmuş Bir Web Sayfasıdır.'})
    
    this.makalelerService.firstSixArticle.subscribe(res => this.firstSixArticle = res);

    this.makalelerService.firstFourBosanma.subscribe(res => this.firstFourBosanma = res['results']);
    this.makalelerService.firstFourNafaka.subscribe(res => this.firstFourNafaka = res['results']);
    this.makalelerService.FirstFourVelayet.subscribe(res => this.firstFourVelayet = res['results']);
    this.makalelerService.firstFourAileicisiddet.subscribe(res => this.firstFourAileicisiddet = res['results']);
    this.makalelerService.firstFourMalpaylasimi.subscribe(res => this.firstFourMalpaylasimi = res['results']);
  }

}
