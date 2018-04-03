// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/AddData/nls/strings":{_widgetLabel:"\u0921\u0947\u091f\u093e \u091c\u094b\u095c\u0947\u0902",noOptionsConfigured:"\u0915\u094b\u0908 \u092d\u0940 \u0935\u093f\u0915\u0932\u094d\u092a \u0915\u0949\u0928\u094d\u095e\u093f\u0917\u0930 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0925\u093e\u0964",tabs:{search:"\u0916\u094b\u091c\u0947\u0902",url:"URL",file:"\u092b\u093c\u093e\u0907\u0932"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"\u0932\u0947\u092f\u0930 \u0926\u0941\u0930\u094d\u0917\u092e \u0939\u0948\u0964",
loadError:"\u0921\u0947\u091f\u093e \u091c\u094b\u095c\u0947\u0902, \u0932\u094b\u0921 \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0905\u0938\u092e\u0930\u094d\u0925:",searchBox:{search:"\u0916\u094b\u091c\u0947\u0902",placeholder:"\u0916\u094b\u091c\u0947\u0902...."},bboxOption:{bbox:"\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0915\u0947 \u092d\u0940\u0924\u0930"},scopeOptions:{anonymousContent:"\u0938\u093e\u092e\u0917\u094d\u0930\u0940",myContent:"\u092e\u0947\u0930\u0940 \u0938\u093e\u092e\u0917\u094d\u0930\u0940",
myOrganization:"\u092e\u0947\u0930\u093e \u0938\u0902\u0917\u0920\u0928",curated:"\u0915\u094d\u092f\u0942\u0930\u0947\u091f\u093f\u0921",ArcGISOnline:"ArcGIS \u0911\u0928\u0932\u093e\u0907\u0928"},sortOptions:{prompt:"\u0907\u0938 \u0906\u0927\u093e\u0930 \u092a\u0930 \u0938\u0949\u0930\u094d\u091f \u0915\u0930\u0947\u0902:",relevance:"\u092a\u094d\u0930\u093e\u0938\u0902\u0917\u093f\u0915\u0924\u093e",title:"\u0936\u0940\u0930\u094d\u0937\u0915",owner:"\u0938\u094d\u0935\u093e\u092e\u0940",rating:"\u0930\u0947\u091f\u093f\u0902\u0917",
views:"\u0926\u0943\u0936\u094d\u092f",date:"\u0924\u093f\u0925\u093f",switchOrder:"\u0938\u094d\u0935\u093f\u091a"},typeOptions:{prompt:"\u092a\u094d\u0930\u0915\u093e\u0930",mapService:"\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0938\u0930\u094d\u0935\u093f\u0938",featureService:"\u092b\u093c\u0940\u091a\u0930 \u0938\u0930\u094d\u0935\u093f\u0938",imageService:"\u0907\u092e\u0947\u091c \u0938\u0930\u094d\u0935\u093f\u0938",vectorTileService:"\u0935\u0947\u0915\u094d\u091f\u0930 \u091f\u093e\u0907\u0932 \u0938\u0930\u094d\u0935\u093f\u0938",
kml:"KML",wms:"WMS"},resultsPane:{noMatch:"\u0915\u094b\u0908 \u092a\u0930\u093f\u0923\u093e\u092e \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u0947\u0964"},paging:{first:"\x3c\x3c",firstTip:"\u092a\u0939\u0932\u093e",previous:"\x3c",previousTip:"\u092a\u093f\u091b\u0932\u093e",next:"\x3e",nextTip:"\u0905\u0917\u0932\u093e",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"\u0906\u0907\u091f\u092e",itemPlural:"\u0906\u0907\u091f\u092e\u094d\u0938"},item:{actions:{add:"\u091c\u094b\u0921\u093c\u0947\u0902",
close:"\u092c\u0902\u0926 \u0915\u0930\u0947\u0902",remove:"\u0939\u091f\u093e\u090f\u0901",details:"\u0935\u093f\u0935\u0930\u0923",done:"\u0938\u0902\u092a\u0928\u094d\u0928",editName:"\u0928\u093e\u092e \u0938\u0902\u0936\u094b\u0927\u093f\u0924 \u0915\u0930\u0947\u0902"},messages:{adding:"\u091c\u094b\u095c\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",removing:"\u0939\u091f\u093e\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",added:"\u091c\u094b\u095c \u0926\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948",
addFailed:"\u091c\u094b\u095c\u0928\u093e \u0935\u093f\u092b\u0932 \u0930\u0939\u093e",unsupported:"\u0905\u0938\u092e\u0930\u094d\u0925\u093f\u0924"},typeByOwnerPattern:"{owner} \u0915\u0947 \u0906\u0927\u093e\u0930 \u092a\u0930 {type}",dateFormat:"MMMM d, yyyy",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'ratings", "comments": "comments", "views": "views'},types:{"Map Service":"\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0938\u0930\u094d\u0935\u093f\u0938",
"Feature Service":"\u092b\u093c\u0940\u091a\u0930 \u0938\u0930\u094d\u0935\u093f\u0938","Image Service":"\u0907\u092e\u0947\u091c \u0938\u0930\u094d\u0935\u093f\u0938","Vector Tile Service":"\u0935\u0947\u0915\u094d\u091f\u0930 \u091f\u093e\u0907\u0932 \u0938\u0930\u094d\u0935\u093f\u0938",WMS:"WMS",KML:"KML"}}},addFromUrl:{type:"\u092a\u094d\u0930\u0915\u093e\u0930",url:"URL",types:{ArcGIS:"ArcGIS \u0938\u0930\u094d\u0935\u0930 \u0935\u0947\u092c \u0938\u0930\u094d\u0935\u093f\u0938",WMS:"WMS OGC \u0935\u0947\u092c \u0938\u0930\u094d\u0935\u093f\u0938",
WMTS:"WMTS OGC \u0935\u0947\u092c \u0938\u0930\u094d\u0935\u093f\u0938",WFS:"WFS OGC \u0935\u0947\u092c \u0938\u0930\u094d\u0935\u093f\u0938",KML:"KML \u092b\u093c\u093e\u0907\u0932",GeoRSS:"GeoRSS \u092b\u093c\u093e\u0907\u0932",CSV:"CSV \u092b\u093c\u093e\u0907\u0932"},samplesHint:"\u0928\u092e\u0942\u0928\u093e  URL"},addFromFile:{intro:"\u0906\u092a \u092b\u093e\u0907\u0932 \u0915\u0947 \u0928\u093f\u092e\u094d\u0928 \u092a\u094d\u0930\u0915\u093e\u0930\u094b\u0902 \u092e\u0947\u0902 \u0938\u0947 \u090f\u0915 \u092c\u094d\u0930\u093e\u0909\u091c \u092f\u093e \u0921\u094d\u0930\u093e\u092a \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902:",
types:{Shapefile:"\u090f\u0915 \u0936\u0947\u092a\u092b\u093e\u0907\u0932 (.zip, \u0938\u092d\u0940 \u0936\u0947\u092a\u092b\u093e\u0907\u0932\u094d\u0938 \u092f\u0941\u0915\u094d\u0924 ZIP \u0938\u0902\u0917\u094d\u0930\u0939)",CSV:"\u090f\u0915 CSV \u092b\u093e\u0907\u0932 (\u092a\u0924\u0947 \u092f\u093e \u0905\u0915\u094d\u0937\u093e\u0902\u0936, \u0926\u0947\u0936\u093e\u0902\u0924\u0930 \u0914\u0930 \u0905\u0932\u094d\u092a\u0935\u093f\u0930\u093e\u092e, \u0905\u0930\u094d\u0927\u0935\u093f\u0930\u093e\u092e \u092f\u093e \u091f\u0948\u092c \u0938\u0940\u092e\u093e\u0902\u0915\u093f\u0924 \u0915\u0947 \u0938\u093e\u0925, .csv)",
KML:"KML \u095e\u093e\u0907\u0932 (.kml)",GPX:"\u090f\u0915 GPX \u092b\u093e\u0907\u0932 (.gpx, GPS \u090f\u0915\u094d\u0938\u091a\u0947\u0902\u091c \u092b\u0949\u0930\u094d\u092e\u0947\u091f)",GeoJSON:"\u090f\u0915 GeoJSON \u092b\u093e\u0907\u0932 (.geo.json \u092f\u093e .geojson)"},generalizeOn:"\u0935\u0947\u092c \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u0928 \u0915\u0947 \u0932\u093f\u090f \u092b\u0940\u091a\u0930\u094d\u0938 \u0915\u093e \u0938\u093e\u092e\u093e\u0928\u094d\u092f\u0940\u0915\u0930\u0923 \u0915\u0930\u0947\u0902",
dropOrBrowse:"\u0921\u094d\u0930\u093e\u092a \u092f\u093e \u092c\u094d\u0930\u093e\u0909\u091c \u0915\u0930\u0947\u0902",browse:"\u092c\u094d\u0930\u093e\u0909\u091c \u0915\u0930\u0947\u0902",invalidType:"\u0907\u0938 \u092a\u094d\u0930\u0915\u093e\u0930 \u0915\u0940 \u092b\u093c\u093e\u0907\u0932 \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",addingPattern:"{filename}: \u091c\u094b\u095c\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",addFailedPattern:"{filename}: \u091c\u094b\u095c\u0928\u093e \u0935\u093f\u092b\u0932 \u0930\u0939\u093e",
featureCountPattern:"{filename}: {count} \u092b\u0940\u091a\u0930\u094d\u0938",invalidTypePattern:"{filename}: \u092f\u0939 \u092a\u094d\u0930\u0915\u093e\u0930 \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0928\u0939\u0940\u0902 \u0939\u0948",maxFeaturesAllowedPattern:"\u0905\u0927\u093f\u0915\u0924\u092e {count} \u092b\u0940\u091a\u0930 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0939\u0948",layerNamePattern:"{filename} - {name}"},layerList:{caption:"\u0932\u0947\u092f\u0930",noLayersAdded:"\u0915\u094b\u0908 \u0932\u0947\u092f\u0930 \u091c\u094b\u095c\u0940 \u0928\u0939\u0940\u0902 \u0917\u0908 \u0939\u0948\u0964",
removeLayer:"\u0932\u0947\u092f\u0930 \u0939\u091f\u093e\u090f\u0901",back:"\u092a\u0940\u091b\u0947 \u091c\u093e\u090f\u0901"},_localized:{}}});