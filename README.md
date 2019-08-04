ember-intl-changeset-validations
==============================================================================

Adds support for ember-intl to ember-changeset-validations.

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)
[![Ember Observer Score](https://emberobserver.com/badges/ember-intl-changeset-validations.svg)](https://emberobserver.com/addons/ember-intl-changeset-validations)

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

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
