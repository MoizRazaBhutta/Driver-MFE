import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular } from 'single-spa-angular';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { NgZone } from '@angular/core';
// import * as driverParcel from './app/components/driver-badge/driver-badge.parcel';

const lifecycles = singleSpaAngular({
  bootstrapFunction: () => bootstrapApplication(App, appConfig),
  template: '<app-mfe-driver></app-mfe-driver>',
  NgZone,
  // Tell Single-SPA explicitly to mount inside the Shell's target div
  domElementGetter: () => {
    const el = document.getElementById('single-spa-application:@hub/mfe-driver');
    if (!el) {
      throw new Error(
        'Target container #single-spa-application:@hub/mfe-driver not found in Shell!',
      );
    }
    return el;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

// Export DriverBadge Parcel lifecycle for MFE 2
// export const DriverBadgeParcel = driverParcel;
