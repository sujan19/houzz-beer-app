import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { MdbTabsComponent } from 'mdb-angular-ui-kit/tabs';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements AfterViewInit {
  @ViewChild('tabs') tabs: MdbTabsComponent;
  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.router.url == '/beer/list') {
      this.tabs.setActiveTab(0);
    } else if (this.router.url == '/beer/detail') {
      this.tabs.setActiveTab(1);
    }
    this.cd.detectChanges();
  }

  onTabChange(event) {
    switch (event.tab.title) {
      case 'All Beers':
        this.router.navigate(['/beer/list']);
        break;

      case 'My Beers':
        this.router.navigate(['/beer/detail']);
        break;

      default:
        break;
    }
  }
}
