import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[]

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantReviewsById(this.route.parent.snapshot.params['id']).subscribe(reviews => this.reviews = reviews)
  }

}
