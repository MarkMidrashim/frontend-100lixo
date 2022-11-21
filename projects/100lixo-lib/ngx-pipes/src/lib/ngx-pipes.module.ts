import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFirstWordPipe } from './ngx-first-letter.pipe';

@NgModule({
  declarations: [ NgxFirstWordPipe ],
  imports: [ CommonModule ],
  exports: [ NgxFirstWordPipe ]
})
export class NgxPipesModule {}
