import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import LoginModal from 'flarum/forum/components/LoginModal';

extend(LoginModal.prototype, 'footer', function (items:any) {
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
