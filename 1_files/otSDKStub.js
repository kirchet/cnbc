(function(g){function f(){var a=this;this.iabType=null;this.iabTypeAdded=!0;this.crossOrigin=null;this.isAmp=!1;this.domainId=null;this.addBannerSDKScript=function(c){var d=null;a.iabTypeAdded&&("IAB"!==(d=a.getRegionSet(c)).Type&&"IAB2"!==d.Type||(a.iabType=d.Type,a.intializeIabStub()));var e=b.stubScriptElement.cloneNode(!0),h="";h=c.UseSDKRefactor?(b.isMigratedURL&&(e.src=b.storageBaseURL+"/scripttemplates/new/scripttemplates/"+b.stubFileName+".js"),b.storageBaseURL+"/scripttemplates/new/scripttemplates/"+
c.Version+"/"+b.bannerScriptName):"5.11.0"===c.Version?(b.isMigratedURL&&(e.src=b.storageBaseURL+"/scripttemplates/old/scripttemplates/"+b.stubFileName+".js"),b.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+b.bannerScriptName):(b.isMigratedURL&&(e.src=b.storageBaseURL+"/scripttemplates/"+b.stubFileName+".js"),b.storageBaseURL+"/scripttemplates/"+c.Version+"/"+b.bannerScriptName);["charset","data-language","data-document-language","data-domain-script","crossorigin"].forEach(function(a){b.stubScriptElement.getAttribute(a)&&
e.setAttribute(a,b.stubScriptElement.getAttribute(a))});a.crossOrigin=b.stubScriptElement.getAttribute("crossorigin")||null;a.isAmp=!!b.stubScriptElement.getAttribute("amp");a.domainId=b.stubScriptElement.getAttribute("data-domain-script");window.otStubData={domainData:c,stubElement:e,bannerBaseDataURL:b.bannerBaseDataURL,mobileOnlineURL:b.mobileOnlineURL,userLocation:b.userLocation,regionRule:d,crossOrigin:a.crossOrigin,isAmp:a.isAmp};a.jsonp(h,null)};this.intializeIabStub=function(){var c=window;
a.iabTypeAdded?("IAB"===a.iabType?void 0===c.__cmp&&(window.__cmp=a.executeCmpApi):void 0===c.__tcfapi&&(window.__tcfapi=a.executeTcfApi),a.addIabFrame()):a.addBackwardIabFrame();c.receiveOTMessage=a.receiveIabMessage;(c.attachEvent||window.addEventListener)("message",c.receiveOTMessage,!1)};this.addIabFrame=function(){var c=window,b="IAB"===a.iabType?"__cmpLocator":"__tcfapiLocator";!c.frames[b]&&(c.document.body?a.addLocator(b,"CMP"):setTimeout(a.addIabFrame,5))};this.addBackwardIabFrame=function(){var c=
window;!c.frames.__cmpLocator&&(c.document.body?a.addLocator("__cmpLocator","CMP"):setTimeout(a.addIabFrame,5));!c.frames.__tcfapiLocator&&(c.document.body?a.addLocator("__tcfapiLocator","TCF"):setTimeout(a.addIabFrame,5))};this.addLocator=function(a,b){var c=window,d=c.document.createElement("iframe");d.style.cssText="display:none";d.name=a;d.setAttribute("title",b+" Locator");c.document.body.appendChild(d)};this.receiveIabMessage=function(c){var b="string"==typeof c.data,e={};try{e=b?JSON.parse(c.data):
c.data}catch(q){}if(e.__cmpCall&&"IAB"===a.iabType){var f=e.__cmpCall.callId,m=e.__cmpCall.command,k=e.__cmpCall.parameter;a.executeCmpApi(m,k,function(a,d){a={__cmpReturn:{returnValue:a,success:d,callId:f,command:m}};c.source.postMessage(b?JSON.stringify(a):a,c.origin)})}else e.__cmpCall&&"IAB2"===a.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(e.__tcfapiCall&&"IAB2"===a.iabType){var g=e.__tcfapiCall.callId,n=e.__tcfapiCall.command;e=(k=e.__tcfapiCall.parameter,
e.__tcfapiCall.version);a.executeTcfApi(n,k,function(a,d){a={__tcfapiReturn:{returnValue:a,success:d,callId:g,command:n}};c.source.postMessage(b?JSON.stringify(a):a,c.origin)},e)}else e.__tcfapiCall&&"IAB"===a.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")};this.executeCmpApi=function(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];a.iabType="IAB";d=c[0];var e=c[1];c=c[2];if("function"==typeof c&&d)if(b.isStubReady&&b.IABCookieValue)switch(d){case "ping":a.getPingRequest(c,
!0);break;case "getConsentData":a.getConsentDataRequest(c);break;default:a.addToQueue(d,e,c)}else a.addToQueue(d,e,c)};this.executeTcfApi=function(){for(var c=[],b=0;b<arguments.length;b++)c[b]=arguments[b];if(a.iabType="IAB2",!c.length)return window.__tcfapi.a||[];b=c[0];var e=c[1],f=c[2];c=c[3];"function"==typeof f&&b&&("ping"===b?a.getPingRequest(f):a.addToQueue(b,e,f,c))};this.addToQueue=function(c,b,e,f){var d=window,h="IAB"===a.iabType?"__cmp":"__tcfapi";d[h].a=d[h].a||[];d[h].a.push([c,b,e,
f])};this.getPingRequest=function(c,d){if(void 0===d&&(d=!1),c){var e={},f=!1;"IAB"===a.iabType?(e={gdprAppliesGlobally:b.oneTrustIABgdprAppliesGlobally,cmpLoaded:d},f=!0):"IAB2"===a.iabType&&(e={gdprApplies:b.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},f=!0);c(e,f)}};this.getConsentDataRequest=function(a){a&&b.IABCookieValue&&a({gdprApplies:b.oneTrustIABgdprAppliesGlobally,
hasGlobalScope:b.hasIABGlobalScope,consentData:b.IABCookieValue},!0)};this.initConsentSDK()}var b=new function(){this.optanonCookieName="OptanonConsent";this.optanonHtmlGroupData=[];this.optanonHostData=[];this.genVendorsData=[];this.IABCookieValue="";this.oneTrustIABCookieName="eupubconsent";this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal";this.isStubReady=!0;this.geolocationCookiesParam="geolocation";this.EUCOUNTRIES="BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");
this.stubFileName="otSDKStub";this.DATAFILEATTRIBUTE="data-domain-script";this.bannerScriptName="otBannerSdk.js";this.mobileOnlineURL=[];this.isMigratedURL=!1;this.migratedCCTID="[[OldCCTID]]";this.migratedDomainId="[[NewDomainId]]";this.userLocation={country:"",state:""}},l=(f.prototype.initConsentSDK=function(){this.initCustomEventPolyfill();this.ensureHtmlGroupDataInitialised();this.updateGtmMacros();this.fetchBannerSDKDependency()},f.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL();
this.otFetch(b.bannerDataParentURL,this.getLocation.bind(this))},f.prototype.getLocation=function(a){if(!a.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(a);var c=window;c.OneTrust&&c.OneTrust.geolocationResponse?(c=c.OneTrust.geolocationResponse,this.setGeoLocation(c.countryCode,c.stateCode),this.addBannerSDKScript(a)):(c=this.readCookieParam(b.optanonCookieName,b.geolocationCookiesParam))||
a.SkipGeolocation?(this.setGeoLocation(c.split(";")[0],c.split(";")[1]),this.addBannerSDKScript(a)):this.getGeoLocation(a)},f.prototype.getGeolocationURL=function(a){var c=a.TenantFeatures,d=""+b.stubScriptElement.getAttribute("src").split(b.stubFileName)[0]+a.Version;return/^file:\/\//i.test(d)&&a.MobileSDK?(a="/"+a.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",c&&c.CookieV2GeolocationJsonApi?b.storageBaseURL+a:"."+a):a.GeolocationUrl},f.prototype.geoLocationJsonCallback=
function(a,b){this.setGeoLocation(b.country,b.state);this.addBannerSDKScript(a)},f.prototype.getGeoLocation=function(a){var b=this,d=a.TenantFeatures,e=this.getGeolocationURL(a);d&&d.CookieV2GeolocationJsonApi?this.otFetch(e,this.geoLocationJsonCallback.bind(this,a),!0):(window.jsonFeed=function(a){b.setGeoLocation(a.country,a.state)},this.jsonp(e,this.addBannerSDKScript.bind(this,a)))},f.prototype.setGeoLocation=function(a,c){void 0===c&&(c="");b.userLocation={country:a,state:c}},f.prototype.otFetch=
function(a,c,d){if(void 0===d&&(d=!1),/^file:\/\//i.test(a))this.otFetchOfflineFile(a,c);else{b.mobileOnlineURL.push(a);var e=new XMLHttpRequest;e.onload=function(){c(JSON.parse(this.responseText))};e.open("GET",a);d&&e.setRequestHeader("accept","application/json");e.send()}},f.prototype.otFetchOfflineFile=function(a,b){var c=(a=a.replace(".json",".js")).split("/"),e=c[c.length-1].split(".js")[0];this.jsonp(a,function(){b(window[e])})},f.prototype.jsonp=function(a,c){var d=document.createElement("script");
d.setAttribute("src",a);d.async=!0;d.type="text/javascript";this.crossOrigin&&d.setAttribute("crossorigin",this.crossOrigin);document.getElementsByTagName("head")[0].appendChild(d);/^file:\/\//i.test(a)||b.mobileOnlineURL.push(a);c&&(d.onload=function(){c()})},f.prototype.getRegionSet=function(a){var c,d=b.userLocation,e=a.RuleSet.filter(function(a){return!0===a.Default});if(!d.country&&!d.state)return e&&0<e.length?e[0]:null;e=d.state.toLowerCase();d=d.country.toLowerCase();for(var f=0;f<a.RuleSet.length;f++)if(!0===
a.RuleSet[f].Global)var g=a.RuleSet[f];else{var k=a.RuleSet[f].States;if(k[d]&&0<=k[d].indexOf(e)){var l=a.RuleSet[f];break}0<=a.RuleSet[f].Countries.indexOf(d)&&(c=a.RuleSet[f])}return l||c||g},f.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData();this.initializeGroupData();this.initializeHostData();this.initializeGenVenData()},f.prototype.initializeGroupData=function(){var a=this.readCookieParam(b.optanonCookieName,"groups");a&&(b.optanonHtmlGroupData=this.deserialiseStringToArray(a))},
f.prototype.initializeHostData=function(){var a=this.readCookieParam(b.optanonCookieName,"hosts");a&&(b.optanonHostData=this.deserialiseStringToArray(a))},f.prototype.initializeGenVenData=function(){var a=this.readCookieParam(b.optanonCookieName,"genVendors");a&&(b.genVendorsData=this.deserialiseStringToArray(a))},f.prototype.initializeIABData=function(){this.validateIABGDPRApplied();this.validateIABGlobalScope()},f.prototype.validateIABGlobalScope=function(){var a=this.readCookieParam(b.optanonCookieName,
b.oneTrustIsIABCrossConsentEnableParam);a?"true"===a?(b.hasIABGlobalScope=!0,b.isStubReady=!1):(b.hasIABGlobalScope=!1,b.IABCookieValue=this.getCookie(b.oneTrustIABCookieName)):b.isStubReady=!1},f.prototype.validateIABGDPRApplied=function(){var a=this.readCookieParam(b.optanonCookieName,b.geolocationCookiesParam).split(";")[0];a?this.isBoolean(a)?b.oneTrustIABgdprAppliesGlobally="true"===a:b.oneTrustIABgdprAppliesGlobally=0<=b.EUCOUNTRIES.indexOf(a):b.isStubReady=!1},f.prototype.isBoolean=function(a){return"true"===
a||"false"===a},f.prototype.readCookieParam=function(a,b){var c;if(c=this.getCookie(a)){a={};var e=c.split("\x26");for(c=0;c<e.length;c+=1){var f=e[c].split("\x3d");a[decodeURIComponent(f[0])]=decodeURIComponent(f[1]).replace(/\+/g," ")}return b&&a[b]?a[b]:b&&!a[b]?"":a}return""},f.prototype.getCookie=function(a){if(this.isAmp)return(JSON.parse(window.localStorage.getItem(this.domainId))||{})[a]||null;var b,d=a+"\x3d",e=document.cookie.split(";");for(a=0;a<e.length;a+=1){for(b=e[a];" "==b.charAt(0);)b=
b.substring(1,b.length);if(0==b.indexOf(d))return b.substring(d.length,b.length)}return null},f.prototype.updateGtmMacros=function(){var a,c=[];for(a=0;a<b.optanonHtmlGroupData.length;a++)this.endsWith(b.optanonHtmlGroupData[a],":1")&&c.push(b.optanonHtmlGroupData[a].replace(":1",""));for(a=0;a<b.optanonHostData.length;a++)this.endsWith(b.optanonHostData[a],":1")&&c.push(b.optanonHostData[a].replace(":1",""));for(a=0;a<b.genVendorsData.length;a++)this.endsWith(b.genVendorsData[a],":1")&&c.push(b.genVendorsData[a].replace(":1",
""));a=","+this.serialiseArrayToString(c)+",";window.OnetrustActiveGroups=a;window.OptanonActiveGroups=a;void 0!==window.dataLayer?window.dataLayer.constructor===Array&&(window.dataLayer.push({OnetrustActiveGroups:a}),window.dataLayer.push({OptanonActiveGroups:a})):window.dataLayer=[{event:"OneTrustLoaded",OnetrustActiveGroups:a},{event:"OptanonLoaded",OptanonActiveGroups:a}];var d,e=new CustomEvent("consent.onetrust",{detail:c});c.length&&(window.dataLayer.constructor===Array&&window.dataLayer.push({event:"OneTrustGroupsUpdated",
OnetrustActiveGroups:a}),d=new CustomEvent("OneTrustGroupsUpdated",{detail:c}));setTimeout(function(){window.dispatchEvent(e);d&&window.dispatchEvent(d)})},f.prototype.deserialiseStringToArray=function(a){return a?a.split(","):[]},f.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},f.prototype.serialiseArrayToString=function(a){return a.toString()},f.prototype.setStubScriptElement=function(){b.stubScriptElement=document.querySelector("script[src*\x3d'"+b.stubFileName+"']");
b.stubScriptElement&&b.stubScriptElement.hasAttribute(b.DATAFILEATTRIBUTE)?b.domainDataFileName=b.stubScriptElement.getAttribute(b.DATAFILEATTRIBUTE).trim():b.stubScriptElement||(b.stubScriptElement=document.querySelector("script[src*\x3d'"+b.migratedCCTID+"']"),b.stubScriptElement&&(b.isMigratedURL=!0,b.domainDataFileName=b.migratedDomainId.trim()))},f.prototype.setDomainDataFileURL=function(){this.setStubScriptElement();var a=b.stubScriptElement.getAttribute("src"),c=-1<a.indexOf("/consent");a&&
(b.isMigratedURL?b.storageBaseURL=a.split("/consent/"+b.migratedCCTID)[0]:b.storageBaseURL=c?a.split("/consent")[0]:a.split("/scripttemplates/"+b.stubFileName)[0]);b.bannerBaseDataURL=b.storageBaseURL&&b.storageBaseURL+"/consent/"+b.domainDataFileName;b.bannerDataParentURL=b.bannerBaseDataURL+"/"+b.domainDataFileName+".json"},f.prototype.initCustomEventPolyfill=function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,
b.bubbles,b.cancelable,b.detail),c}"function"!=typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)},f),p=new l;return g.OtSDKStub=l,g.otSdkStub=p,g})({});