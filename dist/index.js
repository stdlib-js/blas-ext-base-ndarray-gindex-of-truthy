"use strict";var d=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=d(function(D,n){
var f=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),q=require('@stdlib/ndarray-base-numel-dimension/dist'),x=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/ndarray-base-clip-index/dist'),l=require('@stdlib/blas-ext-base-gindex-of-truthy/dist').ndarray;function m(t){var r,e,v,u,i,a;return a=t[0],r=f(t[1]),i=q(a,0),r=g(r,i),r>=i?-1:(i-=r,e=x(a,0),v=o(a)+e*r,u=l(i,c(a),e,v),u>=0&&(u+=r),u)}n.exports=m
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
