import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

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
