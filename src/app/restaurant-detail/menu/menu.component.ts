import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './menu-item/menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];

    constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.restaurantsService.restaurantMenuItems(this.route.parent.snapshot.params['id']).subscribe(menuItens => this.items = menuItens);
    }

}
