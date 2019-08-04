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

### GitLab configuration

This app leverages GitLab autodevops feature, which unfortunatelly does not have ability to run multiple buildpacks at the moment. So I created a meld of `node` and `chrome` buildpacks to make it work seamlessly. So this repo needs following in `Settings -> CI/CD -> Variables`:

 - BUILDPACK_URL: https://github.com/MichalBryxi/heroku-buildpack-nodejs.git#import-heroku-buildpack-google-chrome
 - DAST_DISABLED: true
