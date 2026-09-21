import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular } from 'single-spa-angular';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { NgZone } from '@angular/core';
// import * as driverParcel from './app/components/driver-badge/driver-badge.parcel';

const lifecycles = singleSpaAngular({
  bootstrapFunction: () => bootstrapApplication(App, appConfig),
  template: '<app-root></app-root>',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

// Export DriverBadge Parcel lifecycle for MFE 2
// export const DriverBadgeParcel = driverParcel;
