import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gizlilikpage',
  templateUrl: './gizlilikpage.component.html',
  styleUrls: ['./gizlilikpage.component.scss']
})
export class GizlilikpageComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Ceza Avukatım | Gizlilik Politikası');
    this.metaService.updateTag({name: 'description', content: 'Ceza Avukatım Sitesinin Ceza Hukuku Konusunda Yardımcı Olurken İzlediği Gizlilik Politikasıdır.'})
  }

}
