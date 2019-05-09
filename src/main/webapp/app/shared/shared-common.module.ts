import { NgModule } from '@angular/core';

import { WarrantySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [WarrantySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [WarrantySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WarrantySharedCommonModule {}
