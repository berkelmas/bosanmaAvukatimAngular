import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

import { MakalelerService } from '../makaleler.service';

@Component({
  selector: 'app-mainmakaleler',
  templateUrl: './mainmakaleler.component.html',
  styleUrls: ['./mainmakaleler.component.scss']
})
export class MainmakalelerComponent implements OnInit {
  environment: {} = environment;
  sayfa: number;
  kategori: string;

  sayfaCount: number;
  sayfaCountArray: any;

  constructor(private makalelerService: MakalelerService, private router: ActivatedRoute, private titleService: Title, private metaService: Meta) {}

  fourMakale: any;

  ngOnInit() {

    this.router.params.subscribe(res => {
      if (res.sayfa) {
        this.sayfa = parseInt(res.sayfa);

        if (res.kategori) {
          this.kategori = res.kategori;
        } else {
          this.kategori = '';
        }
      } else {
        this.sayfa = 1;

        if (res.kategori) {
          this.kategori = res.kategori;
        } else {
          this.kategori = '';
        }
      }


      this.makalelerService.getFourMakale(this.kategori, this.sayfa)
        .subscribe(res => {
          if (res['results']) {
            this.fourMakale = res['results'];

            this.titleService.setTitle(`Ceza Avukatım | ${res['results'][0].makale_kategori ? res['results'][0].makale_kategori : 'Yayınlar'}` );
            this.metaService.updateTag({name: 'description', content: `Ceza Avukatım Sitesinin Ceza Hukuku ${res['results'][0].makale_kategori ? res['results'][0].makale_kategori : ''} Alanında Yayınladığı Bilgilendirici Makaleler Bu Sayfadadır.`})

            this.sayfaCount = res['totalpages'];
            this.sayfaCountArray = Array(this.sayfaCount);
          }

        });
    })

  }

}
