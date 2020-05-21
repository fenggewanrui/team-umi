import { Plugin } from '/Users/wangjie/Desktop/umi/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','request',],
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});
plugin.register({
  apply: require('/Users/wangjie/Desktop/umi/src/.umi/plugin-helmet/runtime.ts'),
  path: '/Users/wangjie/Desktop/umi/src/.umi/plugin-helmet/runtime.ts',
});

export { plugin };
