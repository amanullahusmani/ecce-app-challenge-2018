// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"\u9002\u5b9c\u6027\u5efa\u6a21\u5668",general:{clear:"\u6e05\u9664",cancel:"\u53d6\u6d88",save:"\u8fd0\u884c",saveAs:"\u5bfc\u51fa"},saveModel:{save:"\u5bfc\u51fa",title:"\u6807\u9898\uff1a ",summary:"\u6458\u8981\uff1a ",description:"\u63cf\u8ff0\uff1a ",tags:"\u6807\u7b7e\uff1a ",folder:"\u6587\u4ef6\u5939\uff1a ",homeFolderPattern:"{username} (\u4e3b\u9875)",failed:"\u5bfc\u51fa\u5931\u8d25\u3002"},util:{colorRamp:{1:"\u8d85\u4f4e",
2:"\u6781\u4f4e",3:"\u4f4e",4:"\u4e2d\u4f4e",5:"\u4e2d\u7b49",6:"\u4e2d\u9ad8",7:"\u9ad8",8:"\u6781\u9ad8",9:"\u8d85\u9ad8",low:"\u4f4e",high:"\u9ad8",tipPattern:"{label} ({value})",flipCaption:"\u7ffb\u8f6c"}},wro:{caption:"\u9002\u5b9c\u6027\u5efa\u6a21\u5668",browsePrompt:"\u52a0\u6743\u53e0\u52a0\u670d\u52a1",selectLayersCaption:"\u9009\u62e9\u56fe\u5c42",selectLayers:"\u56fe\u5c42",designModelCaption:"\u8bbe\u8ba1\u6a21\u578b",designModel:"\u8bbe\u8ba1\u6a21\u578b",transparency:"\u900f\u660e\u5ea6",
visible:"\u53ef\u89c1",total:"\u603b\u8ba1",unableToLoad:"\u65e0\u6cd5\u52a0\u8f7d\u6a21\u578b\u3002",projectNotOpen:"\u5de5\u7a0b\u672a\u6253\u5f00\u3002",readMore:"\u4e86\u89e3\u66f4\u591a",validation:{validating:"\u6b63\u5728\u9a8c\u8bc1 ...",invalidItemCaption:"\u52a0\u6743\u53e0\u52a0\u670d\u52a1\u8b66\u544a",notAnImageService:"\u6b64\u9879\u76ee\u4e0d\u662f\u5f71\u50cf\u670d\u52a1\u3002",notAWroService:"\u6b64\u9879\u76ee\u4e0d\u662f\u52a0\u6743\u53e0\u52a0\u670d\u52a1\u3002",undefinedUrl:"\u6b64\u9879\u76ee\u7684 URL \u672a\u5b9a\u4e49\u3002",
inaccessible:"\u670d\u52a1\u65e0\u6cd5\u8bbf\u95ee\u3002",generalError:"\u65e0\u6cd5\u6253\u5f00\u9879\u76ee\u3002",missingFieldPattern:"{field} \u662f\u5fc5\u586b\u5b57\u6bb5",notAllowRasterFunction:"allowRasterFunction \u5fc5\u987b\u8bbe\u7f6e\u4e3a true",notNearestResampling:"defaultResamplingMethod \u5fc5\u987b\u4e3a Nearest",notIsWeightedOverlayProp:"\u5173\u952e\u5c5e\u6027 IsWeightedOverlay \u5fc5\u987b\u8bbe\u7f6e\u4e3a true",invalidLink:"URL \u65e0\u6548\u3002\u6253\u5f00\u6240\u9009\u56fe\u5c42\u7684\u7ad9\u70b9\u5931\u8d25\u3002",
unexpectedError:"\u53d1\u751f\u610f\u5916\u72b6\u6001\u3002",rangeMessage:"\u503c\u5fc5\u987b\u4f4d\u4e8e ${0} \u548c ${1} \u4e4b\u95f4",rangeMessage100:"\u503c\u5fc5\u987b\u4f4d\u4e8e 0 \u548c 100 \u4e4b\u95f4",maxLayers:"\u670d\u52a1\u6700\u591a\u5141\u8bb8 ${0} \u4e2a\u56fe\u5c42\uff0c\u6dfb\u52a0\u65b0\u56fe\u5c42\u524d\u5fc5\u987b\u79fb\u9664\u67d0\u4e00\u56fe\u5c42\u3002",notFound:"\u52a0\u6743\u53e0\u52a0\u670d\u52a1\u4e2d\u672a\u627e\u5230\u56fe\u5c42 ${0}",wroServiceNotDefined:"\u672a\u9488\u5bf9\u6a21\u578b\u5b9a\u4e49\u52a0\u6743\u53e0\u52a0\u670d\u52a1\u3002",
overlayLayerOutputInvalid:"\u53e0\u52a0\u56fe\u5c42 [${0}] \u91cd\u6620\u5c04\u8303\u56f4 [${1}] \u8f93\u51fa\u503c\u7f3a\u5931\u6216\u65e0\u6548",overlayLayerInputInvalid:"\u53e0\u52a0\u56fe\u5c42 [${0}] \u91cd\u6620\u5c04\u8303\u56f4 [${1}] \u8f93\u5165\u6700\u5c0f\u503c/\u6700\u5927\u503c\u7f3a\u5931\u6216\u65e0\u6548",overlayLayerRangesMissing:"\u53e0\u52a0\u56fe\u5c42 [${0}] \u7f3a\u5931\u91cd\u6620\u5c04\u8303\u56f4",overlayLayerWeight:"\u53e0\u52a0\u56fe\u5c42\u6743\u91cd\u7684\u603b\u548c\u5fc5\u987b\u4e3a 100",
overlayLayerRequired:"\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u53e0\u52a0\u56fe\u5c42",overlayLayerNotDefined:"\u53e0\u52a0\u56fe\u5c42\u672a\u5b9a\u4e49",requiresColormap:"\u6805\u683c\u51fd\u6570\u9700\u8981\u8272\u5f69\u6620\u5c04\u8868\uff0c\u4f46\u6a21\u578b\u672a\u5b9a\u4e49\u6709\u6548\u7684\u8272\u5f69\u6620\u5c04\u8868",createModelError:"\u521b\u5efa\u6a21\u578b\u65f6\u51fa\u9519",invalidModel:"\u6a21\u578b\u65e0\u6548",imageServiceNotDefined:"\u5f71\u50cf\u670d\u52a1\u56fe\u5c42\u672a\u5b9a\u4e49",
imageLayerNotDefined:"\u5f71\u50cf\u670d\u52a1\u56fe\u5c42\u672a\u5b9a\u4e49",histogramNotDefined:"\u672a\u5b9a\u4e49\u52a0\u6743\u53e0\u52a0\u76f4\u65b9\u56fe\u51fd\u6570\u3002"},colorRampLabel:{"Green Yellow Red":"\u7eff\u8272\u9ec4\u8272\u7ea2\u8272","Red Yellow Green":"\u7ea2\u8272\u9ec4\u8272\u7eff\u8272","Yellow to Dark Red":"\u9ec4\u8272\u5230\u6df1\u7ea2\u8272","Dark Red to Yellow":"\u6df1\u7ea2\u8272\u5230\u9ec4\u8272","Light Gray to Dark Gray":"\u6d45\u7070\u8272\u5230\u6df1\u7070\u8272",
"Dark Gray to Light Gray":"\u6df1\u7070\u8272\u5230\u6d45\u7070\u8272","Light Brown to Dark Brown":"\u6d45\u68d5\u8272\u5230\u6df1\u68d5\u8272","Dark Brown to Light Brown":"\u6df1\u68d5\u8272\u5230\u6d45\u68d5\u8272","Full Spectrum - Bright Red to Blue":"\u5168\u5149\u8c31 - \u4eae\u7ea2\u8272\u5230\u84dd\u8272","Full Spectrum - Bright Blue to Red":"\u5168\u5149\u8c31 - \u4eae\u84dd\u8272\u5230\u7ea2\u8272","Partial Spectrum - Yellow to Blue":"\u90e8\u5206\u5149\u8c31 - \u9ec4\u8272\u5230\u84dd\u8272",
"Partial Spectrum - Blue to Yellow":"\u90e8\u5206\u5149\u8c31 - \u84dd\u8272\u5230\u9ec4\u8272","Yellow-Green to Dark Blue":"\u9ec4\u7eff\u8272\u5230\u6df1\u84dd\u8272","Dark Blue to Yellow-Green":"\u6df1\u84dd\u8272\u5230\u9ec4\u7eff\u8272","Cold to Hot Diverging":"\u51b7\u8272\u81f3\u6696\u8272\u6269\u6563","Hot to Cold Diverging":"\u6696\u8272\u5230\u51b7\u8272\u6269\u6563","Surface - Low to High":"\u8868\u9762 - \u4f4e\u5230\u9ad8","Surface - High to Low":"\u8868\u9762 - \u9ad8\u5230\u4f4e"}},
_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"\u5141\u8bb8\u5bfc\u51fa",startingState:"\u542f\u52a8\u72b6\u6001\uff1a",byUrl:"\u7a7a\u767d\u6a21\u578b",byItem:"\u9884\u914d\u7f6e\u6a21\u578b",imageServiceUrl:"\u5f71\u50cf\u670d\u52a1 URL",validate:"\u9a8c\u8bc1",validating:"\u6b63\u5728\u9a8c\u8bc1 ...",validated:"\u6b64 URL \u6709\u6548\u3002",modelName:"\u6a21\u578b",selectModel:"\u9009\u62e9",itemSelectorTitle:"\u9009\u62e9\u6a21\u578b",ok:"\u786e\u5b9a",cancel:"\u53d6\u6d88",
description1:"\u9002\u5b9c\u6027\u5efa\u6a21\u5668\u53ef\u5e2e\u52a9\u60a8\u627e\u5230\u6d3b\u52a8\u7684\u6700\u4f73\u4f4d\u7f6e\u3001\u9884\u6d4b\u98ce\u9669\u7b49\u7ea7\uff0c\u6216\u786e\u5b9a\u4e8b\u4ef6\u53ef\u80fd\u53d1\u751f\u7684\u4f4d\u7f6e\u3002\u5229\u7528\u8be5\u5fae\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5408\u5e76\u4e0d\u540c\u7684\u56fe\u5c42\u5e76\u8bbe\u7f6e\u5176\u6743\u91cd\uff0c\u4ee5\u4fbf\u4e00\u6b21\u8bc4\u4f30\u591a\u4e2a\u56e0\u7d20\u3002",description2:"\u9002\u5b9c\u6027\u5efa\u6a21\u5668\u4f7f\u7528\u57fa\u4e8e Web \u7684\u5feb\u901f\u52a0\u6743\u6805\u683c\u53e0\u52a0\u4ece\u670d\u52a1\u4e2d\u751f\u6210\u6a21\u578b\u3002\u60a8\u53ef\u4ee5\u4ece\u52a0\u6743\u6805\u683c\u53e0\u52a0(WRO)\u670d\u52a1\u7684\u7a7a\u767d\u72b6\u6001\u5f00\u59cb\uff0c\u4e5f\u53ef\u4ee5\u4ece\u9884\u914d\u7f6e\u7684 WRO \u6a21\u578b\u5f00\u59cb\u3002\u9009\u62e9\u56fe\u5c42\u3001\u6307\u5b9a\u6743\u91cd\u5e76\u8c03\u6574\u56fe\u5c42\u5206\u7c7b\u503c\u4ee5\u5b9a\u4e49\u5206\u6790\u3002\u7136\u540e\u8fd0\u884c\u5efa\u6a21\u5668\uff0c\u5bf9\u7ed3\u679c\u8fdb\u884c\u53ef\u89c6\u5316\uff0c\u5e76\u53ef\u9009\u62e9\u5c06\u7ed3\u679c\u53e6\u5b58\u4e3a\u7ec4\u7ec7/\u95e8\u6237\u4e2d\u7684\u9879\u76ee\u3002",
description3:"\u4e86\u89e3\u6709\u5173 GeoPlanner \u9002\u5b9c\u6027\u5efa\u6a21\u5668\u7684\u8be6\u7ec6\u4fe1\u606f\u3002",_localized:{}}});