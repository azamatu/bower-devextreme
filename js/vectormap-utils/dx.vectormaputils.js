/*!
* DevExtreme (dx.vectormaputils.js)
* Version: 19.1.8 (build 19337-1057)
* Build date: Tue Dec 03 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";!function(n,e){if("function"==typeof define&&define.amd)define(function(n,t,r){e(t)});else if("object"==typeof module&&module.exports)e(t);else{var t=n.DevExpress=n.DevExpress||{};t=t.viz=t.viz||{},t=t.vectormaputils={},e(t)}}(this,function(n){function e(){}function t(n){return n}function r(n){return"function"==typeof n}function o(n){var e,t=F(n),r=0;return e={pos:function(){return r},skip:function(n){return r+=n,e},ui8arr:function(n){var t=0,r=[];for(r.length=n;t<n;++t)r[t]=e.ui8();return r},ui8:function(){var n=O(t,r);return r+=1,n},ui16LE:function(){var n=T(t,r);return r+=2,n},ui32LE:function(){var n=H(t,r);return r+=4,n},ui32BE:function(){var n=J(t,r);return r+=4,n},f64LE:function(){var n=V(t,r);return r+=8,n}}}function i(n,e,t){var r,i=n[0]?l(o(n[0]),t):{},s=n[1]?_(o(n[1]),t):{},c=u(i.shapes||[],s.records||[],e);return c.length?(r={type:"FeatureCollection",features:c},r.bbox=i.bBox):r=null,r}function u(n,e,t){var r,o,i=[],u=i.length=u=Math.max(n.length,e.length);for(r=0;r<u;++r)o=n[r]||{},i[r]={type:"Feature",geometry:{type:o.geoJSON_type||null,coordinates:o.coordinates?t(o.coordinates):[]},properties:e[r]||null};return i}function s(n){function e(n){return Math.round(n*r)/r}function t(n){return n.map(n[0].length?t:e)}var r=Number("1E"+n);return t}function c(n){return n=n||{},["shp","dbf"].map(function(e){return function(t){n.substr?(e="."+e,Y(n+(n.substr(-e.length).toLowerCase()===e?"":e),function(n,e){t(n,e)})):t(null,n[e]||null)}})}function a(n,o,u){var a;return f(c(n),function(n,c){u=r(o)&&o||r(u)&&u||e,o=!r(o)&&o||{};var f=[];n.forEach(function(n){n&&f.push(n)}),a=i(c,o.precision>=0?s(o.precision):t,f),u(a,f.length?f:null)}),a}function f(n,e){function t(){--i,0!==i||u||e(r,o)}var r=[],o=[],i=1,u=!0;n.forEach(function(n,e){++i,n(function(n,i){r[e]=n,o[e]=i,t()})}),u=!1,t()}function l(n,e){var t,r,o,i,u=[];try{t=new Date,o=x(n)}catch(n){return void e.push("shp: header parsing error: "+n.message+" / "+n.description)}9994!==o.fileCode&&e.push("shp: file code: "+o.fileCode+" / expected: 9994"),1e3!==o.version&&e.push("shp: file version: "+o.version+" / expected: 1000");try{for(;n.pos()<o.fileLength&&(i=N(n,o.type,e));)u.push(i);n.pos()!==o.fileLength&&e.push("shp: file length: "+o.fileLength+" / actual: "+n.pos()),r=new Date}catch(n){e.push("shp: records parsing error: "+n.message+" / "+n.description)}return{bBox:o.bBox_XY,type:o.shapeType,shapes:u,errors:e,time:r-t}}function p(n,e){e.coordinates=k(n,1)[0]}function h(n,e){var t,r=w(n),o=M(n),i=M(n),u=B(n,o),s=k(n,i),c=[];for(c.length=o,t=0;t<o;++t)c[t]=s.slice(u[t],u[t+1]||i);e.bBox=r,e.coordinates=c}function d(n,e){e.bBox=w(n),e.coordinates=k(n,M(n))}function g(n,e){e.coordinates=k(n,1)[0],e.coordinates.push(E(n,1)[0])}function v(n,e){var t=w(n),r=M(n),o=k(n,r),i=D(n),u=E(n,r);e.bBox=t,e.mBox=i,e.coordinates=C(o,u,r)}function y(n,e){var t,r,o,i=w(n),u=M(n),s=M(n),c=B(n,u),a=k(n,s),f=D(n),l=E(n,s),p=[];for(p.length=u,t=0;t<u;++t)r=c[t],o=c[t+1]||s,p[t]=C(a.slice(r,o),l.slice(r,o),o-r);e.bBox=i,e.mBox=f,e.coordinates=p}function m(n,e){e.coordinates=k(n,1)[0],e.push(E(n,1)[0],E(n,1)[0])}function b(n,e){var t=w(n),r=M(n),o=k(n,r),i=D(n),u=E(n,r),s=D(n),c=E(n,r);e.bBox=t,e.zBox=i,e.mBox=s,e.coordinates=Z(o,u,c,r)}function L(n,e){var t,r,o,i=w(n),u=M(n),s=M(n),c=B(n,u),a=k(n,s),f=D(n),l=E(n,s),p=D(n),h=E(n,s),d=[];for(d.length=u,t=0;t<u;++t)r=c[t],o=c[t+1]||s,d[t]=Z(a.slice(r,o),l.slice(r,o),h.slice(r,o),o-r);e.bBox=i,e.zBox=f,e.mBox=p,e.coordinates=d}function P(n,e){var t,r,o,i=w(n),u=M(n),s=M(n),c=B(n,u),a=B(n,u),f=k(n,s),l=D(n),p=E(n,s),h=D(n),d=[];for(d.length=u,t=0;t<u;++t)r=c[t],o=c[t+1]||s,d[t]=Z(f.slice(r,o),p.slice(r,o),mValues.slice(r,o),o-r);e.bBox=i,e.zBox=l,e.mBox=h,e.types=a,e.coordinates=d}function x(n){var e={};return e.fileCode=n.ui32BE(),n.skip(20),e.fileLength=n.ui32BE()<<1,e.version=n.ui32LE(),e.type_number=n.ui32LE(),e.type=j[e.type_number],e.bBox_XY=w(n),e.bBox_ZM=k(n,2),e}function M(n){return n.ui32LE()}function B(n,e){var t,r=[];for(r.length=e,t=0;t<e;++t)r[t]=M(n);return r}function E(n,e){var t,r=[];for(r.length=e,t=0;t<e;++t)r[t]=n.f64LE();return r}function w(n){return E(n,4)}function D(n){return[n.f64LE(),n.f64LE()]}function k(n,e){var t,r=[];for(r.length=e,t=0;t<e;++t)r[t]=D(n);return r}function C(n,e,t){var r,o=[];for(o.length=t,r=0;r<t;++r)o[r]=[n[r][0],n[r][1],e[r]];return o}function Z(n,e,t,r){var o,i=[];for(i.length=r,o=0;o<r;++o)i[o]=[n[o][0],n[o][1],e[o],t[o]];return i}function N(n,e,t){var r={number:n.ui32BE()},o=n.ui32BE()<<1,i=n.pos(),u=n.ui32LE();return r.type_number=u,r.type=j[u],r.geoJSON_type=I[r.type],r.type?(r.type!==e&&t.push("shp: shape #"+r.number+" type: "+r.type+" / expected: "+e),G[u](n,r),i=n.pos()-i,i!==o&&t.push("shp: shape #"+r.number+" length: "+o+" / actual: "+i)):(t.push("shp: shape #"+r.number+" type: "+u+" / unknown"),r=null),r}function _(n,e){var t,r,o,i,u;try{t=new Date,o=R(n,e),i=X(o,e),u=q(n,o.numberOfRecords,o.recordLength,i,e),r=new Date}catch(n){e.push("dbf: parsing error: "+n.message+" / "+n.description)}return{records:u,errors:e,time:r-t}}function R(n,e){var t,r,o={versionNumber:n.ui8(),lastUpdate:new Date(1900+n.ui8(),n.ui8()-1,n.ui8()),numberOfRecords:n.ui32LE(),headerLength:n.ui16LE(),recordLength:n.ui16LE(),fields:[]};for(n.skip(20),t=(o.headerLength-n.pos()-1)/32;t>0;--t)o.fields.push(U(n));return r=n.ui8(),13!==r&&e.push("dbf: header terminator: "+r+" / expected: 13"),o}function S(n,e){return W.apply(null,n.ui8arr(e))}function U(n){var e={name:S(n,11).replace(/\0*$/gi,""),type:W(n.ui8()),length:n.skip(4).ui8(),count:n.ui8()};return n.skip(14),e}function z(n,e){return n.skip(e),null}function X(n,e){var t,r,o=[],i=0,u=n.fields.length,s=0;for(i=0;i<u;++i)r=n.fields[i],t={name:r.name,parser:$[r.type],length:r.length},t.parser||(t.parser=z,e.push("dbf: field "+r.name+" type: "+r.type+" / unknown")),s+=r.length,o.push(t);return s+1!==n.recordLength&&e.push("dbf: record length: "+n.recordLength+" / actual: "+(s+1)),o}function q(n,e,t,r,o){var i,u,s,c,a,f=r.length,l=[];for(i=0;i<e;++i){for(c={},s=n.pos(),n.skip(1),u=0;u<f;++u)a=r[u],c[a.name]=a.parser(n,a.length);s=n.pos()-s,s!==t&&o.push("dbf: record #"+(i+1)+" length: "+t+" / actual: "+s),l.push(c)}return l}function F(n){return new DataView(n)}function O(n,e){return n.getUint8(e)}function T(n,e){return n.getUint16(e,!0)}function H(n,e){return n.getUint32(e,!0)}function J(n,e){return n.getUint32(e,!1)}function V(n,e){return n.getFloat64(e,!0)}function Y(n,e){var t=new XMLHttpRequest;t.addEventListener("load",function(){e(this.response?null:this.statusText,this.response)}),t.open("GET",n),t.responseType="arraybuffer",t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.send(null)}n.parse=a;var j={0:"Null",1:"Point",3:"PolyLine",5:"Polygon",8:"MultiPoint",11:"PointZ",13:"PolyLineZ",15:"PolygonZ",18:"MultiPointZ",21:"PointM",23:"PolyLineM",25:"PolygonM",28:"MultiPointM",31:"MultiPatch"},G={0:e,1:p,3:h,5:h,8:d,11:m,13:L,15:L,18:b,21:g,23:y,25:y,28:v,31:P},I={Null:"Null",Point:"Point",PolyLine:"MultiLineString",Polygon:"Polygon",MultiPoint:"MultiPoint",PointZ:"Point",PolyLineZ:"MultiLineString",PolygonZ:"Polygon",MultiPointZ:"MultiPoint",PointM:"Point",PolyLineM:"MultiLineString",PolygonM:"Polygon",MultiPointM:"MultiPoint",MultiPatch:"MultiPatch"},W=String.fromCharCode,$={C:function(n,e){var t=S(n,e);try{t=decodeURIComponent(escape(t))}catch(n){}return t.trim()},N:function(n,e){var t=S(n,e);return parseFloat(t,10)},D:function(n,e){var t=S(n,e);return new Date(t.substring(0,4),t.substring(4,6)-1,t.substring(6,8))}}});
