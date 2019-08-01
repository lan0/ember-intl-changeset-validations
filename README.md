ember-intl-changeset-validations
==============================================================================

Adds support for ember-intl to ember-changeset-validations.

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)

------------------------------------------------------------------------------

Big thanks to [ember-i18n-changeset-validations](https://github.com/mirai-audio/ember-i18n-changeset-validations) that showed me 90% of the how-to needed to make this work.


Installation
------------------------------------------------------------------------------

```
ember install ember-intl-changeset-validations
```

Usage
------------------------------------------------------------------------------

Create a file with translations: `/translations/validations/cs.json`:

```json
{
  "validations": {
    "inclusion": "Musí být vybráno",
    "present": "Prosím vyplňte",
    "between": "Musí mít mezi {min} a {max} znaky",
    "invalid": "Neplatný formát",
    "email": "Nplatná e-mailová adresa"
  }
}
```

All the validation messages should be now translated.

Thanks
------------------------------------------------------------------------------

Big thanks to [ember-i18n-changeset-validations](https://github.com/mirai-audio/ember-i18n-changeset-validations) that showed me 90% of the how-to needed to make this work.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-intl-changeset-validations`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
