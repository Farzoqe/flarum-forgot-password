import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('farzoqe-fts-forgot-password', () => {
  console.log('[farzoqe/flarum-fts-forgot-password] Hello, admin!');
});
