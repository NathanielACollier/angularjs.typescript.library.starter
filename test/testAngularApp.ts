import * as angular from "angular";
import "angular-route";

import * as libTest from "EcarkUtility";

// general
import {ServicesTestGeneral001HelloWorldComponent} from './components/ServiceTestGeneral/test001HelloWorld';
// string util
import {ServicesTestStringUtilityLeftTrimComponent} from './components/ServiceTestStringUtility/test001LeftTrim';
import {ServicesTestStringUtilityPadRightComponent} from './components/ServiceTestStringUtility/test002PadRight';
import {ServicesTestStringUtilityParseNumberComponent} from './components/ServiceTestStringUtility/test003ParseNumber';
import { ServicesTestStringUtilityRightTrimComponent} from './components/ServiceTestStringUtility/test004RightTrim';
import {ServicesTestStringUtilityParseFloatComponent} from './components/ServiceTestStringUtility/test005ParseFloat';
import {ServicesTestStringUtilityCountDecimalDigitsComponent} from './components/ServiceTestStringUtility/test006CountDecimalDigits';
import {ServicesTestStringUtilityRemoveAtPositionComponent} from './components/ServiceTestStringUtility/test008removeAtPosition';
// number format
import {ServicesTestNumFormatToTruncateComponent} from './components/ServiceNumberFormat/test001FormatNumberToTruncate';
import {ServicesTestNumFormatAsMoneyComponent} from './components/ServiceNumberFormat/test002FormatAsMoney';
// float utility
import {ServicesFloatUtilityAddComponent} from './components/ServiceFloat/test001Add';
import {ServicesFloatUtilitySubtractComponent} from './components/ServiceFloat/test002Subtract';
import {ServicesFloatUtilityIsEqualComponent} from './components/ServiceFloat/test003IsEqual';
import {ServicesFloatUtilityScaleFloatToIntComponent} from './components/ServiceFloat/test004ScaleFloatToInt';
import {ServicesFloatUtilityScaleIntToFloatComponent} from './components/ServiceFloat/test005ScaleIntToFloat';
import {ServicesTestStringUtilityInsertAtPositionComponent} from './components/ServiceTestStringUtility/test007InsertAtPosition';
import {ServicesFloatUtilityShiftDecimalComponent} from './components/ServiceFloat/test006ShiftDecimal';
import { ServicesTestStringUtilityIsNullOrEmptyComponent } from './components/ServiceTestStringUtility/test009StringIsNullOrEmpty';
import { ServicesTestGeneralSkipRouteReloadComponent } from './components/ServiceTestGeneral/test002SkipRouteReload';


const appName = "testAngularApp";

let app = angular.module(appName,[libTest.angularAppName, "ngRoute"]);

// general tests
app.component("serviceTestGeneral001",ServicesTestGeneral001HelloWorldComponent);
app.component("svcTestGenRouteSkip", ServicesTestGeneralSkipRouteReloadComponent);
// string util tests
app.component("serviceTestStringUtility001", ServicesTestStringUtilityLeftTrimComponent);
app.component("serviceTestStringUtilityPadRight", ServicesTestStringUtilityPadRightComponent);
app.component("serviceTestStringUtilityParseNumber", ServicesTestStringUtilityParseNumberComponent )
app.component("serviceTestStringUtilityRightTrim", ServicesTestStringUtilityRightTrimComponent );
app.component("serviceTestStringUtilityParseFloat", ServicesTestStringUtilityParseFloatComponent);
app.component("serviceTestStringUtilityCountDecimalDigits",ServicesTestStringUtilityCountDecimalDigitsComponent);
app.component("svcStrTestInsertAtPosition", ServicesTestStringUtilityInsertAtPositionComponent);
app.component("svcStrTestRemoveAtPos", ServicesTestStringUtilityRemoveAtPositionComponent);
app.component("svcStrTestIsNullOrEmpty", ServicesTestStringUtilityIsNullOrEmptyComponent);
// number format tests
app.component("serviceTestNumFormatToTruncate", ServicesTestNumFormatToTruncateComponent);
app.component("serviceTestNumFormatAsMoney", ServicesTestNumFormatAsMoneyComponent);
// float tests
app.component("serviceFloatUtilAdd", ServicesFloatUtilityAddComponent);
app.component("serviceFloatUtilSubtract", ServicesFloatUtilitySubtractComponent);
app.component("serviceFloatUtilIsEqual",ServicesFloatUtilityIsEqualComponent );
app.component("svcFloatScaleToInt", ServicesFloatUtilityScaleFloatToIntComponent);
app.component("svcFloatScaleIntToFloat", ServicesFloatUtilityScaleIntToFloatComponent);
app.component("svcFloatShiftDecimal", ServicesFloatUtilityShiftDecimalComponent);


// routing
app.config(["$routeProvider","$locationProvider",($routeProvider: ng.route.IRouteProvider,
                                                $locationProvider: ng.ILocationProvider)=>{
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/svcTestGenRouteSkip', {
        template: "<svc-test-gen-route-skip></svc-test-gen-route-skip>"
    })
    .when('/svcStrTestIsNullOrEmpty',{
        template: "<svc-str-test-is-null-or-empty></svc-str-test-is-null-or-empty>"
    })
    .when('/svcStrTestRemoveAtPos',{
        template: "<svc-str-test-remove-at-pos></svc-str-test-remove-at-pos>"
    })
    .when('/svcFloatShiftDecimal',{
        template: "<svc-float-shift-decimal></svc-float-shift-decimal>"
    })
    .when('/svcStrTestInsertAtPosition',{
        template: "<svc-str-test-insert-at-position></svc-str-test-insert-at-position>"
    })
    .when('/svcFloatScaleIntToFloat',{
        template: "<svc-float-scale-int-to-float></svc-float-scale-int-to-float>"
    })
    .when('/svcFloatScaleToInt',{
        template: "<svc-float-scale-to-int></svc-float-scale-to-int>"
    })
    .when('/serviceFloatUtilIsEqual',{
        template: "<service-float-util-is-equal></service-float-util-is-equal>"
    })
    .when('/serviceFloatUtilSubtract',{
        template: "<service-float-util-subtract></service-float-util-subtract>"
    })
    .when('/serviceFloatUtilAdd',{
        template: "<service-float-util-add></service-float-util-add>"
    })
    .when('/serviceTestStringUtilityCountDecimalDigits',{
        template: "<service-test-string-utility-count-decimal-digits></service-test-string-utility-count-decimal-digits>"
    })
    .when('/serviceTestNumFormatAsMoney', {
        template: "<service-test-num-format-as-money></service-test-num-format-as-money>"
    })
    .when('/serviceTestNumFormatToTruncate',{
        template: "<service-test-num-format-to-truncate></service-test-num-format-to-truncate>"
    })
    .when('/serviceTestStringUtilityParseFloat',{
        template: "<service-test-string-utility-parse-float></service-test-string-utility-parse-float>"
    })
    .when('/serviceTestStringUtilityRightTrim',{
        template: "<service-test-string-utility-right-trim></service-test-string-utility-right-trim>"
    })
    .when('/serviceTestStringUtilityParseNumber',{
        template: "<service-test-string-utility-parse-number></service-test-string-utility-parse-number>"
    })
    .when('/serviceTestStringUtilityPadRight',{
        template:"<service-test-string-utility-pad-right></service-test-string-utility-pad-right>"
    })
    .when('/serviceTestGeneral001',{
        template: "<service-test-general-001></service-test-general-001>"
    }).when('/serviceTestStringUtility001',{
        template: "<service-test-string-utility-001></service-test-string-utility-001>"
    });
}]);

// load up angular with all the configuration we've made

angular.element(document).ready(()=>{
    angular.bootstrap(document, [appName]);
});