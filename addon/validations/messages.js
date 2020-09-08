import defaultMessages from 'ember-changeset-validations/utils/messages';
import application from '../utils/application';

const { keys } = Object;
const intl = application.instance.lookup('service:intl');

const messages = {};

keys(defaultMessages).forEach(key => {
  const lookupKey = `validations.${key}`;
  if (intl.exists(lookupKey)) {
    const lookupResult = intl.lookup(lookupKey);
    messages[key] = 'string' !== typeof lookupResult ? lookupResult.reduce(
      (acc, curr) => {
        if (curr.type === 1) {
          return acc + `{${curr.value}}`;
        } else {
          return acc + curr.value
        }
      }, ""
    ) : lookupResult;
  } else {
    messages[key] = defaultMessages[key];
  }
});

export default messages;