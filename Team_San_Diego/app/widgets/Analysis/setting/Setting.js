// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Analysis/toolSettings":function(){define(["dojo/_base/lang","dojo/_base/array"],function(l,e){var c={},a=0,f=[{id:a++,dijitID:"esri/dijit/analysis/AggregatePoints",name:"AggregatePoints",title:"aggregateTool",imgDisplay:"images/aggregate-points.png",usage:"aggregatePointsUsage",analysisLayer:{name:"pointLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint"]},requiredParam:{name:"polygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]},icon:"images/AggregatePoints32.png"},
{id:a++,dijitID:"esri/dijit/analysis/CalculateDensity",name:"CalculateDensity",title:"calculateDensity",imgDisplay:"images/calculate-density.png",usage:"calculateDensityUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline"]},optionalParams:[{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]}],icon:"images/CreateDensitySurface32.png"},{id:a++,dijitID:"esri/dijit/analysis/ChooseBestFacilities",name:"ChooseBestFacilities",
title:"chooseBestFacilities",imgDisplay:"images/choose-best-facilities.png",analysisLayer:{name:"demandLocationLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint"]},optionalParams:[{name:"demandLocationLayers",isArray:!0,geomTypes:["esriGeometryPoint","esriGeometryMultipoint"]},{name:"featureLayers",isArray:!0,geomTypes:["*"]}],icon:"images/ChooseBestFacilities32.png",privileges:["loc"]},{id:a++,dijitID:"esri/dijit/analysis/ConnectOriginsToDestinations",name:"ConnectOriginsToDestinations",
title:"connectOriginsToDestinations",imgDisplay:"images/connect-origins-to-destinations.png",usage:"connectOriginsToDestinationsUsage",analysisLayer:{name:"originsLayer",geomTypes:["esriGeometryPoint"]},requiredParam:{name:"featureLayers",isArray:!0,geomTypes:["esriGeometryPoint"]},icon:"images/ConnectOriginstoDestinations32.png",privileges:["od"]},{id:a++,dijitID:"esri/dijit/analysis/CreateBuffers",name:"CreateBuffers",title:"createBuffers",imgDisplay:"images/create-buffers.png",usage:"createBuffersUsage",
analysisLayer:{name:"inputLayer",geomTypes:["*"]},icon:"images/CreateBuffers32.png"},{id:a++,dijitID:"esri/dijit/analysis/CreateDriveTimeAreas",name:"CreateDriveTimeAreas",title:"createDriveTimeAreas",imgDisplay:"images/create-drivetime.png",usage:"createDriveTimeAreasUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},icon:"images/CreateDriveTimeAreas32.png",cannotCancel:!0,privileges:["drivetimearea"]},{id:a++,dijitID:"esri/dijit/analysis/CreateViewshed",name:"CreateViewshed",
title:"createViewshed",imgDisplay:"images/create-viewshed.png",usage:"createViewshedUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},icon:"images/Viewshed32.png",privileges:["elevation"]},{id:a++,dijitID:"esri/dijit/analysis/CreateWatersheds",name:"CreateWatersheds",title:"createWatershed",imgDisplay:"images/create-watersheds.png",usage:"createWatershedsUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},icon:"images/Watershed32.png",privileges:["hydro"]},
{id:a++,dijitID:"esri/dijit/analysis/DeriveNewLocations",name:"DeriveNewLocations",title:"deriveNewLocations",imgDisplay:"images/derive-new-locations.png",usage:"deriveNewLocationsUsage",analysisLayer:{name:"analysisLayer",geomTypes:["*"]},optionalParams:[{name:"inputLayers",isArray:!0,geomTypes:["*"]}],icon:"images/FindNewLocations32.png"},{id:a++,dijitID:"esri/dijit/analysis/DissolveBoundaries",name:"DissolveBoundaries",title:"dissolveBoundaries",imgDisplay:"images/dissolve-boundaries.png",usage:"dissolveBoundariesUsage",
analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPolygon"]},icon:"images/DissolveBoundaries32.png"},{id:a++,dijitID:"esri/dijit/analysis/EnrichLayer",name:"EnrichLayer",title:"enrichLayer",imgDisplay:"images/enrich-layer.png",usage:"enrichLayerUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},icon:"images/GeoenrichFeatures32.png",privileges:["geoenrichment"]},{id:a++,dijitID:"esri/dijit/analysis/ExtractData",name:"ExtractData",title:"extractData",imgDisplay:"images/extract-data.png",
usage:"extractDataDesc",optionalParams:[{name:"featureLayers",isArray:!0,geomTypes:["*"]}],icon:"images/ClipAndShip32.png"},{id:a++,dijitID:"esri/dijit/analysis/FindExistingLocations",name:"FindExistingLocations",title:"findExistingLocations",imgDisplay:"images/find-existing-locations.png",usage:"findExistingLocationsUsage",analysisLayer:{name:"analysisLayer",geomTypes:["*"]},optionalParams:[{name:"inputLayers",isArray:!0,geomTypes:["*"]}],icon:"images/FindExistingLocations32.png"},{id:a++,dijitID:"esri/dijit/analysis/FindHotSpots",
name:"FindHotSpots",title:"findHotSpots",imgDisplay:"images/find-hot-spots.png",usage:"findHotSpotsUsage",analysisLayer:{name:"analysisLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolygon"]},optionalParams:[{name:"aggregationPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]},{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]}],icon:"images/FindHotSpots32.png"},{id:a++,dijitID:"esri/dijit/analysis/FindNearest",name:"FindNearest",title:"findNearest",
imgDisplay:"images/find-nearest.png",usage:"findNearestUsage",analysisLayer:{name:"analysisLayer",geomTypes:["*"]},requiredParam:{name:"nearLayers",isArray:!0,geomTypes:["*"]},icon:"images/FindNearest32.png",cannotCancel:!0},{id:a++,dijitID:"esri/dijit/analysis/FindOutliers",name:"FindOutliers",title:"findOutliers",imgDisplay:"images/find-outliers.png",usage:"findOutliersUsage",analysisLayer:{name:"analysisLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolygon"]},optionalParams:[{name:"aggregationPolygonLayers",
isArray:!0,geomTypes:["esriGeometryPolygon"]},{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]}],icon:"images/FindOutliers32.png"},{id:a++,dijitID:"esri/dijit/analysis/FindSimilarLocations",name:"FindSimilarLocations",title:"findSimilarLocations",imgDisplay:"images/find-similar-locations.png",usage:"findSimilarLocationsUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},optionalParams:[{name:"searchLayers",isArray:!0,geomTypes:["*"]}],icon:"images/FindSimilarLocations32.png"},
{id:a++,dijitID:"esri/dijit/analysis/InterpolatePoints",name:"InterpolatePoints",title:"interpolatePoints",imgDisplay:"images/interpolate-points.png",usage:"interpolatePointsUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint"]},optionalParams:[{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]},{name:"predictAtPointLayers",isArray:!0,geomTypes:["esriGeometryPoint"]}],icon:"images/CreateInterpolatedSurface32.png"},{id:a++,dijitID:"esri/dijit/analysis/JoinFeatures",
name:"JoinFeatures",title:"joinFeatures",imgDisplay:"images/join-features.png",usage:"joinFeaturesUsage",analysisLayer:{name:"targetLayer",geomTypes:["*"]},optionalParams:[{name:"targetLayers",isArray:!0,geomTypes:["*"]},{name:"joinLayers",isArray:!0,geomTypes:["*"]}],icon:"images/JoinFeatures32.png"},{id:a++,dijitID:"esri/dijit/analysis/MergeLayers",name:"MergeLayers",title:"mergeLayers",imgDisplay:"images/merge-layers.png",usage:"mergeLayersUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},
requiredParam:{name:"mergeLayers",isArray:!0,geomTypes:["*"]},icon:"images/MergeLayers32.png"},{id:a++,dijitID:"esri/dijit/analysis/OverlayLayers",name:"OverlayLayers",title:"overlayLayers",imgDisplay:"images/overlay-layers.png",usage:"overlayLayersUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},requiredParam:{name:"overlayLayer",isArray:!0,geomTypes:["*"]},icon:"images/OverlayLayers32.png"},{id:a++,dijitID:"esri/dijit/analysis/PlanRoutes",name:"PlanRoutes",title:"planRoutes",imgDisplay:"images/plan-routes.png",
usage:"planRoutesUsage",analysisLayer:{name:"stopsLayer",geomTypes:["esriGeometryPoint"]},optionalParams:[{name:"featureLayers",isArray:!0,geomTypes:["esriGeometryPoint"]}],icon:"images/PlanRoutes32.png",cannotCancel:!0,privileges:["planroutes"]},{id:a++,dijitID:"esri/dijit/analysis/SummarizeNearby",name:"SummarizeNearby",title:"summarizeNearby",imgDisplay:"images/summarize-nearby.png",usage:"summarizeNearbyUsage",analysisLayer:{name:"sumNearbyLayer",geomTypes:["*"]},requiredParam:{name:"summaryLayers",
isArray:!0,geomTypes:["*"]},icon:"images/SummarizeNearby32.png"},{id:a++,dijitID:"esri/dijit/analysis/SummarizeWithin",name:"SummarizeWithin",title:"summarizeWithin",imgDisplay:"images/summarize-within.png",usage:"summarizeWithinUsage",analysisLayer:{name:"sumWithinLayer",geomTypes:["esriGeometryPolygon"]},requiredParam:{name:"summaryLayers",isArray:!0,geomTypes:["*"]},icon:"images/SummarizeWithin32.png"},{id:a++,dijitID:"esri/dijit/analysis/TraceDownstream",name:"TraceDownstream",title:"traceDownstream",
imgDisplay:"images/trace-downstream.png",usage:"traceDownstreamUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},optionalParams:[{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]}],icon:"images/TraceDownstream32.png",privileges:["hydro"]}];c.findToolSetting=function(a){var c=null;e.some(f,function(f){if(f.name===a)return c=f,!0});return c};c.getAllSettings=function(){return l.clone(f)};return c})},"widgets/Analysis/setting/SingleToolSetting":function(){define("dojo/_base/declare dojo/text!./SingleToolSetting.html dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/portalUrlUtils jimu/dijit/CheckBox dijit/form/ValidationTextBox".split(" "),
function(l,e,c,a,f,n,k,g){return l([a,f,n],{baseClass:"jimu-widget-analysis-singleToolSetting",templateString:e,toolLabel:null,nls:null,config:null,rowData:null,postCreate:function(){this.inherited(arguments);this.labelEditor.set("value",this.toolLabel);"extractData"===this.rowData.title&&c.set(this.resultOption,"display","none");"planRoutes"!==this.rowData.title&&"findNearest"!==this.rowData.title&&"connectOriginsToDestinations"!==this.rowData.title&&c.set(this.showOutputTypeOption,"display","none");
this.helptipChk=new g({checked:!0,label:this.nls.showHelpTip});this.helptipChk.placeAt(this.helpTipOption);this.mapExtentChk=new g({checked:!0,label:this.nls.showCurrentMapExtent});this.mapExtentChk.placeAt(this.mapExtentOption);this.creditsChk=new g({checked:!0,label:this.nls.showCredits});this.creditsChk.placeAt(this.creditsOption);this.resultChk=new g({checked:!0,label:this.nls.saveAsFeatureService});this.resultChk.placeAt(this.resultOption);this.readyToUseLayersChk=new g({checked:!0,label:this.nls.showReadyToUseLayers});
this.readyToUseLayersChk.placeAt(this.readyToUseLayersOption);this.allowToExportChk=new g({checked:!1,label:this.nls.allowToExport});this.allowToExportChk.placeAt(this.allowToExportOption);this.showOutputTypeChk=new g({checked:!1,label:this.nls.includeRouteLayer});this.showOutputTypeChk.placeAt(this.showOutputTypeOption);var a=k.getStandardPortalUrl(this.appConfig.portalUrl);k.isOnline(a)||(c.set(this.readyToUseLayersOption,"display","none"),this.readyToUseLayersChk.setValue(!1),c.set(this.creditsOption,
"display","none"),this.creditsChk.setValue(!1))},getConfig:function(){var a={showHelp:this.helptipChk.getValue(),showCredits:this.creditsChk.getValue(),showChooseExtent:this.mapExtentChk.getValue(),showReadyToUseLayers:this.readyToUseLayersChk.getValue(),allowToExport:this.allowToExportChk.getValue()};"extractData"!==this.rowData.title&&(a.returnFeatureCollection=!this.resultChk.getValue());if("planRoutes"===this.rowData.title||"findNearest"===this.rowData.title||"connectOriginsToDestinations"===
this.rowData.title)a.showOutputType=this.showOutputTypeChk.getValue();this.labelEditor.validate()?a.toolLabel=this.labelEditor.get("value"):a.toolLabel=this.toolLabel||"undefined";return a},setConfig:function(a){this.config=a;this.labelEditor.set("value",a.toolLabel);this.helptipChk.setValue(!!a.showHelp);this.creditsChk.setValue(!!a.showCredits);this.mapExtentChk.setValue(!!a.showChooseExtent);this.readyToUseLayersChk.setValue(!!a.showReadyToUseLayers);this.allowToExportChk.setValue(!!a.allowToExport);
"returnFeatureCollection"in a&&this.resultChk.setValue(!a.returnFeatureCollection);"showOutputType"in a&&this.showOutputTypeChk.setValue(!!a.showOutputType)}})})},"widgets/Analysis/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Analysis/setting/SingleToolSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"control-section jimu-leading-margin3"\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal"\x3e${nls.toolLabel}\x26nbsp;:\x3c/label\x3e\r\n    \x3cinput data-dojo-attach-point\x3d"labelEditor" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n           data-dojo-props\x3d\'required:true,trim:true\'/\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"control-section jimu-leading-margin3"\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"helpTipOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"mapExtentOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"creditsOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"resultOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"readyToUseLayersOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"allowToExportOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"showOutputTypeOption"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Analysis/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv\x3e\r\n      \x3cspan class\x3d"label"\x3e${nls.selectAnalysisTools}\x3c/span\x3e\r\n      \x3cspan class\x3d"info jimu-float-trailing" data-dojo-attach-point\x3d"infoText"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"analysis-list-content"\x3e\r\n    \x3ctable class\x3d\'analysis-table\' data-dojo-attach-point\x3d"table"\x3e\r\n      \x3cthead class\x3d"analysis-table-thead"\x3e\r\n        \x3ctr\x3e\r\n          \x3cth class\x3d"checkbox-td"\x3e\r\n            \x3cinput id\x3d"analysis_setting_checkall" data-dojo-attach-point\x3d"checkAllBtn"\r\n                data-dojo-type\x3d"dijit/form/CheckBox"\r\n                data-dojo-props\x3d"checked:false"\r\n                data-dojo-attach-event\x3d"onClick: _checkAll"\x3e\r\n          \x3c/th\x3e\r\n          \x3cth class\x3d"name-td"\x3e\r\n            \x3clabel for\x3d"analysis_setting_checkall" class\x3d"name-for-checkbox"\x3e${nls.name}\x3c/label\x3e\r\n          \x3c/th\x3e\r\n          \x3cth class\x3d"setting-details"\x3e${nls.settings}\x3c/th\x3e\r\n          \x3cth class\x3d"usage-td"\x3e${nls.usage}\x3c/th\x3e\r\n          \x3cth\x3e\x3c/th\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/thead\x3e\r\n    \x3c/table\x3e\r\n    \x3ctable class\x3d\'tools-table\'\x3e\r\n      \x3ctbody data-dojo-attach-point\x3d"tbody" class\x3d"tools-table-tbody"\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Analysis/setting/css/style.css":'.jimu-widget-analysis-setting{margin:0; padding:0; font-size:14px; position: relative; width: 100%; height: 100%; overflow: hidden;}.jimu-widget-analysis-setting .label{font-size: 14px;}.jimu-widget-analysis-setting .info{font-size: 14px;}.jimu-widget-analysis-setting .analysis-list-content{margin-top: 15px; margin-bottom: 15px; width: 100%; height:90%;}.jimu-widget-analysis-setting .analysis-table{width:100%; margin:0; padding:0; overflow-x:hidden; overflow-y:auto; height: auto; position: relative; border-collapse:collapse; table-layout:fixed; border: 1px solid #CCCCCC;}.jimu-widget-analysis-setting .analysis-table .analysis-table-thead{width:100%; height:36px; background-color: #EEEEEE; overflow:hidden; border-top-left-radius:5px; border-top-right-radius:5px;}.jimu-widget-analysis-setting .analysis-table \x3e thead \x3e tr \x3e th{height:40px; line-height:40px; vertical-align:middle; color:#000000; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}.jimu-widget-analysis-setting .tools-table{width:100%; margin:0; padding:0; overflow-x:hidden; overflow-y:auto; height: 95%; position: relative; border-collapse:collapse; table-layout:fixed; border-left: 1px solid #CCCCCC; border-right: 1px solid #CCCCCC; border-bottom: 1px solid #CCCCCC;}.jimu-widget-analysis-setting .tools-table .tools-table-tbody{position: absolute; width:100%; height:100%; overflow-x: hidden; overflow-y: auto;}.jimu-widget-analysis-setting .checkbox-td{margin-left: 10px; padding-left: 10px; width: 30px;}.jimu-rtl .jimu-widget-analysis-setting .checkbox-td{margin-left: auto; margin-right: 10px; padding-left: auto; padding-right: 10px;}.jimu-widget-analysis-setting .name-td{margin-left: 20px; width: 230px;}.jimu-rtl .jimu-widget-analysis-setting .name-td{margin-left: auto; margin-right: 20px;}.jimu-widget-analysis-setting .setting-td{width: 110px;}.jimu-widget-analysis-setting .name-for-checkbox{cursor: pointer;}.jimu-widget-analysis-setting .img-td{margin-left: 20px; width: 280px;}.jimu-rtl .jimu-widget-analysis-setting .img-td{margin-left: auto; margin-right: 20px;}.jimu-widget-analysis-setting .usage-td{margin-left: 20px; width: auto;}.jimu-rtl .jimu-widget-analysis-setting .usage-td{margin-left: auto; margin-right: 20px;}.jimu-widget-analysis-setting .tools-table \x3e tbody \x3e tr{cursor: pointer; height: 88px; border-bottom: 1px solid #CCCCCC;}.jimu-widget-analysis-setting .tools-table \x3e tbody \x3e tr \x3e td{color:#000000; font-size: 14px;}.jimu-widget-analysis-setting .tools-table \x3e tbody \x3e tr.setting{height: auto; border: none;}.jimu-widget-analysis-setting .tools-table \x3e tbody \x3e tr.selected{border-left: 0; border-right: 6px solid #15a4fa;}.jimu-widget-analysis-setting .tools-table \x3e tbody \x3e tr.disabled{background-color: #bbbbbb;}.jimu-widget-analysis-setting .tools-table \x3e tbody \x3e tr:not(.disabled):hover \x3e td{background:#EEEEEE;}.jimu-widget-analysis-setting .setting-icon{cursor: pointer;}.jimu-widget-analysis-singleToolSetting{position: relative; background: #ffffff; border-bottom: 1px solid #CCC; padding-top: 5px;}.jimu-widget-analysis-singleToolSetting:after, .jimu-widget-analysis-singleToolSetting:before {bottom: 100%; left: 29%; border: solid transparent; content: " "; height: 0; width: 0; position: absolute; pointer-events: none;}.jimu-widget-analysis-singleToolSetting .control-option{margin-bottom: 10px;}',
"*now":function(l){l(['dojo/i18n!*preload*widgets/Analysis/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/event dojo/query dojo/on dojo/fx dojo/dom dojo/dom-class dojo/dom-style dojo/dom-construct dojo/dom-prop dojo/i18n!esri/nls/jsapi dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/utils dijit/form/CheckBox ../toolSettings ./SingleToolSetting".split(" "),function(l,e,c,a,f,n,k,g,m,v,h,q,w,x,y,t,z,u,A){return l([y,x],{baseClass:"jimu-widget-analysis-setting",postMixInProperties:function(){this.inherited(arguments);c.mixin(this.nls,
w.analysisTools);c.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this.checkboxList=[];this._initToolsData();window.isRTL?(this.infoString=this.rowsData.length+"/0",this.infoRegex=/\d+$/):(this.infoString="0/"+this.rowsData.length,this.infoRegex=/^\d+/);e.forEach(this.rowsData,c.hitch(this,function(a){this._addRow(a)}));q.set(this.infoText,"innerHTML",this.infoString.replace(this.infoRegex,0));this.config&&this.setConfig(this.config);this.own(n(document.body,
"click",c.hitch(this,function(a){var b=a.target||a.srcElement,c;f("tr.setting",this.tbody).forEach(function(a){c=b===a||g.isDescendant(b,a);!c&&a.show&&(k.wipeOut({node:a.toolSetting.domNode}).play(),a.show=!1)},this)})))},_addRow:function(b){var r=b.name;"chooseBestFacilities"===b.title&&(this.nls[b.title]=this.nls.chooseBestFacilities,this.nls[b.usage]=this.nls.chooseBestFacilities);var d=h.create("tr",{"class":"tools-table-tr",title:this.nls[b.title]},this.tbody);d.rowData=b;var p=h.create("td",
{"class":"checkbox-td"},d),e=new z({checked:!1,title:this.nls[b.title],rid:b.id});e.placeAt(p);this.checkboxList.push(e);this.own(n(e,"onChange",c.hitch(this,function(a){a&&m.add(d,"selected")})));h.create("td",{innerHTML:t.stripHTML(this.nls[b.title]),"class":"name-td"},d);p=h.create("td",{"class":"setting-td"},d);p=h.create("img",{src:this.folderUrl+"images/setting.png",title:this.nls.toolSetting,"class":"setting-icon"},p);e=h.create("td",{"class":"img-td"},d);h.create("img",{src:this.folderUrl+
b.imgDisplay},e);h.create("td",{innerHTML:t.stripHTML(this.nls[b.usage]),"class":"usage-td"},d);var g=h.create("tr",{"class":"setting","data-toolname":r},this.tbody),r=h.create("td",{colspan:5},g);b=new A({toolLabel:this.nls[b.title],rowData:b,nls:this.nls,appConfig:this.appConfig});v.set(b.domNode,"display","none");b.placeAt(r);g.toolSetting=b;g.show=!1;this.own(n(p,"click",c.hitch(this,function(b){a.stop(b);this._toggleToolSetting(g);f("tr.setting",this.tbody).forEach(function(a){a.show&&a!==g&&
(k.wipeOut({node:a.toolSetting.domNode}).play(),a.show=!1)},this)})));this.own(n(d,"click",c.hitch(this,function(b){a.stop(b);this._toggleSelected(d);f("tr.setting",this.tbody).forEach(function(a){a.show&&a.toolSetting.rowData.id!==d.rowData.id&&(k.wipeOut({node:a.toolSetting.domNode}).play(),a.show=!1)},this)})))},_toggleToolSetting:function(a){a.show?(k.wipeOut({node:a.toolSetting.domNode}).play(),a.show=!1):(k.wipeIn({node:a.toolSetting.domNode}).play(),a.show=!0)},_checkAll:function(){!0===this.checkAllBtn.get("checked")?
(f("tr.tools-table-tr",this.tbody).forEach(function(a){m.add(a,"selected")}),e.forEach(this.checkboxList,function(a){a.set("checked",!0)}),this._updateInfoString()):(f("tr.tools-table-tr",this.tbody).forEach(c.hitch(this,function(a){m.remove(a,"selected")})),e.forEach(this.checkboxList,function(a){a.set("checked",!1)}),q.set(this.infoText,"innerHTML",this.infoString.replace(this.infoRegex,0)))},_toggleSelected:function(a){m.toggle(a,"selected");var b=this.checkboxList[a.rowData.id];b&&b.set("checked",
m.contains(a,"selected"));this._updateInfoString()},_updateInfoString:function(){var a=f("tr.selected",this.tbody).length;q.set(this.infoText,"innerHTML",this.infoString.replace(this.infoRegex,a));a===this.rowsData.length?this.checkAllBtn.set("checked",!0):this.checkAllBtn.set("checked",!1)},_setSelected:function(a,e){var b=u.findToolSetting(a.name);null!==b&&f("tr.tools-table-tr",this.tbody).some(c.hitch(this,function(c){if(c.rowData.dijitID===b.dijitID){var d=this.checkboxList[b.id];d&&d.set("checked",
e);!0===e?m.add(c,"selected"):m.remove(c,"selected");(c=f("tr.setting[data-toolname\x3d"+a.name+"]",this.tbody)[0])&&(c=c.toolSetting)&&c.setConfig(a);return!0}}))},setConfig:function(a){this.config=a;e.forEach(this.config.analysisTools,c.hitch(this,function(a){this._setSelected(a,!0)}));this._updateInfoString()},getConfig:function(){var a={analysisTools:[]};e.forEach(this.checkboxList,c.hitch(this,function(b){if(!0===b.get("checked")){var d=this.rowsData[b.get("rid")].name;null!==d?(b={name:d},(d=
f("tr.setting[data-toolname\x3d"+d+"]",this.tbody)[0].toolSetting)&&c.mixin(b,d.getConfig()),a.analysisTools.push(b)):console.warn("error find rowsData: "+b.get("title"))}}));return a},_initToolsData:function(){this.rowsData=u.getAllSettings()}})});