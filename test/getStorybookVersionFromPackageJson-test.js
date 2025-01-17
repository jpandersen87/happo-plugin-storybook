const path = require('path');

const getStorybookVersionFromPackageJson = require('../getStorybookVersionFromPackageJson');

describe('with project package.json', () => {
  it('finds the right version', () => {
    const version = getStorybookVersionFromPackageJson();
    expect(version).toBe(7);
  });
});

describe('with storybook 6', () => {
  it('finds the right version', () => {
    const version = getStorybookVersionFromPackageJson(
      path.resolve(__dirname, 'v6-package.json'),
    );
    expect(version).toBe(6);
  });
});

describe('with storybook 7', () => {
  it('finds the right version', () => {
    const version = getStorybookVersionFromPackageJson(
      path.resolve(__dirname, 'v7-package.json'),
    );
    expect(version).toBe(7);
  });
});

describe('with no dev dependencies', () => {
  it('finds the right version', () => {
    const version = getStorybookVersionFromPackageJson(
      path.resolve(__dirname, 'no-devdeps-package.json'),
    );
    expect(version).toBe(7);
  });
});

describe('with no storybook dependencies', () => {
  it('throws', () => {
    expect(() =>
      getStorybookVersionFromPackageJson(
        path.resolve(__dirname, 'no-storybook-package.json'),
      ),
    ).toThrow(/not listed/);
  });
});
