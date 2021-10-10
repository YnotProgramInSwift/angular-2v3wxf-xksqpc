import { FlopListComponent } from './flop-list/flop-list.component';
import { FlopDetailsComponent } from './flop-details/flop-details.component';

export const routingTable = [
  { path: '', redirectTo: '/flops', pathMatch: 'full'},
  { path: 'flops', component: FlopListComponent },
  { path: 'flops/:id', component: FlopDetailsComponent },
]