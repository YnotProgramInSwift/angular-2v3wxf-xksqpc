import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlopService } from './flop.service';
import { ActivatedRoute } from '@angular/router';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'my-flop-list',
  templateUrl: './flop-list.component.html',
  styleUrls: ['./flop-list.component.css'],
})
export class FlopListComponent {
  flops;
  rentalList;

  constructor(
    private flopService: FlopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((qpm) => {
      if (qpm.has('starsFilter')) {
        let stars = +qpm.get('starsFilter');
        this.flopService.getFlopsMaxStars(stars).subscribe((filteredFlops) => {
          this.flops = filteredFlops;
        });
      } else {
        this.flopService.getFlops().subscribe((flops) => {
          this.flops = flops;
        });
      }
    });

    this.flopService
      .getRentalList()
      .subscribe((rentalList) => (this.rentalList = rentalList));
  }

  onClick() {
    console.log('rented');
  }
}
