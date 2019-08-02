import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MakalelerService {
  firstSixArticle: BehaviorSubject<any> = new BehaviorSubject([]);

  firstFourUyusturucumaddesuclari: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourBeyazyakalisuclari: BehaviorSubject<any> = new BehaviorSubject([]);
  FirstFourHakaret: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourYaralama: BehaviorSubject<any> = new BehaviorSubject([]);
  firstFourOrgutsuclari: BehaviorSubject<any> = new BehaviorSubject([]);

  kategoriHakaret: string = 'hakaret';
  kategoriYaralama: string = 'yaralama';
  kategoriOrgutsuclari: string = 'orgutsuclari';
  kategoriUyusturucumaddesuclari: string = 'uyusturucumaddesuclari';
  kategoriBeyazyakalisuclari: string = 'beyazyakalisuclari';

  constructor(private http: HttpClient) {}

  getMakaleDetail(id: number) {
    return this.http.get(`${environment.apiEndpoint}makale/${id}`);
  }

  getFourMakale(kategori: string, page: number) {
    if (kategori === '' &&  page === 1) {
      return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/`);
    } else if (kategori !== '' && page === 1) {
      switch(true) {
        case (kategori === this.kategoriHakaret):
          return this.FirstFourHakaret;

        case (kategori === this.kategoriYaralama):
          return this.firstFourYaralama;

        case (kategori === this.kategoriOrgutsuclari):
          return this.firstFourOrgutsuclari;

        case (kategori === this.kategoriUyusturucumaddesuclari):
          return this.firstFourUyusturucumaddesuclari;

        case (kategori === this.kategoriBeyazyakalisuclari):
          return this.firstFourBeyazyakalisuclari;

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

  getFirstFourUyusturucumaddesuclari() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriUyusturucumaddesuclari}`);
  }

  getFirstFourBeyazyakalisuclari() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriBeyazyakalisuclari}`);
  }

  getFirstFourHakaret() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriHakaret}`);
  }

  getFirstFourYaralama() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriYaralama}`);
  }

  getFirstFourOrgutsuclari() {
    return this.http.get(`${environment.apiEndpoint}kategorimakalefilter/?kategori=${this.kategoriOrgutsuclari}`);
  }

}
