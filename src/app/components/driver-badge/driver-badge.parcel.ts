import { NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular } from 'single-spa-angular';
import { DriverBadge } from './driver-badge';

const lifecycles = singleSpaAngular({
  bootstrapFunction: () => bootstrapApplication(DriverBadge),
  template: '<app-driver-badge></app-driver-badge>',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
