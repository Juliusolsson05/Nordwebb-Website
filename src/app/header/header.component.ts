import { Component, OnInit, Inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  screen_width: number = 0;
  home_active: boolean = true;
  current_route: string = this.router.url;
  focused_component: number = 0;
  hamburger_active: boolean = false;
  div_state: string = ''

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, @Inject(ViewportScroller) private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        console.log('test')
      }
    });
  }

  toggleHamburger() {
    this.hamburger_active = !this.hamburger_active
    this.div_state = this.div_state ? 'show' : 'hide';
    const body = this.document.body;
    console.log(body)
    body.classList.toggle('overflow-hidden');
  }

  onScroll = () => {
    if (this.home_active == true) {
    const scrollPosition: number[] = this.viewportScroller.getScrollPosition();
    this.focused_component = Math.round(scrollPosition[1]/1000)
  }
}

  bookingClick() {
    this.focused_component = 100;
    this.home_active= false

    if (this.hamburger_active) {
      this.toggleHamburger()
    }
  }

  sectionScroll(section: number, param?: boolean) {
    const current_section = document.getElementById('section-' + section.toString())
    this.home_active = true
    this.focused_component = section;
    this.router.navigate(['/']).then(() => {
      if(current_section) {current_section.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    });
    if(param) {
      this.toggleHamburger()
    }

  }
}
