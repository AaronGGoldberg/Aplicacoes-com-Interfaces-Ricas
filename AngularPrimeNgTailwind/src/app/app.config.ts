import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

// PrimeNG
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

// Componentes
import { ButtonModule } from 'primeng/button';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),

    providePrimeNG({
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    }),

    importProvidersFrom(ButtonModule)
  ]
};