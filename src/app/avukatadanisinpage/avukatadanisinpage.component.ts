import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-avukatadanisinpage',
  templateUrl: './avukatadanisinpage.component.html',
  styleUrls: ['./avukatadanisinpage.component.scss']
})
export class AvukatadanisinpageComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Ceza Avukatım | Avukata Danışın');
    this.metaService.updateTag({name: 'description', content: 'Ceza Avukatım Sitesi Avukata Danışın Sayfasıdır.'})
  }

}
