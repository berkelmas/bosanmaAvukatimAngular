import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { isPlatformBrowser } from '@angular/common';
import { NgForm } from '@angular/forms';

import { MakalelerService } from './makaleler.service';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('mobileMenuAnimation', [
      transition('void => displayMobileMenu', [style({height: 0, transform: 'scaleY(0)', opacity: 0}), animate('500ms')]),
      transition('displayMobileMenu => void', animate('500ms ease-out', style({height: 0, opacity: 0, transform: 'scaleY(0)'})))
    ]),
    trigger('emailSubAnimation', [
      transition('void => displaySubsMessage', [style({transform: 'translateY(-100%)', opacity: 0}), animate('500ms ease-in')]),
      transition('displaySubsMessage => void', animate('500ms ease-out', style({opacity: 0, transform : 'translateY(-100%)'})))
    ])
  ]
})
export class AppComponent implements OnInit {
  navbarMobileOpen: boolean;
  mobileMenuOpen: boolean = false;

  uzmanliklarOpened: boolean = false;
  desktopSubState: boolean = false;

  sentContactSuccess: boolean = false;
  sentContactFailed: boolean = false;

  @HostListener('window:resize', ['$event']) handleResize() {

    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 992) {
        this.navbarMobileOpen = false;
      } else {
        this.navbarMobileOpen = true;
        this.mobileMenuOpen = false;
      }
    }

  }

  constructor(private contactService: ContactService ,private makalelerService: MakalelerService, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 992) {
        this.navbarMobileOpen = false;
      } else {
        this.navbarMobileOpen = true;
      }
    }

    // Get first Articles at first.
    this.makalelerService.getFirstSixArticle()
      .subscribe(res => this.makalelerService.firstSixArticle.next(res['results']) );

    this.makalelerService.getFirstFourUyusturucumaddesuclari()
    .subscribe(res => this.makalelerService.firstFourUyusturucumaddesuclari.next(res));

    this.makalelerService.getFirstFourBeyazyakalisuclari()
      .subscribe(res => this.makalelerService.firstFourBeyazyakalisuclari.next(res));

    this.makalelerService.getFirstFourHakaret()
      .subscribe(res => this.makalelerService.FirstFourHakaret.next(res));

    this.makalelerService.getFirstFourYaralama()
      .subscribe(res => this.makalelerService.firstFourYaralama.next(res));

    this.makalelerService.getFirstFourOrgutsuclari()
      .subscribe(res => this.makalelerService.firstFourOrgutsuclari.next(res));
  }


  changeMenuState() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.uzmanliklarOpened = false;
  }

  changeUzmanliklarSubMenu() {
    this.uzmanliklarOpened = !this.uzmanliklarOpened;
  }

  handleSubmit(f: NgForm) {
    const result = f.value;
    if (result.email === '') {
      return;
    }
    this.contactService.sendContactData(result.email)
      .subscribe(
        res => {
          f.reset();
          this.sentContactSuccess = true;
          setTimeout(() => {
            this.sentContactSuccess = false;
          }, 2000);
          console.log(res);
        },
        err => {
          f.reset();
          this.sentContactFailed = true;
          setTimeout(() => {
            this.sentContactFailed = false;
          }, 2000)
          console.log(err)
        }
      );
  }

}
