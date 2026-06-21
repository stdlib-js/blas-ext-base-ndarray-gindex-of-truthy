/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first truthy element in a one-dimensional ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-gindex-of-truthy
*
* @example
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var gindexOfTruthy = require( '@stdlib/blas-ext-base-ndarray-gindex-of-truthy' );
*
* var x = vector( [ 0.0, 0.0, 3.0, 0.0, 4.0 ], 'generic' );
*
* var idx = gindexOfTruthy( [ x ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
