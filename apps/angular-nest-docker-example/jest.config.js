module.exports = {
  name: 'angular-nest-docker-example',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-nest-docker-example',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
