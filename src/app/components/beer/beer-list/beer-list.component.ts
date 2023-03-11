import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  beerList = [];
  params = {
    page: 1,
    per_page: 10,
  };
  constructor(private _beerService: BeerService) {}

  ngOnInit(): void {
    this.fetchBeer();
  }

  fetchBeer() {
    this._beerService
      .fetchBeer(this.params)
      .pipe(finalize(() => {}))
      .subscribe((response: any) => {
        response.map((x) => {
          let uniqueItems = [
            ...new Set(x.ingredients.hops.map((item) => item.name)),
            ...new Set(x.ingredients.malt.map((item) => item.name)),
            x.ingredients.yeast,
          ];
          x.ingredients = 'Ingredients: ' + uniqueItems.join(', ');
        });
        if (this.beerList.length == 0) {
          this.beerList = response;
        } else {
          this.beerList.push(...response);
        }
      });
  }

  loadMoreList() {
    this.params.page++;
    this.fetchBeer();
  }
}
