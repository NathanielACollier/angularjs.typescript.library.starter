import * as angular from "angular";
import {General} from './services';

export const angularAppName = "ecarkutility";
const app = angular.module(angularAppName, []);

// hook in services to angular

app.service(General.angularName, General);

// get dts-bundle stuff working right
export * from './services';