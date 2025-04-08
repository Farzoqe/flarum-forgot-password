import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import LoginModal from 'flarum/forum/components/LoginModal';

extend(HeaderPrimary.prototype, 'items', function(items) {
  items.add('google', <a href="https://google.com">Google</a>);
});


extend(LoginModal.prototype, 'fields', function (items) {
  const customLink = 'https://your-custom-reset-link.com';

  items.add(
    'identification',
    <div className="Form-group">
      <input
        className="FormControl"
        name="identification"
        type="text"
        placeholder={'test'}
        aria-label={'test'}
        // bidi={this.identification}
        // disabled={this.loading}
      />
    </div>,
    30
  );
});
extend(LoginModal.prototype, 'footer', function (items) {
  return 'test'
});
