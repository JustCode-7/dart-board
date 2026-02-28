import {APP_INITIALIZER, enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withComponentInputBinding} from "@angular/router";
import {routes} from "./app/app-routing.module";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {ServiceWorkerModule} from "@angular/service-worker";
import {noop} from "./app/shared/utils/util";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000'
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      multi: true
    },
  ]
}).catch(err => console.error(err));
