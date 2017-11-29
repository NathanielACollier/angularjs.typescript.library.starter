
import {General } from 'TestStarterLib';
'use strict';


class MyComponentController implements ng.IComponentController {

    static $inject = [General.angularName];
    constructor(private gen: General) {}

    $onInit = () => {
        
    };

    $onChanges = (changeObj: ng.IOnChangesObject) => {

    };

}

export let ServicesTestGeneral001HelloWorldComponent: ng.IComponentOptions = {
    template: `
        <div>Hello World</div>
    `
    ,controllerAs: 'vm'
    ,controller: MyComponentController
    ,bindings:{

    }
};