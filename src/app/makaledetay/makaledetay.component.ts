import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

import { MakalelerService } from '../makaleler.service';

@Component({
  selector: 'app-makaledetay',
  templateUrl: './makaledetay.component.html',
  styleUrls: ['./makaledetay.component.scss']
})
export class MakaledetayComponent implements OnInit {
  environment: {} = environment;
  makale: any;

  prevNextMakaleler: [];

  constructor(private router: ActivatedRoute, private makalelerService: MakalelerService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.makalelerService.getMakaleDetail(res.id)
        .subscribe(makale => {
          this.makale = makale;
          
          this.titleService.setTitle('Ceza Avukatım | ' + this.makale.makale_baslik);
          this.metaService.updateTag({name: 'description', content: this.makale.makale_meta_description})
        });
    })
    this.makalelerService.firstSixArticle.subscribe(res => {
      this.prevNextMakaleler = res;
    });
  }

}
