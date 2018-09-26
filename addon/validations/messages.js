import defaultMessages from 'ember-changeset-validations/utils/messages';
import application from '../utils/application';

const { keys } = Object;
const intl = application.instance.lookup('service:intl');

let messages = {};
keys(defaultMessages).forEach(key => {
  let lookupKey = `validations.${key}`;
  if (intl.exists(lookupKey)) {
    messages[key] = intl.lookup(lookupKey);
  } else {
    messages[key] = defaultMessages[key];
  }
});

export default messages;
