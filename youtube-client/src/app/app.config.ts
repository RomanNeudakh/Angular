import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import routes from './app.routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(
      { eventCoalescing: true },
    ),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
  ],
};
export default appConfig;