import defaultMessages from 'ember-changeset-validations/utils/messages';
import application from '../utils/application';

const { keys } = Object;
const intl = application.instance.lookup('service:intl');

let messages = {};
keys(defaultMessages).forEach(key => {
  let lookupKey = `validations.${key}`;
  if (intl.exists(lookupKey)) {
    messages[key] = intl.lookup(lookupKey).reduce(
      (acc, curr) => {
        if(curr.type === 1) {
          return acc + `{${curr.value}}`;
        } else {
          return acc+curr.value
        }
      }, ""
    );
  } else {
    messages[key] = defaultMessages[key];
  }
});

export default messages;
