!function(e,t){var n="spAnalytics",r=function(e){console.log(n+" "+e)},i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=function(e){var t=[];for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)t.push(encodeURIComponent(n)+"="+encodeURIComponent(r[o]));else t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}return t.join("&")},s=function(){for(var e=[],t=0;t<32;t++)e[t]=Math.floor(16*Math.random()).toString(16);var n=e.join("");return n},a={encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t},decode:function(e){for(var t="",n=0,r=0,i=0,o=0;n<e.length;)r=e.charCodeAt(n),r<128?(t+=String.fromCharCode(r),n++):r>191&&r<224?(i=e.charCodeAt(n+1),t+=String.fromCharCode((31&r)<<6|63&i),n+=2):(i=e.charCodeAt(n+1),o=e.charCodeAt(n+2),t+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o),n+=3);return t}},c={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){try{if(e.btoa&&e.atob)return e.btoa(unescape(encodeURIComponent(t)))}catch(e){}return c._encode(t)},_encode:function(e){var t,n,r,i,o,s,d,u="",l=0;for(e=a.encode(e);l<e.length;)t=e.charCodeAt(l++),n=e.charCodeAt(l++),r=e.charCodeAt(l++),i=t>>2,o=(3&t)<<4|n>>4,s=(15&n)<<2|r>>6,d=63&r,isNaN(n)?s=d=64:isNaN(r)&&(d=64),u=u+c._keyStr.charAt(i)+c._keyStr.charAt(o)+c._keyStr.charAt(s)+c._keyStr.charAt(d);return u},decode:function(t){try{if(e.btoa&&e.atob)return decodeURIComponent(escape(e.atob(t)))}catch(e){}return c._decode(t)},_decode:function(e){var t,n,r,i,o,s,d,u="",l=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<e.length;)i=c._keyStr.indexOf(e.charAt(l++)),o=c._keyStr.indexOf(e.charAt(l++)),s=c._keyStr.indexOf(e.charAt(l++)),d=c._keyStr.indexOf(e.charAt(l++)),t=i<<2|o>>4,n=(15&o)<<4|s>>2,r=(3&s)<<6|d,u+=String.fromCharCode(t),64!=s&&(u+=String.fromCharCode(n)),64!=d&&(u+=String.fromCharCode(r));return u=a.decode(u)}},d=e.navigator.userAgent,u=e.navigator.vendor,l=e.navigator.platform,g={init:function(){this.browser=this.searchString(this.dataBrowser)||null,this.version=this.searchVersion(e.navigator.userAgent)||this.searchVersion(e.navigator.appVersion)||null,this.OS=this.searchString(this.dataOS)||null},searchString:function(e){for(var t=0;t<e.length;t++){var n=e[t].string,r=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,n){if(n.indexOf(e[t].subString)!=-1)return e[t].identity}else if(r)return e[t].identity}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(t!=-1)return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:d,subString:"Chrome",identity:"Chrome"},{string:d,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:u,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:e.opera,identity:"Opera",versionSearch:"Version"},{string:u,subString:"iCab",identity:"iCab"},{string:u,subString:"KDE",identity:"Konqueror"},{string:d,subString:"Firefox",identity:"Firefox"},{string:u,subString:"Camino",identity:"Camino"},{string:d,subString:"Netscape",identity:"Netscape"},{string:d,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:d,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:d,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:l,subString:"Win",identity:"Windows"},{string:l,subString:"Mac",identity:"Mac"},{string:d,subString:"iPhone",identity:"iPhone/iPod"},{string:d,subString:"Android",identity:"Android"},{string:l,subString:"Linux",identity:"Linux"}]};g.init();var h=function(e,t){this.url=e,this.data=t||{}};h.prototype.send=function(t,n){var r=!!e.XDomainRequest;if(r){var i=new e.XDomainRequest;i.open("POST",this.url,!0),i.onload=function(){t(i.responseText)},i.onerror=function(){n(i)},i.send(o(this.data))}else{var s=new XMLHttpRequest;s.open("POST",this.url,!0),s.onreadystatechange=function(){4==s.readyState&&(200==s.status?t(s.responseText):n(s,s.status))},s.onerror=function(){n(s,s.status)},s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),s.send(o(this.data))}};var v={get:function(e){for(var n=e+"=",r=t.cookie.split(";"),i=0;i<r.length;i++){for(var o=r[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(n))return o.substring(n.length,o.length)}return null},set:function(e,n,r,i){if(r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3);var s="; expires="+o.toGMTString()}else var s="";var a=e+"="+n+s+"; path=/"+(i?";domain="+i:"");t.cookie=a},remove:function(e,t){v.set(e,"",-1,t)}},p=function(){},S={apiEndpoint:"",cookieName:n+"_id",cookieExpiration:3650,unsentKey:n+"_unsent",saveEvents:!0,domain:"",sessionTimeout:18e5},f=0,y=[],m=!1,_=null,I=null,b={LAST_EVENT_TIME:n+"_lastEventTime",SESSION_ID:n+"_sessionId"},C=function(){return f++,f};p.prototype.init=function(e,t){try{if(this.options=S,t&&void 0!==t.saveEvents&&(S.saveEvents=!!t.saveEvents),E(),S.deviceId=t&&void 0!==t.deviceId&&null!==t.deviceId&&t.deviceId||S.deviceId||s(),S.userId=void 0!==e&&null!==e&&e||S.userId||null,S.apiEndpoint=t&&void 0!==t.apiEndpoint&&null!==t.apiEndpoint&&t.apiEndpoint||S.apiEndpoint,A(),f=0,S.saveEvents){var n=localStorage.getItem(S.unsentKey);if(n)try{y=JSON.parse(n)}catch(e){}}y.length>0&&this.sendEvents(),_=parseInt(localStorage.getItem(b.LAST_EVENT_TIME))||null,I=parseInt(localStorage.getItem(b.SESSION_ID))||null;var i=(new Date).getTime();(!I||!_||i-_>S.sessionTimeout)&&(I=i,localStorage.setItem(b.SESSION_ID,I)),_=i,localStorage.setItem(b.LAST_EVENT_TIME,_)}catch(e){r(e)}};var E=function(){var e=v.get(S.cookieName),t=null;if(e)try{t=JSON.parse(c.decode(e)),t&&(t.deviceId&&(S.deviceId=t.deviceId),t.userId&&(S.userId=t.userId),t.globalUserProperties&&(S.globalUserProperties=t.globalUserProperties))}catch(e){}},A=function(){v.set(S.cookieName,c.encode(JSON.stringify({deviceId:S.deviceId,userId:S.userId,globalUserProperties:S.globalUserProperties})),S.cookieExpiration,S.domain)},N=function(){try{localStorage.setItem(S.unsentKey,JSON.stringify(y))}catch(e){}};p.prototype.setDomain=function(e){try{S.domain=void 0!==e&&null!==e&&""+e||null,S.cookieName=n+"_id"+(S.domain||""),E(),A()}catch(e){r(e)}},p.prototype.setUserId=function(e){try{S.userId=void 0!==e&&null!==e&&""+e||null,A()}catch(e){r(e)}},p.prototype.setUserProperties=function(e){try{S.globalUserProperties=e,A()}catch(e){r(e)}},p.prototype.setVersionName=function(e){try{S.versionName=e}catch(e){r(e)}},p.prototype.logEvent=function(e,t,n,i){try{var o=(new Date).getTime();(!I||!_||o-_>S.sessionTimeout)&&(I=o,localStorage.setItem(b.SESSION_ID,I)),_=o,localStorage.setItem(b.LAST_EVENT_TIME,_),i=i&&"string"!=typeof i?JSON.stringify(i):i||"";var s={device_id:S.deviceId,user_id:S.userId||S.deviceId,timestamp:o,event_id:C(),session_id:I||-1,event_category:e,event_action:t,event_label:n,event_context:i,client:g.browser,version_code:0,version_name:S.versionName||null,build_version_sdk:0,build_version_release:g.version,phone_model:g.OS,global_properties:S.globalUserProperties||{}};y.push(s),S.saveEvents&&N(),this.sendEvents()}catch(e){r(e)}},p.prototype.sendEvents=function(){if(!m){m=!0;var e=S.apiEndpoint,t=JSON.stringify(y),n=(new Date).getTime(),r={e:t,upload_time:n},i=y.length,o=this;new h(e,r).send(function(e){m=!1;try{var t=JSON.parse(e);t&&1==t.success&&y.length>0&&o.sendEvents()}catch(e){}},function(){m=!1}),y.splice(0,i),S.saveEvents&&N()}},p.prototype.runQueuedFunctions=function(){for(var e=0;e<this._q.length;e++){var t=this[this._q[e][0]];t&&"function"==typeof t&&t.apply(this,this._q[e].slice(1))}this._q=[]},p.prototype.__VERSION__="1.3";var O=e[n]||{},T=new p;T._q=O._q||[],e[n]=T}(window,document);