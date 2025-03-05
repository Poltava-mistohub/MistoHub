import { lazy } from 'react';

/**
 * Default lazy loading function does not give the thread a space to render.
 * This lazy wrapper request idle callback so we start to parse the module only when the main thread is idle.
 */
function realLazy(callback) {
  const delay = 'requestIdleCallback' in window ?
    (cb) => window.requestIdleCallback(cb, { timeout: 100 }) :
    (cb) => setTimeout(cb, 0);

  return lazy(() => new Promise(res => delay(res)).then(callback));
}

export default realLazy;
