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

  firstFourYaralama: any;
  firstFourBeyazyakalisuclari: any;
  firstFourHakaret: any;
  firstFourUyusturucumaddesuclari: any;
  firstFourOrgutsuclari: any;

  environment: {} = environment;

  constructor(private makalelerService: MakalelerService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Ceza Avukatım - Ana Sayfa');
    this.metaService.updateTag({name: 'description', content: 'Ceza Avukatım, Ceza Hukukunda Hukuki Danışmanlık İçin Kurulmuş Bir Web Sitesidir.'})
    
    this.makalelerService.firstSixArticle.subscribe(res => this.firstSixArticle = res);

    this.makalelerService.firstFourUyusturucumaddesuclari.subscribe(res => this.firstFourUyusturucumaddesuclari = res['results']);
    this.makalelerService.firstFourBeyazyakalisuclari.subscribe(res => this.firstFourBeyazyakalisuclari = res['results']);
    this.makalelerService.FirstFourHakaret.subscribe(res => this.firstFourHakaret = res['results']);
    this.makalelerService.firstFourYaralama.subscribe(res => this.firstFourYaralama = res['results']);
    this.makalelerService.firstFourOrgutsuclari.subscribe(res => this.firstFourOrgutsuclari = res['results']);
  }

}
