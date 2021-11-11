import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { VoucherComponent } from './pages/voucher/voucher.component';
import { OutletComponent } from './pages/outlet/outlet.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path:"", redirectTo: "home", pathMatch:'full'},
  { path:"home", component: HomeComponent},
  { path:"voucher", component: VoucherComponent},
  { path:"outlet", component: OutletComponent},
  { path:"**", component:HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule,FormsModule],
  declarations:[]
})
export class AppRoutingModule { }
