import './style/style.css';

console.log('hi world with webpack');

if (module.hot) {
  module.hot.accept()
};