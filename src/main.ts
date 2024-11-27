import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

// Enable production mode for better performance and less logging

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: false
})
  .catch(err => console.error(err));
