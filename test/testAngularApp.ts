import * as angular from "angular";
import "angular-route";

import * as libTest from "TestStarterLib";

// general
import {ServicesTestGeneral001HelloWorldComponent} from './components/ServiceTestGeneral/test001HelloWorld';



const appName = "testAngularApp";

let app = angular.module(appName,[libTest.angularAppName, "ngRoute"]);

// general tests
app.component("serviceTestGeneral001",ServicesTestGeneral001HelloWorldComponent);



// routing
app.config(["$routeProvider","$locationProvider",($routeProvider: ng.route.IRouteProvider,
                                                $locationProvider: ng.ILocationProvider)=>{
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/serviceTestGeneral001',{
        template: "<service-test-general-001></service-test-general-001>"
    });
}]);

// load up angular with all the configuration we've made

angular.element(document).ready(()=>{
    angular.bootstrap(document, [appName]);
});