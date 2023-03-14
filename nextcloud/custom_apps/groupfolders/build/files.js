!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,(function(){return function(e){function n(n){for(var t,a,i=n[0],o=n[1],s=0,l=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(p&&p(n);l.length;)l.shift()()}var t={},r={0:0};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=i);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+""+({2:"sharing",3:"vendors~sharing"}[e]||e)+".js?v="+{2:"2eaaa3490eba18747c77",3:"a4368238a5037cd6e862"}[e]}(e);var p=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",p.name="ChunkLoadError",p.type=a,p.request=i,t[1](p)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpGroupFolder=window.webpackJsonpGroupFolder||[],o=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var p=o;return a(a.s=29)}({1:function(e,n,t){"use strict";
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var r={PROPERTY_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-list",PROPERTY_ACL_ENTRY:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl",PROPERTY_ACL_MAPPING_TYPE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-type",PROPERTY_ACL_MAPPING_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-id",PROPERTY_ACL_MASK:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mask",PROPERTY_ACL_PERMISSIONS:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-permissions",PROPERTY_ACL_ENABLED:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-enabled",PROPERTY_ACL_CAN_MANAGE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-can-manage",PROPERTY_INHERITED_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}inherited-acl-list",GROUP_FOLDER_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}group-folder-id"};n.a=r},12:function(e,n,t){"use strict";var r,a=t(1),i=t(8);function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var p=function(e){for(var n=[],t=0;t<e.length;t++){var r={mask:0,permissions:0};for(var a in e[t].children){var i=e[t].children[a];if(i.nodeName)switch(i.nodeName.split(":")[1]||""){case"acl-mapping-id":r.mappingId=i.textContent||i.text;break;case"acl-mapping-type":r.mappingType=i.textContent||i.text;break;case"acl-mapping-display-name":r.mappingDisplayName=i.textContent||i.text;break;case"acl-mask":r.mask=parseInt(i.textContent||i.text,10);break;case"acl-permissions":r.permissions=parseInt(i.textContent||i.text,10)}}n.push(r)}return n},l={attach:function(e){(r=e.filesClient).addFileInfoParser((function(e){var n={},t=e.propStat[0].properties,r=t[a.a.GROUP_FOLDER_ID];void 0!==r&&(n.groupFolderId=r);var i=t[a.a.PROPERTY_ACL_ENABLED];void 0!==i&&(n.aclEnabled=!!i);var o=t[a.a.PROPERTY_ACL_CAN_MANAGE];void 0!==o&&(n.aclCanManage=!!o);var s=t[a.a.PROPERTY_ACL_LIST]||[],l=t[a.a.PROPERTY_INHERITED_ACL_LIST]||[];return n.acl=p(s),n.inheritedAcls=p(l),n.acl.map((function(e){var t=n.inheritedAcls.find((function(n){return n.mappingType===e.mappingType&&n.mappingId===e.mappingId}));return t&&(e.permissions=e.permissions&e.mask|t.permissions&~e.mask),e})),n})),function(e){e._client.getPropertyBody=function(e,n){var t,r=this.parseClarkNotation(e);if(t=this.xmlNamespaces[r.namespace]?this.xmlNamespaces[r.namespace]+":"+r.name:"x:"+r.name+' xmlns:x="'+r.namespace+'"',Array.isArray(n)){var a="";for(var i in n)n[i].hasOwnProperty("type")&&n[i].hasOwnProperty("data")?a+=this.getPropertyBody(n[i].type,n[i].data):a+=this.getPropertyBody(i,n[i]);return"      <"+t+">"+a+"</"+t+">"}if("object"===s(n)){var o="";if(n.hasOwnProperty("type")&&n.hasOwnProperty("data"))return this.getPropertyBody(n.type,n.data);for(var p in n)o+=this.getPropertyBody(p,n[p]);return"      <"+t+">"+o+"</"+t+">"}return"d:resourcetype"!==t&&(n=dav._escapeXml(""+n)),"      <"+t+">"+n+"</"+t+">"},e._client._renderPropSet=function(e){var n="  <d:set>\n   <d:prop>\n";for(var t in e)e.hasOwnProperty(t)&&(n+=this.getPropertyBody(t,e[t]));return n+="    </d:prop>\n",n+="  </d:set>\n"}}(r)}};!function(e){_.extend(e.Files.Client,a.a)}(window.OC),OC.Plugins.register("OCA.Files.FileList",l);var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,s;return n=e,(t=[{key:"propFind",value:function(e){return r.getFileInfo(e.path+"/"+e.name,{properties:[a.a.PROPERTY_ACL_LIST,a.a.PROPERTY_INHERITED_ACL_LIST,a.a.GROUP_FOLDER_ID,a.a.PROPERTY_ACL_ENABLED,a.a.PROPERTY_ACL_CAN_MANAGE]}).then((function(e,n){if(n){var t=[];for(var r in n.acl){var a=new i.a;a.fromValues(n.acl[r].mappingType,n.acl[r].mappingId,n.acl[r].mappingDisplayName,n.acl[r].mask,n.acl[r].permissions),t.push(a)}return{acls:t,aclEnabled:n.aclEnabled,aclCanManage:n.aclCanManage,groupFolderId:n.groupFolderId}}return null}))}},{key:"propPatch",value:function(e,n){var t=[];for(var i in n)t.push({type:a.a.PROPERTY_ACL_ENTRY,data:n[i].getProperties()});var o={};return o[a.a.PROPERTY_ACL_LIST]=t,r._client.propPatch(r._client.baseUrl+e.path+"/"+e.name,o)}}])&&o(n.prototype,t),s&&o(n,s),e}();n.a=new u},29:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);t(12);
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.nc=btoa(OC.requestToken),t.p=OC.linkTo("groupfolders","build/"),function(e,n){e.Plugins.register("OCA.Files.App",{attach:function(){n.Theming?e.MimeType._mimeTypeIcons["dir-group"]=e.generateUrl("/apps/theming/img/groupfolders/folder-group.svg?v="+n.Theming.cacheBuster):e.MimeType._mimeTypeIcons["dir-group"]=e.imagePath("groupfolders","folder-group")}})}(OC,OCA),window.addEventListener("DOMContentLoaded",(function(){Promise.all([t.e(3),t.e(2)]).then(t.bind(null,32)).then((function(e){OCA.Sharing.ShareTabSections.registerSection((function(n,t){if("group"===t.mountType)return e.default}))}))}))},8:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(1);function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,i;return n=e,(t=[{key:"fromProperties",value:function(e){this.mappingType=e[r.a.PROPERTY_ACL_MAPPING_TYPE],this.mappingId=e[r.a.PROPERTY_ACL_MAPPING_ID],this.mask=e[r.a.PROPERTY_ACL_MASK],this.permissions=e[r.a.PROPERTY_ACL_PERMISSIONS]}},{key:"fromValues",value:function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:31;this.mappingType=e,this.mappingId=n,this.mappingDisplayName=t,this.mask=r,this.permissions=a}},{key:"getProperties",value:function(){var e={};return e[r.a.PROPERTY_ACL_MAPPING_TYPE]=this.mappingType,e[r.a.PROPERTY_ACL_MAPPING_ID]=this.mappingId,e[r.a.PROPERTY_ACL_MASK]=this.mask,e[r.a.PROPERTY_ACL_PERMISSIONS]=this.permissions,e}},{key:"getUniqueMappingIdentifier",value:function(){return this.mappingType+":"+this.mappingId}}])&&a(n.prototype,t),i&&a(n,i),e}()}})}));
//# sourceMappingURL=files.js.map