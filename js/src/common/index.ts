import app from 'flarum/common/app';
import {extend} from "flarum/common/extend";
import LoginModal from "flarum/forum/components/LogInModal";

app.initializers.add('farzoqe-fts-forgot-password-common', () => {
  console.log('[farzoqe/flarum-fts-forgot-password] Hello, forum and admin!');
});


extend(LoginModal.prototype, 'footer', function (items: any) {
  const customLink = 'https://findtheseven.com/forgot-password';
  items.replace('forgotPassword', m(
    'a',
    {
      href: customLink,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    app.translator.trans('core.forum.login.forgot_password_link')
  ));
});
