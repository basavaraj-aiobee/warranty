import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WarrantySharedLibsModule, WarrantySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WarrantySharedLibsModule, WarrantySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WarrantySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WarrantySharedModule {
  static forRoot() {
    return {
      ngModule: WarrantySharedModule
    };
  }
}
