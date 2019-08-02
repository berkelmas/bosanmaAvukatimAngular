import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MakalelerService {
  firstSixArticle: BehaviorSubject<any> = new BehaviorSubject([]);

  firstFourBosanma: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourNafaka: BehaviorSubject<any> = new BehaviorSubject([]);
  FirstFourVelayet: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourAileicisiddet: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourMalpaylasimi: BehaviorSubject<any> = new BehaviorSubject([]);

  kategoriBosanma: string = 'bosanma';
  kategoriNafaka: string = 'nafaka';
  kategoriVelayet: string = 'velayet';
  kategoriAileicisiddet: string = 'aileicisiddet';
  kategoriMalpaylasimi: string = 'malpaylasimi';

  constructor(private http: HttpClient) {}

  getMakaleDetail(id: number) {
    return this.http.get(`${environment.apiEndpoint}makale/${id}`);
  }

  getFourMakale(kategori: string, page: number) {
    if (kategori === '' &&  page === 1) {
      return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/`);
    } else if (kategori !== '' && page === 1) {
      switch(true) {
        case (kategori === this.kategoriBosanma):
          return this.firstFourBosanma;

        case (kategori === this.kategoriNafaka):
          return this.firstFourNafaka;

        case (kategori === this.kategoriVelayet):
          return this.FirstFourVelayet;

        case (kategori === this.kategoriAileicisiddet):
          return this.firstFourAileicisiddet;

        case (kategori === this.kategoriMalpaylasimi):
          return this.firstFourMalpaylasimi;

      }
    } else if (kategori !== '' && page !== 1) {
      // Custom category, Custom Page
      return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${kategori}&page=${page}`);
    } else if (kategori === '' && page !== 1) {
      return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?page=${page}`);
    }
  }

  /// GETTING INITIAL DATA FOR THE MAIN PAGE
  getFirstSixArticle() {
    return this.http.get(`${environment.apiEndpoint}mainpagenocontent/`);
  }

  getFirstFourBosanma() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriBosanma}`);
  }

  getFirstFourNafaka() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriNafaka}`);
  }

  getFirstFourVelayet() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriVelayet}`);
  }

  getFirstFourAileicisiddet() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriAileicisiddet}`);
  }

  getFirstFourMalpaylasimi() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriMalpaylasimi}`);
  }

}
