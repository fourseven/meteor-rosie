Package.describe({
  summary: "Rosie is a factory for building JavaScript objects, mostly useful for setting up test data."
});

Npm.depends({
    'rosie': '0.2.0'
});

Package.on_use(function (api, where) {
  api.add_files('rosie.js', ['client', 'server']);

  api.export("Factory");
});

Package.on_test(function (api) {
  api.use('rosie');

  api.add_files('rosie_tests.js', ['client', 'server']);
});
