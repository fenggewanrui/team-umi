import { ApplyPluginsType } from '/Users/wangjie/Desktop/umi/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.jsx').default,
    "routes": [
      {
        "path": "/big/Content9",
        "exact": true,
        "component": require('@/pages/big/Content9.jsx').default
      },
      {
        "path": "/big/data.source",
        "exact": true,
        "component": require('@/pages/big/data.source.js').default
      },
      {
        "path": "/big",
        "exact": true,
        "component": require('@/pages/big/index.jsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/last/Banner1",
        "exact": true,
        "component": require('@/pages/last/Banner1.jsx').default
      },
      {
        "path": "/last/Contact0",
        "exact": true,
        "component": require('@/pages/last/Contact0.jsx').default
      },
      {
        "path": "/last/Content5",
        "exact": true,
        "component": require('@/pages/last/Content5.jsx').default
      },
      {
        "path": "/last/Feature0",
        "exact": true,
        "component": require('@/pages/last/Feature0.jsx').default
      },
      {
        "path": "/last/Feature8",
        "exact": true,
        "component": require('@/pages/last/Feature8.jsx').default
      },
      {
        "path": "/last/Footer0",
        "exact": true,
        "component": require('@/pages/last/Footer0.jsx').default
      },
      {
        "path": "/last/Nav3",
        "exact": true,
        "component": require('@/pages/last/Nav3.jsx').default
      },
      {
        "path": "/last/data.source",
        "exact": true,
        "component": require('@/pages/last/data.source.js').default
      },
      {
        "path": "/last",
        "exact": true,
        "component": require('@/pages/last/index.jsx').default
      },
      {
        "path": "/news/Feature5",
        "exact": true,
        "component": require('@/pages/news/Feature5.jsx').default
      },
      {
        "path": "/news/data.source",
        "exact": true,
        "component": require('@/pages/news/data.source.js').default
      },
      {
        "path": "/news",
        "exact": true,
        "component": require('@/pages/news/index.jsx').default
      },
      {
        "path": "/team/Teams2",
        "exact": true,
        "component": require('@/pages/team/Teams2.jsx').default
      },
      {
        "path": "/team",
        "exact": true,
        "component": require('@/pages/team/index.jsx').default
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
