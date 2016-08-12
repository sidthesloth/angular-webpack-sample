/**
 * Created by sidtheant on 8/9/16.
 */

import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngmaterial from 'angular-material';
// import jsdata from 'js-data';
// import jsDataModuleName from 'js-data-angular';


import routing from './app.config';
import home from './features/home';

import 'angular-material/angular-material.css';

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

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, ngmaterial, home])
    .config(routing)
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .run((DS, DSVersion, $rootScope) => {
        $rootScope.test = 'It works! Using js-data ' + DSVersion.full;
    });

export default MODULE_NAME;
