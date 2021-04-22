# module-federation-test
Simple skeleton micro frontend application to test module federation with webpack 5 + Angular 11.
To run the application, for each individual Angular project run:
- Run `yarn install` to install dependencies.
- Run `ng serve` to run development server.

# Project structure
- shell: Container application with routing, which loads the two micro frontend applications at runtime.
- predictive-maintenance: Micro frontend 1
- vehicle-diagnosis: Micro frontend 2
