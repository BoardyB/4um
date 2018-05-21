import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {
}
