import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ReportsComponent } from './reports/reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    ChartModule,
    SharedModule,
    ReportsRoutingModule,
    ReportsRoutingModule,
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
