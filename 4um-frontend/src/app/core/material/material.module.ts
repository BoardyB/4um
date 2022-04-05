import {NgModule} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatChipsModule } from "@angular/material/chips";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatSidenavModule],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatSidenavModule],
})
export class MaterialModule {
}
