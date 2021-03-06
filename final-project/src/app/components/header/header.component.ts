import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../services/cart.service';
import { faShoppingCart, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { KeyValue } from '@angular/common';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavigationStart, Router } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faBars = faBars;
  faTimes = faTimes;
  faSearch = faSearch;

  showDrawer: boolean = false;
  clickDrawerBtn(): void {
    this.showDrawer = !this.showDrawer;
  }
  // opacity header when scroll page down
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.menu') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('on-scroll');
    } else {
      element.classList.remove('on-scroll');
    }
  }


  // menuSelected: String = "";
  // menus: KeyValue<String, any>[] = [
  //   { key: "Trang chủ", value: "" },
  //   { key: "Căn hộ", value: "products" },
  //   { key: "Dự án", value: "ocean-park-introduce" },
  //   { key: "Dự án phía tây", value: "west-point-introduce" },
  //   { key: "Liên hệ", value: "contact" },
  // ];

  navUrl?: string;
  constructor(
    public authService: AuthService,
    public cartService: CartService,
    private router: Router
  ) {
    this.cartService.cartSubject.subscribe((data) => {
      this.cartItem = data
    });

    // Active in header

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.navUrl = event['url'];
      }
    });
  }

  showSearchForm: boolean = false;
  changeSearchDisplay(): void {
    this.showSearchForm = !this.showSearchForm;
  }

  ngOnInit(): void {
    // if (this.menuSelected === "")
    //   this.menuSelected = this.menus[0].key;
    Aos.init();
    this.countItemInCart()
    this.navUrl = "/";
  }

  // changeMenu(menu: String): void {
  //   this.menuSelected = menu;
  //   console.log(menu);
  // }

  cartItem = 0
  countItemInCart() {
    let count = 0
    if (localStorage.getItem('localCart') != null) {
      let cartCount = JSON.parse(localStorage.getItem('localCart') || '{}')
      for (let i = 0; i < cartCount.length; i++) {
        count += cartCount[i].quantity
      }
    }
    this.cartItem = count
    console.log(this.cartItem)
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
