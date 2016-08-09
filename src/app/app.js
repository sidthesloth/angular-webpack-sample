/**
 * Created by sidtheant on 8/9/16.
 */

import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import routing from './app.config';

import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

const MODULE_NAME = 'atrsystem';

angular.module(MODULE_NAME, [])
    .config(routing)
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
