import defaultMessages from 'ember-changeset-validations/utils/messages';
import application from '../utils/application';

const { keys } = Object;
const intl = application.instance.lookup('service:intl');

let messages = {};
keys(defaultMessages).forEach(key => {
  console.log("here");
  let lookupKey = `validations.${key}`;
  if (intl.exists(lookupKey)) {
    // messages[key] = (a,b,c,d) => {
      // console.log("over hter", a,b,c,d);
      // messages[key] = intl.t(lookupKey, {min: '{min}'}).toString(); // use the translation
      // messages[key] = messages
    // }
  } else {
    messages[key] = defaultMessages[key];
  }
});

console.log(messages);

export default messages;
// export default [];
