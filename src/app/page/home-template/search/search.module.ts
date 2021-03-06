import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [SearchComponent, SearchItemComponent],
  imports: [CommonModule, SearchRoutingModule, HomeModule],
})
export class SearchModule {}
