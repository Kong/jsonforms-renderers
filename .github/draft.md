# CI Draft
pr:
  - install
  - lint
  - test & report coverage
  - release preview package
  - release preview storybook

merge to main:
  - install
  - lint
  - test
  - release package
  - release storybook
  - release changelog
  - release github release
  - release npm package
