/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '160';

const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const CullFaceFrontBack = 3;
const BasicShadowMap = 0;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const TwoPassDoubleSide = 2; // r149
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const ConstantColorFactor = 211;
const OneMinusConstantColorFactor = 212;
const ConstantAlphaFactor = 213;
const OneMinusConstantAlphaFactor = 214;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const AgXToneMapping = 6;
const AttachedBindMode = 'attached';
const DetachedBindMode = 'detached';

const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;

const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const RGB_BPTC_SIGNED_Format = 36494;
const RGB_BPTC_UNSIGNED_Format = 36495;
const RED_RGTC1_Format = 36283;
const SIGNED_RED_RGTC1_Format = 36284;
const RED_GREEN_RGTC2_Format = 36285;
const SIGNED_RED_GREEN_RGTC2_Format = 36286;
const LoopOnce = 2200;
const LoopRepeat = 2201;
const LoopPingPong = 2202;
const InterpolateDiscrete = 2300;
const InterpolateLinear = 2301;
const InterpolateSmooth = 2302;
const ZeroCurvatureEnding = 2400;
const ZeroSlopeEnding = 2401;
const WrapAroundEnding = 2402;
const NormalAnimationBlendMode = 2500;
const AdditiveAnimationBlendMode = 2501;
const TrianglesDrawMode = 0;
const TriangleStripDrawMode = 1;
const TriangleFanDrawMode = 2;
/** @deprecated Use LinearSRGBColorSpace or NoColorSpace in three.js r152+. */
const LinearEncoding = 3000;
/** @deprecated Use SRGBColorSpace in three.js r152+. */
const sRGBEncoding = 3001;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
const NoColorSpace = '';
const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';
const DisplayP3ColorSpace = 'display-p3';
const LinearDisplayP3ColorSpace = 'display-p3-linear';

const LinearTransfer = 'linear';
const SRGBTransfer = 'srgb';

const Rec709Primaries = 'rec709';
const P3Primaries = 'p3';

const ZeroStencilOp = 0;
const KeepStencilOp = 7680;
const ReplaceStencilOp = 7681;
const IncrementStencilOp = 7682;
const DecrementStencilOp = 7683;
const IncrementWrapStencilOp = 34055;
const DecrementWrapStencilOp = 34056;
const InvertStencilOp = 5386;

const NeverStencilFunc = 512;
const LessStencilFunc = 513;
const EqualStencilFunc = 514;
const LessEqualStencilFunc = 515;
const GreaterStencilFunc = 516;
const NotEqualStencilFunc = 517;
const GreaterEqualStencilFunc = 518;
const AlwaysStencilFunc = 519;

const NeverCompare = 512;
const LessCompare = 513;
const EqualCompare = 514;
const LessEqualCompare = 515;
const GreaterCompare = 516;
const NotEqualCompare = 517;
const GreaterEqualCompare = 518;
const AlwaysCompare = 519;

const StaticDrawUsage = 35044;
const DynamicDrawUsage = 35048;
const StreamDrawUsage = 35040;
const StaticReadUsage = 35045;
const DynamicReadUsage = 35049;
const StreamReadUsage = 35041;
const StaticCopyUsage = 35046;
const DynamicCopyUsage = 35050;
const StreamCopyUsage = 35042;

const GLSL1 = '100';
const GLSL3 = '300 es';

const _SRGBAFormat = 1035; // fallback for WebGL 1

const WebGLCoordinateSystem = 2000;
const WebGPUCoordinateSystem = 2001;

/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */

class EventDispatcher {

	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === - 1 ) {

			listeners[ type ].push( listener );

		}

	}

	hasEventListener( type, listener ) {

		if ( this._listeners === undefined ) return false;

		const listeners = this._listeners;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

	}

	removeEventListener( type, listener ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== - 1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	dispatchEvent( event ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

// compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function euclideanModulo( n, m ) {

	return ( ( n % m ) + m ) % m;

}

// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function inverseLerp( x, y, value ) {

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

// https://en.wikipedia.org/wiki/Linear_interpolation
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

// https://www.desmos.com/calculator/vcsjnyz7x4
function pingpong( x, length = 1 ) {

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

// http://en.wikipedia.org/wiki/Smoothstep
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

// Random integer from <low, high> interval
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

// Random float from <low, high> interval
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

// Random float from <-range/2, range/2> interval
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s;

	// Mulberry32 generator

	let t = _seed += 0x6D2B79F5;

	t = Math.imul( t ^ t >>> 15, t | 1 );

	t ^= t + Math.imul( t ^ t >>> 7, t | 61 );

	return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

}

function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

function radToDeg( radians ) {

	return radians * RAD2DEG;

}

function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

function setQuaternionFromProperEuler( q, a, b, c, order ) {

	// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

	// rotations are applied to the axes in the order specified by 'order'
	// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
	// angles are in radians

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}

function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return value / 4294967295.0;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int32Array:

			return Math.max( value / 2147483647.0, - 1.0 );

		case Int16Array:

			return Math.max( value / 32767.0, - 1.0 );

		case Int8Array:

			return Math.max( value / 127.0, - 1.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return Math.round( value * 4294967295.0 );

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int32Array:

			return Math.round( value * 2147483647.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

const MathUtils = {
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	generateUUID: generateUUID,
	clamp: clamp,
	euclideanModulo: euclideanModulo,
	mapLinear: mapLinear,
	inverseLerp: inverseLerp,
	lerp: lerp,
	damp: damp,
	pingpong: pingpong,
	smoothstep: smoothstep,
	smootherstep: smootherstep,
	randInt: randInt,
	randFloat: randFloat,
	randFloatSpread: randFloatSpread,
	seededRandom: seededRandom,
	degToRad: degToRad,
	radToDeg: radToDeg,
	isPowerOfTwo: isPowerOfTwo,
	ceilPowerOfTwo: ceilPowerOfTwo,
	floorPowerOfTwo: floorPowerOfTwo,
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	normalize: normalize,
	denormalize: denormalize
};

class Vector2 {

	constructor( x = 0, y = 0 ) {

		Vector2.prototype.isVector2 = true;

		this.x = x;
		this.y = y;

	}

	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	angle() {

		// computes the angle in radians with respect to the positive x-axis

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

class Matrix3 {

	constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		Matrix3.prototype.isMatrix3 = true;

		this.elements = [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

		}

	}

	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrix3Column( this, 0 );
		yAxis.setFromMatrix3Column( this, 1 );
		zAxis.setFromMatrix3Column( this, 2 );

		return this;

	}

	setFromMatrix4( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[ 8 ],
			me[ 1 ], me[ 5 ], me[ 9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	}

	invert() {

		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	}

	transpose() {

		let tmp;
		const m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	}

	getNormalMatrix( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).invert().transpose();

	}

	transposeIntoArray( r ) {

		const m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	}

	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

		const c = Math.cos( rotation );
		const s = Math.sin( rotation );

		this.set(
			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
			0, 0, 1
		);

		return this;

	}

	//

	scale( sx, sy ) {

		this.premultiply( _m3.makeScale( sx, sy ) );

		return this;

	}

	rotate( theta ) {

		this.premultiply( _m3.makeRotation( - theta ) );

		return this;

	}

	translate( tx, ty ) {

		this.premultiply( _m3.makeTranslation( tx, ty ) );

		return this;

	}

	// for 2D Transforms

	makeTranslation( x, y ) {

		if ( x.isVector2 ) {

			this.set(

				1, 0, x.x,
				0, 1, x.y,
				0, 0, 1

			);

		} else {

			this.set(

				1, 0, x,
				0, 1, y,
				0, 0, 1

			);

		}

		return this;

	}

	makeRotation( theta ) {

		// counterclockwise

		const c = Math.cos( theta );
		const s = Math.sin( theta );

		this.set(

			c, - s, 0,
			s, c, 0,
			0, 0, 1

		);

		return this;

	}

	makeScale( x, y ) {

		this.set(

			x, 0, 0,
			0, y, 0,
			0, 0, 1

		);

		return this;

	}

	//

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

	clone() {

		return new this.constructor().fromArray( this.elements );

	}

}

const _m3 = /*@__PURE__*/ new Matrix3();

function arrayNeedsUint32( array ) {

	// assumes larger values usually on last

	for ( let i = array.length - 1; i >= 0; -- i ) {

		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

	}

	return false;

}

const TYPED_ARRAYS = {
	Int8Array: Int8Array,
	Uint8Array: Uint8Array,
	Uint8ClampedArray: Uint8ClampedArray,
	Int16Array: Int16Array,
	Uint16Array: Uint16Array,
	Int32Array: Int32Array,
	Uint32Array: Uint32Array,
	Float32Array: Float32Array,
	Float64Array: Float64Array
};

function getTypedArray( type, buffer ) {

	return new TYPED_ARRAYS[ type ]( buffer );

}

function createElementNS( name ) {

	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

}

function createCanvasElement() {

	const canvas = createElementNS( 'canvas' );
	canvas.style.display = 'block';
	return canvas;

}

const _cache = {};

function warnOnce( message ) {

	if ( message in _cache ) return;

	_cache[ message ] = true;

	console.warn( message );

}

/**
 * Matrices converting P3 <-> Rec. 709 primaries, without gamut mapping
 * or clipping. Based on W3C specifications for sRGB and Display P3,
 * and ICC specifications for the D50 connection space. Values in/out
 * are _linear_ sRGB and _linear_ Display P3.
 *
 * Note that both sRGB and Display P3 use the sRGB transfer functions.
 *
 * Reference:
 * - http://www.russellcottrell.com/photo/matrixCalculator.htm
 */

const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /*@__PURE__*/ new Matrix3().set(
	0.8224621, 0.177538, 0.0,
	0.0331941, 0.9668058, 0.0,
	0.0170827, 0.0723974, 0.9105199,
);

const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /*@__PURE__*/ new Matrix3().set(
	1.2249401, - 0.2249404, 0.0,
	- 0.0420569, 1.0420571, 0.0,
	- 0.0196376, - 0.0786361, 1.0982735
);

/**
 * Defines supported color spaces by transfer function and primaries,
 * and provides conversions to/from the Linear-sRGB reference space.
 */
const COLOR_SPACES = {
	[ LinearSRGBColorSpace ]: {
		transfer: LinearTransfer,
		primaries: Rec709Primaries,
		toReference: ( color ) => color,
		fromReference: ( color ) => color,
	},
	[ SRGBColorSpace ]: {
		transfer: SRGBTransfer,
		primaries: Rec709Primaries,
		toReference: ( color ) => color.convertSRGBToLinear(),
		fromReference: ( color ) => color.convertLinearToSRGB(),
	},
	[ LinearDisplayP3ColorSpace ]: {
		transfer: LinearTransfer,
		primaries: P3Primaries,
		toReference: ( color ) => color.applyMatrix3( LINEAR_DISPLAY_P3_TO_LINEAR_SRGB ),
		fromReference: ( color ) => color.applyMatrix3( LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 ),
	},
	[ DisplayP3ColorSpace ]: {
		transfer: SRGBTransfer,
		primaries: P3Primaries,
		toReference: ( color ) => color.convertSRGBToLinear().applyMatrix3( LINEAR_DISPLAY_P3_TO_LINEAR_SRGB ),
		fromReference: ( color ) => color.applyMatrix3( LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 ).convertLinearToSRGB(),
	},
};

const SUPPORTED_WORKING_COLOR_SPACES = new Set( [ LinearSRGBColorSpace, LinearDisplayP3ColorSpace ] );

const ColorManagement = {

	enabled: true,

	_workingColorSpace: LinearSRGBColorSpace,

	get workingColorSpace() {

		return this._workingColorSpace;

	},

	set workingColorSpace( colorSpace ) {

		if ( ! SUPPORTED_WORKING_COLOR_SPACES.has( colorSpace ) ) {

			throw new Error( `Unsupported working color space, "${ colorSpace }".` );

		}

		this._workingColorSpace = colorSpace;

	},

	convert: function ( color, sourceColorSpace, targetColorSpace ) {

		if ( this.enabled === false || sourceColorSpace === targetColorSpace || ! sourceColorSpace || ! targetColorSpace ) {

			return color;

		}

		const sourceToReference = COLOR_SPACES[ sourceColorSpace ].toReference;
		const targetFromReference = COLOR_SPACES[ targetColorSpace ].fromReference;

		return targetFromReference( sourceToReference( color ) );

	},

	fromWorkingColorSpace: function ( color, targetColorSpace ) {

		return this.convert( color, this._workingColorSpace, targetColorSpace );

	},

	toWorkingColorSpace: function ( color, sourceColorSpace ) {

		return this.convert( color, sourceColorSpace, this._workingColorSpace );

	},

	getPrimaries: function ( colorSpace ) {

		return COLOR_SPACES[ colorSpace ].primaries;

	},

	getTransfer: function ( colorSpace ) {

		if ( colorSpace === NoColorSpace ) return LinearTransfer;

		return COLOR_SPACES[ colorSpace ].transfer;

	},

};


function SRGBToLinear( c ) {

	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

}

function LinearToSRGB( c ) {

	return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;

}

let _canvas;

class ImageUtils {

	static getDataURL( image ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement === 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		if ( canvas.width > 2048 || canvas.height > 2048 ) {

			console.warn( 'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image );

			return canvas.toDataURL( 'image/jpeg', 0.6 );

		} else {

			return canvas.toDataURL( 'image/png' );

		}

	}

	static sRGBToLinear( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			const canvas = createElementNS( 'canvas' );

			canvas.width = image.width;
			canvas.height = image.height;

			const context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height );

			const imageData = context.getImageData( 0, 0, image.width, image.height );
			const data = imageData.data;

			for ( let i = 0; i < data.length; i ++ ) {

				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

			}

			context.putImageData( imageData, 0, 0 );

			return canvas;

		} else if ( image.data ) {

			const data = image.data.slice( 0 );

			for ( let i = 0; i < data.length; i ++ ) {

				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

				} else {

					// assuming float

					data[ i ] = SRGBToLinear( data[ i ] );

				}

			}

			return {
				data: data,
				width: image.width,
				height: image.height
			};

		} else {

			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
			return image;

		}

	}

}

let _sourceId = 0;

class Source {

	constructor( data = null ) {

		this.isSource = true;

		Object.defineProperty( this, 'id', { value: _sourceId ++ } );

		this.uuid = generateUUID();

		this.data = data;

		this.version = 0;

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

			return meta.images[ this.uuid ];

		}

		const output = {
			uuid: this.uuid,
			url: ''
		};

		const data = this.data;

		if ( data !== null ) {

			let url;

			if ( Array.isArray( data ) ) {

				// cube texture

				url = [];

				for ( let i = 0, l = data.length; i < l; i ++ ) {

					if ( data[ i ].isDataTexture ) {

						url.push( serializeImage( data[ i ].image ) );

					} else {

						url.push( serializeImage( data[ i ] ) );

					}

				}

			} else {

				// texture

				url = serializeImage( data );

			}

			output.url = url;

		}

		if ( ! isRootObject ) {

			meta.images[ this.uuid ] = output;

		}

		return output;

	}

}

function serializeImage( image ) {

	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

		// default images

		return ImageUtils.getDataURL( image );

	} else {

		if ( image.data ) {

			// images of DataTexture

			return {
				data: Array.from( image.data ),
				width: image.width,
				height: image.height,
				type: image.data.constructor.name
			};

		} else {

			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
			return {};

		}

	}

}

let _textureId = 0;

class Texture extends EventDispatcher {

	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

		super();

		this.isTexture = true;

		Object.defineProperty( this, 'id', { value: _textureId ++ } );

		this.uuid = generateUUID();

		this.name = '';

		this.source = new Source( image );
		this.mipmaps = [];

		this.mapping = mapping;
		this.channel = 0;

		this.wrapS = wrapS;
		this.wrapT = wrapT;

		this.magFilter = magFilter;
		this.minFilter = minFilter;

		this.anisotropy = anisotropy;

		this.format = format;
		this.internalFormat = null;
		this.type = type;

		this.offset = new Vector2( 0, 0 );
		this.repeat = new Vector2( 1, 1 );
		this.center = new Vector2( 0, 0 );
		this.rotation = 0;

		this.matrixAutoUpdate = true;
		this.matrix = new Matrix3();

		this.generateMipmaps = true;
		this.premultiplyAlpha = false;
		this.flipY = true;
		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

		if ( typeof colorSpace === 'string' ) {

			this.colorSpace = colorSpace;

		} else { // @deprecated, r152

			warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
			this.colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

		}


		this.userData = {};

		this.version = 0;
		this.onUpdate = null;

		this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
		this.needsPMREMUpdate = false; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

	}

	get image() {

		return this.source.data;

	}

	set image( value = null ) {

		this.source.data = value;

	}

	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		this.needsUpdate = true;

		return this;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.6,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			image: this.source.toJSON( meta ).uuid,

			mapping: this.mapping,
			channel: this.channel,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	transformUv( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	set needsUpdate( value ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

	get encoding() { // @deprecated, r152

		warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
		return this.colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;

	}

	set encoding( encoding ) { // @deprecated, r152

		warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
		this.colorSpace = encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

	}

}

Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;

class Vector4 {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		Vector4.prototype.isVector4 = true;

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

	}

	get width() {

		return this.z;

	}

	set width( value ) {

		this.z = value;

	}

	get height() {

		return this.w;

	}

	set height( value ) {

		this.w = value;

	}

	set( x, y, z, w ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setW( w ) {

		this.w = w;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			case 3: this.w = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z, this.w );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = ( v.w !== undefined ) ? v.w : 1;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		this.w *= v.w;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;

		return this;

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z, w = this.w;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
		this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	setAxisAngleFromQuaternion( q ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

		// q is assumed to be normalized

		this.w = 2 * Math.acos( q.w );

		const s = Math.sqrt( 1 - q.w * q.w );

		if ( s < 0.0001 ) {

			this.x = 1;
			this.y = 0;
			this.z = 0;

		} else {

			this.x = q.x / s;
			this.y = q.y / s;
			this.z = q.z / s;

		}

		return this;

	}

	setAxisAngleFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		let angle, x, y, z; // variables for result
		const epsilon = 0.01,		// margin to allow for rounding errors
			epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

			te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		if ( ( Math.abs( m12 - m21 ) < epsilon ) &&
		     ( Math.abs( m13 - m31 ) < epsilon ) &&
		     ( Math.abs( m23 - m32 ) < epsilon ) ) {

			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms

			if ( ( Math.abs( m12 + m21 ) < epsilon2 ) &&
			     ( Math.abs( m13 + m31 ) < epsilon2 ) &&
			     ( Math.abs( m23 + m32 ) < epsilon2 ) &&
			     ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

				// this singularity is identity matrix so angle = 0

				this.set( 1, 0, 0, 0 );

				return this; // zero angle, arbitrary axis

			}

			// otherwise this singularity is angle = 180

			angle = Math.PI;

			const xx = ( m11 + 1 ) / 2;
			const yy = ( m22 + 1 ) / 2;
			const zz = ( m33 + 1 ) / 2;
			const xy = ( m12 + m21 ) / 4;
			const xz = ( m13 + m31 ) / 4;
			const yz = ( m23 + m32 ) / 4;

			if ( ( xx > yy ) && ( xx > zz ) ) {

				// m11 is the largest diagonal term

				if ( xx < epsilon ) {

					x = 0;
					y = 0.707106781;
					z = 0.707106781;

				} else {

					x = Math.sqrt( xx );
					y = xy / x;
					z = xz / x;

				}

			} else if ( yy > zz ) {

				// m22 is the largest diagonal term

				if ( yy < epsilon ) {

					x = 0.707106781;
					y = 0;
					z = 0.707106781;

				} else {

					y = Math.sqrt( yy );
					x = xy / y;
					z = yz / y;

				}

			} else {

				// m33 is the largest diagonal term so base result on this

				if ( zz < epsilon ) {

					x = 0.707106781;
					y = 0.707106781;
					z = 0;

				} else {

					z = Math.sqrt( zz );
					x = xz / z;
					y = yz / z;

				}

			}

			this.set( x, y, z, angle );

			return this; // return 180 deg rotation

		}

		// as we have reached here there are no singularities so we can handle normally

		let s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 ) +
			( m13 - m31 ) * ( m13 - m31 ) +
			( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

		if ( Math.abs( s ) < 0.001 ) s = 1;

		// prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = ( m32 - m23 ) / s;
		this.y = ( m13 - m31 ) / s;
		this.z = ( m21 - m12 ) / s;
		this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );
		this.w = Math.min( this.w, v.w );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );
		this.w = Math.max( this.w, v.w );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );
		this.w = Math.max( min.w, Math.min( max.w, this.w ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );
		this.w = Math.max( minVal, Math.min( maxVal, this.w ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );
		this.w = Math.floor( this.w );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );
		this.w = Math.ceil( this.w );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );
		this.w = Math.round( this.w );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );
		this.w = Math.trunc( this.w );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
		this.w = - this.w;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;
		this.w += ( v.w - this.w ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;
		this.w = v1.w + ( v2.w - v1.w ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];
		this.w = array[ offset + 3 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;
		array[ offset + 3 ] = this.w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );
		this.w = attribute.getW( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		this.w = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;

	}

}

/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
class RenderTarget extends EventDispatcher {

	constructor( width = 1, height = 1, options = {} ) {

		super();

		this.isRenderTarget = true;

		this.width = width;
		this.height = height;
		this.depth = 1;

		this.scissor = new Vector4( 0, 0, width, height );
		this.scissorTest = false;

		this.viewport = new Vector4( 0, 0, width, height );

		const image = { width: width, height: height, depth: 1 };

		if ( options.encoding !== undefined ) {

			// @deprecated, r152
			warnOnce( 'THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.' );
			options.colorSpace = options.encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

		}

		options = Object.assign( {
			generateMipmaps: false,
			internalFormat: null,
			minFilter: LinearFilter,
			depthBuffer: true,
			stencilBuffer: false,
			depthTexture: null,
			samples: 0
		}, options );

		this.texture = new Texture( image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace );
		this.texture.isRenderTargetTexture = true;

		this.texture.flipY = false;
		this.texture.generateMipmaps = options.generateMipmaps;
		this.texture.internalFormat = options.internalFormat;

		this.depthBuffer = options.depthBuffer;
		this.stencilBuffer = options.stencilBuffer;

		this.depthTexture = options.depthTexture;

		this.samples = options.samples;

	}

	setSize( width, height, depth = 1 ) {

		if ( this.width !== width || this.height !== height || this.depth !== depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			this.texture.image.width = width;
			this.texture.image.height = height;
			this.texture.image.depth = depth;

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.width = source.width;
		this.height = source.height;
		this.depth = source.depth;

		this.scissor.copy( source.scissor );
		this.scissorTest = source.scissorTest;

		this.viewport.copy( source.viewport );

		this.texture = source.texture.clone();
		this.texture.isRenderTargetTexture = true;

		// ensure image object is not shared, see #20328

		const image = Object.assign( {}, source.texture.image );
		this.texture.source = new Source( image );

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;

		if ( source.depthTexture !== null ) this.depthTexture = source.depthTexture.clone();

		this.samples = source.samples;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

class WebGLRenderTarget extends RenderTarget {

	constructor( width = 1, height = 1, options = {} ) {

		super( width, height, options );

		this.isWebGLRenderTarget = true;

	}

}

class DataArrayTexture extends Texture {

	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		super( null );

		this.isDataArrayTexture = true;

		this.image = { data, width, height, depth };

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.wrapR = ClampToEdgeWrapping;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

	}

}

class WebGLArrayRenderTarget extends WebGLRenderTarget {

	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		this.isWebGLArrayRenderTarget = true;

		this.depth = depth;

		this.texture = new DataArrayTexture( null, width, height, depth );

		this.texture.isRenderTargetTexture = true;

	}

}

class Data3DTexture extends Texture {

	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		// We're going to add .setXXX() methods for setting properties later.
		// Users can still set in DataTexture3D directly.
		//
		//	const texture = new THREE.DataTexture3D( data, width, height, depth );
		// 	texture.anisotropy = 16;
		//
		// See #14839

		super( null );

		this.isData3DTexture = true;

		this.image = { data, width, height, depth };

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.wrapR = ClampToEdgeWrapping;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

	}

}

class WebGL3DRenderTarget extends WebGLRenderTarget {

	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		this.isWebGL3DRenderTarget = true;

		this.depth = depth;

		this.texture = new Data3DTexture( null, width, height, depth );

		this.texture.isRenderTargetTexture = true;

	}

}

class WebGLMultipleRenderTargets extends WebGLRenderTarget {

	constructor( width = 1, height = 1, count = 1, options = {} ) {

		super( width, height, options );

		this.isWebGLMultipleRenderTargets = true;

		const texture = this.texture;

		this.texture = [];

		for ( let i = 0; i < count; i ++ ) {

			this.texture[ i ] = texture.clone();
			this.texture[ i ].isRenderTargetTexture = true;

		}

	}

	setSize( width, height, depth = 1 ) {

		if ( this.width !== width || this.height !== height || this.depth !== depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			for ( let i = 0, il = this.texture.length; i < il; i ++ ) {

				this.texture[ i ].image.width = width;
				this.texture[ i ].image.height = height;
				this.texture[ i ].image.depth = depth;

			}

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	}

	copy( source ) {

		this.dispose();

		this.width = source.width;
		this.height = source.height;
		this.depth = source.depth;

		this.scissor.copy( source.scissor );
		this.scissorTest = source.scissorTest;

		this.viewport.copy( source.viewport );

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;

		if ( source.depthTexture !== null ) this.depthTexture = source.depthTexture.clone();

		this.texture.length = 0;

		for ( let i = 0, il = source.texture.length; i < il; i ++ ) {

			this.texture[ i ] = source.texture[ i ].clone();
			this.texture[ i ].isRenderTargetTexture = true;

		}

		return this;

	}

}

class Quaternion {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : - 1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	setFromEuler( euler, update = true ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

		}

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromAxisAngle( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		// assumes axis is normalized

		const halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33;

		if ( trace > 0 ) {

			const s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	}

	setFromUnitVectors( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		let r = vFrom.dot( vTo ) + 1;

		if ( r < Number.EPSILON ) {

			// vFrom and vTo point in opposite directions

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	}

	angleTo( q ) {

		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), - 1, 1 ) ) );

	}

	rotateTowards( q, step ) {

		const angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		const t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	}

	identity() {

		return this.set( 0, 0, 0, 1 );

	}

	invert() {

		// quaternion is assumed to have unit length

		return this.conjugate();

	}

	conjugate() {

		this._x *= - 1;
		this._y *= - 1;
		this._z *= - 1;

		this._onChangeCallback();

		return this;

	}

	dot( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	}

	lengthSq() {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	}

	length() {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	}

	normalize() {

		let l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	}

	multiply( q ) {

		return this.multiplyQuaternions( this, q );

	}

	premultiply( q ) {

		return this.multiplyQuaternions( q, this );

	}

	multiplyQuaternions( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	}

	slerp( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		const x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize(); // normalize calls _onChangeCallback()

			return this;

		}

		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	}

	slerpQuaternions( qa, qb, t ) {

		return this.copy( qa ).slerp( qb, t );

	}

	random() {

		// Derived from http://planning.cs.uiuc.edu/node198.html
		// Note, this source uses w, x, y, z ordering,
		// so we swap the order below.

		const u1 = Math.random();
		const sqrt1u1 = Math.sqrt( 1 - u1 );
		const sqrtu1 = Math.sqrt( u1 );

		const u2 = 2 * Math.PI * Math.random();

		const u3 = 2 * Math.PI * Math.random();

		return this.set(
			sqrt1u1 * Math.cos( u2 ),
			sqrtu1 * Math.sin( u3 ),
			sqrtu1 * Math.cos( u3 ),
			sqrt1u1 * Math.sin( u2 ),
		);

	}

	equals( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	}

	fromArray( array, offset = 0 ) {

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		this._onChangeCallback();

		return this;

	}

	toJSON() {

		return this.toArray();

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;

	}

}

class Vector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		Vector3.prototype.isVector3 = true;

		this.x = x;
		this.y = y;
		this.z = z;

	}

	set( x, y, z ) {

		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	applyEuler( euler ) {

		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

	}

	applyAxisAngle( axis, angle ) {

		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	}

	applyNormalMatrix( m ) {

		return this.applyMatrix3( m ).normalize();

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	}

	applyQuaternion( q ) {

		// quaternion q is assumed to have unit length

		const vx = this.x, vy = this.y, vz = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// t = 2 * cross( q.xyz, v );
		const tx = 2 * ( qy * vz - qz * vy );
		const ty = 2 * ( qz * vx - qx * vz );
		const tz = 2 * ( qx * vy - qy * vx );

		// v + q.w * t + cross( q.xyz, t );
		this.x = vx + qw * tx + qy * tz - qz * ty;
		this.y = vy + qw * ty + qz * tx - qx * tz;
		this.z = vz + qw * tz + qx * ty - qy * tx;

		return this;

	}

	project( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	}

	unproject( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	}

	transformDirection( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	// TODO lengthSquared?

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	cross( v ) {

		return this.crossVectors( this, v );

	}

	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	projectOnPlane( planeNormal ) {

		_vector$c.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector$c );

	}

	reflect( normal ) {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}

	setFromSpherical( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	}

	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}

	setFromCylindrical( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	}

	setFromCylindricalCoords( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	}

	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	}

	setFromMatrixScale( m ) {

		const sx = this.setFromMatrixColumn( m, 0 ).length();
		const sy = this.setFromMatrixColumn( m, 1 ).length();
		const sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	}

	setFromMatrixColumn( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	}

	setFromMatrix3Column( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	}

	setFromEuler( e ) {

		this.x = e._x;
		this.y = e._y;
		this.z = e._z;

		return this;

	}

	setFromColor( c ) {

		this.x = c.r;
		this.y = c.g;
		this.z = c.b;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();

		return this;

	}

	randomDirection() {

		// Derived from https://mathworld.wolfram.com/SpherePointPicking.html

		const u = ( Math.random() - 0.5 ) * 2;
		const t = Math.random() * Math.PI * 2;
		const f = Math.sqrt( 1 - u ** 2 );

		this.x = f * Math.cos( t );
		this.y = f * Math.sin( t );
		this.z = u;

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;

	}

}

const _vector$c = /*@__PURE__*/ new Vector3();
const _quaternion$4 = /*@__PURE__*/ new Quaternion();

class Box3 {

	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

		this.isBox3 = true;

		this.min = min;
		this.max = max;

	}

	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	setFromArray( array ) {

		this.makeEmpty();

		for ( let i = 0, il = array.length; i < il; i += 3 ) {

			this.expandByPoint( _vector$b.fromArray( array, i ) );

		}

		return this;

	}

	setFromBufferAttribute( attribute ) {

		this.makeEmpty();

		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

			this.expandByPoint( _vector$b.fromBufferAttribute( attribute, i ) );

		}

		return this;

	}

	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	setFromCenterAndSize( center, size ) {

		const halfSize = _vector$b.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	setFromObject( object, precise = false ) {

		this.makeEmpty();

		return this.expandByObject( object, precise );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	getCenter( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	getSize( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	expandByObject( object, precise = false ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		const geometry = object.geometry;

		if ( geometry !== undefined ) {

			const positionAttribute = geometry.getAttribute( 'position' );

			// precise AABB computation based on vertex data requires at least a position attribute.
			// instancing isn't supported so far and uses the normal (conservative) code path.

			if ( precise === true && positionAttribute !== undefined && object.isInstancedMesh !== true ) {

				for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

					if ( object.isMesh === true ) {

						object.getVertexPosition( i, _vector$b );

					} else {

						_vector$b.fromBufferAttribute( positionAttribute, i );

					}

					_vector$b.applyMatrix4( object.matrixWorld );
					this.expandByPoint( _vector$b );

				}

			} else {

				if ( object.boundingBox !== undefined ) {

					// object-level bounding box

					if ( object.boundingBox === null ) {

						object.computeBoundingBox();

					}

					_box$4.copy( object.boundingBox );


				} else {

					// geometry-level bounding box

					if ( geometry.boundingBox === null ) {

						geometry.computeBoundingBox();

					}

					_box$4.copy( geometry.boundingBox );

				}

				_box$4.applyMatrix4( object.matrixWorld );

				this.union( _box$4 );

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ], precise );

		}

		return this;

	}

	containsPoint( point ) {

		return point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ||
			point.z < this.min.z || point.z > this.max.z ? false : true;

	}

	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x ||
			box.max.y < this.min.y || box.min.y > this.max.y ||
			box.max.z < this.min.z || box.min.z > this.max.z ? false : true;

	}

	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector$b );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector$b.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0$2.subVectors( triangle.a, _center );
		_v1$7.subVectors( triangle.b, _center );
		_v2$4.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1$7, _v0$2 );
		_f1.subVectors( _v2$4, _v1$7 );
		_f2.subVectors( _v0$2, _v2$4 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents );

	}

	clampPoint( point, target ) {

		return target.copy( point ).clamp( this.min, this.max );

	}

	distanceToPoint( point ) {

		return this.clampPoint( point, _vector$b ).distanceTo( point );

	}

	getBoundingSphere( target ) {

		if ( this.isEmpty() ) {

			target.makeEmpty();

		} else {

			this.getCenter( target.center );

			target.radius = this.getSize( _vector$b ).length() * 0.5;

		}

		return target;

	}

	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector$b = /*@__PURE__*/ new Vector3();

const _box$4 = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0$2 = /*@__PURE__*/ new Vector3();
const _v1$7 = /*@__PURE__*/ new Vector3();
const _v2$4 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the separating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the separating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;

		}

	}

	return true;

}

const _box$3 = /*@__PURE__*/ new Box3();
const _v1$6 = /*@__PURE__*/ new Vector3();
const _v2$3 = /*@__PURE__*/ new Vector3();

class Sphere {

	constructor( center = new Vector3(), radius = - 1 ) {

		this.isSphere = true;

		this.center = center;
		this.radius = radius;

	}

	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$3.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	isEmpty() {

		return ( this.radius < 0 );

	}

	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = - 1;

		return this;

	}

	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	getBoundingBox( target ) {

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	expandByPoint( point ) {

		if ( this.isEmpty() ) {

			this.center.copy( point );

			this.radius = 0;

			return this;

		}

		_v1$6.subVectors( point, this.center );

		const lengthSq = _v1$6.lengthSq();

		if ( lengthSq > ( this.radius * this.radius ) ) {

			// calculate the minimal sphere

			const length = Math.sqrt( lengthSq );

			const delta = ( length - this.radius ) * 0.5;

			this.center.addScaledVector( _v1$6, delta / length );

			this.radius += delta;

		}

		return this;

	}

	union( sphere ) {

		if ( sphere.isEmpty() ) {

			return this;

		}

		if ( this.isEmpty() ) {

			this.copy( sphere );

			return this;

		}

		if ( this.center.equals( sphere.center ) === true ) {

			 this.radius = Math.max( this.radius, sphere.radius );

		} else {

			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

		}

		return this;

	}

	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _vector$a = /*@__PURE__*/ new Vector3();
const _segCenter = /*@__PURE__*/ new Vector3();
const _segDir = /*@__PURE__*/ new Vector3();
const _diff = /*@__PURE__*/ new Vector3();

const _edge1 = /*@__PURE__*/ new Vector3();
const _edge2 = /*@__PURE__*/ new Vector3();
const _normal$1 = /*@__PURE__*/ new Vector3();

class Ray {

	constructor( origin = new Vector3(), direction = new Vector3( 0, 0, - 1 ) ) {

		this.origin = origin;
		this.direction = direction;

	}

	set( origin, direction ) {

		this.origin.copy( origin );
		this.direction.copy( direction );

		return this;

	}

	copy( ray ) {

		this.origin.copy( ray.origin );
		this.direction.copy( ray.direction );

		return this;

	}

	at( t, target ) {

		return target.copy( this.origin ).addScaledVector( this.direction, t );

	}

	lookAt( v ) {

		this.direction.copy( v ).sub( this.origin ).normalize();

		return this;

	}

	recast( t ) {

		this.origin.copy( this.at( t, _vector$a ) );

		return this;

	}

	closestPointToPoint( point, target ) {

		target.subVectors( point, this.origin );

		const directionDistance = target.dot( this.direction );

		if ( directionDistance < 0 ) {

			return target.copy( this.origin );

		}

		return target.copy( this.origin ).addScaledVector( this.direction, directionDistance );

	}

	distanceToPoint( point ) {

		return Math.sqrt( this.distanceSqToPoint( point ) );

	}

	distanceSqToPoint( point ) {

		const directionDistance = _vector$a.subVectors( point, this.origin ).dot( this.direction );

		// point behind the ray

		if ( directionDistance < 0 ) {

			return this.origin.distanceToSquared( point );

		}

		_vector$a.copy( this.origin ).addScaledVector( this.direction, directionDistance );

		return _vector$a.distanceToSquared( point );

	}

	distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
		// It returns the min distance between the ray and the segment
		// defined by v0 and v1
		// It can also set two optional targets :
		// - The closest point on the ray
		// - The closest point on the segment

		_segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
		_segDir.copy( v1 ).sub( v0 ).normalize();
		_diff.copy( this.origin ).sub( _segCenter );

		const segExtent = v0.distanceTo( v1 ) * 0.5;
		const a01 = - this.direction.dot( _segDir );
		const b0 = _diff.dot( this.direction );
		const b1 = - _diff.dot( _segDir );
		const c = _diff.lengthSq();
		const det = Math.abs( 1 - a01 * a01 );
		let s0, s1, sqrDist, extDet;

		if ( det > 0 ) {

			// The ray and segment are not parallel.

			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;

			if ( s0 >= 0 ) {

				if ( s1 >= - extDet ) {

					if ( s1 <= extDet ) {

						// region 0
						// Minimum at interior points of ray and segment.

						const invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

					} else {

						// region 1

						s1 = segExtent;
						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				} else {

					// region 5

					s1 = - segExtent;
					s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			} else {

				if ( s1 <= - extDet ) {

					// region 4

					s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				} else if ( s1 <= extDet ) {

					// region 3

					s0 = 0;
					s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = s1 * ( s1 + 2 * b1 ) + c;

				} else {

					// region 2

					s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			}

		} else {

			// Ray and segment are parallel.

			s1 = ( a01 > 0 ) ? - segExtent : segExtent;
			s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
			sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

		}

		if ( optionalPointOnRay ) {

			optionalPointOnRay.copy( this.origin ).addScaledVector( this.direction, s0 );

		}

		if ( optionalPointOnSegment ) {

			optionalPointOnSegment.copy( _segCenter ).addScaledVector( _segDir, s1 );

		}

		return sqrDist;

	}

	intersectSphere( sphere, target ) {

		_vector$a.subVectors( sphere.center, this.origin );
		const tca = _vector$a.dot( this.direction );
		const d2 = _vector$a.dot( _vector$a ) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;

		if ( d2 > radius2 ) return null;

		const thc = Math.sqrt( radius2 - d2 );

		// t0 = first intersect point - entrance on front of sphere
		const t0 = tca - thc;

		// t1 = second intersect point - exit point on back of sphere
		const t1 = tca + thc;

		// test to see if t1 is behind the ray - if so, return null
		if ( t1 < 0 ) return null;

		// test to see if t0 is behind the ray:
		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
		// in order to always return an intersect point that is in front of the ray.
		if ( t0 < 0 ) return this.at( t1, target );

		// else t0 is in front of the ray, so return the first collision point scaled by t0
		return this.at( t0, target );

	}

	intersectsSphere( sphere ) {

		return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	distanceToPlane( plane ) {

		const denominator = plane.normal.dot( this.direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( plane.distanceToPoint( this.origin ) === 0 ) {

				return 0;

			}

			// Null is preferable to undefined since undefined means.... it is undefined

			return null;

		}

		const t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

		// Return if the ray never intersects the plane

		return t >= 0 ? t : null;

	}

	intersectPlane( plane, target ) {

		const t = this.distanceToPlane( plane );

		if ( t === null ) {

			return null;

		}

		return this.at( t, target );

	}

	intersectsPlane( plane ) {

		// check if the ray lies on the plane first

		const distToPoint = plane.distanceToPoint( this.origin );

		if ( distToPoint === 0 ) {

			return true;

		}

		const denominator = plane.normal.dot( this.direction );

		if ( denominator * distToPoint < 0 ) {

			return true;

		}

		// ray origin is behind the plane (and is pointing behind it)

		return false;

	}

	intersectBox( box, target ) {

		let tmin, tmax, tymin, tymax, tzmin, tzmax;

		const invdirx = 1 / this.direction.x,
			invdiry = 1 / this.direction.y,
			invdirz = 1 / this.direction.z;

		const origin = this.origin;

		if ( invdirx >= 0 ) {

			tmin = ( box.min.x - origin.x ) * invdirx;
			tmax = ( box.max.x - origin.x ) * invdirx;

		} else {

			tmin = ( box.max.x - origin.x ) * invdirx;
			tmax = ( box.min.x - origin.x ) * invdirx;

		}

		if ( invdiry >= 0 ) {

			tymin = ( box.min.y - origin.y ) * invdiry;
			tymax = ( box.max.y - origin.y ) * invdiry;

		} else {

			tymin = ( box.max.y - origin.y ) * invdiry;
			tymax = ( box.min.y - origin.y ) * invdiry;

		}

		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

		if ( tymin > tmin || isNaN( tmin ) ) tmin = tymin;

		if ( tymax < tmax || isNaN( tmax ) ) tmax = tymax;

		if ( invdirz >= 0 ) {

			tzmin = ( box.min.z - origin.z ) * invdirz;
			tzmax = ( box.max.z - origin.z ) * invdirz;

		} else {

			tzmin = ( box.max.z - origin.z ) * invdirz;
			tzmax = ( box.min.z - origin.z ) * invdirz;

		}

		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

		//return point closest to the ray (positive side)

		if ( tmax < 0 ) return null;

		return this.at( tmin >= 0 ? tmin : tmax, target );

	}

	intersectsBox( box ) {

		return this.intersectBox( box, _vector$a ) !== null;

	}

	intersectTriangle( a, b, c, backfaceCulling, target ) {

		// Compute the offset origin, edges, and normal.

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

		_edge1.subVectors( b, a );
		_edge2.subVectors( c, a );
		_normal$1.crossVectors( _edge1, _edge2 );

		// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
		//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
		//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
		//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
		let DdN = this.direction.dot( _normal$1 );
		let sign;

		if ( DdN > 0 ) {

			if ( backfaceCulling ) return null;
			sign = 1;

		} else if ( DdN < 0 ) {

			sign = - 1;
			DdN = - DdN;

		} else {

			return null;

		}

		_diff.subVectors( this.origin, a );
		const DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

		// b1 < 0, no intersection
		if ( DdQxE2 < 0 ) {

			return null;

		}

		const DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

		// b2 < 0, no intersection
		if ( DdE1xQ < 0 ) {

			return null;

		}

		// b1+b2 > 1, no intersection
		if ( DdQxE2 + DdE1xQ > DdN ) {

			return null;

		}

		// Line intersects triangle, check if ray does.
		const QdN = - sign * _diff.dot( _normal$1 );

		// t < 0, no intersection
		if ( QdN < 0 ) {

			return null;

		}

		// Ray intersects triangle.
		return this.at( QdN / DdN, target );

	}

	applyMatrix4( matrix4 ) {

		this.origin.applyMatrix4( matrix4 );
		this.direction.transformDirection( matrix4 );

		return this;

	}

	equals( ray ) {

		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

class Matrix4 {

	constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		Matrix4.prototype.isMatrix4 = true;

		this.elements = [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

		}

	}

	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	clone() {

		return new Matrix4().fromArray( this.elements );

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	}

	copyPosition( m ) {

		const te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	}

	setFromMatrix3( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1

		);

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	}

	makeBasis( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	}

	extractRotation( m ) {

		// this method does not support reflection matrices

		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromEuler( euler ) {

		const te = this.elements;

		const x = euler.x, y = euler.y, z = euler.z;
		const a = Math.cos( x ), b = Math.sin( x );
		const c = Math.cos( y ), d = Math.sin( y );
		const e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromQuaternion( q ) {

		return this.compose( _zero, q, _one );

	}

	lookAt( eye, target, up ) {

		const te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	}

	transpose() {

		const te = this.elements;
		let tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	}

	setPosition( x, y, z ) {

		const te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	}

	invert() {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	}

	scale( v ) {

		const te = this.elements;
		const x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	}

	getMaxScaleOnAxis() {

		const te = this.elements;

		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	}

	makeTranslation( x, y, z ) {

		if ( x.isVector3 ) {

			this.set(

				1, 0, 0, x.x,
				0, 1, 0, x.y,
				0, 0, 1, x.z,
				0, 0, 0, 1

			);

		} else {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

		}

		return this;

	}

	makeRotationX( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationY( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	}

	makeRotationZ( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationAxis( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		const c = Math.cos( angle );
		const s = Math.sin( angle );
		const t = 1 - c;
		const x = axis.x, y = axis.y, z = axis.z;
		const tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeScale( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeShear( xy, xz, yx, yz, zx, zy ) {

		this.set(

			1, yx, zx, 0,
			xy, 1, zy, 0,
			xz, yz, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	compose( position, quaternion, scale ) {

		const te = this.elements;

		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	}

	decompose( position, quaternion, scale ) {

		const te = this.elements;

		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		const det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1$2.copy( this );

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;

		_m1$2.elements[ 0 ] *= invSX;
		_m1$2.elements[ 1 ] *= invSX;
		_m1$2.elements[ 2 ] *= invSX;

		_m1$2.elements[ 4 ] *= invSY;
		_m1$2.elements[ 5 ] *= invSY;
		_m1$2.elements[ 6 ] *= invSY;

		_m1$2.elements[ 8 ] *= invSZ;
		_m1$2.elements[ 9 ] *= invSZ;
		_m1$2.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1$2 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	}

	makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			c = - ( far + near ) / ( far - near );
			d = ( - 2 * far * near ) / ( far - near );

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			c = - far / ( far - near );
			d = ( - far * near ) / ( far - near );

		} else {

			throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

		return this;

	}

	makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const w = 1.0 / ( right - left );
		const h = 1.0 / ( top - bottom );
		const p = 1.0 / ( far - near );

		const x = ( right + left ) * w;
		const y = ( top + bottom ) * h;

		let z, zInv;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			z = ( far + near ) * p;
			zInv = - 2 * p;

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			z = near * p;
			zInv = - 1 * p;

		} else {

			throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = 2 * w;	te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = - x;
		te[ 1 ] = 0; 		te[ 5 ] = 2 * h;	te[ 9 ] = 0; 		te[ 13 ] = - y;
		te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = zInv;	te[ 14 ] = - z;
		te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

		return this;

	}

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

}

const _v1$5 = /*@__PURE__*/ new Vector3();
const _m1$2 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
const _x = /*@__PURE__*/ new Vector3();
const _y = /*@__PURE__*/ new Vector3();
const _z = /*@__PURE__*/ new Vector3();

const _matrix$1 = /*@__PURE__*/ new Matrix4();
const _quaternion$3 = /*@__PURE__*/ new Quaternion();

class Euler {

	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

		this.isEuler = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get order() {

		return this._order;

	}

	set order( value ) {

		this._order = value;
		this._onChangeCallback();

	}

	set( x, y, z, order = this._order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._order );

	}

	copy( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m, order = this._order, update = true ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements;
		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		switch ( order ) {

			case 'XYZ':

				this._y = Math.asin( clamp( m13, - 1, 1 ) );

				if ( Math.abs( m13 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

				break;

			case 'YXZ':

				this._x = Math.asin( - clamp( m23, - 1, 1 ) );

				if ( Math.abs( m23 ) < 0.9999999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

				break;

			case 'ZXY':

				this._x = Math.asin( clamp( m32, - 1, 1 ) );

				if ( Math.abs( m32 ) < 0.9999999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

				break;

			case 'ZYX':

				this._y = Math.asin( - clamp( m31, - 1, 1 ) );

				if ( Math.abs( m31 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

				break;

			case 'YZX':

				this._z = Math.asin( clamp( m21, - 1, 1 ) );

				if ( Math.abs( m21 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

				break;

			case 'XZY':

				this._z = Math.asin( - clamp( m12, - 1, 1 ) );

				if ( Math.abs( m12 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

				break;

			default:

				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

		}

		this._order = order;

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromQuaternion( q, order, update ) {

		_matrix$1.makeRotationFromQuaternion( q );

		return this.setFromRotationMatrix( _matrix$1, order, update );

	}

	setFromVector3( v, order = this._order ) {

		return this.set( v.x, v.y, v.z, order );

	}

	reorder( newOrder ) {

		// WARNING: this discards revolution information -bhouston

		_quaternion$3.setFromEuler( this );

		return this.setFromQuaternion( _quaternion$3, newOrder );

	}

	equals( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	}

	fromArray( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;

	}

}

Euler.DEFAULT_ORDER = 'XYZ';

class Layers {

	constructor() {

		this.mask = 1 | 0;

	}

	set( channel ) {

		this.mask = ( 1 << channel | 0 ) >>> 0;

	}

	enable( channel ) {

		this.mask |= 1 << channel | 0;

	}

	enableAll() {

		this.mask = 0xffffffff | 0;

	}

	toggle( channel ) {

		this.mask ^= 1 << channel | 0;

	}

	disable( channel ) {

		this.mask &= ~ ( 1 << channel | 0 );

	}

	disableAll() {

		this.mask = 0;

	}

	test( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

	isEnabled( channel ) {

		return ( this.mask & ( 1 << channel | 0 ) ) !== 0;

	}

}

let _object3DId = 0;

const _v1$4 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1$1 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position$3 = /*@__PURE__*/ new Vector3();
const _scale$2 = /*@__PURE__*/ new Vector3();
const _quaternion$2 = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

const _addedEvent = { type: 'added' };
const _removedEvent = { type: 'removed' };

class Object3D extends EventDispatcher {

	constructor() {

		super();

		this.isObject3D = true;

		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'Object3D';

		this.parent = null;
		this.children = [];

		this.up = Object3D.DEFAULT_UP.clone();

		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3( 1, 1, 1 );

		function onRotationChange() {

			quaternion.setFromEuler( rotation, false );

		}

		function onQuaternionChange() {

			rotation.setFromQuaternion( quaternion, undefined, false );

		}

		rotation._onChange( onRotationChange );
		quaternion._onChange( onQuaternionChange );

		Object.defineProperties( this, {
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			modelViewMatrix: {
				value: new Matrix4()
			},
			normalMatrix: {
				value: new Matrix3()
			}
		} );

		this.matrix = new Matrix4();
		this.matrixWorld = new Matrix4();

		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer
		this.matrixWorldNeedsUpdate = false;

		this.layers = new Layers();
		this.visible = true;

		this.castShadow = false;
		this.receiveShadow = false;

		this.frustumCulled = true;
		this.renderOrder = 0;

		this.animations = [];

		this.userData = {};

	}

	onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	applyMatrix4( matrix ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	}

	applyQuaternion( q ) {

		this.quaternion.premultiply( q );

		return this;

	}

	setRotationFromAxisAngle( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	}

	setRotationFromEuler( euler ) {

		this.quaternion.setFromEuler( euler, true );

	}

	setRotationFromMatrix( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	}

	setRotationFromQuaternion( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	}

	rotateOnAxis( axis, angle ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.multiply( _q1 );

		return this;

	}

	rotateOnWorldAxis( axis, angle ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.premultiply( _q1 );

		return this;

	}

	rotateX( angle ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	rotateY( angle ) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	rotateZ( angle ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	translateOnAxis( axis, distance ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

		this.position.add( _v1$4.multiplyScalar( distance ) );

		return this;

	}

	translateX( distance ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	translateY( distance ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	translateZ( distance ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	localToWorld( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	worldToLocal( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1$1.copy( this.matrixWorld ).invert() );

	}

	lookAt( x, y, z ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		if ( x.isVector3 ) {

			_target.copy( x );

		} else {

			_target.set( x, y, z );

		}

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position$3.setFromMatrixPosition( this.matrixWorld );

		if ( this.isCamera || this.isLight ) {

			_m1$1.lookAt( _position$3, _target, this.up );

		} else {

			_m1$1.lookAt( _target, _position$3, this.up );

		}

		this.quaternion.setFromRotationMatrix( _m1$1 );

		if ( parent ) {

			_m1$1.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1$1 );
			this.quaternion.premultiply( _q1.invert() );

		}

	}

	add( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( object && object.isObject3D ) {

			if ( object.parent !== null ) {

				object.parent.remove( object );

			}

			object.parent = this;
			this.children.push( object );

			object.dispatchEvent( _addedEvent );

		} else {

			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

		}

		return this;

	}

	remove( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		const index = this.children.indexOf( object );

		if ( index !== - 1 ) {

			object.parent = null;
			this.children.splice( index, 1 );

			object.dispatchEvent( _removedEvent );

		}

		return this;

	}

	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	clear() {

		return this.remove( ... this.children );

	}

	attach( object ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1$1.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1$1.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1$1 );

		this.add( object );

		object.updateWorldMatrix( false, true );

		return this;

	}

	getObjectById( id ) {

		return this.getObjectByProperty( 'id', id );

	}

	getObjectByName( name ) {

		return this.getObjectByProperty( 'name', name );

	}

	getObjectByProperty( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const child = this.children[ i ];
			const object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}

	getObjectsByProperty( name, value, result = [] ) {

		if ( this[ name ] === value ) result.push( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].getObjectsByProperty( name, value, result );

		}

		return result;

	}

	getWorldPosition( target ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	getWorldQuaternion( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, target, _scale$2 );

		return target;

	}

	getWorldScale( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

		return target;

	}

	getWorldDirection( target ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	raycast( /* raycaster, intersects */ ) {}

	traverse( callback ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	traverseVisible( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	traverseAncestors( callback ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	updateMatrix() {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	}

	updateMatrixWorld( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// update children

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			if ( child.matrixWorldAutoUpdate === true || force === true ) {

				child.updateMatrixWorld( force );

			}

		}

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.parent === null ) {

			this.matrixWorld.copy( this.matrix );

		} else {

			this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

		}

		// update children

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				if ( child.matrixWorldAutoUpdate === true ) {

					child.updateWorldMatrix( false, true );

				}

			}

		}

	}

	toJSON( meta ) {

		// meta is a string when called from JSON.stringify
		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		const output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			};

			output.metadata = {
				version: 4.6,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		const object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;
		if ( this.frustumCulled === false ) object.frustumCulled = false;
		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

		object.layers = this.layers.mask;
		object.matrix = this.matrix.toArray();
		object.up = this.up.toArray();

		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

		// object specific properties

		if ( this.isInstancedMesh ) {

			object.type = 'InstancedMesh';
			object.count = this.count;
			object.instanceMatrix = this.instanceMatrix.toJSON();
			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

		}

		if ( this.isBatchedMesh ) {

			object.type = 'BatchedMesh';
			object.perObjectFrustumCulled = this.perObjectFrustumCulled;
			object.sortObjects = this.sortObjects;

			object.drawRanges = this._drawRanges;
			object.reservedRanges = this._reservedRanges;

			object.visibility = this._visibility;
			object.active = this._active;
			object.bounds = this._bounds.map( bound => ( {
				boxInitialized: bound.boxInitialized,
				boxMin: bound.box.min.toArray(),
				boxMax: bound.box.max.toArray(),

				sphereInitialized: bound.sphereInitialized,
				sphereRadius: bound.sphere.radius,
				sphereCenter: bound.sphere.center.toArray()
			} ) );

			object.maxGeometryCount = this._maxGeometryCount;
			object.maxVertexCount = this._maxVertexCount;
			object.maxIndexCount = this._maxIndexCount;

			object.geometryInitialized = this._geometryInitialized;
			object.geometryCount = this._geometryCount;

			object.matricesTexture = this._matricesTexture.toJSON( meta );

			if ( this.boundingSphere !== null ) {

				object.boundingSphere = {
					center: object.boundingSphere.center.toArray(),
					radius: object.boundingSphere.radius
				};

			}

			if ( this.boundingBox !== null ) {

				object.boundingBox = {
					min: object.boundingBox.min.toArray(),
					max: object.boundingBox.max.toArray()
				};

			}

		}

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.isScene ) {

			if ( this.background ) {

				if ( this.background.isColor ) {

					object.background = this.background.toJSON();

				} else if ( this.background.isTexture ) {

					object.background = this.background.toJSON( meta ).uuid;

				}

			}

			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

				object.environment = this.environment.toJSON( meta ).uuid;

			}

		} else if ( this.isMesh || this.isLine || this.isPoints ) {

			object.geometry = serialize( meta.geometries, this.geometry );

			const parameters = this.geometry.parameters;

			if ( parameters !== undefined && parameters.shapes !== undefined ) {

				const shapes = parameters.shapes;

				if ( Array.isArray( shapes ) ) {

					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

						const shape = shapes[ i ];

						serialize( meta.shapes, shape );

					}

				} else {

					serialize( meta.shapes, shapes );

				}

			}

		}

		if ( this.isSkinnedMesh ) {

			object.bindMode = this.bindMode;
			object.bindMatrix = this.bindMatrix.toArray();

			if ( this.skeleton !== undefined ) {

				serialize( meta.skeletons, this.skeleton );

				object.skeleton = this.skeleton.uuid;

			}

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				const uuids = [];

				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( let i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		//

		if ( this.animations.length > 0 ) {

			object.animations = [];

			for ( let i = 0; i < this.animations.length; i ++ ) {

				const animation = this.animations[ i ];

				object.animations.push( serialize( meta.animations, animation ) );

			}

		}

		if ( isRootObject ) {

			const geometries = extractFromCache( meta.geometries );
			const materials = extractFromCache( meta.materials );
			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );
			const shapes = extractFromCache( meta.shapes );
			const skeletons = extractFromCache( meta.skeletons );
			const animations = extractFromCache( meta.animations );
			const nodes = extractFromCache( meta.nodes );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;
			if ( shapes.length > 0 ) output.shapes = shapes;
			if ( skeletons.length > 0 ) output.skeletons = skeletons;
			if ( animations.length > 0 ) output.animations = animations;
			if ( nodes.length > 0 ) output.nodes = nodes;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			const values = [];
			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

	}

	clone( recursive ) {

		return new this.constructor().copy( this, recursive );

	}

	copy( source, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.rotation.order = source.rotation.order;
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.animations = source.animations.slice();

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

}

Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

const _v0$1 = /*@__PURE__*/ new Vector3();
const _v1$3 = /*@__PURE__*/ new Vector3();
const _v2$2 = /*@__PURE__*/ new Vector3();
const _v3$1 = /*@__PURE__*/ new Vector3();

const _vab = /*@__PURE__*/ new Vector3();
const _vac = /*@__PURE__*/ new Vector3();
const _vbc = /*@__PURE__*/ new Vector3();
const _vap = /*@__PURE__*/ new Vector3();
const _vbp = /*@__PURE__*/ new Vector3();
const _vcp = /*@__PURE__*/ new Vector3();

let warnedGetUV = false;

class Triangle {

	constructor( a = new Vector3(), b = new Vector3(), c = new Vector3() ) {

		this.a = a;
		this.b = b;
		this.c = c;

	}

	static getNormal( a, b, c, target ) {

		target.subVectors( c, b );
		_v0$1.subVectors( a, b );
		target.cross( _v0$1 );

		const targetLengthSq = target.lengthSq();
		if ( targetLengthSq > 0 ) {

			return target.multiplyScalar( 1 / Math.sqrt( targetLengthSq ) );

		}

		return target.set( 0, 0, 0 );

	}

	// static/instance method to calculate barycentric coordinates
	// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
	static getBarycoord( point, a, b, c, target ) {

		_v0$1.subVectors( c, a );
		_v1$3.subVectors( b, a );
		_v2$2.subVectors( point, a );

		const dot00 = _v0$1.dot( _v0$1 );
		const dot01 = _v0$1.dot( _v1$3 );
		const dot02 = _v0$1.dot( _v2$2 );
		const dot11 = _v1$3.dot( _v1$3 );
		const dot12 = _v1$3.dot( _v2$2 );

		const denom = ( dot00 * dot11 - dot01 * dot01 );

		// collinear or singular triangle
		if ( denom === 0 ) {

			target.set( 0, 0, 0 );
			return null;

		}

		const invDenom = 1 / denom;
		const u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
		const v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

		// barycentric coordinates must always sum to 1
		return target.set( 1 - u - v, v, u );

	}

	static containsPoint( point, a, b, c ) {

		// if the triangle is degenerate then we can't contain a point
		if ( this.getBarycoord( point, a, b, c, _v3$1 ) === null ) {

			return false;

		}

		return ( _v3$1.x >= 0 ) && ( _v3$1.y >= 0 ) && ( ( _v3$1.x + _v3$1.y ) <= 1 );

	}

	static getUV( point, p1, p2, p3, uv1, uv2, uv3, target ) { // @deprecated, r151

		if ( warnedGetUV === false ) {

			console.warn( 'THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().' );

			warnedGetUV = true;

		}

		return this.getInterpolation( point, p1, p2, p3, uv1, uv2, uv3, target );

	}

	static getInterpolation( point, p1, p2, p3, v1, v2, v3, target ) {

		if ( this.getBarycoord( point, p1, p2, p3, _v3$1 ) === null ) {

			target.x = 0;
			target.y = 0;
			if ( 'z' in target ) target.z = 0;
			if ( 'w' in target ) target.w = 0;
			return null;

		}

		target.setScalar( 0 );
		target.addScaledVector( v1, _v3$1.x );
		target.addScaledVector( v2, _v3$1.y );
		target.addScaledVector( v3, _v3$1.z );

		return target;

	}

	static isFrontFacing( a, b, c, direction ) {

		_v0$1.subVectors( c, b );
		_v1$3.subVectors( a, b );

		// strictly front facing
		return ( _v0$1.cross( _v1$3 ).dot( direction ) < 0 ) ? true : false;

	}

	set( a, b, c ) {

		this.a.copy( a );
		this.b.copy( b );
		this.c.copy( c );

		return this;

	}

	setFromPointsAndIndices( points, i0, i1, i2 ) {

		this.a.copy( points[ i0 ] );
		this.b.copy( points[ i1 ] );
		this.c.copy( points[ i2 ] );

		return this;

	}

	setFromAttributeAndIndices( attribute, i0, i1, i2 ) {

		this.a.fromBufferAttribute( attribute, i0 );
		this.b.fromBufferAttribute( attribute, i1 );
		this.c.fromBufferAttribute( attribute, i2 );

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( triangle ) {

		this.a.copy( triangle.a );
		this.b.copy( triangle.b );
		this.c.copy( triangle.c );

		return this;

	}

	getArea() {

		_v0$1.subVectors( this.c, this.b );
		_v1$3.subVectors( this.a, this.b );

		return _v0$1.cross( _v1$3 ).length() * 0.5;

	}

	getMidpoint( target ) {

		return target.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

	}

	getNormal( target ) {

		return Triangle.getNormal( this.a, this.b, this.c, target );

	}

	getPlane( target ) {

		return target.setFromCoplanarPoints( this.a, this.b, this.c );

	}

	getBarycoord( point, target ) {

		return Triangle.getBarycoord( point, this.a, this.b, this.c, target );

	}

	getUV( point, uv1, uv2, uv3, target ) { // @deprecated, r151

		if ( warnedGetUV === false ) {

			console.warn( 'THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().' );

			warnedGetUV = true;

		}

		return Triangle.getInterpolation( point, this.a, this.b, this.c, uv1, uv2, uv3, target );

	}

	getInterpolation( point, v1, v2, v3, target ) {

		return Triangle.getInterpolation( point, this.a, this.b, this.c, v1, v2, v3, target );

	}

	containsPoint( point ) {

		return Triangle.containsPoint( point, this.a, this.b, this.c );

	}

	isFrontFacing( direction ) {

		return Triangle.isFrontFacing( this.a, this.b, this.c, direction );

	}

	intersectsBox( box ) {

		return box.intersectsTriangle( this );

	}

	closestPointToPoint( p, target ) {

		const a = this.a, b = this.b, c = this.c;
		let v, w;

		// algorithm thanks to Real-Time Collision Detection by Christer Ericson,
		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
		// basically, we're distinguishing which of the voronoi regions of the triangle
		// the point lies in with the minimum amount of redundant computation.

		_vab.subVectors( b, a );
		_vac.subVectors( c, a );
		_vap.subVectors( p, a );
		const d1 = _vab.dot( _vap );
		const d2 = _vac.dot( _vap );
		if ( d1 <= 0 && d2 <= 0 ) {

			// vertex region of A; barycentric coords (1, 0, 0)
			return target.copy( a );

		}

		_vbp.subVectors( p, b );
		const d3 = _vab.dot( _vbp );
		const d4 = _vac.dot( _vbp );
		if ( d3 >= 0 && d4 <= d3 ) {

			// vertex region of B; barycentric coords (0, 1, 0)
			return target.copy( b );

		}

		const vc = d1 * d4 - d3 * d2;
		if ( vc <= 0 && d1 >= 0 && d3 <= 0 ) {

			v = d1 / ( d1 - d3 );
			// edge region of AB; barycentric coords (1-v, v, 0)
			return target.copy( a ).addScaledVector( _vab, v );

		}

		_vcp.subVectors( p, c );
		const d5 = _vab.dot( _vcp );
		const d6 = _vac.dot( _vcp );
		if ( d6 >= 0 && d5 <= d6 ) {

			// vertex region of C; barycentric coords (0, 0, 1)
			return target.copy( c );

		}

		const vb = d5 * d2 - d1 * d6;
		if ( vb <= 0 && d2 >= 0 && d6 <= 0 ) {

			w = d2 / ( d2 - d6 );
			// edge region of AC; barycentric coords (1-w, 0, w)
			return target.copy( a ).addScaledVector( _vac, w );

		}

		const va = d3 * d6 - d5 * d4;
		if ( va <= 0 && ( d4 - d3 ) >= 0 && ( d5 - d6 ) >= 0 ) {

			_vbc.subVectors( c, b );
			w = ( d4 - d3 ) / ( ( d4 - d3 ) + ( d5 - d6 ) );
			// edge region of BC; barycentric coords (0, 1-w, w)
			return target.copy( b ).addScaledVector( _vbc, w ); // edge region of BC

		}

		// face region
		const denom = 1 / ( va + vb + vc );
		// u = va * denom
		v = vb * denom;
		w = vc * denom;

		return target.copy( a ).addScaledVector( _vab, v ).addScaledVector( _vac, w );

	}

	equals( triangle ) {

		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

	}

}

const _colorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

const _hslA = { h: 0, s: 0, l: 0 };
const _hslB = { h: 0, s: 0, l: 0 };

function hue2rgb( p, q, t ) {

	if ( t < 0 ) t += 1;
	if ( t > 1 ) t -= 1;
	if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
	if ( t < 1 / 2 ) return q;
	if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
	return p;

}

class Color {

	constructor( r, g, b ) {

		this.isColor = true;

		this.r = 1;
		this.g = 1;
		this.b = 1;

		return this.set( r, g, b );

	}

	set( r, g, b ) {

		if ( g === undefined && b === undefined ) {

			// r is THREE.Color, hex or string

			const value = r;

			if ( value && value.isColor ) {

				this.copy( value );

			} else if ( typeof value === 'number' ) {

				this.setHex( value );

			} else if ( typeof value === 'string' ) {

				this.setStyle( value );

			}

		} else {

			this.setRGB( r, g, b );

		}

		return this;

	}

	setScalar( scalar ) {

		this.r = scalar;
		this.g = scalar;
		this.b = scalar;

		return this;

	}

	setHex( hex, colorSpace = SRGBColorSpace ) {

		hex = Math.floor( hex );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
		this.b = ( hex & 255 ) / 255;

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setRGB( r, g, b, colorSpace = ColorManagement.workingColorSpace ) {

		this.r = r;
		this.g = g;
		this.b = b;

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setHSL( h, s, l, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0
		h = euclideanModulo( h, 1 );
		s = clamp( s, 0, 1 );
		l = clamp( l, 0, 1 );

		if ( s === 0 ) {

			this.r = this.g = this.b = l;

		} else {

			const p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
			const q = ( 2 * l ) - p;

			this.r = hue2rgb( q, p, h + 1 / 3 );
			this.g = hue2rgb( q, p, h );
			this.b = hue2rgb( q, p, h - 1 / 3 );

		}

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setStyle( style, colorSpace = SRGBColorSpace ) {

		function handleAlpha( string ) {

			if ( string === undefined ) return;

			if ( parseFloat( string ) < 1 ) {

				console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

			}

		}


		let m;

		if ( m = /^(\w+)\(([^\)]*)\)/.exec( style ) ) {

			// rgb / hsl

			let color;
			const name = m[ 1 ];
			const components = m[ 2 ];

			switch ( name ) {

				case 'rgb':
				case 'rgba':

					if ( color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(255,0,0) rgba(255,0,0,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255,
							colorSpace
						);

					}

					if ( color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100,
							colorSpace
						);

					}

					break;

				case 'hsl':
				case 'hsla':

					if ( color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setHSL(
							parseFloat( color[ 1 ] ) / 360,
							parseFloat( color[ 2 ] ) / 100,
							parseFloat( color[ 3 ] ) / 100,
							colorSpace
						);

					}

					break;

				default:

					console.warn( 'THREE.Color: Unknown color model ' + style );

			}

		} else if ( m = /^\#([A-Fa-f\d]+)$/.exec( style ) ) {

			// hex color

			const hex = m[ 1 ];
			const size = hex.length;

			if ( size === 3 ) {

				// #ff0
				return this.setRGB(
					parseInt( hex.charAt( 0 ), 16 ) / 15,
					parseInt( hex.charAt( 1 ), 16 ) / 15,
					parseInt( hex.charAt( 2 ), 16 ) / 15,
					colorSpace
				);

			} else if ( size === 6 ) {

				// #ff0000
				return this.setHex( parseInt( hex, 16 ), colorSpace );

			} else {

				console.warn( 'THREE.Color: Invalid hex color ' + style );

			}

		} else if ( style && style.length > 0 ) {

			return this.setColorName( style, colorSpace );

		}

		return this;

	}

	setColorName( style, colorSpace = SRGBColorSpace ) {

		// color keywords
		const hex = _colorKeywords[ style.toLowerCase() ];

		if ( hex !== undefined ) {

			// red
			this.setHex( hex, colorSpace );

		} else {

			// unknown color
			console.warn( 'THREE.Color: Unknown color ' + style );

		}

		return this;

	}

	clone() {

		return new this.constructor( this.r, this.g, this.b );

	}

	copy( color ) {

		this.r = color.r;
		this.g = color.g;
		this.b = color.b;

		return this;

	}

	copySRGBToLinear( color ) {

		this.r = SRGBToLinear( color.r );
		this.g = SRGBToLinear( color.g );
		this.b = SRGBToLinear( color.b );

		return this;

	}

	copyLinearToSRGB( color ) {

		this.r = LinearToSRGB( color.r );
		this.g = LinearToSRGB( color.g );
		this.b = LinearToSRGB( color.b );

		return this;

	}

	convertSRGBToLinear() {

		this.copySRGBToLinear( this );

		return this;

	}

	convertLinearToSRGB() {

		this.copyLinearToSRGB( this );

		return this;

	}

	getHex( colorSpace = SRGBColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		return Math.round( clamp( _color.r * 255, 0, 255 ) ) * 65536 + Math.round( clamp( _color.g * 255, 0, 255 ) ) * 256 + Math.round( clamp( _color.b * 255, 0, 255 ) );

	}

	getHexString( colorSpace = SRGBColorSpace ) {

		return ( '000000' + this.getHex( colorSpace ).toString( 16 ) ).slice( - 6 );

	}

	getHSL( target, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		const max = Math.max( r, g, b );
		const min = Math.min( r, g, b );

		let hue, saturation;
		const lightness = ( min + max ) / 2.0;

		if ( min === max ) {

			hue = 0;
			saturation = 0;

		} else {

			const delta = max - min;

			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

			switch ( max ) {

				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
				case g: hue = ( b - r ) / delta + 2; break;
				case b: hue = ( r - g ) / delta + 4; break;

			}

			hue /= 6;

		}

		target.h = hue;
		target.s = saturation;
		target.l = lightness;

		return target;

	}

	getRGB( target, colorSpace = ColorManagement.workingColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		target.r = _color.r;
		target.g = _color.g;
		target.b = _color.b;

		return target;

	}

	getStyle( colorSpace = SRGBColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		if ( colorSpace !== SRGBColorSpace ) {

			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
			return `color(${ colorSpace } ${ r.toFixed( 3 ) } ${ g.toFixed( 3 ) } ${ b.toFixed( 3 ) })`;

		}

		return `rgb(${ Math.round( r * 255 ) },${ Math.round( g * 255 ) },${ Math.round( b * 255 ) })`;

	}

	offsetHSL( h, s, l ) {

		this.getHSL( _hslA );

		return this.setHSL( _hslA.h + h, _hslA.s + s, _hslA.l + l );

	}

	add( color ) {

		this.r += color.r;
		this.g += color.g;
		this.b += color.b;

		return this;

	}

	addColors( color1, color2 ) {

		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;

		return this;

	}

	addScalar( s ) {

		this.r += s;
		this.g += s;
		this.b += s;

		return this;

	}

	sub( color ) {

		this.r = Math.max( 0, this.r - color.r );
		this.g = Math.max( 0, this.g - color.g );
		this.b = Math.max( 0, this.b - color.b );

		return this;

	}

	multiply( color ) {

		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;

		return this;

	}

	multiplyScalar( s ) {

		this.r *= s;
		this.g *= s;
		this.b *= s;

		return this;

	}

	lerp( color, alpha ) {

		this.r += ( color.r - this.r ) * alpha;
		this.g += ( color.g - this.g ) * alpha;
		this.b += ( color.b - this.b ) * alpha;

		return this;

	}

	lerpColors( color1, color2, alpha ) {

		this.r = color1.r + ( color2.r - color1.r ) * alpha;
		this.g = color1.g + ( color2.g - color1.g ) * alpha;
		this.b = color1.b + ( color2.b - color1.b ) * alpha;

		return this;

	}

	lerpHSL( color, alpha ) {

		this.getHSL( _hslA );
		color.getHSL( _hslB );

		const h = lerp( _hslA.h, _hslB.h, alpha );
		const s = lerp( _hslA.s, _hslB.s, alpha );
		const l = lerp( _hslA.l, _hslB.l, alpha );

		this.setHSL( h, s, l );

		return this;

	}

	setFromVector3( v ) {

		this.r = v.x;
		this.g = v.y;
		this.b = v.z;

		return this;

	}

	applyMatrix3( m ) {

		const r = this.r, g = this.g, b = this.b;
		const e = m.elements;

		this.r = e[ 0 ] * r + e[ 3 ] * g + e[ 6 ] * b;
		this.g = e[ 1 ] * r + e[ 4 ] * g + e[ 7 ] * b;
		this.b = e[ 2 ] * r + e[ 5 ] * g + e[ 8 ] * b;

		return this;

	}

	equals( c ) {

		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

	}

	fromArray( array, offset = 0 ) {

		this.r = array[ offset ];
		this.g = array[ offset + 1 ];
		this.b = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.r;
		array[ offset + 1 ] = this.g;
		array[ offset + 2 ] = this.b;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.r = attribute.getX( index );
		this.g = attribute.getY( index );
		this.b = attribute.getZ( index );

		return this;

	}

	toJSON() {

		return this.getHex();

	}

	*[ Symbol.iterator ]() {

		yield this.r;
		yield this.g;
		yield this.b;

	}

}

const _color = /*@__PURE__*/ new Color();

Color.NAMES = _colorKeywords;

let _materialId = 0;

class Material extends EventDispatcher {

	constructor() {

		super();

		this.isMaterial = true;

		Object.defineProperty( this, 'id', { value: _materialId ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'Material';

		this.blending = NormalBlending;
		this.side = FrontSide;
		this.vertexColors = false;

		this.opacity = 1;
		this.transparent = false;
		this.alphaHash = false;

		this.blendSrc = SrcAlphaFactor;
		this.blendDst = OneMinusSrcAlphaFactor;
		this.blendEquation = AddEquation;
		this.blendSrcAlpha = null;
		this.blendDstAlpha = null;
		this.blendEquationAlpha = null;
		this.blendColor = new Color( 0, 0, 0 );
		this.blendAlpha = 0;

		this.depthFunc = LessEqualDepth;
		this.depthTest = true;
		this.depthWrite = true;

		this.stencilWriteMask = 0xff;
		this.stencilFunc = AlwaysStencilFunc;
		this.stencilRef = 0;
		this.stencilFuncMask = 0xff;
		this.stencilFail = KeepStencilOp;
		this.stencilZFail = KeepStencilOp;
		this.stencilZPass = KeepStencilOp;
		this.stencilWrite = false;

		this.clippingPlanes = null;
		this.clipIntersection = false;
		this.clipShadows = false;

		this.shadowSide = null;

		this.colorWrite = true;

		this.precision = null; // override the renderer's default precision for this material

		this.polygonOffset = false;
		this.polygonOffsetFactor = 0;
		this.polygonOffsetUnits = 0;

		this.dithering = false;

		this.alphaToCoverage = false;
		this.premultipliedAlpha = false;
		this.forceSinglePass = false;

		this.visible = true;

		this.toneMapped = true;

		this.userData = {};

		this.version = 0;

		this._alphaTest = 0;

	}

	get alphaTest() {

		return this._alphaTest;

	}

	set alphaTest( value ) {

		if ( this._alphaTest > 0 !== value > 0 ) {

			this.version ++;

		}

		this._alphaTest = value;

	}

	onBuild( /* shaderobject, renderer */ ) {}

	onBeforeRender( /* renderer, scene, camera, geometry, object, group */ ) {}

	onBeforeCompile( /* shaderobject, renderer */ ) {}

	customProgramCacheKey() {

		return this.onBeforeCompile.toString();

	}

	setValues( values ) {

		if ( values === undefined ) return;

		for ( const key in values ) {

			const newValue = values[ key ];

			if ( newValue === undefined ) {

				console.warn( `THREE.Material: parameter '${ key }' has value of undefined.` );
				continue;

			}

			const currentValue = this[ key ];

			if ( currentValue === undefined ) {

				console.warn( `THREE.Material: '${ key }' is not a property of THREE.${ this.type }.` );
				continue;

			}

			if ( currentValue && currentValue.isColor ) {

				currentValue.set( newValue );

			} else if ( ( currentValue && currentValue.isVector3 ) && ( newValue && newValue.isVector3 ) ) {

				currentValue.copy( newValue );

			} else {

				this[ key ] = newValue;

			}

		}

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( isRootObject ) {

			meta = {
				textures: {},
				images: {}
			};

		}

		const data = {
			metadata: {
				version: 4.6,
				type: 'Material',
				generator: 'Material.toJSON'
			}
		};

		// standard Material serialization
		data.uuid = this.uuid;
		data.type = this.type;

		if ( this.name !== '' ) data.name = this.name;

		if ( this.color && this.color.isColor ) data.color = this.color.getHex();

		if ( this.roughness !== undefined ) data.roughness = this.roughness;
		if ( this.metalness !== undefined ) data.metalness = this.metalness;

		if ( this.sheen !== undefined ) data.sheen = this.sheen;
		if ( this.sheenColor && this.sheenColor.isColor ) data.sheenColor = this.sheenColor.getHex();
		if ( this.sheenRoughness !== undefined ) data.sheenRoughness = this.sheenRoughness;
		if ( this.emissive && this.emissive.isColor ) data.emissive = this.emissive.getHex();
		if ( this.emissiveIntensity && this.emissiveIntensity !== 1 ) data.emissiveIntensity = this.emissiveIntensity;

		if ( this.specular && this.specular.isColor ) data.specular = this.specular.getHex();
		if ( this.specularIntensity !== undefined ) data.specularIntensity = this.specularIntensity;
		if ( this.specularColor && this.specularColor.isColor ) data.specularColor = this.specularColor.getHex();
		if ( this.shininess !== undefined ) data.shininess = this.shininess;
		if ( this.clearcoat !== undefined ) data.clearcoat = this.clearcoat;
		if ( this.clearcoatRoughness !== undefined ) data.clearcoatRoughness = this.clearcoatRoughness;

		if ( this.clearcoatMap && this.clearcoatMap.isTexture ) {

			data.clearcoatMap = this.clearcoatMap.toJSON( meta ).uuid;

		}

		if ( this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture ) {

			data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON( meta ).uuid;

		}

		if ( this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture ) {

			data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON( meta ).uuid;
			data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();

		}

		if ( this.iridescence !== undefined ) data.iridescence = this.iridescence;
		if ( this.iridescenceIOR !== undefined ) data.iridescenceIOR = this.iridescenceIOR;
		if ( this.iridescenceThicknessRange !== undefined ) data.iridescenceThicknessRange = this.iridescenceThicknessRange;

		if ( this.iridescenceMap && this.iridescenceMap.isTexture ) {

			data.iridescenceMap = this.iridescenceMap.toJSON( meta ).uuid;

		}

		if ( this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture ) {

			data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON( meta ).uuid;

		}

		if ( this.anisotropy !== undefined ) data.anisotropy = this.anisotropy;
		if ( this.anisotropyRotation !== undefined ) data.anisotropyRotation = this.anisotropyRotation;

		if ( this.anisotropyMap && this.anisotropyMap.isTexture ) {

			data.anisotropyMap = this.anisotropyMap.toJSON( meta ).uuid;

		}

		if ( this.map && this.map.isTexture ) data.map = this.map.toJSON( meta ).uuid;
		if ( this.matcap && this.matcap.isTexture ) data.matcap = this.matcap.toJSON( meta ).uuid;
		if ( this.alphaMap && this.alphaMap.isTexture ) data.alphaMap = this.alphaMap.toJSON( meta ).uuid;

		if ( this.lightMap && this.lightMap.isTexture ) {

			data.lightMap = this.lightMap.toJSON( meta ).uuid;
			data.lightMapIntensity = this.lightMapIntensity;

		}

		if ( this.aoMap && this.aoMap.isTexture ) {

			data.aoMap = this.aoMap.toJSON( meta ).uuid;
			data.aoMapIntensity = this.aoMapIntensity;

		}

		if ( this.bumpMap && this.bumpMap.isTexture ) {

			data.bumpMap = this.bumpMap.toJSON( meta ).uuid;
			data.bumpScale = this.bumpScale;

		}

		if ( this.normalMap && this.normalMap.isTexture ) {

			data.normalMap = this.normalMap.toJSON( meta ).uuid;
			data.normalMapType = this.normalMapType;
			data.normalScale = this.normalScale.toArray();

		}

		if ( this.displacementMap && this.displacementMap.isTexture ) {

			data.displacementMap = this.displacementMap.toJSON( meta ).uuid;
			data.displacementScale = this.displacementScale;
			data.displacementBias = this.displacementBias;

		}

		if ( this.roughnessMap && this.roughnessMap.isTexture ) data.roughnessMap = this.roughnessMap.toJSON( meta ).uuid;
		if ( this.metalnessMap && this.metalnessMap.isTexture ) data.metalnessMap = this.metalnessMap.toJSON( meta ).uuid;

		if ( this.emissiveMap && this.emissiveMap.isTexture ) data.emissiveMap = this.emissiveMap.toJSON( meta ).uuid;
		if ( this.specularMap && this.specularMap.isTexture ) data.specularMap = this.specularMap.toJSON( meta ).uuid;
		if ( this.specularIntensityMap && this.specularIntensityMap.isTexture ) data.specularIntensityMap = this.specularIntensityMap.toJSON( meta ).uuid;
		if ( this.specularColorMap && this.specularColorMap.isTexture ) data.specularColorMap = this.specularColorMap.toJSON( meta ).uuid;

		if ( this.envMap && this.envMap.isTexture ) {

			data.envMap = this.envMap.toJSON( meta ).uuid;

			if ( this.combine !== undefined ) data.combine = this.combine;

		}

		if ( this.envMapIntensity !== undefined ) data.envMapIntensity = this.envMapIntensity;
		if ( this.reflectivity !== undefined ) data.reflectivity = this.reflectivity;
		if ( this.refractionRatio !== undefined ) data.refractionRatio = this.refractionRatio;

		if ( this.gradientMap && this.gradientMap.isTexture ) {

			data.gradientMap = this.gradientMap.toJSON( meta ).uuid;

		}

		if ( this.transmission !== undefined ) data.transmission = this.transmission;
		if ( this.transmissionMap && this.transmissionMap.isTexture ) data.transmissionMap = this.transmissionMap.toJSON( meta ).uuid;
		if ( this.thickness !== undefined ) data.thickness = this.thickness;
		if ( this.thicknessMap && this.thicknessMap.isTexture ) data.thicknessMap = this.thicknessMap.toJSON( meta ).uuid;
		if ( this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity ) data.attenuationDistance = this.attenuationDistance;
		if ( this.attenuationColor !== undefined ) data.attenuationColor = this.attenuationColor.getHex();

		if ( this.size !== undefined ) data.size = this.size;
		if ( this.shadowSide !== null ) data.shadowSide = this.shadowSide;
		if ( this.sizeAttenuation !== undefined ) data.sizeAttenuation = this.sizeAttenuation;

		if ( this.blending !== NormalBlending ) data.blending = this.blending;
		if ( this.side !== FrontSide ) data.side = this.side;
		if ( this.vertexColors === true ) data.vertexColors = true;

		if ( this.opacity < 1 ) data.opacity = this.opacity;
		if ( this.transparent === true ) data.transparent = true;

		if ( this.blendSrc !== SrcAlphaFactor ) data.blendSrc = this.blendSrc;
		if ( this.blendDst !== OneMinusSrcAlphaFactor ) data.blendDst = this.blendDst;
		if ( this.blendEquation !== AddEquation ) data.blendEquation = this.blendEquation;
		if ( this.blendSrcAlpha !== null ) data.blendSrcAlpha = this.blendSrcAlpha;
		if ( this.blendDstAlpha !== null ) data.blendDstAlpha = this.blendDstAlpha;
		if ( this.blendEquationAlpha !== null ) data.blendEquationAlpha = this.blendEquationAlpha;
		if ( this.blendColor && this.blendColor.isColor ) data.blendColor = this.blendColor.getHex();
		if ( this.blendAlpha !== 0 ) data.blendAlpha = this.blendAlpha;

		if ( this.depthFunc !== LessEqualDepth ) data.depthFunc = this.depthFunc;
		if ( this.depthTest === false ) data.depthTest = this.depthTest;
		if ( this.depthWrite === false ) data.depthWrite = this.depthWrite;
		if ( this.colorWrite === false ) data.colorWrite = this.colorWrite;

		if ( this.stencilWriteMask !== 0xff ) data.stencilWriteMask = this.stencilWriteMask;
		if ( this.stencilFunc !== AlwaysStencilFunc ) data.stencilFunc = this.stencilFunc;
		if ( this.stencilRef !== 0 ) data.stencilRef = this.stencilRef;
		if ( this.stencilFuncMask !== 0xff ) data.stencilFuncMask = this.stencilFuncMask;
		if ( this.stencilFail !== KeepStencilOp ) data.stencilFail = this.stencilFail;
		if ( this.stencilZFail !== KeepStencilOp ) data.stencilZFail = this.stencilZFail;
		if ( this.stencilZPass !== KeepStencilOp ) data.stencilZPass = this.stencilZPass;
		if ( this.stencilWrite === true ) data.stencilWrite = this.stencilWrite;

		// rotation (SpriteMaterial)
		if ( this.rotation !== undefined && this.rotation !== 0 ) data.rotation = this.rotation;

		if ( this.polygonOffset === true ) data.polygonOffset = true;
		if ( this.polygonOffsetFactor !== 0 ) data.polygonOffsetFactor = this.polygonOffsetFactor;
		if ( this.polygonOffsetUnits !== 0 ) data.polygonOffsetUnits = this.polygonOffsetUnits;

		if ( this.linewidth !== undefined && this.linewidth !== 1 ) data.linewidth = this.linewidth;
		if ( this.dashSize !== undefined ) data.dashSize = this.dashSize;
		if ( this.gapSize !== undefined ) data.gapSize = this.gapSize;
		if ( this.scale !== undefined ) data.scale = this.scale;

		if ( this.dithering === true ) data.dithering = true;

		if ( this.alphaTest > 0 ) data.alphaTest = this.alphaTest;
		if ( this.alphaHash === true ) data.alphaHash = true;
		if ( this.alphaToCoverage === true ) data.alphaToCoverage = true;
		if ( this.premultipliedAlpha === true ) data.premultipliedAlpha = true;
		if ( this.forceSinglePass === true ) data.forceSinglePass = true;

		if ( this.wireframe === true ) data.wireframe = true;
		if ( this.wireframeLinewidth > 1 ) data.wireframeLinewidth = this.wireframeLinewidth;
		if ( this.wireframeLinecap !== 'round' ) data.wireframeLinecap = this.wireframeLinecap;
		if ( this.wireframeLinejoin !== 'round' ) data.wireframeLinejoin = this.wireframeLinejoin;

		if ( this.flatShading === true ) data.flatShading = true;

		if ( this.visible === false ) data.visible = false;

		if ( this.toneMapped === false ) data.toneMapped = false;

		if ( this.fog === false ) data.fog = false;

		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		// TODO: Copied from Object3D.toJSON

		function extractFromCache( cache ) {

			const values = [];

			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

		if ( isRootObject ) {

			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );

			if ( textures.length > 0 ) data.textures = textures;
			if ( images.length > 0 ) data.images = images;

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.blending = source.blending;
		this.side = source.side;
		this.vertexColors = source.vertexColors;

		this.opacity = source.opacity;
		this.transparent = source.transparent;

		this.blendSrc = source.blendSrc;
		this.blendDst = source.blendDst;
		this.blendEquation = source.blendEquation;
		this.blendSrcAlpha = source.blendSrcAlpha;
		this.blendDstAlpha = source.blendDstAlpha;
		this.blendEquationAlpha = source.blendEquationAlpha;
		this.blendColor.copy( source.blendColor );
		this.blendAlpha = source.blendAlpha;

		this.depthFunc = source.depthFunc;
		this.depthTest = source.depthTest;
		this.depthWrite = source.depthWrite;

		this.stencilWriteMask = source.stencilWriteMask;
		this.stencilFunc = source.stencilFunc;
		this.stencilRef = source.stencilRef;
		this.stencilFuncMask = source.stencilFuncMask;
		this.stencilFail = source.stencilFail;
		this.stencilZFail = source.stencilZFail;
		this.stencilZPass = source.stencilZPass;
		this.stencilWrite = source.stencilWrite;

		const srcPlanes = source.clippingPlanes;
		let dstPlanes = null;

		if ( srcPlanes !== null ) {

			const n = srcPlanes.length;
			dstPlanes = new Array( n );

			for ( let i = 0; i !== n; ++ i ) {

				dstPlanes[ i ] = srcPlanes[ i ].clone();

			}

		}

		this.clippingPlanes = dstPlanes;
		this.clipIntersection = source.clipIntersection;
		this.clipShadows = source.clipShadows;

		this.shadowSide = source.shadowSide;

		this.colorWrite = source.colorWrite;

		this.precision = source.precision;

		this.polygonOffset = source.polygonOffset;
		this.polygonOffsetFactor = source.polygonOffsetFactor;
		this.polygonOffsetUnits = source.polygonOffsetUnits;

		this.dithering = source.dithering;

		this.alphaTest = source.alphaTest;
		this.alphaHash = source.alphaHash;
		this.alphaToCoverage = source.alphaToCoverage;
		this.premultipliedAlpha = source.premultipliedAlpha;
		this.forceSinglePass = source.forceSinglePass;

		this.visible = source.visible;

		this.toneMapped = source.toneMapped;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

}

class MeshBasicMaterial extends Material {

	constructor( parameters ) {

		super();

		this.isMeshBasicMaterial = true;

		this.type = 'MeshBasicMaterial';

		this.color = new Color( 0xffffff ); // emissive

		this.map = null;

		this.lightMap = null;
		this.lightMapIntensity = 1.0;

		this.aoMap = null;
		this.aoMapIntensity = 1.0;

		this.specularMap = null;

		this.alphaMap = null;

		this.envMap = null;
		this.combine = MultiplyOperation;
		this.reflectivity = 1;
		this.refractionRatio = 0.98;

		this.wireframe = false;
		this.wireframeLinewidth = 1;
		this.wireframeLinecap = 'round';
		this.wireframeLinejoin = 'round';

		this.fog = true;

		this.setValues( parameters );

	}

	copy( source ) {

		super.copy( source );

		this.color.copy( source.color );

		this.map = source.map;

		this.lightMap = source.lightMap;
		this.lightMapIntensity = source.lightMapIntensity;

		this.aoMap = source.aoMap;
		this.aoMapIntensity = source.aoMapIntensity;

		this.specularMap = source.specularMap;

		this.alphaMap = source.alphaMap;

		this.envMap = source.envMap;
		this.combine = source.combine;
		this.reflectivity = source.reflectivity;
		this.refractionRatio = source.refractionRatio;

		this.wireframe = source.wireframe;
		this.wireframeLinewidth = source.wireframeLinewidth;
		this.wireframeLinecap = source.wireframeLinecap;
		this.wireframeLinejoin = source.wireframeLinejoin;

		this.fog = source.fog;

		return this;

	}

}

// Fast Half Float Conversions, http://www.fox-toolkit.org/ftp/fasthalffloatconversion.pdf

const _tables = /*@__PURE__*/ _generateTables();

function _generateTables() {

	// float32 to float16 helpers

	const buffer = new ArrayBuffer( 4 );
	const floatView = new Float32Array( buffer );
	const uint32View = new Uint32Array( buffer );

	const baseTable = new Uint32Array( 512 );
	const shiftTable = new Uint32Array( 512 );

	for ( let i = 0; i < 256; ++ i ) {

		const e = i - 127;

		// very small number (0, -0)

		if ( e < - 27 ) {

			baseTable[ i ] = 0x0000;
			baseTable[ i | 0x100 ] = 0x8000;
			shiftTable[ i ] = 24;
			shiftTable[ i | 0x100 ] = 24;

			// small number (denorm)

		} else if ( e < - 14 ) {

			baseTable[ i ] = 0x0400 >> ( - e - 14 );
			baseTable[ i | 0x100 ] = ( 0x0400 >> ( - e - 14 ) ) | 0x8000;
			shiftTable[ i ] = - e - 1;
			shiftTable[ i | 0x100 ] = - e - 1;

			// normal number

		} else if ( e <= 15 ) {

			baseTable[ i ] = ( e + 15 ) << 10;
			baseTable[ i | 0x100 ] = ( ( e + 15 ) << 10 ) | 0x8000;
			shiftTable[ i ] = 13;
			shiftTable[ i | 0x100 ] = 13;

			// large number (Infinity, -Infinity)

		} else if ( e < 128 ) {

			baseTable[ i ] = 0x7c00;
			baseTable[ i | 0x100 ] = 0xfc00;
			shiftTable[ i ] = 24;
			shiftTable[ i | 0x100 ] = 24;

			// stay (NaN, Infinity, -Infinity)

		} else {

			baseTable[ i ] = 0x7c00;
			baseTable[ i | 0x100 ] = 0xfc00;
			shiftTable[ i ] = 13;
			shiftTable[ i | 0x100 ] = 13;

		}

	}

	// float16 to float32 helpers

	const mantissaTable = new Uint32Array( 2048 );
	const exponentTable = new Uint32Array( 64 );
	const offsetTable = new Uint32Array( 64 );

	for ( let i = 1; i < 1024; ++ i ) {

		let m = i << 13; // zero pad mantissa bits
		let e = 0; // zero exponent

		// normalized
		while ( ( m & 0x00800000 ) === 0 ) {

			m <<= 1;
			e -= 0x00800000; // decrement exponent

		}

		m &= ~ 0x00800000; // clear leading 1 bit
		e += 0x38800000; // adjust bias

		mantissaTable[ i ] = m | e;

	}

	for ( let i = 1024; i < 2048; ++ i ) {

		mantissaTable[ i ] = 0x38000000 + ( ( i - 1024 ) << 13 );

	}

	for ( let i = 1; i < 31; ++ i ) {

		exponentTable[ i ] = i << 23;

	}

	exponentTable[ 31 ] = 0x47800000;
	exponentTable[ 32 ] = 0x80000000;

	for ( let i = 33; i < 63; ++ i ) {

		exponentTable[ i ] = 0x80000000 + ( ( i - 32 ) << 23 );

	}

	exponentTable[ 63 ] = 0xc7800000;

	for ( let i = 1; i < 64; ++ i ) {

		if ( i !== 32 ) {

			offsetTable[ i ] = 1024;

		}

	}

	return {
		floatView: floatView,
		uint32View: uint32View,
		baseTable: baseTable,
		shiftTable: shiftTable,
		mantissaTable: mantissaTable,
		exponentTable: exponentTable,
		offsetTable: offsetTable
	};

}

// float32 to float16

function toHalfFloat( val ) {

	if ( Math.abs( val ) > 65504 ) console.warn( 'THREE.DataUtils.toHalfFloat(): Value out of range.' );

	val = clamp( val, - 65504, 65504 );

	_tables.floatView[ 0 ] = val;
	const f = _tables.uint32View[ 0 ];
	const e = ( f >> 23 ) & 0x1ff;
	return _tables.baseTable[ e ] + ( ( f & 0x007fffff ) >> _tables.shiftTable[ e ] );

}

// float16 to float32

function fromHalfFloat( val ) {

	const m = val >> 10;
	_tables.uint32View[ 0 ] = _tables.mantissaTable[ _tables.offsetTable[ m ] + ( val & 0x3ff ) ] + _tables.exponentTable[ m ];
	return _tables.floatView[ 0 ];

}

const DataUtils = {
	toHalfFloat: toHalfFloat,
	fromHalfFloat: fromHalfFloat,
};

const _vector$9 = /*@__PURE__*/ new Vector3();
const _vector2$1 = /*@__PURE__*/ new Vector2();

class BufferAttribute {

	constructor( array, itemSize, normalized = false ) {

		if ( Array.isArray( array ) ) {

			throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

		}

		this.isBufferAttribute = true;

		this.name = '';

		this.array = array;
		this.itemSize = itemSize;
		this.count = array !== undefined ? array.length / itemSize : 0;
		this.normalized = normalized;

		this.usage = StaticDrawUsage;
		this._updateRange = { offset: 0, count: - 1 };
		this.updateRanges = [];
		this.gpuType = FloatType;

		this.version = 0;

	}

	onUploadCallback() {}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	get updateRange() {

		console.warn( 'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.' ); // @deprecated, r159
		return this._updateRange;

	}

	setUsage( value ) {

		this.usage = value;

		return this;

	}

	addUpdateRange( start, count ) {

		this.updateRanges.push( { start, count } );

	}

	clearUpdateRanges() {

		this.updateRanges.length = 0;

	}

	copy( source ) {

		this.name = source.name;
		this.array = new source.array.constructor( source.array );
		this.itemSize = source.itemSize;
		this.count = source.count;
		this.normalized = source.normalized;

		this.usage = source.usage;
		this.gpuType = source.gpuType;

		return this;

	}

	copyAt( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( let i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	}

	copyArray( array ) {

		this.array.set( array );

		return this;

	}

	applyMatrix3( m ) {

		if ( this.itemSize === 2 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector2$1.fromBufferAttribute( this, i );
				_vector2$1.applyMatrix3( m );

				this.setXY( i, _vector2$1.x, _vector2$1.y );

			}

		} else if ( this.itemSize === 3 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector$9.fromBufferAttribute( this, i );
				_vector$9.applyMatrix3( m );

				this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

			}

		}

		return this;

	}

	applyMatrix4( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyMatrix4( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	applyNormalMatrix( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyNormalMatrix( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	transformDirection( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.transformDirection( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	set( value, offset = 0 ) {

		// Matching BufferAttribute constructor, do not normalize the array.
		this.array.set( value, offset );

		return this;

	}

	getComponent( index, component ) {

		let value = this.array[ index * this.itemSize + component ];

		if ( this.normalized ) value = denormalize( value, this.array );

		return value;

	}

	setComponent( index, component, value ) {

		if ( this.normalized ) value = normalize( value, this.array );

		this.array[ index * this.itemSize + component ] = value;

		return this;

	}

	getX( index ) {

		let x = this.array[ index * this.itemSize ];

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = x;

		return this;

	}

	getY( index ) {

		let y = this.array[ index * this.itemSize + 1 ];

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	}

	getZ( index ) {

		let z = this.array[ index * this.itemSize + 2 ];

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	}

	getW( index ) {

		let w = this.array[ index * this.itemSize + 3 ];

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	}

	onUpload( callback ) {

		this.onUploadCallback = callback;

		return this;

	}

	clone() {

		return new this.constructor( this.array, this.itemSize ).copy( this );

	}

	toJSON() {

		const data = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from( this.array ),
			normalized: this.normalized
		};

		if ( this.name !== '' ) data.name = this.name;
		if ( this.usage !== StaticDrawUsage ) data.usage = this.usage;

		return data;

	}

}

//

class Int8BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int8Array( array ), itemSize, normalized );

	}

}

class Uint8BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint8Array( array ), itemSize, normalized );

	}

}

class Uint8ClampedBufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint8ClampedArray( array ), itemSize, normalized );

	}

}

class Int16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int16Array( array ), itemSize, normalized );

	}

}

class Uint16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

	}

}

class Int32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int32Array( array ), itemSize, normalized );

	}

}

class Uint32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint32Array( array ), itemSize, normalized );

	}

}

class Float16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

		this.isFloat16BufferAttribute = true;

	}

	getX( index ) {

		let x = fromHalfFloat( this.array[ index * this.itemSize ] );

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = toHalfFloat( x );

		return this;

	}

	getY( index ) {

		let y = fromHalfFloat( this.array[ index * this.itemSize + 1 ] );

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = toHalfFloat( y );

		return this;

	}

	getZ( index ) {

		let z = fromHalfFloat( this.array[ index * this.itemSize + 2 ] );

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = toHalfFloat( z );

		return this;

	}

	getW( index ) {

		let w = fromHalfFloat( this.array[ index * this.itemSize + 3 ] );

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = toHalfFloat( w );

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );
		this.array[ index + 2 ] = toHalfFloat( z );

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );
		this.array[ index + 2 ] = toHalfFloat( z );
		this.array[ index + 3 ] = toHalfFloat( w );

		return this;

	}

}


class Float32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Float32Array( array ), itemSize, normalized );

	}

}

class Float64BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Float64Array( array ), itemSize, normalized );

	}

}

let _id$2 = 0;

const _m1 = /*@__PURE__*/ new Matrix4();
const _obj = /*@__PURE__*/ new Object3D();
const _offset = /*@__PURE__*/ new Vector3();
const _box$2 = /*@__PURE__*/ new Box3();
const _boxMorphTargets = /*@__PURE__*/ new Box3();
const _vector$8 = /*@__PURE__*/ new Vector3();

class BufferGeometry extends EventDispatcher {

	constructor() {

		super();

		this.isBufferGeometry = true;

		Object.defineProperty( this, 'id', { value: _id$2 ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'BufferGeometry';

		this.index = null;
		this.attributes = {};

		this.morphAttributes = {};
		this.morphTargetsRelative = false;

		this.groups = [];

		this.boundingBox = null;
		this.boundingSphere = null;

		this.drawRange = { start: 0, count: Infinity };

		this.userData = {};

	}

	getIndex() {

		return this.index;

	}

	setIndex( index ) {

		if ( Array.isArray( index ) ) {

			this.index = new ( arrayNeedsUint32( index ) ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

		} else {

			this.index = index;

		}

		return this;

	}

	getAttribute( name ) {

		return this.attributes[ name ];

	}

	setAttribute( name, attribute ) {

		this.attributes[ name ] = attribute;

		return this;

	}

	deleteAttribute( name ) {

		delete this.attributes[ name ];

		return this;

	}

	hasAttribute( name ) {

		return this.attributes[ name ] !== undefined;

	}

	addGroup( start, count, materialIndex = 0 ) {

		this.groups.push( {

			start: start,
			count: count,
			materialIndex: materialIndex

		} );

	}

	clearGroups() {

		this.groups = [];

	}

	setDrawRange( start, count ) {

		this.drawRange.start = start;
		this.drawRange.count = count;

	}

	applyMatrix4( matrix ) {

		const position = this.attributes.position;

		if ( position !== undefined ) {

			position.applyMatrix4( matrix );

			position.needsUpdate = true;

		}

		const normal = this.attributes.normal;

		if ( normal !== undefined ) {

			const normalMatrix = new Matrix3().getNormalMatrix( matrix );

			normal.applyNormalMatrix( normalMatrix );

			normal.needsUpdate = true;

		}

		const tangent = this.attributes.tangent;

		if ( tangent !== undefined ) {

			tangent.transformDirection( matrix );

			tangent.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	}

	applyQuaternion( q ) {

		_m1.makeRotationFromQuaternion( q );

		this.applyMatrix4( _m1 );

		return this;

	}

	rotateX( angle ) {

		// rotate geometry around world x-axis

		_m1.makeRotationX( angle );

		this.applyMatrix4( _m1 );

		return this;

	}

	rotateY( angle ) {

		// rotate geometry around world y-axis

		_m1.makeRotationY( angle );

		this.applyMatrix4( _m1 );

		return this;

	}

	rotateZ( angle ) {

		// rotate geometry around world z-axis

		_m1.makeRotationZ( angle );

		this.applyMatrix4( _m1 );

		return this;

	}

	translate( x, y, z ) {

		// translate geometry

		_m1.makeTranslation( x, y, z );

		this.applyMatrix4( _m1 );

		return this;

	}

	scale( x, y, z ) {

		// scale geometry

		_m1.makeScale( x, y, z );

		this.applyMatrix4( _m1 );

		return this;

	}

	lookAt( vector ) {

		_obj.lookAt( vector );

		_obj.updateMatrix();

		this.applyMatrix4( _obj.matrix );

		return this;

	}

	center() {

		this.computeBoundingBox();

		this.boundingBox.getCenter( _offset ).negate();

		this.translate( _offset.x, _offset.y, _offset.z );

		return this;

	}

	setFromPoints( points ) {

		const position = [];

		for ( let i = 0, l = points.length; i < l; i ++ ) {

			const point = points[ i ];
			position.push( point.x, point.y, point.z || 0 );

		}

		this.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

		return this;

	}

	computeBoundingBox() {

		if ( this.boundingBox === null ) {

			this.boundingBox = new Box3();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this );

			this.boundingBox.set(
				new Vector3( - Infinity, - Infinity, - Infinity ),
				new Vector3( + Infinity, + Infinity, + Infinity )
			);

			return;

		}

		if ( position !== undefined ) {

			this.boundingBox.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_box$2.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( this.boundingBox.min, _box$2.min );
						this.boundingBox.expandByPoint( _vector$8 );

						_vector$8.addVectors( this.boundingBox.max, _box$2.max );
						this.boundingBox.expandByPoint( _vector$8 );

					} else {

						this.boundingBox.expandByPoint( _box$2.min );
						this.boundingBox.expandByPoint( _box$2.max );

					}

				}

			}

		} else {

			this.boundingBox.makeEmpty();

		}

		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

		}

	}

	computeBoundingSphere() {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new Sphere();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this );

			this.boundingSphere.set( new Vector3(), Infinity );

			return;

		}

		if ( position ) {

			// first, find the center of the bounding sphere

			const center = this.boundingSphere.center;

			_box$2.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_boxMorphTargets.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( _box$2.min, _boxMorphTargets.min );
						_box$2.expandByPoint( _vector$8 );

						_vector$8.addVectors( _box$2.max, _boxMorphTargets.max );
						_box$2.expandByPoint( _vector$8 );

					} else {

						_box$2.expandByPoint( _boxMorphTargets.min );
						_box$2.expandByPoint( _boxMorphTargets.max );

					}

				}

			}

			_box$2.getCenter( center );

			// second, try to find a boundingSphere with a radius smaller than the
			// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

			let maxRadiusSq = 0;

			for ( let i = 0, il = position.count; i < il; i ++ ) {

				_vector$8.fromBufferAttribute( position, i );

				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

			}

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					const morphTargetsRelative = this.morphTargetsRelative;

					for ( let j = 0, jl = morphAttribute.count; j < jl; j ++ ) {

						_vector$8.fromBufferAttribute( morphAttribute, j );

						if ( morphTargetsRelative ) {

							_offset.fromBufferAttribute( position, j );
							_vector$8.add( _offset );

						}

						maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

					}

				}

			}

			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

			if ( isNaN( this.boundingSphere.radius ) ) {

				console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

			}

		}

	}

	computeTangents() {

		const index = this.index;
		const attributes = this.attributes;

		// based on http://www.terathon.com/code/tangent.html
		// (per vertex tangents)

		if ( index === null ||
			 attributes.position === undefined ||
			 attributes.normal === undefined ||
			 attributes.uv === undefined ) {

			console.error( 'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)' );
			return;

		}

		const indices = index.array;
		const positions = attributes.position.array;
		const normals = attributes.normal.array;
		const uvs = attributes.uv.array;

		const nVertices = positions.length / 3;

		if ( this.hasAttribute( 'tangent' ) === false ) {

			this.setAttribute( 'tangent', new BufferAttribute( new Float32Array( 4 * nVertices ), 4 ) );

		}

		const tangents = this.getAttribute( 'tangent' ).array;

		const tan1 = [], tan2 = [];

		for ( let i = 0; i < nVertices; i ++ ) {

			tan1[ i ] = new Vector3();
			tan2[ i ] = new Vector3();

		}

		const vA = new Vector3(),
			vB = new Vector3(),
			vC = new Vector3(),

			uvA = new Vector2(),
			uvB = new Vector2(),
			uvC = new Vector2(),

			sdir = new Vector3(),
			tdir = new Vector3();

		function handleTriangle( a, b, c ) {

			vA.fromArray( positions, a * 3 );
			vB.fromArray( positions, b * 3 );
			vC.fromArray( positions, c * 3 );

			uvA.fromArray( uvs, a * 2 );
			uvB.fromArray( uvs, b * 2 );
			uvC.fromArray( uvs, c * 2 );

			vB.sub( vA );
			vC.sub( vA );

			uvB.sub( uvA );
			uvC.sub( uvA );

			const r = 1.0 / ( uvB.x * uvC.y - uvC.x * uvB.y );

			// silently ignore degenerate uv triangles having coincident or colinear vertices

			if ( ! isFinite( r ) ) return;

			sdir.copy( vB ).multiplyScalar( uvC.y ).addScaledVector( vC, - uvB.y ).multiplyScalar( r );
			tdir.copy( vC ).multiplyScalar( uvB.x ).addScaledVector( vB, - uvC.x ).multiplyScalar( r );

			tan1[ a ].add( sdir );
			tan1[ b ].add( sdir );
			tan1[ c ].add( sdir );

			tan2[ a ].add( tdir );
			tan2[ b ].add( tdir );
			tan2[ c ].add( tdir );

		}

		let groups = this.groups;

		if ( groups.length === 0 ) {

			groups = [ {
				start: 0,
				count: indices.length
			} ];

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleTriangle(
					indices[ j + 0 ],
					indices[ j + 1 ],
					indices[ j + 2 ]
				);

			}

		}

		const tmp = new Vector3(), tmp2 = new Vector3();
		const n = new Vector3(), n2 = new Vector3();

		function handleVertex( v ) {

			n.fromArray( normals, v * 3 );
			n2.copy( n );

			const t = tan1[ v ];

			// Gram-Schmidt orthogonalize

			tmp.copy( t );
			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

			// Calculate handedness

			tmp2.crossVectors( n2, t );
			const test = tmp2.dot( tan2[ v ] );
			const w = ( test < 0.0 ) ? - 1.0 : 1.0;

			tangents[ v * 4 ] = tmp.x;
			tangents[ v * 4 + 1 ] = tmp.y;
			tangents[ v * 4 + 2 ] = tmp.z;
			tangents[ v * 4 + 3 ] = w;

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleVertex( indices[ j + 0 ] );
				handleVertex( indices[ j + 1 ] );
				handleVertex( indices[ j + 2 ] );

			}

		}

	}

	computeVertexNormals() {

		const index = this.index;
		const positionAttribute = this.getAttribute( 'position' );

		if ( positionAttribute !== undefined ) {

			let normalAttribute = this.getAttribute( 'normal' );

			if ( normalAttribute === undefined ) {

				normalAttribute = new BufferAttribute( new Float32Array( positionAttribute.count * 3 ), 3 );
				this.setAttribute( 'normal', normalAttribute );

			} else {

				// reset existing normals to zero

				for ( let i = 0, il = normalAttribute.count; i < il; i ++ ) {

					normalAttribute.setXYZ( i, 0, 0, 0 );

				}

			}

			const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
			const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
			const cb = new Vector3(), ab = new Vector3();

			// indexed elements

			if ( index ) {

				for ( let i = 0, il = index.count; i < il; i += 3 ) {

					const vA = index.getX( i + 0 );
					const vB = index.getX( i + 1 );
					const vC = index.getX( i + 2 );

					pA.fromBufferAttribute( positionAttribute, vA );
					pB.fromBufferAttribute( positionAttribute, vB );
					pC.fromBufferAttribute( positionAttribute, vC );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					nA.fromBufferAttribute( normalAttribute, vA );
					nB.fromBufferAttribute( normalAttribute, vB );
					nC.fromBufferAttribute( normalAttribute, vC );

					nA.add( cb );
					nB.add( cb );
					nC.add( cb );

					normalAttribute.setXYZ( vA, nA.x, nA.y, nA.z );
					normalAttribute.setXYZ( vB, nB.x, nB.y, nB.z );
					normalAttribute.setXYZ( vC, nC.x, nC.y, nC.z );

				}

			} else {

				// non-indexed elements (unconnected triangle soup)

				for ( let i = 0, il = positionAttribute.count; i < il; i += 3 ) {

					pA.fromBufferAttribute( positionAttribute, i + 0 );
					pB.fromBufferAttribute( positionAttribute, i + 1 );
					pC.fromBufferAttribute( positionAttribute, i + 2 );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					normalAttribute.setXYZ( i + 0, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 1, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 2, cb.x, cb.y, cb.z );

				}

			}

			this.normalizeNormals();

			normalAttribute.needsUpdate = true;

		}

	}

	normalizeNormals() {

		const normals = this.attributes.normal;

		for ( let i = 0, il = normals.count; i < il; i ++ ) {

			_vector$8.fromBufferAttribute( normals, i );

			_vector$8.normalize();

			normals.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

		}

	}

	toNonIndexed() {

		function convertBufferAttribute( attribute, indices ) {

			const array = attribute.array;
			const itemSize = attribute.itemSize;
			const normalized = attribute.normalized;

			const array2 = new array.constructor( indices.length * itemSize );

			let index = 0, index2 = 0;

			for ( let i = 0, l = indices.length; i < l; i ++ ) {

				if ( attribute.isInterleavedBufferAttribute ) {

					index = indices[ i ] * attribute.data.stride + attribute.offset;

				} else {

					index = indices[ i ] * itemSize;

				}

				for ( let j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			return new BufferAttribute( array2, itemSize, normalized );

		}

		//

		if ( this.index === null ) {

			console.warn( 'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.' );
			return this;

		}

		const geometry2 = new BufferGeometry();

		const indices = this.index.array;
		const attributes = this.attributes;

		// attributes

		for ( const name in attributes ) {

			const attribute = attributes[ name ];

			const newAttribute = convertBufferAttribute( attribute, indices );

			geometry2.setAttribute( name, newAttribute );

		}

		// morph attributes

		const morphAttributes = this.morphAttributes;

		for ( const name in morphAttributes ) {

			const morphArray = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const attribute = morphAttribute[ i ];

				const newAttribute = convertBufferAttribute( attribute, indices );

				morphArray.push( newAttribute );

			}

			geometry2.morphAttributes[ name ] = morphArray;

		}

		geometry2.morphTargetsRelative = this.morphTargetsRelative;

		// groups

		const groups = this.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			geometry2.addGroup( group.start, group.count, group.materialIndex );

		}

		return geometry2;

	}

	toJSON() {

		const data = {
			metadata: {
				version: 4.6,
				type: 'BufferGeometry',
				generator: 'BufferGeometry.toJSON'
			}
		};

		// standard BufferGeometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;
		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		if ( this.parameters !== undefined ) {

			const parameters = this.parameters;

			for ( const key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		// for simplicity the code assumes attributes are not shared across geometries, see #15811

		data.data = { attributes: {} };

		const index = this.index;

		if ( index !== null ) {

			data.data.index = {
				type: index.array.constructor.name,
				array: Array.prototype.slice.call( index.array )
			};

		}

		const attributes = this.attributes;

		for ( const key in attributes ) {

			const attribute = attributes[ key ];

			data.data.attributes[ key ] = attribute.toJSON( data.data );

		}

		const morphAttributes = {};
		let hasMorphAttributes = false;

		for ( const key in this.morphAttributes ) {

			const attributeArray = this.morphAttributes[ key ];

			const array = [];

			for ( let i = 0, il = attributeArray.length; i < il; i ++ ) {

				const attribute = attributeArray[ i ];

				array.push( attribute.toJSON( data.data ) );

			}

			if ( array.length > 0 ) {

				morphAttributes[ key ] = array;

				hasMorphAttributes = true;

			}

		}

		if ( hasMorphAttributes ) {

			data.data.morphAttributes = morphAttributes;
			data.data.morphTargetsRelative = this.morphTargetsRelative;

		}

		const groups = this.groups;

		if ( groups.length > 0 ) {

			data.data.groups = JSON.parse( JSON.stringify( groups ) );

		}

		const boundingSphere = this.boundingSphere;

		if ( boundingSphere !== null ) {

			data.data.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		// reset

		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// used for storing cloned, shared data

		const data = {};

		// name

		this.name = source.name;

		// index

		const index = source.index;

		if ( index !== null ) {

			this.setIndex( index.clone( data ) );

		}

		// attributes

		const attributes = source.attributes;

		for ( const name in attributes ) {

			const attribute = attributes[ name ];
			this.setAttribute( name, attribute.clone( data ) );

		}

		// morph attributes

		const morphAttributes = source.morphAttributes;

		for ( const name in morphAttributes ) {

			const array = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, l = morphAttribute.length; i < l; i ++ ) {

				array.push( morphAttribute[ i ].clone( data ) );

			}

			this.morphAttributes[ name ] = array;

		}

		this.morphTargetsRelative = source.morphTargetsRelative;

		// groups

		const groups = source.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			this.addGroup( group.start, group.count, group.materialIndex );

		}

		// bounding box

		const boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		const boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// draw range

		this.drawRange.start = source.drawRange.start;
		this.drawRange.count = source.drawRange.count;

		// user data

		this.userData = source.userData;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

const _inverseMatrix$3 = /*@__PURE__*/ new Matrix4();
const _ray$3 = /*@__PURE__*/ new Ray();
const _sphere$6 = /*@__PURE__*/ new Sphere();
const _sphereHitAt = /*@__PURE__*/ new Vector3();

const _vA$1 = /*@__PURE__*/ new Vector3();
const _vB$1 = /*@__PURE__*/ new Vector3();
const _vC$1 = /*@__PURE__*/ new Vector3();

const _tempA = /*@__PURE__*/ new Vector3();
const _morphA = /*@__PURE__*/ new Vector3();

const _uvA$1 = /*@__PURE__*/ new Vector2();
const _uvB$1 = /*@__PURE__*/ new Vector2();
const _uvC$1 = /*@__PURE__*/ new Vector2();

const _normalA = /*@__PURE__*/ new Vector3();
const _normalB = /*@__PURE__*/ new Vector3();
const _normalC = /*@__PURE__*/ new Vector3();

const _intersectionPoint = /*@__PURE__*/ new Vector3();
const _intersectionPointWorld = /*@__PURE__*/ new Vector3();

class Mesh extends Object3D {

	constructor( geometry = new BufferGeometry(), material = new MeshBasicMaterial() ) {

		super();

		this.isMesh = true;

		this.type = 'Mesh';

		this.geometry = geometry;
		this.material = material;

		this.updateMorphTargets();

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		if ( source.morphTargetInfluences !== undefined ) {

			this.morphTargetInfluences = source.morphTargetInfluences.slice();

		}

		if ( source.morphTargetDictionary !== undefined ) {

			this.morphTargetDictionary = Object.assign( {}, source.morphTargetDictionary );

		}

		this.material = Array.isArray( source.material ) ? source.material.slice() : source.material;
		this.geometry = source.geometry;

		return this;

	}

	updateMorphTargets() {

		const geometry = this.geometry;

		const morphAttributes = geometry.morphAttributes;
		const keys = Object.keys( morphAttributes );

		if ( keys.length > 0 ) {

			const morphAttribute = morphAttributes[ keys[ 0 ] ];

			if ( morphAttribute !== undefined ) {

				this.morphTargetInfluences = [];
				this.morphTargetDictionary = {};

				for ( let m = 0, ml = morphAttribute.length; m < ml; m ++ ) {

					const name = morphAttribute[ m ].name || String( m );

					this.morphTargetInfluences.push( 0 );
					this.morphTargetDictionary[ name ] = m;

				}

			}

		}

	}

	getVertexPosition( index, target ) {

		const geometry = this.geometry;
		const position = geometry.attributes.position;
		const morphPosition = geometry.morphAttributes.position;
		const morphTargetsRelative = geometry.morphTargetsRelative;

		target.fromBufferAttribute( position, index );

		const morphInfluences = this.morphTargetInfluences;

		if ( morphPosition && morphInfluences ) {

			_morphA.set( 0, 0, 0 );

			for ( let i = 0, il = morphPosition.length; i < il; i ++ ) {

				const influence = morphInfluences[ i ];
				const morphAttribute = morphPosition[ i ];

				if ( influence === 0 ) continue;

				_tempA.fromBufferAttribute( morphAttribute, index );

				if ( morphTargetsRelative ) {

					_morphA.addScaledVector( _tempA, influence );

				} else {

					_morphA.addScaledVector( _tempA.sub( target ), influence );

				}

			}

			target.add( _morphA );

		}

		return target;

	}

	raycast( raycaster, intersects ) {

		const geometry = this.geometry;
		const material = this.material;
		const matrixWorld = this.matrixWorld;

		if ( material === undefined ) return;

		// test with bounding sphere in world space

		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

		_sphere$6.copy( geometry.boundingSphere );
		_sphere$6.applyMatrix4( matrixWorld );

		// check distance from ray origin to bounding sphere

		_ray$3.copy( raycaster.ray ).recast( raycaster.near );

		if ( _sphere$6.containsPoint( _ray$3.origin ) === false ) {

			if ( _ray$3.intersectSphere( _sphere$6, _sphereHitAt ) === null ) return;

			if ( _ray$3.origin.distanceToSquared( _sphereHitAt ) > ( raycaster.far - raycaster.near ) ** 2 ) return;

		}

		// convert ray to local space of mesh

		_inverseMatrix$3.copy( matrixWorld ).invert();
		_ray$3.copy( raycaster.ray ).applyMatrix4( _inverseMatrix$3 );

		// test with bounding box in local space

		if ( geometry.boundingBox !== null ) {

			if ( _ray$3.intersectsBox( geometry.boundingBox ) === false ) return;

		}

		// test for intersections with geometry

		this._computeIntersections( raycaster, intersects, _ray$3 );

	}

	_computeIntersections( raycaster, intersects, rayLocalSpace ) {

		let intersection;

		const geometry = this.geometry;
		const material = this.material;

		const index = geometry.index;
		const position = geometry.attributes.position;
		const uv = geometry.attributes.uv;
		const uv1 = geometry.attributes.uv1;
		const normal = geometry.attributes.normal;
		const groups = geometry.groups;
		const drawRange = geometry.drawRange;

		if ( index !== null ) {

			// indexed buffer geometry

			if ( Array.isArray( material ) ) {

				for ( let i = 0, il = groups.length; i < il; i ++ ) {

					const group = groups[ i ];
					const groupMaterial = material[ group.materialIndex ];

					const start = Math.max( group.start, drawRange.start );
					const end = Math.min( index.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

					for ( let j = start, jl = end; j < jl; j += 3 ) {

						const a = index.getX( j );
						const b = index.getX( j + 1 );
						const c = index.getX( j + 2 );

						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

						if ( intersection ) {

							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in indexed buffer semantics
							intersection.face.materialIndex = group.materialIndex;
							intersects.push( intersection );

						}

					}

				}

			} else {

				const start = Math.max( 0, drawRange.start );
				const end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

				for ( let i = start, il = end; i < il; i += 3 ) {

					const a = index.getX( i );
					const b = index.getX( i + 1 );
					const c = index.getX( i + 2 );

					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

					if ( intersection ) {

						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in indexed buffer semantics
						intersects.push( intersection );

					}

				}

			}

		} else if ( position !== undefined ) {

			// non-indexed buffer geometry

			if ( Array.isArray( material ) ) {

				for ( let i = 0, il = groups.length; i < il; i ++ ) {

					const group = groups[ i ];
					const groupMaterial = material[ group.materialIndex ];

					const start = Math.max( group.start, drawRange.start );
					const end = Math.min( position.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

					for ( let j = start, jl = end; j < jl; j += 3 ) {

						const a = j;
						const b = j + 1;
						const c = j + 2;

						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

						if ( intersection ) {

							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in non-indexed buffer semantics
							intersection.face.materialIndex = group.materialIndex;
							intersects.push( intersection );

						}

					}

				}

			} else {

				const start = Math.max( 0, drawRange.start );
				const end = Math.min( position.count, ( drawRange.start + drawRange.count ) );

				for ( let i = start, il = end; i < il; i += 3 ) {

					const a = i;
					const b = i + 1;
					const c = i + 2;

					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

					if ( intersection ) {

						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in non-indexed buffer semantics
						intersects.push( intersection );

					}

				}

			}

		}

	}

}

function checkIntersection( object, material, raycaster, ray, pA, pB, pC, point ) {

	let intersect;

	if ( material.side === BackSide ) {

		intersect = ray.intersectTriangle( pC, pB, pA, true, point );

	} else {

		intersect = ray.intersectTriangle( pA, pB, pC, ( material.side === FrontSide ), point );

	}

	if ( intersect === null ) return null;

	_intersectionPointWorld.copy( point );
	_intersectionPointWorld.applyMatrix4( object.matrixWorld );

	const distance = raycaster.ray.origin.distanceTo( _intersectionPointWorld );

	if ( distance < raycaster.near || distance > raycaster.far ) return null;

	return {
		distance: distance,
		point: _intersectionPointWorld.clone(),
		object: object
	};

}

function checkGeometryIntersection( object, material, raycaster, ray, uv, uv1, normal, a, b, c ) {

	object.getVertexPosition( a, _vA$1 );
	object.getVertexPosition( b, _vB$1 );
	object.getVertexPosition( c, _vC$1 );

	const intersection = checkIntersection( object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint );

	if ( intersection ) {

		if ( uv ) {

			_uvA$1.fromBufferAttribute( uv, a );
			_uvB$1.fromBufferAttribute( uv, b );
			_uvC$1.fromBufferAttribute( uv, c );

			intersection.uv = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2() );

		}

		if ( uv1 ) {

			_uvA$1.fromBufferAttribute( uv1, a );
			_uvB$1.fromBufferAttribute( uv1, b );
			_uvC$1.fromBufferAttribute( uv1, c );

			intersection.uv1 = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2() );
			intersection.uv2 = intersection.uv1; // @deprecated, r152

		}

		if ( normal ) {

			_normalA.fromBufferAttribute( normal, a );
			_normalB.fromBufferAttribute( normal, b );
			_normalC.fromBufferAttribute( normal, c );

			intersection.normal = Triangle.getInterpolation( _intersectionPoint, _vA$1, _vB$1, _vC$1, _normalA, _normalB, _normalC, new Vector3() );

			if ( intersection.normal.dot( ray.direction ) > 0 ) {

				intersection.normal.multiplyScalar( - 1 );

			}

		}

		const face = {
			a: a,
			b: b,
			c: c,
			normal: new Vector3(),
			materialIndex: 0
		};

		Triangle.getNormal( _vA$1, _vB$1, _vC$1, face.normal );

		intersection.face = face;

	}

	return intersection;

}

class BoxGeometry extends BufferGeometry {

	constructor( width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1 ) {

		super();

		this.type = 'BoxGeometry';

		this.parameters = {
			width: width,
			height: height,
			depth: depth,
			widthSegments: widthSegments,
			heightSegments: heightSegments,
			depthSegments: depthSegments
		};

		const scope = this;

		// segments

		widthSegments = Math.floor( widthSegments );
		heightSegments = Math.floor( heightSegments );
		depthSegments = Math.floor( depthSegments );

		// buffers

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		// helper variables

		let numberOfVertices = 0;
		let groupStart = 0;

		// build each side of the box geometry

		buildPlane( 'z', 'y', 'x', - 1, - 1, depth, height, width, depthSegments, heightSegments, 0 ); // px
		buildPlane( 'z', 'y', 'x', 1, - 1, depth, height, - width, depthSegments, heightSegments, 1 ); // nx
		buildPlane( 'x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments, 2 ); // py
		buildPlane( 'x', 'z', 'y', 1, - 1, width, depth, - height, widthSegments, depthSegments, 3 ); // ny
		buildPlane( 'x', 'y', 'z', 1, - 1, width, height, depth, widthSegments, heightSegments, 4 ); // pz
		buildPlane( 'x', 'y', 'z', - 1, - 1, width, height, - depth, widthSegments, heightSegments, 5 ); // nz

		// build geometry

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

		function buildPlane( u, v, w, udir, vdir, width, height, depth, gridX, gridY, materialIndex ) {

			const segmentWidth = width / gridX;
			const segmentHeight = height / gridY;

			const widthHalf = width / 2;
			const heightHalf = height / 2;
			const depthHalf = depth / 2;

			const gridX1 = gridX + 1;
			const gridY1 = gridY + 1;

			let vertexCounter = 0;
			let groupCount = 0;

			const vector = new Vector3();

			// generate vertices, normals and uvs

			for ( let iy = 0; iy < gridY1; iy ++ ) {

				const y = iy * segmentHeight - heightHalf;

				for ( let ix = 0; ix < gridX1; ix ++ ) {

					const x = ix * segmentWidth - widthHalf;

					// set values to correct vector component

					vector[ u ] = x * udir;
					vector[ v ] = y * vdir;
					vector[ w ] = depthHalf;

					// now apply vector to vertex buffer

					vertices.push( vector.x, vector.y, vector.z );

					// set values to correct vector component

					vector[ u ] = 0;
					vector[ v ] = 0;
					vector[ w ] = depth > 0 ? 1 : - 1;

					// now apply vector to normal buffer

					normals.push( vector.x, vector.y, vector.z );

					// uvs

					uvs.push( ix / gridX );
					uvs.push( 1 - ( iy / gridY ) );

					// counters

					vertexCounter += 1;

				}

			}

			// indices

			// 1. you need three indices to draw a single face
			// 2. a single segment consists of two faces
			// 3. so we need to generate six (2*3) indices per segment

			for ( let iy = 0; iy < gridY; iy ++ ) {

				for ( let ix = 0; ix < gridX; ix ++ ) {

					const a = numberOfVertices + ix + gridX1 * iy;
					const b = numberOfVertices + ix + gridX1 * ( iy + 1 );
					const c = numberOfVertices + ( ix + 1 ) + gridX1 * ( iy + 1 );
					const d = numberOfVertices + ( ix + 1 ) + gridX1 * iy;

					// faces

					indices.push( a, b, d );
					indices.push( b, c, d );

					// increase counter

					groupCount += 6;

				}

			}

			// add a group to the geometry. this will ensure multi material support

			scope.addGroup( groupStart, groupCount, materialIndex );

			// calculate new start value for groups

			groupStart += groupCount;

			// update total number of vertices

			numberOfVertices += vertexCounter;

		}

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new BoxGeometry( data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments );

	}

}

/**
 * Uniform Utilities
 */

function cloneUniforms( src ) {

	const dst = {};

	for ( const u in src ) {

		dst[ u ] = {};

		for ( const p in src[ u ] ) {

			const property = src[ u ][ p ];

			if ( property && ( property.isColor ||
				property.isMatrix3 || property.isMatrix4 ||
				property.isVector2 || property.isVector3 || property.isVector4 ||
				property.isTexture || property.isQuaternion ) ) {

				if ( property.isRenderTargetTexture ) {

					console.warn( 'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().' );
					dst[ u ][ p ] = null;

				} else {

					dst[ u ][ p ] = property.clone();

				}

			} else if ( Array.isArray( property ) ) {

				dst[ u ][ p ] = property.slice();

			} else {

				dst[ u ][ p ] = property;

			}

		}

	}

	return dst;

}

function mergeUniforms( uniforms ) {

	const merged = {};

	for ( let u = 0; u < uniforms.length; u ++ ) {

		const tmp = cloneUniforms( uniforms[ u ] );

		for ( const p in tmp ) {

			merged[ p ] = tmp[ p ];

		}

	}

	return merged;

}

function cloneUniformsGroups( src ) {

	const dst = [];

	for ( let u = 0; u < src.length; u ++ ) {

		dst.push( src[ u ].clone() );

	}

	return dst;

}

function getUnlitUniformColorSpace( renderer ) {

	if ( renderer.getRenderTarget() === null ) {

		// https://github.com/mrdoob/three.js/pull/23937#issuecomment-1111067398
		return renderer.outputColorSpace;

	}

	return ColorManagement.workingColorSpace;

}

// Legacy

const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };

var default_vertex = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";

var default_fragment = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

class ShaderMaterial extends Material {

	constructor( parameters ) {

		super();

		this.isShaderMaterial = true;

		this.type = 'ShaderMaterial';

		this.defines = {};
		this.uniforms = {};
		this.uniformsGroups = [];

		this.vertexShader = default_vertex;
		this.fragmentShader = default_fragment;

		this.linewidth = 1;

		this.wireframe = false;
		this.wireframeLinewidth = 1;

		this.fog = false; // set to use scene fog
		this.lights = false; // set to use scene lights
		this.clipping = false; // set to use user-defined clipping planes

		this.forceSinglePass = true;

		this.extensions = {
			derivatives: false, // set to use derivatives
			fragDepth: false, // set to use fragment depth values
			drawBuffers: false, // set to use draw buffers
			shaderTextureLOD: false, // set to use shader texture LOD
			clipCullDistance: false // set to use vertex shader clipping
		};

		// When rendered geometry doesn't include these attributes but the material does,
		// use these default values in WebGL. This avoids errors when buffer data is missing.
		this.defaultAttributeValues = {
			'color': [ 1, 1, 1 ],
			'uv': [ 0, 0 ],
			'uv1': [ 0, 0 ]
		};

		this.index0AttributeName = undefined;
		this.uniformsNeedUpdate = false;

		this.glslVersion = null;

		if ( parameters !== undefined ) {

			this.setValues( parameters );

		}

	}

	copy( source ) {

		super.copy( source );

		this.fragmentShader = source.fragmentShader;
		this.vertexShader = source.vertexShader;

		this.uniforms = cloneUniforms( source.uniforms );
		this.uniformsGroups = cloneUniformsGroups( source.uniformsGroups );

		this.defines = Object.assign( {}, source.defines );

		this.wireframe = source.wireframe;
		this.wireframeLinewidth = source.wireframeLinewidth;

		this.fog = source.fog;
		this.lights = source.lights;
		this.clipping = source.clipping;

		this.extensions = Object.assign( {}, source.extensions );

		this.glslVersion = source.glslVersion;

		return this;

	}

	toJSON( meta ) {

		const data = super.toJSON( meta );

		data.glslVersion = this.glslVersion;
		data.uniforms = {};

		for ( const name in this.uniforms ) {

			const uniform = this.uniforms[ name ];
			const value = uniform.value;

			if ( value && value.isTexture ) {

				data.uniforms[ name ] = {
					type: 't',
					value: value.toJSON( meta ).uuid
				};

			} else if ( value && value.isColor ) {

				data.uniforms[ name ] = {
					type: 'c',
					value: value.getHex()
				};

			} else if ( value && value.isVector2 ) {

				data.uniforms[ name ] = {
					type: 'v2',
					value: value.toArray()
				};

			} else if ( value && value.isVector3 ) {

				data.uniforms[ name ] = {
					type: 'v3',
					value: value.toArray()
				};

			} else if ( value && value.isVector4 ) {

				data.uniforms[ name ] = {
					type: 'v4',
					value: value.toArray()
				};

			} else if ( value && value.isMatrix3 ) {

				data.uniforms[ name ] = {
					type: 'm3',
					value: value.toArray()
				};

			} else if ( value && value.isMatrix4 ) {

				data.uniforms[ name ] = {
					type: 'm4',
					value: value.toArray()
				};

			} else {

				data.uniforms[ name ] = {
					value: value
				};

				// note: the array variants v2v, v3v, v4v, m4v and tv are not supported so far

			}

		}

		if ( Object.keys( this.defines ).length > 0 ) data.defines = this.defines;

		data.vertexShader = this.vertexShader;
		data.fragmentShader = this.fragmentShader;

		data.lights = this.lights;
		data.clipping = this.clipping;

		const extensions = {};

		for ( const key in this.extensions ) {

			if ( this.extensions[ key ] === true ) extensions[ key ] = true;

		}

		if ( Object.keys( extensions ).length > 0 ) data.extensions = extensions;

		return data;

	}

}

class Camera extends Object3D {

	constructor() {

		super();

		this.isCamera = true;

		this.type = 'Camera';

		this.matrixWorldInverse = new Matrix4();

		this.projectionMatrix = new Matrix4();
		this.projectionMatrixInverse = new Matrix4();

		this.coordinateSystem = WebGLCoordinateSystem;

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.matrixWorldInverse.copy( source.matrixWorldInverse );

		this.projectionMatrix.copy( source.projectionMatrix );
		this.projectionMatrixInverse.copy( source.projectionMatrixInverse );

		this.coordinateSystem = source.coordinateSystem;

		return this;

	}

	getWorldDirection( target ) {

		return super.getWorldDirection( target ).negate();

	}

	updateMatrixWorld( force ) {

		super.updateMatrixWorld( force );

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		super.updateWorldMatrix( updateParents, updateChildren );

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

class PerspectiveCamera extends Camera {

	constructor( fov = 50, aspect = 1, near = 0.1, far = 2000 ) {

		super();

		this.isPerspectiveCamera = true;

		this.type = 'PerspectiveCamera';

		this.fov = fov;
		this.zoom = 1;

		this.near = near;
		this.far = far;
		this.focus = 10;

		this.aspect = aspect;
		this.view = null;

		this.filmGauge = 35;	// width of the film (default in millimeters)
		this.filmOffset = 0;	// horizontal film offset (same unit as gauge)

		this.updateProjectionMatrix();

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.fov = source.fov;
		this.zoom = source.zoom;

		this.near = source.near;
		this.far = source.far;
		this.focus = source.focus;

		this.aspect = source.aspect;
		this.view = source.view === null ? null : Object.assign( {}, source.view );

		this.filmGauge = source.filmGauge;
		this.filmOffset = source.filmOffset;

		return this;

	}

	/**
	 * Sets the FOV by focal length in respect to the current .filmGauge.
	 *
	 * The default film gauge is 35, so that the focal length can be specified for
	 * a 35mm (full frame) camera.
	 *
	 * Values for focal length and film gauge must have the same unit.
	 */
	setFocalLength( focalLength ) {

		/** see {@link http://www.bobatkins.com/photography/technical/field_of_view.html} */
		const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;

		this.fov = RAD2DEG * 2 * Math.atan( vExtentSlope );
		this.updateProjectionMatrix();

	}

	/**
	 * Calculates the focal length from the current .fov and .filmGauge.
	 */
	getFocalLength() {

		const vExtentSlope = Math.tan( DEG2RAD * 0.5 * this.fov );

		return 0.5 * this.getFilmHeight() / vExtentSlope;

	}

	getEffectiveFOV() {

		return RAD2DEG * 2 * Math.atan(
			Math.tan( DEG2RAD * 0.5 * this.fov ) / this.zoom );

	}

	getFilmWidth() {

		// film not completely covered in portrait format (aspect < 1)
		return this.filmGauge * Math.min( this.aspect, 1 );

	}

	getFilmHeight() {

		// film not completely covered in landscape format (aspect > 1)
		return this.filmGauge / Math.max( this.aspect, 1 );

	}

	/**
	 * Sets an offset in a larger frustum. This is useful for multi-window or
	 * multi-monitor/multi-machine setups.
	 *
	 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	 * the monitors are in grid like this
	 *
	 *   +---+---+---+
	 *   | A | B | C |
	 *   +---+---+---+
	 *   | D | E | F |
	 *   +---+---+---+
	 *
	 * then for each monitor you would call it like this
	 *
	 *   const w = 1920;
	 *   const h = 1080;
	 *   const fullWidth = w * 3;
	 *   const fullHeight = h * 2;
	 *
	 *   --A--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	 *   --B--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	 *   --C--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	 *   --D--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	 *   --E--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	 *   --F--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	 *
	 *   Note there is no reason monitors have to be the same size or in a grid.
	 */
	setViewOffset( fullWidth, fullHeight, x, y, width, height ) {

		this.aspect = fullWidth / fullHeight;

		if ( this.view === null ) {

			this.view = {
				enabled: true,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			};

		}

		this.view.enabled = true;
		this.view.fullWidth = fullWidth;
		this.view.fullHeight = fullHeight;
		this.view.offsetX = x;
		this.view.offsetY = y;
		this.view.width = width;
		this.view.height = height;

		this.updateProjectionMatrix();

	}

	clearViewOffset() {

		if ( this.view !== null ) {

			this.view.enabled = false;

		}

		this.updateProjectionMatrix();

	}

	updateProjectionMatrix() {

		const near = this.near;
		let top = near * Math.tan( DEG2RAD * 0.5 * this.fov ) / this.zoom;
		let height = 2 * top;
		let width = this.aspect * height;
		let left = - 0.5 * width;
		const view = this.view;

		if ( this.view !== null && this.view.enabled ) {

			const fullWidth = view.fullWidth,
				fullHeight = view.fullHeight;

			left += view.offsetX * width / fullWidth;
			top -= view.offsetY * height / fullHeight;
			width *= view.width / fullWidth;
			height *= view.height / fullHeight;

		}

		const skew = this.filmOffset;
		if ( skew !== 0 ) left += near * skew / this.getFilmWidth();

		this.projectionMatrix.makePerspective( left, left + width, top, top - height, near, this.far, this.coordinateSystem );

		this.projectionMatrixInverse.copy( this.projectionMatrix ).invert();

	}

	toJSON( meta ) {

		const data = super.toJSON( meta );

		data.object.fov = this.fov;
		data.object.zoom = this.zoom;

		data.object.near = this.near;
		data.object.far = this.far;
		data.object.focus = this.focus;

		data.object.aspect = this.aspect;

		if ( this.view !== null ) data.object.view = Object.assign( {}, this.view );

		data.object.filmGauge = this.filmGauge;
		data.object.filmOffset = this.filmOffset;

		return data;

	}

}

const fov = - 90; // negative fov is not an error
const aspect = 1;

class CubeCamera extends Object3D {

	constructor( near, far, renderTarget ) {

		super();

		this.type = 'CubeCamera';

		this.renderTarget = renderTarget;
		this.coordinateSystem = null;
		this.activeMipmapLevel = 0;

		const cameraPX = new PerspectiveCamera( fov, aspect, near, far );
		cameraPX.layers = this.layers;
		this.add( cameraPX );

		const cameraNX = new PerspectiveCamera( fov, aspect, near, far );
		cameraNX.layers = this.layers;
		this.add( cameraNX );

		const cameraPY = new PerspectiveCamera( fov, aspect, near, far );
		cameraPY.layers = this.layers;
		this.add( cameraPY );

		const cameraNY = new PerspectiveCamera( fov, aspect, near, far );
		cameraNY.layers = this.layers;
		this.add( cameraNY );

		const cameraPZ = new PerspectiveCamera( fov, aspect, near, far );
		cameraPZ.layers = this.layers;
		this.add( cameraPZ );

		const cameraNZ = new PerspectiveCamera( fov, aspect, near, far );
		cameraNZ.layers = this.layers;
		this.add( cameraNZ );

	}

	updateCoordinateSystem() {

		const coordinateSystem = this.coordinateSystem;

		const cameras = this.children.concat();

		const [ cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ ] = cameras;

		for ( const camera of cameras ) this.remove( camera );

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			cameraPX.up.set( 0, 1, 0 );
			cameraPX.lookAt( 1, 0, 0 );

			cameraNX.up.set( 0, 1, 0 );
			cameraNX.lookAt( - 1, 0, 0 );

			cameraPY.up.set( 0, 0, - 1 );
			cameraPY.lookAt( 0, 1, 0 );

			cameraNY.up.set( 0, 0, 1 );
			cameraNY.lookAt( 0, - 1, 0 );

			cameraPZ.up.set( 0, 1, 0 );
			cameraPZ.lookAt( 0, 0, 1 );

			cameraNZ.up.set( 0, 1, 0 );
			cameraNZ.lookAt( 0, 0, - 1 );

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			cameraPX.up.set( 0, - 1, 0 );
			cameraPX.lookAt( - 1, 0, 0 );

			cameraNX.up.set( 0, - 1, 0 );
			cameraNX.lookAt( 1, 0, 0 );

			cameraPY.up.set( 0, 0, 1 );
			cameraPY.lookAt( 0, 1, 0 );

			cameraNY.up.set( 0, 0, - 1 );
			cameraNY.lookAt( 0, - 1, 0 );

			cameraPZ.up.set( 0, - 1, 0 );
			cameraPZ.lookAt( 0, 0, 1 );

			cameraNZ.up.set( 0, - 1, 0 );
			cameraNZ.lookAt( 0, 0, - 1 );

		} else {

			throw new Error( 'THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' + coordinateSystem );

		}

		for ( const camera of cameras ) {

			this.add( camera );

			camera.updateMatrixWorld();

		}

	}

	update( renderer, scene ) {

		if ( this.parent === null ) this.updateMatrixWorld();

		const { renderTarget, activeMipmapLevel } = this;

		if ( this.coordinateSystem !== renderer.coordinateSystem ) {

			this.coordinateSystem = renderer.coordinateSystem;

			this.updateCoordinateSystem();

		}

		const [ cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ ] = this.children;

		const currentRenderTarget = renderer.getRenderTarget();
		const currentActiveCubeFace = renderer.getActiveCubeFace();
		const currentActiveMipmapLevel = renderer.getActiveMipmapLevel();

		const currentXrEnabled = renderer.xr.enabled;

		renderer.xr.enabled = false;

		const generateMipmaps = renderTarget.texture.generateMipmaps;

		renderTarget.texture.generateMipmaps = false;

		renderer.setRenderTarget( renderTarget, 0, activeMipmapLevel );
		renderer.render( scene, cameraPX );

		renderer.setRenderTarget( renderTarget, 1, activeMipmapLevel );
		renderer.render( scene, cameraNX );

		renderer.setRenderTarget( renderTarget, 2, activeMipmapLevel );
		renderer.render( scene, cameraPY );

		renderer.setRenderTarget( renderTarget, 3, activeMipmapLevel );
		renderer.render( scene, cameraNY );

		renderer.setRenderTarget( renderTarget, 4, activeMipmapLevel );
		renderer.render( scene, cameraPZ );

		// mipmaps are generated during the last call of render()
		// at this point, all sides of the cube render target are defined

		renderTarget.texture.generateMipmaps = generateMipmaps;

		renderer.setRenderTarget( renderTarget, 5, activeMipmapLevel );
		renderer.render( scene, cameraNZ );

		renderer.setRenderTarget( currentRenderTarget, currentActiveCubeFace, currentActiveMipmapLevel );

		renderer.xr.enabled = currentXrEnabled;

		renderTarget.texture.needsPMREMUpdate = true;

	}

}

class CubeTexture extends Texture {

	constructor( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace ) {

		images = images !== undefined ? images : [];
		mapping = mapping !== undefined ? mapping : CubeReflectionMapping;

		super( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace );

		this.isCubeTexture = true;

		this.flipY = false;

	}

	get images() {

		return this.image;

	}

	set images( value ) {

		this.image = value;

	}

}

class WebGLCubeRenderTarget extends WebGLRenderTarget {

	constructor( size = 1, options = {} ) {

		super( size, size, options );

		this.isWebGLCubeRenderTarget = true;

		const image = { width: size, height: size, depth: 1 };
		const images = [ image, image, image, image, image, image ];

		if ( options.encoding !== undefined ) {

			// @deprecated, r152
			warnOnce( 'THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.' );
			options.colorSpace = options.encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

		}

		this.texture = new CubeTexture( images, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace );

		// By convention -- likely based on the RenderMan spec from the 1990's -- cube maps are specified by WebGL (and three.js)
		// in a coordinate system in which positive-x is to the right when looking up the positive-z axis -- in other words,
		// in a left-handed coordinate system. By continuing this convention, preexisting cube maps continued to render correctly.

		// three.js uses a right-handed coordinate system. So environment maps used in three.js appear to have px and nx swapped
		// and the flag isRenderTargetTexture controls this conversion. The flip is not required when using WebGLCubeRenderTarget.texture
		// as a cube texture (this is detected when isRenderTargetTexture is set to true for cube textures).

		this.texture.isRenderTargetTexture = true;

		this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
		this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;

	}

	fromEquirectangularTexture( renderer, texture ) {

		this.texture.type = texture.type;
		this.texture.colorSpace = texture.colorSpace;

		this.texture.generateMipmaps = texture.generateMipmaps;
		this.texture.minFilter = texture.minFilter;
		this.texture.magFilter = texture.magFilter;

		const shader = {

			uniforms: {
				tEquirect: { value: null },
			},

			vertexShader: /* glsl */`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,

			fragmentShader: /* glsl */`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
		};

		const geometry = new BoxGeometry( 5, 5, 5 );

		const material = new ShaderMaterial( {

			name: 'CubemapFromEquirect',

			uniforms: cloneUniforms( shader.uniforms ),
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader,
			side: BackSide,
			blending: NoBlending

		} );

		material.uniforms.tEquirect.value = texture;

		const mesh = new Mesh( geometry, material );

		const currentMinFilter = texture.minFilter;

		// Avoid blurred poles
		if ( texture.minFilter === LinearMipmapLinearFilter ) texture.minFilter = LinearFilter;

		const camera = new CubeCamera( 1, 10, this );
		camera.update( renderer, mesh );

		texture.minFilter = currentMinFilter;

		mesh.geometry.dispose();
		mesh.material.dispose();

		return this;

	}

	clear( renderer, color, depth, stencil ) {

		const currentRenderTarget = renderer.getRenderTarget();

		for ( let i = 0; i < 6; i ++ ) {

			renderer.setRenderTarget( this, i );

			renderer.clear( color, depth, stencil );

		}

		renderer.setRenderTarget( currentRenderTarget );

	}

}

const _vector1 = /*@__PURE__*/ new Vector3();
const _vector2 = /*@__PURE__*/ new Vector3();
const _normalMatrix = /*@__PURE__*/ new Matrix3();

class Plane {

	constructor( normal = new Vector3( 1, 0, 0 ), constant = 0 ) {

		this.isPlane = true;

		// normal is assumed to be normalized

		this.normal = normal;
		this.constant = constant;

	}

	set( normal, constant ) {

		this.normal.copy( normal );
		this.constant = constant;

		return this;

	}

	setComponents( x, y, z, w ) {

		this.normal.set( x, y, z );
		this.constant = w;

		return this;

	}

	setFromNormalAndCoplanarPoint( normal, point ) {

		this.normal.copy( normal );
		this.constant = - point.dot( this.normal );

		return this;

	}

	setFromCoplanarPoints( a, b, c ) {

		const normal = _vector1.subVectors( c, b ).cross( _vector2.subVectors( a, b ) ).normalize();

		// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?

		this.setFromNormalAndCoplanarPoint( normal, a );

		return this;

	}

	copy( plane ) {

		this.normal.copy( plane.normal );
		this.constant = plane.constant;

		return this;

	}

	normalize() {

		// Note: will lead to a divide by zero if the plane is invalid.

		const inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar( inverseNormalLength );
		this.constant *= inverseNormalLength;

		return this;

	}

	negate() {

		this.constant *= - 1;
		this.normal.negate();

		return this;

	}

	distanceToPoint( point ) {

		return this.normal.dot( point ) + this.constant;

	}

	distanceToSphere( sphere ) {

		return this.distanceToPoint( sphere.center ) - sphere.radius;

	}

	projectPoint( point, target ) {

		return target.copy( point ).addScaledVector( this.normal, - this.distanceToPoint( point ) );

	}

	intersectLine( line, target ) {

		const direction = line.delta( _vector1 );

		const denominator = this.normal.dot( direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( this.distanceToPoint( line.start ) === 0 ) {

				return target.copy( line.start );

			}

			// Unsure if this is the correct method to handle this case.
			return null;

		}

		const t = - ( line.start.dot( this.normal ) + this.constant ) / denominator;

		if ( t < 0 || t > 1 ) {

			return null;

		}

		return target.copy( line.start ).addScaledVector( direction, t );

	}

	intersectsLine( line ) {

		// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.

		const startSign = this.distanceToPoint( line.start );
		const endSign = this.distanceToPoint( line.end );

		return ( startSign < 0 && endSign > 0 ) || ( endSign < 0 && startSign > 0 );

	}

	intersectsBox( box ) {

		return box.intersectsPlane( this );

	}

	intersectsSphere( sphere ) {

		return sphere.intersectsPlane( this );

	}

	coplanarPoint( target ) {

		return target.copy( this.normal ).multiplyScalar( - this.constant );

	}

	applyMatrix4( matrix, optionalNormalMatrix ) {

		const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix( matrix );

		const referencePoint = this.coplanarPoint( _vector1 ).applyMatrix4( matrix );

		const normal = this.normal.applyMatrix3( normalMatrix ).normalize();

		this.constant = - referencePoint.dot( normal );

		return this;

	}

	translate( offset ) {

		this.constant -= offset.dot( this.normal );

		return this;

	}

	equals( plane ) {

		return plane.normal.equals( this.normal ) && ( plane.constant === this.constant );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _sphere$5 = /*@__PURE__*/ new Sphere();
const _vector$7 = /*@__PURE__*/ new Vector3();

class Frustum {

	constructor( p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane() ) {

		this.planes = [ p0, p1, p2, p3, p4, p5 ];

	}

	set( p0, p1, p2, p3, p4, p5 ) {

		const planes = this.planes;

		planes[ 0 ].copy( p0 );
		planes[ 1 ].copy( p1 );
		planes[ 2 ].copy( p2 );
		planes[ 3 ].copy( p3 );
		planes[ 4 ].copy( p4 );
		planes[ 5 ].copy( p5 );

		return this;

	}

	copy( frustum ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			planes[ i ].copy( frustum.planes[ i ] );

		}

		return this;

	}

	setFromProjectionMatrix( m, coordinateSystem = WebGLCoordinateSystem ) {

		const planes = this.planes;
		const me = m.elements;
		const me0 = me[ 0 ], me1 = me[ 1 ], me2 = me[ 2 ], me3 = me[ 3 ];
		const me4 = me[ 4 ], me5 = me[ 5 ], me6 = me[ 6 ], me7 = me[ 7 ];
		const me8 = me[ 8 ], me9 = me[ 9 ], me10 = me[ 10 ], me11 = me[ 11 ];
		const me12 = me[ 12 ], me13 = me[ 13 ], me14 = me[ 14 ], me15 = me[ 15 ];

		planes[ 0 ].setComponents( me3 - me0, me7 - me4, me11 - me8, me15 - me12 ).normalize();
		planes[ 1 ].setComponents( me3 + me0, me7 + me4, me11 + me8, me15 + me12 ).normalize();
		planes[ 2 ].setComponents( me3 + me1, me7 + me5, me11 + me9, me15 + me13 ).normalize();
		planes[ 3 ].setComponents( me3 - me1, me7 - me5, me11 - me9, me15 - me13 ).normalize();
		planes[ 4 ].setComponents( me3 - me2, me7 - me6, me11 - me10, me15 - me14 ).normalize();

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			planes[ 5 ].setComponents( me3 + me2, me7 + me6, me11 + me10, me15 + me14 ).normalize();

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			planes[ 5 ].setComponents( me2, me6, me10, me14 ).normalize();

		} else {

			throw new Error( 'THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' + coordinateSystem );

		}

		return this;

	}

	intersectsObject( object ) {

		if ( object.boundingSphere !== undefined ) {

			if ( object.boundingSphere === null ) object.computeBoundingSphere();

			_sphere$5.copy( object.boundingSphere ).applyMatrix4( object.matrixWorld );

		} else {

			const geometry = object.geometry;

			if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

			_sphere$5.copy( geometry.boundingSphere ).applyMatrix4( object.matrixWorld );

		}

		return this.intersectsSphere( _sphere$5 );

	}

	intersectsSprite( sprite ) {

		_sphere$5.center.set( 0, 0, 0 );
		_sphere$5.radius = 0.7071067811865476;
		_sphere$5.applyMatrix4( sprite.matrixWorld );

		return this.intersectsSphere( _sphere$5 );

	}

	intersectsSphere( sphere ) {

		const planes = this.planes;
		const center = sphere.center;
		const negRadius = - sphere.radius;

		for ( let i = 0; i < 6; i ++ ) {

			const distance = planes[ i ].distanceToPoint( center );

			if ( distance < negRadius ) {

				return false;

			}

		}

		return true;

	}

	intersectsBox( box ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			const plane = planes[ i ];

			// corner at max distance

			_vector$7.x = plane.normal.x > 0 ? box.max.x : box.min.x;
			_vector$7.y = plane.normal.y > 0 ? box.max.y : box.min.y;
			_vector$7.z = plane.normal.z > 0 ? box.max.z : box.min.z;

			if ( plane.distanceToPoint( _vector$7 ) < 0 ) {

				return false;

			}

		}

		return true;

	}

	containsPoint( point ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			if ( planes[ i ].distanceToPoint( point ) < 0 ) {

				return false;

			}

		}

		return true;

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

function WebGLAnimation() {

	let context = null;
	let isAnimating = false;
	let animationLoop = null;
	let requestId = null;

	function onAnimationFrame( time, frame ) {

		animationLoop( time, frame );

		requestId = context.requestAnimationFrame( onAnimationFrame );

	}

	return {

		start: function () {

			if ( isAnimating === true ) return;
			if ( animationLoop === null ) return;

			requestId = context.requestAnimationFrame( onAnimationFrame );

			isAnimating = true;

		},

		stop: function () {

			context.cancelAnimationFrame( requestId );

			isAnimating = false;

		},

		setAnimationLoop: function ( callback ) {

			animationLoop = callback;

		},

		setContext: function ( value ) {

			context = value;

		}

	};

}

function WebGLAttributes( gl, capabilities ) {

	const isWebGL2 = capabilities.isWebGL2;

	const buffers = new WeakMap();

	function createBuffer( attribute, bufferType ) {

		const array = attribute.array;
		const usage = attribute.usage;
		const size = array.byteLength;

		const buffer = gl.createBuffer();

		gl.bindBuffer( bufferType, buffer );
		gl.bufferData( bufferType, array, usage );

		attribute.onUploadCallback();

		let type;

		if ( array instanceof Float32Array ) {

			type = gl.FLOAT;

		} else if ( array instanceof Uint16Array ) {

			if ( attribute.isFloat16BufferAttribute ) {

				if ( isWebGL2 ) {

					type = gl.HALF_FLOAT;

				} else {

					throw new Error( 'THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.' );

				}

			} else {

				type = gl.UNSIGNED_SHORT;

			}

		} else if ( array instanceof Int16Array ) {

			type = gl.SHORT;

		} else if ( array instanceof Uint32Array ) {

			type = gl.UNSIGNED_INT;

		} else if ( array instanceof Int32Array ) {

			type = gl.INT;

		} else if ( array instanceof Int8Array ) {

			type = gl.BYTE;

		} else if ( array instanceof Uint8Array ) {

			type = gl.UNSIGNED_BYTE;

		} else if ( array instanceof Uint8ClampedArray ) {

			type = gl.UNSIGNED_BYTE;

		} else {

			throw new Error( 'THREE.WebGLAttributes: Unsupported buffer data format: ' + array );

		}

		return {
			buffer: buffer,
			type: type,
			bytesPerElement: array.BYTES_PER_ELEMENT,
			version: attribute.version,
			size: size
		};

	}

	function updateBuffer( buffer, attribute, bufferType ) {

		const array = attribute.array;
		const updateRange = attribute._updateRange; // deprecated
		const updateRanges = attribute.updateRanges;

		gl.bindBuffer( bufferType, buffer );

		if ( updateRange.count === - 1 && updateRanges.length === 0 ) {

			// Not using update ranges
			gl.bufferSubData( bufferType, 0, array );

		}

		if ( updateRanges.length !== 0 ) {

			for ( let i = 0, l = updateRanges.length; i < l; i ++ ) {

				const range = updateRanges[ i ];
				if ( isWebGL2 ) {

					gl.bufferSubData( bufferType, range.start * array.BYTES_PER_ELEMENT,
						array, range.start, range.count );

				} else {

					gl.bufferSubData( bufferType, range.start * array.BYTES_PER_ELEMENT,
						array.subarray( range.start, range.start + range.count ) );

				}

			}

			attribute.clearUpdateRanges();

		}

		// deprecated
		if ( updateRange.count !== - 1 ) {

			if ( isWebGL2 ) {

				gl.bufferSubData( bufferType, updateRange.offset * array.BYTES_PER_ELEMENT,
					array, updateRange.offset, updateRange.count );

			} else {

				gl.bufferSubData( bufferType, updateRange.offset * array.BYTES_PER_ELEMENT,
					array.subarray( updateRange.offset, updateRange.offset + updateRange.count ) );

			}

			updateRange.count = - 1; // reset range

		}

		attribute.onUploadCallback();

	}

	//

	function get( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		return buffers.get( attribute );

	}

	function remove( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		const data = buffers.get( attribute );

		if ( data ) {

			gl.deleteBuffer( data.buffer );

			buffers.delete( attribute );

		}

	}

	function update( attribute, bufferType ) {

		if ( attribute.isGLBufferAttribute ) {

			const cached = buffers.get( attribute );

			if ( ! cached || cached.version < attribute.version ) {

				buffers.set( attribute, {
					buffer: attribute.buffer,
					type: attribute.type,
					bytesPerElement: attribute.elementSize,
					version: attribute.version
				} );

			}

			return;

		}

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		const data = buffers.get( attribute );

		if ( data === undefined ) {

			buffers.set( attribute, createBuffer( attribute, bufferType ) );

		} else if ( data.version < attribute.version ) {

			if ( data.size !== attribute.array.byteLength ) {

				throw new Error( 'THREE.WebGLAttributes: The size of the buffer attribute\'s array buffer does not match the original size. Resizing buffer attributes is not supported.' );

			}

			updateBuffer( data.buffer, attribute, bufferType );

			data.version = attribute.version;

		}

	}

	return {

		get: get,
		remove: remove,
		update: update

	};

}

class PlaneGeometry extends BufferGeometry {

	constructor( width = 1, height = 1, widthSegments = 1, heightSegments = 1 ) {

		super();

		this.type = 'PlaneGeometry';

		this.parameters = {
			width: width,
			height: height,
			widthSegments: widthSegments,
			heightSegments: heightSegments
		};

		const width_half = width / 2;
		const height_half = height / 2;

		const gridX = Math.floor( widthSegments );
		const gridY = Math.floor( heightSegments );

		const gridX1 = gridX + 1;
		const gridY1 = gridY + 1;

		const segment_width = width / gridX;
		const segment_height = height / gridY;

		//

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		for ( let iy = 0; iy < gridY1; iy ++ ) {

			const y = iy * segment_height - height_half;

			for ( let ix = 0; ix < gridX1; ix ++ ) {

				const x = ix * segment_width - width_half;

				vertices.push( x, - y, 0 );

				normals.push( 0, 0, 1 );

				uvs.push( ix / gridX );
				uvs.push( 1 - ( iy / gridY ) );

			}

		}

		for ( let iy = 0; iy < gridY; iy ++ ) {

			for ( let ix = 0; ix < gridX; ix ++ ) {

				const a = ix + gridX1 * iy;
				const b = ix + gridX1 * ( iy + 1 );
				const c = ( ix + 1 ) + gridX1 * ( iy + 1 );
				const d = ( ix + 1 ) + gridX1 * iy;

				indices.push( a, b, d );
				indices.push( b, c, d );

			}

		}

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new PlaneGeometry( data.width, data.height, data.widthSegments, data.heightSegments );

	}

}

var alphahash_fragment = "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif";

var alphahash_pars_fragment = "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif";

var alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif";

var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif";

var alphatest_fragment = "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif";

var alphatest_pars_fragment = "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif";

var aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif";

var aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";

var batching_pars_vertex = "#ifdef USE_BATCHING\n\tattribute float batchId;\n\tuniform highp sampler2D batchingTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif";

var batching_vertex = "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif";

var begin_vertex = "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif";

var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif";

var bsdfs = "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated";

var iridescence_fragment = "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif";

var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif";

var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif";

var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif";

var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif";

var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif";

var color_fragment = "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif";

var color_pars_fragment = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif";

var color_pars_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif";

var color_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif";

var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated";

var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif";

var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif";

var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif";

var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif";

var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif";

var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif";

var colorspace_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );";

var colorspace_pars_fragment = "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}";

var envmap_fragment = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif";

var envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif";

var envmap_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif";

var envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif";

var envmap_vertex = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif";

var fog_vertex = "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif";

var fog_pars_vertex = "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif";

var fog_fragment = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif";

var fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif";

var gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}";

var lightmap_fragment = "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif";

var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";

var lights_lambert_fragment = "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;";

var lights_lambert_pars_fragment = "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert";

var lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif";

var envmap_physical_pars_fragment = "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif";

var lights_toon_fragment = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;";

var lights_toon_pars_fragment = "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon";

var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;";

var lights_phong_pars_fragment = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong";

var lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif";

var lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}";

var lights_fragment_begin = "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif";

var lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif";

var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif";

var logdepthbuf_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif";

var logdepthbuf_pars_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif";

var logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif";

var logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif";

var map_fragment = "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif";

var map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif";

var map_particle_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif";

var map_particle_pars_fragment = "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif";

var metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif";

var metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif";

var morphcolor_vertex = "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif";

var morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif";

var morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif";

var morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif";

var normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;";

var normal_fragment_maps = "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif";

var normal_pars_fragment = "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif";

var normal_pars_vertex = "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif";

var normal_vertex = "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif";

var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif";

var clearcoat_normal_fragment_begin = "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif";

var clearcoat_normal_fragment_maps = "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif";

var clearcoat_pars_fragment = "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif";

var iridescence_pars_fragment = "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif";

var opaque_fragment = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );";

var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}";

var premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif";

var project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;";

var dithering_fragment = "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif";

var dithering_pars_fragment = "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif";

var roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif";

var roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif";

var shadowmap_pars_fragment = "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif";

var shadowmap_pars_vertex = "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif";

var shadowmap_vertex = "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif";

var shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}";

var skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";

var skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif";

var skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif";

var skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif";

var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";

var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";

var tonemapping_fragment = "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif";

var tonemapping_pars_fragment = "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor *= toneMappingExposure;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\treturn color;\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }";

var transmission_fragment = "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif";

var transmission_pars_fragment = "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif";

var uv_pars_fragment = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif";

var uv_pars_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif";

var uv_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif";

var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif";

const vertex$h = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}";

const fragment$h = "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$g = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}";

const fragment$g = "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$f = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}";

const fragment$f = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$e = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}";

const fragment$e = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}";

const vertex$d = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}";

const fragment$d = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}";

const vertex$c = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}";

const fragment$c = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}";

const vertex$b = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}";

const fragment$b = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}";

const vertex$a = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}";

const fragment$a = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}";

const vertex$9 = "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}";

const fragment$9 = "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}";

const vertex$8 = "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}";

const fragment$8 = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>ë;ÛVòµë(š+myÙ…äÄ¹½Áä É…å…ÍÑ•È¹É…ä€¤¹…ÁÁ±å5…ÑÉ¥àÐ }¥¹Ù•ÉÍ•5…ÑÉ¥àÄ€¤ì(($%½¹ÍÐ±½…±Q¡É•Í¡½±€ôÑ¡É•Í¡½±€¼€ € Ñ¡¥Ì¹Í…±”¹à€¬Ñ¡¥Ì¹Í…±”¹ä€¬Ñ¡¥Ì¹Í…±”¹è€¤€¼€Ì€¤ì($%½¹ÍÐ±½…±Q¡É•Í¡½±‘MÄ€ô±½…±Q¡É•Í¡½±€¨±½…±Q¡É•Í¡½±ì(($%½¹ÍÐÙMÑ…ÉÐ€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÙ¹€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ¥¹Ñ•ÉM•µ•¹Ð€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ¥¹Ñ•ÉI…ä€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÍÑ•À€ôÑ¡¥Ì¹¥Í1¥¹•M•µ•¹ÑÌ€ü€È€è€Äì(($%½¹ÍÐ¥¹‘•à€ô•½µ•ÑÉä¹¥¹‘•àì($%½¹ÍÐ…ÑÑÉ¥‰ÕÑ•Ì€ô•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ìì($%½¹ÍÐÁ½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”€ô…ÑÑÉ¥‰ÕÑ•Ì¹Á½Í¥Ñ¥½¸ì(($%¥˜€ ¥¹‘•à€„ôô¹Õ±°€¤ì(($$%½¹ÍÐÍÑ…ÉÐ€ô5…Ñ ¹µ…à €À°‘É…ÝI…¹”¹ÍÑ…ÉÐ€¤ì($$%½¹ÍÐ•¹€ô5…Ñ ¹µ¥¸ ¥¹‘•à¹½Õ¹Ð°€ ‘É…ÝI…¹”¹ÍÑ…ÉÐ€¬‘É…ÝI…¹”¹½Õ¹Ð€¤€¤ì(($$%™½È€ ±•Ð¤€ôÍÑ…ÉÐ°°€ô•¹€´€Äì¤€ð°ì¤€¬ôÍÑ•À€¤ì(($$$%½¹ÍÐ„€ô¥¹‘•à¹•Ñ` ¤€¤ì($$$%½¹ÍÐˆ€ô¥¹‘•à¹•Ñ` ¤€¬€Ä€¤ì(($$$%ÙMÑ…ÉÐ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°„€¤ì($$$%Ù¹¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°ˆ€¤ì(($$$%½¹ÍÐ‘¥ÍÑMÄ€ô}É…äÄ¹‘¥ÍÑ…¹•MÅQ½M•µ•¹Ð ÙMÑ…ÉÐ°Ù¹°¥¹Ñ•ÉI…ä°¥¹Ñ•ÉM•µ•¹Ð€¤ì(($$$%¥˜€ ‘¥ÍÑMÄ€ø±½…±Q¡É•Í¡½±‘MÄ€¤½¹Ñ¥¹Õ”ì(($$$%¥¹Ñ•ÉI…ä¹…ÁÁ±å5…ÑÉ¥àÐ Ñ¡¥Ì¹µ…ÑÉ¥á]½É±€¤ì€¼½5½Ù”‰…¬Ñ¼Ý½É±ÍÁ…”™½È‘¥ÍÑ…¹”…±Õ±…Ñ¥½¸(($$$%½¹ÍÐ‘¥ÍÑ…¹”€ôÉ…å…ÍÑ•È¹É…ä¹½É¥¥¸¹‘¥ÍÑ…¹•Q¼ ¥¹Ñ•ÉI…ä€¤ì(($$$%¥˜€ ‘¥ÍÑ…¹”€ðÉ…å…ÍÑ•È¹¹•…Èñð‘¥ÍÑ…¹”€øÉ…å…ÍÑ•È¹™…È€¤½¹Ñ¥¹Õ”ì(($$$%¥¹Ñ•ÉÍ•ÑÌ¹ÁÕÍ  ì(($$$$%‘¥ÍÑ…¹”è‘¥ÍÑ…¹”°($$$$$¼¼]¡…Ð‘¼Ý”Ý…¹Ðü¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð½¸Ñ¡”É…ä½È½¸Ñ¡”Í•µ•¹Ðüü($$$$$¼¼Á½¥¹ÐèÉ…å…ÍÑ•È¹É…ä¹…Ð ‘¥ÍÑ…¹”€¤°($$$$%Á½¥¹Ðè¥¹Ñ•ÉM•µ•¹Ð¹±½¹” ¤¹…ÁÁ±å5…ÑÉ¥àÐ Ñ¡¥Ì¹µ…ÑÉ¥á]½É±€¤°($$$$%¥¹‘•àè¤°($$$$%™…”è¹Õ±°°($$$$%™…•%¹‘•àè¹Õ±°°($$$$%½‰©•ÐèÑ¡¥Ì(($$$%ô€¤ì(($$%ô(($%ô•±Í”ì(($$%½¹ÍÐÍÑ…ÉÐ€ô5…Ñ ¹µ…à €À°‘É…ÝI…¹”¹ÍÑ…ÉÐ€¤ì($$%½¹ÍÐ•¹€ô5…Ñ ¹µ¥¸ Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”¹½Õ¹Ð°€ ‘É…ÝI…¹”¹ÍÑ…ÉÐ€¬‘É…ÝI…¹”¹½Õ¹Ð€¤€¤ì(($$%™½È€ ±•Ð¤€ôÍÑ…ÉÐ°°€ô•¹€´€Äì¤€ð°ì¤€¬ôÍÑ•À€¤ì(($$$%ÙMÑ…ÉÐ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°¤€¤ì($$$%Ù¹¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°¤€¬€Ä€¤ì(($$$%½¹ÍÐ‘¥ÍÑMÄ€ô}É…äÄ¹‘¥ÍÑ…¹•MÅQ½M•µ•¹Ð ÙMÑ…ÉÐ°Ù¹°¥¹Ñ•ÉI…ä°¥¹Ñ•ÉM•µ•¹Ð€¤ì(($$$%¥˜€ ‘¥ÍÑMÄ€ø±½…±Q¡É•Í¡½±‘MÄ€¤½¹Ñ¥¹Õ”ì(($$$%¥¹Ñ•ÉI…ä¹…ÁÁ±å5…ÑÉ¥àÐ Ñ¡¥Ì¹µ…ÑÉ¥á]½É±€¤ì€¼½5½Ù”‰…¬Ñ¼Ý½É±ÍÁ…”™½È‘¥ÍÑ…¹”…±Õ±…Ñ¥½¸(($$$%½¹ÍÐ‘¥ÍÑ…¹”€ôÉ…å…ÍÑ•È¹É…ä¹½É¥¥¸¹‘¥ÍÑ…¹•Q¼ ¥¹Ñ•ÉI…ä€¤ì(($$$%¥˜€ ‘¥ÍÑ…¹”€ðÉ…å…ÍÑ•È¹¹•…Èñð‘¥ÍÑ…¹”€øÉ…å…ÍÑ•È¹™…È€¤½¹Ñ¥¹Õ”ì(($$$%¥¹Ñ•ÉÍ•ÑÌ¹ÁÕÍ  ì(($$$$%‘¥ÍÑ…¹”è‘¥ÍÑ…¹”°($$$$$¼¼]¡…Ð‘¼Ý”Ý…¹Ðü¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð½¸Ñ¡”É…ä½È½¸Ñ¡”Í•µ•¹Ðüü($$$$$¼¼Á½¥¹ÐèÉ…å…ÍÑ•È¹É…ä¹…Ð ‘¥ÍÑ…¹”€¤°($$$$%Á½¥¹Ðè¥¹Ñ•ÉM•µ•¹Ð¹±½¹” ¤¹…ÁÁ±å5…ÑÉ¥àÐ Ñ¡¥Ì¹µ…ÑÉ¥á]½É±€¤°($$$$%¥¹‘•àè¤°($$$$%™…”è¹Õ±°°($$$$%™…•%¹‘•àè¹Õ±°°($$$$%½‰©•ÐèÑ¡¥Ì(($$$%ô€¤ì(($$%ô(($%ô((%ô((%ÕÁ‘…Ñ•5½ÉÁ¡Q…É•ÑÌ ¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì(($%½¹ÍÐµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€ô•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ìì($%½¹ÍÐ­•åÌ€ô=‰©•Ð¹­•åÌ µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($%¥˜€ ­•åÌ¹±•¹Ñ €ø€À€¤ì(($$%½¹ÍÐµ½ÉÁ¡ÑÑÉ¥‰ÕÑ”€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Íl­•åÍl€Àttì(($$%¥˜€ µ½ÉÁ¡ÑÑÉ¥‰ÕÑ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì€ômtì($$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…Éä€ôíôì(($$$%™½È€ ±•Ð´€ô€À°µ°€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ”¹±•¹Ñ ì´€ðµ°ì´€¬¬€¤ì(($$$$%½¹ÍÐ¹…µ”€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•l´t¹¹…µ”ñðMÑÉ¥¹œ ´€¤ì(($$$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì¹ÁÕÍ  €À€¤ì($$$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…Éål¹…µ”t€ô´ì(($$$%ô(($$%ô(($%ô((%ô()ô()½¹ÍÐ}ÍÑ…ÉÐ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}•¹€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌ1¥¹•M•µ•¹ÑÌ•áÑ•¹‘Ì1¥¹”ì((%½¹ÍÑÉÕÑ½È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹¥Í1¥¹•M•µ•¹ÑÌ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1¥¹•M•µ•¹ÑÌœì((%ô((%½µÁÕÑ•1¥¹•¥ÍÑ…¹•Ì ¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì(($$¼¼Ý”…ÍÍÕµ”¹½¸µ¥¹‘•á••½µ•ÑÉä(($%¥˜€ •½µ•ÑÉä¹¥¹‘•à€ôôô¹Õ±°€¤ì(($$%½¹ÍÐÁ½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”€ô•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹Á½Í¥Ñ¥½¸ì($$%½¹ÍÐ±¥¹•¥ÍÑ…¹•Ì€ômtì(($$%™½È€ ±•Ð¤€ô€À°°€ôÁ½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”¹½Õ¹Ðì¤€ð°ì¤€¬ô€È€¤ì(($$$%}ÍÑ…ÉÐ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°¤€¤ì($$$%}•¹¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°¤€¬€Ä€¤ì(($$$%±¥¹•¥ÍÑ…¹•Íl¤t€ô€ ¤€ôôô€À€¤€ü€À€è±¥¹•¥ÍÑ…¹•Íl¤€´€Ätì($$$%±¥¹•¥ÍÑ…¹•Íl¤€¬€Ät€ô±¥¹•¥ÍÑ…¹•Íl¤t€¬}ÍÑ…ÉÐ¹‘¥ÍÑ…¹•Q¼ }•¹€¤ì(($$%ô(($$%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €±¥¹•¥ÍÑ…¹”œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ±¥¹•¥ÍÑ…¹•Ì°€Ä€¤€¤ì(($%ô•±Í”ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹1¥¹•M•µ•¹ÑÌ¹½µÁÕÑ•1¥¹•¥ÍÑ…¹•Ì ¤è½µÁÕÑ…Ñ¥½¸½¹±äÁ½ÍÍ¥‰±”Ý¥Ñ ¹½¸µ¥¹‘•á•	Õ™™•É•½µ•ÑÉä¸œ€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ1¥¹•1½½À•áÑ•¹‘Ì1¥¹”ì((%½¹ÍÑÉÕÑ½È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹¥Í1¥¹•1½½À€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1¥¹•1½½Àœì((%ô()ô()±…ÍÌA½¥¹ÑÍ5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍA½¥¹ÑÍ5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½¥¹ÑÍ5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È €Áá™™™™™˜€¤ì(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹…±Á¡…5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹Í¥é”€ô€Äì($%Ñ¡¥Ì¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸€ôÑÉÕ”ì(($%Ñ¡¥Ì¹™½œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì(($%Ñ¡¥Ì¹µ…À€ôÍ½ÕÉ”¹µ…Àì(($%Ñ¡¥Ì¹…±Á¡…5…À€ôÍ½ÕÉ”¹…±Á¡…5…Àì(($%Ñ¡¥Ì¹Í¥é”€ôÍ½ÕÉ”¹Í¥é”ì($%Ñ¡¥Ì¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸€ôÍ½ÕÉ”¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸ì(($%Ñ¡¥Ì¹™½œ€ôÍ½ÕÉ”¹™½œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}¥¹Ù•ÉÍ•5…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}É…ä€ô€¼©}}AUI}|¨¼¹•ÜI…ä ¤ì)½¹ÍÐ}ÍÁ¡•É”€ô€¼©}}AUI}|¨¼¹•ÜMÁ¡•É” ¤ì)½¹ÍÐ}Á½Í¥Ñ¥½¸È€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌA½¥¹ÑÌ•áÑ•¹‘Ì=‰©•ÐÍì((%½¹ÍÑÉÕÑ½È •½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤°µ…Ñ•É¥…°€ô¹•ÜA½¥¹ÑÍ5…Ñ•É¥…° ¤€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍA½¥¹ÑÌ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½¥¹ÑÌœì(($%Ñ¡¥Ì¹•½µ•ÑÉä€ô•½µ•ÑÉäì($%Ñ¡¥Ì¹µ…Ñ•É¥…°€ôµ…Ñ•É¥…°ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ•5½ÉÁ¡Q…É•ÑÌ ¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹µ…Ñ•É¥…°€ôÉÉ…ä¹¥ÍÉÉ…ä Í½ÕÉ”¹µ…Ñ•É¥…°€¤€üÍ½ÕÉ”¹µ…Ñ•É¥…°¹Í±¥” ¤€èÍ½ÕÉ”¹µ…Ñ•É¥…°ì($%Ñ¡¥Ì¹•½µ•ÑÉä€ôÍ½ÕÉ”¹•½µ•ÑÉäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%É…å…ÍÐ É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì($%½¹ÍÐµ…ÑÉ¥á]½É±€ôÑ¡¥Ì¹µ…ÑÉ¥á]½É±ì($%½¹ÍÐÑ¡É•Í¡½±€ôÉ…å…ÍÑ•È¹Á…É…µÌ¹A½¥¹ÑÌ¹Ñ¡É•Í¡½±ì($%½¹ÍÐ‘É…ÝI…¹”€ô•½µ•ÑÉä¹‘É…ÝI…¹”ì(($$¼¼¡•­¥¹œ‰½Õ¹‘¥¹MÁ¡•É”‘¥ÍÑ…¹”Ñ¼É…ä(($%¥˜€ •½µ•ÑÉä¹‰½Õ¹‘¥¹MÁ¡•É”€ôôô¹Õ±°€¤•½µ•ÑÉä¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì(($%}ÍÁ¡•É”¹½Áä •½µ•ÑÉä¹‰½Õ¹‘¥¹MÁ¡•É”€¤ì($%}ÍÁ¡•É”¹…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥á]½É±€¤ì($%}ÍÁ¡•É”¹É…‘¥ÕÌ€¬ôÑ¡É•Í¡½±ì(($%¥˜€ É…å…ÍÑ•È¹É…ä¹¥¹Ñ•ÉÍ•ÑÍMÁ¡•É” }ÍÁ¡•É”€¤€ôôô™…±Í”€¤É•ÑÕÉ¸ì(($$¼¼(($%}¥¹Ù•ÉÍ•5…ÑÉ¥à¹½Áä µ…ÑÉ¥á]½É±€¤¹¥¹Ù•ÉÐ ¤ì($%}É…ä¹½Áä É…å…ÍÑ•È¹É…ä€¤¹…ÁÁ±å5…ÑÉ¥àÐ }¥¹Ù•ÉÍ•5…ÑÉ¥à€¤ì(($%½¹ÍÐ±½…±Q¡É•Í¡½±€ôÑ¡É•Í¡½±€¼€ € Ñ¡¥Ì¹Í…±”¹à€¬Ñ¡¥Ì¹Í…±”¹ä€¬Ñ¡¥Ì¹Í…±”¹è€¤€¼€Ì€¤ì($%½¹ÍÐ±½…±Q¡É•Í¡½±‘MÄ€ô±½…±Q¡É•Í¡½±€¨±½…±Q¡É•Í¡½±ì(($%½¹ÍÐ¥¹‘•à€ô•½µ•ÑÉä¹¥¹‘•àì($%½¹ÍÐ…ÑÑÉ¥‰ÕÑ•Ì€ô•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ìì($%½¹ÍÐÁ½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”€ô…ÑÑÉ¥‰ÕÑ•Ì¹Á½Í¥Ñ¥½¸ì(($%¥˜€ ¥¹‘•à€„ôô¹Õ±°€¤ì(($$%½¹ÍÐÍÑ…ÉÐ€ô5…Ñ ¹µ…à €À°‘É…ÝI…¹”¹ÍÑ…ÉÐ€¤ì($$%½¹ÍÐ•¹€ô5…Ñ ¹µ¥¸ ¥¹‘•à¹½Õ¹Ð°€ ‘É…ÝI…¹”¹ÍÑ…ÉÐ€¬‘É…ÝI…¹”¹½Õ¹Ð€¤€¤ì(($$%™½È€ ±•Ð¤€ôÍÑ…ÉÐ°¥°€ô•¹ì¤€ð¥°ì¤€¬¬€¤ì(($$$%½¹ÍÐ„€ô¥¹‘•à¹•Ñ` ¤€¤ì(($$$%}Á½Í¥Ñ¥½¸È¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°„€¤ì(($$$%Ñ•ÍÑA½¥¹Ð }Á½Í¥Ñ¥½¸È°„°±½…±Q¡É•Í¡½±‘MÄ°µ…ÑÉ¥á]½É±°É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ°Ñ¡¥Ì€¤ì(($$%ô(($%ô•±Í”ì(($$%½¹ÍÐÍÑ…ÉÐ€ô5…Ñ ¹µ…à €À°‘É…ÝI…¹”¹ÍÑ…ÉÐ€¤ì($$%½¹ÍÐ•¹€ô5…Ñ ¹µ¥¸ Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”¹½Õ¹Ð°€ ‘É…ÝI…¹”¹ÍÑ…ÉÐ€¬‘É…ÝI…¹”¹½Õ¹Ð€¤€¤ì(($$%™½È€ ±•Ð¤€ôÍÑ…ÉÐ°°€ô•¹ì¤€ð°ì¤€¬¬€¤ì(($$$%}Á½Í¥Ñ¥½¸È¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÉ¥‰ÕÑ”°¤€¤ì(($$$%Ñ•ÍÑA½¥¹Ð }Á½Í¥Ñ¥½¸È°¤°±½…±Q¡É•Í¡½±‘MÄ°µ…ÑÉ¥á]½É±°É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ°Ñ¡¥Ì€¤ì(($$%ô(($%ô((%ô((%ÕÁ‘…Ñ•5½ÉÁ¡Q…É•ÑÌ ¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì(($%½¹ÍÐµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€ô•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ìì($%½¹ÍÐ­•åÌ€ô=‰©•Ð¹­•åÌ µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($%¥˜€ ­•åÌ¹±•¹Ñ €ø€À€¤ì(($$%½¹ÍÐµ½ÉÁ¡ÑÑÉ¥‰ÕÑ”€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Íl­•åÍl€Àttì(($$%¥˜€ µ½ÉÁ¡ÑÑÉ¥‰ÕÑ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì€ômtì($$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…Éä€ôíôì(($$$%™½È€ ±•Ð´€ô€À°µ°€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ”¹±•¹Ñ ì´€ðµ°ì´€¬¬€¤ì(($$$$%½¹ÍÐ¹…µ”€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•l´t¹¹…µ”ñðMÑÉ¥¹œ ´€¤ì(($$$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì¹ÁÕÍ  €À€¤ì($$$$%Ñ¡¥Ì¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…Éål¹…µ”t€ô´ì(($$$%ô(($$%ô(($%ô((%ô()ô()™Õ¹Ñ¥½¸Ñ•ÍÑA½¥¹Ð Á½¥¹Ð°¥¹‘•à°±½…±Q¡É•Í¡½±‘MÄ°µ…ÑÉ¥á]½É±°É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ°½‰©•Ð€¤ì((%½¹ÍÐÉ…åA½¥¹Ñ¥ÍÑ…¹•MÄ€ô}É…ä¹‘¥ÍÑ…¹•MÅQ½A½¥¹Ð Á½¥¹Ð€¤ì((%¥˜€ É…åA½¥¹Ñ¥ÍÑ…¹•MÄ€ð±½…±Q¡É•Í¡½±‘MÄ€¤ì(($%½¹ÍÐ¥¹Ñ•ÉÍ•ÑA½¥¹Ð€ô¹•ÜY•Ñ½ÈÌ ¤ì(($%}É…ä¹±½Í•ÍÑA½¥¹ÑQ½A½¥¹Ð Á½¥¹Ð°¥¹Ñ•ÉÍ•ÑA½¥¹Ð€¤ì($%¥¹Ñ•ÉÍ•ÑA½¥¹Ð¹…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥á]½É±€¤ì(($%½¹ÍÐ‘¥ÍÑ…¹”€ôÉ…å…ÍÑ•È¹É…ä¹½É¥¥¸¹‘¥ÍÑ…¹•Q¼ ¥¹Ñ•ÉÍ•ÑA½¥¹Ð€¤ì(($%¥˜€ ‘¥ÍÑ…¹”€ðÉ…å…ÍÑ•È¹¹•…Èñð‘¥ÍÑ…¹”€øÉ…å…ÍÑ•È¹™…È€¤É•ÑÕÉ¸ì(($%¥¹Ñ•ÉÍ•ÑÌ¹ÁÕÍ  ì(($$%‘¥ÍÑ…¹”è‘¥ÍÑ…¹”°($$%‘¥ÍÑ…¹•Q½I…äè5…Ñ ¹ÍÅÉÐ É…åA½¥¹Ñ¥ÍÑ…¹•MÄ€¤°($$%Á½¥¹Ðè¥¹Ñ•ÉÍ•ÑA½¥¹Ð°($$%¥¹‘•àè¥¹‘•à°($$%™…”è¹Õ±°°($$%½‰©•Ðè½‰©•Ð(($%ô€¤ì((%ô()ô()±…ÍÌY¥‘•½Q•áÑÕÉ”•áÑ•¹‘ÌQ•áÑÕÉ”ì((%½¹ÍÑÉÕÑ½È Ù¥‘•¼°µ…ÁÁ¥¹œ°ÝÉ…ÁL°ÝÉ…ÁP°µ…¥±Ñ•È°µ¥¹¥±Ñ•È°™½Éµ…Ð°ÑåÁ”°…¹¥Í½ÑÉ½Áä€¤ì(($%ÍÕÁ•È Ù¥‘•¼°µ…ÁÁ¥¹œ°ÝÉ…ÁL°ÝÉ…ÁP°µ…¥±Ñ•È°µ¥¹¥±Ñ•È°™½Éµ…Ð°ÑåÁ”°…¹¥Í½ÑÉ½Áä€¤ì(($%Ñ¡¥Ì¹¥ÍY¥‘•½Q•áÑÕÉ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹µ¥¹¥±Ñ•È€ôµ¥¹¥±Ñ•È€„ôôÕ¹‘•™¥¹•€üµ¥¹¥±Ñ•È€è1¥¹•…É¥±Ñ•Èì($%Ñ¡¥Ì¹µ…¥±Ñ•È€ôµ…¥±Ñ•È€„ôôÕ¹‘•™¥¹•€üµ…¥±Ñ•È€è1¥¹•…É¥±Ñ•Èì(($%Ñ¡¥Ì¹•¹•É…Ñ•5¥Áµ…ÁÌ€ô™…±Í”ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%™Õ¹Ñ¥½¸ÕÁ‘…Ñ•Y¥‘•¼ ¤ì(($$%Í½Á”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì($$%Ù¥‘•¼¹É•ÅÕ•ÍÑY¥‘•½É…µ•…±±‰…¬ ÕÁ‘…Ñ•Y¥‘•¼€¤ì(($%ô(($%¥˜€ €É•ÅÕ•ÍÑY¥‘•½É…µ•…±±‰…¬œ¥¸Ù¥‘•¼€¤ì(($$%Ù¥‘•¼¹É•ÅÕ•ÍÑY¥‘•½É…µ•…±±‰…¬ ÕÁ‘…Ñ•Y¥‘•¼€¤ì(($%ô((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È Ñ¡¥Ì¹¥µ…”€¤¹½Áä Ñ¡¥Ì€¤ì((%ô((%ÕÁ‘…Ñ” ¤ì(($%½¹ÍÐÙ¥‘•¼€ôÑ¡¥Ì¹¥µ…”ì($%½¹ÍÐ¡…ÍY¥‘•½É…µ•…±±‰…¬€ô€É•ÅÕ•ÍÑY¥‘•½É…µ•…±±‰…¬œ¥¸Ù¥‘•¼ì(($%¥˜€ ¡…ÍY¥‘•½É…µ•…±±‰…¬€ôôô™…±Í”€˜˜Ù¥‘•¼¹É•…‘åMÑ…Ñ”€øôÙ¥‘•¼¹!Y}UII9Q}Q€¤ì(($$%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%ô((%ô()ô()±…ÍÌÉ…µ•‰Õ™™•ÉQ•áÑÕÉ”•áÑ•¹‘ÌQ•áÑÕÉ”ì((%½¹ÍÑÉÕÑ½È Ý¥‘Ñ °¡•¥¡Ð€¤ì(($%ÍÕÁ•È ìÝ¥‘Ñ °¡•¥¡Ðô€¤ì(($%Ñ¡¥Ì¹¥ÍÉ…µ•‰Õ™™•ÉQ•áÑÕÉ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹µ…¥±Ñ•È€ô9•…É•ÍÑ¥±Ñ•Èì($%Ñ¡¥Ì¹µ¥¹¥±Ñ•È€ô9•…É•ÍÑ¥±Ñ•Èì(($%Ñ¡¥Ì¹•¹•É…Ñ•5¥Áµ…ÁÌ€ô™…±Í”ì(($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô()ô()±…ÍÌ½µÁÉ•ÍÍ•‘Q•áÑÕÉ”•áÑ•¹‘ÌQ•áÑÕÉ”ì((%½¹ÍÑÉÕÑ½È µ¥Áµ…ÁÌ°Ý¥‘Ñ °¡•¥¡Ð°™½Éµ…Ð°ÑåÁ”°µ…ÁÁ¥¹œ°ÝÉ…ÁL°ÝÉ…ÁP°µ…¥±Ñ•È°µ¥¹¥±Ñ•È°…¹¥Í½ÑÉ½Áä°½±½ÉMÁ…”€¤ì(($%ÍÕÁ•È ¹Õ±°°µ…ÁÁ¥¹œ°ÝÉ…ÁL°ÝÉ…ÁP°µ…¥±Ñ•È°µ¥¹¥±Ñ•È°™½Éµ…Ð°ÑåÁ”°…¹¥Í½ÑÉ½Áä°½±½ÉMÁ…”€¤ì(($%Ñ¡¥Ì¹¥Í½µÁÉ•ÍÍ•‘Q•áÑÕÉ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹¥µ…”€ôìÝ¥‘Ñ èÝ¥‘Ñ °¡•¥¡Ðè¡•¥¡Ðôì($%Ñ¡¥Ì¹µ¥Áµ…ÁÌ€ôµ¥Áµ…ÁÌì(($$¼¼¹¼™±¥ÁÁ¥¹œ™½ÈÕ‰”Ñ•áÑÕÉ•Ì($$¼¼€¡…±Í¼™±¥ÁÁ¥¹œ‘½•Í¸ÐÝ½É¬™½È½µÁÉ•ÍÍ•Ñ•áÑÕÉ•Ì€¤(($%Ñ¡¥Ì¹™±¥Ád€ô™…±Í”ì(($$¼¼…¸Ð•¹•É…Ñ”µ¥Áµ…ÁÌ™½È½µÁÉ•ÍÍ•Ñ•áÑÕÉ•Ì($$¼¼µ¥ÁÌµÕÍÐ‰”•µ‰•‘‘•¥¸L™¥±•Ì(($%Ñ¡¥Ì¹•¹•É…Ñ•5¥Áµ…ÁÌ€ô™…±Í”ì((%ô()ô()±…ÍÌ½µÁÉ•ÍÍ•‘ÉÉ…åQ•áÑÕÉ”•áÑ•¹‘Ì½µÁÉ•ÍÍ•‘Q•áÑÕÉ”ì((%½¹ÍÑÉÕÑ½È µ¥Áµ…ÁÌ°Ý¥‘Ñ °¡•¥¡Ð°‘•ÁÑ °™½Éµ…Ð°ÑåÁ”€¤ì(($%ÍÕÁ•È µ¥Áµ…ÁÌ°Ý¥‘Ñ °¡•¥¡Ð°™½Éµ…Ð°ÑåÁ”€¤ì(($%Ñ¡¥Ì¹¥Í½µÁÉ•ÍÍ•‘ÉÉ…åQ•áÑÕÉ”€ôÑÉÕ”ì($%Ñ¡¥Ì¹¥µ…”¹‘•ÁÑ €ô‘•ÁÑ ì($%Ñ¡¥Ì¹ÝÉ…ÁH€ô±…µÁQ½‘•]É…ÁÁ¥¹œì((%ô()ô()±…ÍÌ½µÁÉ•ÍÍ•‘Õ‰•Q•áÑÕÉ”•áÑ•¹‘Ì½µÁÉ•ÍÍ•‘Q•áÑÕÉ”ì((%½¹ÍÑÉÕÑ½È ¥µ…•Ì°™½Éµ…Ð°ÑåÁ”€¤ì(($%ÍÕÁ•È Õ¹‘•™¥¹•°¥µ…•Íl€Àt¹Ý¥‘Ñ °¥µ…•Íl€Àt¹¡•¥¡Ð°™½Éµ…Ð°ÑåÁ”°Õ‰•I•™±•Ñ¥½¹5…ÁÁ¥¹œ€¤ì(($%Ñ¡¥Ì¹¥Í½µÁÉ•ÍÍ•‘Õ‰•Q•áÑÕÉ”€ôÑÉÕ”ì($%Ñ¡¥Ì¹¥ÍÕ‰•Q•áÑÕÉ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹¥µ…”€ô¥µ…•Ìì((%ô()ô()±…ÍÌ…¹Ù…ÍQ•áÑÕÉ”•áÑ•¹‘ÌQ•áÑÕÉ”ì((%½¹ÍÑÉÕÑ½È …¹Ù…Ì°µ…ÁÁ¥¹œ°ÝÉ…ÁL°ÝÉ…ÁP°µ…¥±Ñ•È°µ¥¹¥±Ñ•È°™½Éµ…Ð°ÑåÁ”°…¹¥Í½ÑÉ½Áä€¤ì(($%ÍÕÁ•È …¹Ù…Ì°µ…ÁÁ¥¹œ°ÝÉ…ÁL°ÝÉ…ÁP°µ…¥±Ñ•È°µ¥¹¥±Ñ•È°™½Éµ…Ð°ÑåÁ”°…¹¥Í½ÑÉ½Áä€¤ì(($%Ñ¡¥Ì¹¥Í…¹Ù…ÍQ•áÑÕÉ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô()ô((¼¨¨(€¨áÑ•¹Í¥‰±”ÕÉÙ”½‰©•Ð¸(€¨(€¨M½µ”½µµ½¸½˜ÕÉÙ”µ•Ñ¡½‘Ìè(€¨€¹•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€¤°€¹•ÑQ…¹•¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€¤(€¨€¹•ÑA½¥¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤°€¹•ÑQ…¹•¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤(€¨€¹•ÑA½¥¹ÑÌ ¤°€¹•ÑMÁ…•‘A½¥¹ÑÌ ¤(€¨€¹•Ñ1•¹Ñ  ¤(€¨€¹ÕÁ‘…Ñ•É1•¹Ñ¡Ì ¤(€¨(€¨Q¡¥Ì™½±±½Ý¥¹œÕÉÙ•Ì¥¹¡•É¥Ð™É½´Q!I¹ÕÉÙ”è(€¨(€¨€´´€ÉÕÉÙ•Ì€´´(€¨Q!I¹ÉÕÉÙ”(€¨Q!I¹Õ‰¥	•é¥•ÉÕÉÙ”(€¨Q!I¹±±¥ÁÍ•ÕÉÙ”(€¨Q!I¹1¥¹•ÕÉÙ”(€¨Q!I¹EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”(€¨Q!I¹MÁ±¥¹•ÕÉÙ”(€¨(€¨€´´€ÍÕÉÙ•Ì€´´(€¨Q!I¹…ÑµÕ±±I½µÕÉÙ”Ì(€¨Q!I¹Õ‰¥	•é¥•ÉÕÉÙ”Ì(€¨Q!I¹1¥¹•ÕÉÙ”Ì(€¨Q!I¹EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ì(€¨(€¨Í•É¥•Ì½˜ÕÉÙ•Ì…¸‰”É•ÁÉ•Í•¹Ñ•…Ì„Q!I¹ÕÉÙ•A…Ñ ¸(€¨(€¨¨¼()±…ÍÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€ÕÉÙ”œì(($%Ñ¡¥Ì¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ì€ô€ÈÀÀì((%ô(($¼¼Y¥ÉÑÕ…°‰…Í”±…ÍÌµ•Ñ¡½Ñ¼½Ù•ÉÝÉ¥Ñ”…¹¥µÁ±•µ•¹Ð¥¸ÍÕ‰±…ÍÍ•Ì($¼¼$´ÐlÀ€¸¸€Åt((%•ÑA½¥¹Ð €¼¨Ð°½ÁÑ¥½¹…±Q…É•Ð€¨¼€¤ì(($%½¹Í½±”¹Ý…É¸ €Q!I¹ÕÉÙ”è€¹•ÑA½¥¹Ð ¤¹½Ð¥µÁ±•µ•¹Ñ•¸œ€¤ì($%É•ÑÕÉ¸¹Õ±°ì((%ô(($¼¼•ÐÁ½¥¹Ð…ÐÉ•±…Ñ¥Ù”Á½Í¥Ñ¥½¸¥¸ÕÉÙ”…½É‘¥¹œÑ¼…ÉŒ±•¹Ñ ($¼¼€´ÔlÀ€¸¸€Åt((%•ÑA½¥¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%½¹ÍÐÐ€ôÑ¡¥Ì¹•ÑUÑ½Qµ…ÁÁ¥¹œ Ô€¤ì($%É•ÑÕÉ¸Ñ¡¥Ì¹•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€¤ì((%ô(($¼¼•ÐÍ•ÅÕ•¹”½˜Á½¥¹ÑÌÕÍ¥¹œ•ÑA½¥¹Ð Ð€¤((%•ÑA½¥¹ÑÌ ‘¥Ù¥Í¥½¹Ì€ô€Ô€¤ì(($%½¹ÍÐÁ½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð€ô€Àì€ðô‘¥Ù¥Í¥½¹Ìì€¬¬€¤ì(($$%Á½¥¹ÑÌ¹ÁÕÍ  Ñ¡¥Ì¹•ÑA½¥¹Ð €¼‘¥Ù¥Í¥½¹Ì€¤€¤ì(($%ô(($%É•ÑÕÉ¸Á½¥¹ÑÌì((%ô(($¼¼•ÐÍ•ÅÕ•¹”½˜Á½¥¹ÑÌÕÍ¥¹œ•ÑA½¥¹ÑÐ Ô€¤((%•ÑMÁ…•‘A½¥¹ÑÌ ‘¥Ù¥Í¥½¹Ì€ô€Ô€¤ì(($%½¹ÍÐÁ½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð€ô€Àì€ðô‘¥Ù¥Í¥½¹Ìì€¬¬€¤ì(($$%Á½¥¹ÑÌ¹ÁÕÍ  Ñ¡¥Ì¹•ÑA½¥¹ÑÐ €¼‘¥Ù¥Í¥½¹Ì€¤€¤ì(($%ô(($%É•ÑÕÉ¸Á½¥¹ÑÌì((%ô(($¼¼•ÐÑ½Ñ…°ÕÉÙ”…ÉŒ±•¹Ñ ((%•Ñ1•¹Ñ  ¤ì(($%½¹ÍÐ±•¹Ñ¡Ì€ôÑ¡¥Ì¹•Ñ1•¹Ñ¡Ì ¤ì($%É•ÑÕÉ¸±•¹Ñ¡Íl±•¹Ñ¡Ì¹±•¹Ñ €´€Ätì((%ô(($¼¼•Ð±¥ÍÐ½˜ÕµÕ±…Ñ¥Ù”Í•µ•¹Ð±•¹Ñ¡Ì((%•Ñ1•¹Ñ¡Ì ‘¥Ù¥Í¥½¹Ì€ôÑ¡¥Ì¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ì€¤ì(($%¥˜€ Ñ¡¥Ì¹…¡•É1•¹Ñ¡Ì€˜˜($$$ Ñ¡¥Ì¹…¡•É1•¹Ñ¡Ì¹±•¹Ñ €ôôô‘¥Ù¥Í¥½¹Ì€¬€Ä€¤€˜˜($$$„Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€¤ì(($$%É•ÑÕÉ¸Ñ¡¥Ì¹…¡•É1•¹Ñ¡Ìì(($%ô(($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ô™…±Í”ì(($%½¹ÍÐ…¡”€ômtì($%±•ÐÕÉÉ•¹Ð°±…ÍÐ€ôÑ¡¥Ì¹•ÑA½¥¹Ð €À€¤ì($%±•ÐÍÕ´€ô€Àì(($%…¡”¹ÁÕÍ  €À€¤ì(($%™½È€ ±•ÐÀ€ô€ÄìÀ€ðô‘¥Ù¥Í¥½¹ÌìÀ€¬¬€¤ì(($$%ÕÉÉ•¹Ð€ôÑ¡¥Ì¹•ÑA½¥¹Ð À€¼‘¥Ù¥Í¥½¹Ì€¤ì($$%ÍÕ´€¬ôÕÉÉ•¹Ð¹‘¥ÍÑ…¹•Q¼ ±…ÍÐ€¤ì($$%…¡”¹ÁÕÍ  ÍÕ´€¤ì($$%±…ÍÐ€ôÕÉÉ•¹Ðì(($%ô(($%Ñ¡¥Ì¹…¡•É1•¹Ñ¡Ì€ô…¡”ì(($%É•ÑÕÉ¸…¡”ì€¼¼ìÍÕµÌè…¡”°ÍÕ´èÍÕ´ôìMÕ´¥Ì¥¸Ñ¡”±…ÍÐ•±•µ•¹Ð¸((%ô((%ÕÁ‘…Ñ•É1•¹Ñ¡Ì ¤ì(($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì($%Ñ¡¥Ì¹•Ñ1•¹Ñ¡Ì ¤ì((%ô(($¼¼¥Ù•¸Ô€ €À€¸¸€Ä€¤°•Ð„ÐÑ¼™¥¹À¸Q¡¥Ì¥Ù•Ìå½ÔÁ½¥¹ÑÌÝ¡¥ …É”•ÅÕ¥‘¥ÍÑ…¹Ð((%•ÑUÑ½Qµ…ÁÁ¥¹œ Ô°‘¥ÍÑ…¹”€¤ì(($%½¹ÍÐ…É1•¹Ñ¡Ì€ôÑ¡¥Ì¹•Ñ1•¹Ñ¡Ì ¤ì(($%±•Ð¤€ô€Àì($%½¹ÍÐ¥°€ô…É1•¹Ñ¡Ì¹±•¹Ñ ì(($%±•ÐÑ…É•ÑÉ1•¹Ñ ì€¼¼Q¡”Ñ…É•Ñ•Ô‘¥ÍÑ…¹”Ù…±Õ”Ñ¼•Ð(($%¥˜€ ‘¥ÍÑ…¹”€¤ì(($$%Ñ…É•ÑÉ1•¹Ñ €ô‘¥ÍÑ…¹”ì(($%ô•±Í”ì(($$%Ñ…É•ÑÉ1•¹Ñ €ôÔ€¨…É1•¹Ñ¡Íl¥°€´€Ätì(($%ô(($$¼¼‰¥¹…ÉäÍ•…É ™½ÈÑ¡”¥¹‘•àÝ¥Ñ ±…É•ÍÐÙ…±Õ”Íµ…±±•ÈÑ¡…¸Ñ…É•ÐÔ‘¥ÍÑ…¹”(($%±•Ð±½Ü€ô€À°¡¥ €ô¥°€´€Ä°½µÁ…É¥Í½¸ì(($%Ý¡¥±”€ ±½Ü€ðô¡¥ €¤ì(($$%¤€ô5…Ñ ¹™±½½È ±½Ü€¬€ ¡¥ €´±½Ü€¤€¼€È€¤ì€¼¼±•ÍÌ±¥­•±äÑ¼½Ù•É™±½Ü°Ñ¡½Õ ÁÉ½‰…‰±ä¹½Ð¥ÍÍÕ”¡•É”°)L‘½•Í¸ÐÉ•…±±ä¡…Ù”¥¹Ñ••ÉÌ°…±°¹Õµ‰•ÉÌ…É”™±½…ÑÌ(($$%½µÁ…É¥Í½¸€ô…É1•¹Ñ¡Íl¤t€´Ñ…É•ÑÉ1•¹Ñ ì(($$%¥˜€ ½µÁ…É¥Í½¸€ð€À€¤ì(($$$%±½Ü€ô¤€¬€Äì(($$%ô•±Í”¥˜€ ½µÁ…É¥Í½¸€ø€À€¤ì(($$$%¡¥ €ô¤€´€Äì(($$%ô•±Í”ì(($$$%¡¥ €ô¤ì($$$%‰É•…¬ì(($$$$¼¼=9(($$%ô(($%ô(($%¤€ô¡¥ ì(($%¥˜€ …É1•¹Ñ¡Íl¤t€ôôôÑ…É•ÑÉ1•¹Ñ €¤ì(($$%É•ÑÕÉ¸¤€¼€ ¥°€´€Ä€¤ì(($%ô(($$¼¼Ý”½Õ±•Ð™¥¹•ÈÉ…¥¸…Ð±•¹Ñ¡Ì°½ÈÕÍ”Í¥µÁ±”¥¹Ñ•ÉÁ½±…Ñ¥½¸‰•ÑÝ••¸ÑÝ¼Á½¥¹ÑÌ(($%½¹ÍÐ±•¹Ñ¡	•™½É”€ô…É1•¹Ñ¡Íl¤tì($%½¹ÍÐ±•¹Ñ¡™Ñ•È€ô…É1•¹Ñ¡Íl¤€¬€Ätì(($%½¹ÍÐÍ•µ•¹Ñ1•¹Ñ €ô±•¹Ñ¡™Ñ•È€´±•¹Ñ¡	•™½É”ì(($$¼¼‘•Ñ•Éµ¥¹”Ý¡•É”Ý”…É”‰•ÑÝ••¸Ñ¡”€‰•™½É”œ…¹€…™Ñ•ÈœÁ½¥¹ÑÌ(($%½¹ÍÐÍ•µ•¹ÑÉ…Ñ¥½¸€ô€ Ñ…É•ÑÉ1•¹Ñ €´±•¹Ñ¡	•™½É”€¤€¼Í•µ•¹Ñ1•¹Ñ ì(($$¼¼…‘Ñ¡…Ð™É…Ñ¥½¹…°…µ½Õ¹ÐÑ¼Ð(($%½¹ÍÐÐ€ô€ ¤€¬Í•µ•¹ÑÉ…Ñ¥½¸€¤€¼€ ¥°€´€Ä€¤ì(($%É•ÑÕÉ¸Ðì((%ô(($¼¼I•ÑÕÉ¹Ì„Õ¹¥ÐÙ•Ñ½ÈÑ…¹•¹Ð…ÐÐ($¼¼%¸…Í”…¹äÍÕˆÕÉÙ”‘½•Ì¹½Ð¥µÁ±•µ•¹Ð¥ÑÌÑ…¹•¹Ð‘•É¥Ù…Ñ¥½¸°($¼¼€ÈÁ½¥¹ÑÌ„Íµ…±°‘•±Ñ„…Á…ÉÐÝ¥±°‰”ÕÍ•Ñ¼™¥¹¥ÑÌÉ…‘¥•¹Ð($¼¼Ý¡¥ Í••µÌÑ¼¥Ù”„É•…Í½¹…‰±”…ÁÁÉ½á¥µ…Ñ¥½¸((%•ÑQ…¹•¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%½¹ÍÐ‘•±Ñ„€ô€À¸ÀÀÀÄì($%±•ÐÐÄ€ôÐ€´‘•±Ñ„ì($%±•ÐÐÈ€ôÐ€¬‘•±Ñ„ì(($$¼¼…ÁÁ¥¹œ¥¸…Í”½˜‘…¹•È(($%¥˜€ ÐÄ€ð€À€¤ÐÄ€ô€Àì($%¥˜€ ÐÈ€ø€Ä€¤ÐÈ€ô€Äì(($%½¹ÍÐÁÐÄ€ôÑ¡¥Ì¹•ÑA½¥¹Ð ÐÄ€¤ì($%½¹ÍÐÁÐÈ€ôÑ¡¥Ì¹•ÑA½¥¹Ð ÐÈ€¤ì(($%½¹ÍÐÑ…¹•¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðñð€ € ÁÐÄ¹¥ÍY•Ñ½ÈÈ€¤€ü¹•ÜY•Ñ½ÈÈ ¤€è¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%Ñ…¹•¹Ð¹½Áä ÁÐÈ€¤¹ÍÕˆ ÁÐÄ€¤¹¹½Éµ…±¥é” ¤ì(($%É•ÑÕÉ¸Ñ…¹•¹Ðì((%ô((%•ÑQ…¹•¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%½¹ÍÐÐ€ôÑ¡¥Ì¹•ÑUÑ½Qµ…ÁÁ¥¹œ Ô€¤ì($%É•ÑÕÉ¸Ñ¡¥Ì¹•ÑQ…¹•¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€¤ì((%ô((%½µÁÕÑ•É•¹•ÑÉ…µ•Ì Í•µ•¹ÑÌ°±½Í•€¤ì(($$¼¼Í•”¡ÑÑÀè¼½ÝÝÜ¹Ì¹¥¹‘¥…¹„¹•‘Ô½ÁÕˆ½Ñ•¡É•Á½ÉÑÌ½QHÐÈÔ¹Á‘˜(($%½¹ÍÐ¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì(($%½¹ÍÐÑ…¹•¹ÑÌ€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐ‰¥¹½Éµ…±Ì€ômtì(($%½¹ÍÐÙ•Œ€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐµ…Ð€ô¹•Ü5…ÑÉ¥àÐ ¤ì(($$¼¼½µÁÕÑ”Ñ¡”Ñ…¹•¹ÐÙ•Ñ½ÉÌ™½È•… Í•µ•¹Ð½¸Ñ¡”ÕÉÙ”(($%™½È€ ±•Ð¤€ô€Àì¤€ðôÍ•µ•¹ÑÌì¤€¬¬€¤ì(($$%½¹ÍÐÔ€ô¤€¼Í•µ•¹ÑÌì(($$%Ñ…¹•¹ÑÍl¤t€ôÑ¡¥Ì¹•ÑQ…¹•¹ÑÐ Ô°¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%ô(($$¼¼Í•±•Ð…¸¥¹¥Ñ¥…°¹½Éµ…°Ù•Ñ½ÈÁ•ÉÁ•¹‘¥Õ±…ÈÑ¼Ñ¡”™¥ÉÍÐÑ…¹•¹ÐÙ•Ñ½È°($$¼¼…¹¥¸Ñ¡”‘¥É•Ñ¥½¸½˜Ñ¡”µ¥¹¥µÕ´Ñ…¹•¹Ðáåè½µÁ½¹•¹Ð(($%¹½Éµ…±Íl€Àt€ô¹•ÜY•Ñ½ÈÌ ¤ì($%‰¥¹½Éµ…±Íl€Àt€ô¹•ÜY•Ñ½ÈÌ ¤ì($%±•Ðµ¥¸€ô9Õµ‰•È¹5a}Y1Uì($%½¹ÍÐÑà€ô5…Ñ ¹…‰Ì Ñ…¹•¹ÑÍl€Àt¹à€¤ì($%½¹ÍÐÑä€ô5…Ñ ¹…‰Ì Ñ…¹•¹ÑÍl€Àt¹ä€¤ì($%½¹ÍÐÑè€ô5…Ñ ¹…‰Ì Ñ…¹•¹ÑÍl€Àt¹è€¤ì(($%¥˜€ Ñà€ðôµ¥¸€¤ì(($$%µ¥¸€ôÑàì($$%¹½Éµ…°¹Í•Ð €Ä°€À°€À€¤ì(($%ô(($%¥˜€ Ñä€ðôµ¥¸€¤ì(($$%µ¥¸€ôÑäì($$%¹½Éµ…°¹Í•Ð €À°€Ä°€À€¤ì(($%ô(($%¥˜€ Ñè€ðôµ¥¸€¤ì(($$%¹½Éµ…°¹Í•Ð €À°€À°€Ä€¤ì(($%ô(($%Ù•Œ¹É½ÍÍY•Ñ½ÉÌ Ñ…¹•¹ÑÍl€Àt°¹½Éµ…°€¤¹¹½Éµ…±¥é” ¤ì(($%¹½Éµ…±Íl€Àt¹É½ÍÍY•Ñ½ÉÌ Ñ…¹•¹ÑÍl€Àt°Ù•Œ€¤ì($%‰¥¹½Éµ…±Íl€Àt¹É½ÍÍY•Ñ½ÉÌ Ñ…¹•¹ÑÍl€Àt°¹½Éµ…±Íl€Àt€¤ì((($$¼¼½µÁÕÑ”Ñ¡”Í±½Ý±äµÙ…Éå¥¹œ¹½Éµ…°…¹‰¥¹½Éµ…°Ù•Ñ½ÉÌ™½È•… Í•µ•¹Ð½¸Ñ¡”ÕÉÙ”(($%™½È€ ±•Ð¤€ô€Äì¤€ðôÍ•µ•¹ÑÌì¤€¬¬€¤ì(($$%¹½Éµ…±Íl¤t€ô¹½Éµ…±Íl¤€´€Ät¹±½¹” ¤ì(($$%‰¥¹½Éµ…±Íl¤t€ô‰¥¹½Éµ…±Íl¤€´€Ät¹±½¹” ¤ì(($$%Ù•Œ¹É½ÍÍY•Ñ½ÉÌ Ñ…¹•¹ÑÍl¤€´€Ät°Ñ…¹•¹ÑÍl¤t€¤ì(($$%¥˜€ Ù•Œ¹±•¹Ñ  ¤€ø9Õµ‰•È¹AM%1=8€¤ì(($$$%Ù•Œ¹¹½Éµ…±¥é” ¤ì(($$$%½¹ÍÐÑ¡•Ñ„€ô5…Ñ ¹…½Ì ±…µÀ Ñ…¹•¹ÑÍl¤€´€Ät¹‘½Ð Ñ…¹•¹ÑÍl¤t€¤°€´€Ä°€Ä€¤€¤ì€¼¼±…µÀ™½È™±½…Ñ¥¹œÁÐ•ÉÉ½ÉÌ(($$$%¹½Éµ…±Íl¤t¹…ÁÁ±å5…ÑÉ¥àÐ µ…Ð¹µ…­•I½Ñ…Ñ¥½¹á¥Ì Ù•Œ°Ñ¡•Ñ„€¤€¤ì(($$%ô(($$%‰¥¹½Éµ…±Íl¤t¹É½ÍÍY•Ñ½ÉÌ Ñ…¹•¹ÑÍl¤t°¹½Éµ…±Íl¤t€¤ì(($%ô(($$¼¼¥˜Ñ¡”ÕÉÙ”¥Ì±½Í•°Á½ÍÑÁÉ½•ÍÌÑ¡”Ù•Ñ½ÉÌÍ¼Ñ¡”™¥ÉÍÐ…¹±…ÍÐ¹½Éµ…°Ù•Ñ½ÉÌ…É”Ñ¡”Í…µ”(($%¥˜€ ±½Í•€ôôôÑÉÕ”€¤ì(($$%±•ÐÑ¡•Ñ„€ô5…Ñ ¹…½Ì ±…µÀ ¹½Éµ…±Íl€Àt¹‘½Ð ¹½Éµ…±ÍlÍ•µ•¹ÑÌt€¤°€´€Ä°€Ä€¤€¤ì($$%Ñ¡•Ñ„€¼ôÍ•µ•¹ÑÌì(($$%¥˜€ Ñ…¹•¹ÑÍl€Àt¹‘½Ð Ù•Œ¹É½ÍÍY•Ñ½ÉÌ ¹½Éµ…±Íl€Àt°¹½Éµ…±ÍlÍ•µ•¹ÑÌt€¤€¤€ø€À€¤ì(($$$%Ñ¡•Ñ„€ô€´Ñ¡•Ñ„ì(($$%ô(($$%™½È€ ±•Ð¤€ô€Äì¤€ðôÍ•µ•¹ÑÌì¤€¬¬€¤ì(($$$$¼¼ÑÝ¥ÍÐ„±¥ÑÑ±”¸¸¸($$$%¹½Éµ…±Íl¤t¹…ÁÁ±å5…ÑÉ¥àÐ µ…Ð¹µ…­•I½Ñ…Ñ¥½¹á¥Ì Ñ…¹•¹ÑÍl¤t°Ñ¡•Ñ„€¨¤€¤€¤ì($$$%‰¥¹½Éµ…±Íl¤t¹É½ÍÍY•Ñ½ÉÌ Ñ…¹•¹ÑÍl¤t°¹½Éµ…±Íl¤t€¤ì(($$%ô(($%ô(($%É•ÑÕÉ¸ì($$%Ñ…¹•¹ÑÌèÑ…¹•¹ÑÌ°($$%¹½Éµ…±Ìè¹½Éµ…±Ì°($$%‰¥¹½Éµ…±Ìè‰¥¹½Éµ…±Ì($%ôì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ì€ôÍ½ÕÉ”¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ìì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôì($$%µ•Ñ…‘…Ñ„èì($$$%Ù•ÉÍ¥½¸è€Ð¸Ø°($$$%ÑåÁ”è€ÕÉÙ”œ°($$$%•¹•É…Ñ½Èè€ÕÉÙ”¹Ñ½)M=8œ($$%ô($%ôì(($%‘…Ñ„¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ì€ôÑ¡¥Ì¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ìì($%‘…Ñ„¹ÑåÁ”€ôÑ¡¥Ì¹ÑåÁ”ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ì€ô©Í½¸¹…É1•¹Ñ¡¥Ù¥Í¥½¹Ìì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ±±¥ÁÍ•ÕÉÙ”•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È …`€ô€À°…d€ô€À°áI…‘¥ÕÌ€ô€Ä°åI…‘¥ÕÌ€ô€Ä°…MÑ…ÉÑ¹±”€ô€À°…¹‘¹±”€ô5…Ñ ¹A$€¨€È°…±½­Ý¥Í”€ô™…±Í”°…I½Ñ…Ñ¥½¸€ô€À€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í±±¥ÁÍ•ÕÉÙ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€±±¥ÁÍ•ÕÉÙ”œì(($%Ñ¡¥Ì¹…`€ô…`ì($%Ñ¡¥Ì¹…d€ô…dì(($%Ñ¡¥Ì¹áI…‘¥ÕÌ€ôáI…‘¥ÕÌì($%Ñ¡¥Ì¹åI…‘¥ÕÌ€ôåI…‘¥ÕÌì(($%Ñ¡¥Ì¹…MÑ…ÉÑ¹±”€ô…MÑ…ÉÑ¹±”ì($%Ñ¡¥Ì¹…¹‘¹±”€ô…¹‘¹±”ì(($%Ñ¡¥Ì¹…±½­Ý¥Í”€ô…±½­Ý¥Í”ì(($%Ñ¡¥Ì¹…I½Ñ…Ñ¥½¸€ô…I½Ñ…Ñ¥½¸ì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðñð¹•ÜY•Ñ½ÈÈ ¤ì(($%½¹ÍÐÑÝ½A¤€ô5…Ñ ¹A$€¨€Èì($%±•Ð‘•±Ñ…¹±”€ôÑ¡¥Ì¹…¹‘¹±”€´Ñ¡¥Ì¹…MÑ…ÉÑ¹±”ì($%½¹ÍÐÍ…µ•A½¥¹ÑÌ€ô5…Ñ ¹…‰Ì ‘•±Ñ…¹±”€¤€ð9Õµ‰•È¹AM%1=8ì(($$¼¼•¹ÍÕÉ•ÌÑ¡…Ð‘•±Ñ…¹±”¥Ì€À€¸¸€ÈA$($%Ý¡¥±”€ ‘•±Ñ…¹±”€ð€À€¤‘•±Ñ…¹±”€¬ôÑÝ½A¤ì($%Ý¡¥±”€ ‘•±Ñ…¹±”€øÑÝ½A¤€¤‘•±Ñ…¹±”€´ôÑÝ½A¤ì(($%¥˜€ ‘•±Ñ…¹±”€ð9Õµ‰•È¹AM%1=8€¤ì(($$%¥˜€ Í…µ•A½¥¹ÑÌ€¤ì(($$$%‘•±Ñ…¹±”€ô€Àì(($$%ô•±Í”ì(($$$%‘•±Ñ…¹±”€ôÑÝ½A¤ì(($$%ô(($%ô(($%¥˜€ Ñ¡¥Ì¹…±½­Ý¥Í”€ôôôÑÉÕ”€˜˜€„Í…µ•A½¥¹ÑÌ€¤ì(($$%¥˜€ ‘•±Ñ…¹±”€ôôôÑÝ½A¤€¤ì(($$$%‘•±Ñ…¹±”€ô€´ÑÝ½A¤ì(($$%ô•±Í”ì(($$$%‘•±Ñ…¹±”€ô‘•±Ñ…¹±”€´ÑÝ½A¤ì(($$%ô(($%ô(($%½¹ÍÐ…¹±”€ôÑ¡¥Ì¹…MÑ…ÉÑ¹±”€¬Ð€¨‘•±Ñ…¹±”ì($%±•Ðà€ôÑ¡¥Ì¹…`€¬Ñ¡¥Ì¹áI…‘¥ÕÌ€¨5…Ñ ¹½Ì …¹±”€¤ì($%±•Ðä€ôÑ¡¥Ì¹…d€¬Ñ¡¥Ì¹åI…‘¥ÕÌ€¨5…Ñ ¹Í¥¸ …¹±”€¤ì(($%¥˜€ Ñ¡¥Ì¹…I½Ñ…Ñ¥½¸€„ôô€À€¤ì(($$%½¹ÍÐ½Ì€ô5…Ñ ¹½Ì Ñ¡¥Ì¹…I½Ñ…Ñ¥½¸€¤ì($$%½¹ÍÐÍ¥¸€ô5…Ñ ¹Í¥¸ Ñ¡¥Ì¹…I½Ñ…Ñ¥½¸€¤ì(($$%½¹ÍÐÑà€ôà€´Ñ¡¥Ì¹…`ì($$%½¹ÍÐÑä€ôä€´Ñ¡¥Ì¹…dì(($$$¼¼I½Ñ…Ñ”Ñ¡”Á½¥¹Ð…‰½ÕÐÑ¡”•¹Ñ•È½˜Ñ¡”•±±¥ÁÍ”¸($$%à€ôÑà€¨½Ì€´Ñä€¨Í¥¸€¬Ñ¡¥Ì¹…`ì($$%ä€ôÑà€¨Í¥¸€¬Ñä€¨½Ì€¬Ñ¡¥Ì¹…dì(($%ô(($%É•ÑÕÉ¸Á½¥¹Ð¹Í•Ð à°ä€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹…`€ôÍ½ÕÉ”¹…`ì($%Ñ¡¥Ì¹…d€ôÍ½ÕÉ”¹…dì(($%Ñ¡¥Ì¹áI…‘¥ÕÌ€ôÍ½ÕÉ”¹áI…‘¥ÕÌì($%Ñ¡¥Ì¹åI…‘¥ÕÌ€ôÍ½ÕÉ”¹åI…‘¥ÕÌì(($%Ñ¡¥Ì¹…MÑ…ÉÑ¹±”€ôÍ½ÕÉ”¹…MÑ…ÉÑ¹±”ì($%Ñ¡¥Ì¹…¹‘¹±”€ôÍ½ÕÉ”¹…¹‘¹±”ì(($%Ñ¡¥Ì¹…±½­Ý¥Í”€ôÍ½ÕÉ”¹…±½­Ý¥Í”ì(($%Ñ¡¥Ì¹…I½Ñ…Ñ¥½¸€ôÍ½ÕÉ”¹…I½Ñ…Ñ¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹…`€ôÑ¡¥Ì¹…`ì($%‘…Ñ„¹…d€ôÑ¡¥Ì¹…dì(($%‘…Ñ„¹áI…‘¥ÕÌ€ôÑ¡¥Ì¹áI…‘¥ÕÌì($%‘…Ñ„¹åI…‘¥ÕÌ€ôÑ¡¥Ì¹åI…‘¥ÕÌì(($%‘…Ñ„¹…MÑ…ÉÑ¹±”€ôÑ¡¥Ì¹…MÑ…ÉÑ¹±”ì($%‘…Ñ„¹…¹‘¹±”€ôÑ¡¥Ì¹…¹‘¹±”ì(($%‘…Ñ„¹…±½­Ý¥Í”€ôÑ¡¥Ì¹…±½­Ý¥Í”ì(($%‘…Ñ„¹…I½Ñ…Ñ¥½¸€ôÑ¡¥Ì¹…I½Ñ…Ñ¥½¸ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹…`€ô©Í½¸¹…`ì($%Ñ¡¥Ì¹…d€ô©Í½¸¹…dì(($%Ñ¡¥Ì¹áI…‘¥ÕÌ€ô©Í½¸¹áI…‘¥ÕÌì($%Ñ¡¥Ì¹åI…‘¥ÕÌ€ô©Í½¸¹åI…‘¥ÕÌì(($%Ñ¡¥Ì¹…MÑ…ÉÑ¹±”€ô©Í½¸¹…MÑ…ÉÑ¹±”ì($%Ñ¡¥Ì¹…¹‘¹±”€ô©Í½¸¹…¹‘¹±”ì(($%Ñ¡¥Ì¹…±½­Ý¥Í”€ô©Í½¸¹…±½­Ý¥Í”ì(($%Ñ¡¥Ì¹…I½Ñ…Ñ¥½¸€ô©Í½¸¹…I½Ñ…Ñ¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌÉÕÉÙ”•áÑ•¹‘Ì±±¥ÁÍ•ÕÉÙ”ì((%½¹ÍÑÉÕÑ½È …`°…d°…I…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”€¤ì(($%ÍÕÁ•È …`°…d°…I…‘¥ÕÌ°…I…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”€¤ì(($%Ñ¡¥Ì¹¥ÍÉÕÉÙ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€ÉÕÉÙ”œì((%ô()ô((¼¨¨(€¨•¹ÑÉ¥Á•Ñ…°…ÑµÕ±±I½´ÕÉÙ”€´Ý¡¥ ¥ÌÕÍ•™Õ°™½È…Ù½¥‘¥¹œ(€¨ÕÍÁÌ…¹Í•±˜µ¥¹Ñ•ÉÍ•Ñ¥½¹Ì¥¸¹½¸µÕ¹¥™½É´…ÑµÕ±°É½´ÕÉÙ•Ì¸(€¨¡ÑÑÀè¼½ÝÝÜ¹•µåÕ­Í•°¹½´½É•Í•…É ½…ÑµÕ±±É½µ}Á…É…´½…ÑµÕ±±É½´¹Á‘˜(€¨(€¨ÕÉÙ”¹ÑåÁ”…•ÁÑÌ•¹ÑÉ¥Á•Ñ…°¡‘•™…Õ±Ð¤°¡½É‘…°…¹…ÑµÕ±±É½´(€¨ÕÉÙ”¹Ñ•¹Í¥½¸¥ÌÕÍ•™½È…ÑµÕ±±É½´Ý¡¥ ‘•™…Õ±ÑÌÑ¼€À¸Ô(€¨¼(((¼¨)	…Í•½¸…¸½ÁÑ¥µ¥é•Œ¬¬Í½±ÕÑ¥½¸¥¸(€´¡ÑÑÀè¼½ÍÑ…­½Ù•É™±½Ü¹½´½ÅÕ•ÍÑ¥½¹Ì¼äÐàäÜÌØ½…ÑµÕ±°µÉ½´µÕÉÙ”µÝ¥Ñ µ¹¼µÕÍÁÌµ…¹µ¹¼µÍ•±˜µ¥¹Ñ•ÉÍ•Ñ¥½¹Ì¼(€´¡ÑÑÀè¼½¥‘•½¹”¹½´½9½‰Y4()Q¡¥ÌÕ‰¥A½±ä±…ÍÌ½Õ±‰”ÕÍ•™½ÈÉ•ÕÍ¥¹œÍ½µ”Ù…É¥…‰±•Ì…¹…±Õ±…Ñ¥½¹Ì°)‰ÕÐ™½ÈÑ¡É•”¹©ÌÕÉÙ”ÕÍ”°¥Ð½Õ±‰”Á½ÍÍ¥‰±”¥¹±¥¹•…¹™±…ÑÑ•¸¥¹Ñ¼„Í¥¹±”™Õ¹Ñ¥½¸…±°)Ý¡¥ …¸‰”Á±…•¥¸ÕÉÙ•UÑ¥±Ì¸(¨¼()™Õ¹Ñ¥½¸Õ‰¥A½±ä ¤ì((%±•ÐŒÀ€ô€À°ŒÄ€ô€À°ŒÈ€ô€À°ŒÌ€ô€Àì(($¼¨($€¨½µÁÕÑ”½•™™¥¥•¹ÑÌ™½È„Õ‰¥ŒÁ½±å¹½µ¥…°($€¨€€À¡Ì¤€ôŒÀ€¬ŒÄ©Ì€¬ŒÈ©ÍxÈ€¬ŒÌ©ÍxÌ($€¨ÍÕ Ñ¡…Ð($€¨€€À À¤€ôàÀ°À Ä¤€ôàÄ($€¨€…¹($€¨€€Àœ À¤€ôÐÀ°Àœ Ä¤€ôÐÄ¸($€¨¼(%™Õ¹Ñ¥½¸¥¹¥Ð àÀ°àÄ°ÐÀ°ÐÄ€¤ì(($%ŒÀ€ôàÀì($%ŒÄ€ôÐÀì($%ŒÈ€ô€´€Ì€¨àÀ€¬€Ì€¨àÄ€´€È€¨ÐÀ€´ÐÄì($%ŒÌ€ô€È€¨àÀ€´€È€¨àÄ€¬ÐÀ€¬ÐÄì((%ô((%É•ÑÕÉ¸ì(($%¥¹¥Ñ…ÑµÕ±±I½´è™Õ¹Ñ¥½¸€ àÀ°àÄ°àÈ°àÌ°Ñ•¹Í¥½¸€¤ì(($$%¥¹¥Ð àÄ°àÈ°Ñ•¹Í¥½¸€¨€ àÈ€´àÀ€¤°Ñ•¹Í¥½¸€¨€ àÌ€´àÄ€¤€¤ì(($%ô°(($%¥¹¥Ñ9½¹Õ¹¥™½Éµ…ÑµÕ±±I½´è™Õ¹Ñ¥½¸€ àÀ°àÄ°àÈ°àÌ°‘ÐÀ°‘ÐÄ°‘ÐÈ€¤ì(($$$¼¼½µÁÕÑ”Ñ…¹•¹ÑÌÝ¡•¸Á…É…µ•Ñ•É¥é•¥¸mÐÄ±ÐÉt($$%±•ÐÐÄ€ô€ àÄ€´àÀ€¤€¼‘ÐÀ€´€ àÈ€´àÀ€¤€¼€ ‘ÐÀ€¬‘ÐÄ€¤€¬€ àÈ€´àÄ€¤€¼‘ÐÄì($$%±•ÐÐÈ€ô€ àÈ€´àÄ€¤€¼‘ÐÄ€´€ àÌ€´àÄ€¤€¼€ ‘ÐÄ€¬‘ÐÈ€¤€¬€ àÌ€´àÈ€¤€¼‘ÐÈì(($$$¼¼É•Í…±”Ñ…¹•¹ÑÌ™½ÈÁ…É…µ•ÑÉ¥é…Ñ¥½¸¥¸lÀ°Åt($$%ÐÄ€¨ô‘ÐÄì($$%ÐÈ€¨ô‘ÐÄì(($$%¥¹¥Ð àÄ°àÈ°ÐÄ°ÐÈ€¤ì(($%ô°(($%…±Œè™Õ¹Ñ¥½¸€ Ð€¤ì(($$%½¹ÍÐÐÈ€ôÐ€¨Ðì($$%½¹ÍÐÐÌ€ôÐÈ€¨Ðì($$%É•ÑÕÉ¸ŒÀ€¬ŒÄ€¨Ð€¬ŒÈ€¨ÐÈ€¬ŒÌ€¨ÐÌì(($%ô((%ôì()ô((¼¼()½¹ÍÐÑµÀ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐÁà€ô€¼©}}AUI}|¨¼¹•ÜÕ‰¥A½±ä ¤ì)½¹ÍÐÁä€ô€¼©}}AUI}|¨¼¹•ÜÕ‰¥A½±ä ¤ì)½¹ÍÐÁè€ô€¼©}}AUI}|¨¼¹•ÜÕ‰¥A½±ä ¤ì()±…ÍÌ…ÑµÕ±±I½µÕÉÙ”Ì•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È Á½¥¹ÑÌ€ômt°±½Í•€ô™…±Í”°ÕÉÙ•QåÁ”€ô€•¹ÑÉ¥Á•Ñ…°œ°Ñ•¹Í¥½¸€ô€À¸Ô€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í…ÑµÕ±±I½µÕÉÙ”Ì€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€…ÑµÕ±±I½µÕÉÙ”Ìœì(($%Ñ¡¥Ì¹Á½¥¹ÑÌ€ôÁ½¥¹ÑÌì($%Ñ¡¥Ì¹±½Í•€ô±½Í•ì($%Ñ¡¥Ì¹ÕÉÙ•QåÁ”€ôÕÉÙ•QåÁ”ì($%Ñ¡¥Ì¹Ñ•¹Í¥½¸€ôÑ•¹Í¥½¸ì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%½¹ÍÐÁ½¥¹ÑÌ€ôÑ¡¥Ì¹Á½¥¹ÑÌì($%½¹ÍÐ°€ôÁ½¥¹ÑÌ¹±•¹Ñ ì(($%½¹ÍÐÀ€ô€ °€´€ Ñ¡¥Ì¹±½Í•€ü€À€è€Ä€¤€¤€¨Ðì($%±•Ð¥¹ÑA½¥¹Ð€ô5…Ñ ¹™±½½È À€¤ì($%±•ÐÝ•¥¡Ð€ôÀ€´¥¹ÑA½¥¹Ðì(($%¥˜€ Ñ¡¥Ì¹±½Í•€¤ì(($$%¥¹ÑA½¥¹Ð€¬ô¥¹ÑA½¥¹Ð€ø€À€ü€À€è€ 5…Ñ ¹™±½½È 5…Ñ ¹…‰Ì ¥¹ÑA½¥¹Ð€¤€¼°€¤€¬€Ä€¤€¨°ì(($%ô•±Í”¥˜€ Ý•¥¡Ð€ôôô€À€˜˜¥¹ÑA½¥¹Ð€ôôô°€´€Ä€¤ì(($$%¥¹ÑA½¥¹Ð€ô°€´€Èì($$%Ý•¥¡Ð€ô€Äì(($%ô(($%±•ÐÀÀ°ÀÌì€¼¼€ÐÁ½¥¹ÑÌ€¡ÀÄ€˜ÀÈ‘•™¥¹•‰•±½Ü¤(($%¥˜€ Ñ¡¥Ì¹±½Í•ñð¥¹ÑA½¥¹Ð€ø€À€¤ì(($$%ÀÀ€ôÁ½¥¹ÑÍl€ ¥¹ÑA½¥¹Ð€´€Ä€¤€”°tì(($%ô•±Í”ì(($$$¼¼•áÑÉ…Á½±…Ñ”™¥ÉÍÐÁ½¥¹Ð($$%ÑµÀ¹ÍÕ‰Y•Ñ½ÉÌ Á½¥¹ÑÍl€Àt°Á½¥¹ÑÍl€Ät€¤¹…‘ Á½¥¹ÑÍl€Àt€¤ì($$%ÀÀ€ôÑµÀì(($%ô(($%½¹ÍÐÀÄ€ôÁ½¥¹ÑÍl¥¹ÑA½¥¹Ð€”°tì($%½¹ÍÐÀÈ€ôÁ½¥¹ÑÍl€ ¥¹ÑA½¥¹Ð€¬€Ä€¤€”°tì(($%¥˜€ Ñ¡¥Ì¹±½Í•ñð¥¹ÑA½¥¹Ð€¬€È€ð°€¤ì(($$%ÀÌ€ôÁ½¥¹ÑÍl€ ¥¹ÑA½¥¹Ð€¬€È€¤€”°tì(($%ô•±Í”ì(($$$¼¼•áÑÉ…Á½±…Ñ”±…ÍÐÁ½¥¹Ð($$%ÑµÀ¹ÍÕ‰Y•Ñ½ÉÌ Á½¥¹ÑÍl°€´€Ät°Á½¥¹ÑÍl°€´€Èt€¤¹…‘ Á½¥¹ÑÍl°€´€Ät€¤ì($$%ÀÌ€ôÑµÀì(($%ô(($%¥˜€ Ñ¡¥Ì¹ÕÉÙ•QåÁ”€ôôô€•¹ÑÉ¥Á•Ñ…°œñðÑ¡¥Ì¹ÕÉÙ•QåÁ”€ôôô€¡½É‘…°œ€¤ì(($$$¼¼¥¹¥Ð•¹ÑÉ¥Á•Ñ…°€¼¡½É‘…°…ÑµÕ±°µI½´($$%½¹ÍÐÁ½Ü€ôÑ¡¥Ì¹ÕÉÙ•QåÁ”€ôôô€¡½É‘…°œ€ü€À¸Ô€è€À¸ÈÔì($$%±•Ð‘ÐÀ€ô5…Ñ ¹Á½Ü ÀÀ¹‘¥ÍÑ…¹•Q½MÅÕ…É• ÀÄ€¤°Á½Ü€¤ì($$%±•Ð‘ÐÄ€ô5…Ñ ¹Á½Ü ÀÄ¹‘¥ÍÑ…¹•Q½MÅÕ…É• ÀÈ€¤°Á½Ü€¤ì($$%±•Ð‘ÐÈ€ô5…Ñ ¹Á½Ü ÀÈ¹‘¥ÍÑ…¹•Q½MÅÕ…É• ÀÌ€¤°Á½Ü€¤ì(($$$¼¼Í…™•Ñä¡•¬™½ÈÉ•Á•…Ñ•Á½¥¹ÑÌ($$%¥˜€ ‘ÐÄ€ð€Å”´Ð€¤‘ÐÄ€ô€Ä¸Àì($$%¥˜€ ‘ÐÀ€ð€Å”´Ð€¤‘ÐÀ€ô‘ÐÄì($$%¥˜€ ‘ÐÈ€ð€Å”´Ð€¤‘ÐÈ€ô‘ÐÄì(($$%Áà¹¥¹¥Ñ9½¹Õ¹¥™½Éµ…ÑµÕ±±I½´ ÀÀ¹à°ÀÄ¹à°ÀÈ¹à°ÀÌ¹à°‘ÐÀ°‘ÐÄ°‘ÐÈ€¤ì($$%Áä¹¥¹¥Ñ9½¹Õ¹¥™½Éµ…ÑµÕ±±I½´ ÀÀ¹ä°ÀÄ¹ä°ÀÈ¹ä°ÀÌ¹ä°‘ÐÀ°‘ÐÄ°‘ÐÈ€¤ì($$%Áè¹¥¹¥Ñ9½¹Õ¹¥™½Éµ…ÑµÕ±±I½´ ÀÀ¹è°ÀÄ¹è°ÀÈ¹è°ÀÌ¹è°‘ÐÀ°‘ÐÄ°‘ÐÈ€¤ì(($%ô•±Í”¥˜€ Ñ¡¥Ì¹ÕÉÙ•QåÁ”€ôôô€…ÑµÕ±±É½´œ€¤ì(($$%Áà¹¥¹¥Ñ…ÑµÕ±±I½´ ÀÀ¹à°ÀÄ¹à°ÀÈ¹à°ÀÌ¹à°Ñ¡¥Ì¹Ñ•¹Í¥½¸€¤ì($$%Áä¹¥¹¥Ñ…ÑµÕ±±I½´ ÀÀ¹ä°ÀÄ¹ä°ÀÈ¹ä°ÀÌ¹ä°Ñ¡¥Ì¹Ñ•¹Í¥½¸€¤ì($$%Áè¹¥¹¥Ñ…ÑµÕ±±I½´ ÀÀ¹è°ÀÄ¹è°ÀÈ¹è°ÀÌ¹è°Ñ¡¥Ì¹Ñ•¹Í¥½¸€¤ì(($%ô(($%Á½¥¹Ð¹Í•Ð ($$%Áà¹…±Œ Ý•¥¡Ð€¤°($$%Áä¹…±Œ Ý•¥¡Ð€¤°($$%Áè¹…±Œ Ý•¥¡Ð€¤($$¤ì(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÍ½ÕÉ”¹Á½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÁ½¥¹Ð€ôÍ½ÕÉ”¹Á½¥¹ÑÍl¤tì(($$%Ñ¡¥Ì¹Á½¥¹ÑÌ¹ÁÕÍ  Á½¥¹Ð¹±½¹” ¤€¤ì(($%ô(($%Ñ¡¥Ì¹±½Í•€ôÍ½ÕÉ”¹±½Í•ì($%Ñ¡¥Ì¹ÕÉÙ•QåÁ”€ôÍ½ÕÉ”¹ÕÉÙ•QåÁ”ì($%Ñ¡¥Ì¹Ñ•¹Í¥½¸€ôÍ½ÕÉ”¹Ñ•¹Í¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹Á½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÑ¡¥Ì¹Á½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÁ½¥¹Ð€ôÑ¡¥Ì¹Á½¥¹ÑÍl¤tì($$%‘…Ñ„¹Á½¥¹ÑÌ¹ÁÕÍ  Á½¥¹Ð¹Ñ½ÉÉ…ä ¤€¤ì(($%ô(($%‘…Ñ„¹±½Í•€ôÑ¡¥Ì¹±½Í•ì($%‘…Ñ„¹ÕÉÙ•QåÁ”€ôÑ¡¥Ì¹ÕÉÙ•QåÁ”ì($%‘…Ñ„¹Ñ•¹Í¥½¸€ôÑ¡¥Ì¹Ñ•¹Í¥½¸ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹Á½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹Á½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÁ½¥¹Ð€ô©Í½¸¹Á½¥¹ÑÍl¤tì($$%Ñ¡¥Ì¹Á½¥¹ÑÌ¹ÁÕÍ  ¹•ÜY•Ñ½ÈÌ ¤¹™É½µÉÉ…ä Á½¥¹Ð€¤€¤ì(($%ô(($%Ñ¡¥Ì¹±½Í•€ô©Í½¸¹±½Í•ì($%Ñ¡¥Ì¹ÕÉÙ•QåÁ”€ô©Í½¸¹ÕÉÙ•QåÁ”ì($%Ñ¡¥Ì¹Ñ•¹Í¥½¸€ô©Í½¸¹Ñ•¹Í¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¨¨(€¨	•é¥•ÈÕÉÙ•Ì™½ÉµÕ±…Ì½‰Ñ…¥¹•™É½´(€¨¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½•Ì•åé¥•É}ÕÉÙ”(€¨¼()™Õ¹Ñ¥½¸…ÑµÕ±±I½´ Ð°ÀÀ°ÀÄ°ÀÈ°ÀÌ€¤ì((%½¹ÍÐØÀ€ô€ ÀÈ€´ÀÀ€¤€¨€À¸Ôì(%½¹ÍÐØÄ€ô€ ÀÌ€´ÀÄ€¤€¨€À¸Ôì(%½¹ÍÐÐÈ€ôÐ€¨Ðì(%½¹ÍÐÐÌ€ôÐ€¨ÐÈì(%É•ÑÕÉ¸€ €È€¨ÀÄ€´€È€¨ÀÈ€¬ØÀ€¬ØÄ€¤€¨ÐÌ€¬€ €´€Ì€¨ÀÄ€¬€Ì€¨ÀÈ€´€È€¨ØÀ€´ØÄ€¤€¨ÐÈ€¬ØÀ€¨Ð€¬ÀÄì()ô((¼¼()™Õ¹Ñ¥½¸EÕ…‘É…Ñ¥	•é¥•É@À Ð°À€¤ì((%½¹ÍÐ¬€ô€Ä€´Ðì(%É•ÑÕÉ¸¬€¨¬€¨Àì()ô()™Õ¹Ñ¥½¸EÕ…‘É…Ñ¥	•é¥•É@Ä Ð°À€¤ì((%É•ÑÕÉ¸€È€¨€ €Ä€´Ð€¤€¨Ð€¨Àì()ô()™Õ¹Ñ¥½¸EÕ…‘É…Ñ¥	•é¥•É@È Ð°À€¤ì((%É•ÑÕÉ¸Ð€¨Ð€¨Àì()ô()™Õ¹Ñ¥½¸EÕ…‘É…Ñ¥	•é¥•È Ð°ÀÀ°ÀÄ°ÀÈ€¤ì((%É•ÑÕÉ¸EÕ…‘É…Ñ¥	•é¥•É@À Ð°ÀÀ€¤€¬EÕ…‘É…Ñ¥	•é¥•É@Ä Ð°ÀÄ€¤€¬($%EÕ…‘É…Ñ¥	•é¥•É@È Ð°ÀÈ€¤ì()ô((¼¼()™Õ¹Ñ¥½¸Õ‰¥	•é¥•É@À Ð°À€¤ì((%½¹ÍÐ¬€ô€Ä€´Ðì(%É•ÑÕÉ¸¬€¨¬€¨¬€¨Àì()ô()™Õ¹Ñ¥½¸Õ‰¥	•é¥•É@Ä Ð°À€¤ì((%½¹ÍÐ¬€ô€Ä€´Ðì(%É•ÑÕÉ¸€Ì€¨¬€¨¬€¨Ð€¨Àì()ô()™Õ¹Ñ¥½¸Õ‰¥	•é¥•É@È Ð°À€¤ì((%É•ÑÕÉ¸€Ì€¨€ €Ä€´Ð€¤€¨Ð€¨Ð€¨Àì()ô()™Õ¹Ñ¥½¸Õ‰¥	•é¥•É@Ì Ð°À€¤ì((%É•ÑÕÉ¸Ð€¨Ð€¨Ð€¨Àì()ô()™Õ¹Ñ¥½¸Õ‰¥	•é¥•È Ð°ÀÀ°ÀÄ°ÀÈ°ÀÌ€¤ì((%É•ÑÕÉ¸Õ‰¥	•é¥•É@À Ð°ÀÀ€¤€¬Õ‰¥	•é¥•É@Ä Ð°ÀÄ€¤€¬Õ‰¥	•é¥•É@È Ð°ÀÈ€¤€¬($%Õ‰¥	•é¥•É@Ì Ð°ÀÌ€¤ì()ô()±…ÍÌÕ‰¥	•é¥•ÉÕÉÙ”•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ØÀ€ô¹•ÜY•Ñ½ÈÈ ¤°ØÄ€ô¹•ÜY•Ñ½ÈÈ ¤°ØÈ€ô¹•ÜY•Ñ½ÈÈ ¤°ØÌ€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍÕ‰¥	•é¥•ÉÕÉÙ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Õ‰¥	•é¥•ÉÕÉÙ”œì(($%Ñ¡¥Ì¹ØÀ€ôØÀì($%Ñ¡¥Ì¹ØÄ€ôØÄì($%Ñ¡¥Ì¹ØÈ€ôØÈì($%Ñ¡¥Ì¹ØÌ€ôØÌì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%½¹ÍÐØÀ€ôÑ¡¥Ì¹ØÀ°ØÄ€ôÑ¡¥Ì¹ØÄ°ØÈ€ôÑ¡¥Ì¹ØÈ°ØÌ€ôÑ¡¥Ì¹ØÌì(($%Á½¥¹Ð¹Í•Ð ($$%Õ‰¥	•é¥•È Ð°ØÀ¹à°ØÄ¹à°ØÈ¹à°ØÌ¹à€¤°($$%Õ‰¥	•é¥•È Ð°ØÀ¹ä°ØÄ¹ä°ØÈ¹ä°ØÌ¹ä€¤($$¤ì(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ØÀ¹½Áä Í½ÕÉ”¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹½Áä Í½ÕÉ”¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹½Áä Í½ÕÉ”¹ØÈ€¤ì($%Ñ¡¥Ì¹ØÌ¹½Áä Í½ÕÉ”¹ØÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ØÀ€ôÑ¡¥Ì¹ØÀ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÄ€ôÑ¡¥Ì¹ØÄ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÈ€ôÑ¡¥Ì¹ØÈ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÌ€ôÑ¡¥Ì¹ØÌ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ØÀ¹™É½µÉÉ…ä ©Í½¸¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹™É½µÉÉ…ä ©Í½¸¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹™É½µÉÉ…ä ©Í½¸¹ØÈ€¤ì($%Ñ¡¥Ì¹ØÌ¹™É½µÉÉ…ä ©Í½¸¹ØÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌÕ‰¥	•é¥•ÉÕÉÙ”Ì•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ØÀ€ô¹•ÜY•Ñ½ÈÌ ¤°ØÄ€ô¹•ÜY•Ñ½ÈÌ ¤°ØÈ€ô¹•ÜY•Ñ½ÈÌ ¤°ØÌ€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍÕ‰¥	•é¥•ÉÕÉÙ”Ì€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Õ‰¥	•é¥•ÉÕÉÙ”Ìœì(($%Ñ¡¥Ì¹ØÀ€ôØÀì($%Ñ¡¥Ì¹ØÄ€ôØÄì($%Ñ¡¥Ì¹ØÈ€ôØÈì($%Ñ¡¥Ì¹ØÌ€ôØÌì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%½¹ÍÐØÀ€ôÑ¡¥Ì¹ØÀ°ØÄ€ôÑ¡¥Ì¹ØÄ°ØÈ€ôÑ¡¥Ì¹ØÈ°ØÌ€ôÑ¡¥Ì¹ØÌì(($%Á½¥¹Ð¹Í•Ð ($$%Õ‰¥	•é¥•È Ð°ØÀ¹à°ØÄ¹à°ØÈ¹à°ØÌ¹à€¤°($$%Õ‰¥	•é¥•È Ð°ØÀ¹ä°ØÄ¹ä°ØÈ¹ä°ØÌ¹ä€¤°($$%Õ‰¥	•é¥•È Ð°ØÀ¹è°ØÄ¹è°ØÈ¹è°ØÌ¹è€¤($$¤ì(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ØÀ¹½Áä Í½ÕÉ”¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹½Áä Í½ÕÉ”¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹½Áä Í½ÕÉ”¹ØÈ€¤ì($%Ñ¡¥Ì¹ØÌ¹½Áä Í½ÕÉ”¹ØÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ØÀ€ôÑ¡¥Ì¹ØÀ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÄ€ôÑ¡¥Ì¹ØÄ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÈ€ôÑ¡¥Ì¹ØÈ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÌ€ôÑ¡¥Ì¹ØÌ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ØÀ¹™É½µÉÉ…ä ©Í½¸¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹™É½µÉÉ…ä ©Í½¸¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹™É½µÉÉ…ä ©Í½¸¹ØÈ€¤ì($%Ñ¡¥Ì¹ØÌ¹™É½µÉÉ…ä ©Í½¸¹ØÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ1¥¹•ÕÉÙ”•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ØÄ€ô¹•ÜY•Ñ½ÈÈ ¤°ØÈ€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í1¥¹•ÕÉÙ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1¥¹•ÕÉÙ”œì(($%Ñ¡¥Ì¹ØÄ€ôØÄì($%Ñ¡¥Ì¹ØÈ€ôØÈì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%¥˜€ Ð€ôôô€Ä€¤ì(($$%Á½¥¹Ð¹½Áä Ñ¡¥Ì¹ØÈ€¤ì(($%ô•±Í”ì(($$%Á½¥¹Ð¹½Áä Ñ¡¥Ì¹ØÈ€¤¹ÍÕˆ Ñ¡¥Ì¹ØÄ€¤ì($$%Á½¥¹Ð¹µÕ±Ñ¥Á±åM…±…È Ð€¤¹…‘ Ñ¡¥Ì¹ØÄ€¤ì(($%ô(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô(($¼¼1¥¹”ÕÉÙ”¥Ì±¥¹•…È°Í¼Ý”…¸½Ù•ÉÝÉ¥Ñ”‘•™…Õ±Ð•ÑA½¥¹ÑÐ(%•ÑA½¥¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•ÑA½¥¹Ð Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì((%ô((%•ÑQ…¹•¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%É•ÑÕÉ¸½ÁÑ¥½¹…±Q…É•Ð¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹ØÈ°Ñ¡¥Ì¹ØÄ€¤¹¹½Éµ…±¥é” ¤ì((%ô((%•ÑQ…¹•¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•ÑQ…¹•¹Ð Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ØÄ¹½Áä Í½ÕÉ”¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹½Áä Í½ÕÉ”¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ØÄ€ôÑ¡¥Ì¹ØÄ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÈ€ôÑ¡¥Ì¹ØÈ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ØÄ¹™É½µÉÉ…ä ©Í½¸¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹™É½µÉÉ…ä ©Í½¸¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ1¥¹•ÕÉÙ”Ì•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ØÄ€ô¹•ÜY•Ñ½ÈÌ ¤°ØÈ€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í1¥¹•ÕÉÙ”Ì€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1¥¹•ÕÉÙ”Ìœì(($%Ñ¡¥Ì¹ØÄ€ôØÄì($%Ñ¡¥Ì¹ØÈ€ôØÈì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%¥˜€ Ð€ôôô€Ä€¤ì(($$%Á½¥¹Ð¹½Áä Ñ¡¥Ì¹ØÈ€¤ì(($%ô•±Í”ì(($$%Á½¥¹Ð¹½Áä Ñ¡¥Ì¹ØÈ€¤¹ÍÕˆ Ñ¡¥Ì¹ØÄ€¤ì($$%Á½¥¹Ð¹µÕ±Ñ¥Á±åM…±…È Ð€¤¹…‘ Ñ¡¥Ì¹ØÄ€¤ì(($%ô(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô(($¼¼1¥¹”ÕÉÙ”¥Ì±¥¹•…È°Í¼Ý”…¸½Ù•ÉÝÉ¥Ñ”‘•™…Õ±Ð•ÑA½¥¹ÑÐ(%•ÑA½¥¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•ÑA½¥¹Ð Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì((%ô((%•ÑQ…¹•¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%É•ÑÕÉ¸½ÁÑ¥½¹…±Q…É•Ð¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹ØÈ°Ñ¡¥Ì¹ØÄ€¤¹¹½Éµ…±¥é” ¤ì((%ô((%•ÑQ…¹•¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•ÑQ…¹•¹Ð Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ØÄ¹½Áä Í½ÕÉ”¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹½Áä Í½ÕÉ”¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ØÄ€ôÑ¡¥Ì¹ØÄ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÈ€ôÑ¡¥Ì¹ØÈ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ØÄ¹™É½µÉÉ…ä ©Í½¸¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹™É½µÉÉ…ä ©Í½¸¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ØÀ€ô¹•ÜY•Ñ½ÈÈ ¤°ØÄ€ô¹•ÜY•Ñ½ÈÈ ¤°ØÈ€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”œì(($%Ñ¡¥Ì¹ØÀ€ôØÀì($%Ñ¡¥Ì¹ØÄ€ôØÄì($%Ñ¡¥Ì¹ØÈ€ôØÈì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%½¹ÍÐØÀ€ôÑ¡¥Ì¹ØÀ°ØÄ€ôÑ¡¥Ì¹ØÄ°ØÈ€ôÑ¡¥Ì¹ØÈì(($%Á½¥¹Ð¹Í•Ð ($$%EÕ…‘É…Ñ¥	•é¥•È Ð°ØÀ¹à°ØÄ¹à°ØÈ¹à€¤°($$%EÕ…‘É…Ñ¥	•é¥•È Ð°ØÀ¹ä°ØÄ¹ä°ØÈ¹ä€¤($$¤ì(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ØÀ¹½Áä Í½ÕÉ”¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹½Áä Í½ÕÉ”¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹½Áä Í½ÕÉ”¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ØÀ€ôÑ¡¥Ì¹ØÀ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÄ€ôÑ¡¥Ì¹ØÄ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÈ€ôÑ¡¥Ì¹ØÈ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ØÀ¹™É½µÉÉ…ä ©Í½¸¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹™É½µÉÉ…ä ©Í½¸¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹™É½µÉÉ…ä ©Í½¸¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ì•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ØÀ€ô¹•ÜY•Ñ½ÈÌ ¤°ØÄ€ô¹•ÜY•Ñ½ÈÌ ¤°ØÈ€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ì€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ìœì(($%Ñ¡¥Ì¹ØÀ€ôØÀì($%Ñ¡¥Ì¹ØÄ€ôØÄì($%Ñ¡¥Ì¹ØÈ€ôØÈì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%½¹ÍÐØÀ€ôÑ¡¥Ì¹ØÀ°ØÄ€ôÑ¡¥Ì¹ØÄ°ØÈ€ôÑ¡¥Ì¹ØÈì(($%Á½¥¹Ð¹Í•Ð ($$%EÕ…‘É…Ñ¥	•é¥•È Ð°ØÀ¹à°ØÄ¹à°ØÈ¹à€¤°($$%EÕ…‘É…Ñ¥	•é¥•È Ð°ØÀ¹ä°ØÄ¹ä°ØÈ¹ä€¤°($$%EÕ…‘É…Ñ¥	•é¥•È Ð°ØÀ¹è°ØÄ¹è°ØÈ¹è€¤($$¤ì(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ØÀ¹½Áä Í½ÕÉ”¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹½Áä Í½ÕÉ”¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹½Áä Í½ÕÉ”¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ØÀ€ôÑ¡¥Ì¹ØÀ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÄ€ôÑ¡¥Ì¹ØÄ¹Ñ½ÉÉ…ä ¤ì($%‘…Ñ„¹ØÈ€ôÑ¡¥Ì¹ØÈ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ØÀ¹™É½µÉÉ…ä ©Í½¸¹ØÀ€¤ì($%Ñ¡¥Ì¹ØÄ¹™É½µÉÉ…ä ©Í½¸¹ØÄ€¤ì($%Ñ¡¥Ì¹ØÈ¹™É½µÉÉ…ä ©Í½¸¹ØÈ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌMÁ±¥¹•ÕÉÙ”•áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È Á½¥¹ÑÌ€ômt€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍMÁ±¥¹•ÕÉÙ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€MÁ±¥¹•ÕÉÙ”œì(($%Ñ¡¥Ì¹Á½¥¹ÑÌ€ôÁ½¥¹ÑÌì((%ô((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€ô¹•ÜY•Ñ½ÈÈ ¤€¤ì(($%½¹ÍÐÁ½¥¹Ð€ô½ÁÑ¥½¹…±Q…É•Ðì(($%½¹ÍÐÁ½¥¹ÑÌ€ôÑ¡¥Ì¹Á½¥¹ÑÌì($%½¹ÍÐÀ€ô€ Á½¥¹ÑÌ¹±•¹Ñ €´€Ä€¤€¨Ðì(($%½¹ÍÐ¥¹ÑA½¥¹Ð€ô5…Ñ ¹™±½½È À€¤ì($%½¹ÍÐÝ•¥¡Ð€ôÀ€´¥¹ÑA½¥¹Ðì(($%½¹ÍÐÀÀ€ôÁ½¥¹ÑÍl¥¹ÑA½¥¹Ð€ôôô€À€ü¥¹ÑA½¥¹Ð€è¥¹ÑA½¥¹Ð€´€Ätì($%½¹ÍÐÀÄ€ôÁ½¥¹ÑÍl¥¹ÑA½¥¹Ðtì($%½¹ÍÐÀÈ€ôÁ½¥¹ÑÍl¥¹ÑA½¥¹Ð€øÁ½¥¹ÑÌ¹±•¹Ñ €´€È€üÁ½¥¹ÑÌ¹±•¹Ñ €´€Ä€è¥¹ÑA½¥¹Ð€¬€Ätì($%½¹ÍÐÀÌ€ôÁ½¥¹ÑÍl¥¹ÑA½¥¹Ð€øÁ½¥¹ÑÌ¹±•¹Ñ €´€Ì€üÁ½¥¹ÑÌ¹±•¹Ñ €´€Ä€è¥¹ÑA½¥¹Ð€¬€Ètì(($%Á½¥¹Ð¹Í•Ð ($$%…ÑµÕ±±I½´ Ý•¥¡Ð°ÀÀ¹à°ÀÄ¹à°ÀÈ¹à°ÀÌ¹à€¤°($$%…ÑµÕ±±I½´ Ý•¥¡Ð°ÀÀ¹ä°ÀÄ¹ä°ÀÈ¹ä°ÀÌ¹ä€¤($$¤ì(($%É•ÑÕÉ¸Á½¥¹Ðì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÍ½ÕÉ”¹Á½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÁ½¥¹Ð€ôÍ½ÕÉ”¹Á½¥¹ÑÍl¤tì(($$%Ñ¡¥Ì¹Á½¥¹ÑÌ¹ÁÕÍ  Á½¥¹Ð¹±½¹” ¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹Á½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÑ¡¥Ì¹Á½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÁ½¥¹Ð€ôÑ¡¥Ì¹Á½¥¹ÑÍl¤tì($$%‘…Ñ„¹Á½¥¹ÑÌ¹ÁÕÍ  Á½¥¹Ð¹Ñ½ÉÉ…ä ¤€¤ì(($%ô(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹Á½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹Á½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÁ½¥¹Ð€ô©Í½¸¹Á½¥¹ÑÍl¤tì($$%Ñ¡¥Ì¹Á½¥¹ÑÌ¹ÁÕÍ  ¹•ÜY•Ñ½ÈÈ ¤¹™É½µÉÉ…ä Á½¥¹Ð€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()Ù…ÈÕÉÙ•Ì€ô€¼¨}}AUI}|¨½=‰©•Ð¹™É••é”¡ì(%}}ÁÉ½Ñ½}|è¹Õ±°°(%ÉÕÉÙ”èÉÕÉÙ”°(%…ÑµÕ±±I½µÕÉÙ”Ìè…ÑµÕ±±I½µÕÉÙ”Ì°(%Õ‰¥	•é¥•ÉÕÉÙ”èÕ‰¥	•é¥•ÉÕÉÙ”°(%Õ‰¥	•é¥•ÉÕÉÙ”ÌèÕ‰¥	•é¥•ÉÕÉÙ”Ì°(%±±¥ÁÍ•ÕÉÙ”è±±¥ÁÍ•ÕÉÙ”°(%1¥¹•ÕÉÙ”è1¥¹•ÕÉÙ”°(%1¥¹•ÕÉÙ”Ìè1¥¹•ÕÉÙ”Ì°(%EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”èEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”°(%EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”ÌèEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ì°(%MÁ±¥¹•ÕÉÙ”èMÁ±¥¹•ÕÉÙ”)ô¤ì((¼¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨(€¨%ÕÉÙ•A…Ñ €´„ÕÉÙ”Á…Ñ ¥ÌÍ¥µÁ±ä„…ÉÉ…ä½˜½¹¹•Ñ•(€¨€ÕÉÙ•Ì°‰ÕÐÉ•Ñ…¥¹ÌÑ¡”…Á¤½˜„ÕÉÙ”(€¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¼()±…ÍÌÕÉÙ•A…Ñ •áÑ•¹‘ÌÕÉÙ”ì((%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€ÕÉÙ•A…Ñ œì(($%Ñ¡¥Ì¹ÕÉÙ•Ì€ômtì($%Ñ¡¥Ì¹…ÕÑ½±½Í”€ô™…±Í”ì€¼¼ÕÑ½µ…Ñ¥…±±ä±½Í•ÌÑ¡”Á…Ñ ((%ô((%…‘ ÕÉÙ”€¤ì(($%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”€¤ì((%ô((%±½Í•A…Ñ  ¤ì(($$¼¼‘„±¥¹”ÕÉÙ”¥˜ÍÑ…ÉÐ…¹•¹½˜±¥¹•Ì…É”¹½Ð½¹¹•Ñ•($%½¹ÍÐÍÑ…ÉÑA½¥¹Ð€ôÑ¡¥Ì¹ÕÉÙ•Íl€Àt¹•ÑA½¥¹Ð €À€¤ì($%½¹ÍÐ•¹‘A½¥¹Ð€ôÑ¡¥Ì¹ÕÉÙ•ÍlÑ¡¥Ì¹ÕÉÙ•Ì¹±•¹Ñ €´€Ät¹•ÑA½¥¹Ð €Ä€¤ì(($%¥˜€ €„ÍÑ…ÉÑA½¥¹Ð¹•ÅÕ…±Ì •¹‘A½¥¹Ð€¤€¤ì(($$%½¹ÍÐ±¥¹•QåÁ”€ô€ ÍÑ…ÉÑA½¥¹Ð¹¥ÍY•Ñ½ÈÈ€ôôôÑÉÕ”€¤€ü€1¥¹•ÕÉÙ”œ€è€1¥¹•ÕÉÙ”Ìœì($$%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ¹•ÜÕÉÙ•Íl±¥¹•QåÁ”t •¹‘A½¥¹Ð°ÍÑ…ÉÑA½¥¹Ð€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼Q¼•Ð…ÕÉ…Ñ”Á½¥¹ÐÝ¥Ñ É•™•É•¹”Ñ¼($¼¼•¹Ñ¥É”Á…Ñ ‘¥ÍÑ…¹”…ÐÑ¥µ”Ð°($¼¼™½±±½Ý¥¹œ¡…ÌÑ¼‰”‘½¹”è(($¼¼€Ä¸1•¹Ñ ½˜•… ÍÕˆÁ…Ñ ¡…Ù”Ñ¼‰”­¹½Ý¸($¼¼€È¸1½…Ñ”…¹¥‘•¹Ñ¥™äÑåÁ”½˜ÕÉÙ”($¼¼€Ì¸•ÐÐ™½ÈÑ¡”ÕÉÙ”($¼¼€Ð¸I•ÑÕÉ¸ÕÉÙ”¹•ÑA½¥¹ÑÐ¡Ðœ¤((%•ÑA½¥¹Ð Ð°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($%½¹ÍÐ€ôÐ€¨Ñ¡¥Ì¹•Ñ1•¹Ñ  ¤ì($%½¹ÍÐÕÉÙ•1•¹Ñ¡Ì€ôÑ¡¥Ì¹•ÑÕÉÙ•1•¹Ñ¡Ì ¤ì($%±•Ð¤€ô€Àì(($$¼¼Q¼Ñ¡¥¹¬…‰½ÕÐ‰½Õ¹‘…É¥•ÌÁ½¥¹ÑÌ¸(($%Ý¡¥±”€ ¤€ðÕÉÙ•1•¹Ñ¡Ì¹±•¹Ñ €¤ì(($$%¥˜€ ÕÉÙ•1•¹Ñ¡Íl¤t€øô€¤ì(($$$%½¹ÍÐ‘¥™˜€ôÕÉÙ•1•¹Ñ¡Íl¤t€´ì($$$%½¹ÍÐÕÉÙ”€ôÑ¡¥Ì¹ÕÉÙ•Íl¤tì(($$$%½¹ÍÐÍ•µ•¹Ñ1•¹Ñ €ôÕÉÙ”¹•Ñ1•¹Ñ  ¤ì($$$%½¹ÍÐÔ€ôÍ•µ•¹Ñ1•¹Ñ €ôôô€À€ü€À€è€Ä€´‘¥™˜€¼Í•µ•¹Ñ1•¹Ñ ì(($$$%É•ÑÕÉ¸ÕÉÙ”¹•ÑA½¥¹ÑÐ Ô°½ÁÑ¥½¹…±Q…É•Ð€¤ì(($$%ô(($$%¤€¬¬ì(($%ô(($%É•ÑÕÉ¸¹Õ±°ì(($$¼¼±½½ÀÝ¡•É”ÍÕ´€„ô€À°ÍÕ´€ø€°ÍÕ´¬Ä€ñ((%ô(($¼¼]”…¹¹½ÐÕÍ”Ñ¡”‘•™…Õ±ÐQ!I¹ÕÉÙ”•ÑA½¥¹Ð ¤Ý¥Ñ •Ñ1•¹Ñ  ¤‰•…ÕÍ”¥¸($¼¼Q!I¹ÕÉÙ”°•Ñ1•¹Ñ  ¤‘•Á•¹‘Ì½¸•ÑA½¥¹Ð ¤‰ÕÐ¥¸Q!I¹ÕÉÙ•A…Ñ ($¼¼•ÑA½¥¹Ð ¤‘•Á•¹‘Ì½¸•Ñ1•¹Ñ ((%•Ñ1•¹Ñ  ¤ì(($%½¹ÍÐ±•¹Ì€ôÑ¡¥Ì¹•ÑÕÉÙ•1•¹Ñ¡Ì ¤ì($%É•ÑÕÉ¸±•¹Íl±•¹Ì¹±•¹Ñ €´€Ätì((%ô(($¼¼…¡•1•¹Ñ¡ÌµÕÍÐ‰”É•…±Õ±…Ñ•¸(%ÕÁ‘…Ñ•É1•¹Ñ¡Ì ¤ì(($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì($%Ñ¡¥Ì¹…¡•1•¹Ñ¡Ì€ô¹Õ±°ì($%Ñ¡¥Ì¹•ÑÕÉÙ•1•¹Ñ¡Ì ¤ì((%ô(($¼¼½µÁÕÑ”±•¹Ñ¡Ì…¹…¡”Ñ¡•´($¼¼]”…¹¹½Ð½Ù•ÉÝÉ¥Ñ”•Ñ1•¹Ñ¡Ì ¤‰•…ÕÍ”UÑ½Pµ…ÁÁ¥¹œÕÍ•Ì¥Ð¸((%•ÑÕÉÙ•1•¹Ñ¡Ì ¤ì(($$¼¼]”ÕÍ”…¡”Ù…±Õ•Ì¥˜ÕÉÙ•Ì…¹…¡”…ÉÉ…ä…É”Í…µ”±•¹Ñ (($%¥˜€ Ñ¡¥Ì¹…¡•1•¹Ñ¡Ì€˜˜Ñ¡¥Ì¹…¡•1•¹Ñ¡Ì¹±•¹Ñ €ôôôÑ¡¥Ì¹ÕÉÙ•Ì¹±•¹Ñ €¤ì(($$%É•ÑÕÉ¸Ñ¡¥Ì¹…¡•1•¹Ñ¡Ìì(($%ô(($$¼¼•Ð±•¹Ñ ½˜ÍÕˆµÕÉÙ”($$¼¼AÕÍ ÍÕµÌ¥¹Ñ¼…¡•…ÉÉ…ä(($%½¹ÍÐ±•¹Ñ¡Ì€ômtì($%±•ÐÍÕµÌ€ô€Àì(($%™½È€ ±•Ð¤€ô€À°°€ôÑ¡¥Ì¹ÕÉÙ•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%ÍÕµÌ€¬ôÑ¡¥Ì¹ÕÉÙ•Íl¤t¹•Ñ1•¹Ñ  ¤ì($$%±•¹Ñ¡Ì¹ÁÕÍ  ÍÕµÌ€¤ì(($%ô(($%Ñ¡¥Ì¹…¡•1•¹Ñ¡Ì€ô±•¹Ñ¡Ìì(($%É•ÑÕÉ¸±•¹Ñ¡Ìì((%ô((%•ÑMÁ…•‘A½¥¹ÑÌ ‘¥Ù¥Í¥½¹Ì€ô€ÐÀ€¤ì(($%½¹ÍÐÁ½¥¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ðô‘¥Ù¥Í¥½¹Ìì¤€¬¬€¤ì(($$%Á½¥¹ÑÌ¹ÁÕÍ  Ñ¡¥Ì¹•ÑA½¥¹Ð ¤€¼‘¥Ù¥Í¥½¹Ì€¤€¤ì(($%ô(($%¥˜€ Ñ¡¥Ì¹…ÕÑ½±½Í”€¤ì(($$%Á½¥¹ÑÌ¹ÁÕÍ  Á½¥¹ÑÍl€Àt€¤ì(($%ô(($%É•ÑÕÉ¸Á½¥¹ÑÌì((%ô((%•ÑA½¥¹ÑÌ ‘¥Ù¥Í¥½¹Ì€ô€ÄÈ€¤ì(($%½¹ÍÐÁ½¥¹ÑÌ€ômtì($%±•Ð±…ÍÐì(($%™½È€ ±•Ð¤€ô€À°ÕÉÙ•Ì€ôÑ¡¥Ì¹ÕÉÙ•Ìì¤€ðÕÉÙ•Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%½¹ÍÐÕÉÙ”€ôÕÉÙ•Íl¤tì($$%½¹ÍÐÉ•Í½±ÕÑ¥½¸€ôÕÉÙ”¹¥Í±±¥ÁÍ•ÕÉÙ”€ü‘¥Ù¥Í¥½¹Ì€¨€È($$$$è€ ÕÉÙ”¹¥Í1¥¹•ÕÉÙ”ñðÕÉÙ”¹¥Í1¥¹•ÕÉÙ”Ì€¤€ü€Ä($$$$$èÕÉÙ”¹¥ÍMÁ±¥¹•ÕÉÙ”€ü‘¥Ù¥Í¥½¹Ì€¨ÕÉÙ”¹Á½¥¹ÑÌ¹±•¹Ñ ($$$$$$è‘¥Ù¥Í¥½¹Ìì(($$%½¹ÍÐÁÑÌ€ôÕÉÙ”¹•ÑA½¥¹ÑÌ É•Í½±ÕÑ¥½¸€¤ì(($$%™½È€ ±•Ð¨€ô€Àì¨€ðÁÑÌ¹±•¹Ñ ì¨€¬¬€¤ì(($$$%½¹ÍÐÁ½¥¹Ð€ôÁÑÍl¨tì(($$$%¥˜€ ±…ÍÐ€˜˜±…ÍÐ¹•ÅÕ…±Ì Á½¥¹Ð€¤€¤½¹Ñ¥¹Õ”ì€¼¼•¹ÍÕÉ•Ì¹¼½¹Í•ÕÑ¥Ù”Á½¥¹ÑÌ…É”‘ÕÁ±¥…Ñ•Ì(($$$%Á½¥¹ÑÌ¹ÁÕÍ  Á½¥¹Ð€¤ì($$$%±…ÍÐ€ôÁ½¥¹Ðì(($$%ô(($%ô(($%¥˜€ Ñ¡¥Ì¹…ÕÑ½±½Í”€˜˜Á½¥¹ÑÌ¹±•¹Ñ €ø€Ä€˜˜€„Á½¥¹ÑÍlÁ½¥¹ÑÌ¹±•¹Ñ €´€Ät¹•ÅÕ…±Ì Á½¥¹ÑÍl€Àt€¤€¤ì(($$%Á½¥¹ÑÌ¹ÁÕÍ  Á½¥¹ÑÍl€Àt€¤ì(($%ô(($%É•ÑÕÉ¸Á½¥¹ÑÌì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ÕÉÙ•Ì€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÍ½ÕÉ”¹ÕÉÙ•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÕÉÙ”€ôÍ½ÕÉ”¹ÕÉÙ•Íl¤tì(($$%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”¹±½¹” ¤€¤ì(($%ô(($%Ñ¡¥Ì¹…ÕÑ½±½Í”€ôÍ½ÕÉ”¹…ÕÑ½±½Í”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹…ÕÑ½±½Í”€ôÑ¡¥Ì¹…ÕÑ½±½Í”ì($%‘…Ñ„¹ÕÉÙ•Ì€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÑ¡¥Ì¹ÕÉÙ•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÕÉÙ”€ôÑ¡¥Ì¹ÕÉÙ•Íl¤tì($$%‘…Ñ„¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”¹Ñ½)M=8 ¤€¤ì(($%ô(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹…ÕÑ½±½Í”€ô©Í½¸¹…ÕÑ½±½Í”ì($%Ñ¡¥Ì¹ÕÉÙ•Ì€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹ÕÉÙ•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÕÉÙ”€ô©Í½¸¹ÕÉÙ•Íl¤tì($$%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ¹•ÜÕÉÙ•ÍlÕÉÙ”¹ÑåÁ”t ¤¹™É½µ)M=8 ÕÉÙ”€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌA…Ñ •áÑ•¹‘ÌÕÉÙ•A…Ñ ì((%½¹ÍÑÉÕÑ½È Á½¥¹ÑÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A…Ñ œì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð€ô¹•ÜY•Ñ½ÈÈ ¤ì(($%¥˜€ Á½¥¹ÑÌ€¤ì(($$%Ñ¡¥Ì¹Í•ÑÉ½µA½¥¹ÑÌ Á½¥¹ÑÌ€¤ì(($%ô((%ô((%Í•ÑÉ½µA½¥¹ÑÌ Á½¥¹ÑÌ€¤ì(($%Ñ¡¥Ì¹µ½Ù•Q¼ Á½¥¹ÑÍl€Àt¹à°Á½¥¹ÑÍl€Àt¹ä€¤ì(($%™½È€ ±•Ð¤€ô€Ä°°€ôÁ½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹±¥¹•Q¼ Á½¥¹ÑÍl¤t¹à°Á½¥¹ÑÍl¤t¹ä€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%µ½Ù•Q¼ à°ä€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹Í•Ð à°ä€¤ì€¼¼Q=<½¹Í¥‘•ÈÉ•™•É•¹¥¹œÙ•Ñ½ÉÌ¥¹ÍÑ•…½˜½Áå¥¹œü(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±¥¹•Q¼ à°ä€¤ì(($%½¹ÍÐÕÉÙ”€ô¹•Ü1¥¹•ÕÉÙ” Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹±½¹” ¤°¹•ÜY•Ñ½ÈÈ à°ä€¤€¤ì($%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹Í•Ð à°ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÅÕ…‘É…Ñ¥ÕÉÙ•Q¼ …Aà°…Aä°…`°…d€¤ì(($%½¹ÍÐÕÉÙ”€ô¹•ÜEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ” ($$%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹±½¹” ¤°($$%¹•ÜY•Ñ½ÈÈ …Aà°…Aä€¤°($$%¹•ÜY•Ñ½ÈÈ …`°…d€¤($$¤ì(($%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹Í•Ð …`°…d€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‰•é¥•ÉÕÉÙ•Q¼ …@Åà°…@Åä°…@Éà°…@Éä°…`°…d€¤ì(($%½¹ÍÐÕÉÙ”€ô¹•ÜÕ‰¥	•é¥•ÉÕÉÙ” ($$%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹±½¹” ¤°($$%¹•ÜY•Ñ½ÈÈ …@Åà°…@Åä€¤°($$%¹•ÜY•Ñ½ÈÈ …@Éà°…@Éä€¤°($$%¹•ÜY•Ñ½ÈÈ …`°…d€¤($$¤ì(($%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹Í•Ð …`°…d€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÁ±¥¹•Q¡ÉÔ ÁÑÌ€¼©ÉÉ…ä½˜Y•Ñ½È¨¼€¤ì(($%½¹ÍÐ¹ÁÑÌ€ôlÑ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹±½¹” ¤t¹½¹…Ð ÁÑÌ€¤ì(($%½¹ÍÐÕÉÙ”€ô¹•ÜMÁ±¥¹•ÕÉÙ” ¹ÁÑÌ€¤ì($%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹½Áä ÁÑÍlÁÑÌ¹±•¹Ñ €´€Ät€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%…ÉŒ …`°…d°…I…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”€¤ì(($%½¹ÍÐàÀ€ôÑ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹àì($%½¹ÍÐäÀ€ôÑ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹äì(($%Ñ¡¥Ì¹…‰Í…ÉŒ …`€¬àÀ°…d€¬äÀ°…I…‘¥ÕÌ°($$%…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%…‰Í…ÉŒ …`°…d°…I…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”€¤ì(($%Ñ¡¥Ì¹…‰Í•±±¥ÁÍ” …`°…d°…I…‘¥ÕÌ°…I…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•±±¥ÁÍ” …`°…d°áI…‘¥ÕÌ°åI…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”°…I½Ñ…Ñ¥½¸€¤ì(($%½¹ÍÐàÀ€ôÑ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹àì($%½¹ÍÐäÀ€ôÑ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹äì(($%Ñ¡¥Ì¹…‰Í•±±¥ÁÍ” …`€¬àÀ°…d€¬äÀ°áI…‘¥ÕÌ°åI…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”°…I½Ñ…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%…‰Í•±±¥ÁÍ” …`°…d°áI…‘¥ÕÌ°åI…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”°…I½Ñ…Ñ¥½¸€¤ì(($%½¹ÍÐÕÉÙ”€ô¹•Ü±±¥ÁÍ•ÕÉÙ” …`°…d°áI…‘¥ÕÌ°åI…‘¥ÕÌ°…MÑ…ÉÑ¹±”°…¹‘¹±”°…±½­Ý¥Í”°…I½Ñ…Ñ¥½¸€¤ì(($%¥˜€ Ñ¡¥Ì¹ÕÉÙ•Ì¹±•¹Ñ €ø€À€¤ì(($$$¼¼¥˜„ÁÉ•Ù¥½ÕÌÕÉÙ”¥ÌÁÉ•Í•¹Ð°…ÑÑ•µÁÐÑ¼©½¥¸($$%½¹ÍÐ™¥ÉÍÑA½¥¹Ð€ôÕÉÙ”¹•ÑA½¥¹Ð €À€¤ì(($$%¥˜€ €„™¥ÉÍÑA½¥¹Ð¹•ÅÕ…±Ì Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð€¤€¤ì(($$$%Ñ¡¥Ì¹±¥¹•Q¼ ™¥ÉÍÑA½¥¹Ð¹à°™¥ÉÍÑA½¥¹Ð¹ä€¤ì(($$%ô(($%ô(($%Ñ¡¥Ì¹ÕÉÙ•Ì¹ÁÕÍ  ÕÉÙ”€¤ì(($%½¹ÍÐ±…ÍÑA½¥¹Ð€ôÕÉÙ”¹•ÑA½¥¹Ð €Ä€¤ì($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹½Áä ±…ÍÑA½¥¹Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹½Áä Í½ÕÉ”¹ÕÉÉ•¹ÑA½¥¹Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ÕÉÉ•¹ÑA½¥¹Ð€ôÑ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA½¥¹Ð¹™É½µÉÉ…ä ©Í½¸¹ÕÉÉ•¹ÑA½¥¹Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ1…Ñ¡••½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È Á½¥¹ÑÌ€ôl¹•ÜY•Ñ½ÈÈ €À°€´€À¸Ô€¤°¹•ÜY•Ñ½ÈÈ €À¸Ô°€À€¤°¹•ÜY•Ñ½ÈÈ €À°€À¸Ô€¤t°Í•µ•¹ÑÌ€ô€ÄÈ°Á¡¥MÑ…ÉÐ€ô€À°Á¡¥1•¹Ñ €ô5…Ñ ¹A$€¨€È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1…Ñ¡••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%Á½¥¹ÑÌèÁ½¥¹ÑÌ°($$%Í•µ•¹ÑÌèÍ•µ•¹ÑÌ°($$%Á¡¥MÑ…ÉÐèÁ¡¥MÑ…ÉÐ°($$%Á¡¥1•¹Ñ èÁ¡¥1•¹Ñ ($%ôì(($%Í•µ•¹ÑÌ€ô5…Ñ ¹™±½½È Í•µ•¹ÑÌ€¤ì(($$¼¼±…µÀÁ¡¥1•¹Ñ Í¼¥ÐÌ¥¸É…¹”½˜l€À°€ÉA$t(($%Á¡¥1•¹Ñ €ô±…µÀ Á¡¥1•¹Ñ °€À°5…Ñ ¹A$€¨€È€¤ì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì($%½¹ÍÐ¥¹¥Ñ9½Éµ…±Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì(($$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($%½¹ÍÐ¥¹Ù•ÉÍ•M•µ•¹ÑÌ€ô€Ä¸À€¼Í•µ•¹ÑÌì($%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÕØ€ô¹•ÜY•Ñ½ÈÈ ¤ì($%½¹ÍÐ¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÕÉ9½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÁÉ•Ù9½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì($%±•Ð‘à€ô€Àì($%±•Ð‘ä€ô€Àì(($$¼¼ÁÉ”µ½µÁÕÑ”¹½Éµ…±Ì™½È¥¹¥Ñ¥…°€‰µ•É¥‘¥…¸ˆ(($%™½È€ ±•Ð¨€ô€Àì¨€ðô€ Á½¥¹ÑÌ¹±•¹Ñ €´€Ä€¤ì¨€¬¬€¤ì(($$%ÍÝ¥Ñ € ¨€¤ì(($$$%…Í”€Àè$$$$¼¼ÍÁ•¥…°¡…¹‘±¥¹œ™½È€ÅÍÐÙ•ÉÑ•à½¸Á…Ñ (($$$$%‘à€ôÁ½¥¹ÑÍl¨€¬€Ät¹à€´Á½¥¹ÑÍl¨t¹àì($$$$%‘ä€ôÁ½¥¹ÑÍl¨€¬€Ät¹ä€´Á½¥¹ÑÍl¨t¹äì(($$$$%¹½Éµ…°¹à€ô‘ä€¨€Ä¸Àì($$$$%¹½Éµ…°¹ä€ô€´‘àì($$$$%¹½Éµ…°¹è€ô‘ä€¨€À¸Àì(($$$$%ÁÉ•Ù9½Éµ…°¹½Áä ¹½Éµ…°€¤ì(($$$$%¹½Éµ…°¹¹½Éµ…±¥é” ¤ì(($$$$%¥¹¥Ñ9½Éµ…±Ì¹ÁÕÍ  ¹½Éµ…°¹à°¹½Éµ…°¹ä°¹½Éµ…°¹è€¤ì(($$$$%‰É•…¬ì(($$$%…Í”€ Á½¥¹ÑÌ¹±•¹Ñ €´€Ä€¤è$¼¼ÍÁ•¥…°¡…¹‘±¥¹œ™½È±…ÍÐY•ÉÑ•à½¸Á…Ñ (($$$$%¥¹¥Ñ9½Éµ…±Ì¹ÁÕÍ  ÁÉ•Ù9½Éµ…°¹à°ÁÉ•Ù9½Éµ…°¹ä°ÁÉ•Ù9½Éµ…°¹è€¤ì(($$$$%‰É•…¬ì(($$$%‘•™…Õ±Ðè$$$¼¼‘•™…Õ±Ð¡…¹‘±¥¹œ™½È…±°Ù•ÉÑ¥•Ì¥¸‰•ÑÝ••¸(($$$$%‘à€ôÁ½¥¹ÑÍl¨€¬€Ät¹à€´Á½¥¹ÑÍl¨t¹àì($$$$%‘ä€ôÁ½¥¹ÑÍl¨€¬€Ät¹ä€´Á½¥¹ÑÍl¨t¹äì(($$$$%¹½Éµ…°¹à€ô‘ä€¨€Ä¸Àì($$$$%¹½Éµ…°¹ä€ô€´‘àì($$$$%¹½Éµ…°¹è€ô‘ä€¨€À¸Àì(($$$$%ÕÉ9½Éµ…°¹½Áä ¹½Éµ…°€¤ì(($$$$%¹½Éµ…°¹à€¬ôÁÉ•Ù9½Éµ…°¹àì($$$$%¹½Éµ…°¹ä€¬ôÁÉ•Ù9½Éµ…°¹äì($$$$%¹½Éµ…°¹è€¬ôÁÉ•Ù9½Éµ…°¹èì(($$$$%¹½Éµ…°¹¹½Éµ…±¥é” ¤ì(($$$$%¥¹¥Ñ9½Éµ…±Ì¹ÁÕÍ  ¹½Éµ…°¹à°¹½Éµ…°¹ä°¹½Éµ…°¹è€¤ì(($$$$%ÁÉ•Ù9½Éµ…°¹½Áä ÕÉ9½Éµ…°€¤ì(($$%ô(($%ô(($$¼¼•¹•É…Ñ”Ù•ÉÑ¥•Ì°ÕÙÌ…¹¹½Éµ…±Ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðôÍ•µ•¹ÑÌì¤€¬¬€¤ì(($$%½¹ÍÐÁ¡¤€ôÁ¡¥MÑ…ÉÐ€¬¤€¨¥¹Ù•ÉÍ•M•µ•¹ÑÌ€¨Á¡¥1•¹Ñ ì(($$%½¹ÍÐÍ¥¸€ô5…Ñ ¹Í¥¸ Á¡¤€¤ì($$%½¹ÍÐ½Ì€ô5…Ñ ¹½Ì Á¡¤€¤ì(($$%™½È€ ±•Ð¨€ô€Àì¨€ðô€ Á½¥¹ÑÌ¹±•¹Ñ €´€Ä€¤ì¨€¬¬€¤ì(($$$$¼¼Ù•ÉÑ•à(($$$%Ù•ÉÑ•à¹à€ôÁ½¥¹ÑÍl¨t¹à€¨Í¥¸ì($$$%Ù•ÉÑ•à¹ä€ôÁ½¥¹ÑÍl¨t¹äì($$$%Ù•ÉÑ•à¹è€ôÁ½¥¹ÑÍl¨t¹à€¨½Ìì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$$¼¼ÕØ(($$$%ÕØ¹à€ô¤€¼Í•µ•¹ÑÌì($$$%ÕØ¹ä€ô¨€¼€ Á½¥¹ÑÌ¹±•¹Ñ €´€Ä€¤ì(($$$%ÕÙÌ¹ÁÕÍ  ÕØ¹à°ÕØ¹ä€¤ì(($$$$¼¼¹½Éµ…°(($$$%½¹ÍÐà€ô¥¹¥Ñ9½Éµ…±Íl€Ì€¨¨€¬€Àt€¨Í¥¸ì($$$%½¹ÍÐä€ô¥¹¥Ñ9½Éµ…±Íl€Ì€¨¨€¬€Ätì($$$%½¹ÍÐè€ô¥¹¥Ñ9½Éµ…±Íl€Ì€¨¨€¬€Àt€¨½Ìì(($$$%¹½Éµ…±Ì¹ÁÕÍ  à°ä°è€¤ì(($$%ô(($%ô(($$¼¼¥¹‘¥•Ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÍ•µ•¹ÑÌì¤€¬¬€¤ì(($$%™½È€ ±•Ð¨€ô€Àì¨€ð€ Á½¥¹ÑÌ¹±•¹Ñ €´€Ä€¤ì¨€¬¬€¤ì(($$$%½¹ÍÐ‰…Í”€ô¨€¬¤€¨Á½¥¹ÑÌ¹±•¹Ñ ì(($$$%½¹ÍÐ„€ô‰…Í”ì($$$%½¹ÍÐˆ€ô‰…Í”€¬Á½¥¹ÑÌ¹±•¹Ñ ì($$$%½¹ÍÐŒ€ô‰…Í”€¬Á½¥¹ÑÌ¹±•¹Ñ €¬€Äì($$$%½¹ÍÐ€ô‰…Í”€¬€Äì(($$$$¼¼™…•Ì(($$$%¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°€¤ì($$$%¥¹‘¥•Ì¹ÁÕÍ  Œ°°ˆ€¤ì(($$%ô(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Ü1…Ñ¡••½µ•ÑÉä ‘…Ñ„¹Á½¥¹ÑÌ°‘…Ñ„¹Í•µ•¹ÑÌ°‘…Ñ„¹Á¡¥MÑ…ÉÐ°‘…Ñ„¹Á¡¥1•¹Ñ €¤ì((%ô()ô()±…ÍÌ…ÁÍÕ±••½µ•ÑÉä•áÑ•¹‘Ì1…Ñ¡••½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°±•¹Ñ €ô€Ä°…ÁM•µ•¹ÑÌ€ô€Ð°É…‘¥…±M•µ•¹ÑÌ€ô€à€¤ì(($%½¹ÍÐÁ…Ñ €ô¹•ÜA…Ñ  ¤ì($%Á…Ñ ¹…‰Í…ÉŒ €À°€´±•¹Ñ €¼€È°É…‘¥ÕÌ°5…Ñ ¹A$€¨€Ä¸Ô°€À€¤ì($%Á…Ñ ¹…‰Í…ÉŒ €À°±•¹Ñ €¼€È°É…‘¥ÕÌ°€À°5…Ñ ¹A$€¨€À¸Ô€¤ì(($%ÍÕÁ•È Á…Ñ ¹•ÑA½¥¹ÑÌ …ÁM•µ•¹ÑÌ€¤°É…‘¥…±M•µ•¹ÑÌ€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€…ÁÍÕ±••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%±•¹Ñ è±•¹Ñ °($$%…ÁM•µ•¹ÑÌè…ÁM•µ•¹ÑÌ°($$%É…‘¥…±M•µ•¹ÑÌèÉ…‘¥…±M•µ•¹ÑÌ°($%ôì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Ü…ÁÍÕ±••½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹±•¹Ñ °‘…Ñ„¹…ÁM•µ•¹ÑÌ°‘…Ñ„¹É…‘¥…±M•µ•¹ÑÌ€¤ì((%ô()ô()±…ÍÌ¥É±••½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°Í•µ•¹ÑÌ€ô€ÌÈ°Ñ¡•Ñ…MÑ…ÉÐ€ô€À°Ñ¡•Ñ…1•¹Ñ €ô5…Ñ ¹A$€¨€È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€¥É±••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%Í•µ•¹ÑÌèÍ•µ•¹ÑÌ°($$%Ñ¡•Ñ…MÑ…ÉÐèÑ¡•Ñ…MÑ…ÉÐ°($$%Ñ¡•Ñ…1•¹Ñ èÑ¡•Ñ…1•¹Ñ ($%ôì(($%Í•µ•¹ÑÌ€ô5…Ñ ¹µ…à €Ì°Í•µ•¹ÑÌ€¤ì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì(($$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÕØ€ô¹•ÜY•Ñ½ÈÈ ¤ì(($$¼¼•¹Ñ•ÈÁ½¥¹Ð(($%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($%¹½Éµ…±Ì¹ÁÕÍ  €À°€À°€Ä€¤ì($%ÕÙÌ¹ÁÕÍ  €À¸Ô°€À¸Ô€¤ì(($%™½È€ ±•ÐÌ€ô€À°¤€ô€ÌìÌ€ðôÍ•µ•¹ÑÌìÌ€¬¬°¤€¬ô€Ì€¤ì(($$%½¹ÍÐÍ•µ•¹Ð€ôÑ¡•Ñ…MÑ…ÉÐ€¬Ì€¼Í•µ•¹ÑÌ€¨Ñ¡•Ñ…1•¹Ñ ì(($$$¼¼Ù•ÉÑ•à(($$%Ù•ÉÑ•à¹à€ôÉ…‘¥ÕÌ€¨5…Ñ ¹½Ì Í•µ•¹Ð€¤ì($$%Ù•ÉÑ•à¹ä€ôÉ…‘¥ÕÌ€¨5…Ñ ¹Í¥¸ Í•µ•¹Ð€¤ì(($$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$¼¼¹½Éµ…°(($$%¹½Éµ…±Ì¹ÁÕÍ  €À°€À°€Ä€¤ì(($$$¼¼ÕÙÌ(($$%ÕØ¹à€ô€ Ù•ÉÑ¥•Íl¤t€¼É…‘¥ÕÌ€¬€Ä€¤€¼€Èì($$%ÕØ¹ä€ô€ Ù•ÉÑ¥•Íl¤€¬€Ät€¼É…‘¥ÕÌ€¬€Ä€¤€¼€Èì(($$%ÕÙÌ¹ÁÕÍ  ÕØ¹à°ÕØ¹ä€¤ì(($%ô(($$¼¼¥¹‘¥•Ì(($%™½È€ ±•Ð¤€ô€Äì¤€ðôÍ•µ•¹ÑÌì¤€¬¬€¤ì(($$%¥¹‘¥•Ì¹ÁÕÍ  ¤°¤€¬€Ä°€À€¤ì(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Ü¥É±••½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹Í•µ•¹ÑÌ°‘…Ñ„¹Ñ¡•Ñ…MÑ…ÉÐ°‘…Ñ„¹Ñ¡•Ñ…1•¹Ñ €¤ì((%ô()ô()±…ÍÌå±¥¹‘•É•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÍQ½À€ô€Ä°É…‘¥ÕÍ	½ÑÑ½´€ô€Ä°¡•¥¡Ð€ô€Ä°É…‘¥…±M•µ•¹ÑÌ€ô€ÌÈ°¡•¥¡ÑM•µ•¹ÑÌ€ô€Ä°½Á•¹¹‘•€ô™…±Í”°Ñ¡•Ñ…MÑ…ÉÐ€ô€À°Ñ¡•Ñ…1•¹Ñ €ô5…Ñ ¹A$€¨€È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€å±¥¹‘•É•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÍQ½ÀèÉ…‘¥ÕÍQ½À°($$%É…‘¥ÕÍ	½ÑÑ½´èÉ…‘¥ÕÍ	½ÑÑ½´°($$%¡•¥¡Ðè¡•¥¡Ð°($$%É…‘¥…±M•µ•¹ÑÌèÉ…‘¥…±M•µ•¹ÑÌ°($$%¡•¥¡ÑM•µ•¹ÑÌè¡•¥¡ÑM•µ•¹ÑÌ°($$%½Á•¹¹‘•è½Á•¹¹‘•°($$%Ñ¡•Ñ…MÑ…ÉÐèÑ¡•Ñ…MÑ…ÉÐ°($$%Ñ¡•Ñ…1•¹Ñ èÑ¡•Ñ…1•¹Ñ ($%ôì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%É…‘¥…±M•µ•¹ÑÌ€ô5…Ñ ¹™±½½È É…‘¥…±M•µ•¹ÑÌ€¤ì($%¡•¥¡ÑM•µ•¹ÑÌ€ô5…Ñ ¹™±½½È ¡•¥¡ÑM•µ•¹ÑÌ€¤ì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì(($$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($%±•Ð¥¹‘•à€ô€Àì($%½¹ÍÐ¥¹‘•áÉÉ…ä€ômtì($%½¹ÍÐ¡…±™!•¥¡Ð€ô¡•¥¡Ð€¼€Èì($%±•ÐÉ½ÕÁMÑ…ÉÐ€ô€Àì(($$¼¼•¹•É…Ñ”•½µ•ÑÉä(($%•¹•É…Ñ•Q½ÉÍ¼ ¤ì(($%¥˜€ ½Á•¹¹‘•€ôôô™…±Í”€¤ì(($$%¥˜€ É…‘¥ÕÍQ½À€ø€À€¤•¹•É…Ñ•…À ÑÉÕ”€¤ì($$%¥˜€ É…‘¥ÕÍ	½ÑÑ½´€ø€À€¤•¹•É…Ñ•…À ™…±Í”€¤ì(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì(($%™Õ¹Ñ¥½¸•¹•É…Ñ•Q½ÉÍ¼ ¤ì(($$%½¹ÍÐ¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì($$%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%±•ÐÉ½ÕÁ½Õ¹Ð€ô€Àì(($$$¼¼Ñ¡¥ÌÝ¥±°‰”ÕÍ•Ñ¼…±Õ±…Ñ”Ñ¡”¹½Éµ…°($$%½¹ÍÐÍ±½Á”€ô€ É…‘¥ÕÍ	½ÑÑ½´€´É…‘¥ÕÍQ½À€¤€¼¡•¥¡Ðì(($$$¼¼•¹•É…Ñ”Ù•ÉÑ¥•Ì°¹½Éµ…±Ì…¹ÕÙÌ(($$%™½È€ ±•Ðä€ô€Àìä€ðô¡•¥¡ÑM•µ•¹ÑÌìä€¬¬€¤ì(($$$%½¹ÍÐ¥¹‘•áI½Ü€ômtì(($$$%½¹ÍÐØ€ôä€¼¡•¥¡ÑM•µ•¹ÑÌì(($$$$¼¼…±Õ±…Ñ”Ñ¡”É…‘¥ÕÌ½˜Ñ¡”ÕÉÉ•¹ÐÉ½Ü(($$$%½¹ÍÐÉ…‘¥ÕÌ€ôØ€¨€ É…‘¥ÕÍ	½ÑÑ½´€´É…‘¥ÕÍQ½À€¤€¬É…‘¥ÕÍQ½Àì(($$$%™½È€ ±•Ðà€ô€Àìà€ðôÉ…‘¥…±M•µ•¹ÑÌìà€¬¬€¤ì(($$$$%½¹ÍÐÔ€ôà€¼É…‘¥…±M•µ•¹ÑÌì(($$$$%½¹ÍÐÑ¡•Ñ„€ôÔ€¨Ñ¡•Ñ…1•¹Ñ €¬Ñ¡•Ñ…MÑ…ÉÐì(($$$$%½¹ÍÐÍ¥¹Q¡•Ñ„€ô5…Ñ ¹Í¥¸ Ñ¡•Ñ„€¤ì($$$$%½¹ÍÐ½ÍQ¡•Ñ„€ô5…Ñ ¹½Ì Ñ¡•Ñ„€¤ì(($$$$$¼¼Ù•ÉÑ•à(($$$$%Ù•ÉÑ•à¹à€ôÉ…‘¥ÕÌ€¨Í¥¹Q¡•Ñ„ì($$$$%Ù•ÉÑ•à¹ä€ô€´Ø€¨¡•¥¡Ð€¬¡…±™!•¥¡Ðì($$$$%Ù•ÉÑ•à¹è€ôÉ…‘¥ÕÌ€¨½ÍQ¡•Ñ„ì($$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$$$¼¼¹½Éµ…°(($$$$%¹½Éµ…°¹Í•Ð Í¥¹Q¡•Ñ„°Í±½Á”°½ÍQ¡•Ñ„€¤¹¹½Éµ…±¥é” ¤ì($$$$%¹½Éµ…±Ì¹ÁÕÍ  ¹½Éµ…°¹à°¹½Éµ…°¹ä°¹½Éµ…°¹è€¤ì(($$$$$¼¼ÕØ(($$$$%ÕÙÌ¹ÁÕÍ  Ô°€Ä€´Ø€¤ì(($$$$$¼¼Í…Ù”¥¹‘•à½˜Ù•ÉÑ•à¥¸É•ÍÁ•Ñ¥Ù”É½Ü(($$$$%¥¹‘•áI½Ü¹ÁÕÍ  ¥¹‘•à€¬¬€¤ì(($$$%ô(($$$$¼¼¹½ÜÍ…Ù”Ù•ÉÑ¥•Ì½˜Ñ¡”É½Ü¥¸½ÕÈ¥¹‘•à…ÉÉ…ä(($$$%¥¹‘•áÉÉ…ä¹ÁÕÍ  ¥¹‘•áI½Ü€¤ì(($$%ô(($$$¼¼•¹•É…Ñ”¥¹‘¥•Ì(($$%™½È€ ±•Ðà€ô€Àìà€ðÉ…‘¥…±M•µ•¹ÑÌìà€¬¬€¤ì(($$$%™½È€ ±•Ðä€ô€Àìä€ð¡•¥¡ÑM•µ•¹ÑÌìä€¬¬€¤ì(($$$$$¼¼Ý”ÕÍ”Ñ¡”¥¹‘•à…ÉÉ…äÑ¼…•ÍÌÑ¡”½ÉÉ•Ð¥¹‘¥•Ì(($$$$%½¹ÍÐ„€ô¥¹‘•áÉÉ…åläulàtì($$$$%½¹ÍÐˆ€ô¥¹‘•áÉÉ…ålä€¬€Äulàtì($$$$%½¹ÍÐŒ€ô¥¹‘•áÉÉ…ålä€¬€Äulà€¬€Ätì($$$$%½¹ÍÐ€ô¥¹‘•áÉÉ…åläulà€¬€Ätì(($$$$$¼¼™…•Ì(($$$$%¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°€¤ì($$$$%¥¹‘¥•Ì¹ÁÕÍ  ˆ°Œ°€¤ì(($$$$$¼¼ÕÁ‘…Ñ”É½ÕÀ½Õ¹Ñ•È(($$$$%É½ÕÁ½Õ¹Ð€¬ô€Øì(($$$%ô(($$%ô(($$$¼¼…‘„É½ÕÀÑ¼Ñ¡”•½µ•ÑÉä¸Ñ¡¥ÌÝ¥±°•¹ÍÕÉ”µÕ±Ñ¤µ…Ñ•É¥…°ÍÕÁÁ½ÉÐ(($$%Í½Á”¹…‘‘É½ÕÀ É½ÕÁMÑ…ÉÐ°É½ÕÁ½Õ¹Ð°€À€¤ì(($$$¼¼…±Õ±…Ñ”¹•ÜÍÑ…ÉÐÙ…±Õ”™½ÈÉ½ÕÁÌ(($$%É½ÕÁMÑ…ÉÐ€¬ôÉ½ÕÁ½Õ¹Ðì(($%ô(($%™Õ¹Ñ¥½¸•¹•É…Ñ•…À Ñ½À€¤ì(($$$¼¼Í…Ù”Ñ¡”¥¹‘•à½˜Ñ¡”™¥ÉÍÐ•¹Ñ•ÈÙ•ÉÑ•à($$%½¹ÍÐ•¹Ñ•É%¹‘•áMÑ…ÉÐ€ô¥¹‘•àì(($$%½¹ÍÐÕØ€ô¹•ÜY•Ñ½ÈÈ ¤ì($$%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%±•ÐÉ½ÕÁ½Õ¹Ð€ô€Àì(($$%½¹ÍÐÉ…‘¥ÕÌ€ô€ Ñ½À€ôôôÑÉÕ”€¤€üÉ…‘¥ÕÍQ½À€èÉ…‘¥ÕÍ	½ÑÑ½´ì($$%½¹ÍÐÍ¥¸€ô€ Ñ½À€ôôôÑÉÕ”€¤€ü€Ä€è€´€Äì(($$$¼¼™¥ÉÍÐÝ”•¹•É…Ñ”Ñ¡”•¹Ñ•ÈÙ•ÉÑ•à‘…Ñ„½˜Ñ¡”…À¸($$$¼¼‰•…ÕÍ”Ñ¡”•½µ•ÑÉä¹••‘Ì½¹”Í•Ð½˜ÕÙÌÁ•È™…”°($$$¼¼Ý”µÕÍÐ•¹•É…Ñ”„•¹Ñ•ÈÙ•ÉÑ•àÁ•È™…”½Í•µ•¹Ð(($$%™½È€ ±•Ðà€ô€Äìà€ðôÉ…‘¥…±M•µ•¹ÑÌìà€¬¬€¤ì(($$$$¼¼Ù•ÉÑ•à(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°¡…±™!•¥¡Ð€¨Í¥¸°€À€¤ì(($$$$¼¼¹½Éµ…°(($$$%¹½Éµ…±Ì¹ÁÕÍ  €À°Í¥¸°€À€¤ì(($$$$¼¼ÕØ(($$$%ÕÙÌ¹ÁÕÍ  €À¸Ô°€À¸Ô€¤ì(($$$$¼¼¥¹É•…Í”¥¹‘•à(($$$%¥¹‘•à€¬¬ì(($$%ô(($$$¼¼Í…Ù”Ñ¡”¥¹‘•à½˜Ñ¡”±…ÍÐ•¹Ñ•ÈÙ•ÉÑ•à($$%½¹ÍÐ•¹Ñ•É%¹‘•á¹€ô¥¹‘•àì(($$$¼¼¹½ÜÝ”•¹•É…Ñ”Ñ¡”ÍÕÉÉ½Õ¹‘¥¹œÙ•ÉÑ¥•Ì°¹½Éµ…±Ì…¹ÕÙÌ(($$%™½È€ ±•Ðà€ô€Àìà€ðôÉ…‘¥…±M•µ•¹ÑÌìà€¬¬€¤ì(($$$%½¹ÍÐÔ€ôà€¼É…‘¥…±M•µ•¹ÑÌì($$$%½¹ÍÐÑ¡•Ñ„€ôÔ€¨Ñ¡•Ñ…1•¹Ñ €¬Ñ¡•Ñ…MÑ…ÉÐì(($$$%½¹ÍÐ½ÍQ¡•Ñ„€ô5…Ñ ¹½Ì Ñ¡•Ñ„€¤ì($$$%½¹ÍÐÍ¥¹Q¡•Ñ„€ô5…Ñ ¹Í¥¸ Ñ¡•Ñ„€¤ì(($$$$¼¼Ù•ÉÑ•à(($$$%Ù•ÉÑ•à¹à€ôÉ…‘¥ÕÌ€¨Í¥¹Q¡•Ñ„ì($$$%Ù•ÉÑ•à¹ä€ô¡…±™!•¥¡Ð€¨Í¥¸ì($$$%Ù•ÉÑ•à¹è€ôÉ…‘¥ÕÌ€¨½ÍQ¡•Ñ„ì($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$$¼¼¹½Éµ…°(($$$%¹½Éµ…±Ì¹ÁÕÍ  €À°Í¥¸°€À€¤ì(($$$$¼¼ÕØ(($$$%ÕØ¹à€ô€ ½ÍQ¡•Ñ„€¨€À¸Ô€¤€¬€À¸Ôì($$$%ÕØ¹ä€ô€ Í¥¹Q¡•Ñ„€¨€À¸Ô€¨Í¥¸€¤€¬€À¸Ôì($$$%ÕÙÌ¹ÁÕÍ  ÕØ¹à°ÕØ¹ä€¤ì(($$$$¼¼¥¹É•…Í”¥¹‘•à(($$$%¥¹‘•à€¬¬ì(($$%ô(($$$¼¼•¹•É…Ñ”¥¹‘¥•Ì(($$%™½È€ ±•Ðà€ô€Àìà€ðÉ…‘¥…±M•µ•¹ÑÌìà€¬¬€¤ì(($$$%½¹ÍÐŒ€ô•¹Ñ•É%¹‘•áMÑ…ÉÐ€¬àì($$$%½¹ÍÐ¤€ô•¹Ñ•É%¹‘•á¹€¬àì(($$$%¥˜€ Ñ½À€ôôôÑÉÕ”€¤ì(($$$$$¼¼™…”Ñ½À(($$$$%¥¹‘¥•Ì¹ÁÕÍ  ¤°¤€¬€Ä°Œ€¤ì(($$$%ô•±Í”ì(($$$$$¼¼™…”‰½ÑÑ½´(($$$$%¥¹‘¥•Ì¹ÁÕÍ  ¤€¬€Ä°¤°Œ€¤ì(($$$%ô(($$$%É½ÕÁ½Õ¹Ð€¬ô€Ìì(($$%ô(($$$¼¼…‘„É½ÕÀÑ¼Ñ¡”•½µ•ÑÉä¸Ñ¡¥ÌÝ¥±°•¹ÍÕÉ”µÕ±Ñ¤µ…Ñ•É¥…°ÍÕÁÁ½ÉÐ(($$%Í½Á”¹…‘‘É½ÕÀ É½ÕÁMÑ…ÉÐ°É½ÕÁ½Õ¹Ð°Ñ½À€ôôôÑÉÕ”€ü€Ä€è€È€¤ì(($$$¼¼…±Õ±…Ñ”¹•ÜÍÑ…ÉÐÙ…±Õ”™½ÈÉ½ÕÁÌ(($$%É½ÕÁMÑ…ÉÐ€¬ôÉ½ÕÁ½Õ¹Ðì(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Üå±¥¹‘•É•½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÍQ½À°‘…Ñ„¹É…‘¥ÕÍ	½ÑÑ½´°‘…Ñ„¹¡•¥¡Ð°‘…Ñ„¹É…‘¥…±M•µ•¹ÑÌ°‘…Ñ„¹¡•¥¡ÑM•µ•¹ÑÌ°‘…Ñ„¹½Á•¹¹‘•°‘…Ñ„¹Ñ¡•Ñ…MÑ…ÉÐ°‘…Ñ„¹Ñ¡•Ñ…1•¹Ñ €¤ì((%ô()ô()±…ÍÌ½¹••½µ•ÑÉä•áÑ•¹‘Ìå±¥¹‘•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°¡•¥¡Ð€ô€Ä°É…‘¥…±M•µ•¹ÑÌ€ô€ÌÈ°¡•¥¡ÑM•µ•¹ÑÌ€ô€Ä°½Á•¹¹‘•€ô™…±Í”°Ñ¡•Ñ…MÑ…ÉÐ€ô€À°Ñ¡•Ñ…1•¹Ñ €ô5…Ñ ¹A$€¨€È€¤ì(($%ÍÕÁ•È €À°É…‘¥ÕÌ°¡•¥¡Ð°É…‘¥…±M•µ•¹ÑÌ°¡•¥¡ÑM•µ•¹ÑÌ°½Á•¹¹‘•°Ñ¡•Ñ…MÑ…ÉÐ°Ñ¡•Ñ…1•¹Ñ €¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€½¹••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%¡•¥¡Ðè¡•¥¡Ð°($$%É…‘¥…±M•µ•¹ÑÌèÉ…‘¥…±M•µ•¹ÑÌ°($$%¡•¥¡ÑM•µ•¹ÑÌè¡•¥¡ÑM•µ•¹ÑÌ°($$%½Á•¹¹‘•è½Á•¹¹‘•°($$%Ñ¡•Ñ…MÑ…ÉÐèÑ¡•Ñ…MÑ…ÉÐ°($$%Ñ¡•Ñ…1•¹Ñ èÑ¡•Ñ…1•¹Ñ ($%ôì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Ü½¹••½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹¡•¥¡Ð°‘…Ñ„¹É…‘¥…±M•µ•¹ÑÌ°‘…Ñ„¹¡•¥¡ÑM•µ•¹ÑÌ°‘…Ñ„¹½Á•¹¹‘•°‘…Ñ„¹Ñ¡•Ñ…MÑ…ÉÐ°‘…Ñ„¹Ñ¡•Ñ…1•¹Ñ €¤ì((%ô()ô()±…ÍÌA½±å¡•‘É½¹•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È Ù•ÉÑ¥•Ì€ômt°¥¹‘¥•Ì€ômt°É…‘¥ÕÌ€ô€Ä°‘•Ñ…¥°€ô€À€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½±å¡•‘É½¹•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%Ù•ÉÑ¥•ÌèÙ•ÉÑ¥•Ì°($$%¥¹‘¥•Ìè¥¹‘¥•Ì°($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%‘•Ñ…¥°è‘•Ñ…¥°($%ôì(($$¼¼‘•™…Õ±Ð‰Õ™™•È‘…Ñ„(($%½¹ÍÐÙ•ÉÑ•á	Õ™™•È€ômtì($%½¹ÍÐÕÙ	Õ™™•È€ômtì(($$¼¼Ñ¡”ÍÕ‰‘¥Ù¥Í¥½¸É•…Ñ•ÌÑ¡”Ù•ÉÑ•à‰Õ™™•È‘…Ñ„(($%ÍÕ‰‘¥Ù¥‘” ‘•Ñ…¥°€¤ì(($$¼¼…±°Ù•ÉÑ¥•ÌÍ¡½Õ±±¥”½¸„½¹•ÁÑÕ…°ÍÁ¡•É”Ý¥Ñ „¥Ù•¸É…‘¥ÕÌ(($%…ÁÁ±åI…‘¥ÕÌ É…‘¥ÕÌ€¤ì(($$¼¼™¥¹…±±ä°É•…Ñ”Ñ¡”ÕØ‘…Ñ„(($%•¹•É…Ñ•UYÌ ¤ì(($$¼¼‰Õ¥±¹½¸µ¥¹‘•á••½µ•ÑÉä(($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ•á	Õ™™•È°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ•á	Õ™™•È¹Í±¥” ¤°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙ	Õ™™•È°€È€¤€¤ì(($%¥˜€ ‘•Ñ…¥°€ôôô€À€¤ì(($$%Ñ¡¥Ì¹½µÁÕÑ•Y•ÉÑ•á9½Éµ…±Ì ¤ì€¼¼™±…Ð¹½Éµ…±Ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹¹½Éµ…±¥é•9½Éµ…±Ì ¤ì€¼¼Íµ½½Ñ ¹½Éµ…±Ì(($%ô(($$¼¼¡•±Á•È™Õ¹Ñ¥½¹Ì(($%™Õ¹Ñ¥½¸ÍÕ‰‘¥Ù¥‘” ‘•Ñ…¥°€¤ì(($$%½¹ÍÐ„€ô¹•ÜY•Ñ½ÈÌ ¤ì($$%½¹ÍÐˆ€ô¹•ÜY•Ñ½ÈÌ ¤ì($$%½¹ÍÐŒ€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$$¼¼¥Ñ•É…Ñ”½Ù•È…±°™…•Ì…¹…ÁÁ±ä„ÍÕ‰‘¥Ù¥Í¥½¸Ý¥Ñ Ñ¡”¥Ù•¸‘•Ñ…¥°Ù…±Õ”(($$%™½È€ ±•Ð¤€ô€Àì¤€ð¥¹‘¥•Ì¹±•¹Ñ ì¤€¬ô€Ì€¤ì(($$$$¼¼•ÐÑ¡”Ù•ÉÑ¥•Ì½˜Ñ¡”™…”(($$$%•ÑY•ÉÑ•á	å%¹‘•à ¥¹‘¥•Íl¤€¬€Àt°„€¤ì($$$%•ÑY•ÉÑ•á	å%¹‘•à ¥¹‘¥•Íl¤€¬€Ät°ˆ€¤ì($$$%•ÑY•ÉÑ•á	å%¹‘•à ¥¹‘¥•Íl¤€¬€Èt°Œ€¤ì(($$$$¼¼Á•É™½É´ÍÕ‰‘¥Ù¥Í¥½¸(($$$%ÍÕ‰‘¥Ù¥‘•…” „°ˆ°Œ°‘•Ñ…¥°€¤ì(($$%ô(($%ô(($%™Õ¹Ñ¥½¸ÍÕ‰‘¥Ù¥‘•…” „°ˆ°Œ°‘•Ñ…¥°€¤ì(($$%½¹ÍÐ½±Ì€ô‘•Ñ…¥°€¬€Äì(($$$¼¼Ý”ÕÍ”Ñ¡¥ÌµÕ±Ñ¥‘¥µ•¹Í¥½¹…°…ÉÉ…ä…Ì„‘…Ñ„ÍÑÉÕÑÕÉ”™½ÈÉ•…Ñ¥¹œÑ¡”ÍÕ‰‘¥Ù¥Í¥½¸(($$%½¹ÍÐØ€ômtì(($$$¼¼½¹ÍÑÉÕÐ…±°½˜Ñ¡”Ù•ÉÑ¥•Ì™½ÈÑ¡¥ÌÍÕ‰‘¥Ù¥Í¥½¸(($$%™½È€ ±•Ð¤€ô€Àì¤€ðô½±Ìì¤€¬¬€¤ì(($$$%Ùl¤t€ômtì(($$$%½¹ÍÐ…¨€ô„¹±½¹” ¤¹±•ÉÀ Œ°¤€¼½±Ì€¤ì($$$%½¹ÍÐ‰¨€ôˆ¹±½¹” ¤¹±•ÉÀ Œ°¤€¼½±Ì€¤ì(($$$%½¹ÍÐÉ½ÝÌ€ô½±Ì€´¤ì(($$$%™½È€ ±•Ð¨€ô€Àì¨€ðôÉ½ÝÌì¨€¬¬€¤ì(($$$$%¥˜€ ¨€ôôô€À€˜˜¤€ôôô½±Ì€¤ì(($$$$$%Ùl¤ul¨t€ô…¨ì(($$$$%ô•±Í”ì(($$$$$%Ùl¤ul¨t€ô…¨¹±½¹” ¤¹±•ÉÀ ‰¨°¨€¼É½ÝÌ€¤ì(($$$$%ô(($$$%ô(($$%ô(($$$¼¼½¹ÍÑÉÕÐ…±°½˜Ñ¡”™…•Ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð½±Ìì¤€¬¬€¤ì(($$$%™½È€ ±•Ð¨€ô€Àì¨€ð€È€¨€ ½±Ì€´¤€¤€´€Äì¨€¬¬€¤ì(($$$$%½¹ÍÐ¬€ô5…Ñ ¹™±½½È ¨€¼€È€¤ì(($$$$%¥˜€ ¨€”€È€ôôô€À€¤ì(($$$$$%ÁÕÍ¡Y•ÉÑ•à Ùl¤ul¬€¬€Ät€¤ì($$$$$%ÁÕÍ¡Y•ÉÑ•à Ùl¤€¬€Äul¬t€¤ì($$$$$%ÁÕÍ¡Y•ÉÑ•à Ùl¤ul¬t€¤ì(($$$$%ô•±Í”ì(($$$$$%ÁÕÍ¡Y•ÉÑ•à Ùl¤ul¬€¬€Ät€¤ì($$$$$%ÁÕÍ¡Y•ÉÑ•à Ùl¤€¬€Äul¬€¬€Ät€¤ì($$$$$%ÁÕÍ¡Y•ÉÑ•à Ùl¤€¬€Äul¬t€¤ì(($$$$%ô(($$$%ô(($$%ô(($%ô(($%™Õ¹Ñ¥½¸…ÁÁ±åI…‘¥ÕÌ É…‘¥ÕÌ€¤ì(($$%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$$¼¼¥Ñ•É…Ñ”½Ù•ÈÑ¡”•¹Ñ¥É”‰Õ™™•È…¹…ÁÁ±äÑ¡”É…‘¥ÕÌÑ¼•… Ù•ÉÑ•à(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÙ•ÉÑ•á	Õ™™•È¹±•¹Ñ ì¤€¬ô€Ì€¤ì(($$$%Ù•ÉÑ•à¹à€ôÙ•ÉÑ•á	Õ™™•Él¤€¬€Àtì($$$%Ù•ÉÑ•à¹ä€ôÙ•ÉÑ•á	Õ™™•Él¤€¬€Ätì($$$%Ù•ÉÑ•à¹è€ôÙ•ÉÑ•á	Õ™™•Él¤€¬€Ètì(($$$%Ù•ÉÑ•à¹¹½Éµ…±¥é” ¤¹µÕ±Ñ¥Á±åM…±…È É…‘¥ÕÌ€¤ì(($$$%Ù•ÉÑ•á	Õ™™•Él¤€¬€Àt€ôÙ•ÉÑ•à¹àì($$$%Ù•ÉÑ•á	Õ™™•Él¤€¬€Ät€ôÙ•ÉÑ•à¹äì($$$%Ù•ÉÑ•á	Õ™™•Él¤€¬€Èt€ôÙ•ÉÑ•à¹èì(($$%ô(($%ô(($%™Õ¹Ñ¥½¸•¹•É…Ñ•UYÌ ¤ì(($$%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÙ•ÉÑ•á	Õ™™•È¹±•¹Ñ ì¤€¬ô€Ì€¤ì(($$$%Ù•ÉÑ•à¹à€ôÙ•ÉÑ•á	Õ™™•Él¤€¬€Àtì($$$%Ù•ÉÑ•à¹ä€ôÙ•ÉÑ•á	Õ™™•Él¤€¬€Ätì($$$%Ù•ÉÑ•à¹è€ôÙ•ÉÑ•á	Õ™™•Él¤€¬€Ètì(($$$%½¹ÍÐÔ€ô…é¥µÕÑ  Ù•ÉÑ•à€¤€¼€È€¼5…Ñ ¹A$€¬€À¸Ôì($$$%½¹ÍÐØ€ô¥¹±¥¹…Ñ¥½¸ Ù•ÉÑ•à€¤€¼5…Ñ ¹A$€¬€À¸Ôì($$$%ÕÙ	Õ™™•È¹ÁÕÍ  Ô°€Ä€´Ø€¤ì(($$%ô(($$%½ÉÉ•ÑUYÌ ¤ì(($$%½ÉÉ•ÑM•…´ ¤ì(($%ô(($%™Õ¹Ñ¥½¸½ÉÉ•ÑM•…´ ¤ì(($$$¼¼¡…¹‘±”…Í”Ý¡•¸™…”ÍÑÉ…‘‘±•ÌÑ¡”Í•…´°Í•”€ŒÌÈØä(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÕÙ	Õ™™•È¹±•¹Ñ ì¤€¬ô€Ø€¤ì(($$$$¼¼ÕØ‘…Ñ„½˜„Í¥¹±”™…”(($$$%½¹ÍÐàÀ€ôÕÙ	Õ™™•Él¤€¬€Àtì($$$%½¹ÍÐàÄ€ôÕÙ	Õ™™•Él¤€¬€Ètì($$$%½¹ÍÐàÈ€ôÕÙ	Õ™™•Él¤€¬€Ðtì(($$$%½¹ÍÐµ…à€ô5…Ñ ¹µ…à àÀ°àÄ°àÈ€¤ì($$$%½¹ÍÐµ¥¸€ô5…Ñ ¹µ¥¸ àÀ°àÄ°àÈ€¤ì(($$$$¼¼€À¸ä¥ÌÍ½µ•Ý¡…Ð…É‰¥ÑÉ…Éä(($$$%¥˜€ µ…à€ø€À¸ä€˜˜µ¥¸€ð€À¸Ä€¤ì(($$$$%¥˜€ àÀ€ð€À¸È€¤ÕÙ	Õ™™•Él¤€¬€Àt€¬ô€Äì($$$$%¥˜€ àÄ€ð€À¸È€¤ÕÙ	Õ™™•Él¤€¬€Èt€¬ô€Äì($$$$%¥˜€ àÈ€ð€À¸È€¤ÕÙ	Õ™™•Él¤€¬€Ðt€¬ô€Äì(($$$%ô(($$%ô(($%ô(($%™Õ¹Ñ¥½¸ÁÕÍ¡Y•ÉÑ•à Ù•ÉÑ•à€¤ì(($$%Ù•ÉÑ•á	Õ™™•È¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($%ô(($%™Õ¹Ñ¥½¸•ÑY•ÉÑ•á	å%¹‘•à ¥¹‘•à°Ù•ÉÑ•à€¤ì(($$%½¹ÍÐÍÑÉ¥‘”€ô¥¹‘•à€¨€Ìì(($$%Ù•ÉÑ•à¹à€ôÙ•ÉÑ¥•ÍlÍÑÉ¥‘”€¬€Àtì($$%Ù•ÉÑ•à¹ä€ôÙ•ÉÑ¥•ÍlÍÑÉ¥‘”€¬€Ätì($$%Ù•ÉÑ•à¹è€ôÙ•ÉÑ¥•ÍlÍÑÉ¥‘”€¬€Ètì(($%ô(($%™Õ¹Ñ¥½¸½ÉÉ•ÑUYÌ ¤ì(($$%½¹ÍÐ„€ô¹•ÜY•Ñ½ÈÌ ¤ì($$%½¹ÍÐˆ€ô¹•ÜY•Ñ½ÈÌ ¤ì($$%½¹ÍÐŒ€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%½¹ÍÐ•¹ÑÉ½¥€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%½¹ÍÐÕÙ€ô¹•ÜY•Ñ½ÈÈ ¤ì($$%½¹ÍÐÕÙ€ô¹•ÜY•Ñ½ÈÈ ¤ì($$%½¹ÍÐÕÙ€ô¹•ÜY•Ñ½ÈÈ ¤ì(($$%™½È€ ±•Ð¤€ô€À°¨€ô€Àì¤€ðÙ•ÉÑ•á	Õ™™•È¹±•¹Ñ ì¤€¬ô€ä°¨€¬ô€Ø€¤ì(($$$%„¹Í•Ð Ù•ÉÑ•á	Õ™™•Él¤€¬€Àt°Ù•ÉÑ•á	Õ™™•Él¤€¬€Ät°Ù•ÉÑ•á	Õ™™•Él¤€¬€Èt€¤ì($$$%ˆ¹Í•Ð Ù•ÉÑ•á	Õ™™•Él¤€¬€Ìt°Ù•ÉÑ•á	Õ™™•Él¤€¬€Ðt°Ù•ÉÑ•á	Õ™™•Él¤€¬€Ôt€¤ì($$$%Œ¹Í•Ð Ù•ÉÑ•á	Õ™™•Él¤€¬€Øt°Ù•ÉÑ•á	Õ™™•Él¤€¬€Üt°Ù•ÉÑ•á	Õ™™•Él¤€¬€àt€¤ì(($$$%ÕÙ¹Í•Ð ÕÙ	Õ™™•Él¨€¬€Àt°ÕÙ	Õ™™•Él¨€¬€Ät€¤ì($$$%ÕÙ¹Í•Ð ÕÙ	Õ™™•Él¨€¬€Èt°ÕÙ	Õ™™•Él¨€¬€Ìt€¤ì($$$%ÕÙ¹Í•Ð ÕÙ	Õ™™•Él¨€¬€Ðt°ÕÙ	Õ™™•Él¨€¬€Ôt€¤ì(($$$%•¹ÑÉ½¥¹½Áä „€¤¹…‘ ˆ€¤¹…‘ Œ€¤¹‘¥Ù¥‘•M…±…È €Ì€¤ì(($$$%½¹ÍÐ…é¤€ô…é¥µÕÑ  •¹ÑÉ½¥€¤ì(($$$%½ÉÉ•ÑUX ÕÙ°¨€¬€À°„°…é¤€¤ì($$$%½ÉÉ•ÑUX ÕÙ°¨€¬€È°ˆ°…é¤€¤ì($$$%½ÉÉ•ÑUX ÕÙ°¨€¬€Ð°Œ°…é¤€¤ì(($$%ô(($%ô(($%™Õ¹Ñ¥½¸½ÉÉ•ÑUX ÕØ°ÍÑÉ¥‘”°Ù•Ñ½È°…é¥µÕÑ €¤ì(($$%¥˜€ € …é¥µÕÑ €ð€À€¤€˜˜€ ÕØ¹à€ôôô€Ä€¤€¤ì(($$$%ÕÙ	Õ™™•ÉlÍÑÉ¥‘”t€ôÕØ¹à€´€Äì(($$%ô(($$%¥˜€ € Ù•Ñ½È¹à€ôôô€À€¤€˜˜€ Ù•Ñ½È¹è€ôôô€À€¤€¤ì(($$$%ÕÙ	Õ™™•ÉlÍÑÉ¥‘”t€ô…é¥µÕÑ €¼€È€¼5…Ñ ¹A$€¬€À¸Ôì(($$%ô(($%ô(($$¼¼¹±”…É½Õ¹Ñ¡”d…á¥Ì°½Õ¹Ñ•Èµ±½­Ý¥Í”Ý¡•¸±½½­¥¹œ™É½´…‰½Ù”¸(($%™Õ¹Ñ¥½¸…é¥µÕÑ  Ù•Ñ½È€¤ì(($$%É•ÑÕÉ¸5…Ñ ¹…Ñ…¸È Ù•Ñ½È¹è°€´Ù•Ñ½È¹à€¤ì(($%ô((($$¼¼¹±”…‰½Ù”Ñ¡”ahÁ±…¹”¸(($%™Õ¹Ñ¥½¸¥¹±¥¹…Ñ¥½¸ Ù•Ñ½È€¤ì(($$%É•ÑÕÉ¸5…Ñ ¹…Ñ…¸È €´Ù•Ñ½È¹ä°5…Ñ ¹ÍÅÉÐ € Ù•Ñ½È¹à€¨Ù•Ñ½È¹à€¤€¬€ Ù•Ñ½È¹è€¨Ù•Ñ½È¹è€¤€¤€¤ì(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•ÜA½±å¡•‘É½¹•½µ•ÑÉä ‘…Ñ„¹Ù•ÉÑ¥•Ì°‘…Ñ„¹¥¹‘¥•Ì°‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹‘•Ñ…¥±Ì€¤ì((%ô()ô()±…ÍÌ½‘•…¡•‘É½¹•½µ•ÑÉä•áÑ•¹‘ÌA½±å¡•‘É½¹•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°‘•Ñ…¥°€ô€À€¤ì(($%½¹ÍÐÐ€ô€ €Ä€¬5…Ñ ¹ÍÅÉÐ €Ô€¤€¤€¼€Èì($%½¹ÍÐÈ€ô€Ä€¼Ðì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ôl(($$$¼¼€£
ÄÄ°ƒ
ÄÄ°ƒ
ÄÄ¤($$$´€Ä°€´€Ä°€´€Ä°$´€Ä°€´€Ä°€Ä°($$$´€Ä°€Ä°€´€Ä°€´€Ä°€Ä°€Ä°($$$Ä°€´€Ä°€´€Ä°€Ä°€´€Ä°€Ä°($$$Ä°€Ä°€´€Ä°€Ä°€Ä°€Ä°(($$$¼¼€ À°ƒ
ÄÄ¿>°ƒ
Ç>¤($$$À°€´È°€´Ð°€À°€´È°Ð°($$$À°È°€´Ð°€À°È°Ð°(($$$¼¼€£
ÄÄ¿>°ƒ
Ç>°€À¤($$$´È°€´Ð°€À°€´È°Ð°€À°($$%È°€´Ð°€À°È°Ð°€À°(($$$¼¼€£
Ç>°€À°ƒ
ÄÄ¿>¤($$$´Ð°€À°€´È°Ð°€À°€´È°($$$´Ð°€À°È°Ð°€À°È($%tì(($%½¹ÍÐ¥¹‘¥•Ì€ôl($$$Ì°€ÄÄ°€Ü°€$Ì°€Ü°€ÄÔ°€$Ì°€ÄÔ°€ÄÌ°($$$Ü°€Ää°€ÄÜ°€$Ü°€ÄÜ°€Ø°€$Ü°€Ø°€ÄÔ°($$$ÄÜ°€Ð°€à°€$ÄÜ°€à°€ÄÀ°€$ÄÜ°€ÄÀ°€Ø°($$$à°€À°€ÄØ°€$à°€ÄØ°€È°€$à°€È°€ÄÀ°($$$À°€ÄÈ°€Ä°€$À°€Ä°€Äà°€$À°€Äà°€ÄØ°($$$Ø°€ÄÀ°€È°€$Ø°€È°€ÄÌ°€$Ø°€ÄÌ°€ÄÔ°($$$È°€ÄØ°€Äà°€$È°€Äà°€Ì°€$È°€Ì°€ÄÌ°($$$Äà°€Ä°€ä°€$Äà°€ä°€ÄÄ°€$Äà°€ÄÄ°€Ì°($$$Ð°€ÄÐ°€ÄÈ°€$Ð°€ÄÈ°€À°€$Ð°€À°€à°($$$ÄÄ°€ä°€Ô°€$ÄÄ°€Ô°€Ää°€$ÄÄ°€Ää°€Ü°($$$Ää°€Ô°€ÄÐ°€$Ää°€ÄÐ°€Ð°€$Ää°€Ð°€ÄÜ°($$$Ä°€ÄÈ°€ÄÐ°€$Ä°€ÄÐ°€Ô°€$Ä°€Ô°€ä($%tì(($%ÍÕÁ•È Ù•ÉÑ¥•Ì°¥¹‘¥•Ì°É…‘¥ÕÌ°‘•Ñ…¥°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€½‘•…¡•‘É½¹•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%‘•Ñ…¥°è‘•Ñ…¥°($%ôì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Ü½‘•…¡•‘É½¹•½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹‘•Ñ…¥°€¤ì((%ô()ô()½¹ÍÐ}ØÀ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ØÄÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}¹½Éµ…°€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÑÉ¥…¹±”€ô€¼©}}AUI}|¨¼¹•ÜQÉ¥…¹±” ¤ì()±…ÍÌ‘•Í•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È •½µ•ÑÉä€ô¹Õ±°°Ñ¡É•Í¡½±‘¹±”€ô€Ä€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€‘•Í•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%•½µ•ÑÉäè•½µ•ÑÉä°($$%Ñ¡É•Í¡½±‘¹±”èÑ¡É•Í¡½±‘¹±”($%ôì(($%¥˜€ •½µ•ÑÉä€„ôô¹Õ±°€¤ì(($$%½¹ÍÐÁÉ•¥Í¥½¹A½¥¹ÑÌ€ô€Ðì($$%½¹ÍÐÁÉ•¥Í¥½¸€ô5…Ñ ¹Á½Ü €ÄÀ°ÁÉ•¥Í¥½¹A½¥¹ÑÌ€¤ì($$%½¹ÍÐÑ¡É•Í¡½±‘½Ð€ô5…Ñ ¹½Ì ÉI€¨Ñ¡É•Í¡½±‘¹±”€¤ì(($$%½¹ÍÐ¥¹‘•áÑÑÈ€ô•½µ•ÑÉä¹•Ñ%¹‘•à ¤ì($$%½¹ÍÐÁ½Í¥Ñ¥½¹ÑÑÈ€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤ì($$%½¹ÍÐ¥¹‘•á½Õ¹Ð€ô¥¹‘•áÑÑÈ€ü¥¹‘•áÑÑÈ¹½Õ¹Ð€èÁ½Í¥Ñ¥½¹ÑÑÈ¹½Õ¹Ðì(($$%½¹ÍÐ¥¹‘•áÉÈ€ôl€À°€À°€Àtì($$%½¹ÍÐÙ•ÉÑ-•åÌ€ôl€„œ°€ˆœ°€Œœtì($$%½¹ÍÐ¡…Í¡•Ì€ô¹•ÜÉÉ…ä €Ì€¤ì(($$%½¹ÍÐ•‘•…Ñ„€ôíôì($$%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($$%™½È€ ±•Ð¤€ô€Àì¤€ð¥¹‘•á½Õ¹Ðì¤€¬ô€Ì€¤ì(($$$%¥˜€ ¥¹‘•áÑÑÈ€¤ì(($$$$%¥¹‘•áÉÉl€Àt€ô¥¹‘•áÑÑÈ¹•Ñ` ¤€¤ì($$$$%¥¹‘•áÉÉl€Ät€ô¥¹‘•áÑÑÈ¹•Ñ` ¤€¬€Ä€¤ì($$$$%¥¹‘•áÉÉl€Èt€ô¥¹‘•áÑÑÈ¹•Ñ` ¤€¬€È€¤ì(($$$%ô•±Í”ì(($$$$%¥¹‘•áÉÉl€Àt€ô¤ì($$$$%¥¹‘•áÉÉl€Ät€ô¤€¬€Äì($$$$%¥¹‘•áÉÉl€Èt€ô¤€¬€Èì(($$$%ô(($$$%½¹ÍÐì„°ˆ°Œô€ô}ÑÉ¥…¹±”ì($$$%„¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÈ°¥¹‘•áÉÉl€Àt€¤ì($$$%ˆ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÈ°¥¹‘•áÉÉl€Ät€¤ì($$$%Œ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÈ°¥¹‘•áÉÉl€Èt€¤ì($$$%}ÑÉ¥…¹±”¹•Ñ9½Éµ…° }¹½Éµ…°€¤ì(($$$$¼¼É•…Ñ”¡…Í¡•Ì™½ÈÑ¡”•‘”™É½´Ñ¡”Ù•ÉÑ¥•Ì($$$%¡…Í¡•Íl€Àt€ô€‘ì5…Ñ ¹É½Õ¹ „¹à€¨ÁÉ•¥Í¥½¸€¤ô°‘ì5…Ñ ¹É½Õ¹ „¹ä€¨ÁÉ•¥Í¥½¸€¤ô°‘ì5…Ñ ¹É½Õ¹ „¹è€¨ÁÉ•¥Í¥½¸€¤õ€ì($$$%¡…Í¡•Íl€Ät€ô€‘ì5…Ñ ¹É½Õ¹ ˆ¹à€¨ÁÉ•¥Í¥½¸€¤ô°‘ì5…Ñ ¹É½Õ¹ ˆ¹ä€¨ÁÉ•¥Í¥½¸€¤ô°‘ì5…Ñ ¹É½Õ¹ ˆ¹è€¨ÁÉ•¥Í¥½¸€¤õ€ì($$$%¡…Í¡•Íl€Èt€ô€‘ì5…Ñ ¹É½Õ¹ Œ¹à€¨ÁÉ•¥Í¥½¸€¤ô°‘ì5…Ñ ¹É½Õ¹ Œ¹ä€¨ÁÉ•¥Í¥½¸€¤ô°‘ì5…Ñ ¹É½Õ¹ Œ¹è€¨ÁÉ•¥Í¥½¸€¤õ€ì(($$$$¼¼Í­¥À‘••¹•É…Ñ”ÑÉ¥…¹±•Ì($$$%¥˜€ ¡…Í¡•Íl€Àt€ôôô¡…Í¡•Íl€Ätñð¡…Í¡•Íl€Ät€ôôô¡…Í¡•Íl€Ètñð¡…Í¡•Íl€Èt€ôôô¡…Í¡•Íl€Àt€¤ì(($$$$%½¹Ñ¥¹Õ”ì(($$$%ô(($$$$¼¼¥Ñ•É…Ñ”½Ù•È•Ù•Éä•‘”($$$%™½È€ ±•Ð¨€ô€Àì¨€ð€Ìì¨€¬¬€¤ì(($$$$$¼¼•ÐÑ¡”™¥ÉÍÐ…¹¹•áÐÙ•ÉÑ•àµ…­¥¹œÕÀÑ¡”•‘”($$$$%½¹ÍÐ©9•áÐ€ô€ ¨€¬€Ä€¤€”€Ìì($$$$%½¹ÍÐÙ•!…Í À€ô¡…Í¡•Íl¨tì($$$$%½¹ÍÐÙ•!…Í Ä€ô¡…Í¡•Íl©9•áÐtì($$$$%½¹ÍÐØÀ€ô}ÑÉ¥…¹±•lÙ•ÉÑ-•åÍl¨ttì($$$$%½¹ÍÐØÄ€ô}ÑÉ¥…¹±•lÙ•ÉÑ-•åÍl©9•áÐttì(($$$$%½¹ÍÐ¡…Í €ô€‘ìÙ•!…Í Àõ|‘ìÙ•!…Í Äõ€ì($$$$%½¹ÍÐÉ•Ù•ÉÍ•!…Í €ô€‘ìÙ•!…Í Äõ|‘ìÙ•!…Í Àõ€ì(($$$$%¥˜€ É•Ù•ÉÍ•!…Í ¥¸•‘•…Ñ„€˜˜•‘•…Ñ…lÉ•Ù•ÉÍ•!…Í t€¤ì(($$$$$$¼¼¥˜Ý”™½Õ¹„Í¥‰±¥¹œ•‘”…‘¥Ð¥¹Ñ¼Ñ¡”Ù•ÉÑ•à…ÉÉ…ä¥˜($$$$$$¼¼¥Ðµ••ÑÌÑ¡”…¹±”Ñ¡É•Í¡½±…¹‘•±•Ñ”Ñ¡”•‘”™É½´Ñ¡”µ…À¸($$$$$%¥˜€ }¹½Éµ…°¹‘½Ð •‘•…Ñ…lÉ•Ù•ÉÍ•!…Í t¹¹½Éµ…°€¤€ðôÑ¡É•Í¡½±‘½Ð€¤ì(($$$$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  ØÀ¹à°ØÀ¹ä°ØÀ¹è€¤ì($$$$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  ØÄ¹à°ØÄ¹ä°ØÄ¹è€¤ì(($$$$$%ô(($$$$$%•‘•…Ñ…lÉ•Ù•ÉÍ•!…Í t€ô¹Õ±°ì(($$$$%ô•±Í”¥˜€ €„€ ¡…Í ¥¸•‘•…Ñ„€¤€¤ì(($$$$$$¼¼¥˜Ý”Ù”…±É•…‘ä½Ð…¸•‘”¡•É”Ñ¡•¸Í­¥À…‘‘¥¹œ„¹•Ü½¹”($$$$$%•‘•…Ñ…l¡…Í t€ôì(($$$$$$%¥¹‘•àÀè¥¹‘•áÉÉl¨t°($$$$$$%¥¹‘•àÄè¥¹‘•áÉÉl©9•áÐt°($$$$$$%¹½Éµ…°è}¹½Éµ…°¹±½¹” ¤°(($$$$$%ôì(($$$$%ô(($$$%ô(($$%ô(($$$¼¼¥Ñ•É…Ñ”½Ù•È…±°É•µ…¥¹¥¹œ°Õ¹µ…Ñ¡••‘•Ì…¹…‘Ñ¡•´Ñ¼Ñ¡”Ù•ÉÑ•à…ÉÉ…ä($$%™½È€ ½¹ÍÐ­•ä¥¸•‘•…Ñ„€¤ì(($$$%¥˜€ •‘•…Ñ…l­•ät€¤ì(($$$$%½¹ÍÐì¥¹‘•àÀ°¥¹‘•àÄô€ô•‘•…Ñ…l­•ätì($$$$%}ØÀ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÈ°¥¹‘•àÀ€¤ì($$$$%}ØÄÄ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÑÑÈ°¥¹‘•àÄ€¤ì(($$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  }ØÀ¹à°}ØÀ¹ä°}ØÀ¹è€¤ì($$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  }ØÄÄ¹à°}ØÄÄ¹ä°}ØÄÄ¹è€¤ì(($$$%ô(($$%ô(($$%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌM¡…Á”•áÑ•¹‘ÌA…Ñ ì((%½¹ÍÑÉÕÑ½È Á½¥¹ÑÌ€¤ì(($%ÍÕÁ•È Á½¥¹ÑÌ€¤ì(($%Ñ¡¥Ì¹ÕÕ¥€ô•¹•É…Ñ•UU% ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€M¡…Á”œì(($%Ñ¡¥Ì¹¡½±•Ì€ômtì((%ô((%•ÑA½¥¹ÑÍ!½±•Ì ‘¥Ù¥Í¥½¹Ì€¤ì(($%½¹ÍÐ¡½±•ÍAÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÑ¡¥Ì¹¡½±•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%¡½±•ÍAÑÍl¤t€ôÑ¡¥Ì¹¡½±•Íl¤t¹•ÑA½¥¹ÑÌ ‘¥Ù¥Í¥½¹Ì€¤ì(($%ô(($%É•ÑÕÉ¸¡½±•ÍAÑÌì((%ô(($¼¼•ÐÁ½¥¹ÑÌ½˜Í¡…Á”…¹¡½±•Ì€¡­•åÁ½¥¹ÑÌ‰…Í•½¸Í•µ•¹ÑÌÁ…É…µ•Ñ•È¤((%•áÑÉ…ÑA½¥¹ÑÌ ‘¥Ù¥Í¥½¹Ì€¤ì(($%É•ÑÕÉ¸ì(($$%Í¡…Á”èÑ¡¥Ì¹•ÑA½¥¹ÑÌ ‘¥Ù¥Í¥½¹Ì€¤°($$%¡½±•ÌèÑ¡¥Ì¹•ÑA½¥¹ÑÍ!½±•Ì ‘¥Ù¥Í¥½¹Ì€¤(($%ôì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹¡½±•Ì€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÍ½ÕÉ”¹¡½±•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐ¡½±”€ôÍ½ÕÉ”¹¡½±•Íl¤tì(($$%Ñ¡¥Ì¹¡½±•Ì¹ÁÕÍ  ¡½±”¹±½¹” ¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹ÕÕ¥€ôÑ¡¥Ì¹ÕÕ¥ì($%‘…Ñ„¹¡½±•Ì€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÑ¡¥Ì¹¡½±•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐ¡½±”€ôÑ¡¥Ì¹¡½±•Íl¤tì($$%‘…Ñ„¹¡½±•Ì¹ÁÕÍ  ¡½±”¹Ñ½)M=8 ¤€¤ì(($%ô(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%ÍÕÁ•È¹™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹ÕÕ¥€ô©Í½¸¹ÕÕ¥ì($%Ñ¡¥Ì¹¡½±•Ì€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹¡½±•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐ¡½±”€ô©Í½¸¹¡½±•Íl¤tì($$%Ñ¡¥Ì¹¡½±•Ì¹ÁÕÍ  ¹•ÜA…Ñ  ¤¹™É½µ)M=8 ¡½±”€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¨¨(€¨A½ÉÐ™É½´¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½µ…Á‰½à½•…ÉÕÐ€¡ØÈ¸È¸Ð¤(€¨¼()½¹ÍÐ…ÉÕÐ€ôì((%ÑÉ¥…¹Õ±…Ñ”è™Õ¹Ñ¥½¸€ ‘…Ñ„°¡½±•%¹‘¥•Ì°‘¥´€ô€È€¤ì(($%½¹ÍÐ¡…Í!½±•Ì€ô¡½±•%¹‘¥•Ì€˜˜¡½±•%¹‘¥•Ì¹±•¹Ñ ì($%½¹ÍÐ½ÕÑ•É1•¸€ô¡…Í!½±•Ì€ü¡½±•%¹‘¥•Íl€Àt€¨‘¥´€è‘…Ñ„¹±•¹Ñ ì($%±•Ð½ÕÑ•É9½‘”€ô±¥¹­•‘1¥ÍÐ ‘…Ñ„°€À°½ÕÑ•É1•¸°‘¥´°ÑÉÕ”€¤ì($%½¹ÍÐÑÉ¥…¹±•Ì€ômtì(($%¥˜€ €„½ÕÑ•É9½‘”ñð½ÕÑ•É9½‘”¹¹•áÐ€ôôô½ÕÑ•É9½‘”¹ÁÉ•Ø€¤É•ÑÕÉ¸ÑÉ¥…¹±•Ìì(($%±•Ðµ¥¹`°µ¥¹d°µ…á`°µ…ád°à°ä°¥¹ÙM¥é”ì(($%¥˜€ ¡…Í!½±•Ì€¤½ÕÑ•É9½‘”€ô•±¥µ¥¹…Ñ•!½±•Ì ‘…Ñ„°¡½±•%¹‘¥•Ì°½ÕÑ•É9½‘”°‘¥´€¤ì(($$¼¼¥˜Ñ¡”Í¡…Á”¥Ì¹½ÐÑ½¼Í¥µÁ±”°Ý”±°ÕÍ”èµ½É‘•ÈÕÉÙ”¡…Í ±…Ñ•Èì…±Õ±…Ñ”Á½±å½¸‰‰½à($%¥˜€ ‘…Ñ„¹±•¹Ñ €ø€àÀ€¨‘¥´€¤ì(($$%µ¥¹`€ôµ…á`€ô‘…Ñ…l€Àtì($$%µ¥¹d€ôµ…ád€ô‘…Ñ…l€Ätì(($$%™½È€ ±•Ð¤€ô‘¥´ì¤€ð½ÕÑ•É1•¸ì¤€¬ô‘¥´€¤ì(($$$%à€ô‘…Ñ…l¤tì($$$%ä€ô‘…Ñ…l¤€¬€Ätì($$$%¥˜€ à€ðµ¥¹`€¤µ¥¹`€ôàì($$$%¥˜€ ä€ðµ¥¹d€¤µ¥¹d€ôäì($$$%¥˜€ à€øµ…á`€¤µ…á`€ôàì($$$%¥˜€ ä€øµ…ád€¤µ…ád€ôäì(($$%ô(($$$¼¼µ¥¹`°µ¥¹d…¹¥¹ÙM¥é”…É”±…Ñ•ÈÕÍ•Ñ¼ÑÉ…¹Í™½É´½½É‘Ì¥¹Ñ¼¥¹Ñ••ÉÌ™½Èèµ½É‘•È…±Õ±…Ñ¥½¸($$%¥¹ÙM¥é”€ô5…Ñ ¹µ…à µ…á`€´µ¥¹`°µ…ád€´µ¥¹d€¤ì($$%¥¹ÙM¥é”€ô¥¹ÙM¥é”€„ôô€À€ü€ÌÈÜØÜ€¼¥¹ÙM¥é”€è€Àì(($%ô(($%•…ÉÕÑ1¥¹­• ½ÕÑ•É9½‘”°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”°€À€¤ì(($%É•ÑÕÉ¸ÑÉ¥…¹±•Ìì((%ô()ôì((¼¼É•…Ñ”„¥ÉÕ±…È‘½Õ‰±ä±¥¹­•±¥ÍÐ™É½´Á½±å½¸Á½¥¹ÑÌ¥¸Ñ¡”ÍÁ•¥™¥•Ý¥¹‘¥¹œ½É‘•È)™Õ¹Ñ¥½¸±¥¹­•‘1¥ÍÐ ‘…Ñ„°ÍÑ…ÉÐ°•¹°‘¥´°±½­Ý¥Í”€¤ì((%±•Ð¤°±…ÍÐì((%¥˜€ ±½­Ý¥Í”€ôôô€ Í¥¹•‘É•„ ‘…Ñ„°ÍÑ…ÉÐ°•¹°‘¥´€¤€ø€À€¤€¤ì(($%™½È€ ¤€ôÍÑ…ÉÐì¤€ð•¹ì¤€¬ô‘¥´€¤±…ÍÐ€ô¥¹Í•ÉÑ9½‘” ¤°‘…Ñ…l¤t°‘…Ñ…l¤€¬€Ät°±…ÍÐ€¤ì((%ô•±Í”ì(($%™½È€ ¤€ô•¹€´‘¥´ì¤€øôÍÑ…ÉÐì¤€´ô‘¥´€¤±…ÍÐ€ô¥¹Í•ÉÑ9½‘” ¤°‘…Ñ…l¤t°‘…Ñ…l¤€¬€Ät°±…ÍÐ€¤ì((%ô((%¥˜€ ±…ÍÐ€˜˜•ÅÕ…±Ì ±…ÍÐ°±…ÍÐ¹¹•áÐ€¤€¤ì(($%É•µ½Ù•9½‘” ±…ÍÐ€¤ì($%±…ÍÐ€ô±…ÍÐ¹¹•áÐì((%ô((%É•ÑÕÉ¸±…ÍÐì()ô((¼¼•±¥µ¥¹…Ñ”½±¥¹•…È½È‘ÕÁ±¥…Ñ”Á½¥¹ÑÌ)™Õ¹Ñ¥½¸™¥±Ñ•ÉA½¥¹ÑÌ ÍÑ…ÉÐ°•¹€¤ì((%¥˜€ €„ÍÑ…ÉÐ€¤É•ÑÕÉ¸ÍÑ…ÉÐì(%¥˜€ €„•¹€¤•¹€ôÍÑ…ÉÐì((%±•ÐÀ€ôÍÑ…ÉÐ°($%……¥¸ì(%‘¼ì(($%……¥¸€ô™…±Í”ì(($%¥˜€ €„À¹ÍÑ•¥¹•È€˜˜€ •ÅÕ…±Ì À°À¹¹•áÐ€¤ñð…É•„ À¹ÁÉ•Ø°À°À¹¹•áÐ€¤€ôôô€À€¤€¤ì(($$%É•µ½Ù•9½‘” À€¤ì($$%À€ô•¹€ôÀ¹ÁÉ•Øì($$%¥˜€ À€ôôôÀ¹¹•áÐ€¤‰É•…¬ì($$%……¥¸€ôÑÉÕ”ì(($%ô•±Í”ì(($$%À€ôÀ¹¹•áÐì(($%ô((%ôÝ¡¥±”€ ……¥¸ñðÀ€„ôô•¹€¤ì((%É•ÑÕÉ¸•¹ì()ô((¼¼µ…¥¸•…ÈÍ±¥¥¹œ±½½ÀÝ¡¥ ÑÉ¥…¹Õ±…Ñ•Ì„Á½±å½¸€¡¥Ù•¸…Ì„±¥¹­•±¥ÍÐ¤)™Õ¹Ñ¥½¸•…ÉÕÑ1¥¹­• •…È°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”°Á…ÍÌ€¤ì((%¥˜€ €„•…È€¤É•ÑÕÉ¸ì(($¼¼¥¹Ñ•É±¥¹¬Á½±å½¸¹½‘•Ì¥¸èµ½É‘•È(%¥˜€ €„Á…ÍÌ€˜˜¥¹ÙM¥é”€¤¥¹‘•áÕÉÙ” •…È°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì((%±•ÐÍÑ½À€ô•…È°($%ÁÉ•Ø°¹•áÐì(($¼¼¥Ñ•É…Ñ”Ñ¡É½Õ •…ÉÌ°Í±¥¥¹œÑ¡•´½¹”‰ä½¹”(%Ý¡¥±”€ •…È¹ÁÉ•Ø€„ôô•…È¹¹•áÐ€¤ì(($%ÁÉ•Ø€ô•…È¹ÁÉ•Øì($%¹•áÐ€ô•…È¹¹•áÐì(($%¥˜€ ¥¹ÙM¥é”€ü¥Í…É!…Í¡• •…È°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤€è¥Í…È •…È€¤€¤ì(($$$¼¼ÕÐ½™˜Ñ¡”ÑÉ¥…¹±”($$%ÑÉ¥…¹±•Ì¹ÁÕÍ  ÁÉ•Ø¹¤€¼‘¥´ð€À€¤ì($$%ÑÉ¥…¹±•Ì¹ÁÕÍ  •…È¹¤€¼‘¥´ð€À€¤ì($$%ÑÉ¥…¹±•Ì¹ÁÕÍ  ¹•áÐ¹¤€¼‘¥´ð€À€¤ì(($$%É•µ½Ù•9½‘” •…È€¤ì(($$$¼¼Í­¥ÁÁ¥¹œÑ¡”¹•áÐÙ•ÉÑ•à±•…‘ÌÑ¼±•ÍÌÍ±¥Ù•ÈÑÉ¥…¹±•Ì($$%•…È€ô¹•áÐ¹¹•áÐì($$%ÍÑ½À€ô¹•áÐ¹¹•áÐì(($$%½¹Ñ¥¹Õ”ì(($%ô(($%•…È€ô¹•áÐì(($$¼¼¥˜Ý”±½½Á•Ñ¡É½Õ Ñ¡”Ý¡½±”É•µ…¥¹¥¹œÁ½±å½¸…¹…¸Ð™¥¹…¹äµ½É”•…ÉÌ($%¥˜€ •…È€ôôôÍÑ½À€¤ì(($$$¼¼ÑÉä™¥±Ñ•É¥¹œÁ½¥¹ÑÌ…¹Í±¥¥¹œ……¥¸($$%¥˜€ €„Á…ÍÌ€¤ì(($$$%•…ÉÕÑ1¥¹­• ™¥±Ñ•ÉA½¥¹ÑÌ •…È€¤°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”°€Ä€¤ì(($$$$¼¼¥˜Ñ¡¥Ì‘¥‘¸ÐÝ½É¬°ÑÉäÕÉ¥¹œ…±°Íµ…±°Í•±˜µ¥¹Ñ•ÉÍ•Ñ¥½¹Ì±½…±±ä(($$%ô•±Í”¥˜€ Á…ÍÌ€ôôô€Ä€¤ì(($$$%•…È€ôÕÉ•1½…±%¹Ñ•ÉÍ•Ñ¥½¹Ì ™¥±Ñ•ÉA½¥¹ÑÌ •…È€¤°ÑÉ¥…¹±•Ì°‘¥´€¤ì($$$%•…ÉÕÑ1¥¹­• •…È°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”°€È€¤ì(($$$$¼¼…Ì„±…ÍÐÉ•Í½ÉÐ°ÑÉäÍÁ±¥ÑÑ¥¹œÑ¡”É•µ…¥¹¥¹œÁ½±å½¸¥¹Ñ¼ÑÝ¼(($$%ô•±Í”¥˜€ Á…ÍÌ€ôôô€È€¤ì(($$$%ÍÁ±¥Ñ…ÉÕÐ •…È°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì(($$%ô(($$%‰É•…¬ì(($%ô((%ô()ô((¼¼¡•¬Ý¡•Ñ¡•È„Á½±å½¸¹½‘”™½ÉµÌ„Ù…±¥•…ÈÝ¥Ñ …‘©…•¹Ð¹½‘•Ì)™Õ¹Ñ¥½¸¥Í…È •…È€¤ì((%½¹ÍÐ„€ô•…È¹ÁÉ•Ø°($%ˆ€ô•…È°($%Œ€ô•…È¹¹•áÐì((%¥˜€ …É•„ „°ˆ°Œ€¤€øô€À€¤É•ÑÕÉ¸™…±Í”ì€¼¼É•™±•à°…¸Ð‰”…¸•…È(($¼¼¹½Üµ…­”ÍÕÉ”Ý”‘½¸Ð¡…Ù”½Ñ¡•ÈÁ½¥¹ÑÌ¥¹Í¥‘”Ñ¡”Á½Ñ•¹Ñ¥…°•…È(%½¹ÍÐ…à€ô„¹à°‰à€ôˆ¹à°à€ôŒ¹à°…ä€ô„¹ä°‰ä€ôˆ¹ä°ä€ôŒ¹äì(($¼¼ÑÉ¥…¹±”‰‰½àìµ¥¸€˜µ…à…É”…±Õ±…Ñ•±¥­”Ñ¡¥Ì™½ÈÍÁ••(%½¹ÍÐàÀ€ô…à€ð‰à€ü€ …à€ðà€ü…à€èà€¤€è€ ‰à€ðà€ü‰à€èà€¤°($%äÀ€ô…ä€ð‰ä€ü€ …ä€ðä€ü…ä€èä€¤€è€ ‰ä€ðä€ü‰ä€èä€¤°($%àÄ€ô…à€ø‰à€ü€ …à€øà€ü…à€èà€¤€è€ ‰à€øà€ü‰à€èà€¤°($%äÄ€ô…ä€ø‰ä€ü€ …ä€øä€ü…ä€èä€¤€è€ ‰ä€øä€ü‰ä€èä€¤ì((%±•ÐÀ€ôŒ¹¹•áÐì(%Ý¡¥±”€ À€„ôô„€¤ì(($%¥˜€ À¹à€øôàÀ€˜˜À¹à€ðôàÄ€˜˜À¹ä€øôäÀ€˜˜À¹ä€ðôäÄ€˜˜($$%Á½¥¹Ñ%¹QÉ¥…¹±” …à°…ä°‰à°‰ä°à°ä°À¹à°À¹ä€¤€˜˜($$%…É•„ À¹ÁÉ•Ø°À°À¹¹•áÐ€¤€øô€À€¤É•ÑÕÉ¸™…±Í”ì($%À€ôÀ¹¹•áÐì((%ô((%É•ÑÕÉ¸ÑÉÕ”ì()ô()™Õ¹Ñ¥½¸¥Í…É!…Í¡• •…È°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì((%½¹ÍÐ„€ô•…È¹ÁÉ•Ø°($%ˆ€ô•…È°($%Œ€ô•…È¹¹•áÐì((%¥˜€ …É•„ „°ˆ°Œ€¤€øô€À€¤É•ÑÕÉ¸™…±Í”ì€¼¼É•™±•à°…¸Ð‰”…¸•…È((%½¹ÍÐ…à€ô„¹à°‰à€ôˆ¹à°à€ôŒ¹à°…ä€ô„¹ä°‰ä€ôˆ¹ä°ä€ôŒ¹äì(($¼¼ÑÉ¥…¹±”‰‰½àìµ¥¸€˜µ…à…É”…±Õ±…Ñ•±¥­”Ñ¡¥Ì™½ÈÍÁ••(%½¹ÍÐàÀ€ô…à€ð‰à€ü€ …à€ðà€ü…à€èà€¤€è€ ‰à€ðà€ü‰à€èà€¤°($%äÀ€ô…ä€ð‰ä€ü€ …ä€ðä€ü…ä€èä€¤€è€ ‰ä€ðä€ü‰ä€èä€¤°($%àÄ€ô…à€ø‰à€ü€ …à€øà€ü…à€èà€¤€è€ ‰à€øà€ü‰à€èà€¤°($%äÄ€ô…ä€ø‰ä€ü€ …ä€øä€ü…ä€èä€¤€è€ ‰ä€øä€ü‰ä€èä€¤ì(($¼¼èµ½É‘•ÈÉ…¹”™½ÈÑ¡”ÕÉÉ•¹ÐÑÉ¥…¹±”‰‰½àì(%½¹ÍÐµ¥¹h€ôé=É‘•È àÀ°äÀ°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤°($%µ…áh€ôé=É‘•È àÄ°äÄ°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì((%±•ÐÀ€ô•…È¹ÁÉ•Ùh°($%¸€ô•…È¹¹•áÑhì(($¼¼±½½¬™½ÈÁ½¥¹ÑÌ¥¹Í¥‘”Ñ¡”ÑÉ¥…¹±”¥¸‰½Ñ ‘¥É•Ñ¥½¹Ì(%Ý¡¥±”€ À€˜˜À¹è€øôµ¥¹h€˜˜¸€˜˜¸¹è€ðôµ…áh€¤ì(($%¥˜€ À¹à€øôàÀ€˜˜À¹à€ðôàÄ€˜˜À¹ä€øôäÀ€˜˜À¹ä€ðôäÄ€˜˜À€„ôô„€˜˜À€„ôôŒ€˜˜($$%Á½¥¹Ñ%¹QÉ¥…¹±” …à°…ä°‰à°‰ä°à°ä°À¹à°À¹ä€¤€˜˜…É•„ À¹ÁÉ•Ø°À°À¹¹•áÐ€¤€øô€À€¤É•ÑÕÉ¸™…±Í”ì($%À€ôÀ¹ÁÉ•Ùhì(($%¥˜€ ¸¹à€øôàÀ€˜˜¸¹à€ðôàÄ€˜˜¸¹ä€øôäÀ€˜˜¸¹ä€ðôäÄ€˜˜¸€„ôô„€˜˜¸€„ôôŒ€˜˜($$%Á½¥¹Ñ%¹QÉ¥…¹±” …à°…ä°‰à°‰ä°à°ä°¸¹à°¸¹ä€¤€˜˜…É•„ ¸¹ÁÉ•Ø°¸°¸¹¹•áÐ€¤€øô€À€¤É•ÑÕÉ¸™…±Í”ì($%¸€ô¸¹¹•áÑhì((%ô(($¼¼±½½¬™½ÈÉ•µ…¥¹¥¹œÁ½¥¹ÑÌ¥¸‘•É•…Í¥¹œèµ½É‘•È(%Ý¡¥±”€ À€˜˜À¹è€øôµ¥¹h€¤ì(($%¥˜€ À¹à€øôàÀ€˜˜À¹à€ðôàÄ€˜˜À¹ä€øôäÀ€˜˜À¹ä€ðôäÄ€˜˜À€„ôô„€˜˜À€„ôôŒ€˜˜($$%Á½¥¹Ñ%¹QÉ¥…¹±” …à°…ä°‰à°‰ä°à°ä°À¹à°À¹ä€¤€˜˜…É•„ À¹ÁÉ•Ø°À°À¹¹•áÐ€¤€øô€À€¤É•ÑÕÉ¸™…±Í”ì($%À€ôÀ¹ÁÉ•Ùhì((%ô(($¼¼±½½¬™½ÈÉ•µ…¥¹¥¹œÁ½¥¹ÑÌ¥¸¥¹É•…Í¥¹œèµ½É‘•È(%Ý¡¥±”€ ¸€˜˜¸¹è€ðôµ…áh€¤ì(($%¥˜€ ¸¹à€øôàÀ€˜˜¸¹à€ðôàÄ€˜˜¸¹ä€øôäÀ€˜˜¸¹ä€ðôäÄ€˜˜¸€„ôô„€˜˜¸€„ôôŒ€˜˜($$%Á½¥¹Ñ%¹QÉ¥…¹±” …à°…ä°‰à°‰ä°à°ä°¸¹à°¸¹ä€¤€˜˜…É•„ ¸¹ÁÉ•Ø°¸°¸¹¹•áÐ€¤€øô€À€¤É•ÑÕÉ¸™…±Í”ì($%¸€ô¸¹¹•áÑhì((%ô((%É•ÑÕÉ¸ÑÉÕ”ì()ô((¼¼¼Ñ¡É½Õ …±°Á½±å½¸¹½‘•Ì…¹ÕÉ”Íµ…±°±½…°Í•±˜µ¥¹Ñ•ÉÍ•Ñ¥½¹Ì)™Õ¹Ñ¥½¸ÕÉ•1½…±%¹Ñ•ÉÍ•Ñ¥½¹Ì ÍÑ…ÉÐ°ÑÉ¥…¹±•Ì°‘¥´€¤ì((%±•ÐÀ€ôÍÑ…ÉÐì(%‘¼ì(($%½¹ÍÐ„€ôÀ¹ÁÉ•Ø°($$%ˆ€ôÀ¹¹•áÐ¹¹•áÐì(($%¥˜€ €„•ÅÕ…±Ì „°ˆ€¤€˜˜¥¹Ñ•ÉÍ•ÑÌ „°À°À¹¹•áÐ°ˆ€¤€˜˜±½…±±å%¹Í¥‘” „°ˆ€¤€˜˜±½…±±å%¹Í¥‘” ˆ°„€¤€¤ì(($$%ÑÉ¥…¹±•Ì¹ÁÕÍ  „¹¤€¼‘¥´ð€À€¤ì($$%ÑÉ¥…¹±•Ì¹ÁÕÍ  À¹¤€¼‘¥´ð€À€¤ì($$%ÑÉ¥…¹±•Ì¹ÁÕÍ  ˆ¹¤€¼‘¥´ð€À€¤ì(($$$¼¼É•µ½Ù”ÑÝ¼¹½‘•Ì¥¹Ù½±Ù•($$%É•µ½Ù•9½‘” À€¤ì($$%É•µ½Ù•9½‘” À¹¹•áÐ€¤ì(($$%À€ôÍÑ…ÉÐ€ôˆì(($%ô(($%À€ôÀ¹¹•áÐì((%ôÝ¡¥±”€ À€„ôôÍÑ…ÉÐ€¤ì((%É•ÑÕÉ¸™¥±Ñ•ÉA½¥¹ÑÌ À€¤ì()ô((¼¼ÑÉäÍÁ±¥ÑÑ¥¹œÁ½±å½¸¥¹Ñ¼ÑÝ¼…¹ÑÉ¥…¹Õ±…Ñ”Ñ¡•´¥¹‘•Á•¹‘•¹Ñ±ä)™Õ¹Ñ¥½¸ÍÁ±¥Ñ…ÉÕÐ ÍÑ…ÉÐ°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì(($¼¼±½½¬™½È„Ù…±¥‘¥…½¹…°Ñ¡…Ð‘¥Ù¥‘•ÌÑ¡”Á½±å½¸¥¹Ñ¼ÑÝ¼(%±•Ð„€ôÍÑ…ÉÐì(%‘¼ì(($%±•Ðˆ€ô„¹¹•áÐ¹¹•áÐì($%Ý¡¥±”€ ˆ€„ôô„¹ÁÉ•Ø€¤ì(($$%¥˜€ „¹¤€„ôôˆ¹¤€˜˜¥ÍY…±¥‘¥…½¹…° „°ˆ€¤€¤ì(($$$$¼¼ÍÁ±¥ÐÑ¡”Á½±å½¸¥¸ÑÝ¼‰äÑ¡”‘¥…½¹…°($$$%±•ÐŒ€ôÍÁ±¥ÑA½±å½¸ „°ˆ€¤ì(($$$$¼¼™¥±Ñ•È½±¥¹•…ÈÁ½¥¹ÑÌ…É½Õ¹Ñ¡”ÕÑÌ($$$%„€ô™¥±Ñ•ÉA½¥¹ÑÌ „°„¹¹•áÐ€¤ì($$$%Œ€ô™¥±Ñ•ÉA½¥¹ÑÌ Œ°Œ¹¹•áÐ€¤ì(($$$$¼¼ÉÕ¸•…ÉÕÐ½¸•… ¡…±˜($$$%•…ÉÕÑ1¥¹­• „°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”°€À€¤ì($$$%•…ÉÕÑ1¥¹­• Œ°ÑÉ¥…¹±•Ì°‘¥´°µ¥¹`°µ¥¹d°¥¹ÙM¥é”°€À€¤ì($$$%É•ÑÕÉ¸ì(($$%ô(($$%ˆ€ôˆ¹¹•áÐì(($%ô(($%„€ô„¹¹•áÐì((%ôÝ¡¥±”€ „€„ôôÍÑ…ÉÐ€¤ì()ô((¼¼±¥¹¬•Ù•Éä¡½±”¥¹Ñ¼Ñ¡”½ÕÑ•È±½½À°ÁÉ½‘Õ¥¹œ„Í¥¹±”µÉ¥¹œÁ½±å½¸Ý¥Ñ¡½ÕÐ¡½±•Ì)™Õ¹Ñ¥½¸•±¥µ¥¹…Ñ•!½±•Ì ‘…Ñ„°¡½±•%¹‘¥•Ì°½ÕÑ•É9½‘”°‘¥´€¤ì((%½¹ÍÐÅÕ•Õ”€ômtì(%±•Ð¤°±•¸°ÍÑ…ÉÐ°•¹°±¥ÍÐì((%™½È€ ¤€ô€À°±•¸€ô¡½±•%¹‘¥•Ì¹±•¹Ñ ì¤€ð±•¸ì¤€¬¬€¤ì(($%ÍÑ…ÉÐ€ô¡½±•%¹‘¥•Íl¤t€¨‘¥´ì($%•¹€ô¤€ð±•¸€´€Ä€ü¡½±•%¹‘¥•Íl¤€¬€Ät€¨‘¥´€è‘…Ñ„¹±•¹Ñ ì($%±¥ÍÐ€ô±¥¹­•‘1¥ÍÐ ‘…Ñ„°ÍÑ…ÉÐ°•¹°‘¥´°™…±Í”€¤ì($%¥˜€ ±¥ÍÐ€ôôô±¥ÍÐ¹¹•áÐ€¤±¥ÍÐ¹ÍÑ•¥¹•È€ôÑÉÕ”ì($%ÅÕ•Õ”¹ÁÕÍ  •Ñ1•™Ñµ½ÍÐ ±¥ÍÐ€¤€¤ì((%ô((%ÅÕ•Õ”¹Í½ÉÐ ½µÁ…É•`€¤ì(($¼¼ÁÉ½•ÍÌ¡½±•Ì™É½´±•™ÐÑ¼É¥¡Ð(%™½È€ ¤€ô€Àì¤€ðÅÕ•Õ”¹±•¹Ñ ì¤€¬¬€¤ì(($%½ÕÑ•É9½‘”€ô•±¥µ¥¹…Ñ•!½±” ÅÕ•Õ•l¤t°½ÕÑ•É9½‘”€¤ì((%ô((%É•ÑÕÉ¸½ÕÑ•É9½‘”ì()ô()™Õ¹Ñ¥½¸½µÁ…É•` „°ˆ€¤ì((%É•ÑÕÉ¸„¹à€´ˆ¹àì()ô((¼¼™¥¹„‰É¥‘”‰•ÑÝ••¸Ù•ÉÑ¥•ÌÑ¡…Ð½¹¹•ÑÌ¡½±”Ý¥Ñ …¸½ÕÑ•ÈÉ¥¹œ…¹±¥¹¬¥Ð)™Õ¹Ñ¥½¸•±¥µ¥¹…Ñ•!½±” ¡½±”°½ÕÑ•É9½‘”€¤ì((%½¹ÍÐ‰É¥‘”€ô™¥¹‘!½±•	É¥‘” ¡½±”°½ÕÑ•É9½‘”€¤ì(%¥˜€ €„‰É¥‘”€¤ì(($%É•ÑÕÉ¸½ÕÑ•É9½‘”ì((%ô((%½¹ÍÐ‰É¥‘•I•Ù•ÉÍ”€ôÍÁ±¥ÑA½±å½¸ ‰É¥‘”°¡½±”€¤ì(($¼¼™¥±Ñ•È½±±¥¹•…ÈÁ½¥¹ÑÌ…É½Õ¹Ñ¡”ÕÑÌ(%™¥±Ñ•ÉA½¥¹ÑÌ ‰É¥‘•I•Ù•ÉÍ”°‰É¥‘•I•Ù•ÉÍ”¹¹•áÐ€¤ì(%É•ÑÕÉ¸™¥±Ñ•ÉA½¥¹ÑÌ ‰É¥‘”°‰É¥‘”¹¹•áÐ€¤ì()ô((¼¼…Ù¥‰•É±äÌ…±½É¥Ñ¡´™½È™¥¹‘¥¹œ„‰É¥‘”‰•ÑÝ••¸¡½±”…¹½ÕÑ•ÈÁ½±å½¸)™Õ¹Ñ¥½¸™¥¹‘!½±•	É¥‘” ¡½±”°½ÕÑ•É9½‘”€¤ì((%±•ÐÀ€ô½ÕÑ•É9½‘”°($%Åà€ô€´%¹™¥¹¥Ñä°($%´ì((%½¹ÍÐ¡à€ô¡½±”¹à°¡ä€ô¡½±”¹äì(($¼¼™¥¹„Í•µ•¹Ð¥¹Ñ•ÉÍ•Ñ•‰ä„É…ä™É½´Ñ¡”¡½±”Ì±•™Ñµ½ÍÐÁ½¥¹ÐÑ¼Ñ¡”±•™Ðì($¼¼Í•µ•¹ÐÌ•¹‘Á½¥¹ÐÝ¥Ñ ±•ÍÍ•ÈàÝ¥±°‰”Á½Ñ•¹Ñ¥…°½¹¹•Ñ¥½¸Á½¥¹Ð(%‘¼ì(($%¥˜€ ¡ä€ðôÀ¹ä€˜˜¡ä€øôÀ¹¹•áÐ¹ä€˜˜À¹¹•áÐ¹ä€„ôôÀ¹ä€¤ì(($$%½¹ÍÐà€ôÀ¹à€¬€ ¡ä€´À¹ä€¤€¨€ À¹¹•áÐ¹à€´À¹à€¤€¼€ À¹¹•áÐ¹ä€´À¹ä€¤ì($$%¥˜€ à€ðô¡à€˜˜à€øÅà€¤ì(($$$%Åà€ôàì($$$%´€ôÀ¹à€ðÀ¹¹•áÐ¹à€üÀ€èÀ¹¹•áÐì($$$%¥˜€ à€ôôô¡à€¤É•ÑÕÉ¸´ì€¼¼¡½±”Ñ½Õ¡•Ì½ÕÑ•ÈÍ•µ•¹ÐìÁ¥¬±•™Ñµ½ÍÐ•¹‘Á½¥¹Ð(($$%ô(($%ô(($%À€ôÀ¹¹•áÐì((%ôÝ¡¥±”€ À€„ôô½ÕÑ•É9½‘”€¤ì((%¥˜€ €„´€¤É•ÑÕÉ¸¹Õ±°ì(($¼¼±½½¬™½ÈÁ½¥¹ÑÌ¥¹Í¥‘”Ñ¡”ÑÉ¥…¹±”½˜¡½±”Á½¥¹Ð°Í•µ•¹Ð¥¹Ñ•ÉÍ•Ñ¥½¸…¹•¹‘Á½¥¹Ðì($¼¼¥˜Ñ¡•É”…É”¹¼Á½¥¹ÑÌ™½Õ¹°Ý”¡…Ù”„Ù…±¥½¹¹•Ñ¥½¸ì($¼¼½Ñ¡•ÉÝ¥Í”¡½½Í”Ñ¡”Á½¥¹Ð½˜Ñ¡”µ¥¹¥µÕ´…¹±”Ý¥Ñ Ñ¡”É…ä…Ì½¹¹•Ñ¥½¸Á½¥¹Ð((%½¹ÍÐÍÑ½À€ô´°($%µà€ô´¹à°($%µä€ô´¹äì(%±•ÐÑ…¹5¥¸€ô%¹™¥¹¥Ñä°Ñ…¸ì((%À€ô´ì((%‘¼ì(($%¥˜€ ¡à€øôÀ¹à€˜˜À¹à€øôµà€˜˜¡à€„ôôÀ¹à€˜˜($$$%Á½¥¹Ñ%¹QÉ¥…¹±” ¡ä€ðµä€ü¡à€èÅà°¡ä°µà°µä°¡ä€ðµä€üÅà€è¡à°¡ä°À¹à°À¹ä€¤€¤ì(($$%Ñ…¸€ô5…Ñ ¹…‰Ì ¡ä€´À¹ä€¤€¼€ ¡à€´À¹à€¤ì€¼¼Ñ…¹•¹Ñ¥…°(($$%¥˜€ ±½…±±å%¹Í¥‘” À°¡½±”€¤€˜˜€ Ñ…¸€ðÑ…¹5¥¸ñð€ Ñ…¸€ôôôÑ…¹5¥¸€˜˜€ À¹à€ø´¹àñð€ À¹à€ôôô´¹à€˜˜Í•Ñ½É½¹Ñ…¥¹ÍM•Ñ½È ´°À€¤€¤€¤€¤€¤€¤ì(($$$%´€ôÀì($$$%Ñ…¹5¥¸€ôÑ…¸ì(($$%ô(($%ô(($%À€ôÀ¹¹•áÐì((%ôÝ¡¥±”€ À€„ôôÍÑ½À€¤ì((%É•ÑÕÉ¸´ì()ô((¼¼Ý¡•Ñ¡•ÈÍ•Ñ½È¥¸Ù•ÉÑ•à´½¹Ñ…¥¹ÌÍ•Ñ½È¥¸Ù•ÉÑ•àÀ¥¸Ñ¡”Í…µ”½½É‘¥¹…Ñ•Ì)™Õ¹Ñ¥½¸Í•Ñ½É½¹Ñ…¥¹ÍM•Ñ½È ´°À€¤ì((%É•ÑÕÉ¸…É•„ ´¹ÁÉ•Ø°´°À¹ÁÉ•Ø€¤€ð€À€˜˜…É•„ À¹¹•áÐ°´°´¹¹•áÐ€¤€ð€Àì()ô((¼¼¥¹Ñ•É±¥¹¬Á½±å½¸¹½‘•Ì¥¸èµ½É‘•È)™Õ¹Ñ¥½¸¥¹‘•áÕÉÙ” ÍÑ…ÉÐ°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì((%±•ÐÀ€ôÍÑ…ÉÐì(%‘¼ì(($%¥˜€ À¹è€ôôô€À€¤À¹è€ôé=É‘•È À¹à°À¹ä°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì($%À¹ÁÉ•Ùh€ôÀ¹ÁÉ•Øì($%À¹¹•áÑh€ôÀ¹¹•áÐì($%À€ôÀ¹¹•áÐì((%ôÝ¡¥±”€ À€„ôôÍÑ…ÉÐ€¤ì((%À¹ÁÉ•Ùh¹¹•áÑh€ô¹Õ±°ì(%À¹ÁÉ•Ùh€ô¹Õ±°ì((%Í½ÉÑ1¥¹­• À€¤ì()ô((¼¼M¥µ½¸Q…Ñ¡…´Ì±¥¹­•±¥ÍÐµ•É”Í½ÉÐ…±½É¥Ñ¡´(¼¼¡ÑÑÀè¼½ÝÝÜ¹¡¥…É¬¹É••¹•¹¹½Éœ¹Õ¬½ùÍÑ…Ñ¡…´½…±½É¥Ñ¡µÌ½±¥ÍÑÍ½ÉÐ¹¡Ñµ°)™Õ¹Ñ¥½¸Í½ÉÑ1¥¹­• ±¥ÍÐ€¤ì((%±•Ð¤°À°Ä°”°Ñ…¥°°¹Õµ5•É•Ì°ÁM¥é”°ÅM¥é”°($%¥¹M¥é”€ô€Äì((%‘¼ì(($%À€ô±¥ÍÐì($%±¥ÍÐ€ô¹Õ±°ì($%Ñ…¥°€ô¹Õ±°ì($%¹Õµ5•É•Ì€ô€Àì(($%Ý¡¥±”€ À€¤ì(($$%¹Õµ5•É•Ì€¬¬ì($$%Ä€ôÀì($$%ÁM¥é”€ô€Àì($$%™½È€ ¤€ô€Àì¤€ð¥¹M¥é”ì¤€¬¬€¤ì(($$$%ÁM¥é”€¬¬ì($$$%Ä€ôÄ¹¹•áÑhì($$$%¥˜€ €„Ä€¤‰É•…¬ì(($$%ô(($$%ÅM¥é”€ô¥¹M¥é”ì(($$%Ý¡¥±”€ ÁM¥é”€ø€Àñð€ ÅM¥é”€ø€À€˜˜Ä€¤€¤ì(($$$%¥˜€ ÁM¥é”€„ôô€À€˜˜€ ÅM¥é”€ôôô€Àñð€„ÄñðÀ¹è€ðôÄ¹è€¤€¤ì(($$$$%”€ôÀì($$$$%À€ôÀ¹¹•áÑhì($$$$%ÁM¥é”€´´ì(($$$%ô•±Í”ì(($$$$%”€ôÄì($$$$%Ä€ôÄ¹¹•áÑhì($$$$%ÅM¥é”€´´ì(($$$%ô(($$$%¥˜€ Ñ…¥°€¤Ñ…¥°¹¹•áÑh€ô”ì($$$%•±Í”±¥ÍÐ€ô”ì(($$$%”¹ÁÉ•Ùh€ôÑ…¥°ì($$$%Ñ…¥°€ô”ì(($$%ô(($$%À€ôÄì(($%ô(($%Ñ…¥°¹¹•áÑh€ô¹Õ±°ì($%¥¹M¥é”€¨ô€Èì((%ôÝ¡¥±”€ ¹Õµ5•É•Ì€ø€Ä€¤ì((%É•ÑÕÉ¸±¥ÍÐì()ô((¼¼èµ½É‘•È½˜„Á½¥¹Ð¥Ù•¸½½É‘Ì…¹¥¹Ù•ÉÍ”½˜Ñ¡”±½¹•ÈÍ¥‘”½˜‘…Ñ„‰‰½à)™Õ¹Ñ¥½¸é=É‘•È à°ä°µ¥¹`°µ¥¹d°¥¹ÙM¥é”€¤ì(($¼¼½½É‘Ì…É”ÑÉ…¹Í™½Éµ•¥¹Ñ¼¹½¸µ¹•…Ñ¥Ù”€ÄÔµ‰¥Ð¥¹Ñ••ÈÉ…¹”(%à€ô€ à€´µ¥¹`€¤€¨¥¹ÙM¥é”ð€Àì(%ä€ô€ ä€´µ¥¹d€¤€¨¥¹ÙM¥é”ð€Àì((%à€ô€ àð€ à€ðð€à€¤€¤€˜€ÁàÀÁÀÁì(%à€ô€ àð€ à€ðð€Ð€¤€¤€˜€ÁàÁÁÁÁì(%à€ô€ àð€ à€ðð€È€¤€¤€˜€ÁàÌÌÌÌÌÌÌÌì(%à€ô€ àð€ à€ðð€Ä€¤€¤€˜€ÁàÔÔÔÔÔÔÔÔì((%ä€ô€ äð€ ä€ðð€à€¤€¤€˜€ÁàÀÁÀÁì(%ä€ô€ äð€ ä€ðð€Ð€¤€¤€˜€ÁàÁÁÁÁì(%ä€ô€ äð€ ä€ðð€È€¤€¤€˜€ÁàÌÌÌÌÌÌÌÌì(%ä€ô€ äð€ ä€ðð€Ä€¤€¤€˜€ÁàÔÔÔÔÔÔÔÔì((%É•ÑÕÉ¸àð€ ä€ðð€Ä€¤ì()ô((¼¼™¥¹Ñ¡”±•™Ñµ½ÍÐ¹½‘”½˜„Á½±å½¸É¥¹œ)™Õ¹Ñ¥½¸•Ñ1•™Ñµ½ÍÐ ÍÑ…ÉÐ€¤ì((%±•ÐÀ€ôÍÑ…ÉÐ°($%±•™Ñµ½ÍÐ€ôÍÑ…ÉÐì(%‘¼ì(($%¥˜€ À¹à€ð±•™Ñµ½ÍÐ¹àñð€ À¹à€ôôô±•™Ñµ½ÍÐ¹à€˜˜À¹ä€ð±•™Ñµ½ÍÐ¹ä€¤€¤±•™Ñµ½ÍÐ€ôÀì($%À€ôÀ¹¹•áÐì((%ôÝ¡¥±”€ À€„ôôÍÑ…ÉÐ€¤ì((%É•ÑÕÉ¸±•™Ñµ½ÍÐì()ô((¼¼¡•¬¥˜„Á½¥¹Ð±¥•ÌÝ¥Ñ¡¥¸„½¹Ù•àÑÉ¥…¹±”)™Õ¹Ñ¥½¸Á½¥¹Ñ%¹QÉ¥…¹±” …à°…ä°‰à°‰ä°à°ä°Áà°Áä€¤ì((%É•ÑÕÉ¸€ à€´Áà€¤€¨€ …ä€´Áä€¤€øô€ …à€´Áà€¤€¨€ ä€´Áä€¤€˜˜(€€€€€€€€€€€ …à€´Áà€¤€¨€ ‰ä€´Áä€¤€øô€ ‰à€´Áà€¤€¨€ …ä€´Áä€¤€˜˜(€€€€€€€€€€€ ‰à€´Áà€¤€¨€ ä€´Áä€¤€øô€ à€´Áà€¤€¨€ ‰ä€´Áä€¤ì()ô((¼¼¡•¬¥˜„‘¥…½¹…°‰•ÑÝ••¸ÑÝ¼Á½±å½¸¹½‘•Ì¥ÌÙ…±¥€¡±¥•Ì¥¸Á½±å½¸¥¹Ñ•É¥½È¤)™Õ¹Ñ¥½¸¥ÍY…±¥‘¥…½¹…° „°ˆ€¤ì((%É•ÑÕÉ¸„¹¹•áÐ¹¤€„ôôˆ¹¤€˜˜„¹ÁÉ•Ø¹¤€„ôôˆ¹¤€˜˜€„¥¹Ñ•ÉÍ•ÑÍA½±å½¸ „°ˆ€¤€˜˜€¼¼‘½¹•ÌÐ¥¹Ñ•ÉÍ•Ð½Ñ¡•È•‘•Ì(€€€€€€€€€€€ ±½…±±å%¹Í¥‘” „°ˆ€¤€˜˜±½…±±å%¹Í¥‘” ˆ°„€¤€˜˜µ¥‘‘±•%¹Í¥‘” „°ˆ€¤€˜˜€¼¼±½…±±äÙ¥Í¥‰±”(€€€€€€€€€€€€ …É•„ „¹ÁÉ•Ø°„°ˆ¹ÁÉ•Ø€¤ñð…É•„ „°ˆ¹ÁÉ•Ø°ˆ€¤€¤ñð€¼¼‘½•Ì¹½ÐÉ•…Ñ”½ÁÁ½Í¥Ñ”µ™…¥¹œÍ•Ñ½ÉÌ(€€€€€€€€€€€•ÅÕ…±Ì „°ˆ€¤€˜˜…É•„ „¹ÁÉ•Ø°„°„¹¹•áÐ€¤€ø€À€˜˜…É•„ ˆ¹ÁÉ•Ø°ˆ°ˆ¹¹•áÐ€¤€ø€À€¤ì€¼¼ÍÁ•¥…°é•É¼µ±•¹Ñ …Í”()ô((¼¼Í¥¹•…É•„½˜„ÑÉ¥…¹±”)™Õ¹Ñ¥½¸…É•„ À°Ä°È€¤ì((%É•ÑÕÉ¸€ Ä¹ä€´À¹ä€¤€¨€ È¹à€´Ä¹à€¤€´€ Ä¹à€´À¹à€¤€¨€ È¹ä€´Ä¹ä€¤ì()ô((¼¼¡•¬¥˜ÑÝ¼Á½¥¹ÑÌ…É”•ÅÕ…°)™Õ¹Ñ¥½¸•ÅÕ…±Ì ÀÄ°ÀÈ€¤ì((%É•ÑÕÉ¸ÀÄ¹à€ôôôÀÈ¹à€˜˜ÀÄ¹ä€ôôôÀÈ¹äì()ô((¼¼¡•¬¥˜ÑÝ¼Í•µ•¹ÑÌ¥¹Ñ•ÉÍ•Ð)™Õ¹Ñ¥½¸¥¹Ñ•ÉÍ•ÑÌ ÀÄ°ÄÄ°ÀÈ°ÄÈ€¤ì((%½¹ÍÐ¼Ä€ôÍ¥¸ …É•„ ÀÄ°ÄÄ°ÀÈ€¤€¤ì(%½¹ÍÐ¼È€ôÍ¥¸ …É•„ ÀÄ°ÄÄ°ÄÈ€¤€¤ì(%½¹ÍÐ¼Ì€ôÍ¥¸ …É•„ ÀÈ°ÄÈ°ÀÄ€¤€¤ì(%½¹ÍÐ¼Ð€ôÍ¥¸ …É•„ ÀÈ°ÄÈ°ÄÄ€¤€¤ì((%¥˜€ ¼Ä€„ôô¼È€˜˜¼Ì€„ôô¼Ð€¤É•ÑÕÉ¸ÑÉÕ”ì€¼¼•¹•É…°…Í”((%¥˜€ ¼Ä€ôôô€À€˜˜½¹M•µ•¹Ð ÀÄ°ÀÈ°ÄÄ€¤€¤É•ÑÕÉ¸ÑÉÕ”ì€¼¼ÀÄ°ÄÄ…¹ÀÈ…É”½±±¥¹•…È…¹ÀÈ±¥•Ì½¸ÀÅÄÄ(%¥˜€ ¼È€ôôô€À€˜˜½¹M•µ•¹Ð ÀÄ°ÄÈ°ÄÄ€¤€¤É•ÑÕÉ¸ÑÉÕ”ì€¼¼ÀÄ°ÄÄ…¹ÄÈ…É”½±±¥¹•…È…¹ÄÈ±¥•Ì½¸ÀÅÄÄ(%¥˜€ ¼Ì€ôôô€À€˜˜½¹M•µ•¹Ð ÀÈ°ÀÄ°ÄÈ€¤€¤É•ÑÕÉ¸ÑÉÕ”ì€¼¼ÀÈ°ÄÈ…¹ÀÄ…É”½±±¥¹•…È…¹ÀÄ±¥•Ì½¸ÀÉÄÈ(%¥˜€ ¼Ð€ôôô€À€˜˜½¹M•µ•¹Ð ÀÈ°ÄÄ°ÄÈ€¤€¤É•ÑÕÉ¸ÑÉÕ”ì€¼¼ÀÈ°ÄÈ…¹ÄÄ…É”½±±¥¹•…È…¹ÄÄ±¥•Ì½¸ÀÉÄÈ((%É•ÑÕÉ¸™…±Í”ì()ô((¼¼™½È½±±¥¹•…ÈÁ½¥¹ÑÌÀ°Ä°È°¡•¬¥˜Á½¥¹ÐÄ±¥•Ì½¸Í•µ•¹ÐÁÈ)™Õ¹Ñ¥½¸½¹M•µ•¹Ð À°Ä°È€¤ì((%É•ÑÕÉ¸Ä¹à€ðô5…Ñ ¹µ…à À¹à°È¹à€¤€˜˜Ä¹à€øô5…Ñ ¹µ¥¸ À¹à°È¹à€¤€˜˜Ä¹ä€ðô5…Ñ ¹µ…à À¹ä°È¹ä€¤€˜˜Ä¹ä€øô5…Ñ ¹µ¥¸ À¹ä°È¹ä€¤ì()ô()™Õ¹Ñ¥½¸Í¥¸ ¹Õ´€¤ì((%É•ÑÕÉ¸¹Õ´€ø€À€ü€Ä€è¹Õ´€ð€À€ü€´€Ä€è€Àì()ô((¼¼¡•¬¥˜„Á½±å½¸‘¥…½¹…°¥¹Ñ•ÉÍ•ÑÌ…¹äÁ½±å½¸Í•µ•¹ÑÌ)™Õ¹Ñ¥½¸¥¹Ñ•ÉÍ•ÑÍA½±å½¸ „°ˆ€¤ì((%±•ÐÀ€ô„ì(%‘¼ì(($%¥˜€ À¹¤€„ôô„¹¤€˜˜À¹¹•áÐ¹¤€„ôô„¹¤€˜˜À¹¤€„ôôˆ¹¤€˜˜À¹¹•áÐ¹¤€„ôôˆ¹¤€˜˜($$%¥¹Ñ•ÉÍ•ÑÌ À°À¹¹•áÐ°„°ˆ€¤€¤É•ÑÕÉ¸ÑÉÕ”ì($%À€ôÀ¹¹•áÐì((%ôÝ¡¥±”€ À€„ôô„€¤ì((%É•ÑÕÉ¸™…±Í”ì()ô((¼¼¡•¬¥˜„Á½±å½¸‘¥…½¹…°¥Ì±½…±±ä¥¹Í¥‘”Ñ¡”Á½±å½¸)™Õ¹Ñ¥½¸±½…±±å%¹Í¥‘” „°ˆ€¤ì((%É•ÑÕÉ¸…É•„ „¹ÁÉ•Ø°„°„¹¹•áÐ€¤€ð€À€ü($%…É•„ „°ˆ°„¹¹•áÐ€¤€øô€À€˜˜…É•„ „°„¹ÁÉ•Ø°ˆ€¤€øô€À€è($%…É•„ „°ˆ°„¹ÁÉ•Ø€¤€ð€Àñð…É•„ „°„¹¹•áÐ°ˆ€¤€ð€Àì()ô((¼¼¡•¬¥˜Ñ¡”µ¥‘‘±”Á½¥¹Ð½˜„Á½±å½¸‘¥…½¹…°¥Ì¥¹Í¥‘”Ñ¡”Á½±å½¸)™Õ¹Ñ¥½¸µ¥‘‘±•%¹Í¥‘” „°ˆ€¤ì((%±•ÐÀ€ô„°($%¥¹Í¥‘”€ô™…±Í”ì(%½¹ÍÐÁà€ô€ „¹à€¬ˆ¹à€¤€¼€È°($%Áä€ô€ „¹ä€¬ˆ¹ä€¤€¼€Èì(%‘¼ì(($%¥˜€ € € À¹ä€øÁä€¤€„ôô€ À¹¹•áÐ¹ä€øÁä€¤€¤€˜˜À¹¹•áÐ¹ä€„ôôÀ¹ä€˜˜($$$ Áà€ð€ À¹¹•áÐ¹à€´À¹à€¤€¨€ Áä€´À¹ä€¤€¼€ À¹¹•áÐ¹ä€´À¹ä€¤€¬À¹à€¤€¤($$%¥¹Í¥‘”€ô€„¥¹Í¥‘”ì($%À€ôÀ¹¹•áÐì((%ôÝ¡¥±”€ À€„ôô„€¤ì((%É•ÑÕÉ¸¥¹Í¥‘”ì()ô((¼¼±¥¹¬ÑÝ¼Á½±å½¸Ù•ÉÑ¥•ÌÝ¥Ñ „‰É¥‘”ì¥˜Ñ¡”Ù•ÉÑ¥•Ì‰•±½¹œÑ¼Ñ¡”Í…µ”É¥¹œ°¥ÐÍÁ±¥ÑÌÁ½±å½¸¥¹Ñ¼ÑÝ¼ì(¼¼¥˜½¹”‰•±½¹ÌÑ¼Ñ¡”½ÕÑ•ÈÉ¥¹œ…¹…¹½Ñ¡•ÈÑ¼„¡½±”°¥Ðµ•É•Ì¥Ð¥¹Ñ¼„Í¥¹±”É¥¹œ)™Õ¹Ñ¥½¸ÍÁ±¥ÑA½±å½¸ „°ˆ€¤ì((%½¹ÍÐ„È€ô¹•Ü9½‘” „¹¤°„¹à°„¹ä€¤°($%ˆÈ€ô¹•Ü9½‘” ˆ¹¤°ˆ¹à°ˆ¹ä€¤°($%…¸€ô„¹¹•áÐ°($%‰À€ôˆ¹ÁÉ•Øì((%„¹¹•áÐ€ôˆì(%ˆ¹ÁÉ•Ø€ô„ì((%„È¹¹•áÐ€ô…¸ì(%…¸¹ÁÉ•Ø€ô„Èì((%ˆÈ¹¹•áÐ€ô„Èì(%„È¹ÁÉ•Ø€ôˆÈì((%‰À¹¹•áÐ€ôˆÈì(%ˆÈ¹ÁÉ•Ø€ô‰Àì((%É•ÑÕÉ¸ˆÈì()ô((¼¼É•…Ñ”„¹½‘”…¹½ÁÑ¥½¹…±±ä±¥¹¬¥ÐÝ¥Ñ ÁÉ•Ù¥½ÕÌ½¹”€¡¥¸„¥ÉÕ±…È‘½Õ‰±ä±¥¹­•±¥ÍÐ¤)™Õ¹Ñ¥½¸¥¹Í•ÉÑ9½‘” ¤°à°ä°±…ÍÐ€¤ì((%½¹ÍÐÀ€ô¹•Ü9½‘” ¤°à°ä€¤ì((%¥˜€ €„±…ÍÐ€¤ì(($%À¹ÁÉ•Ø€ôÀì($%À¹¹•áÐ€ôÀì((%ô•±Í”ì(($%À¹¹•áÐ€ô±…ÍÐ¹¹•áÐì($%À¹ÁÉ•Ø€ô±…ÍÐì($%±…ÍÐ¹¹•áÐ¹ÁÉ•Ø€ôÀì($%±…ÍÐ¹¹•áÐ€ôÀì((%ô((%É•ÑÕÉ¸Àì()ô()™Õ¹Ñ¥½¸É•µ½Ù•9½‘” À€¤ì((%À¹¹•áÐ¹ÁÉ•Ø€ôÀ¹ÁÉ•Øì(%À¹ÁÉ•Ø¹¹•áÐ€ôÀ¹¹•áÐì((%¥˜€ À¹ÁÉ•Ùh€¤À¹ÁÉ•Ùh¹¹•áÑh€ôÀ¹¹•áÑhì(%¥˜€ À¹¹•áÑh€¤À¹¹•áÑh¹ÁÉ•Ùh€ôÀ¹ÁÉ•Ùhì()ô()™Õ¹Ñ¥½¸9½‘” ¤°à°ä€¤ì(($¼¼Ù•ÉÑ•à¥¹‘•à¥¸½½É‘¥¹…Ñ•Ì…ÉÉ…ä(%Ñ¡¥Ì¹¤€ô¤ì(($¼¼Ù•ÉÑ•à½½É‘¥¹…Ñ•Ì(%Ñ¡¥Ì¹à€ôàì(%Ñ¡¥Ì¹ä€ôäì(($¼¼ÁÉ•Ù¥½ÕÌ…¹¹•áÐÙ•ÉÑ•à¹½‘•Ì¥¸„Á½±å½¸É¥¹œ(%Ñ¡¥Ì¹ÁÉ•Ø€ô¹Õ±°ì(%Ñ¡¥Ì¹¹•áÐ€ô¹Õ±°ì(($¼¼èµ½É‘•ÈÕÉÙ”Ù…±Õ”(%Ñ¡¥Ì¹è€ô€Àì(($¼¼ÁÉ•Ù¥½ÕÌ…¹¹•áÐ¹½‘•Ì¥¸èµ½É‘•È(%Ñ¡¥Ì¹ÁÉ•Ùh€ô¹Õ±°ì(%Ñ¡¥Ì¹¹•áÑh€ô¹Õ±°ì(($¼¼¥¹‘¥…Ñ•ÌÝ¡•Ñ¡•ÈÑ¡¥Ì¥Ì„ÍÑ•¥¹•ÈÁ½¥¹Ð(%Ñ¡¥Ì¹ÍÑ•¥¹•È€ô™…±Í”ì()ô()™Õ¹Ñ¥½¸Í¥¹•‘É•„ ‘…Ñ„°ÍÑ…ÉÐ°•¹°‘¥´€¤ì((%±•ÐÍÕ´€ô€Àì(%™½È€ ±•Ð¤€ôÍÑ…ÉÐ°¨€ô•¹€´‘¥´ì¤€ð•¹ì¤€¬ô‘¥´€¤ì(($%ÍÕ´€¬ô€ ‘…Ñ…l¨t€´‘…Ñ…l¤t€¤€¨€ ‘…Ñ…l¤€¬€Ät€¬‘…Ñ…l¨€¬€Ät€¤ì($%¨€ô¤ì((%ô((%É•ÑÕÉ¸ÍÕ´ì()ô()±…ÍÌM¡…Á•UÑ¥±Ìì(($¼¼…±Õ±…Ñ”…É•„½˜Ñ¡”½¹Ñ½ÕÈÁ½±å½¸((%ÍÑ…Ñ¥Œ…É•„ ½¹Ñ½ÕÈ€¤ì(($%½¹ÍÐ¸€ô½¹Ñ½ÕÈ¹±•¹Ñ ì($%±•Ð„€ô€À¸Àì(($%™½È€ ±•ÐÀ€ô¸€´€Ä°Ä€ô€ÀìÄ€ð¸ìÀ€ôÄ€¬¬€¤ì(($$%„€¬ô½¹Ñ½ÕÉlÀt¹à€¨½¹Ñ½ÕÉlÄt¹ä€´½¹Ñ½ÕÉlÄt¹à€¨½¹Ñ½ÕÉlÀt¹äì(($%ô(($%É•ÑÕÉ¸„€¨€À¸Ôì((%ô((%ÍÑ…Ñ¥Œ¥Í±½­]¥Í” ÁÑÌ€¤ì(($%É•ÑÕÉ¸M¡…Á•UÑ¥±Ì¹…É•„ ÁÑÌ€¤€ð€Àì((%ô((%ÍÑ…Ñ¥ŒÑÉ¥…¹Õ±…Ñ•M¡…Á” ½¹Ñ½ÕÈ°¡½±•Ì€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì€¼¼™±…Ð…ÉÉ…ä½˜Ù•ÉÑ¥•Ì±¥­”làÀ±äÀ°àÄ±äÄ°àÈ±äÈ°€¸¸¸t($%½¹ÍÐ¡½±•%¹‘¥•Ì€ômtì€¼¼…ÉÉ…ä½˜¡½±”¥¹‘¥•Ì($%½¹ÍÐ™…•Ì€ômtì€¼¼™¥¹…°…ÉÉ…ä½˜Ù•ÉÑ•à¥¹‘¥•Ì±¥­”ll„±ˆ±t°lˆ±Œ±tt(($%É•µ½Ù•ÕÁ¹‘AÑÌ ½¹Ñ½ÕÈ€¤ì($%…‘‘½¹Ñ½ÕÈ Ù•ÉÑ¥•Ì°½¹Ñ½ÕÈ€¤ì(($$¼¼(($%±•Ð¡½±•%¹‘•à€ô½¹Ñ½ÕÈ¹±•¹Ñ ì(($%¡½±•Ì¹™½É…  É•µ½Ù•ÕÁ¹‘AÑÌ€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð¡½±•Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%¡½±•%¹‘¥•Ì¹ÁÕÍ  ¡½±•%¹‘•à€¤ì($$%¡½±•%¹‘•à€¬ô¡½±•Íl¤t¹±•¹Ñ ì($$%…‘‘½¹Ñ½ÕÈ Ù•ÉÑ¥•Ì°¡½±•Íl¤t€¤ì(($%ô(($$¼¼(($%½¹ÍÐÑÉ¥…¹±•Ì€ô…ÉÕÐ¹ÑÉ¥…¹Õ±…Ñ” Ù•ÉÑ¥•Ì°¡½±•%¹‘¥•Ì€¤ì(($$¼¼(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑÉ¥…¹±•Ì¹±•¹Ñ ì¤€¬ô€Ì€¤ì(($$%™…•Ì¹ÁÕÍ  ÑÉ¥…¹±•Ì¹Í±¥” ¤°¤€¬€Ì€¤€¤ì(($%ô(($%É•ÑÕÉ¸™…•Ìì((%ô()ô()™Õ¹Ñ¥½¸É•µ½Ù•ÕÁ¹‘AÑÌ Á½¥¹ÑÌ€¤ì((%½¹ÍÐ°€ôÁ½¥¹ÑÌ¹±•¹Ñ ì((%¥˜€ °€ø€È€˜˜Á½¥¹ÑÍl°€´€Ät¹•ÅÕ…±Ì Á½¥¹ÑÍl€Àt€¤€¤ì(($%Á½¥¹ÑÌ¹Á½À ¤ì((%ô()ô()™Õ¹Ñ¥½¸…‘‘½¹Ñ½ÕÈ Ù•ÉÑ¥•Ì°½¹Ñ½ÕÈ€¤ì((%™½È€ ±•Ð¤€ô€Àì¤€ð½¹Ñ½ÕÈ¹±•¹Ñ ì¤€¬¬€¤ì(($%Ù•ÉÑ¥•Ì¹ÁÕÍ  ½¹Ñ½ÕÉl¤t¹à€¤ì($%Ù•ÉÑ¥•Ì¹ÁÕÍ  ½¹Ñ½ÕÉl¤t¹ä€¤ì((%ô()ô((¼¨¨(€¨É•…Ñ•Ì•áÑÉÕ‘••½µ•ÑÉä™É½´„Á…Ñ Í¡…Á”¸(€¨(€¨Á…É…µ•Ñ•ÉÌ€ôì(€¨(€¨€ÕÉÙ•M•µ•¹ÑÌè€ñ¥¹Ðø°€¼¼¹Õµ‰•È½˜Á½¥¹ÑÌ½¸Ñ¡”ÕÉÙ•Ì(€¨€ÍÑ•ÁÌè€ñ¥¹Ðø°€¼¼¹Õµ‰•È½˜Á½¥¹ÑÌ™½ÈèµÍ¥‘”•áÑÉÕÍ¥½¹Ì€¼ÕÍ•™½ÈÍÕ‰‘¥Ù¥‘¥¹œÍ•µ•¹ÑÌ½˜•áÑÉÕ‘”ÍÁ±¥¹”Ñ½¼(€¨€‘•ÁÑ è€ñ™±½…Ðø°€¼¼•ÁÑ Ñ¼•áÑÉÕ‘”Ñ¡”Í¡…Á”(€¨(€¨€‰•Ù•±¹…‰±•è€ñ‰½½°ø°€¼¼ÑÕÉ¸½¸‰•Ù•°(€¨€‰•Ù•±Q¡¥­¹•ÍÌè€ñ™±½…Ðø°€¼¼¡½Ü‘••À¥¹Ñ¼Ñ¡”½É¥¥¹…°Í¡…Á”‰•Ù•°½•Ì(€¨€‰•Ù•±M¥é”è€ñ™±½…Ðø°€¼¼¡½Ü™…È™É½´Í¡…Á”½ÕÑ±¥¹”€¡¥¹±Õ‘¥¹œ‰•Ù•±=™™Í•Ð¤¥Ì‰•Ù•°(€¨€‰•Ù•±=™™Í•Ðè€ñ™±½…Ðø°€¼¼¡½Ü™…È™É½´Í¡…Á”½ÕÑ±¥¹”‘½•Ì‰•Ù•°ÍÑ…ÉÐ(€¨€‰•Ù•±M•µ•¹ÑÌè€ñ¥¹Ðø°€¼¼¹Õµ‰•È½˜‰•Ù•°±…å•ÉÌ(€¨(€¨€•áÑÉÕ‘•A…Ñ è€ñQ!I¹ÕÉÙ”ø€¼¼ÕÉÙ”Ñ¼•áÑÉÕ‘”Í¡…Á”…±½¹œ(€¨(€¨€UY•¹•É…Ñ½Èè€ñ=‰©•Ðø€¼¼½‰©•ÐÑ¡…ÐÁÉ½Ù¥‘•ÌUX•¹•É…Ñ½È™Õ¹Ñ¥½¹Ì(€¨(€¨ô(€¨¼(()±…ÍÌáÑÉÕ‘••½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È Í¡…Á•Ì€ô¹•ÜM¡…Á” l¹•ÜY•Ñ½ÈÈ €À¸Ô°€À¸Ô€¤°¹•ÜY•Ñ½ÈÈ €´€À¸Ô°€À¸Ô€¤°¹•ÜY•Ñ½ÈÈ €´€À¸Ô°€´€À¸Ô€¤°¹•ÜY•Ñ½ÈÈ €À¸Ô°€´€À¸Ô€¤t€¤°½ÁÑ¥½¹Ì€ôíô€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€áÑÉÕ‘••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%Í¡…Á•ÌèÍ¡…Á•Ì°($$%½ÁÑ¥½¹Ìè½ÁÑ¥½¹Ì($%ôì(($%Í¡…Á•Ì€ôÉÉ…ä¹¥ÍÉÉ…ä Í¡…Á•Ì€¤€üÍ¡…Á•Ì€èlÍ¡…Á•Ìtì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐÙ•ÉÑ¥•ÍÉÉ…ä€ômtì($%½¹ÍÐÕÙÉÉ…ä€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÍ¡…Á•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÍ¡…Á”€ôÍ¡…Á•Íl¤tì($$%…‘‘M¡…Á” Í¡…Á”€¤ì(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•ÍÉÉ…ä°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÉÉ…ä°€È€¤€¤ì(($%Ñ¡¥Ì¹½µÁÕÑ•Y•ÉÑ•á9½Éµ…±Ì ¤ì(($$¼¼™Õ¹Ñ¥½¹Ì(($%™Õ¹Ñ¥½¸…‘‘M¡…Á” Í¡…Á”€¤ì(($$%½¹ÍÐÁ±…•¡½±‘•È€ômtì(($$$¼¼½ÁÑ¥½¹Ì(($$%½¹ÍÐÕÉÙ•M•µ•¹ÑÌ€ô½ÁÑ¥½¹Ì¹ÕÉÙ•M•µ•¹ÑÌ€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹ÕÉÙ•M•µ•¹ÑÌ€è€ÄÈì($$%½¹ÍÐÍÑ•ÁÌ€ô½ÁÑ¥½¹Ì¹ÍÑ•ÁÌ€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹ÍÑ•ÁÌ€è€Äì($$%½¹ÍÐ‘•ÁÑ €ô½ÁÑ¥½¹Ì¹‘•ÁÑ €„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹‘•ÁÑ €è€Äì(($$%±•Ð‰•Ù•±¹…‰±•€ô½ÁÑ¥½¹Ì¹‰•Ù•±¹…‰±•€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹‰•Ù•±¹…‰±•€èÑÉÕ”ì($$%±•Ð‰•Ù•±Q¡¥­¹•ÍÌ€ô½ÁÑ¥½¹Ì¹‰•Ù•±Q¡¥­¹•ÍÌ€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹‰•Ù•±Q¡¥­¹•ÍÌ€è€À¸Èì($$%±•Ð‰•Ù•±M¥é”€ô½ÁÑ¥½¹Ì¹‰•Ù•±M¥é”€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹‰•Ù•±M¥é”€è‰•Ù•±Q¡¥­¹•ÍÌ€´€À¸Äì($$%±•Ð‰•Ù•±=™™Í•Ð€ô½ÁÑ¥½¹Ì¹‰•Ù•±=™™Í•Ð€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹‰•Ù•±=™™Í•Ð€è€Àì($$%±•Ð‰•Ù•±M•µ•¹ÑÌ€ô½ÁÑ¥½¹Ì¹‰•Ù•±M•µ•¹ÑÌ€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹‰•Ù•±M•µ•¹ÑÌ€è€Ìì(($$%½¹ÍÐ•áÑÉÕ‘•A…Ñ €ô½ÁÑ¥½¹Ì¹•áÑÉÕ‘•A…Ñ ì(($$%½¹ÍÐÕÙ•¸€ô½ÁÑ¥½¹Ì¹UY•¹•É…Ñ½È€„ôôÕ¹‘•™¥¹•€ü½ÁÑ¥½¹Ì¹UY•¹•É…Ñ½È€è]½É±‘UY•¹•É…Ñ½Èì(($$$¼¼(($$%±•Ð•áÑÉÕ‘•AÑÌ°•áÑÉÕ‘•	åA…Ñ €ô™…±Í”ì($$%±•ÐÍÁ±¥¹•QÕ‰”°‰¥¹½Éµ…°°¹½Éµ…°°Á½Í¥Ñ¥½¸Èì(($$%¥˜€ •áÑÉÕ‘•A…Ñ €¤ì(($$$%•áÑÉÕ‘•AÑÌ€ô•áÑÉÕ‘•A…Ñ ¹•ÑMÁ…•‘A½¥¹ÑÌ ÍÑ•ÁÌ€¤ì(($$$%•áÑÉÕ‘•	åA…Ñ €ôÑÉÕ”ì($$$%‰•Ù•±¹…‰±•€ô™…±Í”ì€¼¼‰•Ù•±Ì¹½ÐÍÕÁÁ½ÉÑ•™½ÈÁ…Ñ •áÑÉÕÍ¥½¸(($$$$¼¼MQU@Q9Ù…É¥…‰±•Ì(($$$$¼¼Q=<Ä€´¡…Ù”„€¹¥Í±½Í•¥¸ÍÁ±¥¹”ü(($$$%ÍÁ±¥¹•QÕ‰”€ô•áÑÉÕ‘•A…Ñ ¹½µÁÕÑ•É•¹•ÑÉ…µ•Ì ÍÑ•ÁÌ°™…±Í”€¤ì(($$$$¼¼½¹Í½±”¹±½œ¡ÍÁ±¥¹•QÕ‰”°€ÍÁ±¥¹•QÕ‰”œ°ÍÁ±¥¹•QÕ‰”¹¹½Éµ…±Ì¹±•¹Ñ °€ÍÑ•ÁÌœ°ÍÑ•ÁÌ°€•áÑÉÕ‘•AÑÌœ°•áÑÉÕ‘•AÑÌ¹±•¹Ñ ¤ì(($$$%‰¥¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì($$$%¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì($$$%Á½Í¥Ñ¥½¸È€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%ô(($$$¼¼M…™•Õ…É‘Ì¥˜‰•Ù•±Ì…É”¹½Ð•¹…‰±•(($$%¥˜€ €„‰•Ù•±¹…‰±•€¤ì(($$$%‰•Ù•±M•µ•¹ÑÌ€ô€Àì($$$%‰•Ù•±Q¡¥­¹•ÍÌ€ô€Àì($$$%‰•Ù•±M¥é”€ô€Àì($$$%‰•Ù•±=™™Í•Ð€ô€Àì(($$%ô(($$$¼¼Y…É¥…‰±•Ì¥¹¥Ñ¥…±¥é…Ñ¥½¸(($$%½¹ÍÐÍ¡…Á•A½¥¹ÑÌ€ôÍ¡…Á”¹•áÑÉ…ÑA½¥¹ÑÌ ÕÉÙ•M•µ•¹ÑÌ€¤ì(($$%±•ÐÙ•ÉÑ¥•Ì€ôÍ¡…Á•A½¥¹ÑÌ¹Í¡…Á”ì($$%½¹ÍÐ¡½±•Ì€ôÍ¡…Á•A½¥¹ÑÌ¹¡½±•Ìì(($$%½¹ÍÐÉ•Ù•ÉÍ”€ô€„M¡…Á•UÑ¥±Ì¹¥Í±½­]¥Í” Ù•ÉÑ¥•Ì€¤ì(($$%¥˜€ É•Ù•ÉÍ”€¤ì(($$$%Ù•ÉÑ¥•Ì€ôÙ•ÉÑ¥•Ì¹É•Ù•ÉÍ” ¤ì(($$$$¼¼5…å‰”Ý”Í¡½Õ±…±Í¼¡•¬¥˜¡½±•Ì…É”¥¸Ñ¡”½ÁÁ½Í¥Ñ”‘¥É•Ñ¥½¸°©ÕÍÐÑ¼‰”Í…™”€¸¸¸(($$$%™½È€ ±•Ð €ô€À°¡°€ô¡½±•Ì¹±•¹Ñ ì €ð¡°ì €¬¬€¤ì(($$$$%½¹ÍÐ…¡½±”€ô¡½±•Íl tì(($$$$%¥˜€ M¡…Á•UÑ¥±Ì¹¥Í±½­]¥Í” …¡½±”€¤€¤ì(($$$$$%¡½±•Íl t€ô…¡½±”¹É•Ù•ÉÍ” ¤ì(($$$$%ô(($$$%ô(($$%ô((($$%½¹ÍÐ™…•Ì€ôM¡…Á•UÑ¥±Ì¹ÑÉ¥…¹Õ±…Ñ•M¡…Á” Ù•ÉÑ¥•Ì°¡½±•Ì€¤ì(($$$¼¨Y•ÉÑ¥•Ì€¨¼(($$%½¹ÍÐ½¹Ñ½ÕÈ€ôÙ•ÉÑ¥•Ìì€¼¼Ù•ÉÑ¥•Ì¡…Ì…±°Á½¥¹ÑÌ‰ÕÐ½¹Ñ½ÕÈ¡…Ì½¹±äÁ½¥¹ÑÌ½˜¥ÉÕµ™•É•¹”(($$%™½È€ ±•Ð €ô€À°¡°€ô¡½±•Ì¹±•¹Ñ ì €ð¡°ì €¬¬€¤ì(($$$%½¹ÍÐ…¡½±”€ô¡½±•Íl tì(($$$%Ù•ÉÑ¥•Ì€ôÙ•ÉÑ¥•Ì¹½¹…Ð …¡½±”€¤ì(($$%ô((($$%™Õ¹Ñ¥½¸Í…±•AÐÈ ÁÐ°Ù•Œ°Í¥é”€¤ì(($$$%¥˜€ €„Ù•Œ€¤½¹Í½±”¹•ÉÉ½È €Q!I¹áÑÉÕ‘••½µ•ÑÉäèÙ•Œ‘½•Ì¹½Ð•á¥ÍÐœ€¤ì(($$$%É•ÑÕÉ¸ÁÐ¹±½¹” ¤¹…‘‘M…±•‘Y•Ñ½È Ù•Œ°Í¥é”€¤ì(($$%ô(($$%½¹ÍÐÙ±•¸€ôÙ•ÉÑ¥•Ì¹±•¹Ñ °™±•¸€ô™…•Ì¹±•¹Ñ ì((($$$¼¼¥¹‘¥É•Ñ¥½¹Ì™½ÈÁ½¥¹Ðµ½Ù•µ•¹Ð((($$%™Õ¹Ñ¥½¸•Ñ	•Ù•±Y•Œ ¥¹AÐ°¥¹AÉ•Ø°¥¹9•áÐ€¤ì(($$$$¼¼½µÁÕÑ•Ì™½È¥¹AÐÑ¡”½ÉÉ•ÍÁ½¹‘¥¹œÁ½¥¹Ð¥¹AÐœ½¸„¹•Ü½¹Ñ½ÕÈ($$$$¼¼€€Í¡¥™Ñ•‰ä€ÄÕ¹¥Ð€¡±•¹Ñ ½˜¹½Éµ…±¥é•Ù•Ñ½È¤Ñ¼Ñ¡”±•™Ð($$$$¼¼¥˜Ý”Ý…±¬…±½¹œ½¹Ñ½ÕÈ±½­Ý¥Í”°Ñ¡¥Ì¹•Ü½¹Ñ½ÕÈ¥Ì½ÕÑÍ¥‘”Ñ¡”½±½¹”($$$$¼¼($$$$¼¼¥¹AÐœ¥ÌÑ¡”¥¹Ñ•ÉÍ•Ñ¥½¸½˜Ñ¡”ÑÝ¼±¥¹•ÌÁ…É…±±•°Ñ¼Ñ¡”ÑÝ¼($$$$¼¼€…‘©…•¹Ð•‘•Ì½˜¥¹AÐ…Ð„‘¥ÍÑ…¹”½˜€ÄÕ¹¥Ð½¸Ñ¡”±•™ÐÍ¥‘”¸(($$$%±•ÐÙ}ÑÉ…¹Í}à°Ù}ÑÉ…¹Í}ä°Í¡É¥¹­}‰äì€¼¼É•ÍÕ±Ñ¥¹œÑÉ…¹Í±…Ñ¥½¸Ù•Ñ½È™½È¥¹AÐ(($$$$¼¼½½É•…‘¥¹œ™½È•½µ•ÑÉä…±½É¥Ñ¡µÌ€¡¡•É”è±¥¹”µ±¥¹”¥¹Ñ•ÉÍ•Ñ¥½¸¤($$$$¼¼¡ÑÑÀè¼½•½µ…±½É¥Ñ¡µÌ¹½´½„ÀÔµ}¥¹Ñ•ÉÍ•Ð´Ä¹¡Ñµ°(($$$%½¹ÍÐÙ}ÁÉ•Ù}à€ô¥¹AÐ¹à€´¥¹AÉ•Ø¹à°($$$$%Ù}ÁÉ•Ù}ä€ô¥¹AÐ¹ä€´¥¹AÉ•Ø¹äì($$$%½¹ÍÐÙ}¹•áÑ}à€ô¥¹9•áÐ¹à€´¥¹AÐ¹à°($$$$%Ù}¹•áÑ}ä€ô¥¹9•áÐ¹ä€´¥¹AÐ¹äì(($$$%½¹ÍÐÙ}ÁÉ•Ù}±•¹ÍÄ€ô€ Ù}ÁÉ•Ù}à€¨Ù}ÁÉ•Ù}à€¬Ù}ÁÉ•Ù}ä€¨Ù}ÁÉ•Ù}ä€¤ì(($$$$¼¼¡•¬™½È½±±¥¹•…È•‘•Ì($$$%½¹ÍÐ½±±¥¹•…ÈÀ€ô€ Ù}ÁÉ•Ù}à€¨Ù}¹•áÑ}ä€´Ù}ÁÉ•Ù}ä€¨Ù}¹•áÑ}à€¤ì(($$$%¥˜€ 5…Ñ ¹…‰Ì ½±±¥¹•…ÈÀ€¤€ø9Õµ‰•È¹AM%1=8€¤ì(($$$$$¼¼¹½Ð½±±¥¹•…È(($$$$$¼¼±•¹Ñ ½˜Ù•Ñ½ÉÌ™½È¹½Éµ…±¥é¥¹œ(($$$$%½¹ÍÐÙ}ÁÉ•Ù}±•¸€ô5…Ñ ¹ÍÅÉÐ Ù}ÁÉ•Ù}±•¹ÍÄ€¤ì($$$$%½¹ÍÐÙ}¹•áÑ}±•¸€ô5…Ñ ¹ÍÅÉÐ Ù}¹•áÑ}à€¨Ù}¹•áÑ}à€¬Ù}¹•áÑ}ä€¨Ù}¹•áÑ}ä€¤ì(($$$$$¼¼Í¡¥™Ð…‘©…•¹ÐÁ½¥¹ÑÌ‰äÕ¹¥ÐÙ•Ñ½ÉÌÑ¼Ñ¡”±•™Ð(($$$$%½¹ÍÐÁÑAÉ•ÙM¡¥™Ñ}à€ô€ ¥¹AÉ•Ø¹à€´Ù}ÁÉ•Ù}ä€¼Ù}ÁÉ•Ù}±•¸€¤ì($$$$%½¹ÍÐÁÑAÉ•ÙM¡¥™Ñ}ä€ô€ ¥¹AÉ•Ø¹ä€¬Ù}ÁÉ•Ù}à€¼Ù}ÁÉ•Ù}±•¸€¤ì(($$$$%½¹ÍÐÁÑ9•áÑM¡¥™Ñ}à€ô€ ¥¹9•áÐ¹à€´Ù}¹•áÑ}ä€¼Ù}¹•áÑ}±•¸€¤ì($$$$%½¹ÍÐÁÑ9•áÑM¡¥™Ñ}ä€ô€ ¥¹9•áÐ¹ä€¬Ù}¹•áÑ}à€¼Ù}¹•áÑ}±•¸€¤ì(($$$$$¼¼Í…±¥¹œ™…Ñ½È™½ÈÙ}ÁÉ•ØÑ¼¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð(($$$$%½¹ÍÐÍ˜€ô€ € ÁÑ9•áÑM¡¥™Ñ}à€´ÁÑAÉ•ÙM¡¥™Ñ}à€¤€¨Ù}¹•áÑ}ä€´($$$$$$$ ÁÑ9•áÑM¡¥™Ñ}ä€´ÁÑAÉ•ÙM¡¥™Ñ}ä€¤€¨Ù}¹•áÑ}à€¤€¼($$$$$$ Ù}ÁÉ•Ù}à€¨Ù}¹•áÑ}ä€´Ù}ÁÉ•Ù}ä€¨Ù}¹•áÑ}à€¤ì(($$$$$¼¼Ù•Ñ½È™É½´¥¹AÐÑ¼¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð(($$$$%Ù}ÑÉ…¹Í}à€ô€ ÁÑAÉ•ÙM¡¥™Ñ}à€¬Ù}ÁÉ•Ù}à€¨Í˜€´¥¹AÐ¹à€¤ì($$$$%Ù}ÑÉ…¹Í}ä€ô€ ÁÑAÉ•ÙM¡¥™Ñ}ä€¬Ù}ÁÉ•Ù}ä€¨Í˜€´¥¹AÐ¹ä€¤ì(($$$$$¼¼½¸Ð¹½Éµ…±¥é”„°½Ñ¡•ÉÝ¥Í”Í¡…ÉÀ½É¹•ÉÌ‰•½µ”Õ±ä($$$$$¼¼€‰ÕÐÁÉ•Ù•¹ÐÉ…éäÍÁ¥­•Ì($$$$%½¹ÍÐÙ}ÑÉ…¹Í}±•¹ÍÄ€ô€ Ù}ÑÉ…¹Í}à€¨Ù}ÑÉ…¹Í}à€¬Ù}ÑÉ…¹Í}ä€¨Ù}ÑÉ…¹Í}ä€¤ì($$$$%¥˜€ Ù}ÑÉ…¹Í}±•¹ÍÄ€ðô€È€¤ì(($$$$$%É•ÑÕÉ¸¹•ÜY•Ñ½ÈÈ Ù}ÑÉ…¹Í}à°Ù}ÑÉ…¹Í}ä€¤ì(($$$$%ô•±Í”ì(($$$$$%Í¡É¥¹­}‰ä€ô5…Ñ ¹ÍÅÉÐ Ù}ÑÉ…¹Í}±•¹ÍÄ€¼€È€¤ì(($$$$%ô(($$$%ô•±Í”ì(($$$$$¼¼¡…¹‘±”ÍÁ•¥…°…Í”½˜½±±¥¹•…È•‘•Ì(($$$$%±•Ð‘¥É•Ñ¥½¹}•Ä€ô™…±Í”ì€¼¼…ÍÍÕµ•Ìè½ÁÁ½Í¥Ñ”(($$$$%¥˜€ Ù}ÁÉ•Ù}à€ø9Õµ‰•È¹AM%1=8€¤ì(($$$$$%¥˜€ Ù}¹•áÑ}à€ø9Õµ‰•È¹AM%1=8€¤ì(($$$$$$%‘¥É•Ñ¥½¹}•Ä€ôÑÉÕ”ì(($$$$$%ô(($$$$%ô•±Í”ì(($$$$$%¥˜€ Ù}ÁÉ•Ù}à€ð€´9Õµ‰•È¹AM%1=8€¤ì(($$$$$$%¥˜€ Ù}¹•áÑ}à€ð€´9Õµ‰•È¹AM%1=8€¤ì(($$$$$$$%‘¥É•Ñ¥½¹}•Ä€ôÑÉÕ”ì(($$$$$$%ô(($$$$$%ô•±Í”ì(($$$$$$%¥˜€ 5…Ñ ¹Í¥¸ Ù}ÁÉ•Ù}ä€¤€ôôô5…Ñ ¹Í¥¸ Ù}¹•áÑ}ä€¤€¤ì(($$$$$$$%‘¥É•Ñ¥½¹}•Ä€ôÑÉÕ”ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$$%¥˜€ ‘¥É•Ñ¥½¹}•Ä€¤ì(($$$$$$¼¼½¹Í½±”¹±½œ ‰]…É¹¥¹œè±¥¹•Ì…É”„ÍÑÉ…¥¡ÐÍ•ÅÕ•¹”ˆ¤ì($$$$$%Ù}ÑÉ…¹Í}à€ô€´Ù}ÁÉ•Ù}äì($$$$$%Ù}ÑÉ…¹Í}ä€ôÙ}ÁÉ•Ù}àì($$$$$%Í¡É¥¹­}‰ä€ô5…Ñ ¹ÍÅÉÐ Ù}ÁÉ•Ù}±•¹ÍÄ€¤ì(($$$$%ô•±Í”ì(($$$$$$¼¼½¹Í½±”¹±½œ ‰]…É¹¥¹œè±¥¹•Ì…É”„ÍÑÉ…¥¡ÐÍÁ¥­”ˆ¤ì($$$$$%Ù}ÑÉ…¹Í}à€ôÙ}ÁÉ•Ù}àì($$$$$%Ù}ÑÉ…¹Í}ä€ôÙ}ÁÉ•Ù}äì($$$$$%Í¡É¥¹­}‰ä€ô5…Ñ ¹ÍÅÉÐ Ù}ÁÉ•Ù}±•¹ÍÄ€¼€È€¤ì(($$$$%ô(($$$%ô(($$$%É•ÑÕÉ¸¹•ÜY•Ñ½ÈÈ Ù}ÑÉ…¹Í}à€¼Í¡É¥¹­}‰ä°Ù}ÑÉ…¹Í}ä€¼Í¡É¥¹­}‰ä€¤ì(($$%ô((($$%½¹ÍÐ½¹Ñ½ÕÉ5½Ù•µ•¹ÑÌ€ômtì(($$%™½È€ ±•Ð¤€ô€À°¥°€ô½¹Ñ½ÕÈ¹±•¹Ñ °¨€ô¥°€´€Ä°¬€ô¤€¬€Äì¤€ð¥°ì¤€¬¬°¨€¬¬°¬€¬¬€¤ì(($$$%¥˜€ ¨€ôôô¥°€¤¨€ô€Àì($$$%¥˜€ ¬€ôôô¥°€¤¬€ô€Àì(($$$$¼¼€€¡¨¤´´´¡¤¤´´´¡¬¤($$$$¼¼½¹Í½±”¹±½œ ¤±¨±¬œ°¤°¨€°¬¤(($$$%½¹Ñ½ÕÉ5½Ù•µ•¹ÑÍl¤t€ô•Ñ	•Ù•±Y•Œ ½¹Ñ½ÕÉl¤t°½¹Ñ½ÕÉl¨t°½¹Ñ½ÕÉl¬t€¤ì(($$%ô(($$%½¹ÍÐ¡½±•Í5½Ù•µ•¹ÑÌ€ômtì($$%±•Ð½¹•!½±•5½Ù•µ•¹ÑÌ°Ù•ÉÑ¥•Í5½Ù•µ•¹ÑÌ€ô½¹Ñ½ÕÉ5½Ù•µ•¹ÑÌ¹½¹…Ð ¤ì(($$%™½È€ ±•Ð €ô€À°¡°€ô¡½±•Ì¹±•¹Ñ ì €ð¡°ì €¬¬€¤ì(($$$%½¹ÍÐ…¡½±”€ô¡½±•Íl tì(($$$%½¹•!½±•5½Ù•µ•¹ÑÌ€ômtì(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô…¡½±”¹±•¹Ñ °¨€ô¥°€´€Ä°¬€ô¤€¬€Äì¤€ð¥°ì¤€¬¬°¨€¬¬°¬€¬¬€¤ì(($$$$%¥˜€ ¨€ôôô¥°€¤¨€ô€Àì($$$$%¥˜€ ¬€ôôô¥°€¤¬€ô€Àì(($$$$$¼¼€€¡¨¤´´´¡¤¤´´´¡¬¤($$$$%½¹•!½±•5½Ù•µ•¹ÑÍl¤t€ô•Ñ	•Ù•±Y•Œ …¡½±•l¤t°…¡½±•l¨t°…¡½±•l¬t€¤ì(($$$%ô(($$$%¡½±•Í5½Ù•µ•¹ÑÌ¹ÁÕÍ  ½¹•!½±•5½Ù•µ•¹ÑÌ€¤ì($$$%Ù•ÉÑ¥•Í5½Ù•µ•¹ÑÌ€ôÙ•ÉÑ¥•Í5½Ù•µ•¹ÑÌ¹½¹…Ð ½¹•!½±•5½Ù•µ•¹ÑÌ€¤ì(($$%ô((($$$¼¼1½½À‰•Ù•±M•µ•¹ÑÌ°€Ä™½ÈÑ¡”™É½¹Ð°€Ä™½ÈÑ¡”‰…¬(($$%™½È€ ±•Ðˆ€ô€Àìˆ€ð‰•Ù•±M•µ•¹ÑÌìˆ€¬¬€¤ì(($$$$¼½™½È€ ˆ€ô‰•Ù•±M•µ•¹ÑÌìˆ€ø€Àìˆ€´´€¤ì(($$$%½¹ÍÐÐ€ôˆ€¼‰•Ù•±M•µ•¹ÑÌì($$$%½¹ÍÐè€ô‰•Ù•±Q¡¥­¹•ÍÌ€¨5…Ñ ¹½Ì Ð€¨5…Ñ ¹A$€¼€È€¤ì($$$%½¹ÍÐ‰Ì€ô‰•Ù•±M¥é”€¨5…Ñ ¹Í¥¸ Ð€¨5…Ñ ¹A$€¼€È€¤€¬‰•Ù•±=™™Í•Ðì(($$$$¼¼½¹ÑÉ…ÐÍ¡…Á”(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô½¹Ñ½ÕÈ¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐÙ•ÉÐ€ôÍ…±•AÐÈ ½¹Ñ½ÕÉl¤t°½¹Ñ½ÕÉ5½Ù•µ•¹ÑÍl¤t°‰Ì€¤ì(($$$$%Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä°€´è€¤ì(($$$%ô(($$$$¼¼•áÁ…¹¡½±•Ì(($$$%™½È€ ±•Ð €ô€À°¡°€ô¡½±•Ì¹±•¹Ñ ì €ð¡°ì €¬¬€¤ì(($$$$%½¹ÍÐ…¡½±”€ô¡½±•Íl tì($$$$%½¹•!½±•5½Ù•µ•¹ÑÌ€ô¡½±•Í5½Ù•µ•¹ÑÍl tì(($$$$%™½È€ ±•Ð¤€ô€À°¥°€ô…¡½±”¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$$%½¹ÍÐÙ•ÉÐ€ôÍ…±•AÐÈ …¡½±•l¤t°½¹•!½±•5½Ù•µ•¹ÑÍl¤t°‰Ì€¤ì(($$$$$%Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä°€´è€¤ì(($$$$%ô(($$$%ô(($$%ô(($$%½¹ÍÐ‰Ì€ô‰•Ù•±M¥é”€¬‰•Ù•±=™™Í•Ðì(($$$¼¼	…¬™…¥¹œÙ•ÉÑ¥•Ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÙ±•¸ì¤€¬¬€¤ì(($$$%½¹ÍÐÙ•ÉÐ€ô‰•Ù•±¹…‰±•€üÍ…±•AÐÈ Ù•ÉÑ¥•Íl¤t°Ù•ÉÑ¥•Í5½Ù•µ•¹ÑÍl¤t°‰Ì€¤€èÙ•ÉÑ¥•Íl¤tì(($$$%¥˜€ €„•áÑÉÕ‘•	åA…Ñ €¤ì(($$$$%Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä°€À€¤ì(($$$%ô•±Í”ì(($$$$$¼¼Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä€¬•áÑÉÕ‘•AÑÍl€Àt¹ä°•áÑÉÕ‘•AÑÍl€Àt¹à€¤ì(($$$$%¹½Éµ…°¹½Áä ÍÁ±¥¹•QÕ‰”¹¹½Éµ…±Íl€Àt€¤¹µÕ±Ñ¥Á±åM…±…È Ù•ÉÐ¹à€¤ì($$$$%‰¥¹½Éµ…°¹½Áä ÍÁ±¥¹•QÕ‰”¹‰¥¹½Éµ…±Íl€Àt€¤¹µÕ±Ñ¥Á±åM…±…È Ù•ÉÐ¹ä€¤ì(($$$$%Á½Í¥Ñ¥½¸È¹½Áä •áÑÉÕ‘•AÑÍl€Àt€¤¹…‘ ¹½Éµ…°€¤¹…‘ ‰¥¹½Éµ…°€¤ì(($$$$%Ø Á½Í¥Ñ¥½¸È¹à°Á½Í¥Ñ¥½¸È¹ä°Á½Í¥Ñ¥½¸È¹è€¤ì(($$$%ô(($$%ô(($$$¼¼‘ÍÑ•ÁÁ•Ù•ÉÑ¥•Ì¸¸¸($$$¼¼%¹±Õ‘¥¹œ™É½¹Ð™…¥¹œÙ•ÉÑ¥•Ì(($$%™½È€ ±•ÐÌ€ô€ÄìÌ€ðôÍÑ•ÁÌìÌ€¬¬€¤ì(($$$%™½È€ ±•Ð¤€ô€Àì¤€ðÙ±•¸ì¤€¬¬€¤ì(($$$$%½¹ÍÐÙ•ÉÐ€ô‰•Ù•±¹…‰±•€üÍ…±•AÐÈ Ù•ÉÑ¥•Íl¤t°Ù•ÉÑ¥•Í5½Ù•µ•¹ÑÍl¤t°‰Ì€¤€èÙ•ÉÑ¥•Íl¤tì(($$$$%¥˜€ €„•áÑÉÕ‘•	åA…Ñ €¤ì(($$$$$%Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä°‘•ÁÑ €¼ÍÑ•ÁÌ€¨Ì€¤ì(($$$$%ô•±Í”ì(($$$$$$¼¼Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä€¬•áÑÉÕ‘•AÑÍlÌ€´€Ät¹ä°•áÑÉÕ‘•AÑÍlÌ€´€Ät¹à€¤ì(($$$$$%¹½Éµ…°¹½Áä ÍÁ±¥¹•QÕ‰”¹¹½Éµ…±ÍlÌt€¤¹µÕ±Ñ¥Á±åM…±…È Ù•ÉÐ¹à€¤ì($$$$$%‰¥¹½Éµ…°¹½Áä ÍÁ±¥¹•QÕ‰”¹‰¥¹½Éµ…±ÍlÌt€¤¹µÕ±Ñ¥Á±åM…±…È Ù•ÉÐ¹ä€¤ì(($$$$$%Á½Í¥Ñ¥½¸È¹½Áä •áÑÉÕ‘•AÑÍlÌt€¤¹…‘ ¹½Éµ…°€¤¹…‘ ‰¥¹½Éµ…°€¤ì(($$$$$%Ø Á½Í¥Ñ¥½¸È¹à°Á½Í¥Ñ¥½¸È¹ä°Á½Í¥Ñ¥½¸È¹è€¤ì(($$$$%ô(($$$%ô(($$%ô((($$$¼¼‘‰•Ù•°Í•µ•¹ÑÌÁ±…¹•Ì(($$$¼½™½È€ ˆ€ô€Äìˆ€ðô‰•Ù•±M•µ•¹ÑÌìˆ€¬¬€¤ì($$%™½È€ ±•Ðˆ€ô‰•Ù•±M•µ•¹ÑÌ€´€Äìˆ€øô€Àìˆ€´´€¤ì(($$$%½¹ÍÐÐ€ôˆ€¼‰•Ù•±M•µ•¹ÑÌì($$$%½¹ÍÐè€ô‰•Ù•±Q¡¥­¹•ÍÌ€¨5…Ñ ¹½Ì Ð€¨5…Ñ ¹A$€¼€È€¤ì($$$%½¹ÍÐ‰Ì€ô‰•Ù•±M¥é”€¨5…Ñ ¹Í¥¸ Ð€¨5…Ñ ¹A$€¼€È€¤€¬‰•Ù•±=™™Í•Ðì(($$$$¼¼½¹ÑÉ…ÐÍ¡…Á”(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô½¹Ñ½ÕÈ¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐÙ•ÉÐ€ôÍ…±•AÐÈ ½¹Ñ½ÕÉl¤t°½¹Ñ½ÕÉ5½Ù•µ•¹ÑÍl¤t°‰Ì€¤ì($$$$%Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä°‘•ÁÑ €¬è€¤ì(($$$%ô(($$$$¼¼•áÁ…¹¡½±•Ì(($$$%™½È€ ±•Ð €ô€À°¡°€ô¡½±•Ì¹±•¹Ñ ì €ð¡°ì €¬¬€¤ì(($$$$%½¹ÍÐ…¡½±”€ô¡½±•Íl tì($$$$%½¹•!½±•5½Ù•µ•¹ÑÌ€ô¡½±•Í5½Ù•µ•¹ÑÍl tì(($$$$%™½È€ ±•Ð¤€ô€À°¥°€ô…¡½±”¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$$%½¹ÍÐÙ•ÉÐ€ôÍ…±•AÐÈ …¡½±•l¤t°½¹•!½±•5½Ù•µ•¹ÑÍl¤t°‰Ì€¤ì(($$$$$%¥˜€ €„•áÑÉÕ‘•	åA…Ñ €¤ì(($$$$$$%Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä°‘•ÁÑ €¬è€¤ì(($$$$$%ô•±Í”ì(($$$$$$%Ø Ù•ÉÐ¹à°Ù•ÉÐ¹ä€¬•áÑÉÕ‘•AÑÍlÍÑ•ÁÌ€´€Ät¹ä°•áÑÉÕ‘•AÑÍlÍÑ•ÁÌ€´€Ät¹à€¬è€¤ì(($$$$$%ô(($$$$%ô(($$$%ô(($$%ô(($$$¼¨…•Ì€¨¼(($$$¼¼Q½À…¹‰½ÑÑ½´™…•Ì(($$%‰Õ¥±‘1¥‘…•Ì ¤ì(($$$¼¼M¥‘•Ì™…•Ì(($$%‰Õ¥±‘M¥‘•…•Ì ¤ì((($$$¼¼¼¼¼€%¹Ñ•É¹…°™Õ¹Ñ¥½¹Ì(($$%™Õ¹Ñ¥½¸‰Õ¥±‘1¥‘…•Ì ¤ì(($$$%½¹ÍÐÍÑ…ÉÐ€ôÙ•ÉÑ¥•ÍÉÉ…ä¹±•¹Ñ €¼€Ìì(($$$%¥˜€ ‰•Ù•±¹…‰±•€¤ì(($$$$%±•Ð±…å•È€ô€Àì€¼¼ÍÑ•ÁÌ€¬€Ä($$$$%±•Ð½™™Í•Ð€ôÙ±•¸€¨±…å•Èì(($$$$$¼¼	½ÑÑ½´™…•Ì(($$$$%™½È€ ±•Ð¤€ô€Àì¤€ð™±•¸ì¤€¬¬€¤ì(($$$$$%½¹ÍÐ™…”€ô™…•Íl¤tì($$$$$%˜Ì ™…•l€Èt€¬½™™Í•Ð°™…•l€Ät€¬½™™Í•Ð°™…•l€Àt€¬½™™Í•Ð€¤ì(($$$$%ô(($$$$%±…å•È€ôÍÑ•ÁÌ€¬‰•Ù•±M•µ•¹ÑÌ€¨€Èì($$$$%½™™Í•Ð€ôÙ±•¸€¨±…å•Èì(($$$$$¼¼Q½À™…•Ì(($$$$%™½È€ ±•Ð¤€ô€Àì¤€ð™±•¸ì¤€¬¬€¤ì(($$$$$%½¹ÍÐ™…”€ô™…•Íl¤tì($$$$$%˜Ì ™…•l€Àt€¬½™™Í•Ð°™…•l€Ät€¬½™™Í•Ð°™…•l€Èt€¬½™™Í•Ð€¤ì(($$$$%ô(($$$%ô•±Í”ì(($$$$$¼¼	½ÑÑ½´™…•Ì(($$$$%™½È€ ±•Ð¤€ô€Àì¤€ð™±•¸ì¤€¬¬€¤ì(($$$$$%½¹ÍÐ™…”€ô™…•Íl¤tì($$$$$%˜Ì ™…•l€Èt°™…•l€Ät°™…•l€Àt€¤ì(($$$$%ô(($$$$$¼¼Q½À™…•Ì(($$$$%™½È€ ±•Ð¤€ô€Àì¤€ð™±•¸ì¤€¬¬€¤ì(($$$$$%½¹ÍÐ™…”€ô™…•Íl¤tì($$$$$%˜Ì ™…•l€Àt€¬Ù±•¸€¨ÍÑ•ÁÌ°™…•l€Ät€¬Ù±•¸€¨ÍÑ•ÁÌ°™…•l€Èt€¬Ù±•¸€¨ÍÑ•ÁÌ€¤ì(($$$$%ô(($$$%ô(($$$%Í½Á”¹…‘‘É½ÕÀ ÍÑ…ÉÐ°Ù•ÉÑ¥•ÍÉÉ…ä¹±•¹Ñ €¼€Ì€´ÍÑ…ÉÐ°€À€¤ì(($$%ô(($$$¼¼É•…Ñ”™…•Ì™½ÈÑ¡”èµÍ¥‘•Ì½˜Ñ¡”Í¡…Á”(($$%™Õ¹Ñ¥½¸‰Õ¥±‘M¥‘•…•Ì ¤ì(($$$%½¹ÍÐÍÑ…ÉÐ€ôÙ•ÉÑ¥•ÍÉÉ…ä¹±•¹Ñ €¼€Ìì($$$%±•Ð±…å•É½™™Í•Ð€ô€Àì($$$%Í¥‘•Ý…±±Ì ½¹Ñ½ÕÈ°±…å•É½™™Í•Ð€¤ì($$$%±…å•É½™™Í•Ð€¬ô½¹Ñ½ÕÈ¹±•¹Ñ ì(($$$%™½È€ ±•Ð €ô€À°¡°€ô¡½±•Ì¹±•¹Ñ ì €ð¡°ì €¬¬€¤ì(($$$$%½¹ÍÐ…¡½±”€ô¡½±•Íl tì($$$$%Í¥‘•Ý…±±Ì …¡½±”°±…å•É½™™Í•Ð€¤ì(($$$$$¼¼°ÑÉÕ”($$$$%±…å•É½™™Í•Ð€¬ô…¡½±”¹±•¹Ñ ì(($$$%ô((($$$%Í½Á”¹…‘‘É½ÕÀ ÍÑ…ÉÐ°Ù•ÉÑ¥•ÍÉÉ…ä¹±•¹Ñ €¼€Ì€´ÍÑ…ÉÐ°€Ä€¤ì((($$%ô(($$%™Õ¹Ñ¥½¸Í¥‘•Ý…±±Ì ½¹Ñ½ÕÈ°±…å•É½™™Í•Ð€¤ì(($$$%±•Ð¤€ô½¹Ñ½ÕÈ¹±•¹Ñ ì(($$$%Ý¡¥±”€ €´´¤€øô€À€¤ì(($$$$%½¹ÍÐ¨€ô¤ì($$$$%±•Ð¬€ô¤€´€Äì($$$$%¥˜€ ¬€ð€À€¤¬€ô½¹Ñ½ÕÈ¹±•¹Ñ €´€Äì(($$$$$¼½½¹Í½±”¹±½œ ˆœ°¤±¨°¤´Ä°¬±Ù•ÉÑ¥•Ì¹±•¹Ñ ¤ì(($$$$%™½È€ ±•ÐÌ€ô€À°Í°€ô€ ÍÑ•ÁÌ€¬‰•Ù•±M•µ•¹ÑÌ€¨€È€¤ìÌ€ðÍ°ìÌ€¬¬€¤ì(($$$$$%½¹ÍÐÍ±•¸Ä€ôÙ±•¸€¨Ìì($$$$$%½¹ÍÐÍ±•¸È€ôÙ±•¸€¨€ Ì€¬€Ä€¤ì(($$$$$%½¹ÍÐ„€ô±…å•É½™™Í•Ð€¬¨€¬Í±•¸Ä°($$$$$$%ˆ€ô±…å•É½™™Í•Ð€¬¬€¬Í±•¸Ä°($$$$$$%Œ€ô±…å•É½™™Í•Ð€¬¬€¬Í±•¸È°($$$$$$%€ô±…å•É½™™Í•Ð€¬¨€¬Í±•¸Èì(($$$$$%˜Ð „°ˆ°Œ°€¤ì(($$$$%ô(($$$%ô(($$%ô(($$%™Õ¹Ñ¥½¸Ø à°ä°è€¤ì(($$$%Á±…•¡½±‘•È¹ÁÕÍ  à€¤ì($$$%Á±…•¡½±‘•È¹ÁÕÍ  ä€¤ì($$$%Á±…•¡½±‘•È¹ÁÕÍ  è€¤ì(($$%ô((($$%™Õ¹Ñ¥½¸˜Ì „°ˆ°Œ€¤ì(($$$%…‘‘Y•ÉÑ•à „€¤ì($$$%…‘‘Y•ÉÑ•à ˆ€¤ì($$$%…‘‘Y•ÉÑ•à Œ€¤ì(($$$%½¹ÍÐ¹•áÑ%¹‘•à€ôÙ•ÉÑ¥•ÍÉÉ…ä¹±•¹Ñ €¼€Ìì($$$%½¹ÍÐÕÙÌ€ôÕÙ•¸¹•¹•É…Ñ•Q½ÁUX Í½Á”°Ù•ÉÑ¥•ÍÉÉ…ä°¹•áÑ%¹‘•à€´€Ì°¹•áÑ%¹‘•à€´€È°¹•áÑ%¹‘•à€´€Ä€¤ì(($$$%…‘‘UX ÕÙÍl€Àt€¤ì($$$%…‘‘UX ÕÙÍl€Ät€¤ì($$$%…‘‘UX ÕÙÍl€Èt€¤ì(($$%ô(($$%™Õ¹Ñ¥½¸˜Ð „°ˆ°Œ°€¤ì(($$$%…‘‘Y•ÉÑ•à „€¤ì($$$%…‘‘Y•ÉÑ•à ˆ€¤ì($$$%…‘‘Y•ÉÑ•à €¤ì(($$$%…‘‘Y•ÉÑ•à ˆ€¤ì($$$%…‘‘Y•ÉÑ•à Œ€¤ì($$$%…‘‘Y•ÉÑ•à €¤ì((($$$%½¹ÍÐ¹•áÑ%¹‘•à€ôÙ•ÉÑ¥•ÍÉÉ…ä¹±•¹Ñ €¼€Ìì($$$%½¹ÍÐÕÙÌ€ôÕÙ•¸¹•¹•É…Ñ•M¥‘•]…±±UX Í½Á”°Ù•ÉÑ¥•ÍÉÉ…ä°¹•áÑ%¹‘•à€´€Ø°¹•áÑ%¹‘•à€´€Ì°¹•áÑ%¹‘•à€´€È°¹•áÑ%¹‘•à€´€Ä€¤ì(($$$%…‘‘UX ÕÙÍl€Àt€¤ì($$$%…‘‘UX ÕÙÍl€Ät€¤ì($$$%…‘‘UX ÕÙÍl€Ìt€¤ì(($$$%…‘‘UX ÕÙÍl€Ät€¤ì($$$%…‘‘UX ÕÙÍl€Èt€¤ì($$$%…‘‘UX ÕÙÍl€Ìt€¤ì(($$%ô(($$%™Õ¹Ñ¥½¸…‘‘Y•ÉÑ•à ¥¹‘•à€¤ì(($$$%Ù•ÉÑ¥•ÍÉÉ…ä¹ÁÕÍ  Á±…•¡½±‘•Él¥¹‘•à€¨€Ì€¬€Àt€¤ì($$$%Ù•ÉÑ¥•ÍÉÉ…ä¹ÁÕÍ  Á±…•¡½±‘•Él¥¹‘•à€¨€Ì€¬€Ät€¤ì($$$%Ù•ÉÑ¥•ÍÉÉ…ä¹ÁÕÍ  Á±…•¡½±‘•Él¥¹‘•à€¨€Ì€¬€Èt€¤ì(($$%ô((($$%™Õ¹Ñ¥½¸…‘‘UX Ù•Ñ½ÈÈ€¤ì(($$$%ÕÙÉÉ…ä¹ÁÕÍ  Ù•Ñ½ÈÈ¹à€¤ì($$$%ÕÙÉÉ…ä¹ÁÕÍ  Ù•Ñ½ÈÈ¹ä€¤ì(($$%ô(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%½¹ÍÐÍ¡…Á•Ì€ôÑ¡¥Ì¹Á…É…µ•Ñ•ÉÌ¹Í¡…Á•Ìì($%½¹ÍÐ½ÁÑ¥½¹Ì€ôÑ¡¥Ì¹Á…É…µ•Ñ•ÉÌ¹½ÁÑ¥½¹Ìì(($%É•ÑÕÉ¸Ñ½)M=8Ä Í¡…Á•Ì°½ÁÑ¥½¹Ì°‘…Ñ„€¤ì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„°Í¡…Á•Ì€¤ì(($%½¹ÍÐ•½µ•ÑÉåM¡…Á•Ì€ômtì(($%™½È€ ±•Ð¨€ô€À°©°€ô‘…Ñ„¹Í¡…Á•Ì¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$%½¹ÍÐÍ¡…Á”€ôÍ¡…Á•Íl‘…Ñ„¹Í¡…Á•Íl¨ttì(($$%•½µ•ÑÉåM¡…Á•Ì¹ÁÕÍ  Í¡…Á”€¤ì(($%ô(($%½¹ÍÐ•áÑÉÕ‘•A…Ñ €ô‘…Ñ„¹½ÁÑ¥½¹Ì¹•áÑÉÕ‘•A…Ñ ì(($%¥˜€ •áÑÉÕ‘•A…Ñ €„ôôÕ¹‘•™¥¹•€¤ì(($$%‘…Ñ„¹½ÁÑ¥½¹Ì¹•áÑÉÕ‘•A…Ñ €ô¹•ÜÕÉÙ•Íl•áÑÉÕ‘•A…Ñ ¹ÑåÁ”t ¤¹™É½µ)M=8 •áÑÉÕ‘•A…Ñ €¤ì(($%ô(($%É•ÑÕÉ¸¹•ÜáÑÉÕ‘••½µ•ÑÉä •½µ•ÑÉåM¡…Á•Ì°‘…Ñ„¹½ÁÑ¥½¹Ì€¤ì((%ô()ô()½¹ÍÐ]½É±‘UY•¹•É…Ñ½È€ôì((%•¹•É…Ñ•Q½ÁUXè™Õ¹Ñ¥½¸€ •½µ•ÑÉä°Ù•ÉÑ¥•Ì°¥¹‘•á°¥¹‘•á°¥¹‘•á€¤ì(($%½¹ÍÐ…}à€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ìtì($%½¹ÍÐ…}ä€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ätì($%½¹ÍÐ‰}à€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ìtì($%½¹ÍÐ‰}ä€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ätì($%½¹ÍÐ}à€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ìtì($%½¹ÍÐ}ä€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ätì(($%É•ÑÕÉ¸l($$%¹•ÜY•Ñ½ÈÈ …}à°…}ä€¤°($$%¹•ÜY•Ñ½ÈÈ ‰}à°‰}ä€¤°($$%¹•ÜY•Ñ½ÈÈ }à°}ä€¤($%tì((%ô°((%•¹•É…Ñ•M¥‘•]…±±UXè™Õ¹Ñ¥½¸€ •½µ•ÑÉä°Ù•ÉÑ¥•Ì°¥¹‘•á°¥¹‘•á°¥¹‘•á°¥¹‘•á€¤ì(($%½¹ÍÐ…}à€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ìtì($%½¹ÍÐ…}ä€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ätì($%½¹ÍÐ…}è€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ètì($%½¹ÍÐ‰}à€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ìtì($%½¹ÍÐ‰}ä€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ätì($%½¹ÍÐ‰}è€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ètì($%½¹ÍÐ}à€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ìtì($%½¹ÍÐ}ä€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ätì($%½¹ÍÐ}è€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ètì($%½¹ÍÐ‘}à€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ìtì($%½¹ÍÐ‘}ä€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ätì($%½¹ÍÐ‘}è€ôÙ•ÉÑ¥•Íl¥¹‘•á€¨€Ì€¬€Ètì(($%¥˜€ 5…Ñ ¹…‰Ì …}ä€´‰}ä€¤€ð5…Ñ ¹…‰Ì …}à€´‰}à€¤€¤ì(($$%É•ÑÕÉ¸l($$$%¹•ÜY•Ñ½ÈÈ …}à°€Ä€´…}è€¤°($$$%¹•ÜY•Ñ½ÈÈ ‰}à°€Ä€´‰}è€¤°($$$%¹•ÜY•Ñ½ÈÈ }à°€Ä€´}è€¤°($$$%¹•ÜY•Ñ½ÈÈ ‘}à°€Ä€´‘}è€¤($$%tì(($%ô•±Í”ì(($$%É•ÑÕÉ¸l($$$%¹•ÜY•Ñ½ÈÈ …}ä°€Ä€´…}è€¤°($$$%¹•ÜY•Ñ½ÈÈ ‰}ä°€Ä€´‰}è€¤°($$$%¹•ÜY•Ñ½ÈÈ }ä°€Ä€´}è€¤°($$$%¹•ÜY•Ñ½ÈÈ ‘}ä°€Ä€´‘}è€¤($$%tì(($%ô((%ô()ôì()™Õ¹Ñ¥½¸Ñ½)M=8Ä Í¡…Á•Ì°½ÁÑ¥½¹Ì°‘…Ñ„€¤ì((%‘…Ñ„¹Í¡…Á•Ì€ômtì((%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä Í¡…Á•Ì€¤€¤ì(($%™½È€ ±•Ð¤€ô€À°°€ôÍ¡…Á•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÍ¡…Á”€ôÍ¡…Á•Íl¤tì(($$%‘…Ñ„¹Í¡…Á•Ì¹ÁÕÍ  Í¡…Á”¹ÕÕ¥€¤ì(($%ô((%ô•±Í”ì(($%‘…Ñ„¹Í¡…Á•Ì¹ÁÕÍ  Í¡…Á•Ì¹ÕÕ¥€¤ì((%ô((%‘…Ñ„¹½ÁÑ¥½¹Ì€ô=‰©•Ð¹…ÍÍ¥¸ íô°½ÁÑ¥½¹Ì€¤ì((%¥˜€ ½ÁÑ¥½¹Ì¹•áÑÉÕ‘•A…Ñ €„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½ÁÑ¥½¹Ì¹•áÑÉÕ‘•A…Ñ €ô½ÁÑ¥½¹Ì¹•áÑÉÕ‘•A…Ñ ¹Ñ½)M=8 ¤ì((%É•ÑÕÉ¸‘…Ñ„ì()ô()±…ÍÌ%½Í…¡•‘É½¹•½µ•ÑÉä•áÑ•¹‘ÌA½±å¡•‘É½¹•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°‘•Ñ…¥°€ô€À€¤ì(($%½¹ÍÐÐ€ô€ €Ä€¬5…Ñ ¹ÍÅÉÐ €Ô€¤€¤€¼€Èì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ôl($$$´€Ä°Ð°€À°€$Ä°Ð°€À°€$´€Ä°€´Ð°€À°€$Ä°€´Ð°€À°($$$À°€´€Ä°Ð°€$À°€Ä°Ð°$À°€´€Ä°€´Ð°€$À°€Ä°€´Ð°($$%Ð°€À°€´€Ä°€%Ð°€À°€Ä°€$´Ð°€À°€´€Ä°€$´Ð°€À°€Ä($%tì(($%½¹ÍÐ¥¹‘¥•Ì€ôl($$$À°€ÄÄ°€Ô°€$À°€Ô°€Ä°€$À°€Ä°€Ü°€$À°€Ü°€ÄÀ°€$À°€ÄÀ°€ÄÄ°($$$Ä°€Ô°€ä°€$Ô°€ÄÄ°€Ð°$ÄÄ°€ÄÀ°€È°$ÄÀ°€Ü°€Ø°$Ü°€Ä°€à°($$$Ì°€ä°€Ð°€$Ì°€Ð°€È°$Ì°€È°€Ø°$Ì°€Ø°€à°$Ì°€à°€ä°($$$Ð°€ä°€Ô°€$È°€Ð°€ÄÄ°$Ø°€È°€ÄÀ°$à°€Ø°€Ü°$ä°€à°€Ä($%tì(($%ÍÕÁ•È Ù•ÉÑ¥•Ì°¥¹‘¥•Ì°É…‘¥ÕÌ°‘•Ñ…¥°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€%½Í…¡•‘É½¹•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%‘•Ñ…¥°è‘•Ñ…¥°($%ôì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Ü%½Í…¡•‘É½¹•½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹‘•Ñ…¥°€¤ì((%ô()ô()±…ÍÌ=Ñ…¡•‘É½¹•½µ•ÑÉä•áÑ•¹‘ÌA½±å¡•‘É½¹•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°‘•Ñ…¥°€ô€À€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ôl($$$Ä°€À°€À°€$´€Ä°€À°€À°$À°€Ä°€À°($$$À°€´€Ä°€À°€$À°€À°€Ä°$À°€À°€´€Ä($%tì(($%½¹ÍÐ¥¹‘¥•Ì€ôl($$$À°€È°€Ð°$À°€Ð°€Ì°$À°€Ì°€Ô°($$$À°€Ô°€È°$Ä°€È°€Ô°$Ä°€Ô°€Ì°($$$Ä°€Ì°€Ð°$Ä°€Ð°€È($%tì(($%ÍÕÁ•È Ù•ÉÑ¥•Ì°¥¹‘¥•Ì°É…‘¥ÕÌ°‘•Ñ…¥°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€=Ñ…¡•‘É½¹•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%‘•Ñ…¥°è‘•Ñ…¥°($%ôì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•Ü=Ñ…¡•‘É½¹•½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹‘•Ñ…¥°€¤ì((%ô()ô()±…ÍÌI¥¹•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È ¥¹¹•ÉI…‘¥ÕÌ€ô€À¸Ô°½ÕÑ•ÉI…‘¥ÕÌ€ô€Ä°Ñ¡•Ñ…M•µ•¹ÑÌ€ô€ÌÈ°Á¡¥M•µ•¹ÑÌ€ô€Ä°Ñ¡•Ñ…MÑ…ÉÐ€ô€À°Ñ¡•Ñ…1•¹Ñ €ô5…Ñ ¹A$€¨€È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€I¥¹•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%¥¹¹•ÉI…‘¥ÕÌè¥¹¹•ÉI…‘¥ÕÌ°($$%½ÕÑ•ÉI…‘¥ÕÌè½ÕÑ•ÉI…‘¥ÕÌ°($$%Ñ¡•Ñ…M•µ•¹ÑÌèÑ¡•Ñ…M•µ•¹ÑÌ°($$%Á¡¥M•µ•¹ÑÌèÁ¡¥M•µ•¹ÑÌ°($$%Ñ¡•Ñ…MÑ…ÉÐèÑ¡•Ñ…MÑ…ÉÐ°($$%Ñ¡•Ñ…1•¹Ñ èÑ¡•Ñ…1•¹Ñ ($%ôì(($%Ñ¡•Ñ…M•µ•¹ÑÌ€ô5…Ñ ¹µ…à €Ì°Ñ¡•Ñ…M•µ•¹ÑÌ€¤ì($%Á¡¥M•µ•¹ÑÌ€ô5…Ñ ¹µ…à €Ä°Á¡¥M•µ•¹ÑÌ€¤ì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì(($$¼¼Í½µ”¡•±Á•ÈÙ…É¥…‰±•Ì(($%±•ÐÉ…‘¥ÕÌ€ô¥¹¹•ÉI…‘¥ÕÌì($%½¹ÍÐÉ…‘¥ÕÍMÑ•À€ô€ € ½ÕÑ•ÉI…‘¥ÕÌ€´¥¹¹•ÉI…‘¥ÕÌ€¤€¼Á¡¥M•µ•¹ÑÌ€¤ì($%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÕØ€ô¹•ÜY•Ñ½ÈÈ ¤ì(($$¼¼•¹•É…Ñ”Ù•ÉÑ¥•Ì°¹½Éµ…±Ì…¹ÕÙÌ(($%™½È€ ±•Ð¨€ô€Àì¨€ðôÁ¡¥M•µ•¹ÑÌì¨€¬¬€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðôÑ¡•Ñ…M•µ•¹ÑÌì¤€¬¬€¤ì(($$$$¼¼Ù…±Õ•Ì…É”•¹•É…Ñ”™É½´Ñ¡”¥¹Í¥‘”½˜Ñ¡”É¥¹œÑ¼Ñ¡”½ÕÑÍ¥‘”(($$$%½¹ÍÐÍ•µ•¹Ð€ôÑ¡•Ñ…MÑ…ÉÐ€¬¤€¼Ñ¡•Ñ…M•µ•¹ÑÌ€¨Ñ¡•Ñ…1•¹Ñ ì(($$$$¼¼Ù•ÉÑ•à(($$$%Ù•ÉÑ•à¹à€ôÉ…‘¥ÕÌ€¨5…Ñ ¹½Ì Í•µ•¹Ð€¤ì($$$%Ù•ÉÑ•à¹ä€ôÉ…‘¥ÕÌ€¨5…Ñ ¹Í¥¸ Í•µ•¹Ð€¤ì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$$¼¼¹½Éµ…°(($$$%¹½Éµ…±Ì¹ÁÕÍ  €À°€À°€Ä€¤ì(($$$$¼¼ÕØ(($$$%ÕØ¹à€ô€ Ù•ÉÑ•à¹à€¼½ÕÑ•ÉI…‘¥ÕÌ€¬€Ä€¤€¼€Èì($$$%ÕØ¹ä€ô€ Ù•ÉÑ•à¹ä€¼½ÕÑ•ÉI…‘¥ÕÌ€¬€Ä€¤€¼€Èì(($$$%ÕÙÌ¹ÁÕÍ  ÕØ¹à°ÕØ¹ä€¤ì(($$%ô(($$$¼¼¥¹É•…Í”Ñ¡”É…‘¥ÕÌ™½È¹•áÐÉ½Ü½˜Ù•ÉÑ¥•Ì(($$%É…‘¥ÕÌ€¬ôÉ…‘¥ÕÍMÑ•Àì(($%ô(($$¼¼¥¹‘¥•Ì(($%™½È€ ±•Ð¨€ô€Àì¨€ðÁ¡¥M•µ•¹ÑÌì¨€¬¬€¤ì(($$%½¹ÍÐÑ¡•Ñ…M•µ•¹Ñ1•Ù•°€ô¨€¨€ Ñ¡•Ñ…M•µ•¹ÑÌ€¬€Ä€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡•Ñ…M•µ•¹ÑÌì¤€¬¬€¤ì(($$$%½¹ÍÐÍ•µ•¹Ð€ô¤€¬Ñ¡•Ñ…M•µ•¹Ñ1•Ù•°ì(($$$%½¹ÍÐ„€ôÍ•µ•¹Ðì($$$%½¹ÍÐˆ€ôÍ•µ•¹Ð€¬Ñ¡•Ñ…M•µ•¹ÑÌ€¬€Äì($$$%½¹ÍÐŒ€ôÍ•µ•¹Ð€¬Ñ¡•Ñ…M•µ•¹ÑÌ€¬€Èì($$$%½¹ÍÐ€ôÍ•µ•¹Ð€¬€Äì(($$$$¼¼™…•Ì(($$$%¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°€¤ì($$$%¥¹‘¥•Ì¹ÁÕÍ  ˆ°Œ°€¤ì(($$%ô(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•ÜI¥¹•½µ•ÑÉä ‘…Ñ„¹¥¹¹•ÉI…‘¥ÕÌ°‘…Ñ„¹½ÕÑ•ÉI…‘¥ÕÌ°‘…Ñ„¹Ñ¡•Ñ…M•µ•¹ÑÌ°‘…Ñ„¹Á¡¥M•µ•¹ÑÌ°‘…Ñ„¹Ñ¡•Ñ…MÑ…ÉÐ°‘…Ñ„¹Ñ¡•Ñ…1•¹Ñ €¤ì((%ô()ô()±…ÍÌM¡…Á••½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È Í¡…Á•Ì€ô¹•ÜM¡…Á” l¹•ÜY•Ñ½ÈÈ €À°€À¸Ô€¤°¹•ÜY•Ñ½ÈÈ €´€À¸Ô°€´€À¸Ô€¤°¹•ÜY•Ñ½ÈÈ €À¸Ô°€´€À¸Ô€¤t€¤°ÕÉÙ•M•µ•¹ÑÌ€ô€ÄÈ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€M¡…Á••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%Í¡…Á•ÌèÍ¡…Á•Ì°($$%ÕÉÙ•M•µ•¹ÑÌèÕÉÙ•M•µ•¹ÑÌ($%ôì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì(($$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($%±•ÐÉ½ÕÁMÑ…ÉÐ€ô€Àì($%±•ÐÉ½ÕÁ½Õ¹Ð€ô€Àì(($$¼¼…±±½ÜÍ¥¹±”…¹…ÉÉ…äÙ…±Õ•Ì™½È€‰Í¡…Á•ÌˆÁ…É…µ•Ñ•È(($%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä Í¡…Á•Ì€¤€ôôô™…±Í”€¤ì(($$%…‘‘M¡…Á” Í¡…Á•Ì€¤ì(($%ô•±Í”ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÍ¡…Á•Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$$%…‘‘M¡…Á” Í¡…Á•Íl¤t€¤ì(($$$%Ñ¡¥Ì¹…‘‘É½ÕÀ É½ÕÁMÑ…ÉÐ°É½ÕÁ½Õ¹Ð°¤€¤ì€¼¼•¹…‰±•Ì5Õ±Ñ¥5…Ñ•É¥…°ÍÕÁÁ½ÉÐ(($$$%É½ÕÁMÑ…ÉÐ€¬ôÉ½ÕÁ½Õ¹Ðì($$$%É½ÕÁ½Õ¹Ð€ô€Àì(($$%ô(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì((($$¼¼¡•±Á•È™Õ¹Ñ¥½¹Ì(($%™Õ¹Ñ¥½¸…‘‘M¡…Á” Í¡…Á”€¤ì(($$%½¹ÍÐ¥¹‘•á=™™Í•Ð€ôÙ•ÉÑ¥•Ì¹±•¹Ñ €¼€Ìì($$%½¹ÍÐÁ½¥¹ÑÌ€ôÍ¡…Á”¹•áÑÉ…ÑA½¥¹ÑÌ ÕÉÙ•M•µ•¹ÑÌ€¤ì(($$%±•ÐÍ¡…Á•Y•ÉÑ¥•Ì€ôÁ½¥¹ÑÌ¹Í¡…Á”ì($$%½¹ÍÐÍ¡…Á•!½±•Ì€ôÁ½¥¹ÑÌ¹¡½±•Ìì(($$$¼¼¡•¬‘¥É•Ñ¥½¸½˜Ù•ÉÑ¥•Ì(($$%¥˜€ M¡…Á•UÑ¥±Ì¹¥Í±½­]¥Í” Í¡…Á•Y•ÉÑ¥•Ì€¤€ôôô™…±Í”€¤ì(($$$%Í¡…Á•Y•ÉÑ¥•Ì€ôÍ¡…Á•Y•ÉÑ¥•Ì¹É•Ù•ÉÍ” ¤ì(($$%ô(($$%™½È€ ±•Ð¤€ô€À°°€ôÍ¡…Á•!½±•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÍ¡…Á•!½±”€ôÍ¡…Á•!½±•Íl¤tì(($$$%¥˜€ M¡…Á•UÑ¥±Ì¹¥Í±½­]¥Í” Í¡…Á•!½±”€¤€ôôôÑÉÕ”€¤ì(($$$$%Í¡…Á•!½±•Íl¤t€ôÍ¡…Á•!½±”¹É•Ù•ÉÍ” ¤ì(($$$%ô(($$%ô(($$%½¹ÍÐ™…•Ì€ôM¡…Á•UÑ¥±Ì¹ÑÉ¥…¹Õ±…Ñ•M¡…Á” Í¡…Á•Y•ÉÑ¥•Ì°Í¡…Á•!½±•Ì€¤ì(($$$¼¼©½¥¸Ù•ÉÑ¥•Ì½˜¥¹¹•È…¹½ÕÑ•ÈÁ…Ñ¡ÌÑ¼„Í¥¹±”…ÉÉ…ä(($$%™½È€ ±•Ð¤€ô€À°°€ôÍ¡…Á•!½±•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÍ¡…Á•!½±”€ôÍ¡…Á•!½±•Íl¤tì($$$%Í¡…Á•Y•ÉÑ¥•Ì€ôÍ¡…Á•Y•ÉÑ¥•Ì¹½¹…Ð Í¡…Á•!½±”€¤ì(($$%ô(($$$¼¼Ù•ÉÑ¥•Ì°¹½Éµ…±Ì°ÕÙÌ(($$%™½È€ ±•Ð¤€ô€À°°€ôÍ¡…Á•Y•ÉÑ¥•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÙ•ÉÑ•à€ôÍ¡…Á•Y•ÉÑ¥•Íl¤tì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°€À€¤ì($$$%¹½Éµ…±Ì¹ÁÕÍ  €À°€À°€Ä€¤ì($$$%ÕÙÌ¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä€¤ì€¼¼Ý½É±ÕÙÌ(($$%ô(($$$¼¼¥¹‘¥•Ì(($$%™½È€ ±•Ð¤€ô€À°°€ô™…•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐ™…”€ô™…•Íl¤tì(($$$%½¹ÍÐ„€ô™…•l€Àt€¬¥¹‘•á=™™Í•Ðì($$$%½¹ÍÐˆ€ô™…•l€Ät€¬¥¹‘•á=™™Í•Ðì($$$%½¹ÍÐŒ€ô™…•l€Èt€¬¥¹‘•á=™™Í•Ðì(($$$%¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°Œ€¤ì($$$%É½ÕÁ½Õ¹Ð€¬ô€Ìì(($$%ô(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%½¹ÍÐÍ¡…Á•Ì€ôÑ¡¥Ì¹Á…É…µ•Ñ•ÉÌ¹Í¡…Á•Ìì(($%É•ÑÕÉ¸Ñ½)M=8 Í¡…Á•Ì°‘…Ñ„€¤ì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„°Í¡…Á•Ì€¤ì(($%½¹ÍÐ•½µ•ÑÉåM¡…Á•Ì€ômtì(($%™½È€ ±•Ð¨€ô€À°©°€ô‘…Ñ„¹Í¡…Á•Ì¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$%½¹ÍÐÍ¡…Á”€ôÍ¡…Á•Íl‘…Ñ„¹Í¡…Á•Íl¨ttì(($$%•½µ•ÑÉåM¡…Á•Ì¹ÁÕÍ  Í¡…Á”€¤ì(($%ô(($%É•ÑÕÉ¸¹•ÜM¡…Á••½µ•ÑÉä •½µ•ÑÉåM¡…Á•Ì°‘…Ñ„¹ÕÉÙ•M•µ•¹ÑÌ€¤ì((%ô()ô()™Õ¹Ñ¥½¸Ñ½)M=8 Í¡…Á•Ì°‘…Ñ„€¤ì((%‘…Ñ„¹Í¡…Á•Ì€ômtì((%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä Í¡…Á•Ì€¤€¤ì(($%™½È€ ±•Ð¤€ô€À°°€ôÍ¡…Á•Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÍ¡…Á”€ôÍ¡…Á•Íl¤tì(($$%‘…Ñ„¹Í¡…Á•Ì¹ÁÕÍ  Í¡…Á”¹ÕÕ¥€¤ì(($%ô((%ô•±Í”ì(($%‘…Ñ„¹Í¡…Á•Ì¹ÁÕÍ  Í¡…Á•Ì¹ÕÕ¥€¤ì((%ô((%É•ÑÕÉ¸‘…Ñ„ì()ô()±…ÍÌMÁ¡•É••½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°Ý¥‘Ñ¡M•µ•¹ÑÌ€ô€ÌÈ°¡•¥¡ÑM•µ•¹ÑÌ€ô€ÄØ°Á¡¥MÑ…ÉÐ€ô€À°Á¡¥1•¹Ñ €ô5…Ñ ¹A$€¨€È°Ñ¡•Ñ…MÑ…ÉÐ€ô€À°Ñ¡•Ñ…1•¹Ñ €ô5…Ñ ¹A$€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€MÁ¡•É••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%Ý¥‘Ñ¡M•µ•¹ÑÌèÝ¥‘Ñ¡M•µ•¹ÑÌ°($$%¡•¥¡ÑM•µ•¹ÑÌè¡•¥¡ÑM•µ•¹ÑÌ°($$%Á¡¥MÑ…ÉÐèÁ¡¥MÑ…ÉÐ°($$%Á¡¥1•¹Ñ èÁ¡¥1•¹Ñ °($$%Ñ¡•Ñ…MÑ…ÉÐèÑ¡•Ñ…MÑ…ÉÐ°($$%Ñ¡•Ñ…1•¹Ñ èÑ¡•Ñ…1•¹Ñ ($%ôì(($%Ý¥‘Ñ¡M•µ•¹ÑÌ€ô5…Ñ ¹µ…à €Ì°5…Ñ ¹™±½½È Ý¥‘Ñ¡M•µ•¹ÑÌ€¤€¤ì($%¡•¥¡ÑM•µ•¹ÑÌ€ô5…Ñ ¹µ…à €È°5…Ñ ¹™±½½È ¡•¥¡ÑM•µ•¹ÑÌ€¤€¤ì(($%½¹ÍÐÑ¡•Ñ…¹€ô5…Ñ ¹µ¥¸ Ñ¡•Ñ…MÑ…ÉÐ€¬Ñ¡•Ñ…1•¹Ñ °5…Ñ ¹A$€¤ì(($%±•Ð¥¹‘•à€ô€Àì($%½¹ÍÐÉ¥€ômtì(($%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì(($$¼¼•¹•É…Ñ”Ù•ÉÑ¥•Ì°¹½Éµ…±Ì…¹ÕÙÌ(($%™½È€ ±•Ð¥ä€ô€Àì¥ä€ðô¡•¥¡ÑM•µ•¹ÑÌì¥ä€¬¬€¤ì(($$%½¹ÍÐÙ•ÉÑ¥•ÍI½Ü€ômtì(($$%½¹ÍÐØ€ô¥ä€¼¡•¥¡ÑM•µ•¹ÑÌì(($$$¼¼ÍÁ•¥…°…Í”™½ÈÑ¡”Á½±•Ì(($$%±•ÐÕ=™™Í•Ð€ô€Àì(($$%¥˜€ ¥ä€ôôô€À€˜˜Ñ¡•Ñ…MÑ…ÉÐ€ôôô€À€¤ì(($$$%Õ=™™Í•Ð€ô€À¸Ô€¼Ý¥‘Ñ¡M•µ•¹ÑÌì(($$%ô•±Í”¥˜€ ¥ä€ôôô¡•¥¡ÑM•µ•¹ÑÌ€˜˜Ñ¡•Ñ…¹€ôôô5…Ñ ¹A$€¤ì(($$$%Õ=™™Í•Ð€ô€´€À¸Ô€¼Ý¥‘Ñ¡M•µ•¹ÑÌì(($$%ô(($$%™½È€ ±•Ð¥à€ô€Àì¥à€ðôÝ¥‘Ñ¡M•µ•¹ÑÌì¥à€¬¬€¤ì(($$$%½¹ÍÐÔ€ô¥à€¼Ý¥‘Ñ¡M•µ•¹ÑÌì(($$$$¼¼Ù•ÉÑ•à(($$$%Ù•ÉÑ•à¹à€ô€´É…‘¥ÕÌ€¨5…Ñ ¹½Ì Á¡¥MÑ…ÉÐ€¬Ô€¨Á¡¥1•¹Ñ €¤€¨5…Ñ ¹Í¥¸ Ñ¡•Ñ…MÑ…ÉÐ€¬Ø€¨Ñ¡•Ñ…1•¹Ñ €¤ì($$$%Ù•ÉÑ•à¹ä€ôÉ…‘¥ÕÌ€¨5…Ñ ¹½Ì Ñ¡•Ñ…MÑ…ÉÐ€¬Ø€¨Ñ¡•Ñ…1•¹Ñ €¤ì($$$%Ù•ÉÑ•à¹è€ôÉ…‘¥ÕÌ€¨5…Ñ ¹Í¥¸ Á¡¥MÑ…ÉÐ€¬Ô€¨Á¡¥1•¹Ñ €¤€¨5…Ñ ¹Í¥¸ Ñ¡•Ñ…MÑ…ÉÐ€¬Ø€¨Ñ¡•Ñ…1•¹Ñ €¤ì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$$¼¼¹½Éµ…°(($$$%¹½Éµ…°¹½Áä Ù•ÉÑ•à€¤¹¹½Éµ…±¥é” ¤ì($$$%¹½Éµ…±Ì¹ÁÕÍ  ¹½Éµ…°¹à°¹½Éµ…°¹ä°¹½Éµ…°¹è€¤ì(($$$$¼¼ÕØ(($$$%ÕÙÌ¹ÁÕÍ  Ô€¬Õ=™™Í•Ð°€Ä€´Ø€¤ì(($$$%Ù•ÉÑ¥•ÍI½Ü¹ÁÕÍ  ¥¹‘•à€¬¬€¤ì(($$%ô(($$%É¥¹ÁÕÍ  Ù•ÉÑ¥•ÍI½Ü€¤ì(($%ô(($$¼¼¥¹‘¥•Ì(($%™½È€ ±•Ð¥ä€ô€Àì¥ä€ð¡•¥¡ÑM•µ•¹ÑÌì¥ä€¬¬€¤ì(($$%™½È€ ±•Ð¥à€ô€Àì¥à€ðÝ¥‘Ñ¡M•µ•¹ÑÌì¥à€¬¬€¤ì(($$$%½¹ÍÐ„€ôÉ¥‘l¥äul¥à€¬€Ätì($$$%½¹ÍÐˆ€ôÉ¥‘l¥äul¥àtì($$$%½¹ÍÐŒ€ôÉ¥‘l¥ä€¬€Äul¥àtì($$$%½¹ÍÐ€ôÉ¥‘l¥ä€¬€Äul¥à€¬€Ätì(($$$%¥˜€ ¥ä€„ôô€ÀñðÑ¡•Ñ…MÑ…ÉÐ€ø€À€¤¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°€¤ì($$$%¥˜€ ¥ä€„ôô¡•¥¡ÑM•µ•¹ÑÌ€´€ÄñðÑ¡•Ñ…¹€ð5…Ñ ¹A$€¤¥¹‘¥•Ì¹ÁÕÍ  ˆ°Œ°€¤ì(($$%ô(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•ÜMÁ¡•É••½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹Ý¥‘Ñ¡M•µ•¹ÑÌ°‘…Ñ„¹¡•¥¡ÑM•µ•¹ÑÌ°‘…Ñ„¹Á¡¥MÑ…ÉÐ°‘…Ñ„¹Á¡¥1•¹Ñ °‘…Ñ„¹Ñ¡•Ñ…MÑ…ÉÐ°‘…Ñ„¹Ñ¡•Ñ…1•¹Ñ €¤ì((%ô()ô()±…ÍÌQ•ÑÉ…¡•‘É½¹•½µ•ÑÉä•áÑ•¹‘ÌA½±å¡•‘É½¹•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°‘•Ñ…¥°€ô€À€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ôl($$$Ä°€Ä°€Ä°€$´€Ä°€´€Ä°€Ä°€$´€Ä°€Ä°€´€Ä°€$Ä°€´€Ä°€´€Ä($%tì(($%½¹ÍÐ¥¹‘¥•Ì€ôl($$$È°€Ä°€À°€$À°€Ì°€È°$Ä°€Ì°€À°$È°€Ì°€Ä($%tì(($%ÍÕÁ•È Ù•ÉÑ¥•Ì°¥¹‘¥•Ì°É…‘¥ÕÌ°‘•Ñ…¥°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Q•ÑÉ…¡•‘É½¹•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%‘•Ñ…¥°è‘•Ñ…¥°($%ôì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•ÜQ•ÑÉ…¡•‘É½¹•½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹‘•Ñ…¥°€¤ì((%ô()ô()±…ÍÌQ½ÉÕÍ•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°ÑÕ‰”€ô€À¸Ð°É…‘¥…±M•µ•¹ÑÌ€ô€ÄÈ°ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€ô€Ðà°…ÉŒ€ô5…Ñ ¹A$€¨€È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Q½ÉÕÍ•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%ÑÕ‰”èÑÕ‰”°($$%É…‘¥…±M•µ•¹ÑÌèÉ…‘¥…±M•µ•¹ÑÌ°($$%ÑÕ‰Õ±…ÉM•µ•¹ÑÌèÑÕ‰Õ±…ÉM•µ•¹ÑÌ°($$%…ÉŒè…ÉŒ($%ôì(($%É…‘¥…±M•µ•¹ÑÌ€ô5…Ñ ¹™±½½È É…‘¥…±M•µ•¹ÑÌ€¤ì($%ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€ô5…Ñ ¹™±½½È ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¤ì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì(($$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($%½¹ÍÐ•¹Ñ•È€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$¼¼•¹•É…Ñ”Ù•ÉÑ¥•Ì°¹½Éµ…±Ì…¹ÕÙÌ(($%™½È€ ±•Ð¨€ô€Àì¨€ðôÉ…‘¥…±M•µ•¹ÑÌì¨€¬¬€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðôÑÕ‰Õ±…ÉM•µ•¹ÑÌì¤€¬¬€¤ì(($$$%½¹ÍÐÔ€ô¤€¼ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¨…ÉŒì($$$%½¹ÍÐØ€ô¨€¼É…‘¥…±M•µ•¹ÑÌ€¨5…Ñ ¹A$€¨€Èì(($$$$¼¼Ù•ÉÑ•à(($$$%Ù•ÉÑ•à¹à€ô€ É…‘¥ÕÌ€¬ÑÕ‰”€¨5…Ñ ¹½Ì Ø€¤€¤€¨5…Ñ ¹½Ì Ô€¤ì($$$%Ù•ÉÑ•à¹ä€ô€ É…‘¥ÕÌ€¬ÑÕ‰”€¨5…Ñ ¹½Ì Ø€¤€¤€¨5…Ñ ¹Í¥¸ Ô€¤ì($$$%Ù•ÉÑ•à¹è€ôÑÕ‰”€¨5…Ñ ¹Í¥¸ Ø€¤ì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$$¼¼¹½Éµ…°(($$$%•¹Ñ•È¹à€ôÉ…‘¥ÕÌ€¨5…Ñ ¹½Ì Ô€¤ì($$$%•¹Ñ•È¹ä€ôÉ…‘¥ÕÌ€¨5…Ñ ¹Í¥¸ Ô€¤ì($$$%¹½Éµ…°¹ÍÕ‰Y•Ñ½ÉÌ Ù•ÉÑ•à°•¹Ñ•È€¤¹¹½Éµ…±¥é” ¤ì(($$$%¹½Éµ…±Ì¹ÁÕÍ  ¹½Éµ…°¹à°¹½Éµ…°¹ä°¹½Éµ…°¹è€¤ì(($$$$¼¼ÕØ(($$$%ÕÙÌ¹ÁÕÍ  ¤€¼ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¤ì($$$%ÕÙÌ¹ÁÕÍ  ¨€¼É…‘¥…±M•µ•¹ÑÌ€¤ì(($$%ô(($%ô(($$¼¼•¹•É…Ñ”¥¹‘¥•Ì(($%™½È€ ±•Ð¨€ô€Äì¨€ðôÉ…‘¥…±M•µ•¹ÑÌì¨€¬¬€¤ì(($$%™½È€ ±•Ð¤€ô€Äì¤€ðôÑÕ‰Õ±…ÉM•µ•¹ÑÌì¤€¬¬€¤ì(($$$$¼¼¥¹‘¥•Ì(($$$%½¹ÍÐ„€ô€ ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¬€Ä€¤€¨¨€¬¤€´€Äì($$$%½¹ÍÐˆ€ô€ ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¬€Ä€¤€¨€ ¨€´€Ä€¤€¬¤€´€Äì($$$%½¹ÍÐŒ€ô€ ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¬€Ä€¤€¨€ ¨€´€Ä€¤€¬¤ì($$$%½¹ÍÐ€ô€ ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¬€Ä€¤€¨¨€¬¤ì(($$$$¼¼™…•Ì(($$$%¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°€¤ì($$$%¥¹‘¥•Ì¹ÁÕÍ  ˆ°Œ°€¤ì(($$%ô(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•ÜQ½ÉÕÍ•½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹ÑÕ‰”°‘…Ñ„¹É…‘¥…±M•µ•¹ÑÌ°‘…Ñ„¹ÑÕ‰Õ±…ÉM•µ•¹ÑÌ°‘…Ñ„¹…ÉŒ€¤ì((%ô()ô()±…ÍÌQ½ÉÕÍ-¹½Ñ•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°ÑÕ‰”€ô€À¸Ð°ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€ô€ØÐ°É…‘¥…±M•µ•¹ÑÌ€ô€à°À€ô€È°Ä€ô€Ì€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Q½ÉÕÍ-¹½Ñ•½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%ÑÕ‰”èÑÕ‰”°($$%ÑÕ‰Õ±…ÉM•µ•¹ÑÌèÑÕ‰Õ±…ÉM•µ•¹ÑÌ°($$%É…‘¥…±M•µ•¹ÑÌèÉ…‘¥…±M•µ•¹ÑÌ°($$%ÀèÀ°($$%ÄèÄ($%ôì(($%ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€ô5…Ñ ¹™±½½È ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¤ì($%É…‘¥…±M•µ•¹ÑÌ€ô5…Ñ ¹™±½½È É…‘¥…±M•µ•¹ÑÌ€¤ì(($$¼¼‰Õ™™•ÉÌ(($%½¹ÍÐ¥¹‘¥•Ì€ômtì($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì(($$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì(($%½¹ÍÐ@Ä€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ@È€ô¹•ÜY•Ñ½ÈÌ ¤ì(($%½¹ÍÐ€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐP€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ8€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$¼¼•¹•É…Ñ”Ù•ÉÑ¥•Ì°¹½Éµ…±Ì…¹ÕÙÌ(($%™½È€ ±•Ð¤€ô€Àì¤€ðôÑÕ‰Õ±…ÉM•µ•¹ÑÌì€¬¬¤€¤ì(($$$¼¼Ñ¡”É…‘¥…¸€‰Ôˆ¥ÌÕÍ•Ñ¼…±Õ±…Ñ”Ñ¡”Á½Í¥Ñ¥½¸½¸Ñ¡”Ñ½ÉÕÌÕÉÙ”½˜Ñ¡”ÕÉÉ•¹ÐÑÕ‰Õ±…ÈÍ•µ•¹Ð(($$%½¹ÍÐÔ€ô¤€¼ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¨À€¨5…Ñ ¹A$€¨€Èì(($$$¼¼¹½ÜÝ”…±Õ±…Ñ”ÑÝ¼Á½¥¹ÑÌ¸@Ä¥Ì½ÕÈÕÉÉ•¹ÐÁ½Í¥Ñ¥½¸½¸Ñ¡”ÕÉÙ”°@È¥Ì„±¥ÑÑ±”™…ÉÑ¡•È…¡•…¸($$$¼¼Ñ¡•Í”Á½¥¹ÑÌ…É”ÕÍ•Ñ¼É•…Ñ”„ÍÁ•¥…°€‰½½É‘¥¹…Ñ”ÍÁ…”ˆ°Ý¡¥ ¥Ì¹••ÍÍ…ÉäÑ¼…±Õ±…Ñ”Ñ¡”½ÉÉ•ÐÙ•ÉÑ•àÁ½Í¥Ñ¥½¹Ì(($$%…±Õ±…Ñ•A½Í¥Ñ¥½¹=¹ÕÉÙ” Ô°À°Ä°É…‘¥ÕÌ°@Ä€¤ì($$%…±Õ±…Ñ•A½Í¥Ñ¥½¹=¹ÕÉÙ” Ô€¬€À¸ÀÄ°À°Ä°É…‘¥ÕÌ°@È€¤ì(($$$¼¼…±Õ±…Ñ”½ÉÑ¡½¹½Éµ…°‰…Í¥Ì(($$%P¹ÍÕ‰Y•Ñ½ÉÌ @È°@Ä€¤ì($$%8¹…‘‘Y•Ñ½ÉÌ @È°@Ä€¤ì($$%¹É½ÍÍY•Ñ½ÉÌ P°8€¤ì($$%8¹É½ÍÍY•Ñ½ÉÌ °P€¤ì(($$$¼¼¹½Éµ…±¥é”°8¸P…¸‰”¥¹½É•°Ý”‘½¸ÐÕÍ”¥Ð(($$%¹¹½Éµ…±¥é” ¤ì($$%8¹¹½Éµ…±¥é” ¤ì(($$%™½È€ ±•Ð¨€ô€Àì¨€ðôÉ…‘¥…±M•µ•¹ÑÌì€¬¬¨€¤ì(($$$$¼¼¹½Ü…±Õ±…Ñ”Ñ¡”Ù•ÉÑ¥•Ì¸Ñ¡•ä…É”¹½Ñ¡¥¹œµ½É”Ñ¡…¸…¸•áÑÉÕÍ¥½¸½˜Ñ¡”Ñ½ÉÕÌÕÉÙ”¸($$$$¼¼‰•…ÕÍ”Ý”•áÑÉÕ‘”„Í¡…Á”¥¸Ñ¡”áäµÁ±…¹”°Ñ¡•É”¥Ì¹¼¹••Ñ¼…±Õ±…Ñ”„èµÙ…±Õ”¸(($$$%½¹ÍÐØ€ô¨€¼É…‘¥…±M•µ•¹ÑÌ€¨5…Ñ ¹A$€¨€Èì($$$%½¹ÍÐà€ô€´ÑÕ‰”€¨5…Ñ ¹½Ì Ø€¤ì($$$%½¹ÍÐä€ôÑÕ‰”€¨5…Ñ ¹Í¥¸ Ø€¤ì(($$$$¼¼¹½Ü…±Õ±…Ñ”Ñ¡”™¥¹…°Ù•ÉÑ•àÁ½Í¥Ñ¥½¸¸($$$$¼¼™¥ÉÍÐÝ”½É¥•¹ÐÑ¡”•áÑÉÕÍ¥½¸Ý¥Ñ ½ÕÈ‰…Í¥ÌÙ•Ñ½ÉÌ°Ñ¡•¸Ý”…‘¥ÐÑ¼Ñ¡”ÕÉÉ•¹ÐÁ½Í¥Ñ¥½¸½¸Ñ¡”ÕÉÙ”(($$$%Ù•ÉÑ•à¹à€ô@Ä¹à€¬€ à€¨8¹à€¬ä€¨¹à€¤ì($$$%Ù•ÉÑ•à¹ä€ô@Ä¹ä€¬€ à€¨8¹ä€¬ä€¨¹ä€¤ì($$$%Ù•ÉÑ•à¹è€ô@Ä¹è€¬€ à€¨8¹è€¬ä€¨¹è€¤ì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$$$¼¼¹½Éµ…°€¡@Ä¥Ì…±Ý…åÌÑ¡”•¹Ñ•È½½É¥¥¸½˜Ñ¡”•áÑÉÕÍ¥½¸°Ñ¡ÕÌÝ”…¸ÕÍ”¥ÐÑ¼…±Õ±…Ñ”Ñ¡”¹½Éµ…°¤(($$$%¹½Éµ…°¹ÍÕ‰Y•Ñ½ÉÌ Ù•ÉÑ•à°@Ä€¤¹¹½Éµ…±¥é” ¤ì(($$$%¹½Éµ…±Ì¹ÁÕÍ  ¹½Éµ…°¹à°¹½Éµ…°¹ä°¹½Éµ…°¹è€¤ì(($$$$¼¼ÕØ(($$$%ÕÙÌ¹ÁÕÍ  ¤€¼ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€¤ì($$$%ÕÙÌ¹ÁÕÍ  ¨€¼É…‘¥…±M•µ•¹ÑÌ€¤ì(($$%ô(($%ô(($$¼¼•¹•É…Ñ”¥¹‘¥•Ì(($%™½È€ ±•Ð¨€ô€Äì¨€ðôÑÕ‰Õ±…ÉM•µ•¹ÑÌì¨€¬¬€¤ì(($$%™½È€ ±•Ð¤€ô€Äì¤€ðôÉ…‘¥…±M•µ•¹ÑÌì¤€¬¬€¤ì(($$$$¼¼¥¹‘¥•Ì(($$$%½¹ÍÐ„€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨€ ¨€´€Ä€¤€¬€ ¤€´€Ä€¤ì($$$%½¹ÍÐˆ€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨¨€¬€ ¤€´€Ä€¤ì($$$%½¹ÍÐŒ€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨¨€¬¤ì($$$%½¹ÍÐ€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨€ ¨€´€Ä€¤€¬¤ì(($$$$¼¼™…•Ì(($$$%¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°€¤ì($$$%¥¹‘¥•Ì¹ÁÕÍ  ˆ°Œ°€¤ì(($$%ô(($%ô(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì(($$¼¼Ñ¡¥Ì™Õ¹Ñ¥½¸…±Õ±…Ñ•ÌÑ¡”ÕÉÉ•¹ÐÁ½Í¥Ñ¥½¸½¸Ñ¡”Ñ½ÉÕÌÕÉÙ”(($%™Õ¹Ñ¥½¸…±Õ±…Ñ•A½Í¥Ñ¥½¹=¹ÕÉÙ” Ô°À°Ä°É…‘¥ÕÌ°Á½Í¥Ñ¥½¸€¤ì(($$%½¹ÍÐÔ€ô5…Ñ ¹½Ì Ô€¤ì($$%½¹ÍÐÍÔ€ô5…Ñ ¹Í¥¸ Ô€¤ì($$%½¹ÍÐÅÕ=Ù•É@€ôÄ€¼À€¨Ôì($$%½¹ÍÐÌ€ô5…Ñ ¹½Ì ÅÕ=Ù•É@€¤ì(($$%Á½Í¥Ñ¥½¸¹à€ôÉ…‘¥ÕÌ€¨€ €È€¬Ì€¤€¨€À¸Ô€¨Ôì($$%Á½Í¥Ñ¥½¸¹ä€ôÉ…‘¥ÕÌ€¨€ €È€¬Ì€¤€¨ÍÔ€¨€À¸Ôì($$%Á½Í¥Ñ¥½¸¹è€ôÉ…‘¥ÕÌ€¨5…Ñ ¹Í¥¸ ÅÕ=Ù•É@€¤€¨€À¸Ôì(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($%É•ÑÕÉ¸¹•ÜQ½ÉÕÍ-¹½Ñ•½µ•ÑÉä ‘…Ñ„¹É…‘¥ÕÌ°‘…Ñ„¹ÑÕ‰”°‘…Ñ„¹ÑÕ‰Õ±…ÉM•µ•¹ÑÌ°‘…Ñ„¹É…‘¥…±M•µ•¹ÑÌ°‘…Ñ„¹À°‘…Ñ„¹Ä€¤ì((%ô()ô()±…ÍÌQÕ‰••½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È Á…Ñ €ô¹•ÜEÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ì ¹•ÜY•Ñ½ÈÌ €´€Ä°€´€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €´€Ä°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €Ä°€Ä°€À€¤€¤°ÑÕ‰Õ±…ÉM•µ•¹ÑÌ€ô€ØÐ°É…‘¥ÕÌ€ô€Ä°É…‘¥…±M•µ•¹ÑÌ€ô€à°±½Í•€ô™…±Í”€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€QÕ‰••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%Á…Ñ èÁ…Ñ °($$%ÑÕ‰Õ±…ÉM•µ•¹ÑÌèÑÕ‰Õ±…ÉM•µ•¹ÑÌ°($$%É…‘¥ÕÌèÉ…‘¥ÕÌ°($$%É…‘¥…±M•µ•¹ÑÌèÉ…‘¥…±M•µ•¹ÑÌ°($$%±½Í•è±½Í•($%ôì(($%½¹ÍÐ™É…µ•Ì€ôÁ…Ñ ¹½µÁÕÑ•É•¹•ÑÉ…µ•Ì ÑÕ‰Õ±…ÉM•µ•¹ÑÌ°±½Í•€¤ì(($$¼¼•áÁ½Í”¥¹Ñ•É¹…±Ì(($%Ñ¡¥Ì¹Ñ…¹•¹ÑÌ€ô™É…µ•Ì¹Ñ…¹•¹ÑÌì($%Ñ¡¥Ì¹¹½Éµ…±Ì€ô™É…µ•Ì¹¹½Éµ…±Ìì($%Ñ¡¥Ì¹‰¥¹½Éµ…±Ì€ô™É…µ•Ì¹‰¥¹½Éµ…±Ìì(($$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($%½¹ÍÐÙ•ÉÑ•à€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐ¹½Éµ…°€ô¹•ÜY•Ñ½ÈÌ ¤ì($%½¹ÍÐÕØ€ô¹•ÜY•Ñ½ÈÈ ¤ì($%±•Ð@€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$¼¼‰Õ™™•È(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ¹½Éµ…±Ì€ômtì($%½¹ÍÐÕÙÌ€ômtì($%½¹ÍÐ¥¹‘¥•Ì€ômtì(($$¼¼É•…Ñ”‰Õ™™•È‘…Ñ„(($%•¹•É…Ñ•	Õ™™•É…Ñ„ ¤ì(($$¼¼‰Õ¥±•½µ•ÑÉä(($%Ñ¡¥Ì¹Í•Ñ%¹‘•à ¥¹‘¥•Ì€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €¹½Éµ…°œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹½Éµ…±Ì°€Ì€¤€¤ì($%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €ÕØœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÕÙÌ°€È€¤€¤ì(($$¼¼™Õ¹Ñ¥½¹Ì(($%™Õ¹Ñ¥½¸•¹•É…Ñ•	Õ™™•É…Ñ„ ¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÑÕ‰Õ±…ÉM•µ•¹ÑÌì¤€¬¬€¤ì(($$$%•¹•É…Ñ•M•µ•¹Ð ¤€¤ì(($$%ô(($$$¼¼¥˜Ñ¡”•½µ•ÑÉä¥Ì¹½Ð±½Í•°•¹•É…Ñ”Ñ¡”±…ÍÐÉ½Ü½˜Ù•ÉÑ¥•Ì…¹¹½Éµ…±Ì($$$¼¼…ÐÑ¡”É•Õ±…ÈÁ½Í¥Ñ¥½¸½¸Ñ¡”¥Ù•¸Á…Ñ ($$$¼¼($$$¼¼¥˜Ñ¡”•½µ•ÑÉä¥Ì±½Í•°‘ÕÁ±¥…Ñ”Ñ¡”™¥ÉÍÐÉ½Ü½˜Ù•ÉÑ¥•Ì…¹¹½Éµ…±Ì€¡ÕÙÌÝ¥±°‘¥™™•È¤(($$%•¹•É…Ñ•M•µ•¹Ð € ±½Í•€ôôô™…±Í”€¤€üÑÕ‰Õ±…ÉM•µ•¹ÑÌ€è€À€¤ì(($$$¼¼ÕÙÌ…É”•¹•É…Ñ•¥¸„Í•Á…É…Ñ”™Õ¹Ñ¥½¸¸($$$¼¼Ñ¡¥Ìµ…­•Ì¥Ð•…Íä½µÁÕÑ”½ÉÉ•ÐÙ…±Õ•Ì™½È±½Í••½µ•ÑÉ¥•Ì(($$%•¹•É…Ñ•UYÌ ¤ì(($$$¼¼™¥¹…±±äÉ•…Ñ”™…•Ì(($$%•¹•É…Ñ•%¹‘¥•Ì ¤ì(($%ô(($%™Õ¹Ñ¥½¸•¹•É…Ñ•M•µ•¹Ð ¤€¤ì(($$$¼¼Ý”ÕÍ”•ÑA½¥¹ÑÐÑ¼Í…µÁ±”•Ù•¹±ä‘¥ÍÑÉ¥‰ÕÑ•Á½¥¹ÑÌ™É½´Ñ¡”¥Ù•¸Á…Ñ (($$%@€ôÁ…Ñ ¹•ÑA½¥¹ÑÐ ¤€¼ÑÕ‰Õ±…ÉM•µ•¹ÑÌ°@€¤ì(($$$¼¼É•ÑÉ¥•Ù”½ÉÉ•ÍÁ½¹‘¥¹œ¹½Éµ…°…¹‰¥¹½Éµ…°(($$%½¹ÍÐ8€ô™É…µ•Ì¹¹½Éµ…±Íl¤tì($$%½¹ÍÐ€ô™É…µ•Ì¹‰¥¹½Éµ…±Íl¤tì(($$$¼¼•¹•É…Ñ”¹½Éµ…±Ì…¹Ù•ÉÑ¥•Ì™½ÈÑ¡”ÕÉÉ•¹ÐÍ•µ•¹Ð(($$%™½È€ ±•Ð¨€ô€Àì¨€ðôÉ…‘¥…±M•µ•¹ÑÌì¨€¬¬€¤ì(($$$%½¹ÍÐØ€ô¨€¼É…‘¥…±M•µ•¹ÑÌ€¨5…Ñ ¹A$€¨€Èì(($$$%½¹ÍÐÍ¥¸€ô5…Ñ ¹Í¥¸ Ø€¤ì($$$%½¹ÍÐ½Ì€ô€´5…Ñ ¹½Ì Ø€¤ì(($$$$¼¼¹½Éµ…°(($$$%¹½Éµ…°¹à€ô€ ½Ì€¨8¹à€¬Í¥¸€¨¹à€¤ì($$$%¹½Éµ…°¹ä€ô€ ½Ì€¨8¹ä€¬Í¥¸€¨¹ä€¤ì($$$%¹½Éµ…°¹è€ô€ ½Ì€¨8¹è€¬Í¥¸€¨¹è€¤ì($$$%¹½Éµ…°¹¹½Éµ…±¥é” ¤ì(($$$%¹½Éµ…±Ì¹ÁÕÍ  ¹½Éµ…°¹à°¹½Éµ…°¹ä°¹½Éµ…°¹è€¤ì(($$$$¼¼Ù•ÉÑ•à(($$$%Ù•ÉÑ•à¹à€ô@¹à€¬É…‘¥ÕÌ€¨¹½Éµ…°¹àì($$$%Ù•ÉÑ•à¹ä€ô@¹ä€¬É…‘¥ÕÌ€¨¹½Éµ…°¹äì($$$%Ù•ÉÑ•à¹è€ô@¹è€¬É…‘¥ÕÌ€¨¹½Éµ…°¹èì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  Ù•ÉÑ•à¹à°Ù•ÉÑ•à¹ä°Ù•ÉÑ•à¹è€¤ì(($$%ô(($%ô(($%™Õ¹Ñ¥½¸•¹•É…Ñ•%¹‘¥•Ì ¤ì(($$%™½È€ ±•Ð¨€ô€Äì¨€ðôÑÕ‰Õ±…ÉM•µ•¹ÑÌì¨€¬¬€¤ì(($$$%™½È€ ±•Ð¤€ô€Äì¤€ðôÉ…‘¥…±M•µ•¹ÑÌì¤€¬¬€¤ì(($$$$%½¹ÍÐ„€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨€ ¨€´€Ä€¤€¬€ ¤€´€Ä€¤ì($$$$%½¹ÍÐˆ€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨¨€¬€ ¤€´€Ä€¤ì($$$$%½¹ÍÐŒ€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨¨€¬¤ì($$$$%½¹ÍÐ€ô€ É…‘¥…±M•µ•¹ÑÌ€¬€Ä€¤€¨€ ¨€´€Ä€¤€¬¤ì(($$$$$¼¼™…•Ì(($$$$%¥¹‘¥•Ì¹ÁÕÍ  „°ˆ°€¤ì($$$$%¥¹‘¥•Ì¹ÁÕÍ  ˆ°Œ°€¤ì(($$$%ô(($$%ô(($%ô(($%™Õ¹Ñ¥½¸•¹•É…Ñ•UYÌ ¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðôÑÕ‰Õ±…ÉM•µ•¹ÑÌì¤€¬¬€¤ì(($$$%™½È€ ±•Ð¨€ô€Àì¨€ðôÉ…‘¥…±M•µ•¹ÑÌì¨€¬¬€¤ì(($$$$%ÕØ¹à€ô¤€¼ÑÕ‰Õ±…ÉM•µ•¹ÑÌì($$$$%ÕØ¹ä€ô¨€¼É…‘¥…±M•µ•¹ÑÌì(($$$$%ÕÙÌ¹ÁÕÍ  ÕØ¹à°ÕØ¹ä€¤ì(($$$%ô(($$%ô(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹Á…Ñ €ôÑ¡¥Ì¹Á…É…µ•Ñ•ÉÌ¹Á…Ñ ¹Ñ½)M=8 ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô((%ÍÑ…Ñ¥Œ™É½µ)M=8 ‘…Ñ„€¤ì(($$¼¼Q¡¥Ì½¹±äÝ½É­Ì™½È‰Õ¥±Ðµ¥¸ÕÉÙ•Ì€¡”¹œ¸…ÑµÕ±±I½µÕÉÙ”Ì¤¸($$¼¼UÍ•È‘•™¥¹•ÕÉÙ•Ì½È¥¹ÍÑ…¹•Ì½˜ÕÉÙ•A…Ñ Ý¥±°¹½Ð‰”‘•Í•É¥…±¥é•¸($%É•ÑÕÉ¸¹•ÜQÕ‰••½µ•ÑÉä ($$%¹•ÜÕÉÙ•Íl‘…Ñ„¹Á…Ñ ¹ÑåÁ”t ¤¹™É½µ)M=8 ‘…Ñ„¹Á…Ñ €¤°($$%‘…Ñ„¹ÑÕ‰Õ±…ÉM•µ•¹ÑÌ°($$%‘…Ñ„¹É…‘¥ÕÌ°($$%‘…Ñ„¹É…‘¥…±M•µ•¹ÑÌ°($$%‘…Ñ„¹±½Í•($$¤ì((%ô()ô()±…ÍÌ]¥É•™É…µ••½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È •½µ•ÑÉä€ô¹Õ±°€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€]¥É•™É…µ••½µ•ÑÉäœì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ôì($$%•½µ•ÑÉäè•½µ•ÑÉä($%ôì(($%¥˜€ •½µ•ÑÉä€„ôô¹Õ±°€¤ì(($$$¼¼‰Õ™™•È(($$%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($$%½¹ÍÐ•‘•Ì€ô¹•ÜM•Ð ¤ì(($$$¼¼¡•±Á•ÈÙ…É¥…‰±•Ì(($$%½¹ÍÐÍÑ…ÉÐ€ô¹•ÜY•Ñ½ÈÌ ¤ì($$%½¹ÍÐ•¹€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%¥˜€ •½µ•ÑÉä¹¥¹‘•à€„ôô¹Õ±°€¤ì(($$$$¼¼¥¹‘•á•	Õ™™•É•½µ•ÑÉä(($$$%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹Á½Í¥Ñ¥½¸ì($$$%½¹ÍÐ¥¹‘¥•Ì€ô•½µ•ÑÉä¹¥¹‘•àì($$$%±•ÐÉ½ÕÁÌ€ô•½µ•ÑÉä¹É½ÕÁÌì(($$$%¥˜€ É½ÕÁÌ¹±•¹Ñ €ôôô€À€¤ì(($$$$%É½ÕÁÌ€ôlìÍÑ…ÉÐè€À°½Õ¹Ðè¥¹‘¥•Ì¹½Õ¹Ð°µ…Ñ•É¥…±%¹‘•àè€Àôtì(($$$%ô(($$$$¼¼É•…Ñ”„‘…Ñ„ÍÑÉÕÑÕÉ”Ñ¡…Ð½¹Ñ…¥¹Ì…±°•‘•ÌÝ¥Ñ¡½ÕÐ‘ÕÁ±¥…Ñ•Ì(($$$%™½È€ ±•Ð¼€ô€À°½°€ôÉ½ÕÁÌ¹±•¹Ñ ì¼€ð½°ì€¬¬¼€¤ì(($$$$%½¹ÍÐÉ½ÕÀ€ôÉ½ÕÁÍl¼tì(($$$$%½¹ÍÐÉ½ÕÁMÑ…ÉÐ€ôÉ½ÕÀ¹ÍÑ…ÉÐì($$$$%½¹ÍÐÉ½ÕÁ½Õ¹Ð€ôÉ½ÕÀ¹½Õ¹Ðì(($$$$%™½È€ ±•Ð¤€ôÉ½ÕÁMÑ…ÉÐ°°€ô€ É½ÕÁMÑ…ÉÐ€¬É½ÕÁ½Õ¹Ð€¤ì¤€ð°ì¤€¬ô€Ì€¤ì(($$$$$%™½È€ ±•Ð¨€ô€Àì¨€ð€Ìì¨€¬¬€¤ì(($$$$$$%½¹ÍÐ¥¹‘•àÄ€ô¥¹‘¥•Ì¹•Ñ` ¤€¬¨€¤ì($$$$$$%½¹ÍÐ¥¹‘•àÈ€ô¥¹‘¥•Ì¹•Ñ` ¤€¬€ ¨€¬€Ä€¤€”€Ì€¤ì(($$$$$$%ÍÑ…ÉÐ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¸°¥¹‘•àÄ€¤ì($$$$$$%•¹¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¸°¥¹‘•àÈ€¤ì(($$$$$$%¥˜€ ¥ÍU¹¥ÅÕ•‘” ÍÑ…ÉÐ°•¹°•‘•Ì€¤€ôôôÑÉÕ”€¤ì(($$$$$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  ÍÑ…ÉÐ¹à°ÍÑ…ÉÐ¹ä°ÍÑ…ÉÐ¹è€¤ì($$$$$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  •¹¹à°•¹¹ä°•¹¹è€¤ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$%ô(($$%ô•±Í”ì(($$$$¼¼¹½¸µ¥¹‘•á•	Õ™™•É•½µ•ÑÉä(($$$%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹Á½Í¥Ñ¥½¸ì(($$$%™½È€ ±•Ð¤€ô€À°°€ô€ Á½Í¥Ñ¥½¸¹½Õ¹Ð€¼€Ì€¤ì¤€ð°ì¤€¬¬€¤ì(($$$$%™½È€ ±•Ð¨€ô€Àì¨€ð€Ìì¨€¬¬€¤ì(($$$$$$¼¼Ñ¡É•”•‘•ÌÁ•ÈÑÉ¥…¹±”°…¸•‘”¥ÌÉ•ÁÉ•Í•¹Ñ•…Ì€¡¥¹‘•àÄ°¥¹‘•àÈ¤($$$$$$¼¼”¹œ¸Ñ¡”™¥ÉÍÐÑÉ¥…¹±”¡…ÌÑ¡”™½±±½Ý¥¹œ•‘•Ìè€ À°Ä¤° Ä°È¤° È°À¤(($$$$$%½¹ÍÐ¥¹‘•àÄ€ô€Ì€¨¤€¬¨ì($$$$$%½¹ÍÐ¥¹‘•àÈ€ô€Ì€¨¤€¬€ € ¨€¬€Ä€¤€”€Ì€¤ì(($$$$$%ÍÑ…ÉÐ¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¸°¥¹‘•àÄ€¤ì($$$$$%•¹¹™É½µ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¸°¥¹‘•àÈ€¤ì(($$$$$%¥˜€ ¥ÍU¹¥ÅÕ•‘” ÍÑ…ÉÐ°•¹°•‘•Ì€¤€ôôôÑÉÕ”€¤ì(($$$$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  ÍÑ…ÉÐ¹à°ÍÑ…ÉÐ¹ä°ÍÑ…ÉÐ¹è€¤ì($$$$$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  •¹¹à°•¹¹ä°•¹¹è€¤ì(($$$$$%ô(($$$$%ô(($$$%ô(($$%ô(($$$¼¼‰Õ¥±•½µ•ÑÉä(($$%Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉÌ€ô=‰©•Ð¹…ÍÍ¥¸ íô°Í½ÕÉ”¹Á…É…µ•Ñ•ÉÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()™Õ¹Ñ¥½¸¥ÍU¹¥ÅÕ•‘” ÍÑ…ÉÐ°•¹°•‘•Ì€¤ì((%½¹ÍÐ¡…Í Ä€ô€‘íÍÑ…ÉÐ¹áô°‘íÍÑ…ÉÐ¹åô°‘íÍÑ…ÉÐ¹éô´‘í•¹¹áô°‘í•¹¹åô°‘í•¹¹éõ€ì(%½¹ÍÐ¡…Í È€ô€‘í•¹¹áô°‘í•¹¹åô°‘í•¹¹éô´‘íÍÑ…ÉÐ¹áô°‘íÍÑ…ÉÐ¹åô°‘íÍÑ…ÉÐ¹éõ€ì€¼¼½¥¹¥‘•¹Ð•‘”((%¥˜€ •‘•Ì¹¡…Ì ¡…Í Ä€¤€ôôôÑÉÕ”ñð•‘•Ì¹¡…Ì ¡…Í È€¤€ôôôÑÉÕ”€¤ì(($%É•ÑÕÉ¸™…±Í”ì((%ô•±Í”ì(($%•‘•Ì¹…‘ ¡…Í Ä€¤ì($%•‘•Ì¹…‘ ¡…Í È€¤ì($%É•ÑÕÉ¸ÑÉÕ”ì((%ô()ô()Ù…È•½µ•ÑÉ¥•Ì€ô€¼¨}}AUI}|¨½=‰©•Ð¹™É••é”¡ì(%}}ÁÉ½Ñ½}|è¹Õ±°°(%	½á•½µ•ÑÉäè	½á•½µ•ÑÉä°(%…ÁÍÕ±••½µ•ÑÉäè…ÁÍÕ±••½µ•ÑÉä°(%¥É±••½µ•ÑÉäè¥É±••½µ•ÑÉä°(%½¹••½µ•ÑÉäè½¹••½µ•ÑÉä°(%å±¥¹‘•É•½µ•ÑÉäèå±¥¹‘•É•½µ•ÑÉä°(%½‘•…¡•‘É½¹•½µ•ÑÉäè½‘•…¡•‘É½¹•½µ•ÑÉä°(%‘•Í•½µ•ÑÉäè‘•Í•½µ•ÑÉä°(%áÑÉÕ‘••½µ•ÑÉäèáÑÉÕ‘••½µ•ÑÉä°(%%½Í…¡•‘É½¹•½µ•ÑÉäè%½Í…¡•‘É½¹•½µ•ÑÉä°(%1…Ñ¡••½µ•ÑÉäè1…Ñ¡••½µ•ÑÉä°(%=Ñ…¡•‘É½¹•½µ•ÑÉäè=Ñ…¡•‘É½¹•½µ•ÑÉä°(%A±…¹••½µ•ÑÉäèA±…¹••½µ•ÑÉä°(%A½±å¡•‘É½¹•½µ•ÑÉäèA½±å¡•‘É½¹•½µ•ÑÉä°(%I¥¹•½µ•ÑÉäèI¥¹•½µ•ÑÉä°(%M¡…Á••½µ•ÑÉäèM¡…Á••½µ•ÑÉä°(%MÁ¡•É••½µ•ÑÉäèMÁ¡•É••½µ•ÑÉä°(%Q•ÑÉ…¡•‘É½¹•½µ•ÑÉäèQ•ÑÉ…¡•‘É½¹•½µ•ÑÉä°(%Q½ÉÕÍ•½µ•ÑÉäèQ½ÉÕÍ•½µ•ÑÉä°(%Q½ÉÕÍ-¹½Ñ•½µ•ÑÉäèQ½ÉÕÍ-¹½Ñ•½µ•ÑÉä°(%QÕ‰••½µ•ÑÉäèQÕ‰••½µ•ÑÉä°(%]¥É•™É…µ••½µ•ÑÉäè]¥É•™É…µ••½µ•ÑÉä)ô¤ì()±…ÍÌM¡…‘½Ý5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍM¡…‘½Ý5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€M¡…‘½Ý5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È €ÁàÀÀÀÀÀÀ€¤ì($%Ñ¡¥Ì¹ÑÉ…¹ÍÁ…É•¹Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹™½œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì(($%Ñ¡¥Ì¹™½œ€ôÍ½ÕÉ”¹™½œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌI…ÝM¡…‘•É5…Ñ•É¥…°•áÑ•¹‘ÌM¡…‘•É5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È Á…É…µ•Ñ•ÉÌ€¤ì(($%Ñ¡¥Ì¹¥ÍI…ÝM¡…‘•É5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€I…ÝM¡…‘•É5…Ñ•É¥…°œì((%ô()ô()±…ÍÌ5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹‘•™¥¹•Ì€ôì€MQ9Iœè€œœôì(($%Ñ¡¥Ì¹ÑåÁ”€ô€5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È €Áá™™™™™˜€¤ì€¼¼‘¥™™ÕÍ”($%Ñ¡¥Ì¹É½Õ¡¹•ÍÌ€ô€Ä¸Àì($%Ñ¡¥Ì¹µ•Ñ…±¹•ÍÌ€ô€À¸Àì(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹…½5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”€ô¹•Ü½±½È €ÁàÀÀÀÀÀÀ€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ô€Äì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôQ…¹•¹ÑMÁ…•9½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô€Äì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô€Àì(($%Ñ¡¥Ì¹É½Õ¡¹•ÍÍ5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹µ•Ñ…±¹•ÍÍ5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹…±Á¡…5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹•¹Ù5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹•¹Ù5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ô™…±Í”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ô€Äì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ô€É½Õ¹œì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ô€É½Õ¹œì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ô™…±Í”ì(($%Ñ¡¥Ì¹™½œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹‘•™¥¹•Ì€ôì€MQ9Iœè€œœôì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì($%Ñ¡¥Ì¹É½Õ¡¹•ÍÌ€ôÍ½ÕÉ”¹É½Õ¡¹•ÍÌì($%Ñ¡¥Ì¹µ•Ñ…±¹•ÍÌ€ôÍ½ÕÉ”¹µ•Ñ…±¹•ÍÌì(($%Ñ¡¥Ì¹µ…À€ôÍ½ÕÉ”¹µ…Àì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ôÍ½ÕÉ”¹±¥¡Ñ5…Àì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹…½5…À€ôÍ½ÕÉ”¹…½5…Àì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹…½5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”¹½Áä Í½ÕÉ”¹•µ¥ÍÍ¥Ù”€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•5…Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ôÍ½ÕÉ”¹‰ÕµÁ5…Àì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ôÍ½ÕÉ”¹‰ÕµÁM…±”ì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ôÍ½ÕÉ”¹¹½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôÍ½ÕÉ”¹¹½Éµ…±5…ÁQåÁ”ì($%Ñ¡¥Ì¹¹½Éµ…±M…±”¹½Áä Í½ÕÉ”¹¹½Éµ…±M…±”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ5…Àì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%Ñ¡¥Ì¹É½Õ¡¹•ÍÍ5…À€ôÍ½ÕÉ”¹É½Õ¡¹•ÍÍ5…Àì(($%Ñ¡¥Ì¹µ•Ñ…±¹•ÍÍ5…À€ôÍ½ÕÉ”¹µ•Ñ…±¹•ÍÍ5…Àì(($%Ñ¡¥Ì¹…±Á¡…5…À€ôÍ½ÕÉ”¹…±Á¡…5…Àì(($%Ñ¡¥Ì¹•¹Ù5…À€ôÍ½ÕÉ”¹•¹Ù5…Àì($%Ñ¡¥Ì¹•¹Ù5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹•¹Ù5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ôÍ½ÕÉ”¹Ý¥É•™É…µ”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•…Àì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•©½¥¸ì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ôÍ½ÕÉ”¹™±…ÑM¡…‘¥¹œì(($%Ñ¡¥Ì¹™½œ€ôÍ½ÕÉ”¹™½œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ5•Í¡A¡åÍ¥…±5…Ñ•É¥…°•áÑ•¹‘Ì5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í5•Í¡A¡åÍ¥…±5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹‘•™¥¹•Ì€ôì(($$$MQ9Iœè€œœ°($$$A!eM%0œè€œœ(($%ôì(($%Ñ¡¥Ì¹ÑåÁ”€ô€5•Í¡A¡åÍ¥…±5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸€ô€Àì($%Ñ¡¥Ì¹…¹¥Í½ÑÉ½Áå5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹±•…É½…Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹±•…É½…ÑI½Õ¡¹•ÍÌ€ô€À¸Àì($%Ñ¡¥Ì¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹±•…É½…Ñ9½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì($%Ñ¡¥Ì¹±•…É½…Ñ9½Éµ…±5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹¥½È€ô€Ä¸Ôì(($%=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä Ñ¡¥Ì°€É•™±•Ñ¥Ù¥Ñäœ°ì($$%•Ðè™Õ¹Ñ¥½¸€ ¤ì(($$$%É•ÑÕÉ¸€ ±…µÀ €È¸Ô€¨€ Ñ¡¥Ì¹¥½È€´€Ä€¤€¼€ Ñ¡¥Ì¹¥½È€¬€Ä€¤°€À°€Ä€¤€¤ì(($$%ô°($$%Í•Ðè™Õ¹Ñ¥½¸€ É•™±•Ñ¥Ù¥Ñä€¤ì(($$$%Ñ¡¥Ì¹¥½È€ô€ €Ä€¬€À¸Ð€¨É•™±•Ñ¥Ù¥Ñä€¤€¼€ €Ä€´€À¸Ð€¨É•™±•Ñ¥Ù¥Ñä€¤ì(($$%ô($%ô€¤ì(($%Ñ¡¥Ì¹¥É¥‘•Í•¹•5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹¥É¥‘•Í•¹•%=H€ô€Ä¸Ìì($%Ñ¡¥Ì¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”€ôl€ÄÀÀ°€ÐÀÀtì($%Ñ¡¥Ì¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹Í¡••¹½±½È€ô¹•Ü½±½È €ÁàÀÀÀÀÀÀ€¤ì($%Ñ¡¥Ì¹Í¡••¹½±½É5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹Í¡••¹I½Õ¡¹•ÍÌ€ô€Ä¸Àì($%Ñ¡¥Ì¹Í¡••¹I½Õ¡¹•ÍÍ5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹Ñ¡¥­¹•ÍÌ€ô€Àì($%Ñ¡¥Ì¹Ñ¡¥­¹•ÍÍ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”€ô%¹™¥¹¥Ñäì($%Ñ¡¥Ì¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€ô¹•Ü½±½È €Ä°€Ä°€Ä€¤ì(($%Ñ¡¥Ì¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì($%Ñ¡¥Ì¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹ÍÁ•Õ±…É½±½È€ô¹•Ü½±½È €Ä°€Ä°€Ä€¤ì($%Ñ¡¥Ì¹ÍÁ•Õ±…É½±½É5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹}…¹¥Í½ÑÉ½Áä€ô€Àì($%Ñ¡¥Ì¹}±•…É½…Ð€ô€Àì($%Ñ¡¥Ì¹}¥É¥‘•Í•¹”€ô€Àì($%Ñ¡¥Ì¹}Í¡••¸€ô€À¸Àì($%Ñ¡¥Ì¹}ÑÉ…¹Íµ¥ÍÍ¥½¸€ô€Àì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%•Ð…¹¥Í½ÑÉ½Áä ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}…¹¥Í½ÑÉ½Áäì((%ô((%Í•Ð…¹¥Í½ÑÉ½Áä Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹}…¹¥Í½ÑÉ½Áä€ø€À€„ôôÙ…±Õ”€ø€À€¤ì(($$%Ñ¡¥Ì¹Ù•ÉÍ¥½¸€¬¬ì(($%ô(($%Ñ¡¥Ì¹}…¹¥Í½ÑÉ½Áä€ôÙ…±Õ”ì((%ô((%•Ð±•…É½…Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}±•…É½…Ðì((%ô((%Í•Ð±•…É½…Ð Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹}±•…É½…Ð€ø€À€„ôôÙ…±Õ”€ø€À€¤ì(($$%Ñ¡¥Ì¹Ù•ÉÍ¥½¸€¬¬ì(($%ô(($%Ñ¡¥Ì¹}±•…É½…Ð€ôÙ…±Õ”ì((%ô((%•Ð¥É¥‘•Í•¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}¥É¥‘•Í•¹”ì((%ô((%Í•Ð¥É¥‘•Í•¹” Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹}¥É¥‘•Í•¹”€ø€À€„ôôÙ…±Õ”€ø€À€¤ì(($$%Ñ¡¥Ì¹Ù•ÉÍ¥½¸€¬¬ì(($%ô(($%Ñ¡¥Ì¹}¥É¥‘•Í•¹”€ôÙ…±Õ”ì((%ô((%•ÐÍ¡••¸ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Í¡••¸ì((%ô((%Í•ÐÍ¡••¸ Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹}Í¡••¸€ø€À€„ôôÙ…±Õ”€ø€À€¤ì(($$%Ñ¡¥Ì¹Ù•ÉÍ¥½¸€¬¬ì(($%ô(($%Ñ¡¥Ì¹}Í¡••¸€ôÙ…±Õ”ì((%ô((%•ÐÑÉ…¹Íµ¥ÍÍ¥½¸ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}ÑÉ…¹Íµ¥ÍÍ¥½¸ì((%ô((%Í•ÐÑÉ…¹Íµ¥ÍÍ¥½¸ Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹}ÑÉ…¹Íµ¥ÍÍ¥½¸€ø€À€„ôôÙ…±Õ”€ø€À€¤ì(($$%Ñ¡¥Ì¹Ù•ÉÍ¥½¸€¬¬ì(($%ô(($%Ñ¡¥Ì¹}ÑÉ…¹Íµ¥ÍÍ¥½¸€ôÙ…±Õ”ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹‘•™¥¹•Ì€ôì(($$$MQ9Iœè€œœ°($$$A!eM%0œè€œœ(($%ôì(($%Ñ¡¥Ì¹…¹¥Í½ÑÉ½Áä€ôÍ½ÕÉ”¹…¹¥Í½ÑÉ½Áäì($%Ñ¡¥Ì¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸€ôÍ½ÕÉ”¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸ì($%Ñ¡¥Ì¹…¹¥Í½ÑÉ½Áå5…À€ôÍ½ÕÉ”¹…¹¥Í½ÑÉ½Áå5…Àì(($%Ñ¡¥Ì¹±•…É½…Ð€ôÍ½ÕÉ”¹±•…É½…Ðì($%Ñ¡¥Ì¹±•…É½…Ñ5…À€ôÍ½ÕÉ”¹±•…É½…Ñ5…Àì($%Ñ¡¥Ì¹±•…É½…ÑI½Õ¡¹•ÍÌ€ôÍ½ÕÉ”¹±•…É½…ÑI½Õ¡¹•ÍÌì($%Ñ¡¥Ì¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€ôÍ½ÕÉ”¹±•…É½…ÑI½Õ¡¹•ÍÍ5…Àì($%Ñ¡¥Ì¹±•…É½…Ñ9½Éµ…±5…À€ôÍ½ÕÉ”¹±•…É½…Ñ9½Éµ…±5…Àì($%Ñ¡¥Ì¹±•…É½…Ñ9½Éµ…±M…±”¹½Áä Í½ÕÉ”¹±•…É½…Ñ9½Éµ…±M…±”€¤ì(($%Ñ¡¥Ì¹¥½È€ôÍ½ÕÉ”¹¥½Èì(($%Ñ¡¥Ì¹¥É¥‘•Í•¹”€ôÍ½ÕÉ”¹¥É¥‘•Í•¹”ì($%Ñ¡¥Ì¹¥É¥‘•Í•¹•5…À€ôÍ½ÕÉ”¹¥É¥‘•Í•¹•5…Àì($%Ñ¡¥Ì¹¥É¥‘•Í•¹•%=H€ôÍ½ÕÉ”¹¥É¥‘•Í•¹•%=Hì($%Ñ¡¥Ì¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”€ôl€¸¸¹Í½ÕÉ”¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”tì($%Ñ¡¥Ì¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€ôÍ½ÕÉ”¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…Àì(($%Ñ¡¥Ì¹Í¡••¸€ôÍ½ÕÉ”¹Í¡••¸ì($%Ñ¡¥Ì¹Í¡••¹½±½È¹½Áä Í½ÕÉ”¹Í¡••¹½±½È€¤ì($%Ñ¡¥Ì¹Í¡••¹½±½É5…À€ôÍ½ÕÉ”¹Í¡••¹½±½É5…Àì($%Ñ¡¥Ì¹Í¡••¹I½Õ¡¹•ÍÌ€ôÍ½ÕÉ”¹Í¡••¹I½Õ¡¹•ÍÌì($%Ñ¡¥Ì¹Í¡••¹I½Õ¡¹•ÍÍ5…À€ôÍ½ÕÉ”¹Í¡••¹I½Õ¡¹•ÍÍ5…Àì(($%Ñ¡¥Ì¹ÑÉ…¹Íµ¥ÍÍ¥½¸€ôÍ½ÕÉ”¹ÑÉ…¹Íµ¥ÍÍ¥½¸ì($%Ñ¡¥Ì¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€ôÍ½ÕÉ”¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…Àì(($%Ñ¡¥Ì¹Ñ¡¥­¹•ÍÌ€ôÍ½ÕÉ”¹Ñ¡¥­¹•ÍÌì($%Ñ¡¥Ì¹Ñ¡¥­¹•ÍÍ5…À€ôÍ½ÕÉ”¹Ñ¡¥­¹•ÍÍ5…Àì($%Ñ¡¥Ì¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”€ôÍ½ÕÉ”¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”ì($%Ñ¡¥Ì¹…ÑÑ•¹Õ…Ñ¥½¹½±½È¹½Áä Í½ÕÉ”¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€¤ì(($%Ñ¡¥Ì¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñäì($%Ñ¡¥Ì¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€ôÍ½ÕÉ”¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…Àì($%Ñ¡¥Ì¹ÍÁ•Õ±…É½±½È¹½Áä Í½ÕÉ”¹ÍÁ•Õ±…É½±½È€¤ì($%Ñ¡¥Ì¹ÍÁ•Õ±…É½±½É5…À€ôÍ½ÕÉ”¹ÍÁ•Õ±…É½±½É5…Àì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ5•Í¡A¡½¹5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í5•Í¡A¡½¹5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€5•Í¡A¡½¹5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È €Áá™™™™™˜€¤ì€¼¼‘¥™™ÕÍ”($%Ñ¡¥Ì¹ÍÁ•Õ±…È€ô¹•Ü½±½È €ÁàÄÄÄÄÄÄ€¤ì($%Ñ¡¥Ì¹Í¡¥¹¥¹•ÍÌ€ô€ÌÀì(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹…½5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”€ô¹•Ü½±½È €ÁàÀÀÀÀÀÀ€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ô€Äì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôQ…¹•¹ÑMÁ…•9½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô€Äì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô€Àì(($%Ñ¡¥Ì¹ÍÁ•Õ±…É5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹…±Á¡…5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹•¹Ù5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹½µ‰¥¹”€ô5Õ±Ñ¥Á±å=Á•É…Ñ¥½¸ì($%Ñ¡¥Ì¹É•™±•Ñ¥Ù¥Ñä€ô€Äì($%Ñ¡¥Ì¹É•™É…Ñ¥½¹I…Ñ¥¼€ô€À¸äàì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ô™…±Í”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ô€Äì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ô€É½Õ¹œì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ô€É½Õ¹œì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ô™…±Í”ì(($%Ñ¡¥Ì¹™½œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì($%Ñ¡¥Ì¹ÍÁ•Õ±…È¹½Áä Í½ÕÉ”¹ÍÁ•Õ±…È€¤ì($%Ñ¡¥Ì¹Í¡¥¹¥¹•ÍÌ€ôÍ½ÕÉ”¹Í¡¥¹¥¹•ÍÌì(($%Ñ¡¥Ì¹µ…À€ôÍ½ÕÉ”¹µ…Àì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ôÍ½ÕÉ”¹±¥¡Ñ5…Àì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹…½5…À€ôÍ½ÕÉ”¹…½5…Àì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹…½5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”¹½Áä Í½ÕÉ”¹•µ¥ÍÍ¥Ù”€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•5…Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ôÍ½ÕÉ”¹‰ÕµÁ5…Àì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ôÍ½ÕÉ”¹‰ÕµÁM…±”ì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ôÍ½ÕÉ”¹¹½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôÍ½ÕÉ”¹¹½Éµ…±5…ÁQåÁ”ì($%Ñ¡¥Ì¹¹½Éµ…±M…±”¹½Áä Í½ÕÉ”¹¹½Éµ…±M…±”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ5…Àì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%Ñ¡¥Ì¹ÍÁ•Õ±…É5…À€ôÍ½ÕÉ”¹ÍÁ•Õ±…É5…Àì(($%Ñ¡¥Ì¹…±Á¡…5…À€ôÍ½ÕÉ”¹…±Á¡…5…Àì(($%Ñ¡¥Ì¹•¹Ù5…À€ôÍ½ÕÉ”¹•¹Ù5…Àì($%Ñ¡¥Ì¹½µ‰¥¹”€ôÍ½ÕÉ”¹½µ‰¥¹”ì($%Ñ¡¥Ì¹É•™±•Ñ¥Ù¥Ñä€ôÍ½ÕÉ”¹É•™±•Ñ¥Ù¥Ñäì($%Ñ¡¥Ì¹É•™É…Ñ¥½¹I…Ñ¥¼€ôÍ½ÕÉ”¹É•™É…Ñ¥½¹I…Ñ¥¼ì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ôÍ½ÕÉ”¹Ý¥É•™É…µ”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•…Àì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•©½¥¸ì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ôÍ½ÕÉ”¹™±…ÑM¡…‘¥¹œì(($%Ñ¡¥Ì¹™½œ€ôÍ½ÕÉ”¹™½œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ5•Í¡Q½½¹5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í5•Í¡Q½½¹5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹‘•™¥¹•Ì€ôì€Q==8œè€œœôì(($%Ñ¡¥Ì¹ÑåÁ”€ô€5•Í¡Q½½¹5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È €Áá™™™™™˜€¤ì(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì($%Ñ¡¥Ì¹É…‘¥•¹Ñ5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹…½5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”€ô¹•Ü½±½È €ÁàÀÀÀÀÀÀ€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ô€Äì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôQ…¹•¹ÑMÁ…•9½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô€Äì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô€Àì(($%Ñ¡¥Ì¹…±Á¡…5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ô™…±Í”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ô€Äì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ô€É½Õ¹œì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ô€É½Õ¹œì(($%Ñ¡¥Ì¹™½œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì(($%Ñ¡¥Ì¹µ…À€ôÍ½ÕÉ”¹µ…Àì($%Ñ¡¥Ì¹É…‘¥•¹Ñ5…À€ôÍ½ÕÉ”¹É…‘¥•¹Ñ5…Àì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ôÍ½ÕÉ”¹±¥¡Ñ5…Àì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹…½5…À€ôÍ½ÕÉ”¹…½5…Àì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹…½5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”¹½Áä Í½ÕÉ”¹•µ¥ÍÍ¥Ù”€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•5…Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ôÍ½ÕÉ”¹‰ÕµÁ5…Àì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ôÍ½ÕÉ”¹‰ÕµÁM…±”ì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ôÍ½ÕÉ”¹¹½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôÍ½ÕÉ”¹¹½Éµ…±5…ÁQåÁ”ì($%Ñ¡¥Ì¹¹½Éµ…±M…±”¹½Áä Í½ÕÉ”¹¹½Éµ…±M…±”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ5…Àì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%Ñ¡¥Ì¹…±Á¡…5…À€ôÍ½ÕÉ”¹…±Á¡…5…Àì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ôÍ½ÕÉ”¹Ý¥É•™É…µ”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•…Àì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•©½¥¸ì(($%Ñ¡¥Ì¹™½œ€ôÍ½ÕÉ”¹™½œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ5•Í¡9½Éµ…±5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í5•Í¡9½Éµ…±5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€5•Í¡9½Éµ…±5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ô€Äì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôQ…¹•¹ÑMÁ…•9½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô€Äì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô€Àì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ô™…±Í”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ô€Äì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ô™…±Í”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ôÍ½ÕÉ”¹‰ÕµÁ5…Àì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ôÍ½ÕÉ”¹‰ÕµÁM…±”ì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ôÍ½ÕÉ”¹¹½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôÍ½ÕÉ”¹¹½Éµ…±5…ÁQåÁ”ì($%Ñ¡¥Ì¹¹½Éµ…±M…±”¹½Áä Í½ÕÉ”¹¹½Éµ…±M…±”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ5…Àì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ôÍ½ÕÉ”¹Ý¥É•™É…µ”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ ì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ôÍ½ÕÉ”¹™±…ÑM¡…‘¥¹œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ5•Í¡1…µ‰•ÉÑ5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í5•Í¡1…µ‰•ÉÑ5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€5•Í¡1…µ‰•ÉÑ5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È €Áá™™™™™˜€¤ì€¼¼‘¥™™ÕÍ”(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹…½5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”€ô¹•Ü½±½È €ÁàÀÀÀÀÀÀ€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ô€Ä¸Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ô€Äì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôQ…¹•¹ÑMÁ…•9½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô€Äì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô€Àì(($%Ñ¡¥Ì¹ÍÁ•Õ±…É5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹…±Á¡…5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹•¹Ù5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹½µ‰¥¹”€ô5Õ±Ñ¥Á±å=Á•É…Ñ¥½¸ì($%Ñ¡¥Ì¹É•™±•Ñ¥Ù¥Ñä€ô€Äì($%Ñ¡¥Ì¹É•™É…Ñ¥½¹I…Ñ¥¼€ô€À¸äàì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ô™…±Í”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ô€Äì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ô€É½Õ¹œì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ô€É½Õ¹œì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ô™…±Í”ì(($%Ñ¡¥Ì¹™½œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì(($%Ñ¡¥Ì¹µ…À€ôÍ½ÕÉ”¹µ…Àì(($%Ñ¡¥Ì¹±¥¡Ñ5…À€ôÍ½ÕÉ”¹±¥¡Ñ5…Àì($%Ñ¡¥Ì¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹…½5…À€ôÍ½ÕÉ”¹…½5…Àì($%Ñ¡¥Ì¹…½5…Á%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹…½5…Á%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù”¹½Áä Í½ÕÉ”¹•µ¥ÍÍ¥Ù”€¤ì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•5…À€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•5…Àì($%Ñ¡¥Ì¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñäì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ôÍ½ÕÉ”¹‰ÕµÁ5…Àì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ôÍ½ÕÉ”¹‰ÕµÁM…±”ì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ôÍ½ÕÉ”¹¹½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôÍ½ÕÉ”¹¹½Éµ…±5…ÁQåÁ”ì($%Ñ¡¥Ì¹¹½Éµ…±M…±”¹½Áä Í½ÕÉ”¹¹½Éµ…±M…±”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ5…Àì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%Ñ¡¥Ì¹ÍÁ•Õ±…É5…À€ôÍ½ÕÉ”¹ÍÁ•Õ±…É5…Àì(($%Ñ¡¥Ì¹…±Á¡…5…À€ôÍ½ÕÉ”¹…±Á¡…5…Àì(($%Ñ¡¥Ì¹•¹Ù5…À€ôÍ½ÕÉ”¹•¹Ù5…Àì($%Ñ¡¥Ì¹½µ‰¥¹”€ôÍ½ÕÉ”¹½µ‰¥¹”ì($%Ñ¡¥Ì¹É•™±•Ñ¥Ù¥Ñä€ôÍ½ÕÉ”¹É•™±•Ñ¥Ù¥Ñäì($%Ñ¡¥Ì¹É•™É…Ñ¥½¹I…Ñ¥¼€ôÍ½ÕÉ”¹É•™É…Ñ¥½¹I…Ñ¥¼ì(($%Ñ¡¥Ì¹Ý¥É•™É…µ”€ôÍ½ÕÉ”¹Ý¥É•™É…µ”ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ ì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•…À€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•…Àì($%Ñ¡¥Ì¹Ý¥É•™É…µ•1¥¹•©½¥¸€ôÍ½ÕÉ”¹Ý¥É•™É…µ•1¥¹•©½¥¸ì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ôÍ½ÕÉ”¹™±…ÑM¡…‘¥¹œì(($%Ñ¡¥Ì¹™½œ€ôÍ½ÕÉ”¹™½œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ5•Í¡5…Ñ…Á5…Ñ•É¥…°•áÑ•¹‘Ì5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í5•Í¡5…Ñ…Á5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹‘•™¥¹•Ì€ôì€5Q@œè€œœôì(($%Ñ¡¥Ì¹ÑåÁ”€ô€5•Í¡5…Ñ…Á5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È €Áá™™™™™˜€¤ì€¼¼‘¥™™ÕÍ”(($%Ñ¡¥Ì¹µ…Ñ…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ô€Äì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôQ…¹•¹ÑMÁ…•9½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô¹Õ±°ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô€Äì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô€Àì(($%Ñ¡¥Ì¹…±Á¡…5…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ô™…±Í”ì(($%Ñ¡¥Ì¹™½œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô(((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹‘•™¥¹•Ì€ôì€5Q@œè€œœôì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì(($%Ñ¡¥Ì¹µ…Ñ…À€ôÍ½ÕÉ”¹µ…Ñ…Àì(($%Ñ¡¥Ì¹µ…À€ôÍ½ÕÉ”¹µ…Àì(($%Ñ¡¥Ì¹‰ÕµÁ5…À€ôÍ½ÕÉ”¹‰ÕµÁ5…Àì($%Ñ¡¥Ì¹‰ÕµÁM…±”€ôÍ½ÕÉ”¹‰ÕµÁM…±”ì(($%Ñ¡¥Ì¹¹½Éµ…±5…À€ôÍ½ÕÉ”¹¹½Éµ…±5…Àì($%Ñ¡¥Ì¹¹½Éµ…±5…ÁQåÁ”€ôÍ½ÕÉ”¹¹½Éµ…±5…ÁQåÁ”ì($%Ñ¡¥Ì¹¹½Éµ…±M…±”¹½Áä Í½ÕÉ”¹¹½Éµ…±M…±”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ5…À€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ5…Àì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹ÑM…±”€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%Ñ¡¥Ì¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ôÍ½ÕÉ”¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%Ñ¡¥Ì¹…±Á¡…5…À€ôÍ½ÕÉ”¹…±Á¡…5…Àì(($%Ñ¡¥Ì¹™±…ÑM¡…‘¥¹œ€ôÍ½ÕÉ”¹™±…ÑM¡…‘¥¹œì(($%Ñ¡¥Ì¹™½œ€ôÍ½ÕÉ”¹™½œì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ1¥¹•…Í¡•‘5…Ñ•É¥…°•áÑ•¹‘Ì1¥¹•	…Í¥5…Ñ•É¥…°ì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉÌ€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í1¥¹•…Í¡•‘5…Ñ•É¥…°€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1¥¹•…Í¡•‘5…Ñ•É¥…°œì(($%Ñ¡¥Ì¹Í…±”€ô€Äì($%Ñ¡¥Ì¹‘…Í¡M¥é”€ô€Ìì($%Ñ¡¥Ì¹…ÁM¥é”€ô€Äì(($%Ñ¡¥Ì¹Í•ÑY…±Õ•Ì Á…É…µ•Ñ•ÉÌ€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Í…±”€ôÍ½ÕÉ”¹Í…±”ì($%Ñ¡¥Ì¹‘…Í¡M¥é”€ôÍ½ÕÉ”¹‘…Í¡M¥é”ì($%Ñ¡¥Ì¹…ÁM¥é”€ôÍ½ÕÉ”¹…ÁM¥é”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô((¼¼½¹Ù•ÉÑÌ…¸…ÉÉ…äÑ¼„ÍÁ•¥™¥ŒÑåÁ”)™Õ¹Ñ¥½¸½¹Ù•ÉÑÉÉ…ä …ÉÉ…ä°ÑåÁ”°™½É•±½¹”€¤ì((%¥˜€ €„…ÉÉ…äñð€¼¼±•Ð€Õ¹‘•™¥¹•œ…¹€¹Õ±°œÁ…ÍÌ($$„™½É•±½¹”€˜˜…ÉÉ…ä¹½¹ÍÑÉÕÑ½È€ôôôÑåÁ”€¤É•ÑÕÉ¸…ÉÉ…äì((%¥˜€ ÑåÁ•½˜ÑåÁ”¹	eQM}AI}159P€ôôô€¹Õµ‰•Èœ€¤ì(($%É•ÑÕÉ¸¹•ÜÑåÁ” …ÉÉ…ä€¤ì€¼¼É•…Ñ”ÑåÁ•…ÉÉ…ä((%ô((%É•ÑÕÉ¸ÉÉ…ä¹ÁÉ½Ñ½ÑåÁ”¹Í±¥”¹…±° …ÉÉ…ä€¤ì€¼¼É•…Ñ”ÉÉ…ä()ô()™Õ¹Ñ¥½¸¥ÍQåÁ•‘ÉÉ…ä ½‰©•Ð€¤ì((%É•ÑÕÉ¸ÉÉ…å	Õ™™•È¹¥ÍY¥•Ü ½‰©•Ð€¤€˜˜($$„€ ½‰©•Ð¥¹ÍÑ…¹•½˜…Ñ…Y¥•Ü€¤ì()ô((¼¼É•ÑÕÉ¹Ì…¸…ÉÉ…ä‰äÝ¡¥ Ñ¥µ•Ì…¹Ù…±Õ•Ì…¸‰”Í½ÉÑ•)™Õ¹Ñ¥½¸•Ñ-•å™É…µ•=É‘•È Ñ¥µ•Ì€¤ì((%™Õ¹Ñ¥½¸½µÁ…É•Q¥µ” ¤°¨€¤ì(($%É•ÑÕÉ¸Ñ¥µ•Íl¤t€´Ñ¥µ•Íl¨tì((%ô((%½¹ÍÐ¸€ôÑ¥µ•Ì¹±•¹Ñ ì(%½¹ÍÐÉ•ÍÕ±Ð€ô¹•ÜÉÉ…ä ¸€¤ì(%™½È€ ±•Ð¤€ô€Àì¤€„ôô¸ì€¬¬¤€¤É•ÍÕ±Ñl¤t€ô¤ì((%É•ÍÕ±Ð¹Í½ÉÐ ½µÁ…É•Q¥µ”€¤ì((%É•ÑÕÉ¸É•ÍÕ±Ðì()ô((¼¼ÕÍ•ÌÑ¡”…ÉÉ…äÁÉ•Ù¥½ÕÍ±äÉ•ÑÕÉ¹•‰ä€•Ñ-•å™É…µ•=É‘•ÈœÑ¼Í½ÉÐ‘…Ñ„)™Õ¹Ñ¥½¸Í½ÉÑ•‘ÉÉ…ä Ù…±Õ•Ì°ÍÑÉ¥‘”°½É‘•È€¤ì((%½¹ÍÐ¹Y…±Õ•Ì€ôÙ…±Õ•Ì¹±•¹Ñ ì(%½¹ÍÐÉ•ÍÕ±Ð€ô¹•ÜÙ…±Õ•Ì¹½¹ÍÑÉÕÑ½È ¹Y…±Õ•Ì€¤ì((%™½È€ ±•Ð¤€ô€À°‘ÍÑ=™™Í•Ð€ô€Àì‘ÍÑ=™™Í•Ð€„ôô¹Y…±Õ•Ìì€¬¬¤€¤ì(($%½¹ÍÐÍÉ=™™Í•Ð€ô½É‘•Él¤t€¨ÍÑÉ¥‘”ì(($%™½È€ ±•Ð¨€ô€Àì¨€„ôôÍÑÉ¥‘”ì€¬¬¨€¤ì(($$%É•ÍÕ±Ñl‘ÍÑ=™™Í•Ð€¬¬t€ôÙ…±Õ•ÍlÍÉ=™™Í•Ð€¬¨tì(($%ô((%ô((%É•ÑÕÉ¸É•ÍÕ±Ðì()ô((¼¼™Õ¹Ñ¥½¸™½ÈÁ…ÉÍ¥¹œ=L­•å™É…µ”™½Éµ…ÑÌ)™Õ¹Ñ¥½¸™±…ÑÑ•¹)M=8 ©Í½¹-•åÌ°Ñ¥µ•Ì°Ù…±Õ•Ì°Ù…±Õ•AÉ½Á•ÉÑå9…µ”€¤ì((%±•Ð¤€ô€Ä°­•ä€ô©Í½¹-•åÍl€Àtì((%Ý¡¥±”€ ­•ä€„ôôÕ¹‘•™¥¹•€˜˜­•ålÙ…±Õ•AÉ½Á•ÉÑå9…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($%­•ä€ô©Í½¹-•åÍl¤€¬¬tì((%ô((%¥˜€ ­•ä€ôôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸ì€¼¼¹¼‘…Ñ„((%±•ÐÙ…±Õ”€ô­•ålÙ…±Õ•AÉ½Á•ÉÑå9…µ”tì(%¥˜€ Ù…±Õ”€ôôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸ì€¼¼¹¼‘…Ñ„((%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä Ù…±Õ”€¤€¤ì(($%‘¼ì(($$%Ù…±Õ”€ô­•ålÙ…±Õ•AÉ½Á•ÉÑå9…µ”tì(($$%¥˜€ Ù…±Õ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ¥µ•Ì¹ÁÕÍ  ­•ä¹Ñ¥µ”€¤ì($$$%Ù…±Õ•Ì¹ÁÕÍ ¹…ÁÁ±ä Ù…±Õ•Ì°Ù…±Õ”€¤ì€¼¼ÁÕÍ …±°•±•µ•¹ÑÌ(($$%ô(($$%­•ä€ô©Í½¹-•åÍl¤€¬¬tì(($%ôÝ¡¥±”€ ­•ä€„ôôÕ¹‘•™¥¹•€¤ì((%ô•±Í”¥˜€ Ù…±Õ”¹Ñ½ÉÉ…ä€„ôôÕ¹‘•™¥¹•€¤ì(($$¼¼€¸¸¹…ÍÍÕµ”Q!I¹5…Ñ µ¥Í (($%‘¼ì(($$%Ù…±Õ”€ô­•ålÙ…±Õ•AÉ½Á•ÉÑå9…µ”tì(($$%¥˜€ Ù…±Õ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ¥µ•Ì¹ÁÕÍ  ­•ä¹Ñ¥µ”€¤ì($$$%Ù…±Õ”¹Ñ½ÉÉ…ä Ù…±Õ•Ì°Ù…±Õ•Ì¹±•¹Ñ €¤ì(($$%ô(($$%­•ä€ô©Í½¹-•åÍl¤€¬¬tì(($%ôÝ¡¥±”€ ­•ä€„ôôÕ¹‘•™¥¹•€¤ì((%ô•±Í”ì(($$¼¼½Ñ¡•ÉÝ¥Í”ÁÕÍ …Ìµ¥Ì(($%‘¼ì(($$%Ù…±Õ”€ô­•ålÙ…±Õ•AÉ½Á•ÉÑå9…µ”tì(($$%¥˜€ Ù…±Õ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ¥µ•Ì¹ÁÕÍ  ­•ä¹Ñ¥µ”€¤ì($$$%Ù…±Õ•Ì¹ÁÕÍ  Ù…±Õ”€¤ì(($$%ô(($$%­•ä€ô©Í½¹-•åÍl¤€¬¬tì(($%ôÝ¡¥±”€ ­•ä€„ôôÕ¹‘•™¥¹•€¤ì((%ô()ô()™Õ¹Ñ¥½¸ÍÕ‰±¥À Í½ÕÉ•±¥À°¹…µ”°ÍÑ…ÉÑÉ…µ”°•¹‘É…µ”°™ÁÌ€ô€ÌÀ€¤ì((%½¹ÍÐ±¥À€ôÍ½ÕÉ•±¥À¹±½¹” ¤ì((%±¥À¹¹…µ”€ô¹…µ”ì((%½¹ÍÐÑÉ…­Ì€ômtì((%™½È€ ±•Ð¤€ô€Àì¤€ð±¥À¹ÑÉ…­Ì¹±•¹Ñ ì€¬¬¤€¤ì(($%½¹ÍÐÑÉ…¬€ô±¥À¹ÑÉ…­Íl¤tì($%½¹ÍÐÙ…±Õ•M¥é”€ôÑÉ…¬¹•ÑY…±Õ•M¥é” ¤ì(($%½¹ÍÐÑ¥µ•Ì€ômtì($%½¹ÍÐÙ…±Õ•Ì€ômtì(($%™½È€ ±•Ð¨€ô€Àì¨€ðÑÉ…¬¹Ñ¥µ•Ì¹±•¹Ñ ì€¬¬¨€¤ì(($$%½¹ÍÐ™É…µ”€ôÑÉ…¬¹Ñ¥µ•Íl¨t€¨™ÁÌì(($$%¥˜€ ™É…µ”€ðÍÑ…ÉÑÉ…µ”ñð™É…µ”€øô•¹‘É…µ”€¤½¹Ñ¥¹Õ”ì(($$%Ñ¥µ•Ì¹ÁÕÍ  ÑÉ…¬¹Ñ¥µ•Íl¨t€¤ì(($$%™½È€ ±•Ð¬€ô€Àì¬€ðÙ…±Õ•M¥é”ì€¬¬¬€¤ì(($$$%Ù…±Õ•Ì¹ÁÕÍ  ÑÉ…¬¹Ù…±Õ•Íl¨€¨Ù…±Õ•M¥é”€¬¬t€¤ì(($$%ô(($%ô(($%¥˜€ Ñ¥µ•Ì¹±•¹Ñ €ôôô€À€¤½¹Ñ¥¹Õ”ì(($%ÑÉ…¬¹Ñ¥µ•Ì€ô½¹Ù•ÉÑÉÉ…ä Ñ¥µ•Ì°ÑÉ…¬¹Ñ¥µ•Ì¹½¹ÍÑÉÕÑ½È€¤ì($%ÑÉ…¬¹Ù…±Õ•Ì€ô½¹Ù•ÉÑÉÉ…ä Ù…±Õ•Ì°ÑÉ…¬¹Ù…±Õ•Ì¹½¹ÍÑÉÕÑ½È€¤ì(($%ÑÉ…­Ì¹ÁÕÍ  ÑÉ…¬€¤ì((%ô((%±¥À¹ÑÉ…­Ì€ôÑÉ…­Ìì(($¼¼™¥¹µ¥¹¥µÕ´€¹Ñ¥µ•ÌÙ…±Õ”…É½ÍÌ…±°ÑÉ…­Ì¥¸Ñ¡”ÑÉ¥µµ•±¥À((%±•Ðµ¥¹MÑ…ÉÑQ¥µ”€ô%¹™¥¹¥Ñäì((%™½È€ ±•Ð¤€ô€Àì¤€ð±¥À¹ÑÉ…­Ì¹±•¹Ñ ì€¬¬¤€¤ì(($%¥˜€ µ¥¹MÑ…ÉÑQ¥µ”€ø±¥À¹ÑÉ…­Íl¤t¹Ñ¥µ•Íl€Àt€¤ì(($$%µ¥¹MÑ…ÉÑQ¥µ”€ô±¥À¹ÑÉ…­Íl¤t¹Ñ¥µ•Íl€Àtì(($%ô((%ô(($¼¼Í¡¥™Ð…±°ÑÉ…­ÌÍÕ Ñ¡…Ð±¥À‰•¥¹Ì…ÐÐôÀ((%™½È€ ±•Ð¤€ô€Àì¤€ð±¥À¹ÑÉ…­Ì¹±•¹Ñ ì€¬¬¤€¤ì(($%±¥À¹ÑÉ…­Íl¤t¹Í¡¥™Ð €´€Ä€¨µ¥¹MÑ…ÉÑQ¥µ”€¤ì((%ô((%±¥À¹É•Í•ÑÕÉ…Ñ¥½¸ ¤ì((%É•ÑÕÉ¸±¥Àì()ô()™Õ¹Ñ¥½¸µ…­•±¥Á‘‘¥Ñ¥Ù” Ñ…É•Ñ±¥À°É•™•É•¹•É…µ”€ô€À°É•™•É•¹•±¥À€ôÑ…É•Ñ±¥À°™ÁÌ€ô€ÌÀ€¤ì((%¥˜€ ™ÁÌ€ðô€À€¤™ÁÌ€ô€ÌÀì((%½¹ÍÐ¹ÕµQÉ…­Ì€ôÉ•™•É•¹•±¥À¹ÑÉ…­Ì¹±•¹Ñ ì(%½¹ÍÐÉ•™•É•¹•Q¥µ”€ôÉ•™•É•¹•É…µ”€¼™ÁÌì(($¼¼5…­”•… ÑÉ…¬ÌÙ…±Õ•ÌÉ•±…Ñ¥Ù”Ñ¼Ñ¡”Ù…±Õ•Ì…ÐÑ¡”É•™•É•¹”™É…µ”(%™½È€ ±•Ð¤€ô€Àì¤€ð¹ÕµQÉ…­Ìì€¬¬¤€¤ì(($%½¹ÍÐÉ•™•É•¹•QÉ…¬€ôÉ•™•É•¹•±¥À¹ÑÉ…­Íl¤tì($%½¹ÍÐÉ•™•É•¹•QÉ…­QåÁ”€ôÉ•™•É•¹•QÉ…¬¹Y…±Õ•QåÁ•9…µ”ì(($$¼¼M­¥ÀÑ¡¥ÌÑÉ…¬¥˜¥ÐÌ¹½¸µ¹Õµ•É¥Œ($%¥˜€ É•™•É•¹•QÉ…­QåÁ”€ôôô€‰½½°œñðÉ•™•É•¹•QÉ…­QåÁ”€ôôô€ÍÑÉ¥¹œœ€¤½¹Ñ¥¹Õ”ì(($$¼¼¥¹Ñ¡”ÑÉ…¬¥¸Ñ¡”Ñ…É•Ð±¥ÀÝ¡½Í”¹…µ”…¹ÑåÁ”µ…Ñ¡•ÌÑ¡”É•™•É•¹”ÑÉ…¬($%½¹ÍÐÑ…É•ÑQÉ…¬€ôÑ…É•Ñ±¥À¹ÑÉ…­Ì¹™¥¹ ™Õ¹Ñ¥½¸€ ÑÉ…¬€¤ì(($$%É•ÑÕÉ¸ÑÉ…¬¹¹…µ”€ôôôÉ•™•É•¹•QÉ…¬¹¹…µ”($$$$˜˜ÑÉ…¬¹Y…±Õ•QåÁ•9…µ”€ôôôÉ•™•É•¹•QÉ…­QåÁ”ì(($%ô€¤ì(($%¥˜€ Ñ…É•ÑQÉ…¬€ôôôÕ¹‘•™¥¹•€¤½¹Ñ¥¹Õ”ì(($%±•ÐÉ•™•É•¹•=™™Í•Ð€ô€Àì($%½¹ÍÐÉ•™•É•¹•Y…±Õ•M¥é”€ôÉ•™•É•¹•QÉ…¬¹•ÑY…±Õ•M¥é” ¤ì(($%¥˜€ É•™•É•¹•QÉ…¬¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð¹¥Í%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1QÕ‰¥MÁ±¥¹”€¤ì(($$%É•™•É•¹•=™™Í•Ð€ôÉ•™•É•¹•Y…±Õ•M¥é”€¼€Ìì(($%ô(($%±•ÐÑ…É•Ñ=™™Í•Ð€ô€Àì($%½¹ÍÐÑ…É•ÑY…±Õ•M¥é”€ôÑ…É•ÑQÉ…¬¹•ÑY…±Õ•M¥é” ¤ì(($%¥˜€ Ñ…É•ÑQÉ…¬¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð¹¥Í%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1QÕ‰¥MÁ±¥¹”€¤ì(($$%Ñ…É•Ñ=™™Í•Ð€ôÑ…É•ÑY…±Õ•M¥é”€¼€Ìì(($%ô(($%½¹ÍÐ±…ÍÑ%¹‘•à€ôÉ•™•É•¹•QÉ…¬¹Ñ¥µ•Ì¹±•¹Ñ €´€Äì($%±•ÐÉ•™•É•¹•Y…±Õ”ì(($$¼¼¥¹Ñ¡”Ù…±Õ”Ñ¼ÍÕ‰ÑÉ…Ð½ÕÐ½˜Ñ¡”ÑÉ…¬($%¥˜€ É•™•É•¹•Q¥µ”€ðôÉ•™•É•¹•QÉ…¬¹Ñ¥µ•Íl€Àt€¤ì(($$$¼¼I•™•É•¹”™É…µ”¥Ì•…É±¥•ÈÑ¡…¸Ñ¡”™¥ÉÍÐ­•å™É…µ”°Í¼©ÕÍÐÕÍ”Ñ¡”™¥ÉÍÐ­•å™É…µ”($$%½¹ÍÐÍÑ…ÉÑ%¹‘•à€ôÉ•™•É•¹•=™™Í•Ðì($$%½¹ÍÐ•¹‘%¹‘•à€ôÉ•™•É•¹•Y…±Õ•M¥é”€´É•™•É•¹•=™™Í•Ðì($$%É•™•É•¹•Y…±Õ”€ôÉ•™•É•¹•QÉ…¬¹Ù…±Õ•Ì¹Í±¥” ÍÑ…ÉÑ%¹‘•à°•¹‘%¹‘•à€¤ì(($%ô•±Í”¥˜€ É•™•É•¹•Q¥µ”€øôÉ•™•É•¹•QÉ…¬¹Ñ¥µ•Íl±…ÍÑ%¹‘•àt€¤ì(($$$¼¼I•™•É•¹”™É…µ”¥Ì…™Ñ•ÈÑ¡”±…ÍÐ­•å™É…µ”°Í¼©ÕÍÐÕÍ”Ñ¡”±…ÍÐ­•å™É…µ”($$%½¹ÍÐÍÑ…ÉÑ%¹‘•à€ô±…ÍÑ%¹‘•à€¨É•™•É•¹•Y…±Õ•M¥é”€¬É•™•É•¹•=™™Í•Ðì($$%½¹ÍÐ•¹‘%¹‘•à€ôÍÑ…ÉÑ%¹‘•à€¬É•™•É•¹•Y…±Õ•M¥é”€´É•™•É•¹•=™™Í•Ðì($$%É•™•É•¹•Y…±Õ”€ôÉ•™•É•¹•QÉ…¬¹Ù…±Õ•Ì¹Í±¥” ÍÑ…ÉÑ%¹‘•à°•¹‘%¹‘•à€¤ì(($%ô•±Í”ì(($$$¼¼%¹Ñ•ÉÁ½±…Ñ”Ñ¼Ñ¡”É•™•É•¹”Ù…±Õ”($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹Ð€ôÉ•™•É•¹•QÉ…¬¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð ¤ì($$%½¹ÍÐÍÑ…ÉÑ%¹‘•à€ôÉ•™•É•¹•=™™Í•Ðì($$%½¹ÍÐ•¹‘%¹‘•à€ôÉ•™•É•¹•Y…±Õ•M¥é”€´É•™•É•¹•=™™Í•Ðì($$%¥¹Ñ•ÉÁ½±…¹Ð¹•Ù…±Õ…Ñ” É•™•É•¹•Q¥µ”€¤ì($$%É•™•É•¹•Y…±Õ”€ô¥¹Ñ•ÉÁ½±…¹Ð¹É•ÍÕ±Ñ	Õ™™•È¹Í±¥” ÍÑ…ÉÑ%¹‘•à°•¹‘%¹‘•à€¤ì(($%ô(($$¼¼½¹©Õ…Ñ”Ñ¡”ÅÕ…Ñ•É¹¥½¸($%¥˜€ É•™•É•¹•QÉ…­QåÁ”€ôôô€ÅÕ…Ñ•É¹¥½¸œ€¤ì(($$%½¹ÍÐÉ•™•É•¹•EÕ…Ð€ô¹•ÜEÕ…Ñ•É¹¥½¸ ¤¹™É½µÉÉ…ä É•™•É•¹•Y…±Õ”€¤¹¹½Éµ…±¥é” ¤¹½¹©Õ…Ñ” ¤ì($$%É•™•É•¹•EÕ…Ð¹Ñ½ÉÉ…ä É•™•É•¹•Y…±Õ”€¤ì(($%ô(($$¼¼MÕ‰ÑÉ…ÐÑ¡”É•™•É•¹”Ù…±Õ”™É½´…±°½˜Ñ¡”ÑÉ…¬Ù…±Õ•Ì(($%½¹ÍÐ¹ÕµQ¥µ•Ì€ôÑ…É•ÑQÉ…¬¹Ñ¥µ•Ì¹±•¹Ñ ì($%™½È€ ±•Ð¨€ô€Àì¨€ð¹ÕµQ¥µ•Ìì€¬¬¨€¤ì(($$%½¹ÍÐÙ…±Õ•MÑ…ÉÐ€ô¨€¨Ñ…É•ÑY…±Õ•M¥é”€¬Ñ…É•Ñ=™™Í•Ðì(($$%¥˜€ É•™•É•¹•QÉ…­QåÁ”€ôôô€ÅÕ…Ñ•É¹¥½¸œ€¤ì(($$$$¼¼5Õ±Ñ¥Á±äÑ¡”½¹©Õ…Ñ”™½ÈÅÕ…Ñ•É¹¥½¸ÑÉ…¬ÑåÁ•Ì($$$%EÕ…Ñ•É¹¥½¸¹µÕ±Ñ¥Á±åEÕ…Ñ•É¹¥½¹Í±…Ð ($$$$%Ñ…É•ÑQÉ…¬¹Ù…±Õ•Ì°($$$$%Ù…±Õ•MÑ…ÉÐ°($$$$%É•™•É•¹•Y…±Õ”°($$$$$À°($$$$%Ñ…É•ÑQÉ…¬¹Ù…±Õ•Ì°($$$$%Ù…±Õ•MÑ…ÉÐ($$$$¤ì(($$%ô•±Í”ì(($$$%½¹ÍÐÙ…±Õ•¹€ôÑ…É•ÑY…±Õ•M¥é”€´Ñ…É•Ñ=™™Í•Ð€¨€Èì(($$$$¼¼MÕ‰ÑÉ…Ð•… Ù…±Õ”™½È…±°½Ñ¡•È¹Õµ•É¥ŒÑÉ…¬ÑåÁ•Ì($$$%™½È€ ±•Ð¬€ô€Àì¬€ðÙ…±Õ•¹ì€¬¬¬€¤ì(($$$$%Ñ…É•ÑQÉ…¬¹Ù…±Õ•ÍlÙ…±Õ•MÑ…ÉÐ€¬¬t€´ôÉ•™•É•¹•Y…±Õ•l¬tì(($$$%ô(($$%ô(($%ô((%ô((%Ñ…É•Ñ±¥À¹‰±•¹‘5½‘”€ô‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”ì((%É•ÑÕÉ¸Ñ…É•Ñ±¥Àì()ô()½¹ÍÐ¹¥µ…Ñ¥½¹UÑ¥±Ì€ôì(%½¹Ù•ÉÑÉÉ…äè½¹Ù•ÉÑÉÉ…ä°(%¥ÍQåÁ•‘ÉÉ…äè¥ÍQåÁ•‘ÉÉ…ä°(%•Ñ-•å™É…µ•=É‘•Èè•Ñ-•å™É…µ•=É‘•È°(%Í½ÉÑ•‘ÉÉ…äèÍ½ÉÑ•‘ÉÉ…ä°(%™±…ÑÑ•¹)M=8è™±…ÑÑ•¹)M=8°(%ÍÕ‰±¥ÀèÍÕ‰±¥À°(%µ…­•±¥Á‘‘¥Ñ¥Ù”èµ…­•±¥Á‘‘¥Ñ¥Ù”)ôì((¼¨¨(€¨‰ÍÑÉ…Ð‰…Í”±…ÍÌ½˜¥¹Ñ•ÉÁ½±…¹ÑÌ½Ù•ÈÁ…É…µ•ÑÉ¥ŒÍ…µÁ±•Ì¸(€¨(€¨Q¡”Á…É…µ•Ñ•È‘½µ…¥¸¥Ì½¹”‘¥µ•¹Í¥½¹…°°ÑåÁ¥…±±äÑ¡”Ñ¥µ”½È„Á…Ñ (€¨…±½¹œ„ÕÉÙ”‘•™¥¹•‰äÑ¡”‘…Ñ„¸(€¨(€¨Q¡”Í…µÁ±”Ù…±Õ•Ì…¸¡…Ù”…¹ä‘¥µ•¹Í¥½¹…±¥Ñä…¹‘•É¥Ù•±…ÍÍ•Ìµ…ä(€¨…ÁÁ±äÍÁ•¥…°¥¹Ñ•ÉÁÉ•Ñ…Ñ¥½¹ÌÑ¼Ñ¡”‘…Ñ„¸(€¨(€¨Q¡¥Ì±…ÍÌÁÉ½Ù¥‘•ÌÑ¡”¥¹Ñ•ÉÙ…°Í••¬¥¸„Q•µÁ±…Ñ”5•Ñ¡½°‘•™•ÉÉ¥¹œ(€¨Ñ¡”…ÑÕ…°¥¹Ñ•ÉÁ½±…Ñ¥½¸Ñ¼‘•É¥Ù•±…ÍÍ•Ì¸(€¨(€¨Q¥µ”½µÁ±•á¥Ñä¥Ì< Ä¤™½È±¥¹•…È…•ÍÌÉ½ÍÍ¥¹œ…Ðµ½ÍÐÑÝ¼Á½¥¹ÑÌ(€¨…¹<¡±½œ8¤™½ÈÉ…¹‘½´…•ÍÌ°Ý¡•É”8¥ÌÑ¡”¹Õµ‰•È½˜Á½Í¥Ñ¥½¹Ì¸(€¨(€¨I•™•É•¹•Ìè(€¨(€¨€$%¡ÑÑÀè¼½ÝÝÜ¹½½‘•Í¥¸¹½´½Ñ•µÁ±…Ñ”µµ•Ñ¡½µÁ…ÑÑ•É¸¹¡Ñµ°(€¨(€¨¼()±…ÍÌ%¹Ñ•ÉÁ½±…¹Ðì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì(($%Ñ¡¥Ì¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì€ôÁ…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ìì($%Ñ¡¥Ì¹}…¡•‘%¹‘•à€ô€Àì(($%Ñ¡¥Ì¹É•ÍÕ±Ñ	Õ™™•È€ôÉ•ÍÕ±Ñ	Õ™™•È€„ôôÕ¹‘•™¥¹•€ü($$%É•ÍÕ±Ñ	Õ™™•È€è¹•ÜÍ…µÁ±•Y…±Õ•Ì¹½¹ÍÑÉÕÑ½È Í…µÁ±•M¥é”€¤ì($%Ñ¡¥Ì¹Í…µÁ±•Y…±Õ•Ì€ôÍ…µÁ±•Y…±Õ•Ìì($%Ñ¡¥Ì¹Ù…±Õ•M¥é”€ôÍ…µÁ±•M¥é”ì(($%Ñ¡¥Ì¹Í•ÑÑ¥¹Ì€ô¹Õ±°ì($%Ñ¡¥Ì¹•™…Õ±ÑM•ÑÑ¥¹Í|€ôíôì((%ô((%•Ù…±Õ…Ñ” Ð€¤ì(($%½¹ÍÐÁÀ€ôÑ¡¥Ì¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ìì($%±•Ð¤Ä€ôÑ¡¥Ì¹}…¡•‘%¹‘•à°($$%ÐÄ€ôÁÁl¤Ät°($$%ÐÀ€ôÁÁl¤Ä€´€Ätì(($%Ù…±¥‘…Ñ•}¥¹Ñ•ÉÙ…°èì(($$%Í••¬èì(($$$%±•ÐÉ¥¡Ðì(($$$%±¥¹•…É}Í…¸èì(($$$$$¼¼´M•”¡ÑÑÀè¼½©ÍÁ•É˜¹½´½½µÁ…É¥Í½¸µÑ¼µÕ¹‘•™¥¹•¼Ì($$$$$¼¼´Í±½Ý•È½‘”è($$$$$¼¼´($$$$$¼¼´€$$$%¥˜€ Ð€øôÐÄñðÐÄ€ôôôÕ¹‘•™¥¹•€¤ì($$$$%™½ÉÝ…É‘}Í…¸è¥˜€ €„€ Ð€ðÐÄ€¤€¤ì(($$$$$%™½È€ ±•Ð¥Ù•UÁÐ€ô¤Ä€¬€Èì€ì€¤ì(($$$$$$%¥˜€ ÐÄ€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$$$%¥˜€ Ð€ðÐÀ€¤‰É•…¬™½ÉÝ…É‘}Í…¸ì(($$$$$$$$¼¼…™Ñ•È•¹(($$$$$$$%¤Ä€ôÁÀ¹±•¹Ñ ì($$$$$$$%Ñ¡¥Ì¹}…¡•‘%¹‘•à€ô¤Äì($$$$$$$%É•ÑÕÉ¸Ñ¡¥Ì¹½ÁåM…µÁ±•Y…±Õ•| ¤Ä€´€Ä€¤ì(($$$$$$%ô(($$$$$$%¥˜€ ¤Ä€ôôô¥Ù•UÁÐ€¤‰É•…¬ì€¼¼Ñ¡¥Ì±½½À(($$$$$$%ÐÀ€ôÐÄì($$$$$$%ÐÄ€ôÁÁl€¬¬¤Ätì(($$$$$$%¥˜€ Ð€ðÐÄ€¤ì(($$$$$$$$¼¼Ý”¡…Ù”…ÉÉ¥Ù•…ÐÑ¡”Í½Õ¡Ð¥¹Ñ•ÉÙ…°($$$$$$$%‰É•…¬Í••¬ì(($$$$$$%ô(($$$$$%ô(($$$$$$¼¼ÁÉ•Á…É”‰¥¹…ÉäÍ•…É ½¸Ñ¡”É¥¡ÐÍ¥‘”½˜Ñ¡”¥¹‘•à($$$$$%É¥¡Ð€ôÁÀ¹±•¹Ñ ì($$$$$%‰É•…¬±¥¹•…É}Í…¸ì(($$$$%ô(($$$$$¼¼´Í±½Ý•È½‘”è($$$$$¼¼´$$$$%¥˜€ Ð€ðÐÀñðÐÀ€ôôôÕ¹‘•™¥¹•€¤ì($$$$%¥˜€ €„€ Ð€øôÐÀ€¤€¤ì(($$$$$$¼¼±½½Á¥¹œü(($$$$$%½¹ÍÐÐÅ±½‰…°€ôÁÁl€Ätì(($$$$$%¥˜€ Ð€ðÐÅ±½‰…°€¤ì(($$$$$$%¤Ä€ô€Èì€¼¼€¬€Ä°ÕÍ¥¹œÑ¡”Í…¸™½ÈÑ¡”‘•Ñ…¥±Ì($$$$$$%ÐÀ€ôÐÅ±½‰…°ì(($$$$$%ô(($$$$$$¼¼±¥¹•…ÈÉ•Ù•ÉÍ”Í…¸(($$$$$%™½È€ ±•Ð¥Ù•UÁÐ€ô¤Ä€´€Èì€ì€¤ì(($$$$$$%¥˜€ ÐÀ€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$$$$¼¼‰•™½É”ÍÑ…ÉÐ(($$$$$$$%Ñ¡¥Ì¹}…¡•‘%¹‘•à€ô€Àì($$$$$$$%É•ÑÕÉ¸Ñ¡¥Ì¹½ÁåM…µÁ±•Y…±Õ•| €À€¤ì(($$$$$$%ô(($$$$$$%¥˜€ ¤Ä€ôôô¥Ù•UÁÐ€¤‰É•…¬ì€¼¼Ñ¡¥Ì±½½À(($$$$$$%ÐÄ€ôÐÀì($$$$$$%ÐÀ€ôÁÁl€´´¤Ä€´€Ätì(($$$$$$%¥˜€ Ð€øôÐÀ€¤ì(($$$$$$$$¼¼Ý”¡…Ù”…ÉÉ¥Ù•…ÐÑ¡”Í½Õ¡Ð¥¹Ñ•ÉÙ…°($$$$$$$%‰É•…¬Í••¬ì(($$$$$$%ô(($$$$$%ô(($$$$$$¼¼ÁÉ•Á…É”‰¥¹…ÉäÍ•…É ½¸Ñ¡”±•™ÐÍ¥‘”½˜Ñ¡”¥¹‘•à($$$$$%É¥¡Ð€ô¤Äì($$$$$%¤Ä€ô€Àì($$$$$%‰É•…¬±¥¹•…É}Í…¸ì(($$$$%ô(($$$$$¼¼Ñ¡”¥¹Ñ•ÉÙ…°¥ÌÙ…±¥(($$$$%‰É•…¬Ù…±¥‘…Ñ•}¥¹Ñ•ÉÙ…°ì(($$$%ô€¼¼±¥¹•…ÈÍ…¸(($$$$¼¼‰¥¹…ÉäÍ•…É (($$$%Ý¡¥±”€ ¤Ä€ðÉ¥¡Ð€¤ì(($$$$%½¹ÍÐµ¥€ô€ ¤Ä€¬É¥¡Ð€¤€øøø€Äì(($$$$%¥˜€ Ð€ðÁÁlµ¥t€¤ì(($$$$$%É¥¡Ð€ôµ¥ì(($$$$%ô•±Í”ì(($$$$$%¤Ä€ôµ¥€¬€Äì(($$$$%ô(($$$%ô(($$$%ÐÄ€ôÁÁl¤Ätì($$$%ÐÀ€ôÁÁl¤Ä€´€Ätì(($$$$¼¼¡•¬‰½Õ¹‘…Éä…Í•Ì°……¥¸(($$$%¥˜€ ÐÀ€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%Ñ¡¥Ì¹}…¡•‘%¹‘•à€ô€Àì($$$$%É•ÑÕÉ¸Ñ¡¥Ì¹½ÁåM…µÁ±•Y…±Õ•| €À€¤ì(($$$%ô(($$$%¥˜€ ÐÄ€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%¤Ä€ôÁÀ¹±•¹Ñ ì($$$$%Ñ¡¥Ì¹}…¡•‘%¹‘•à€ô¤Äì($$$$%É•ÑÕÉ¸Ñ¡¥Ì¹½ÁåM…µÁ±•Y…±Õ•| ¤Ä€´€Ä€¤ì(($$$%ô(($$%ô€¼¼Í••¬(($$%Ñ¡¥Ì¹}…¡•‘%¹‘•à€ô¤Äì(($$%Ñ¡¥Ì¹¥¹Ñ•ÉÙ…±¡…¹•‘| ¤Ä°ÐÀ°ÐÄ€¤ì(($%ô€¼¼Ù…±¥‘…Ñ•}¥¹Ñ•ÉÙ…°(($%É•ÑÕÉ¸Ñ¡¥Ì¹¥¹Ñ•ÉÁ½±…Ñ•| ¤Ä°ÐÀ°Ð°ÐÄ€¤ì((%ô((%•ÑM•ÑÑ¥¹Í| ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•ÑÑ¥¹ÌñðÑ¡¥Ì¹•™…Õ±ÑM•ÑÑ¥¹Í|ì((%ô((%½ÁåM…µÁ±•Y…±Õ•| ¥¹‘•à€¤ì(($$¼¼½Á¥•Ì„Í…µÁ±”Ù…±Õ”Ñ¼Ñ¡”É•ÍÕ±Ð‰Õ™™•È(($%½¹ÍÐÉ•ÍÕ±Ð€ôÑ¡¥Ì¹É•ÍÕ±Ñ	Õ™™•È°($$%Ù…±Õ•Ì€ôÑ¡¥Ì¹Í…µÁ±•Y…±Õ•Ì°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°($$%½™™Í•Ð€ô¥¹‘•à€¨ÍÑÉ¥‘”ì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$%É•ÍÕ±Ñl¤t€ôÙ…±Õ•Íl½™™Í•Ð€¬¤tì(($%ô(($%É•ÑÕÉ¸É•ÍÕ±Ðì((%ô(($¼¼Q•µÁ±…Ñ”µ•Ñ¡½‘Ì™½È‘•É¥Ù•±…ÍÍ•Ìè((%¥¹Ñ•ÉÁ½±…Ñ•| €¼¨¤Ä°ÐÀ°Ð°ÐÄ€¨¼€¤ì(($%Ñ¡É½Ü¹•ÜÉÉ½È €…±°Ñ¼…‰ÍÑÉ…Ðµ•Ñ¡½œ€¤ì($$¼¼¥µÁ±•µ•¹Ñ…Ñ¥½¹ÌÍ¡…±°É•ÑÕÉ¸Ñ¡¥Ì¹É•ÍÕ±Ñ	Õ™™•È((%ô((%¥¹Ñ•ÉÙ…±¡…¹•‘| €¼¨¤Ä°ÐÀ°ÐÄ€¨¼€¤ì(($$¼¼•µÁÑä((%ô()ô((¼¨¨(€¨…ÍÐ…¹Í¥µÁ±”Õ‰¥ŒÍÁ±¥¹”¥¹Ñ•ÉÁ½±…¹Ð¸(€¨(€¨%ÐÝ…Ì‘•É¥Ù•™É½´„!•Éµ¥Ñ¥…¸½¹ÍÑÉÕÑ¥½¸Í•ÑÑ¥¹œÑ¡”™¥ÉÍÐ‘•É¥Ù…Ñ¥Ù”(€¨…Ð•… Í…µÁ±”Á½Í¥Ñ¥½¸Ñ¼Ñ¡”±¥¹•…ÈÍ±½Á”‰•ÑÝ••¸¹•¥¡‰½É¥¹œÁ½Í¥Ñ¥½¹Ì(€¨½Ù•ÈÑ¡•¥ÈÁ…É…µ•Ñ•È¥¹Ñ•ÉÙ…°¸(€¨¼()±…ÍÌÕ‰¥%¹Ñ•ÉÁ½±…¹Ð•áÑ•¹‘Ì%¹Ñ•ÉÁ½±…¹Ðì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì(($%ÍÕÁ•È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì(($%Ñ¡¥Ì¹}Ý•¥¡ÑAÉ•Ø€ô€´€Àì($%Ñ¡¥Ì¹}½™™Í•ÑAÉ•Ø€ô€´€Àì($%Ñ¡¥Ì¹}Ý•¥¡Ñ9•áÐ€ô€´€Àì($%Ñ¡¥Ì¹}½™™Í•Ñ9•áÐ€ô€´€Àì(($%Ñ¡¥Ì¹•™…Õ±ÑM•ÑÑ¥¹Í|€ôì(($$%•¹‘¥¹MÑ…ÉÐèi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ°($$%•¹‘¥¹¹èi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ(($%ôì((%ô((%¥¹Ñ•ÉÙ…±¡…¹•‘| ¤Ä°ÐÀ°ÐÄ€¤ì(($%½¹ÍÐÁÀ€ôÑ¡¥Ì¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ìì($%±•Ð¥AÉ•Ø€ô¤Ä€´€È°($$%¥9•áÐ€ô¤Ä€¬€Ä°(($$%ÑAÉ•Ø€ôÁÁl¥AÉ•Øt°($$%Ñ9•áÐ€ôÁÁl¥9•áÐtì(($%¥˜€ ÑAÉ•Ø€ôôôÕ¹‘•™¥¹•€¤ì(($$%ÍÝ¥Ñ € Ñ¡¥Ì¹•ÑM•ÑÑ¥¹Í| ¤¹•¹‘¥¹MÑ…ÉÐ€¤ì(($$$%…Í”i•É½M±½Á•¹‘¥¹œè(($$$$$¼¼˜œ¡ÐÀ¤€ô€À($$$$%¥AÉ•Ø€ô¤Äì($$$$%ÑAÉ•Ø€ô€È€¨ÐÀ€´ÐÄì(($$$$%‰É•…¬ì(($$$%…Í”]É…ÁÉ½Õ¹‘¹‘¥¹œè(($$$$$¼¼ÕÍ”Ñ¡”½Ñ¡•È•¹½˜Ñ¡”ÕÉÙ”($$$$%¥AÉ•Ø€ôÁÀ¹±•¹Ñ €´€Èì($$$$%ÑAÉ•Ø€ôÐÀ€¬ÁÁl¥AÉ•Øt€´ÁÁl¥AÉ•Ø€¬€Ätì(($$$$%‰É•…¬ì(($$$%‘•™…Õ±Ðè€¼¼i•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ(($$$$$¼¼˜œœ¡ÐÀ¤€ô€À„¹¬¹„¸9…ÑÕÉ…°MÁ±¥¹”($$$$%¥AÉ•Ø€ô¤Äì($$$$%ÑAÉ•Ø€ôÐÄì(($$%ô(($%ô(($%¥˜€ Ñ9•áÐ€ôôôÕ¹‘•™¥¹•€¤ì(($$%ÍÝ¥Ñ € Ñ¡¥Ì¹•ÑM•ÑÑ¥¹Í| ¤¹•¹‘¥¹¹€¤ì(($$$%…Í”i•É½M±½Á•¹‘¥¹œè(($$$$$¼¼˜œ¡Ñ8¤€ô€À($$$$%¥9•áÐ€ô¤Äì($$$$%Ñ9•áÐ€ô€È€¨ÐÄ€´ÐÀì(($$$$%‰É•…¬ì(($$$%…Í”]É…ÁÉ½Õ¹‘¹‘¥¹œè(($$$$$¼¼ÕÍ”Ñ¡”½Ñ¡•È•¹½˜Ñ¡”ÕÉÙ”($$$$%¥9•áÐ€ô€Äì($$$$%Ñ9•áÐ€ôÐÄ€¬ÁÁl€Ät€´ÁÁl€Àtì(($$$$%‰É•…¬ì(($$$%‘•™…Õ±Ðè€¼¼i•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ(($$$$$¼¼˜œœ¡Ñ8¤€ô€À°„¹¬¹„¸9…ÑÕÉ…°MÁ±¥¹”($$$$%¥9•áÐ€ô¤Ä€´€Äì($$$$%Ñ9•áÐ€ôÐÀì(($$%ô(($%ô(($%½¹ÍÐ¡…±™Ð€ô€ ÐÄ€´ÐÀ€¤€¨€À¸Ô°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”ì(($%Ñ¡¥Ì¹}Ý•¥¡ÑAÉ•Ø€ô¡…±™Ð€¼€ ÐÀ€´ÑAÉ•Ø€¤ì($%Ñ¡¥Ì¹}Ý•¥¡Ñ9•áÐ€ô¡…±™Ð€¼€ Ñ9•áÐ€´ÐÄ€¤ì($%Ñ¡¥Ì¹}½™™Í•ÑAÉ•Ø€ô¥AÉ•Ø€¨ÍÑÉ¥‘”ì($%Ñ¡¥Ì¹}½™™Í•Ñ9•áÐ€ô¥9•áÐ€¨ÍÑÉ¥‘”ì((%ô((%¥¹Ñ•ÉÁ½±…Ñ•| ¤Ä°ÐÀ°Ð°ÐÄ€¤ì(($%½¹ÍÐÉ•ÍÕ±Ð€ôÑ¡¥Ì¹É•ÍÕ±Ñ	Õ™™•È°($$%Ù…±Õ•Ì€ôÑ¡¥Ì¹Í…µÁ±•Y…±Õ•Ì°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°(($$%¼Ä€ô¤Ä€¨ÍÑÉ¥‘”°$%¼À€ô¼Ä€´ÍÑÉ¥‘”°($$%½@€ôÑ¡¥Ì¹}½™™Í•ÑAÉ•Ø°€%½8€ôÑ¡¥Ì¹}½™™Í•Ñ9•áÐ°($$%Ý@€ôÑ¡¥Ì¹}Ý•¥¡ÑAÉ•Ø°%Ý8€ôÑ¡¥Ì¹}Ý•¥¡Ñ9•áÐ°(($$%À€ô€ Ð€´ÐÀ€¤€¼€ ÐÄ€´ÐÀ€¤°($$%ÁÀ€ôÀ€¨À°($$%ÁÁÀ€ôÁÀ€¨Àì(($$¼¼•Ù…±Õ…Ñ”Á½±å¹½µ¥…±Ì(($%½¹ÍÐÍ@€ô€´Ý@€¨ÁÁÀ€¬€È€¨Ý@€¨ÁÀ€´Ý@€¨Àì($%½¹ÍÐÌÀ€ô€ €Ä€¬Ý@€¤€¨ÁÁÀ€¬€ €´€Ä¸Ô€´€È€¨Ý@€¤€¨ÁÀ€¬€ €´€À¸Ô€¬Ý@€¤€¨À€¬€Äì($%½¹ÍÐÌÄ€ô€ €´€Ä€´Ý8€¤€¨ÁÁÀ€¬€ €Ä¸Ô€¬Ý8€¤€¨ÁÀ€¬€À¸Ô€¨Àì($%½¹ÍÐÍ8€ôÝ8€¨ÁÁÀ€´Ý8€¨ÁÀì(($$¼¼½µ‰¥¹”‘…Ñ„±¥¹•…É±ä(($%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$%É•ÍÕ±Ñl¤t€ô($$$$%Í@€¨Ù…±Õ•Íl½@€¬¤t€¬($$$$%ÌÀ€¨Ù…±Õ•Íl¼À€¬¤t€¬($$$$%ÌÄ€¨Ù…±Õ•Íl¼Ä€¬¤t€¬($$$$%Í8€¨Ù…±Õ•Íl½8€¬¤tì(($%ô(($%É•ÑÕÉ¸É•ÍÕ±Ðì((%ô()ô()±…ÍÌ1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð•áÑ•¹‘Ì%¹Ñ•ÉÁ½±…¹Ðì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì(($%ÍÕÁ•È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì((%ô((%¥¹Ñ•ÉÁ½±…Ñ•| ¤Ä°ÐÀ°Ð°ÐÄ€¤ì(($%½¹ÍÐÉ•ÍÕ±Ð€ôÑ¡¥Ì¹É•ÍÕ±Ñ	Õ™™•È°($$%Ù…±Õ•Ì€ôÑ¡¥Ì¹Í…µÁ±•Y…±Õ•Ì°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°(($$%½™™Í•ÐÄ€ô¤Ä€¨ÍÑÉ¥‘”°($$%½™™Í•ÐÀ€ô½™™Í•ÐÄ€´ÍÑÉ¥‘”°(($$%Ý•¥¡ÐÄ€ô€ Ð€´ÐÀ€¤€¼€ ÐÄ€´ÐÀ€¤°($$%Ý•¥¡ÐÀ€ô€Ä€´Ý•¥¡ÐÄì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$%É•ÍÕ±Ñl¤t€ô($$$$%Ù…±Õ•Íl½™™Í•ÐÀ€¬¤t€¨Ý•¥¡ÐÀ€¬($$$$%Ù…±Õ•Íl½™™Í•ÐÄ€¬¤t€¨Ý•¥¡ÐÄì(($%ô(($%É•ÑÕÉ¸É•ÍÕ±Ðì((%ô()ô((¼¨¨(€¨(€¨%¹Ñ•ÉÁ½±…¹ÐÑ¡…Ð•Ù…±Õ…Ñ•ÌÑ¼Ñ¡”Í…µÁ±”Ù…±Õ”…ÐÑ¡”Á½Í¥Ñ¥½¸ÁÉ••‘¥¹œ(€¨Ñ¡”Á…É…µ•Ñ•È¸(€¨¼()±…ÍÌ¥ÍÉ•Ñ•%¹Ñ•ÉÁ½±…¹Ð•áÑ•¹‘Ì%¹Ñ•ÉÁ½±…¹Ðì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì(($%ÍÕÁ•È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì((%ô((%¥¹Ñ•ÉÁ½±…Ñ•| ¤Ä€¼¨°ÐÀ°Ð°ÐÄ€¨¼€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹½ÁåM…µÁ±•Y…±Õ•| ¤Ä€´€Ä€¤ì((%ô()ô()±…ÍÌ-•å™É…µ•QÉ…¬ì((%½¹ÍÑÉÕÑ½È ¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì°¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($%¥˜€ ¹…µ”€ôôôÕ¹‘•™¥¹•€¤Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èÑÉ…¬¹…µ”¥ÌÕ¹‘•™¥¹•œ€¤ì($%¥˜€ Ñ¥µ•Ì€ôôôÕ¹‘•™¥¹•ñðÑ¥µ•Ì¹±•¹Ñ €ôôô€À€¤Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬è¹¼­•å™É…µ•Ì¥¸ÑÉ…¬¹…µ•€œ€¬¹…µ”€¤ì(($%Ñ¡¥Ì¹¹…µ”€ô¹…µ”ì(($%Ñ¡¥Ì¹Ñ¥µ•Ì€ô½¹Ù•ÉÑÉÉ…ä Ñ¥µ•Ì°Ñ¡¥Ì¹Q¥µ•	Õ™™•ÉQåÁ”€¤ì($%Ñ¡¥Ì¹Ù…±Õ•Ì€ô½¹Ù•ÉÑÉÉ…ä Ù…±Õ•Ì°Ñ¡¥Ì¹Y…±Õ•	Õ™™•ÉQåÁ”€¤ì(($%Ñ¡¥Ì¹Í•Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸ ¥¹Ñ•ÉÁ½±…Ñ¥½¸ñðÑ¡¥Ì¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì((%ô(($¼¼M•É¥…±¥é…Ñ¥½¸€¡¥¸ÍÑ…Ñ¥Œ½¹Ñ•áÐ°‰•…ÕÍ”½˜½¹ÍÑÉÕÑ½È¥¹Ù½…Ñ¥½¸($¼¼…¹…ÕÑ½µ…Ñ¥Œ¥¹Ù½…Ñ¥½¸½˜€¹Ñ½)M=8¤è((%ÍÑ…Ñ¥ŒÑ½)M=8 ÑÉ…¬€¤ì(($%½¹ÍÐÑÉ…­QåÁ”€ôÑÉ…¬¹½¹ÍÑÉÕÑ½Èì(($%±•Ð©Í½¸ì(($$¼¼‘•É¥Ù•±…ÍÍ•Ì…¸‘•™¥¹”„ÍÑ…Ñ¥ŒÑ½)M=8µ•Ñ¡½($%¥˜€ ÑÉ…­QåÁ”¹Ñ½)M=8€„ôôÑ¡¥Ì¹Ñ½)M=8€¤ì(($$%©Í½¸€ôÑÉ…­QåÁ”¹Ñ½)M=8 ÑÉ…¬€¤ì(($%ô•±Í”ì(($$$¼¼‰ä‘•™…Õ±Ð°Ý”…ÍÍÕµ”Ñ¡”‘…Ñ„…¸‰”Í•É¥…±¥é•…Ìµ¥Ì($$%©Í½¸€ôì(($$$$¹…µ”œèÑÉ…¬¹¹…µ”°($$$$Ñ¥µ•Ìœè½¹Ù•ÉÑÉÉ…ä ÑÉ…¬¹Ñ¥µ•Ì°ÉÉ…ä€¤°($$$$Ù…±Õ•Ìœè½¹Ù•ÉÑÉÉ…ä ÑÉ…¬¹Ù…±Õ•Ì°ÉÉ…ä€¤(($$%ôì(($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…Ñ¥½¸€ôÑÉ…¬¹•Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸ ¤ì(($$%¥˜€ ¥¹Ñ•ÉÁ½±…Ñ¥½¸€„ôôÑÉ…¬¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($$$%©Í½¸¹¥¹Ñ•ÉÁ½±…Ñ¥½¸€ô¥¹Ñ•ÉÁ½±…Ñ¥½¸ì(($$%ô(($%ô(($%©Í½¸¹ÑåÁ”€ôÑÉ…¬¹Y…±Õ•QåÁ•9…µ”ì€¼¼µ…¹‘…Ñ½Éä(($%É•ÑÕÉ¸©Í½¸ì((%ô((%%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘¥ÍÉ•Ñ” É•ÍÕ±Ð€¤ì(($%É•ÑÕÉ¸¹•Ü¥ÍÉ•Ñ•%¹Ñ•ÉÁ½±…¹Ð Ñ¡¥Ì¹Ñ¥µ•Ì°Ñ¡¥Ì¹Ù…±Õ•Ì°Ñ¡¥Ì¹•ÑY…±Õ•M¥é” ¤°É•ÍÕ±Ð€¤ì((%ô((%%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…È É•ÍÕ±Ð€¤ì(($%É•ÑÕÉ¸¹•Ü1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð Ñ¡¥Ì¹Ñ¥µ•Ì°Ñ¡¥Ì¹Ù…±Õ•Ì°Ñ¡¥Ì¹•ÑY…±Õ•M¥é” ¤°É•ÍÕ±Ð€¤ì((%ô((%%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ  É•ÍÕ±Ð€¤ì(($%É•ÑÕÉ¸¹•ÜÕ‰¥%¹Ñ•ÉÁ½±…¹Ð Ñ¡¥Ì¹Ñ¥µ•Ì°Ñ¡¥Ì¹Ù…±Õ•Ì°Ñ¡¥Ì¹•ÑY…±Õ•M¥é” ¤°É•ÍÕ±Ð€¤ì((%ô((%Í•Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸ ¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($%±•Ð™…Ñ½Éå5•Ñ¡½ì(($%ÍÝ¥Ñ € ¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($$%…Í”%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”è(($$$%™…Ñ½Éå5•Ñ¡½€ôÑ¡¥Ì¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘¥ÍÉ•Ñ”ì(($$$%‰É•…¬ì(($$%…Í”%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Èè(($$$%™…Ñ½Éå5•Ñ¡½€ôÑ¡¥Ì¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…Èì(($$$%‰É•…¬ì(($$%…Í”%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ è(($$$%™…Ñ½Éå5•Ñ¡½€ôÑ¡¥Ì¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ ì(($$$%‰É•…¬ì(($%ô(($%¥˜€ ™…Ñ½Éå5•Ñ¡½€ôôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐµ•ÍÍ…”€ô€Õ¹ÍÕÁÁ½ÉÑ•¥¹Ñ•ÉÁ½±…Ñ¥½¸™½È€œ€¬($$$%Ñ¡¥Ì¹Y…±Õ•QåÁ•9…µ”€¬€œ­•å™É…µ”ÑÉ…¬¹…µ•€œ€¬Ñ¡¥Ì¹¹…µ”ì(($$%¥˜€ Ñ¡¥Ì¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð€ôôôÕ¹‘•™¥¹•€¤ì(($$$$¼¼™…±°‰…¬Ñ¼‘•™…Õ±Ð°Õ¹±•ÍÌÑ¡”‘•™…Õ±Ð¥ÑÍ•±˜¥Ìµ•ÍÍ•ÕÀ($$$%¥˜€ ¥¹Ñ•ÉÁ½±…Ñ¥½¸€„ôôÑ¡¥Ì¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($$$$%Ñ¡¥Ì¹Í•Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸ Ñ¡¥Ì¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($$$%ô•±Í”ì(($$$$%Ñ¡É½Ü¹•ÜÉÉ½È µ•ÍÍ…”€¤ì€¼¼™…Ñ…°°¥¸Ñ¡¥Ì…Í”(($$$%ô(($$%ô(($$%½¹Í½±”¹Ý…É¸ €Q!I¹-•å™É…µ•QÉ…¬èœ°µ•ÍÍ…”€¤ì($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ô(($%Ñ¡¥Ì¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð€ô™…Ñ½Éå5•Ñ¡½ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸ ¤ì(($%ÍÝ¥Ñ € Ñ¡¥Ì¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð€¤ì(($$%…Í”Ñ¡¥Ì¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘¥ÍÉ•Ñ”è(($$$%É•ÑÕÉ¸%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”ì(($$%…Í”Ñ¡¥Ì¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…Èè(($$$%É•ÑÕÉ¸%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Èì(($$%…Í”Ñ¡¥Ì¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ è(($$$%É•ÑÕÉ¸%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ ì(($%ô((%ô((%•ÑY…±Õ•M¥é” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Ù…±Õ•Ì¹±•¹Ñ €¼Ñ¡¥Ì¹Ñ¥µ•Ì¹±•¹Ñ ì((%ô(($¼¼µ½Ù”…±°­•å™É…µ•Ì•¥Ñ¡•È™½ÉÝ…É‘Ì½È‰…­Ý…É‘Ì¥¸Ñ¥µ”(%Í¡¥™Ð Ñ¥µ•=™™Í•Ð€¤ì(($%¥˜€ Ñ¥µ•=™™Í•Ð€„ôô€À¸À€¤ì(($$%½¹ÍÐÑ¥µ•Ì€ôÑ¡¥Ì¹Ñ¥µ•Ìì(($$%™½È€ ±•Ð¤€ô€À°¸€ôÑ¥µ•Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%Ñ¥µ•Íl¤t€¬ôÑ¥µ•=™™Í•Ðì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼Í…±”…±°­•å™É…µ”Ñ¥µ•Ì‰ä„™…Ñ½È€¡ÕÍ•™Õ°™½È™É…µ”€ð´øÍ•½¹‘Ì½¹Ù•ÉÍ¥½¹Ì¤(%Í…±” Ñ¥µ•M…±”€¤ì(($%¥˜€ Ñ¥µ•M…±”€„ôô€Ä¸À€¤ì(($$%½¹ÍÐÑ¥µ•Ì€ôÑ¡¥Ì¹Ñ¥µ•Ìì(($$%™½È€ ±•Ð¤€ô€À°¸€ôÑ¥µ•Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%Ñ¥µ•Íl¤t€¨ôÑ¥µ•M…±”ì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼É•µ½Ù•Ì­•å™É…µ•Ì‰•™½É”…¹…™Ñ•È…¹¥µ…Ñ¥½¸Ý¥Ñ¡½ÕÐ¡…¹¥¹œ…¹äÙ…±Õ•ÌÝ¥Ñ¡¥¸Ñ¡”É…¹”mÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ•t¸($¼¼%5A=IQ9Pè]”‘¼¹½ÐÍ¡¥™Ð…É½Õ¹­•åÌÑ¼Ñ¡”ÍÑ…ÉÐ½˜Ñ¡”ÑÉ…¬Ñ¥µ”°‰•…ÕÍ”™½È¥¹Ñ•ÉÁ½±…Ñ•­•åÌÑ¡¥ÌÝ¥±°¡…¹”Ñ¡•¥ÈÙ…±Õ•Ì(%ÑÉ¥´ ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”€¤ì(($%½¹ÍÐÑ¥µ•Ì€ôÑ¡¥Ì¹Ñ¥µ•Ì°($$%¹-•åÌ€ôÑ¥µ•Ì¹±•¹Ñ ì(($%±•Ð™É½´€ô€À°($$%Ñ¼€ô¹-•åÌ€´€Äì(($%Ý¡¥±”€ ™É½´€„ôô¹-•åÌ€˜˜Ñ¥µ•Íl™É½´t€ðÍÑ…ÉÑQ¥µ”€¤ì(($$$¬¬™É½´ì(($%ô(($%Ý¡¥±”€ Ñ¼€„ôô€´€Ä€˜˜Ñ¥µ•ÍlÑ¼t€ø•¹‘Q¥µ”€¤ì(($$$´´Ñ¼ì(($%ô(($$¬¬Ñ¼ì€¼¼¥¹±ÕÍ¥Ù”€´ø•á±ÕÍ¥Ù”‰½Õ¹(($%¥˜€ ™É½´€„ôô€ÀñðÑ¼€„ôô¹-•åÌ€¤ì(($$$¼¼•µÁÑäÑÉ…­Ì…É”™½É‰¥‘‘•¸°Í¼­••À…Ð±•…ÍÐ½¹”­•å™É…µ”($$%¥˜€ ™É½´€øôÑ¼€¤ì(($$$%Ñ¼€ô5…Ñ ¹µ…à Ñ¼°€Ä€¤ì($$$%™É½´€ôÑ¼€´€Äì(($$%ô(($$%½¹ÍÐÍÑÉ¥‘”€ôÑ¡¥Ì¹•ÑY…±Õ•M¥é” ¤ì($$%Ñ¡¥Ì¹Ñ¥µ•Ì€ôÑ¥µ•Ì¹Í±¥” ™É½´°Ñ¼€¤ì($$%Ñ¡¥Ì¹Ù…±Õ•Ì€ôÑ¡¥Ì¹Ù…±Õ•Ì¹Í±¥” ™É½´€¨ÍÑÉ¥‘”°Ñ¼€¨ÍÑÉ¥‘”€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼•¹ÍÕÉ”Ý”‘¼¹½Ð•Ð„…É‰…•%¹…É‰…•=ÕÐÍ¥ÑÕ…Ñ¥½¸°µ…­”ÍÕÉ”ÑÉ…­Ì…É”…Ð±•…ÍÐµ¥¹¥µ…±±äÙ¥…‰±”(%Ù…±¥‘…Ñ” ¤ì(($%±•ÐÙ…±¥€ôÑÉÕ”ì(($%½¹ÍÐÙ…±Õ•M¥é”€ôÑ¡¥Ì¹•ÑY…±Õ•M¥é” ¤ì($%¥˜€ Ù…±Õ•M¥é”€´5…Ñ ¹™±½½È Ù…±Õ•M¥é”€¤€„ôô€À€¤ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬è%¹Ù…±¥Ù…±Õ”Í¥é”¥¸ÑÉ…¬¸œ°Ñ¡¥Ì€¤ì($$%Ù…±¥€ô™…±Í”ì(($%ô(($%½¹ÍÐÑ¥µ•Ì€ôÑ¡¥Ì¹Ñ¥µ•Ì°($$%Ù…±Õ•Ì€ôÑ¡¥Ì¹Ù…±Õ•Ì°(($$%¹-•åÌ€ôÑ¥µ•Ì¹±•¹Ñ ì(($%¥˜€ ¹-•åÌ€ôôô€À€¤ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èQÉ…¬¥Ì•µÁÑä¸œ°Ñ¡¥Ì€¤ì($$%Ù…±¥€ô™…±Í”ì(($%ô(($%±•ÐÁÉ•ÙQ¥µ”€ô¹Õ±°ì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹-•åÌì¤€¬¬€¤ì(($$%½¹ÍÐÕÉÉQ¥µ”€ôÑ¥µ•Íl¤tì(($$%¥˜€ ÑåÁ•½˜ÕÉÉQ¥µ”€ôôô€¹Õµ‰•Èœ€˜˜¥Í9…8 ÕÉÉQ¥µ”€¤€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èQ¥µ”¥Ì¹½Ð„Ù…±¥¹Õµ‰•È¸œ°Ñ¡¥Ì°¤°ÕÉÉQ¥µ”€¤ì($$$%Ù…±¥€ô™…±Í”ì($$$%‰É•…¬ì(($$%ô(($$%¥˜€ ÁÉ•ÙQ¥µ”€„ôô¹Õ±°€˜˜ÁÉ•ÙQ¥µ”€øÕÉÉQ¥µ”€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬è=ÕÐ½˜½É‘•È­•åÌ¸œ°Ñ¡¥Ì°¤°ÕÉÉQ¥µ”°ÁÉ•ÙQ¥µ”€¤ì($$$%Ù…±¥€ô™…±Í”ì($$$%‰É•…¬ì(($$%ô(($$%ÁÉ•ÙQ¥µ”€ôÕÉÉQ¥µ”ì(($%ô(($%¥˜€ Ù…±Õ•Ì€„ôôÕ¹‘•™¥¹•€¤ì(($$%¥˜€ ¥ÍQåÁ•‘ÉÉ…ä Ù…±Õ•Ì€¤€¤ì(($$$%™½È€ ±•Ð¤€ô€À°¸€ôÙ…±Õ•Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$$%½¹ÍÐÙ…±Õ”€ôÙ…±Õ•Íl¤tì(($$$$%¥˜€ ¥Í9…8 Ù…±Õ”€¤€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èY…±Õ”¥Ì¹½Ð„Ù…±¥¹Õµ‰•È¸œ°Ñ¡¥Ì°¤°Ù…±Õ”€¤ì($$$$$%Ù…±¥€ô™…±Í”ì($$$$$%‰É•…¬ì(($$$$%ô(($$$%ô(($$%ô(($%ô(($%É•ÑÕÉ¸Ù…±¥ì((%ô(($¼¼É•µ½Ù•Ì•ÅÕ¥Ù…±•¹ÐÍ•ÅÕ•¹Ñ¥…°­•åÌ…Ì½µµ½¸¥¸µ½ÉÁ Ñ…É•ÐÍ•ÅÕ•¹•Ì($¼¼€ À°À°À°À°Ä°Ä°Ä°À°À°À°À°À°À°À¤€´´ø€ À°À°Ä°Ä°À°À¤(%½ÁÑ¥µ¥é” ¤ì(($$¼¼Ñ¥µ•Ì½ÈÙ…±Õ•Ìµ…ä‰”Í¡…É•Ý¥Ñ ½Ñ¡•ÈÑÉ…­Ì°Í¼½Ù•ÉÝÉ¥Ñ¥¹œ¥ÌÕ¹Í…™”($%½¹ÍÐÑ¥µ•Ì€ôÑ¡¥Ì¹Ñ¥µ•Ì¹Í±¥” ¤°($$%Ù…±Õ•Ì€ôÑ¡¥Ì¹Ù…±Õ•Ì¹Í±¥” ¤°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹•ÑY…±Õ•M¥é” ¤°(($$%Íµ½½Ñ¡%¹Ñ•ÉÁ½±…Ñ¥½¸€ôÑ¡¥Ì¹•Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸ ¤€ôôô%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ °(($$%±…ÍÑ%¹‘•à€ôÑ¥µ•Ì¹±•¹Ñ €´€Äì(($%±•ÐÝÉ¥Ñ•%¹‘•à€ô€Äì(($%™½È€ ±•Ð¤€ô€Äì¤€ð±…ÍÑ%¹‘•àì€¬¬¤€¤ì(($$%±•Ð­••À€ô™…±Í”ì(($$%½¹ÍÐÑ¥µ”€ôÑ¥µ•Íl¤tì($$%½¹ÍÐÑ¥µ•9•áÐ€ôÑ¥µ•Íl¤€¬€Ätì(($$$¼¼É•µ½Ù”…‘©…•¹Ð­•å™É…µ•ÌÍ¡•‘Õ±•…ÐÑ¡”Í…µ”Ñ¥µ”(($$%¥˜€ Ñ¥µ”€„ôôÑ¥µ•9•áÐ€˜˜€ ¤€„ôô€ÄñðÑ¥µ”€„ôôÑ¥µ•Íl€Àt€¤€¤ì(($$$%¥˜€ €„Íµ½½Ñ¡%¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì(($$$$$¼¼É•µ½Ù”Õ¹¹••ÍÍ…Éä­•å™É…µ•ÌÍ…µ”…ÌÑ¡•¥È¹•¥¡‰½ÉÌ(($$$$%½¹ÍÐ½™™Í•Ð€ô¤€¨ÍÑÉ¥‘”°($$$$$%½™™Í•Ñ@€ô½™™Í•Ð€´ÍÑÉ¥‘”°($$$$$%½™™Í•Ñ8€ô½™™Í•Ð€¬ÍÑÉ¥‘”ì(($$$$%™½È€ ±•Ð¨€ô€Àì¨€„ôôÍÑÉ¥‘”ì€¬¬¨€¤ì(($$$$$%½¹ÍÐÙ…±Õ”€ôÙ…±Õ•Íl½™™Í•Ð€¬¨tì(($$$$$%¥˜€ Ù…±Õ”€„ôôÙ…±Õ•Íl½™™Í•Ñ@€¬¨tñð($$$$$$%Ù…±Õ”€„ôôÙ…±Õ•Íl½™™Í•Ñ8€¬¨t€¤ì(($$$$$$%­••À€ôÑÉÕ”ì($$$$$$%‰É•…¬ì(($$$$$%ô(($$$$%ô(($$$%ô•±Í”ì(($$$$%­••À€ôÑÉÕ”ì(($$$%ô(($$%ô(($$$¼¼¥¸µÁ±…”½µÁ…Ñ¥½¸(($$%¥˜€ ­••À€¤ì(($$$%¥˜€ ¤€„ôôÝÉ¥Ñ•%¹‘•à€¤ì(($$$$%Ñ¥µ•ÍlÝÉ¥Ñ•%¹‘•àt€ôÑ¥µ•Íl¤tì(($$$$%½¹ÍÐÉ•…‘=™™Í•Ð€ô¤€¨ÍÑÉ¥‘”°($$$$$%ÝÉ¥Ñ•=™™Í•Ð€ôÝÉ¥Ñ•%¹‘•à€¨ÍÑÉ¥‘”ì(($$$$%™½È€ ±•Ð¨€ô€Àì¨€„ôôÍÑÉ¥‘”ì€¬¬¨€¤ì(($$$$$%Ù…±Õ•ÍlÝÉ¥Ñ•=™™Í•Ð€¬¨t€ôÙ…±Õ•ÍlÉ•…‘=™™Í•Ð€¬¨tì(($$$$%ô(($$$%ô(($$$$¬¬ÝÉ¥Ñ•%¹‘•àì(($$%ô(($%ô(($$¼¼™±ÕÍ ±…ÍÐ­•å™É…µ”€¡½µÁ…Ñ¥½¸±½½­Ì…¡•…¤(($%¥˜€ ±…ÍÑ%¹‘•à€ø€À€¤ì(($$%Ñ¥µ•ÍlÝÉ¥Ñ•%¹‘•àt€ôÑ¥µ•Íl±…ÍÑ%¹‘•àtì(($$%™½È€ ±•ÐÉ•…‘=™™Í•Ð€ô±…ÍÑ%¹‘•à€¨ÍÑÉ¥‘”°ÝÉ¥Ñ•=™™Í•Ð€ôÝÉ¥Ñ•%¹‘•à€¨ÍÑÉ¥‘”°¨€ô€Àì¨€„ôôÍÑÉ¥‘”ì€¬¬¨€¤ì(($$$%Ù…±Õ•ÍlÝÉ¥Ñ•=™™Í•Ð€¬¨t€ôÙ…±Õ•ÍlÉ•…‘=™™Í•Ð€¬¨tì(($$%ô(($$$¬¬ÝÉ¥Ñ•%¹‘•àì(($%ô(($%¥˜€ ÝÉ¥Ñ•%¹‘•à€„ôôÑ¥µ•Ì¹±•¹Ñ €¤ì(($$%Ñ¡¥Ì¹Ñ¥µ•Ì€ôÑ¥µ•Ì¹Í±¥” €À°ÝÉ¥Ñ•%¹‘•à€¤ì($$%Ñ¡¥Ì¹Ù…±Õ•Ì€ôÙ…±Õ•Ì¹Í±¥” €À°ÝÉ¥Ñ•%¹‘•à€¨ÍÑÉ¥‘”€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Ñ¥µ•Ì€ôÑ¥µ•Ìì($$%Ñ¡¥Ì¹Ù…±Õ•Ì€ôÙ…±Õ•Ìì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ¤ì(($%½¹ÍÐÑ¥µ•Ì€ôÑ¡¥Ì¹Ñ¥µ•Ì¹Í±¥” ¤ì($%½¹ÍÐÙ…±Õ•Ì€ôÑ¡¥Ì¹Ù…±Õ•Ì¹Í±¥” ¤ì(($%½¹ÍÐQåÁ•‘-•å™É…µ•QÉ…¬€ôÑ¡¥Ì¹½¹ÍÑÉÕÑ½Èì($%½¹ÍÐÑÉ…¬€ô¹•ÜQåÁ•‘-•å™É…µ•QÉ…¬ Ñ¡¥Ì¹¹…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤ì(($$¼¼%¹Ñ•ÉÁ½±…¹Ð…ÉÕµ•¹ÐÑ¼½¹ÍÑÉÕÑ½È¥Ì¹½ÐÍ…Ù•°Í¼½ÁäÑ¡”™…Ñ½Éäµ•Ñ¡½‘¥É•Ñ±ä¸($%ÑÉ…¬¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ðì(($%É•ÑÕÉ¸ÑÉ…¬ì((%ô()ô()-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Q¥µ•	Õ™™•ÉQåÁ”€ô±½…ÐÌÉÉÉ…äì)-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•	Õ™™•ÉQåÁ”€ô±½…ÐÌÉÉÉ…äì)-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€ô%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Èì((¼¨¨(€¨QÉ…¬½˜	½½±•…¸­•å™É…µ”Ù…±Õ•Ì¸(€¨¼)±…ÍÌ	½½±•…¹-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬íô()	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€‰½½°œì)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•	Õ™™•ÉQåÁ”€ôÉÉ…äì)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€ô%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”ì)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…È€ôÕ¹‘•™¥¹•ì)	½½±•…¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ €ôÕ¹‘•™¥¹•ì((¼¨¨(€¨QÉ…¬½˜­•å™É…µ”Ù…±Õ•ÌÑ¡…ÐÉ•ÁÉ•Í•¹Ð½±½È¸(€¨¼)±…ÍÌ½±½É-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬íô()½±½É-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€½±½Èœì((¼¨¨(€¨QÉ…¬½˜¹Õµ•É¥Œ­•å™É…µ”Ù…±Õ•Ì¸(€¨¼)±…ÍÌ9Õµ‰•É-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬íô()9Õµ‰•É-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€¹Õµ‰•Èœì((¼¨¨(€¨MÁ¡•É¥…°±¥¹•…ÈÕ¹¥ÐÅÕ…Ñ•É¹¥½¸¥¹Ñ•ÉÁ½±…¹Ð¸(€¨¼()±…ÍÌEÕ…Ñ•É¹¥½¹1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð•áÑ•¹‘Ì%¹Ñ•ÉÁ½±…¹Ðì((%½¹ÍÑÉÕÑ½È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì(($%ÍÕÁ•È Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°Í…µÁ±•Y…±Õ•Ì°Í…µÁ±•M¥é”°É•ÍÕ±Ñ	Õ™™•È€¤ì((%ô((%¥¹Ñ•ÉÁ½±…Ñ•| ¤Ä°ÐÀ°Ð°ÐÄ€¤ì(($%½¹ÍÐÉ•ÍÕ±Ð€ôÑ¡¥Ì¹É•ÍÕ±Ñ	Õ™™•È°($$%Ù…±Õ•Ì€ôÑ¡¥Ì¹Í…µÁ±•Y…±Õ•Ì°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°(($$%…±Á¡„€ô€ Ð€´ÐÀ€¤€¼€ ÐÄ€´ÐÀ€¤ì(($%±•Ð½™™Í•Ð€ô¤Ä€¨ÍÑÉ¥‘”ì(($%™½È€ ±•Ð•¹€ô½™™Í•Ð€¬ÍÑÉ¥‘”ì½™™Í•Ð€„ôô•¹ì½™™Í•Ð€¬ô€Ð€¤ì(($$%EÕ…Ñ•É¹¥½¸¹Í±•ÉÁ±…Ð É•ÍÕ±Ð°€À°Ù…±Õ•Ì°½™™Í•Ð€´ÍÑÉ¥‘”°Ù…±Õ•Ì°½™™Í•Ð°…±Á¡„€¤ì(($%ô(($%É•ÑÕÉ¸É•ÍÕ±Ðì((%ô()ô((¼¨¨(€¨QÉ…¬½˜ÅÕ…Ñ•É¹¥½¸­•å™É…µ”Ù…±Õ•Ì¸(€¨¼)±…ÍÌEÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬ì((%%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…È É•ÍÕ±Ð€¤ì(($%É•ÑÕÉ¸¹•ÜEÕ…Ñ•É¹¥½¹1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð Ñ¡¥Ì¹Ñ¥µ•Ì°Ñ¡¥Ì¹Ù…±Õ•Ì°Ñ¡¥Ì¹•ÑY…±Õ•M¥é” ¤°É•ÍÕ±Ð€¤ì((%ô()ô()EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€ÅÕ…Ñ•É¹¥½¸œì(¼¼Y…±Õ•	Õ™™•ÉQåÁ”¥Ì¥¹¡•É¥Ñ•)EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€ô%¹Ñ•ÉÁ½±…Ñ•1¥¹•…Èì)EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ €ôÕ¹‘•™¥¹•ì((¼¨¨(€¨QÉ…¬Ñ¡…Ð¥¹Ñ•ÉÁ½±…Ñ•ÌMÑÉ¥¹Ì(€¨¼)±…ÍÌMÑÉ¥¹-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬íô()MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€ÍÑÉ¥¹œœì)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•	Õ™™•ÉQåÁ”€ôÉÉ…äì)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹•™…Õ±Ñ%¹Ñ•ÉÁ½±…Ñ¥½¸€ô%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”ì)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘1¥¹•…È€ôÕ¹‘•™¥¹•ì)MÑÉ¥¹-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹%¹Ñ•ÉÁ½±…¹Ñ…Ñ½Éå5•Ñ¡½‘Mµ½½Ñ €ôÕ¹‘•™¥¹•ì((¼¨¨(€¨QÉ…¬½˜Ù•Ñ½É•­•å™É…µ”Ù…±Õ•Ì¸(€¨¼)±…ÍÌY•Ñ½É-•å™É…µ•QÉ…¬•áÑ•¹‘Ì-•å™É…µ•QÉ…¬íô()Y•Ñ½É-•å™É…µ•QÉ…¬¹ÁÉ½Ñ½ÑåÁ”¹Y…±Õ•QåÁ•9…µ”€ô€Ù•Ñ½Èœì()±…ÍÌ¹¥µ…Ñ¥½¹±¥Àì((%½¹ÍÑÉÕÑ½È ¹…µ”°‘ÕÉ…Ñ¥½¸€ô€´€Ä°ÑÉ…­Ì°‰±•¹‘5½‘”€ô9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”€¤ì(($%Ñ¡¥Ì¹¹…µ”€ô¹…µ”ì($%Ñ¡¥Ì¹ÑÉ…­Ì€ôÑÉ…­Ìì($%Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ô‘ÕÉ…Ñ¥½¸ì($%Ñ¡¥Ì¹‰±•¹‘5½‘”€ô‰±•¹‘5½‘”ì(($%Ñ¡¥Ì¹ÕÕ¥€ô•¹•É…Ñ•UU% ¤ì(($$¼¼Ñ¡¥Ìµ•…¹Ì¥ÐÍ¡½Õ±™¥ÕÉ”½ÕÐ¥ÑÌ‘ÕÉ…Ñ¥½¸‰äÍ…¹¹¥¹œÑ¡”ÑÉ…­Ì($%¥˜€ Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ð€À€¤ì(($$%Ñ¡¥Ì¹É•Í•ÑÕÉ…Ñ¥½¸ ¤ì(($%ô((%ô(((%ÍÑ…Ñ¥ŒÁ…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐÑÉ…­Ì€ômt°($$%©Í½¹QÉ…­Ì€ô©Í½¸¹ÑÉ…­Ì°($$%™É…µ•Q¥µ”€ô€Ä¸À€¼€ ©Í½¸¹™ÁÌñð€Ä¸À€¤ì(($%™½È€ ±•Ð¤€ô€À°¸€ô©Í½¹QÉ…­Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%ÑÉ…­Ì¹ÁÕÍ  Á…ÉÍ•-•å™É…µ•QÉ…¬ ©Í½¹QÉ…­Íl¤t€¤¹Í…±” ™É…µ•Q¥µ”€¤€¤ì(($%ô(($%½¹ÍÐ±¥À€ô¹•ÜÑ¡¥Ì ©Í½¸¹¹…µ”°©Í½¸¹‘ÕÉ…Ñ¥½¸°ÑÉ…­Ì°©Í½¸¹‰±•¹‘5½‘”€¤ì($%±¥À¹ÕÕ¥€ô©Í½¸¹ÕÕ¥ì(($%É•ÑÕÉ¸±¥Àì((%ô((%ÍÑ…Ñ¥ŒÑ½)M=8 ±¥À€¤ì(($%½¹ÍÐÑÉ…­Ì€ômt°($$%±¥ÁQÉ…­Ì€ô±¥À¹ÑÉ…­Ìì(($%½¹ÍÐ©Í½¸€ôì(($$$¹…µ”œè±¥À¹¹…µ”°($$$‘ÕÉ…Ñ¥½¸œè±¥À¹‘ÕÉ…Ñ¥½¸°($$$ÑÉ…­ÌœèÑÉ…­Ì°($$$ÕÕ¥œè±¥À¹ÕÕ¥°($$$‰±•¹‘5½‘”œè±¥À¹‰±•¹‘5½‘”(($%ôì(($%™½È€ ±•Ð¤€ô€À°¸€ô±¥ÁQÉ…­Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%ÑÉ…­Ì¹ÁÕÍ  -•å™É…µ•QÉ…¬¹Ñ½)M=8 ±¥ÁQÉ…­Íl¤t€¤€¤ì(($%ô(($%É•ÑÕÉ¸©Í½¸ì((%ô((%ÍÑ…Ñ¥ŒÉ•…Ñ•É½µ5½ÉÁ¡Q…É•ÑM•ÅÕ•¹” ¹…µ”°µ½ÉÁ¡Q…É•ÑM•ÅÕ•¹”°™ÁÌ°¹½1½½À€¤ì(($%½¹ÍÐ¹Õµ5½ÉÁ¡Q…É•ÑÌ€ôµ½ÉÁ¡Q…É•ÑM•ÅÕ•¹”¹±•¹Ñ ì($%½¹ÍÐÑÉ…­Ì€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ð¹Õµ5½ÉÁ¡Q…É•ÑÌì¤€¬¬€¤ì(($$%±•ÐÑ¥µ•Ì€ômtì($$%±•ÐÙ…±Õ•Ì€ômtì(($$%Ñ¥µ•Ì¹ÁÕÍ  ($$$$ ¤€¬¹Õµ5½ÉÁ¡Q…É•ÑÌ€´€Ä€¤€”¹Õµ5½ÉÁ¡Q…É•ÑÌ°($$$%¤°($$$$ ¤€¬€Ä€¤€”¹Õµ5½ÉÁ¡Q…É•ÑÌ€¤ì(($$%Ù…±Õ•Ì¹ÁÕÍ  €À°€Ä°€À€¤ì(($$%½¹ÍÐ½É‘•È€ô•Ñ-•å™É…µ•=É‘•È Ñ¥µ•Ì€¤ì($$%Ñ¥µ•Ì€ôÍ½ÉÑ•‘ÉÉ…ä Ñ¥µ•Ì°€Ä°½É‘•È€¤ì($$%Ù…±Õ•Ì€ôÍ½ÉÑ•‘ÉÉ…ä Ù…±Õ•Ì°€Ä°½É‘•È€¤ì(($$$¼¼¥˜Ñ¡•É”¥Ì„­•ä…ÐÑ¡”™¥ÉÍÐ™É…µ”°‘ÕÁ±¥…Ñ”¥Ð…ÌÑ¡”($$$¼¼±…ÍÐ™É…µ”…ÌÝ•±°™½ÈÁ•É™•Ð±½½À¸($$%¥˜€ €„¹½1½½À€˜˜Ñ¥µ•Íl€Àt€ôôô€À€¤ì(($$$%Ñ¥µ•Ì¹ÁÕÍ  ¹Õµ5½ÉÁ¡Q…É•ÑÌ€¤ì($$$%Ù…±Õ•Ì¹ÁÕÍ  Ù…±Õ•Íl€Àt€¤ì(($$%ô(($$%ÑÉ…­Ì¹ÁÕÍ  ($$$%¹•Ü9Õµ‰•É-•å™É…µ•QÉ…¬ ($$$$$œ¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ílœ€¬µ½ÉÁ¡Q…É•ÑM•ÅÕ•¹•l¤t¹¹…µ”€¬€tœ°($$$$%Ñ¥µ•Ì°Ù…±Õ•Ì($$$$¤¹Í…±” €Ä¸À€¼™ÁÌ€¤€¤ì(($%ô(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì ¹…µ”°€´€Ä°ÑÉ…­Ì€¤ì((%ô((%ÍÑ…Ñ¥Œ™¥¹‘	å9…µ” ½‰©•Ñ=É±¥ÁÉÉ…ä°¹…µ”€¤ì(($%±•Ð±¥ÁÉÉ…ä€ô½‰©•Ñ=É±¥ÁÉÉ…äì(($%¥˜€ €„ÉÉ…ä¹¥ÍÉÉ…ä ½‰©•Ñ=É±¥ÁÉÉ…ä€¤€¤ì(($$%½¹ÍÐ¼€ô½‰©•Ñ=É±¥ÁÉÉ…äì($$%±¥ÁÉÉ…ä€ô¼¹•½µ•ÑÉä€˜˜¼¹•½µ•ÑÉä¹…¹¥µ…Ñ¥½¹Ìñð¼¹…¹¥µ…Ñ¥½¹Ìì(($%ô(($%™½È€ ±•Ð¤€ô€Àì¤€ð±¥ÁÉÉ…ä¹±•¹Ñ ì¤€¬¬€¤ì(($$%¥˜€ ±¥ÁÉÉ…ål¤t¹¹…µ”€ôôô¹…µ”€¤ì(($$$%É•ÑÕÉ¸±¥ÁÉÉ…ål¤tì(($$%ô(($%ô(($%É•ÑÕÉ¸¹Õ±°ì((%ô((%ÍÑ…Ñ¥ŒÉ•…Ñ•±¥ÁÍÉ½µ5½ÉÁ¡Q…É•ÑM•ÅÕ•¹•Ì µ½ÉÁ¡Q…É•ÑÌ°™ÁÌ°¹½1½½À€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÌ€ôíôì(($$¼¼Ñ•ÍÑ•Ý¥Ñ ¡ÑÑÁÌè¼½É••àÄÀÄ¹½´¼½¸ÑÉ¥¬Í•ÅÕ•¹•Ì($$¼¼ÍÕ ™±…µ¥¹½}™±å|ÀÀÌ°™±…µ¥¹½}ÉÕ¸Å|ÀÀÌ°É‘•…Ñ ÀÀÔä($%½¹ÍÐÁ…ÑÑ•É¸€ô€½x¡mqÜµt¨ü¤¡mq‘t¬¤¼ì(($$¼¼Í½ÉÐµ½ÉÁ Ñ…É•Ð¹…µ•Ì¥¹Ñ¼…¹¥µ…Ñ¥½¸É½ÕÁÌ‰…Í•($$¼¼Á…ÑÑ•É¹Ì±¥­”]…±­|ÀÀÄ°]…±­|ÀÀÈ°IÕ¹|ÀÀÄ°IÕ¹|ÀÀÈ($%™½È€ ±•Ð¤€ô€À°¥°€ôµ½ÉÁ¡Q…É•ÑÌ¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$%½¹ÍÐµ½ÉÁ¡Q…É•Ð€ôµ½ÉÁ¡Q…É•ÑÍl¤tì($$%½¹ÍÐÁ…ÉÑÌ€ôµ½ÉÁ¡Q…É•Ð¹¹…µ”¹µ…Ñ  Á…ÑÑ•É¸€¤ì(($$%¥˜€ Á…ÉÑÌ€˜˜Á…ÉÑÌ¹±•¹Ñ €ø€Ä€¤ì(($$$%½¹ÍÐ¹…µ”€ôÁ…ÉÑÍl€Ätì(($$$%±•Ð…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ€ô…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÍl¹…µ”tì(($$$%¥˜€ €„…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ€¤ì(($$$$%…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÍl¹…µ”t€ô…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ€ômtì(($$$%ô(($$$%…¹¥µ…Ñ¥½¹5½ÉÁ¡Q…É•ÑÌ¹ÁÕÍ  µ½ÉÁ¡Q…É•Ð€¤ì(($$%ô(($%ô(($%½¹ÍÐ±¥ÁÌ€ômtì(($%™½È€ ½¹ÍÐ¹…µ”¥¸…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÌ€¤ì(($$%±¥ÁÌ¹ÁÕÍ  Ñ¡¥Ì¹É•…Ñ•É½µ5½ÉÁ¡Q…É•ÑM•ÅÕ•¹” ¹…µ”°…¹¥µ…Ñ¥½¹Q½5½ÉÁ¡Q…É•ÑÍl¹…µ”t°™ÁÌ°¹½1½½À€¤€¤ì(($%ô(($%É•ÑÕÉ¸±¥ÁÌì((%ô(($¼¼Á…ÉÍ”Ñ¡”…¹¥µ…Ñ¥½¸¹¡¥•É…É¡ä™½Éµ…Ð(%ÍÑ…Ñ¥ŒÁ…ÉÍ•¹¥µ…Ñ¥½¸ …¹¥µ…Ñ¥½¸°‰½¹•Ì€¤ì(($%¥˜€ €„…¹¥µ…Ñ¥½¸€¤ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹¹¥µ…Ñ¥½¹±¥Àè9¼…¹¥µ…Ñ¥½¸¥¸)M=91½…‘•È‘…Ñ„¸œ€¤ì($$%É•ÑÕÉ¸¹Õ±°ì(($%ô(($%½¹ÍÐ…‘‘9½¹•µÁÑåQÉ…¬€ô™Õ¹Ñ¥½¸€ ÑÉ…­QåÁ”°ÑÉ…­9…µ”°…¹¥µ…Ñ¥½¹-•åÌ°ÁÉ½Á•ÉÑå9…µ”°‘•ÍÑQÉ…­Ì€¤ì(($$$¼¼½¹±äÉ•ÑÕÉ¸ÑÉ…¬¥˜Ñ¡•É”…É”…ÑÕ…±±ä­•åÌ¸($$%¥˜€ …¹¥µ…Ñ¥½¹-•åÌ¹±•¹Ñ €„ôô€À€¤ì(($$$%½¹ÍÐÑ¥µ•Ì€ômtì($$$%½¹ÍÐÙ…±Õ•Ì€ômtì(($$$%™±…ÑÑ•¹)M=8 …¹¥µ…Ñ¥½¹-•åÌ°Ñ¥µ•Ì°Ù…±Õ•Ì°ÁÉ½Á•ÉÑå9…µ”€¤ì(($$$$¼¼•µÁÑä­•åÌ…É”™¥±Ñ•É•½ÕÐ°Í¼¡•¬……¥¸($$$%¥˜€ Ñ¥µ•Ì¹±•¹Ñ €„ôô€À€¤ì(($$$$%‘•ÍÑQÉ…­Ì¹ÁÕÍ  ¹•ÜÑÉ…­QåÁ” ÑÉ…­9…µ”°Ñ¥µ•Ì°Ù…±Õ•Ì€¤€¤ì(($$$%ô(($$%ô(($%ôì(($%½¹ÍÐÑÉ…­Ì€ômtì(($%½¹ÍÐ±¥Á9…µ”€ô…¹¥µ…Ñ¥½¸¹¹…µ”ñð€‘•™…Õ±Ðœì($%½¹ÍÐ™ÁÌ€ô…¹¥µ…Ñ¥½¸¹™ÁÌñð€ÌÀì($%½¹ÍÐ‰±•¹‘5½‘”€ô…¹¥µ…Ñ¥½¸¹‰±•¹‘5½‘”ì(($$¼¼…ÕÑ½µ…Ñ¥Œ±•¹Ñ ‘•Ñ•Éµ¥¹…Ñ¥½¸¥¸¹¥µ…Ñ¥½¹±¥À¸($%±•Ð‘ÕÉ…Ñ¥½¸€ô…¹¥µ…Ñ¥½¸¹±•¹Ñ ñð€´€Äì(($%½¹ÍÐ¡¥•É…É¡åQÉ…­Ì€ô…¹¥µ…Ñ¥½¸¹¡¥•É…É¡äñðmtì(($%™½È€ ±•Ð €ô€Àì €ð¡¥•É…É¡åQÉ…­Ì¹±•¹Ñ ì €¬¬€¤ì(($$%½¹ÍÐ…¹¥µ…Ñ¥½¹-•åÌ€ô¡¥•É…É¡åQÉ…­Íl t¹­•åÌì(($$$¼¼Í­¥À•µÁÑäÑÉ…­Ì($$%¥˜€ €„…¹¥µ…Ñ¥½¹-•åÌñð…¹¥µ…Ñ¥½¹-•åÌ¹±•¹Ñ €ôôô€À€¤½¹Ñ¥¹Õ”ì(($$$¼¼ÁÉ½•ÍÌµ½ÉÁ Ñ…É•ÑÌ($$%¥˜€ …¹¥µ…Ñ¥½¹-•åÍl€Àt¹µ½ÉÁ¡Q…É•ÑÌ€¤ì(($$$$¼¼™¥ÕÉ”½ÕÐ…±°µ½ÉÁ Ñ…É•ÑÌÕÍ•¥¸Ñ¡¥ÌÑÉ…¬($$$%½¹ÍÐµ½ÉÁ¡Q…É•Ñ9…µ•Ì€ôíôì(($$$%±•Ð¬ì(($$$%™½È€ ¬€ô€Àì¬€ð…¹¥µ…Ñ¥½¹-•åÌ¹±•¹Ñ ì¬€¬¬€¤ì(($$$$%¥˜€ …¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÌ€¤ì(($$$$$%™½È€ ±•Ð´€ô€Àì´€ð…¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÌ¹±•¹Ñ ì´€¬¬€¤ì(($$$$$$%µ½ÉÁ¡Q…É•Ñ9…µ•Íl…¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÍl´tt€ô€´€Äì(($$$$$%ô(($$$$%ô(($$$%ô(($$$$¼¼É•…Ñ”„ÑÉ…¬™½È•… µ½ÉÁ Ñ…É•ÐÝ¥Ñ …±°é•É¼($$$$¼¼µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì•á•ÁÐ™½ÈÑ¡”­•åÌ¥¸Ý¡¥ ($$$$¼¼Ñ¡”µ½ÉÁ¡Q…É•Ð¥Ì¹…µ•¸($$$%™½È€ ½¹ÍÐµ½ÉÁ¡Q…É•Ñ9…µ”¥¸µ½ÉÁ¡Q…É•Ñ9…µ•Ì€¤ì(($$$$%½¹ÍÐÑ¥µ•Ì€ômtì($$$$%½¹ÍÐÙ…±Õ•Ì€ômtì(($$$$%™½È€ ±•Ð´€ô€Àì´€„ôô…¹¥µ…Ñ¥½¹-•åÍl¬t¹µ½ÉÁ¡Q…É•ÑÌ¹±•¹Ñ ì€¬¬´€¤ì(($$$$$%½¹ÍÐ…¹¥µ…Ñ¥½¹-•ä€ô…¹¥µ…Ñ¥½¹-•åÍl¬tì(($$$$$%Ñ¥µ•Ì¹ÁÕÍ  …¹¥µ…Ñ¥½¹-•ä¹Ñ¥µ”€¤ì($$$$$%Ù…±Õ•Ì¹ÁÕÍ  € …¹¥µ…Ñ¥½¹-•ä¹µ½ÉÁ¡Q…É•Ð€ôôôµ½ÉÁ¡Q…É•Ñ9…µ”€¤€ü€Ä€è€À€¤ì(($$$$%ô(($$$$%ÑÉ…­Ì¹ÁÕÍ  ¹•Ü9Õµ‰•É-•å™É…µ•QÉ…¬ €œ¹µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•lœ€¬µ½ÉÁ¡Q…É•Ñ9…µ”€¬€tœ°Ñ¥µ•Ì°Ù…±Õ•Ì€¤€¤ì(($$$%ô(($$$%‘ÕÉ…Ñ¥½¸€ôµ½ÉÁ¡Q…É•Ñ9…µ•Ì¹±•¹Ñ €¨™ÁÌì(($$%ô•±Í”ì(($$$$¼¼€¸¸¹…ÍÍÕµ”Í­•±•Ñ…°…¹¥µ…Ñ¥½¸(($$$%½¹ÍÐ‰½¹•9…µ”€ô€œ¹‰½¹•Ílœ€¬‰½¹•Íl t¹¹…µ”€¬€tœì(($$$%…‘‘9½¹•µÁÑåQÉ…¬ ($$$$%Y•Ñ½É-•å™É…µ•QÉ…¬°‰½¹•9…µ”€¬€œ¹Á½Í¥Ñ¥½¸œ°($$$$%…¹¥µ…Ñ¥½¹-•åÌ°€Á½Ìœ°ÑÉ…­Ì€¤ì(($$$%…‘‘9½¹•µÁÑåQÉ…¬ ($$$$%EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬°‰½¹•9…µ”€¬€œ¹ÅÕ…Ñ•É¹¥½¸œ°($$$$%…¹¥µ…Ñ¥½¹-•åÌ°€É½Ðœ°ÑÉ…­Ì€¤ì(($$$%…‘‘9½¹•µÁÑåQÉ…¬ ($$$$%Y•Ñ½É-•å™É…µ•QÉ…¬°‰½¹•9…µ”€¬€œ¹Í…±”œ°($$$$%…¹¥µ…Ñ¥½¹-•åÌ°€Í°œ°ÑÉ…­Ì€¤ì(($$%ô(($%ô(($%¥˜€ ÑÉ…­Ì¹±•¹Ñ €ôôô€À€¤ì(($$%É•ÑÕÉ¸¹Õ±°ì(($%ô(($%½¹ÍÐ±¥À€ô¹•ÜÑ¡¥Ì ±¥Á9…µ”°‘ÕÉ…Ñ¥½¸°ÑÉ…­Ì°‰±•¹‘5½‘”€¤ì(($%É•ÑÕÉ¸±¥Àì((%ô((%É•Í•ÑÕÉ…Ñ¥½¸ ¤ì(($%½¹ÍÐÑÉ…­Ì€ôÑ¡¥Ì¹ÑÉ…­Ìì($%±•Ð‘ÕÉ…Ñ¥½¸€ô€Àì(($%™½È€ ±•Ð¤€ô€À°¸€ôÑÉ…­Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐÑÉ…¬€ôÑ¡¥Ì¹ÑÉ…­Íl¤tì(($$%‘ÕÉ…Ñ¥½¸€ô5…Ñ ¹µ…à ‘ÕÉ…Ñ¥½¸°ÑÉ…¬¹Ñ¥µ•ÍlÑÉ…¬¹Ñ¥µ•Ì¹±•¹Ñ €´€Ät€¤ì(($%ô(($%Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ô‘ÕÉ…Ñ¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÑÉ¥´ ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹ÑÉ…­Íl¤t¹ÑÉ¥´ €À°Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ù…±¥‘…Ñ” ¤ì(($%±•ÐÙ…±¥€ôÑÉÕ”ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ù…±¥€ôÙ…±¥€˜˜Ñ¡¥Ì¹ÑÉ…­Íl¤t¹Ù…±¥‘…Ñ” ¤ì(($%ô(($%É•ÑÕÉ¸Ù…±¥ì((%ô((%½ÁÑ¥µ¥é” ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹ÑÉ…­Íl¤t¹½ÁÑ¥µ¥é” ¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ¤ì(($%½¹ÍÐÑÉ…­Ì€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%ÑÉ…­Ì¹ÁÕÍ  Ñ¡¥Ì¹ÑÉ…­Íl¤t¹±½¹” ¤€¤ì(($%ô(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È Ñ¡¥Ì¹¹…µ”°Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸°ÑÉ…­Ì°Ñ¡¥Ì¹‰±•¹‘5½‘”€¤ì((%ô((%Ñ½)M=8 ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹½¹ÍÑÉÕÑ½È¹Ñ½)M=8 Ñ¡¥Ì€¤ì((%ô()ô()™Õ¹Ñ¥½¸•ÑQÉ…­QåÁ•½ÉY…±Õ•QåÁ•9…µ” ÑåÁ•9…µ”€¤ì((%ÍÝ¥Ñ € ÑåÁ•9…µ”¹Ñ½1½Ý•É…Í” ¤€¤ì(($%…Í”€Í…±…Èœè($%…Í”€‘½Õ‰±”œè($%…Í”€™±½…Ðœè($%…Í”€¹Õµ‰•Èœè($%…Í”€¥¹Ñ••Èœè(($$%É•ÑÕÉ¸9Õµ‰•É-•å™É…µ•QÉ…¬ì(($%…Í”€Ù•Ñ½Èœè($%…Í”€Ù•Ñ½ÈÈœè($%…Í”€Ù•Ñ½ÈÌœè($%…Í”€Ù•Ñ½ÈÐœè(($$%É•ÑÕÉ¸Y•Ñ½É-•å™É…µ•QÉ…¬ì(($%…Í”€½±½Èœè(($$%É•ÑÕÉ¸½±½É-•å™É…µ•QÉ…¬ì(($%…Í”€ÅÕ…Ñ•É¹¥½¸œè(($$%É•ÑÕÉ¸EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬ì(($%…Í”€‰½½°œè($%…Í”€‰½½±•…¸œè(($$%É•ÑÕÉ¸	½½±•…¹-•å™É…µ•QÉ…¬ì(($%…Í”€ÍÑÉ¥¹œœè(($$%É•ÑÕÉ¸MÑÉ¥¹-•å™É…µ•QÉ…¬ì((%ô((%Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èU¹ÍÕÁÁ½ÉÑ•ÑåÁ•9…µ”è€œ€¬ÑåÁ•9…µ”€¤ì()ô()™Õ¹Ñ¥½¸Á…ÉÍ•-•å™É…µ•QÉ…¬ ©Í½¸€¤ì((%¥˜€ ©Í½¸¹ÑåÁ”€ôôôÕ¹‘•™¥¹•€¤ì(($%Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹-•å™É…µ•QÉ…¬èÑÉ…¬ÑåÁ”Õ¹‘•™¥¹•°…¸¹½ÐÁ…ÉÍ”œ€¤ì((%ô((%½¹ÍÐÑÉ…­QåÁ”€ô•ÑQÉ…­QåÁ•½ÉY…±Õ•QåÁ•9…µ” ©Í½¸¹ÑåÁ”€¤ì((%¥˜€ ©Í½¸¹Ñ¥µ•Ì€ôôôÕ¹‘•™¥¹•€¤ì(($%½¹ÍÐÑ¥µ•Ì€ômt°Ù…±Õ•Ì€ômtì(($%™±…ÑÑ•¹)M=8 ©Í½¸¹­•åÌ°Ñ¥µ•Ì°Ù…±Õ•Ì°€Ù…±Õ”œ€¤ì(($%©Í½¸¹Ñ¥µ•Ì€ôÑ¥µ•Ìì($%©Í½¸¹Ù…±Õ•Ì€ôÙ…±Õ•Ìì((%ô(($¼¼‘•É¥Ù•±…ÍÍ•Ì…¸‘•™¥¹”„ÍÑ…Ñ¥ŒÁ…ÉÍ”µ•Ñ¡½(%¥˜€ ÑÉ…­QåÁ”¹Á…ÉÍ”€„ôôÕ¹‘•™¥¹•€¤ì(($%É•ÑÕÉ¸ÑÉ…­QåÁ”¹Á…ÉÍ” ©Í½¸€¤ì((%ô•±Í”ì(($$¼¼‰ä‘•™…Õ±Ð°Ý”…ÍÍÕµ”„½¹ÍÑÉÕÑ½È½µÁ…Ñ¥‰±”Ý¥Ñ Ñ¡”‰…Í”($%É•ÑÕÉ¸¹•ÜÑÉ…­QåÁ” ©Í½¸¹¹…µ”°©Í½¸¹Ñ¥µ•Ì°©Í½¸¹Ù…±Õ•Ì°©Í½¸¹¥¹Ñ•ÉÁ½±…Ñ¥½¸€¤ì((%ô()ô()½¹ÍÐ…¡”€ôì((%•¹…‰±•è™…±Í”°((%™¥±•Ìèíô°((%…‘è™Õ¹Ñ¥½¸€ ­•ä°™¥±”€¤ì(($%¥˜€ Ñ¡¥Ì¹•¹…‰±•€ôôô™…±Í”€¤É•ÑÕÉ¸ì(($$¼¼½¹Í½±”¹±½œ €Q!I¹…¡”œ°€‘‘¥¹œ­•äèœ°­•ä€¤ì(($%Ñ¡¥Ì¹™¥±•Íl­•ät€ô™¥±”ì((%ô°((%•Ðè™Õ¹Ñ¥½¸€ ­•ä€¤ì(($%¥˜€ Ñ¡¥Ì¹•¹…‰±•€ôôô™…±Í”€¤É•ÑÕÉ¸ì(($$¼¼½¹Í½±”¹±½œ €Q!I¹…¡”œ°€¡•­¥¹œ­•äèœ°­•ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹™¥±•Íl­•ätì((%ô°((%É•µ½Ù”è™Õ¹Ñ¥½¸€ ­•ä€¤ì(($%‘•±•Ñ”Ñ¡¥Ì¹™¥±•Íl­•ätì((%ô°((%±•…Èè™Õ¹Ñ¥½¸€ ¤ì(($%Ñ¡¥Ì¹™¥±•Ì€ôíôì((%ô()ôì()±…ÍÌ1½…‘¥¹5…¹…•Èì((%½¹ÍÑÉÕÑ½È ½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%±•Ð¥Í1½…‘¥¹œ€ô™…±Í”ì($%±•Ð¥Ñ•µÍ1½…‘•€ô€Àì($%±•Ð¥Ñ•µÍQ½Ñ…°€ô€Àì($%±•ÐÕÉ±5½‘¥™¥•È€ôÕ¹‘•™¥¹•ì($%½¹ÍÐ¡…¹‘±•ÉÌ€ômtì(($$¼¼I•™•ÈÑ¼€ŒÔØàä™½ÈÑ¡”É•…Í½¸Ý¡äÝ”‘½¸ÐÍ•Ð€¹½¹MÑ…ÉÐ($$¼¼¥¸Ñ¡”½¹ÍÑÉÕÑ½È(($%Ñ¡¥Ì¹½¹MÑ…ÉÐ€ôÕ¹‘•™¥¹•ì($%Ñ¡¥Ì¹½¹1½…€ô½¹1½…ì($%Ñ¡¥Ì¹½¹AÉ½É•ÍÌ€ô½¹AÉ½É•ÍÌì($%Ñ¡¥Ì¹½¹ÉÉ½È€ô½¹ÉÉ½Èì(($%Ñ¡¥Ì¹¥Ñ•µMÑ…ÉÐ€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥Ñ•µÍQ½Ñ…°€¬¬ì(($$%¥˜€ ¥Í1½…‘¥¹œ€ôôô™…±Í”€¤ì(($$$%¥˜€ Í½Á”¹½¹MÑ…ÉÐ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%Í½Á”¹½¹MÑ…ÉÐ ÕÉ°°¥Ñ•µÍ1½…‘•°¥Ñ•µÍQ½Ñ…°€¤ì(($$$%ô(($$%ô(($$%¥Í1½…‘¥¹œ€ôÑÉÕ”ì(($%ôì(($%Ñ¡¥Ì¹¥Ñ•µ¹€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥Ñ•µÍ1½…‘•€¬¬ì(($$%¥˜€ Í½Á”¹½¹AÉ½É•ÍÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Í½Á”¹½¹AÉ½É•ÍÌ ÕÉ°°¥Ñ•µÍ1½…‘•°¥Ñ•µÍQ½Ñ…°€¤ì(($$%ô(($$%¥˜€ ¥Ñ•µÍ1½…‘•€ôôô¥Ñ•µÍQ½Ñ…°€¤ì(($$$%¥Í1½…‘¥¹œ€ô™…±Í”ì(($$$%¥˜€ Í½Á”¹½¹1½…€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%Í½Á”¹½¹1½… ¤ì(($$$%ô(($$%ô(($%ôì(($%Ñ¡¥Ì¹¥Ñ•µÉÉ½È€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥˜€ Í½Á”¹½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Í½Á”¹½¹ÉÉ½È ÕÉ°€¤ì(($$%ô(($%ôì(($%Ñ¡¥Ì¹É•Í½±Ù•UI0€ô™Õ¹Ñ¥½¸€ ÕÉ°€¤ì(($$%¥˜€ ÕÉ±5½‘¥™¥•È€¤ì(($$$%É•ÑÕÉ¸ÕÉ±5½‘¥™¥•È ÕÉ°€¤ì(($$%ô(($$%É•ÑÕÉ¸ÕÉ°ì(($%ôì(($%Ñ¡¥Ì¹Í•ÑUI15½‘¥™¥•È€ô™Õ¹Ñ¥½¸€ ÑÉ…¹Í™½É´€¤ì(($$%ÕÉ±5½‘¥™¥•È€ôÑÉ…¹Í™½É´ì(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ôì(($%Ñ¡¥Ì¹…‘‘!…¹‘±•È€ô™Õ¹Ñ¥½¸€ É••à°±½…‘•È€¤ì(($$%¡…¹‘±•ÉÌ¹ÁÕÍ  É••à°±½…‘•È€¤ì(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ôì(($%Ñ¡¥Ì¹É•µ½Ù•!…¹‘±•È€ô™Õ¹Ñ¥½¸€ É••à€¤ì(($$%½¹ÍÐ¥¹‘•à€ô¡…¹‘±•ÉÌ¹¥¹‘•á=˜ É••à€¤ì(($$%¥˜€ ¥¹‘•à€„ôô€´€Ä€¤ì(($$$%¡…¹‘±•ÉÌ¹ÍÁ±¥” ¥¹‘•à°€È€¤ì(($$%ô(($$%É•ÑÕÉ¸Ñ¡¥Ìì(($%ôì(($%Ñ¡¥Ì¹•Ñ!…¹‘±•È€ô™Õ¹Ñ¥½¸€ ™¥±”€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô¡…¹‘±•ÉÌ¹±•¹Ñ ì¤€ð°ì¤€¬ô€È€¤ì(($$$%½¹ÍÐÉ••à€ô¡…¹‘±•ÉÍl¤tì($$$%½¹ÍÐ±½…‘•È€ô¡…¹‘±•ÉÍl¤€¬€Ätì(($$$%¥˜€ É••à¹±½‰…°€¤É••à¹±…ÍÑ%¹‘•à€ô€Àì€¼¼Í•”€ŒÄÜäÈÀ(($$$%¥˜€ É••à¹Ñ•ÍÐ ™¥±”€¤€¤ì(($$$$%É•ÑÕÉ¸±½…‘•Èì(($$$%ô(($$%ô(($$%É•ÑÕÉ¸¹Õ±°ì(($%ôì((%ô()ô()½¹ÍÐ•™…Õ±Ñ1½…‘¥¹5…¹…•È€ô€¼©}}AUI}|¨¼¹•Ü1½…‘¥¹5…¹…•È ¤ì()±…ÍÌ1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%Ñ¡¥Ì¹µ…¹…•È€ô€ µ…¹…•È€„ôôÕ¹‘•™¥¹•€¤€üµ…¹…•È€è•™…Õ±Ñ1½…‘¥¹5…¹…•Èì(($%Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€ô€…¹½¹åµ½ÕÌœì($%Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€ô™…±Í”ì($%Ñ¡¥Ì¹Á…Ñ €ô€œœì($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ô€œœì($%Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€ôíôì((%ô((%±½… €¼¨ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¨¼€¤íô((%±½…‘Íå¹Œ ÕÉ°°½¹AÉ½É•ÍÌ€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%É•ÑÕÉ¸¹•ÜAÉ½µ¥Í” ™Õ¹Ñ¥½¸€ É•Í½±Ù”°É•©•Ð€¤ì(($$%Í½Á”¹±½… ÕÉ°°É•Í½±Ù”°½¹AÉ½É•ÍÌ°É•©•Ð€¤ì(($%ô€¤ì((%ô((%Á…ÉÍ” €¼¨‘…Ñ„€¨¼€¤íô((%Í•ÑÉ½ÍÍ=É¥¥¸ É½ÍÍ=É¥¥¸€¤ì(($%Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€ôÉ½ÍÍ=É¥¥¸ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑA…Ñ  Á…Ñ €¤ì(($%Ñ¡¥Ì¹Á…Ñ €ôÁ…Ñ ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑI•Í½ÕÉ•A…Ñ  É•Í½ÕÉ•A…Ñ €¤ì(($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ôÉ•Í½ÕÉ•A…Ñ ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑI•ÅÕ•ÍÑ!•…‘•È É•ÅÕ•ÍÑ!•…‘•È€¤ì(($%Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€ôÉ•ÅÕ•ÍÑ!•…‘•Èì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()1½…‘•È¹U1Q}5QI%1}95€ô€}}U1Pœì()½¹ÍÐ±½…‘¥¹œ€ôíôì()±…ÍÌ!ÑÑÁÉÉ½È•áÑ•¹‘ÌÉÉ½Èì((%½¹ÍÑÉÕÑ½È µ•ÍÍ…”°É•ÍÁ½¹Í”€¤ì(($%ÍÕÁ•È µ•ÍÍ…”€¤ì($%Ñ¡¥Ì¹É•ÍÁ½¹Í”€ôÉ•ÍÁ½¹Í”ì((%ô()ô()±…ÍÌ¥±•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%¥˜€ ÕÉ°€ôôôÕ¹‘•™¥¹•€¤ÕÉ°€ô€œœì(($%¥˜€ Ñ¡¥Ì¹Á…Ñ €„ôôÕ¹‘•™¥¹•€¤ÕÉ°€ôÑ¡¥Ì¹Á…Ñ €¬ÕÉ°ì(($%ÕÉ°€ôÑ¡¥Ì¹µ…¹…•È¹É•Í½±Ù•UI0 ÕÉ°€¤ì(($%½¹ÍÐ…¡•€ô…¡”¹•Ð ÕÉ°€¤ì(($%¥˜€ …¡•€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$%Í•ÑQ¥µ•½ÕÐ € ¤€ôøì(($$$%¥˜€ ½¹1½…€¤½¹1½… …¡•€¤ì(($$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô°€À€¤ì(($$%É•ÑÕÉ¸…¡•ì(($%ô(($$¼¼¡•¬¥˜É•ÅÕ•ÍÐ¥Ì‘ÕÁ±¥…Ñ”(($%¥˜€ ±½…‘¥¹lÕÉ°t€„ôôÕ¹‘•™¥¹•€¤ì(($$%±½…‘¥¹lÕÉ°t¹ÁÕÍ  ì(($$$%½¹1½…è½¹1½…°($$$%½¹AÉ½É•ÍÌè½¹AÉ½É•ÍÌ°($$$%½¹ÉÉ½Èè½¹ÉÉ½È(($$%ô€¤ì(($$%É•ÑÕÉ¸ì(($%ô(($$¼¼%¹¥Ñ¥…±¥Í”…ÉÉ…ä™½È‘ÕÁ±¥…Ñ”É•ÅÕ•ÍÑÌ($%±½…‘¥¹lÕÉ°t€ômtì(($%±½…‘¥¹lÕÉ°t¹ÁÕÍ  ì($$%½¹1½…è½¹1½…°($$%½¹AÉ½É•ÍÌè½¹AÉ½É•ÍÌ°($$%½¹ÉÉ½Èè½¹ÉÉ½È°($%ô€¤ì(($$¼¼É•…Ñ”É•ÅÕ•ÍÐ($%½¹ÍÐÉ•Ä€ô¹•ÜI•ÅÕ•ÍÐ ÕÉ°°ì($$%¡•…‘•ÉÌè¹•Ü!•…‘•ÉÌ Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤°($$%É•‘•¹Ñ¥…±ÌèÑ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€ü€¥¹±Õ‘”œ€è€Í…µ”µ½É¥¥¸œ°($$$¼¼¸…‰½ÉÐ½¹ÑÉ½±±•È½Õ±‰”…‘‘•Ý¥Ñ¡¥¸„™ÕÑÕÉ”AH($%ô€¤ì(($$¼¼É•½ÉÍÑ…Ñ•Ì€ …Ù½¥‘…Ñ„É…”€¤($%½¹ÍÐµ¥µ•QåÁ”€ôÑ¡¥Ì¹µ¥µ•QåÁ”ì($%½¹ÍÐÉ•ÍÁ½¹Í•QåÁ”€ôÑ¡¥Ì¹É•ÍÁ½¹Í•QåÁ”ì(($$¼¼ÍÑ…ÉÐÑ¡”™•Ñ ($%™•Ñ  É•Ä€¤($$$¹Ñ¡•¸ É•ÍÁ½¹Í”€ôøì(($$$%¥˜€ É•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ€ôôô€ÈÀÀñðÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ€ôôô€À€¤ì(($$$$$¼¼M½µ”‰É½ÝÍ•ÉÌÉ•ÑÕÉ¸!QQ@MÑ…ÑÕÌ€ÀÝ¡•¸ÕÍ¥¹œ¹½¸µ¡ÑÑÀÁÉ½Ñ½½°($$$$$¼¼”¹œ¸€™¥±”è¼¼œ½È€‘…Ñ„è¼¼œ¸!…¹‘±”…ÌÍÕ•ÍÌ¸(($$$$%¥˜€ É•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ€ôôô€À€¤ì(($$$$$%½¹Í½±”¹Ý…É¸ €Q!I¹¥±•1½…‘•Èè!QQ@MÑ…ÑÕÌ€ÀÉ••¥Ù•¸œ€¤ì(($$$$%ô(($$$$$¼¼]½É­…É½Õ¹è¡•­¥¹œ¥˜É•ÍÁ½¹Í”¹‰½‘ä€ôôôÕ¹‘•™¥¹•™½È±¥Á…ä‰É½ÝÍ•È€ŒÈÌÔÐà(($$$$%¥˜€ ÑåÁ•½˜I•…‘…‰±•MÑÉ•…´€ôôô€Õ¹‘•™¥¹•œñðÉ•ÍÁ½¹Í”¹‰½‘ä€ôôôÕ¹‘•™¥¹•ñðÉ•ÍÁ½¹Í”¹‰½‘ä¹•ÑI•…‘•È€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”ì(($$$$%ô(($$$$%½¹ÍÐ…±±‰…­Ì€ô±½…‘¥¹lÕÉ°tì($$$$%½¹ÍÐÉ•…‘•È€ôÉ•ÍÁ½¹Í”¹‰½‘ä¹•ÑI•…‘•È ¤ì(($$$$$¼¼9¥¹à¹••‘Ì`µ¥±”µM¥é”¡•¬($$$$$¼¼¡ÑÑÁÌè¼½Í•ÉÙ•É™…Õ±Ð¹½´½ÅÕ•ÍÑ¥½¹Ì¼ÐàÈàÜÔ½Ý¡äµ‘½•Ìµ¹¥¹àµÉ•µ½Ù”µ½¹Ñ•¹Ðµ±•¹Ñ µ¡•…‘•Èµ™½Èµ¡Õ¹­•µ½¹Ñ•¹Ð($$$$%½¹ÍÐ½¹Ñ•¹Ñ1•¹Ñ €ôÉ•ÍÁ½¹Í”¹¡•…‘•ÉÌ¹•Ð €½¹Ñ•¹Ðµ1•¹Ñ œ€¤ñðÉ•ÍÁ½¹Í”¹¡•…‘•ÉÌ¹•Ð €`µ¥±”µM¥é”œ€¤ì($$$$%½¹ÍÐÑ½Ñ…°€ô½¹Ñ•¹Ñ1•¹Ñ €üÁ…ÉÍ•%¹Ð ½¹Ñ•¹Ñ1•¹Ñ €¤€è€Àì($$$$%½¹ÍÐ±•¹Ñ¡½µÁÕÑ…‰±”€ôÑ½Ñ…°€„ôô€Àì($$$$%±•Ð±½…‘•€ô€Àì(($$$$$¼¼Á•É¥½‘¥…±±äÉ•…‘…Ñ„¥¹Ñ¼Ñ¡”¹•ÜÍÑÉ•…´ÑÉ…­¥¹œÝ¡¥±”‘½Ý¹±½…ÁÉ½É•ÍÌ($$$$%½¹ÍÐÍÑÉ•…´€ô¹•ÜI•…‘…‰±•MÑÉ•…´ ì($$$$$%ÍÑ…ÉÐ ½¹ÑÉ½±±•È€¤ì(($$$$$$%É•…‘…Ñ„ ¤ì(($$$$$$%™Õ¹Ñ¥½¸É•…‘…Ñ„ ¤ì(($$$$$$$%É•…‘•È¹É•… ¤¹Ñ¡•¸ € ì‘½¹”°Ù…±Õ”ô€¤€ôøì(($$$$$$$$%¥˜€ ‘½¹”€¤ì(($$$$$$$$$%½¹ÑÉ½±±•È¹±½Í” ¤ì(($$$$$$$$%ô•±Í”ì(($$$$$$$$$%±½…‘•€¬ôÙ…±Õ”¹‰åÑ•1•¹Ñ ì(($$$$$$$$$%½¹ÍÐ•Ù•¹Ð€ô¹•ÜAÉ½É•ÍÍÙ•¹Ð €ÁÉ½É•ÍÌœ°ì±•¹Ñ¡½µÁÕÑ…‰±”°±½…‘•°Ñ½Ñ…°ô€¤ì($$$$$$$$$%™½È€ ±•Ð¤€ô€À°¥°€ô…±±‰…­Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$$$$$$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$$$$$$$$%¥˜€ …±±‰…¬¹½¹AÉ½É•ÍÌ€¤…±±‰…¬¹½¹AÉ½É•ÍÌ •Ù•¹Ð€¤ì(($$$$$$$$$%ô(($$$$$$$$$%½¹ÑÉ½±±•È¹•¹ÅÕ•Õ” Ù…±Õ”€¤ì($$$$$$$$$%É•…‘…Ñ„ ¤ì(($$$$$$$$%ô(($$$$$$$%ô€¤ì(($$$$$$%ô(($$$$$%ô(($$$$%ô€¤ì(($$$$%É•ÑÕÉ¸¹•ÜI•ÍÁ½¹Í” ÍÑÉ•…´€¤ì(($$$%ô•±Í”ì(($$$$%Ñ¡É½Ü¹•Ü!ÑÑÁÉÉ½È ™•Ñ ™½È€ˆ‘íÉ•ÍÁ½¹Í”¹ÕÉ±ôˆÉ•ÍÁ½¹‘•Ý¥Ñ €‘íÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÍôè€‘íÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÍQ•áÑõ€°É•ÍÁ½¹Í”€¤ì(($$$%ô(($$%ô€¤($$$¹Ñ¡•¸ É•ÍÁ½¹Í”€ôøì(($$$%ÍÝ¥Ñ € É•ÍÁ½¹Í•QåÁ”€¤ì(($$$$%…Í”€…ÉÉ…å‰Õ™™•Èœè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹…ÉÉ…å	Õ™™•È ¤ì(($$$$%…Í”€‰±½ˆœè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹‰±½ˆ ¤ì(($$$$%…Í”€‘½Õµ•¹Ðœè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹Ñ•áÐ ¤($$$$$$$¹Ñ¡•¸ Ñ•áÐ€ôøì(($$$$$$$%½¹ÍÐÁ…ÉÍ•È€ô¹•Ü=5A…ÉÍ•È ¤ì($$$$$$$%É•ÑÕÉ¸Á…ÉÍ•È¹Á…ÉÍ•É½µMÑÉ¥¹œ Ñ•áÐ°µ¥µ•QåÁ”€¤ì(($$$$$$%ô€¤ì(($$$$%…Í”€©Í½¸œè(($$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹©Í½¸ ¤ì(($$$$%‘•™…Õ±Ðè(($$$$$%¥˜€ µ¥µ•QåÁ”€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹Ñ•áÐ ¤ì(($$$$$%ô•±Í”ì(($$$$$$$¼¼Í¹¥™˜•¹½‘¥¹œ($$$$$$%½¹ÍÐÉ”€ô€½¡…ÉÍ•Ðôˆü¡mxì‰qÍt¨¤ˆü½¤ì($$$$$$%½¹ÍÐ•á•Œ€ôÉ”¹•á•Œ µ¥µ•QåÁ”€¤ì($$$$$$%½¹ÍÐ±…‰•°€ô•á•Œ€˜˜•á•l€Ät€ü•á•l€Ät¹Ñ½1½Ý•É…Í” ¤€èÕ¹‘•™¥¹•ì($$$$$$%½¹ÍÐ‘•½‘•È€ô¹•ÜQ•áÑ•½‘•È ±…‰•°€¤ì($$$$$$%É•ÑÕÉ¸É•ÍÁ½¹Í”¹…ÉÉ…å	Õ™™•È ¤¹Ñ¡•¸ …ˆ€ôø‘•½‘•È¹‘•½‘” …ˆ€¤€¤ì(($$$$$%ô(($$$%ô(($$%ô€¤($$$¹Ñ¡•¸ ‘…Ñ„€ôøì(($$$$¼¼‘Ñ¼…¡”½¹±ä½¸!QQ@ÍÕ•ÍÌ°Í¼Ñ¡…ÐÝ”‘¼¹½Ð…¡”($$$$¼¼•ÉÉ½ÈÉ•ÍÁ½¹Í”‰½‘¥•Ì…ÌÁÉ½Á•ÈÉ•ÍÁ½¹Í•ÌÑ¼É•ÅÕ•ÍÑÌ¸($$$%…¡”¹…‘ ÕÉ°°‘…Ñ„€¤ì(($$$%½¹ÍÐ…±±‰…­Ì€ô±½…‘¥¹lÕÉ°tì($$$%‘•±•Ñ”±½…‘¥¹lÕÉ°tì(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô…±±‰…­Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$$%¥˜€ …±±‰…¬¹½¹1½…€¤…±±‰…¬¹½¹1½… ‘…Ñ„€¤ì(($$$%ô(($$%ô€¤($$$¹…Ñ  •ÉÈ€ôøì(($$$$¼¼‰½ÉÐ•ÉÉ½ÉÌ…¹½Ñ¡•È•ÉÉ½ÉÌ…É”¡…¹‘±•Ñ¡”Í…µ”(($$$%½¹ÍÐ…±±‰…­Ì€ô±½…‘¥¹lÕÉ°tì(($$$%¥˜€ …±±‰…­Ì€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$¼¼]¡•¸½¹1½…Ý…Ì…±±•…¹ÕÉ°Ý…Ì‘•±•Ñ•¥¸±½…‘¥¹€($$$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$$$%Ñ¡É½Ü•ÉÈì(($$$%ô(($$$%‘•±•Ñ”±½…‘¥¹lÕÉ°tì(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô…±±‰…­Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐ…±±‰…¬€ô…±±‰…­Íl¤tì($$$$%¥˜€ …±±‰…¬¹½¹ÉÉ½È€¤…±±‰…¬¹½¹ÉÉ½È •ÉÈ€¤ì(($$$%ô(($$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô€¤($$$¹™¥¹…±±ä € ¤€ôøì(($$$%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô€¤ì(($%Ñ¡¥Ì¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì((%ô((%Í•ÑI•ÍÁ½¹Í•QåÁ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹É•ÍÁ½¹Í•QåÁ”€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ5¥µ•QåÁ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹µ¥µ•QåÁ”€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ¹¥µ…Ñ¥½¹1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%ÑÉäì(($$$%½¹1½… Í½Á”¹Á…ÉÍ” )M=8¹Á…ÉÍ” Ñ•áÐ€¤€¤€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¥˜€ ½¹ÉÉ½È€¤ì(($$$$%½¹ÉÉ½È ”€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$$%ô(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô((%Á…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ð©Í½¸¹±•¹Ñ ì¤€¬¬€¤ì(($$%½¹ÍÐ±¥À€ô¹¥µ…Ñ¥½¹±¥À¹Á…ÉÍ” ©Í½¹l¤t€¤ì(($$%…¹¥µ…Ñ¥½¹Ì¹ÁÕÍ  ±¥À€¤ì(($%ô(($%É•ÑÕÉ¸…¹¥µ…Ñ¥½¹Ìì((%ô()ô((¼¨¨(€¨‰ÍÑÉ…Ð	…Í”±…ÍÌÑ¼‰±½¬‰…Í•Ñ•áÑÕÉ•Ì±½…‘•È€¡‘‘Ì°ÁÙÈ°€¸¸¸¤(€¨(€¨MÕˆ±…ÍÍ•Ì¡…Ù”Ñ¼¥µÁ±•µ•¹ÐÑ¡”Á…ÉÍ” ¤µ•Ñ¡½Ý¡¥ Ý¥±°‰”ÕÍ•¥¸±½… ¤¸(€¨¼()±…ÍÌ½µÁÉ•ÍÍ•‘Q•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ¥µ…•Ì€ômtì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•Ü½µÁÉ•ÍÍ•‘Q•áÑÕÉ” ¤ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÍÁ½¹Í•QåÁ” €…ÉÉ…å‰Õ™™•Èœ€¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì(($%±•Ð±½…‘•€ô€Àì(($%™Õ¹Ñ¥½¸±½…‘Q•áÑÕÉ” ¤€¤ì(($$%±½…‘•È¹±½… ÕÉ±l¤t°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$$%½¹ÍÐÑ•á…Ñ…Ì€ôÍ½Á”¹Á…ÉÍ” ‰Õ™™•È°ÑÉÕ”€¤ì(($$$%¥µ…•Íl¤t€ôì($$$$%Ý¥‘Ñ èÑ•á…Ñ…Ì¹Ý¥‘Ñ °($$$$%¡•¥¡ÐèÑ•á…Ñ…Ì¹¡•¥¡Ð°($$$$%™½Éµ…ÐèÑ•á…Ñ…Ì¹™½Éµ…Ð°($$$$%µ¥Áµ…ÁÌèÑ•á…Ñ…Ì¹µ¥Áµ…ÁÌ($$$%ôì(($$$%±½…‘•€¬ô€Äì(($$$%¥˜€ ±½…‘•€ôôô€Ø€¤ì(($$$$%¥˜€ Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ð€ôôô€Ä€¤Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É¥±Ñ•Èì(($$$$%Ñ•áÑÕÉ”¹¥µ…”€ô¥µ…•Ìì($$$$%Ñ•áÑÕÉ”¹™½Éµ…Ð€ôÑ•á…Ñ…Ì¹™½Éµ…Ðì($$$$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”€¤ì(($$$%ô(($$%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%ô(($%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ÕÉ°€¤€¤ì(($$%™½È€ ±•Ð¤€ô€À°¥°€ôÕÉ°¹±•¹Ñ ì¤€ð¥°ì€¬¬¤€¤ì(($$$%±½…‘Q•áÑÕÉ” ¤€¤ì(($$%ô(($%ô•±Í”ì(($$$¼¼½µÁÉ•ÍÍ•Õ‰•µ…ÀÑ•áÑÕÉ”ÍÑ½É•¥¸„Í¥¹±”L™¥±”(($$%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$$%½¹ÍÐÑ•á…Ñ…Ì€ôÍ½Á”¹Á…ÉÍ” ‰Õ™™•È°ÑÉÕ”€¤ì(($$$%¥˜€ Ñ•á…Ñ…Ì¹¥ÍÕ‰•µ…À€¤ì(($$$$%½¹ÍÐ™…•Ì€ôÑ•á…Ñ…Ì¹µ¥Áµ…ÁÌ¹±•¹Ñ €¼Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ðì(($$$$%™½È€ ±•Ð˜€ô€Àì˜€ð™…•Ìì˜€¬¬€¤ì(($$$$$%¥µ…•Íl˜t€ôìµ¥Áµ…ÁÌèmtôì(($$$$$%™½È€ ±•Ð¤€ô€Àì¤€ðÑ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ðì¤€¬¬€¤ì(($$$$$$%¥µ…•Íl˜t¹µ¥Áµ…ÁÌ¹ÁÕÍ  Ñ•á…Ñ…Ì¹µ¥Áµ…ÁÍl˜€¨Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ð€¬¤t€¤ì($$$$$$%¥µ…•Íl˜t¹™½Éµ…Ð€ôÑ•á…Ñ…Ì¹™½Éµ…Ðì($$$$$$%¥µ…•Íl˜t¹Ý¥‘Ñ €ôÑ•á…Ñ…Ì¹Ý¥‘Ñ ì($$$$$$%¥µ…•Íl˜t¹¡•¥¡Ð€ôÑ•á…Ñ…Ì¹¡•¥¡Ðì(($$$$$%ô(($$$$%ô(($$$$%Ñ•áÑÕÉ”¹¥µ…”€ô¥µ…•Ìì(($$$%ô•±Í”ì(($$$$%Ñ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €ôÑ•á…Ñ…Ì¹Ý¥‘Ñ ì($$$$%Ñ•áÑÕÉ”¹¥µ…”¹¡•¥¡Ð€ôÑ•á…Ñ…Ì¹¡•¥¡Ðì($$$$%Ñ•áÑÕÉ”¹µ¥Áµ…ÁÌ€ôÑ•á…Ñ…Ì¹µ¥Áµ…ÁÌì(($$$%ô(($$$%¥˜€ Ñ•á…Ñ…Ì¹µ¥Áµ…Á½Õ¹Ð€ôôô€Ä€¤ì(($$$$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É¥±Ñ•Èì(($$$%ô(($$$%Ñ•áÑÕÉ”¹™½Éµ…Ð€ôÑ•á…Ñ…Ì¹™½Éµ…Ðì($$$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”€¤ì(($$%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%ô(($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô()±…ÍÌ%µ…•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%¥˜€ Ñ¡¥Ì¹Á…Ñ €„ôôÕ¹‘•™¥¹•€¤ÕÉ°€ôÑ¡¥Ì¹Á…Ñ €¬ÕÉ°ì(($%ÕÉ°€ôÑ¡¥Ì¹µ…¹…•È¹É•Í½±Ù•UI0 ÕÉ°€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ…¡•€ô…¡”¹•Ð ÕÉ°€¤ì(($%¥˜€ …¡•€„ôôÕ¹‘•™¥¹•€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$%Í•ÑQ¥µ•½ÕÐ ™Õ¹Ñ¥½¸€ ¤ì(($$$%¥˜€ ½¹1½…€¤½¹1½… …¡•€¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô°€À€¤ì(($$%É•ÑÕÉ¸…¡•ì(($%ô(($%½¹ÍÐ¥µ…”€ôÉ•…Ñ•±•µ•¹Ñ9L €¥µœœ€¤ì(($%™Õ¹Ñ¥½¸½¹%µ…•1½… ¤ì(($$%É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•ÉÌ ¤ì(($$%…¡”¹…‘ ÕÉ°°Ñ¡¥Ì€¤ì(($$%¥˜€ ½¹1½…€¤½¹1½… Ñ¡¥Ì€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($%ô(($%™Õ¹Ñ¥½¸½¹%µ…•ÉÉ½È •Ù•¹Ð€¤ì(($$%É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•ÉÌ ¤ì(($$%¥˜€ ½¹ÉÉ½È€¤½¹ÉÉ½È •Ù•¹Ð€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($%ô(($%™Õ¹Ñ¥½¸É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•ÉÌ ¤ì(($$%¥µ…”¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È €±½…œ°½¹%µ…•1½…°™…±Í”€¤ì($$%¥µ…”¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È €•ÉÉ½Èœ°½¹%µ…•ÉÉ½È°™…±Í”€¤ì(($%ô(($%¥µ…”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È €±½…œ°½¹%µ…•1½…°™…±Í”€¤ì($%¥µ…”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È €•ÉÉ½Èœ°½¹%µ…•ÉÉ½È°™…±Í”€¤ì(($%¥˜€ ÕÉ°¹Í±¥” €À°€Ô€¤€„ôô€‘…Ñ„èœ€¤ì(($$%¥˜€ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€„ôôÕ¹‘•™¥¹•€¤¥µ…”¹É½ÍÍ=É¥¥¸€ôÑ¡¥Ì¹É½ÍÍ=É¥¥¸ì(($%ô(($%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($%¥µ…”¹ÍÉŒ€ôÕÉ°ì(($%É•ÑÕÉ¸¥µ…”ì((%ô()ô()±…ÍÌÕ‰•Q•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ±Ì°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•ÜÕ‰•Q•áÑÕÉ” ¤ì($%Ñ•áÑÕÉ”¹½±½ÉMÁ…”€ôMI	½±½ÉMÁ…”ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü%µ…•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì(($%±•Ð±½…‘•€ô€Àì(($%™Õ¹Ñ¥½¸±½…‘Q•áÑÕÉ” ¤€¤ì(($$%±½…‘•È¹±½… ÕÉ±Íl¤t°™Õ¹Ñ¥½¸€ ¥µ…”€¤ì(($$$%Ñ•áÑÕÉ”¹¥µ…•Íl¤t€ô¥µ…”ì(($$$%±½…‘•€¬¬ì(($$$%¥˜€ ±½…‘•€ôôô€Ø€¤ì(($$$$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”€¤ì(($$$%ô(($$%ô°Õ¹‘•™¥¹•°½¹ÉÉ½È€¤ì(($%ô(($%™½È€ ±•Ð¤€ô€Àì¤€ðÕÉ±Ì¹±•¹Ñ ì€¬¬¤€¤ì(($$%±½…‘Q•áÑÕÉ” ¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô((¼¨¨(€¨‰ÍÑÉ…Ð	…Í”±…ÍÌÑ¼±½…•¹•É¥Œ‰¥¹…ÉäÑ•áÑÕÉ•Ì™½Éµ…ÑÌ€¡É‰”°¡‘È°€¸¸¸¤(€¨(€¨MÕˆ±…ÍÍ•Ì¡…Ù”Ñ¼¥µÁ±•µ•¹ÐÑ¡”Á…ÉÍ” ¤µ•Ñ¡½Ý¡¥ Ý¥±°‰”ÕÍ•¥¸±½… ¤¸(€¨¼()±…ÍÌ…Ñ…Q•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•Ü…Ñ…Q•áÑÕÉ” ¤ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑI•ÍÁ½¹Í•QåÁ” €…ÉÉ…å‰Õ™™•Èœ€¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$%±•ÐÑ•á…Ñ„ì(($$%ÑÉäì(($$$%Ñ•á…Ñ„€ôÍ½Á”¹Á…ÉÍ” ‰Õ™™•È€¤ì(($$%ô…Ñ € •ÉÉ½È€¤ì(($$$%¥˜€ ½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹ÉÉ½È •ÉÉ½È€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È •ÉÉ½È€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹¥µ…”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹¥µ…”€ôÑ•á…Ñ„¹¥µ…”ì(($$%ô•±Í”¥˜€ Ñ•á…Ñ„¹‘…Ñ„€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹¥µ…”¹Ý¥‘Ñ €ôÑ•á…Ñ„¹Ý¥‘Ñ ì($$$%Ñ•áÑÕÉ”¹¥µ…”¹¡•¥¡Ð€ôÑ•á…Ñ„¹¡•¥¡Ðì($$$%Ñ•áÑÕÉ”¹¥µ…”¹‘…Ñ„€ôÑ•á…Ñ„¹‘…Ñ„ì(($$%ô(($$%Ñ•áÑÕÉ”¹ÝÉ…ÁL€ôÑ•á…Ñ„¹ÝÉ…ÁL€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹ÝÉ…ÁL€è±…µÁQ½‘•]É…ÁÁ¥¹œì($$%Ñ•áÑÕÉ”¹ÝÉ…ÁP€ôÑ•á…Ñ„¹ÝÉ…ÁP€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹ÝÉ…ÁP€è±…µÁQ½‘•]É…ÁÁ¥¹œì(($$%Ñ•áÑÕÉ”¹µ…¥±Ñ•È€ôÑ•á…Ñ„¹µ…¥±Ñ•È€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹µ…¥±Ñ•È€è1¥¹•…É¥±Ñ•Èì($$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ôÑ•á…Ñ„¹µ¥¹¥±Ñ•È€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹µ¥¹¥±Ñ•È€è1¥¹•…É¥±Ñ•Èì(($$%Ñ•áÑÕÉ”¹…¹¥Í½ÑÉ½Áä€ôÑ•á…Ñ„¹…¹¥Í½ÑÉ½Áä€„ôôÕ¹‘•™¥¹•€üÑ•á…Ñ„¹…¹¥Í½ÑÉ½Áä€è€Äì(($$%¥˜€ Ñ•á…Ñ„¹½±½ÉMÁ…”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹½±½ÉMÁ…”€ôÑ•á…Ñ„¹½±½ÉMÁ…”ì(($$%ô•±Í”¥˜€ Ñ•á…Ñ„¹•¹½‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤ì€¼¼‘•ÁÉ•…Ñ•°ÈÄÔÈ(($$$%Ñ•áÑÕÉ”¹•¹½‘¥¹œ€ôÑ•á…Ñ„¹•¹½‘¥¹œì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹™±¥Ád€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹™±¥Ád€ôÑ•á…Ñ„¹™±¥Ádì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹™½Éµ…Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹™½Éµ…Ð€ôÑ•á…Ñ„¹™½Éµ…Ðì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹ÑåÁ”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹ÑåÁ”€ôÑ•á…Ñ„¹ÑåÁ”ì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹µ¥Áµ…ÁÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹µ¥Áµ…ÁÌ€ôÑ•á…Ñ„¹µ¥Áµ…ÁÌì($$$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•Èì€¼¼ÁÉ•ÍÕµ…‰±ä¸¸¸(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹µ¥Áµ…Á½Õ¹Ð€ôôô€Ä€¤ì(($$$%Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ô1¥¹•…É¥±Ñ•Èì(($$%ô(($$%¥˜€ Ñ•á…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ•áÑÕÉ”¹•¹•É…Ñ•5¥Áµ…ÁÌ€ôÑ•á…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌì(($$%ô(($$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$%¥˜€ ½¹1½…€¤½¹1½… Ñ•áÑÕÉ”°Ñ•á…Ñ„€¤ì(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô()±…ÍÌQ•áÑÕÉ•1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÑ•áÑÕÉ”€ô¹•ÜQ•áÑÕÉ” ¤ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü%µ…•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì(($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ¥µ…”€¤ì(($$%Ñ•áÑÕÉ”¹¥µ…”€ô¥µ…”ì($$%Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$%¥˜€ ½¹1½…€„ôôÕ¹‘•™¥¹•€¤ì(($$$%½¹1½… Ñ•áÑÕÉ”€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%É•ÑÕÉ¸Ñ•áÑÕÉ”ì((%ô()ô()±…ÍÌ1¥¡Ð•áÑ•¹‘Ì=‰©•ÐÍì((%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä€ô€Ä€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€1¥¡Ðœì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È ½±½È€¤ì($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ô¥¹Ñ•¹Í¥Ñäì((%ô((%‘¥ÍÁ½Í” ¤ì(($$¼¼µÁÑä¡•É”¥¸‰…Í”±…ÍÌìÍ½µ”ÍÕ‰±…ÍÍ•Ì½Ù•ÉÉ¥‘”¸((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹½±½È¹½Áä Í½ÕÉ”¹½±½È€¤ì($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÍ½ÕÉ”¹¥¹Ñ•¹Í¥Ñäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 µ•Ñ„€¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 µ•Ñ„€¤ì(($%‘…Ñ„¹½‰©•Ð¹½±½È€ôÑ¡¥Ì¹½±½È¹•Ñ!•à ¤ì($%‘…Ñ„¹½‰©•Ð¹¥¹Ñ•¹Í¥Ñä€ôÑ¡¥Ì¹¥¹Ñ•¹Í¥Ñäì(($%¥˜€ Ñ¡¥Ì¹É½Õ¹‘½±½È€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹É½Õ¹‘½±½È€ôÑ¡¥Ì¹É½Õ¹‘½±½È¹•Ñ!•à ¤ì(($%¥˜€ Ñ¡¥Ì¹‘¥ÍÑ…¹”€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹‘¥ÍÑ…¹”€ôÑ¡¥Ì¹‘¥ÍÑ…¹”ì($%¥˜€ Ñ¡¥Ì¹…¹±”€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹…¹±”€ôÑ¡¥Ì¹…¹±”ì($%¥˜€ Ñ¡¥Ì¹‘•…ä€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹‘•…ä€ôÑ¡¥Ì¹‘•…äì($%¥˜€ Ñ¡¥Ì¹Á•¹Õµ‰É„€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹Á•¹Õµ‰É„€ôÑ¡¥Ì¹Á•¹Õµ‰É„ì(($%¥˜€ Ñ¡¥Ì¹Í¡…‘½Ü€„ôôÕ¹‘•™¥¹•€¤‘…Ñ„¹½‰©•Ð¹Í¡…‘½Ü€ôÑ¡¥Ì¹Í¡…‘½Ü¹Ñ½)M=8 ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô()±…ÍÌ!•µ¥ÍÁ¡•É•1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì((%½¹ÍÑÉÕÑ½È Í­å½±½È°É½Õ¹‘½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%ÍÕÁ•È Í­å½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%Ñ¡¥Ì¹¥Í!•µ¥ÍÁ¡•É•1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€!•µ¥ÍÁ¡•É•1¥¡Ðœì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä =‰©•ÐÍ¹U1Q}U@€¤ì($%Ñ¡¥Ì¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($%Ñ¡¥Ì¹É½Õ¹‘½±½È€ô¹•Ü½±½È É½Õ¹‘½±½È€¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹É½Õ¹‘½±½È¹½Áä Í½ÕÉ”¹É½Õ¹‘½±½È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}ÁÉ½©MÉ••¹5…ÑÉ¥àÄ€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}±¥¡ÑA½Í¥Ñ¥½¹]½É±Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}±½½­Q…É•ÐÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌ1¥¡ÑM¡…‘½Üì((%½¹ÍÑÉÕÑ½È …µ•É„€¤ì(($%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì(($%Ñ¡¥Ì¹‰¥…Ì€ô€Àì($%Ñ¡¥Ì¹¹½Éµ…±	¥…Ì€ô€Àì($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô€Äì($%Ñ¡¥Ì¹‰±ÕÉM…µÁ±•Ì€ô€àì(($%Ñ¡¥Ì¹µ…ÁM¥é”€ô¹•ÜY•Ñ½ÈÈ €ÔÄÈ°€ÔÄÈ€¤ì(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì($%Ñ¡¥Ì¹µ…ÁA…ÍÌ€ô¹Õ±°ì($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô¹•Ü5…ÑÉ¥àÐ ¤ì(($%Ñ¡¥Ì¹…ÕÑ½UÁ‘…Ñ”€ôÑÉÕ”ì($%Ñ¡¥Ì¹¹••‘ÍUÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹}™ÉÕÍÑÕ´€ô¹•ÜÉÕÍÑÕ´ ¤ì($%Ñ¡¥Ì¹}™É…µ•áÑ•¹ÑÌ€ô¹•ÜY•Ñ½ÈÈ €Ä°€Ä€¤ì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑ½Õ¹Ð€ô€Äì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑÌ€ôl(($$%¹•ÜY•Ñ½ÈÐ €À°€À°€Ä°€Ä€¤(($%tì((%ô((%•ÑY¥•ÝÁ½ÉÑ½Õ¹Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑ½Õ¹Ðì((%ô((%•ÑÉÕÍÑÕ´ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}™ÉÕÍÑÕ´ì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð€¤ì(($%½¹ÍÐÍ¡…‘½Ý…µ•É„€ôÑ¡¥Ì¹…µ•É„ì($%½¹ÍÐÍ¡…‘½Ý5…ÑÉ¥à€ôÑ¡¥Ì¹µ…ÑÉ¥àì(($%}±¥¡ÑA½Í¥Ñ¥½¹]½É±Ä¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ ±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì($%Í¡…‘½Ý…µ•É„¹Á½Í¥Ñ¥½¸¹½Áä }±¥¡ÑA½Í¥Ñ¥½¹]½É±Ä€¤ì(($%}±½½­Q…É•ÐÄ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ ±¥¡Ð¹Ñ…É•Ð¹µ…ÑÉ¥á]½É±€¤ì($%Í¡…‘½Ý…µ•É„¹±½½­Ð }±½½­Q…É•ÐÄ€¤ì($%Í¡…‘½Ý…µ•É„¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ¤ì(($%}ÁÉ½©MÉ••¹5…ÑÉ¥àÄ¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì Í¡…‘½Ý…µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à°Í¡…‘½Ý…µ•É„¹µ…ÑÉ¥á]½É±‘%¹Ù•ÉÍ”€¤ì($%Ñ¡¥Ì¹}™ÉÕÍÑÕ´¹Í•ÑÉ½µAÉ½©•Ñ¥½¹5…ÑÉ¥à }ÁÉ½©MÉ••¹5…ÑÉ¥àÄ€¤ì(($%Í¡…‘½Ý5…ÑÉ¥à¹Í•Ð ($$$À¸Ô°€À¸À°€À¸À°€À¸Ô°($$$À¸À°€À¸Ô°€À¸À°€À¸Ô°($$$À¸À°€À¸À°€À¸Ô°€À¸Ô°($$$À¸À°€À¸À°€À¸À°€Ä¸À($$¤ì(($%Í¡…‘½Ý5…ÑÉ¥à¹µÕ±Ñ¥Á±ä }ÁÉ½©MÉ••¹5…ÑÉ¥àÄ€¤ì((%ô((%•ÑY¥•ÝÁ½ÉÐ Ù¥•ÝÁ½ÉÑ%¹‘•à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑÍlÙ¥•ÝÁ½ÉÑ%¹‘•àtì((%ô((%•ÑÉ…µ•áÑ•¹ÑÌ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}™É…µ•áÑ•¹ÑÌì((%ô((%‘¥ÍÁ½Í” ¤ì(($%¥˜€ Ñ¡¥Ì¹µ…À€¤ì(($$%Ñ¡¥Ì¹µ…À¹‘¥ÍÁ½Í” ¤ì(($%ô(($%¥˜€ Ñ¡¥Ì¹µ…ÁA…ÍÌ€¤ì(($$%Ñ¡¥Ì¹µ…ÁA…ÍÌ¹‘¥ÍÁ½Í” ¤ì(($%ô((%ô((%½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹…µ•É„€ôÍ½ÕÉ”¹…µ•É„¹±½¹” ¤ì(($%Ñ¡¥Ì¹‰¥…Ì€ôÍ½ÕÉ”¹‰¥…Ìì($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÍ½ÕÉ”¹É…‘¥ÕÌì(($%Ñ¡¥Ì¹µ…ÁM¥é”¹½Áä Í½ÕÉ”¹µ…ÁM¥é”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ½‰©•Ð€ôíôì(($%¥˜€ Ñ¡¥Ì¹‰¥…Ì€„ôô€À€¤½‰©•Ð¹‰¥…Ì€ôÑ¡¥Ì¹‰¥…Ìì($%¥˜€ Ñ¡¥Ì¹¹½Éµ…±	¥…Ì€„ôô€À€¤½‰©•Ð¹¹½Éµ…±	¥…Ì€ôÑ¡¥Ì¹¹½Éµ…±	¥…Ìì($%¥˜€ Ñ¡¥Ì¹É…‘¥ÕÌ€„ôô€Ä€¤½‰©•Ð¹É…‘¥ÕÌ€ôÑ¡¥Ì¹É…‘¥ÕÌì($%¥˜€ Ñ¡¥Ì¹µ…ÁM¥é”¹à€„ôô€ÔÄÈñðÑ¡¥Ì¹µ…ÁM¥é”¹ä€„ôô€ÔÄÈ€¤½‰©•Ð¹µ…ÁM¥é”€ôÑ¡¥Ì¹µ…ÁM¥é”¹Ñ½ÉÉ…ä ¤ì(($%½‰©•Ð¹…µ•É„€ôÑ¡¥Ì¹…µ•É„¹Ñ½)M=8 ™…±Í”€¤¹½‰©•Ðì($%‘•±•Ñ”½‰©•Ð¹…µ•É„¹µ…ÑÉ¥àì(($%É•ÑÕÉ¸½‰©•Ðì((%ô()ô()±…ÍÌMÁ½Ñ1¥¡ÑM¡…‘½Ü•áÑ•¹‘Ì1¥¡ÑM¡…‘½Üì((%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ €ÔÀ°€Ä°€À¸Ô°€ÔÀÀ€¤€¤ì(($%Ñ¡¥Ì¹¥ÍMÁ½Ñ1¥¡ÑM¡…‘½Ü€ôÑÉÕ”ì(($%Ñ¡¥Ì¹™½ÕÌ€ô€Äì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð€¤ì(($%½¹ÍÐ…µ•É„€ôÑ¡¥Ì¹…µ•É„ì(($%½¹ÍÐ™½Ø€ôIÉ€¨€È€¨±¥¡Ð¹…¹±”€¨Ñ¡¥Ì¹™½ÕÌì($%½¹ÍÐ…ÍÁ•Ð€ôÑ¡¥Ì¹µ…ÁM¥é”¹Ý¥‘Ñ €¼Ñ¡¥Ì¹µ…ÁM¥é”¹¡•¥¡Ðì($%½¹ÍÐ™…È€ô±¥¡Ð¹‘¥ÍÑ…¹”ñð…µ•É„¹™…Èì(($%¥˜€ ™½Ø€„ôô…µ•É„¹™½Øñð…ÍÁ•Ð€„ôô…µ•É„¹…ÍÁ•Ðñð™…È€„ôô…µ•É„¹™…È€¤ì(($$%…µ•É„¹™½Ø€ô™½Øì($$%…µ•É„¹…ÍÁ•Ð€ô…ÍÁ•Ðì($$%…µ•É„¹™…È€ô™…Èì($$%…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì(($%ô(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹™½ÕÌ€ôÍ½ÕÉ”¹™½ÕÌì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌMÁ½Ñ1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì((%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä°‘¥ÍÑ…¹”€ô€À°…¹±”€ô5…Ñ ¹A$€¼€Ì°Á•¹Õµ‰É„€ô€À°‘•…ä€ô€È€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%Ñ¡¥Ì¹¥ÍMÁ½Ñ1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€MÁ½Ñ1¥¡Ðœì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä =‰©•ÐÍ¹U1Q}U@€¤ì($%Ñ¡¥Ì¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($%Ñ¡¥Ì¹Ñ…É•Ð€ô¹•Ü=‰©•ÐÍ ¤ì(($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ô‘¥ÍÑ…¹”ì($%Ñ¡¥Ì¹…¹±”€ô…¹±”ì($%Ñ¡¥Ì¹Á•¹Õµ‰É„€ôÁ•¹Õµ‰É„ì($%Ñ¡¥Ì¹‘•…ä€ô‘•…äì(($%Ñ¡¥Ì¹µ…À€ô¹Õ±°ì(($%Ñ¡¥Ì¹Í¡…‘½Ü€ô¹•ÜMÁ½Ñ1¥¡ÑM¡…‘½Ü ¤ì((%ô((%•ÐÁ½Ý•È ¤ì(($$¼¼½µÁÕÑ”Ñ¡”±¥¡ÐÌ±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤™É½´¥ÑÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤($$¼¼‰ä½¹Ù•¹Ñ¥½¸™½È„ÍÁ½Ñ±¥¡Ð°±Õµ¥¹½ÕÌÁ½Ý•È€¡±´¤€ôƒ> €¨±Õµ¥¹½ÕÌ¥¹Ñ•¹Í¥Ñä€¡¤($%É•ÑÕÉ¸Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€¨5…Ñ ¹A$ì((%ô((%Í•ÐÁ½Ý•È Á½Ý•È€¤ì(($$¼¼Í•ÐÑ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤™É½´Ñ¡”‘•Í¥É•±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÁ½Ý•È€¼5…Ñ ¹A$ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü¹‘¥ÍÁ½Í” ¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ôÍ½ÕÉ”¹‘¥ÍÑ…¹”ì($%Ñ¡¥Ì¹…¹±”€ôÍ½ÕÉ”¹…¹±”ì($%Ñ¡¥Ì¹Á•¹Õµ‰É„€ôÍ½ÕÉ”¹Á•¹Õµ‰É„ì($%Ñ¡¥Ì¹‘•…ä€ôÍ½ÕÉ”¹‘•…äì(($%Ñ¡¥Ì¹Ñ…É•Ð€ôÍ½ÕÉ”¹Ñ…É•Ð¹±½¹” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü€ôÍ½ÕÉ”¹Í¡…‘½Ü¹±½¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}ÁÉ½©MÉ••¹5…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}±¥¡ÑA½Í¥Ñ¥½¹]½É±€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}±½½­Q…É•Ð€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌA½¥¹Ñ1¥¡ÑM¡…‘½Ü•áÑ•¹‘Ì1¥¡ÑM¡…‘½Üì((%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ €äÀ°€Ä°€À¸Ô°€ÔÀÀ€¤€¤ì(($%Ñ¡¥Ì¹¥ÍA½¥¹Ñ1¥¡ÑM¡…‘½Ü€ôÑÉÕ”ì(($%Ñ¡¥Ì¹}™É…µ•áÑ•¹ÑÌ€ô¹•ÜY•Ñ½ÈÈ €Ð°€È€¤ì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑ½Õ¹Ð€ô€Øì(($%Ñ¡¥Ì¹}Ù¥•ÝÁ½ÉÑÌ€ôl($$$¼¼Q¡•Í”Ù¥•ÝÁ½ÉÑÌµ…À„Õ‰”µµ…À½¹Ñ¼„€ÉÑ•áÑÕÉ”Ý¥Ñ Ñ¡”($$$¼¼™½±±½Ý¥¹œ½É¥•¹Ñ…Ñ¥½¸è($$$¼¼($$$¼¼€áéah($$$¼¼€€äd($$$¼¼($$$¼¼`€´A½Í¥Ñ¥Ù”à‘¥É•Ñ¥½¸($$$¼¼à€´9•…Ñ¥Ù”à‘¥É•Ñ¥½¸($$$¼¼d€´A½Í¥Ñ¥Ù”ä‘¥É•Ñ¥½¸($$$¼¼ä€´9•…Ñ¥Ù”ä‘¥É•Ñ¥½¸($$$¼¼h€´A½Í¥Ñ¥Ù”è‘¥É•Ñ¥½¸($$$¼¼è€´9•…Ñ¥Ù”è‘¥É•Ñ¥½¸(($$$¼¼Á½Í¥Ñ¥Ù”`($$%¹•ÜY•Ñ½ÈÐ €È°€Ä°€Ä°€Ä€¤°($$$¼¼¹•…Ñ¥Ù”`($$%¹•ÜY•Ñ½ÈÐ €À°€Ä°€Ä°€Ä€¤°($$$¼¼Á½Í¥Ñ¥Ù”h($$%¹•ÜY•Ñ½ÈÐ €Ì°€Ä°€Ä°€Ä€¤°($$$¼¼¹•…Ñ¥Ù”h($$%¹•ÜY•Ñ½ÈÐ €Ä°€Ä°€Ä°€Ä€¤°($$$¼¼Á½Í¥Ñ¥Ù”d($$%¹•ÜY•Ñ½ÈÐ €Ì°€À°€Ä°€Ä€¤°($$$¼¼¹•…Ñ¥Ù”d($$%¹•ÜY•Ñ½ÈÐ €Ä°€À°€Ä°€Ä€¤($%tì(($%Ñ¡¥Ì¹}Õ‰•¥É•Ñ¥½¹Ì€ôl($$%¹•ÜY•Ñ½ÈÌ €Ä°€À°€À€¤°¹•ÜY•Ñ½ÈÌ €´€Ä°€À°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€À°€Ä€¤°($$%¹•ÜY•Ñ½ÈÌ €À°€À°€´€Ä€¤°¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€´€Ä°€À€¤($%tì(($%Ñ¡¥Ì¹}Õ‰•UÁÌ€ôl($$%¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°($$%¹•ÜY•Ñ½ÈÌ €À°€Ä°€À€¤°¹•ÜY•Ñ½ÈÌ €À°€À°€Ä€¤°%¹•ÜY•Ñ½ÈÌ €À°€À°€´€Ä€¤($%tì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥•Ì ±¥¡Ð°Ù¥•ÝÁ½ÉÑ%¹‘•à€ô€À€¤ì(($%½¹ÍÐ…µ•É„€ôÑ¡¥Ì¹…µ•É„ì($%½¹ÍÐÍ¡…‘½Ý5…ÑÉ¥à€ôÑ¡¥Ì¹µ…ÑÉ¥àì(($%½¹ÍÐ™…È€ô±¥¡Ð¹‘¥ÍÑ…¹”ñð…µ•É„¹™…Èì(($%¥˜€ ™…È€„ôô…µ•É„¹™…È€¤ì(($$%…µ•É„¹™…È€ô™…Èì($$%…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì(($%ô(($%}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ ±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì($%…µ•É„¹Á½Í¥Ñ¥½¸¹½Áä }±¥¡ÑA½Í¥Ñ¥½¹]½É±€¤ì(($%}±½½­Q…É•Ð¹½Áä …µ•É„¹Á½Í¥Ñ¥½¸€¤ì($%}±½½­Q…É•Ð¹…‘ Ñ¡¥Ì¹}Õ‰•¥É•Ñ¥½¹ÍlÙ¥•ÝÁ½ÉÑ%¹‘•àt€¤ì($%…µ•É„¹ÕÀ¹½Áä Ñ¡¥Ì¹}Õ‰•UÁÍlÙ¥•ÝÁ½ÉÑ%¹‘•àt€¤ì($%…µ•É„¹±½½­Ð }±½½­Q…É•Ð€¤ì($%…µ•É„¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ¤ì(($%Í¡…‘½Ý5…ÑÉ¥à¹µ…­•QÉ…¹Í±…Ñ¥½¸ €´}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹à°€´}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹ä°€´}±¥¡ÑA½Í¥Ñ¥½¹]½É±¹è€¤ì(($%}ÁÉ½©MÉ••¹5…ÑÉ¥à¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì …µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à°…µ•É„¹µ…ÑÉ¥á]½É±‘%¹Ù•ÉÍ”€¤ì($%Ñ¡¥Ì¹}™ÉÕÍÑÕ´¹Í•ÑÉ½µAÉ½©•Ñ¥½¹5…ÑÉ¥à }ÁÉ½©MÉ••¹5…ÑÉ¥à€¤ì((%ô()ô()±…ÍÌA½¥¹Ñ1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì((%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä°‘¥ÍÑ…¹”€ô€À°‘•…ä€ô€È€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%Ñ¡¥Ì¹¥ÍA½¥¹Ñ1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½¥¹Ñ1¥¡Ðœì(($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ô‘¥ÍÑ…¹”ì($%Ñ¡¥Ì¹‘•…ä€ô‘•…äì(($%Ñ¡¥Ì¹Í¡…‘½Ü€ô¹•ÜA½¥¹Ñ1¥¡ÑM¡…‘½Ü ¤ì((%ô((%•ÐÁ½Ý•È ¤ì(($$¼¼½µÁÕÑ”Ñ¡”±¥¡ÐÌ±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤™É½´¥ÑÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤($$¼¼™½È…¸¥Í½ÑÉ½Á¥Œ±¥¡ÐÍ½ÕÉ”°±Õµ¥¹½ÕÌÁ½Ý•È€¡±´¤€ô€Ðƒ> ±Õµ¥¹½ÕÌ¥¹Ñ•¹Í¥Ñä€¡¤($%É•ÑÕÉ¸Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€¨€Ð€¨5…Ñ ¹A$ì((%ô((%Í•ÐÁ½Ý•È Á½Ý•È€¤ì(($$¼¼Í•ÐÑ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä€¡¥¸…¹‘•±„¤™É½´Ñ¡”‘•Í¥É•±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÁ½Ý•È€¼€ €Ð€¨5…Ñ ¹A$€¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü¹‘¥ÍÁ½Í” ¤ì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹‘¥ÍÑ…¹”€ôÍ½ÕÉ”¹‘¥ÍÑ…¹”ì($%Ñ¡¥Ì¹‘•…ä€ôÍ½ÕÉ”¹‘•…äì(($%Ñ¡¥Ì¹Í¡…‘½Ü€ôÍ½ÕÉ”¹Í¡…‘½Ü¹±½¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌ¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ü•áÑ•¹‘Ì1¥¡ÑM¡…‘½Üì((%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¹•Ü=ÉÑ¡½É…Á¡¥…µ•É„ €´€Ô°€Ô°€Ô°€´€Ô°€À¸Ô°€ÔÀÀ€¤€¤ì(($%Ñ¡¥Ì¹¥Í¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ü€ôÑÉÕ”ì((%ô()ô()±…ÍÌ¥É•Ñ¥½¹…±1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì((%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%Ñ¡¥Ì¹¥Í¥É•Ñ¥½¹…±1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€¥É•Ñ¥½¹…±1¥¡Ðœì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä =‰©•ÐÍ¹U1Q}U@€¤ì($%Ñ¡¥Ì¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($%Ñ¡¥Ì¹Ñ…É•Ð€ô¹•Ü=‰©•ÐÍ ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü€ô¹•Ü¥É•Ñ¥½¹…±1¥¡ÑM¡…‘½Ü ¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹Í¡…‘½Ü¹‘¥ÍÁ½Í” ¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ð€ôÍ½ÕÉ”¹Ñ…É•Ð¹±½¹” ¤ì($%Ñ¡¥Ì¹Í¡…‘½Ü€ôÍ½ÕÉ”¹Í¡…‘½Ü¹±½¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌµ‰¥•¹Ñ1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì((%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%Ñ¡¥Ì¹¥Íµ‰¥•¹Ñ1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€µ‰¥•¹Ñ1¥¡Ðœì((%ô()ô()±…ÍÌI•ÑÉ•…1¥¡Ð•áÑ•¹‘Ì1¥¡Ðì((%½¹ÍÑÉÕÑ½È ½±½È°¥¹Ñ•¹Í¥Ñä°Ý¥‘Ñ €ô€ÄÀ°¡•¥¡Ð€ô€ÄÀ€¤ì(($%ÍÕÁ•È ½±½È°¥¹Ñ•¹Í¥Ñä€¤ì(($%Ñ¡¥Ì¹¥ÍI•ÑÉ•…1¥¡Ð€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€I•ÑÉ•…1¥¡Ðœì(($%Ñ¡¥Ì¹Ý¥‘Ñ €ôÝ¥‘Ñ ì($%Ñ¡¥Ì¹¡•¥¡Ð€ô¡•¥¡Ðì((%ô((%•ÐÁ½Ý•È ¤ì(($$¼¼½µÁÕÑ”Ñ¡”±¥¡ÐÌ±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤™É½´¥ÑÌ¥¹Ñ•¹Í¥Ñä€¡¥¸¹¥ÑÌ¤($%É•ÑÕÉ¸Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€¨Ñ¡¥Ì¹Ý¥‘Ñ €¨Ñ¡¥Ì¹¡•¥¡Ð€¨5…Ñ ¹A$ì((%ô((%Í•ÐÁ½Ý•È Á½Ý•È€¤ì(($$¼¼Í•ÐÑ¡”±¥¡ÐÌ¥¹Ñ•¹Í¥Ñä€¡¥¸¹¥ÑÌ¤™É½´Ñ¡”‘•Í¥É•±Õµ¥¹½ÕÌÁ½Ý•È€¡¥¸±Õµ•¹Ì¤($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ôÁ½Ý•È€¼€ Ñ¡¥Ì¹Ý¥‘Ñ €¨Ñ¡¥Ì¹¡•¥¡Ð€¨5…Ñ ¹A$€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Ý¥‘Ñ €ôÍ½ÕÉ”¹Ý¥‘Ñ ì($%Ñ¡¥Ì¹¡•¥¡Ð€ôÍ½ÕÉ”¹¡•¥¡Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 µ•Ñ„€¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 µ•Ñ„€¤ì(($%‘…Ñ„¹½‰©•Ð¹Ý¥‘Ñ €ôÑ¡¥Ì¹Ý¥‘Ñ ì($%‘…Ñ„¹½‰©•Ð¹¡•¥¡Ð€ôÑ¡¥Ì¹¡•¥¡Ðì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô((¼¨¨(€¨AÉ¥µ…ÉäÉ•™•É•¹”è(€¨€€¡ÑÑÁÌè¼½É…Á¡¥Ì¹ÍÑ…¹™½É¹•‘Ô½Á…Á•ÉÌ½•¹Ùµ…À½•¹Ùµ…À¹Á‘˜(€¨(€¨M•½¹‘…ÉäÉ•™•É•¹”è(€¨€€¡ÑÑÁÌè¼½ÝÝÜ¹ÁÁÍ±½…¸¹½Éœ½ÁÕ‰±¥…Ñ¥½¹Ì½MÑÕÁ¥‘M ÌØ¹Á‘˜(€¨¼((¼¼€Ìµ‰…¹M ‘•™¥¹•‰ä€ä½•™™¥¥•¹ÑÌ()±…ÍÌMÁ¡•É¥…±!…Éµ½¹¥ÌÌì((%½¹ÍÑÉÕÑ½È ¤ì(($%Ñ¡¥Ì¹¥ÍMÁ¡•É¥…±!…Éµ½¹¥ÌÌ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹½•™™¥¥•¹ÑÌ€ômtì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÌ¹ÁÕÍ  ¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%ô((%ô((%Í•Ð ½•™™¥¥•¹ÑÌ€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹½Áä ½•™™¥¥•¹ÑÍl¤t€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%é•É¼ ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹Í•Ð €À°€À°€À€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼•ÐÑ¡”É…‘¥…¹”¥¸Ñ¡”‘¥É•Ñ¥½¸½˜Ñ¡”¹½Éµ…°($¼¼Ñ…É•Ð¥Ì„Y•Ñ½ÈÌ(%•ÑÐ ¹½Éµ…°°Ñ…É•Ð€¤ì(($$¼¼¹½Éµ…°¥Ì…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ (($%½¹ÍÐà€ô¹½Éµ…°¹à°ä€ô¹½Éµ…°¹ä°è€ô¹½Éµ…°¹èì(($%½¹ÍÐ½•™˜€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($$¼¼‰…¹€À($%Ñ…É•Ð¹½Áä ½•™™l€Àt€¤¹µÕ±Ñ¥Á±åM…±…È €À¸ÈàÈÀäÔ€¤ì(($$¼¼‰…¹€Ä($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ät°€À¸ÐààØÀÌ€¨ä€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Èt°€À¸ÐààØÀÌ€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ìt°€À¸ÐààØÀÌ€¨à€¤ì(($$¼¼‰…¹€È($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ðt°€Ä¸ÀäÈÔÐà€¨€ à€¨ä€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ôt°€Ä¸ÀäÈÔÐà€¨€ ä€¨è€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Øt°€À¸ÌÄÔÌäÈ€¨€ €Ì¸À€¨è€¨è€´€Ä¸À€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Üt°€Ä¸ÀäÈÔÐà€¨€ à€¨è€¤€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€àt°€À¸ÔÐØÈÜÐ€¨€ à€¨à€´ä€¨ä€¤€¤ì(($%É•ÑÕÉ¸Ñ…É•Ðì((%ô(($¼¼•ÐÑ¡”¥ÉÉ…‘¥…¹”€¡É…‘¥…¹”½¹Ù½±Ù•Ý¥Ñ ½Í¥¹”±½‰”¤¥¸Ñ¡”‘¥É•Ñ¥½¸½˜Ñ¡”¹½Éµ…°($¼¼Ñ…É•Ð¥Ì„Y•Ñ½ÈÌ($¼¼¡ÑÑÁÌè¼½É…Á¡¥Ì¹ÍÑ…¹™½É¹•‘Ô½Á…Á•ÉÌ½•¹Ùµ…À½•¹Ùµ…À¹Á‘˜(%•Ñ%ÉÉ…‘¥…¹•Ð ¹½Éµ…°°Ñ…É•Ð€¤ì(($$¼¼¹½Éµ…°¥Ì…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ (($%½¹ÍÐà€ô¹½Éµ…°¹à°ä€ô¹½Éµ…°¹ä°è€ô¹½Éµ…°¹èì(($%½¹ÍÐ½•™˜€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($$¼¼‰…¹€À($%Ñ…É•Ð¹½Áä ½•™™l€Àt€¤¹µÕ±Ñ¥Á±åM…±…È €À¸ààØÈÈÜ€¤ì€¼¼ƒ> €¨€À¸ÈàÈÀäÔ(($$¼¼‰…¹€Ä($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ät°€È¸À€¨€À¸ÔÄÄØØÐ€¨ä€¤ì€¼¼€ €È€¨ƒ> €¼€Ì€¤€¨€À¸ÐààØÀÌ($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Èt°€È¸À€¨€À¸ÔÄÄØØÐ€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ìt°€È¸À€¨€À¸ÔÄÄØØÐ€¨à€¤ì(($$¼¼‰…¹€È($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ðt°€È¸À€¨€À¸ÐÈäÀÐÌ€¨à€¨ä€¤ì€¼¼€ ƒ> €¼€Ð€¤€¨€Ä¸ÀäÈÔÐà($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Ôt°€È¸À€¨€À¸ÐÈäÀÐÌ€¨ä€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Øt°€À¸ÜÐÌÄÈÔ€¨è€¨è€´€À¸ÈÐÜÜÀà€¤ì€¼¼€ ƒ> €¼€Ð€¤€¨€À¸ÌÄÔÌäÈ€¨€Ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€Üt°€È¸À€¨€À¸ÐÈäÀÐÌ€¨à€¨è€¤ì($%Ñ…É•Ð¹…‘‘M…±•‘Y•Ñ½È ½•™™l€àt°€À¸ÐÈäÀÐÌ€¨€ à€¨à€´ä€¨ä€¤€¤ì€¼¼€ ƒ> €¼€Ð€¤€¨€À¸ÔÐØÈÜÐ(($%É•ÑÕÉ¸Ñ…É•Ðì((%ô((%…‘ Í €¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹…‘ Í ¹½•™™¥¥•¹ÑÍl¤t€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%…‘‘M…±•‘M  Í °Ì€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹…‘‘M…±•‘Y•Ñ½È Í ¹½•™™¥¥•¹ÑÍl¤t°Ì€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í…±” Ì€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹µÕ±Ñ¥Á±åM…±…È Ì€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±•ÉÀ Í °…±Á¡„€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹±•ÉÀ Í ¹½•™™¥¥•¹ÑÍl¤t°…±Á¡„€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•ÅÕ…±Ì Í €¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%¥˜€ €„Ñ¡¥Ì¹½•™™¥¥•¹ÑÍl¤t¹•ÅÕ…±Ì Í ¹½•™™¥¥•¹ÑÍl¤t€¤€¤ì(($$$%É•ÑÕÉ¸™…±Í”ì(($$%ô(($%ô(($%É•ÑÕÉ¸ÑÉÕ”ì((%ô((%½Áä Í €¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•Ð Í ¹½•™™¥¥•¹ÑÌ€¤ì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô((%™É½µÉÉ…ä …ÉÉ…ä°½™™Í•Ð€ô€À€¤ì(($%½¹ÍÐ½•™™¥¥•¹ÑÌ€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%½•™™¥¥•¹ÑÍl¤t¹™É½µÉÉ…ä …ÉÉ…ä°½™™Í•Ð€¬€ ¤€¨€Ì€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½ÉÉ…ä …ÉÉ…ä€ômt°½™™Í•Ð€ô€À€¤ì(($%½¹ÍÐ½•™™¥¥•¹ÑÌ€ôÑ¡¥Ì¹½•™™¥¥•¹ÑÌì(($%™½È€ ±•Ð¤€ô€Àì¤€ð€äì¤€¬¬€¤ì(($$%½•™™¥¥•¹ÑÍl¤t¹Ñ½ÉÉ…ä …ÉÉ…ä°½™™Í•Ð€¬€ ¤€¨€Ì€¤€¤ì(($%ô(($%É•ÑÕÉ¸…ÉÉ…äì((%ô(($¼¼•Ù…±Õ…Ñ”Ñ¡”‰…Í¥Ì™Õ¹Ñ¥½¹Ì($¼¼Í¡	…Í¥Ì¥Ì…¸ÉÉ…ål€ät(%ÍÑ…Ñ¥Œ•Ñ	…Í¥ÍÐ ¹½Éµ…°°Í¡	…Í¥Ì€¤ì(($$¼¼¹½Éµ…°¥Ì…ÍÍÕµ•Ñ¼‰”Õ¹¥Ð±•¹Ñ (($%½¹ÍÐà€ô¹½Éµ…°¹à°ä€ô¹½Éµ…°¹ä°è€ô¹½Éµ…°¹èì(($$¼¼‰…¹€À($%Í¡	…Í¥Íl€Àt€ô€À¸ÈàÈÀäÔì(($$¼¼‰…¹€Ä($%Í¡	…Í¥Íl€Ät€ô€À¸ÐààØÀÌ€¨äì($%Í¡	…Í¥Íl€Èt€ô€À¸ÐààØÀÌ€¨èì($%Í¡	…Í¥Íl€Ìt€ô€À¸ÐààØÀÌ€¨àì(($$¼¼‰…¹€È($%Í¡	…Í¥Íl€Ðt€ô€Ä¸ÀäÈÔÐà€¨à€¨äì($%Í¡	…Í¥Íl€Ôt€ô€Ä¸ÀäÈÔÐà€¨ä€¨èì($%Í¡	…Í¥Íl€Øt€ô€À¸ÌÄÔÌäÈ€¨€ €Ì€¨è€¨è€´€Ä€¤ì($%Í¡	…Í¥Íl€Üt€ô€Ä¸ÀäÈÔÐà€¨à€¨èì($%Í¡	…Í¥Íl€àt€ô€À¸ÔÐØÈÜÐ€¨€ à€¨à€´ä€¨ä€¤ì((%ô()ô()±…ÍÌ1¥¡ÑAÉ½‰”•áÑ•¹‘Ì1¥¡Ðì((%½¹ÍÑÉÕÑ½È Í €ô¹•ÜMÁ¡•É¥…±!…Éµ½¹¥ÌÌ ¤°¥¹Ñ•¹Í¥Ñä€ô€Ä€¤ì(($%ÍÕÁ•È Õ¹‘•™¥¹•°¥¹Ñ•¹Í¥Ñä€¤ì(($%Ñ¡¥Ì¹¥Í1¥¡ÑAÉ½‰”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í €ôÍ ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹Í ¹½Áä Í½ÕÉ”¹Í €¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%™É½µ)M=8 ©Í½¸€¤ì(($%Ñ¡¥Ì¹¥¹Ñ•¹Í¥Ñä€ô©Í½¸¹¥¹Ñ•¹Í¥Ñäì€¼¼Q=<è5½Ù”Ñ¡¥Ì‰¥ÐÑ¼1¥¡Ð¹™É½µ)M=8 ¤ì($%Ñ¡¥Ì¹Í ¹™É½µÉÉ…ä ©Í½¸¹Í €¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 µ•Ñ„€¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 µ•Ñ„€¤ì(($%‘…Ñ„¹½‰©•Ð¹Í €ôÑ¡¥Ì¹Í ¹Ñ½ÉÉ…ä ¤ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô()±…ÍÌ5…Ñ•É¥…±1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì($%Ñ¡¥Ì¹Ñ•áÑÕÉ•Ì€ôíôì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Í½Á”¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Í½Á”¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Í½Á”¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%ÑÉäì(($$$%½¹1½… Í½Á”¹Á…ÉÍ” )M=8¹Á…ÉÍ” Ñ•áÐ€¤€¤€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¥˜€ ½¹ÉÉ½È€¤ì(($$$$%½¹ÉÉ½È ”€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$$%ô(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô((%Á…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôÑ¡¥Ì¹Ñ•áÑÕÉ•Ìì(($%™Õ¹Ñ¥½¸•ÑQ•áÑÕÉ” ¹…µ”€¤ì(($$%¥˜€ Ñ•áÑÕÉ•Íl¹…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹5…Ñ•É¥…±1½…‘•ÈèU¹‘•™¥¹•Ñ•áÑÕÉ”œ°¹…µ”€¤ì(($$%ô(($$%É•ÑÕÉ¸Ñ•áÑÕÉ•Íl¹…µ”tì(($%ô(($%½¹ÍÐµ…Ñ•É¥…°€ô5…Ñ•É¥…±1½…‘•È¹É•…Ñ•5…Ñ•É¥…±É½µQåÁ” ©Í½¸¹ÑåÁ”€¤ì(($%¥˜€ ©Í½¸¹ÕÕ¥€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÕÕ¥€ô©Í½¸¹ÕÕ¥ì($%¥˜€ ©Í½¸¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¹…µ”€ô©Í½¸¹¹…µ”ì($%¥˜€ ©Í½¸¹½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½±½È¹Í•Ñ!•à ©Í½¸¹½±½È€¤ì($%¥˜€ ©Í½¸¹É½Õ¡¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É½Õ¡¹•ÍÌ€ô©Í½¸¹É½Õ¡¹•ÍÌì($%¥˜€ ©Í½¸¹µ•Ñ…±¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ•Ñ…±¹•ÍÌ€ô©Í½¸¹µ•Ñ…±¹•ÍÌì($%¥˜€ ©Í½¸¹Í¡••¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¸€ô©Í½¸¹Í¡••¸ì($%¥˜€ ©Í½¸¹Í¡••¹½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹½±½È€ô¹•Ü½±½È ¤¹Í•Ñ!•à ©Í½¸¹Í¡••¹½±½È€¤ì($%¥˜€ ©Í½¸¹Í¡••¹I½Õ¡¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹I½Õ¡¹•ÍÌ€ô©Í½¸¹Í¡••¹I½Õ¡¹•ÍÌì($%¥˜€ ©Í½¸¹•µ¥ÍÍ¥Ù”€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù”¹Í•Ñ!•à ©Í½¸¹•µ¥ÍÍ¥Ù”€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹ÍÁ•Õ±…È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…È¹Í•Ñ!•à ©Í½¸¹ÍÁ•Õ±…È€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñä€ô©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñäì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹ÍÁ•Õ±…É½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É½±½È¹Í•Ñ!•à ©Í½¸¹ÍÁ•Õ±…É½±½È€¤ì($%¥˜€ ©Í½¸¹Í¡¥¹¥¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡¥¹¥¹•ÍÌ€ô©Í½¸¹Í¡¥¹¥¹•ÍÌì($%¥˜€ ©Í½¸¹±•…É½…Ð€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ð€ô©Í½¸¹±•…É½…Ðì($%¥˜€ ©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…ÑI½Õ¡¹•ÍÌ€ô©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÌì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹”€ô©Í½¸¹¥É¥‘•Í•¹”ì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•%=H€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•%=H€ô©Í½¸¹¥É¥‘•Í•¹•%=Hì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”€ô©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍI…¹”ì($%¥˜€ ©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÑÉ…¹Íµ¥ÍÍ¥½¸€ô©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¸ì($%¥˜€ ©Í½¸¹Ñ¡¥­¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ñ¡¥­¹•ÍÌ€ô©Í½¸¹Ñ¡¥­¹•ÍÌì($%¥˜€ ©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”€ô©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹¥ÍÑ…¹”ì($%¥˜€ ©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…ÑÑ•¹Õ…Ñ¥½¹½±½È¹Í•Ñ!•à ©Í½¸¹…ÑÑ•¹Õ…Ñ¥½¹½±½È€¤ì($%¥˜€ ©Í½¸¹…¹¥Í½ÑÉ½Áä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…¹¥Í½ÑÉ½Áä€ô©Í½¸¹…¹¥Í½ÑÉ½Áäì($%¥˜€ ©Í½¸¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸€ô©Í½¸¹…¹¥Í½ÑÉ½ÁåI½Ñ…Ñ¥½¸ì($%¥˜€ ©Í½¸¹™½œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™½œ€ô©Í½¸¹™½œì($%¥˜€ ©Í½¸¹™±…ÑM¡…‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™±…ÑM¡…‘¥¹œ€ô©Í½¸¹™±…ÑM¡…‘¥¹œì($%¥˜€ ©Í½¸¹‰±•¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘¥¹œ€ô©Í½¸¹‰±•¹‘¥¹œì($%¥˜€ ©Í½¸¹½µ‰¥¹”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½µ‰¥¹”€ô©Í½¸¹½µ‰¥¹”ì($%¥˜€ ©Í½¸¹Í¥‘”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¥‘”€ô©Í½¸¹Í¥‘”ì($%¥˜€ ©Í½¸¹Í¡…‘½ÝM¥‘”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡…‘½ÝM¥‘”€ô©Í½¸¹Í¡…‘½ÝM¥‘”ì($%¥˜€ ©Í½¸¹½Á…¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½Á…¥Ñä€ô©Í½¸¹½Á…¥Ñäì($%¥˜€ ©Í½¸¹ÑÉ…¹ÍÁ…É•¹Ð€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÑÉ…¹ÍÁ…É•¹Ð€ô©Í½¸¹ÑÉ…¹ÍÁ…É•¹Ðì($%¥˜€ ©Í½¸¹…±Á¡…Q•ÍÐ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…Q•ÍÐ€ô©Í½¸¹…±Á¡…Q•ÍÐì($%¥˜€ ©Í½¸¹…±Á¡…!…Í €„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…!…Í €ô©Í½¸¹…±Á¡…!…Í ì($%¥˜€ ©Í½¸¹‘•ÁÑ¡Õ¹Œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•ÁÑ¡Õ¹Œ€ô©Í½¸¹‘•ÁÑ¡Õ¹Œì($%¥˜€ ©Í½¸¹‘•ÁÑ¡Q•ÍÐ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•ÁÑ¡Q•ÍÐ€ô©Í½¸¹‘•ÁÑ¡Q•ÍÐì($%¥˜€ ©Í½¸¹‘•ÁÑ¡]É¥Ñ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•ÁÑ¡]É¥Ñ”€ô©Í½¸¹‘•ÁÑ¡]É¥Ñ”ì($%¥˜€ ©Í½¸¹½±½É]É¥Ñ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹½±½É]É¥Ñ”€ô©Í½¸¹½±½É]É¥Ñ”ì($%¥˜€ ©Í½¸¹‰±•¹‘MÉŒ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘MÉŒ€ô©Í½¸¹‰±•¹‘MÉŒì($%¥˜€ ©Í½¸¹‰±•¹‘ÍÐ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÍÐ€ô©Í½¸¹‰±•¹‘ÍÐì($%¥˜€ ©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÅÕ…Ñ¥½¸€ô©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¸ì($%¥˜€ ©Í½¸¹‰±•¹‘MÉ±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘MÉ±Á¡„€ô©Í½¸¹‰±•¹‘MÉ±Á¡„ì($%¥˜€ ©Í½¸¹‰±•¹‘ÍÑ±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÍÑ±Á¡„€ô©Í½¸¹‰±•¹‘ÍÑ±Á¡„ì($%¥˜€ ©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¹±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘ÅÕ…Ñ¥½¹±Á¡„€ô©Í½¸¹‰±•¹‘ÅÕ…Ñ¥½¹±Á¡„ì($%¥˜€ ©Í½¸¹‰±•¹‘½±½È€„ôôÕ¹‘•™¥¹•€˜˜µ…Ñ•É¥…°¹‰±•¹‘½±½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘½±½È¹Í•Ñ!•à ©Í½¸¹‰±•¹‘½±½È€¤ì($%¥˜€ ©Í½¸¹‰±•¹‘±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰±•¹‘±Á¡„€ô©Í½¸¹‰±•¹‘±Á¡„ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±]É¥Ñ•5…Í¬€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±]É¥Ñ•5…Í¬€ô©Í½¸¹ÍÑ•¹¥±]É¥Ñ•5…Í¬ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±Õ¹Œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±Õ¹Œ€ô©Í½¸¹ÍÑ•¹¥±Õ¹Œì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±I•˜€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±I•˜€ô©Í½¸¹ÍÑ•¹¥±I•˜ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±Õ¹5…Í¬€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±Õ¹5…Í¬€ô©Í½¸¹ÍÑ•¹¥±Õ¹5…Í¬ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±…¥°€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±…¥°€ô©Í½¸¹ÍÑ•¹¥±…¥°ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±i…¥°€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±i…¥°€ô©Í½¸¹ÍÑ•¹¥±i…¥°ì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±iA…ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±iA…ÍÌ€ô©Í½¸¹ÍÑ•¹¥±iA…ÍÌì($%¥˜€ ©Í½¸¹ÍÑ•¹¥±]É¥Ñ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÑ•¹¥±]É¥Ñ”€ô©Í½¸¹ÍÑ•¹¥±]É¥Ñ”ì(($%¥˜€ ©Í½¸¹Ý¥É•™É…µ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ”€ô©Í½¸¹Ý¥É•™É…µ”ì($%¥˜€ ©Í½¸¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ €ô©Í½¸¹Ý¥É•™É…µ•1¥¹•Ý¥‘Ñ ì($%¥˜€ ©Í½¸¹Ý¥É•™É…µ•1¥¹•…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ•1¥¹•…À€ô©Í½¸¹Ý¥É•™É…µ•1¥¹•…Àì($%¥˜€ ©Í½¸¹Ý¥É•™É…µ•1¥¹•©½¥¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ý¥É•™É…µ•1¥¹•©½¥¸€ô©Í½¸¹Ý¥É•™É…µ•1¥¹•©½¥¸ì(($%¥˜€ ©Í½¸¹É½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É½Ñ…Ñ¥½¸€ô©Í½¸¹É½Ñ…Ñ¥½¸ì(($%¥˜€ ©Í½¸¹±¥¹•Ý¥‘Ñ €„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¹•Ý¥‘Ñ €ô©Í½¸¹±¥¹•Ý¥‘Ñ ì($%¥˜€ ©Í½¸¹‘…Í¡M¥é”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘…Í¡M¥é”€ô©Í½¸¹‘…Í¡M¥é”ì($%¥˜€ ©Í½¸¹…ÁM¥é”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…ÁM¥é”€ô©Í½¸¹…ÁM¥é”ì($%¥˜€ ©Í½¸¹Í…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í…±”€ô©Í½¸¹Í…±”ì(($%¥˜€ ©Í½¸¹Á½±å½¹=™™Í•Ð€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Á½±å½¹=™™Í•Ð€ô©Í½¸¹Á½±å½¹=™™Í•Ðì($%¥˜€ ©Í½¸¹Á½±å½¹=™™Í•Ñ…Ñ½È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Á½±å½¹=™™Í•Ñ…Ñ½È€ô©Í½¸¹Á½±å½¹=™™Í•Ñ…Ñ½Èì($%¥˜€ ©Í½¸¹Á½±å½¹=™™Í•ÑU¹¥ÑÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Á½±å½¹=™™Í•ÑU¹¥ÑÌ€ô©Í½¸¹Á½±å½¹=™™Í•ÑU¹¥ÑÌì(($%¥˜€ ©Í½¸¹‘¥Ñ¡•É¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥Ñ¡•É¥¹œ€ô©Í½¸¹‘¥Ñ¡•É¥¹œì(($%¥˜€ ©Í½¸¹…±Á¡…Q½½Ù•É…”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…Q½½Ù•É…”€ô©Í½¸¹…±Á¡…Q½½Ù•É…”ì($%¥˜€ ©Í½¸¹ÁÉ•µÕ±Ñ¥Á±¥•‘±Á¡„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÁÉ•µÕ±Ñ¥Á±¥•‘±Á¡„€ô©Í½¸¹ÁÉ•µÕ±Ñ¥Á±¥•‘±Á¡„ì($%¥˜€ ©Í½¸¹™½É•M¥¹±•A…ÍÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™½É•M¥¹±•A…ÍÌ€ô©Í½¸¹™½É•M¥¹±•A…ÍÌì(($%¥˜€ ©Í½¸¹Ù¥Í¥‰±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ù¥Í¥‰±”€ô©Í½¸¹Ù¥Í¥‰±”ì(($%¥˜€ ©Í½¸¹Ñ½¹•5…ÁÁ•€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ñ½¹•5…ÁÁ•€ô©Í½¸¹Ñ½¹•5…ÁÁ•ì(($%¥˜€ ©Í½¸¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÕÍ•É…Ñ„€ô©Í½¸¹ÕÍ•É…Ñ„ì(($%¥˜€ ©Í½¸¹Ù•ÉÑ•á½±½ÉÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$%¥˜€ ÑåÁ•½˜©Í½¸¹Ù•ÉÑ•á½±½ÉÌ€ôôô€¹Õµ‰•Èœ€¤ì(($$$%µ…Ñ•É¥…°¹Ù•ÉÑ•á½±½ÉÌ€ô€ ©Í½¸¹Ù•ÉÑ•á½±½ÉÌ€ø€À€¤€üÑÉÕ”€è™…±Í”ì(($$%ô•±Í”ì(($$$%µ…Ñ•É¥…°¹Ù•ÉÑ•á½±½ÉÌ€ô©Í½¸¹Ù•ÉÑ•á½±½ÉÌì(($$%ô(($%ô(($$¼¼M¡…‘•È5…Ñ•É¥…°(($%¥˜€ ©Í½¸¹Õ¹¥™½ÉµÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ½¹ÍÐ¹…µ”¥¸©Í½¸¹Õ¹¥™½ÉµÌ€¤ì(($$$%½¹ÍÐÕ¹¥™½É´€ô©Í½¸¹Õ¹¥™½ÉµÍl¹…µ”tì(($$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t€ôíôì(($$$%ÍÝ¥Ñ € Õ¹¥™½É´¹ÑåÁ”€¤ì(($$$$%…Í”€Ðœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô•ÑQ•áÑÕÉ” Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€Œœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•Ü½±½È ¤¹Í•Ñ!•à Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€ØÈœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•ÜY•Ñ½ÈÈ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€ØÌœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•ÜY•Ñ½ÈÌ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€ØÐœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•ÜY•Ñ½ÈÐ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€´Ìœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•Ü5…ÑÉ¥àÌ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%…Í”€´Ðœè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ô¹•Ü5…ÑÉ¥àÐ ¤¹™É½µÉÉ…ä Õ¹¥™½É´¹Ù…±Õ”€¤ì($$$$$%‰É•…¬ì(($$$$%‘•™…Õ±Ðè($$$$$%µ…Ñ•É¥…°¹Õ¹¥™½ÉµÍl¹…µ”t¹Ù…±Õ”€ôÕ¹¥™½É´¹Ù…±Õ”ì(($$$%ô(($$%ô(($%ô(($%¥˜€ ©Í½¸¹‘•™¥¹•Ì€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘•™¥¹•Ì€ô©Í½¸¹‘•™¥¹•Ìì($%¥˜€ ©Í½¸¹Ù•ÉÑ•áM¡…‘•È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ù•ÉÑ•áM¡…‘•È€ô©Í½¸¹Ù•ÉÑ•áM¡…‘•Èì($%¥˜€ ©Í½¸¹™É…µ•¹ÑM¡…‘•È€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹™É…µ•¹ÑM¡…‘•È€ô©Í½¸¹™É…µ•¹ÑM¡…‘•Èì($%¥˜€ ©Í½¸¹±Í±Y•ÉÍ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±Í±Y•ÉÍ¥½¸€ô©Í½¸¹±Í±Y•ÉÍ¥½¸ì(($%¥˜€ ©Í½¸¹•áÑ•¹Í¥½¹Ì€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ½¹ÍÐ­•ä¥¸©Í½¸¹•áÑ•¹Í¥½¹Ì€¤ì(($$$%µ…Ñ•É¥…°¹•áÑ•¹Í¥½¹Íl­•ät€ô©Í½¸¹•áÑ•¹Í¥½¹Íl­•ätì(($$%ô(($%ô(($%¥˜€ ©Í½¸¹±¥¡ÑÌ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¡ÑÌ€ô©Í½¸¹±¥¡ÑÌì($%¥˜€ ©Í½¸¹±¥ÁÁ¥¹œ€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥ÁÁ¥¹œ€ô©Í½¸¹±¥ÁÁ¥¹œì(($$¼¼™½ÈA½¥¹ÑÍ5…Ñ•É¥…°(($%¥˜€ ©Í½¸¹Í¥é”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¥é”€ô©Í½¸¹Í¥é”ì($%¥˜€ ©Í½¸¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸€ô©Í½¸¹Í¥é•ÑÑ•¹Õ…Ñ¥½¸ì(($$¼¼µ…ÁÌ(($%¥˜€ ©Í½¸¹µ…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹µ…À€¤ì($%¥˜€ ©Í½¸¹µ…Ñ…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ…Ñ…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹µ…Ñ…À€¤ì(($%¥˜€ ©Í½¸¹…±Á¡…5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…±Á¡…5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹…±Á¡…5…À€¤ì(($%¥˜€ ©Í½¸¹‰ÕµÁ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰ÕµÁ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹‰ÕµÁ5…À€¤ì($%¥˜€ ©Í½¸¹‰ÕµÁM…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‰ÕµÁM…±”€ô©Í½¸¹‰ÕµÁM…±”ì(($%¥˜€ ©Í½¸¹¹½Éµ…±5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¹½Éµ…±5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹¹½Éµ…±5…À€¤ì($%¥˜€ ©Í½¸¹¹½Éµ…±5…ÁQåÁ”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¹½Éµ…±5…ÁQåÁ”€ô©Í½¸¹¹½Éµ…±5…ÁQåÁ”ì($%¥˜€ ©Í½¸¹¹½Éµ…±M…±”€„ôôÕ¹‘•™¥¹•€¤ì(($$%±•Ð¹½Éµ…±M…±”€ô©Í½¸¹¹½Éµ…±M…±”ì(($$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¹½Éµ…±M…±”€¤€ôôô™…±Í”€¤ì(($$$$¼¼	±•¹‘•È•áÁ½ÉÑ•ÈÕÍ•Ñ¼•áÁ½ÉÐ„Í…±…È¸M•”€ŒÜÐÔä(($$$%¹½Éµ…±M…±”€ôl¹½Éµ…±M…±”°¹½Éµ…±M…±”tì(($$%ô(($$%µ…Ñ•É¥…°¹¹½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ ¤¹™É½µÉÉ…ä ¹½Éµ…±M…±”€¤ì(($%ô(($%¥˜€ ©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥ÍÁ±…•µ•¹Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ5…À€¤ì($%¥˜€ ©Í½¸¹‘¥ÍÁ±…•µ•¹ÑM…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥ÍÁ±…•µ•¹ÑM…±”€ô©Í½¸¹‘¥ÍÁ±…•µ•¹ÑM…±”ì($%¥˜€ ©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ì€ô©Í½¸¹‘¥ÍÁ±…•µ•¹Ñ	¥…Ìì(($%¥˜€ ©Í½¸¹É½Õ¡¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É½Õ¡¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹É½Õ¡¹•ÍÍ5…À€¤ì($%¥˜€ ©Í½¸¹µ•Ñ…±¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹µ•Ñ…±¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹µ•Ñ…±¹•ÍÍ5…À€¤ì(($%¥˜€ ©Í½¸¹•µ¥ÍÍ¥Ù•5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù•5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹•µ¥ÍÍ¥Ù•5…À€¤ì($%¥˜€ ©Í½¸¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñä€ô©Í½¸¹•µ¥ÍÍ¥Ù•%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÍÁ•Õ±…É5…À€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÍÁ•Õ±…É%¹Ñ•¹Í¥Ñå5…À€¤ì($%¥˜€ ©Í½¸¹ÍÁ•Õ±…É½±½É5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÍÁ•Õ±…É½±½É5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÍÁ•Õ±…É½±½É5…À€¤ì(($%¥˜€ ©Í½¸¹•¹Ù5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•¹Ù5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹•¹Ù5…À€¤ì($%¥˜€ ©Í½¸¹•¹Ù5…Á%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹•¹Ù5…Á%¹Ñ•¹Í¥Ñä€ô©Í½¸¹•¹Ù5…Á%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹É•™±•Ñ¥Ù¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É•™±•Ñ¥Ù¥Ñä€ô©Í½¸¹É•™±•Ñ¥Ù¥Ñäì($%¥˜€ ©Í½¸¹É•™É…Ñ¥½¹I…Ñ¥¼€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É•™É…Ñ¥½¹I…Ñ¥¼€ô©Í½¸¹É•™É…Ñ¥½¹I…Ñ¥¼ì(($%¥˜€ ©Í½¸¹±¥¡Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¡Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±¥¡Ñ5…À€¤ì($%¥˜€ ©Í½¸¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñä€ô©Í½¸¹±¥¡Ñ5…Á%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹…½5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…½5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹…½5…À€¤ì($%¥˜€ ©Í½¸¹…½5…Á%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…½5…Á%¹Ñ•¹Í¥Ñä€ô©Í½¸¹…½5…Á%¹Ñ•¹Í¥Ñäì(($%¥˜€ ©Í½¸¹É…‘¥•¹Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹É…‘¥•¹Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹É…‘¥•¹Ñ5…À€¤ì(($%¥˜€ ©Í½¸¹±•…É½…Ñ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ñ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±•…É½…Ñ5…À€¤ì($%¥˜€ ©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±•…É½…ÑI½Õ¡¹•ÍÍ5…À€¤ì($%¥˜€ ©Í½¸¹±•…É½…Ñ9½Éµ…±5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ñ9½Éµ…±5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹±•…É½…Ñ9½Éµ…±5…À€¤ì($%¥˜€ ©Í½¸¹±•…É½…Ñ9½Éµ…±M…±”€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹±•…É½…Ñ9½Éµ…±M…±”€ô¹•ÜY•Ñ½ÈÈ ¤¹™É½µÉÉ…ä ©Í½¸¹±•…É½…Ñ9½Éµ…±M…±”€¤ì(($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹¥É¥‘•Í•¹•5…À€¤ì($%¥˜€ ©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹¥É¥‘•Í•¹•Q¡¥­¹•ÍÍ5…À€¤ì(($%¥˜€ ©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹ÑÉ…¹Íµ¥ÍÍ¥½¹5…À€¤ì($%¥˜€ ©Í½¸¹Ñ¡¥­¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Ñ¡¥­¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹Ñ¡¥­¹•ÍÍ5…À€¤ì(($%¥˜€ ©Í½¸¹…¹¥Í½ÑÉ½Áå5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹…¹¥Í½ÑÉ½Áå5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹…¹¥Í½ÑÉ½Áå5…À€¤ì(($%¥˜€ ©Í½¸¹Í¡••¹½±½É5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹½±½É5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹Í¡••¹½±½É5…À€¤ì($%¥˜€ ©Í½¸¹Í¡••¹I½Õ¡¹•ÍÍ5…À€„ôôÕ¹‘•™¥¹•€¤µ…Ñ•É¥…°¹Í¡••¹I½Õ¡¹•ÍÍ5…À€ô•ÑQ•áÑÕÉ” ©Í½¸¹Í¡••¹I½Õ¡¹•ÍÍ5…À€¤ì(($%É•ÑÕÉ¸µ…Ñ•É¥…°ì((%ô((%Í•ÑQ•áÑÕÉ•Ì Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Ñ•áÑÕÉ•Ì€ôÙ…±Õ”ì($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ…Ñ¥ŒÉ•…Ñ•5…Ñ•É¥…±É½µQåÁ” ÑåÁ”€¤ì(($%½¹ÍÐµ…Ñ•É¥…±1¥ˆ€ôì($$%M¡…‘½Ý5…Ñ•É¥…°°($$%MÁÉ¥Ñ•5…Ñ•É¥…°°($$%I…ÝM¡…‘•É5…Ñ•É¥…°°($$%M¡…‘•É5…Ñ•É¥…°°($$%A½¥¹ÑÍ5…Ñ•É¥…°°($$%5•Í¡A¡åÍ¥…±5…Ñ•É¥…°°($$%5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°°($$%5•Í¡A¡½¹5…Ñ•É¥…°°($$%5•Í¡Q½½¹5…Ñ•É¥…°°($$%5•Í¡9½Éµ…±5…Ñ•É¥…°°($$%5•Í¡1…µ‰•ÉÑ5…Ñ•É¥…°°($$%5•Í¡•ÁÑ¡5…Ñ•É¥…°°($$%5•Í¡¥ÍÑ…¹•5…Ñ•É¥…°°($$%5•Í¡	…Í¥5…Ñ•É¥…°°($$%5•Í¡5…Ñ…Á5…Ñ•É¥…°°($$%1¥¹•…Í¡•‘5…Ñ•É¥…°°($$%1¥¹•	…Í¥5…Ñ•É¥…°°($$%5…Ñ•É¥…°($%ôì(($%É•ÑÕÉ¸¹•Üµ…Ñ•É¥…±1¥‰lÑåÁ”t ¤ì((%ô()ô()±…ÍÌ1½…‘•ÉUÑ¥±Ìì((%ÍÑ…Ñ¥Œ‘•½‘•Q•áÐ …ÉÉ…ä€¤ì(($%¥˜€ ÑåÁ•½˜Q•áÑ•½‘•È€„ôô€Õ¹‘•™¥¹•œ€¤ì(($$%É•ÑÕÉ¸¹•ÜQ•áÑ•½‘•È ¤¹‘•½‘” …ÉÉ…ä€¤ì(($%ô(($$¼¼Ù½¥Ñ¡”MÑÉ¥¹œ¹™É½µ¡…É½‘”¹…ÁÁ±ä¡¹Õ±°°…ÉÉ…ä¤Í¡½ÉÑÕÐ°Ý¡¥ ($$¼¼Ñ¡É½ÝÌ„€‰µ…á¥µÕ´…±°ÍÑ…¬Í¥é”•á••‘•ˆ•ÉÉ½È™½È±…É”…ÉÉ…åÌ¸(($%±•ÐÌ€ô€œœì(($%™½È€ ±•Ð¤€ô€À°¥°€ô…ÉÉ…ä¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$¼¼%µÁ±¥¥Ñ±ä…ÍÍÕµ•Ì±¥ÑÑ±”µ•¹‘¥…¸¸($$%Ì€¬ôMÑÉ¥¹œ¹™É½µ¡…É½‘” …ÉÉ…ål¤t€¤ì(($%ô(($%ÑÉäì(($$$¼¼µ•É•ÌµÕ±Ñ¤µ‰åÑ”ÕÑ˜´à¡…É…Ñ•ÉÌ¸(($$%É•ÑÕÉ¸‘•½‘•UI%½µÁ½¹•¹Ð •Í…Á” Ì€¤€¤ì(($%ô…Ñ € ”€¤ì€¼¼Í•”€ŒÄØÌÔà(($$%É•ÑÕÉ¸Ìì(($%ô((%ô((%ÍÑ…Ñ¥Œ•áÑÉ…ÑUÉ±	…Í” ÕÉ°€¤ì(($%½¹ÍÐ¥¹‘•à€ôÕÉ°¹±…ÍÑ%¹‘•á=˜ €œ¼œ€¤ì(($%¥˜€ ¥¹‘•à€ôôô€´€Ä€¤É•ÑÕÉ¸€œ¸¼œì(($%É•ÑÕÉ¸ÕÉ°¹Í±¥” €À°¥¹‘•à€¬€Ä€¤ì((%ô((%ÍÑ…Ñ¥ŒÉ•Í½±Ù•UI0 ÕÉ°°Á…Ñ €¤ì(($$¼¼%¹Ù…±¥UI0($%¥˜€ ÑåÁ•½˜ÕÉ°€„ôô€ÍÑÉ¥¹œœñðÕÉ°€ôôô€œœ€¤É•ÑÕÉ¸€œœì(($$¼¼!½ÍÐI•±…Ñ¥Ù”UI0($%¥˜€ €½y¡ÑÑÁÌüép½p¼½¤¹Ñ•ÍÐ Á…Ñ €¤€˜˜€½yp¼¼¹Ñ•ÍÐ ÕÉ°€¤€¤ì(($$%Á…Ñ €ôÁ…Ñ ¹É•Á±…” €¼¡y¡ÑÑÁÌüép½p½myp½t¬¤¸¨½¤°€œÄœ€¤ì(($%ô(($$¼¼‰Í½±ÕÑ”UI0¡ÑÑÀè¼¼±¡ÑÑÁÌè¼¼°¼¼($%¥˜€ €½x¡¡ÑÑÁÌüè¤ýp½p¼½¤¹Ñ•ÍÐ ÕÉ°€¤€¤É•ÑÕÉ¸ÕÉ°ì(($$¼¼…Ñ„UI$($%¥˜€ €½y‘…Ñ„è¸¨°¸¨½¤¹Ñ•ÍÐ ÕÉ°€¤€¤É•ÑÕÉ¸ÕÉ°ì(($$¼¼	±½ˆUI0($%¥˜€ €½y‰±½ˆè¸¨½¤¹Ñ•ÍÐ ÕÉ°€¤€¤É•ÑÕÉ¸ÕÉ°ì(($$¼¼I•±…Ñ¥Ù”UI0($%É•ÑÕÉ¸Á…Ñ €¬ÕÉ°ì((%ô()ô()±…ÍÌ%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä•áÑ•¹‘Ì	Õ™™•É•½µ•ÑÉäì((%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥Í%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉäœì($%Ñ¡¥Ì¹¥¹ÍÑ…¹•½Õ¹Ð€ô%¹™¥¹¥Ñäì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹¥¹ÍÑ…¹•½Õ¹Ð€ôÍ½ÕÉ”¹¥¹ÍÑ…¹•½Õ¹Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½)M=8 ¤ì(($%½¹ÍÐ‘…Ñ„€ôÍÕÁ•È¹Ñ½)M=8 ¤ì(($%‘…Ñ„¹¥¹ÍÑ…¹•½Õ¹Ð€ôÑ¡¥Ì¹¥¹ÍÑ…¹•½Õ¹Ðì(($%‘…Ñ„¹¥Í%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä€ôÑÉÕ”ì(($%É•ÑÕÉ¸‘…Ñ„ì((%ô()ô()±…ÍÌ	Õ™™•É•½µ•ÑÉå1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Í½Á”¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Í½Á”¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Í½Á”¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Í½Á”¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%ÑÉäì(($$$%½¹1½… Í½Á”¹Á…ÉÍ” )M=8¹Á…ÉÍ” Ñ•áÐ€¤€¤€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¥˜€ ½¹ÉÉ½È€¤ì(($$$$%½¹ÉÉ½È ”€¤ì(($$$%ô•±Í”ì(($$$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$$%ô(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô((%Á…ÉÍ” ©Í½¸€¤ì(($%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•É5…À€ôíôì($%½¹ÍÐ…ÉÉ…å	Õ™™•É5…À€ôíôì(($%™Õ¹Ñ¥½¸•Ñ%¹Ñ•É±•…Ù•‘	Õ™™•È ©Í½¸°ÕÕ¥€¤ì(($$%¥˜€ ¥¹Ñ•É±•…Ù•‘	Õ™™•É5…ÁlÕÕ¥t€„ôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸¥¹Ñ•É±•…Ù•‘	Õ™™•É5…ÁlÕÕ¥tì(($$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•ÉÌ€ô©Í½¸¹¥¹Ñ•É±•…Ù•‘	Õ™™•ÉÌì($$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•È€ô¥¹Ñ•É±•…Ù•‘	Õ™™•ÉÍlÕÕ¥tì(($$%½¹ÍÐ‰Õ™™•È€ô•ÑÉÉ…å	Õ™™•È ©Í½¸°¥¹Ñ•É±•…Ù•‘	Õ™™•È¹‰Õ™™•È€¤ì(($$%½¹ÍÐ…ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä ¥¹Ñ•É±•…Ù•‘	Õ™™•È¹ÑåÁ”°‰Õ™™•È€¤ì($$%½¹ÍÐ¥ˆ€ô¹•Ü%¹Ñ•É±•…Ù•‘	Õ™™•È …ÉÉ…ä°¥¹Ñ•É±•…Ù•‘	Õ™™•È¹ÍÑÉ¥‘”€¤ì($$%¥ˆ¹ÕÕ¥€ô¥¹Ñ•É±•…Ù•‘	Õ™™•È¹ÕÕ¥ì(($$%¥¹Ñ•É±•…Ù•‘	Õ™™•É5…ÁlÕÕ¥t€ô¥ˆì(($$%É•ÑÕÉ¸¥ˆì(($%ô(($%™Õ¹Ñ¥½¸•ÑÉÉ…å	Õ™™•È ©Í½¸°ÕÕ¥€¤ì(($$%¥˜€ …ÉÉ…å	Õ™™•É5…ÁlÕÕ¥t€„ôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸…ÉÉ…å	Õ™™•É5…ÁlÕÕ¥tì(($$%½¹ÍÐ…ÉÉ…å	Õ™™•ÉÌ€ô©Í½¸¹…ÉÉ…å	Õ™™•ÉÌì($$%½¹ÍÐ…ÉÉ…å	Õ™™•È€ô…ÉÉ…å	Õ™™•ÉÍlÕÕ¥tì(($$%½¹ÍÐ…ˆ€ô¹•ÜU¥¹ÐÌÉÉÉ…ä …ÉÉ…å	Õ™™•È€¤¹‰Õ™™•Èì(($$%…ÉÉ…å	Õ™™•É5…ÁlÕÕ¥t€ô…ˆì(($$%É•ÑÕÉ¸…ˆì(($%ô(($%½¹ÍÐ•½µ•ÑÉä€ô©Í½¸¹¥Í%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä€ü¹•Ü%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä ¤€è¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%½¹ÍÐ¥¹‘•à€ô©Í½¸¹‘…Ñ„¹¥¹‘•àì(($%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐÑåÁ•‘ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä ¥¹‘•à¹ÑåÁ”°¥¹‘•à¹…ÉÉ…ä€¤ì($$%•½µ•ÑÉä¹Í•Ñ%¹‘•à ¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÑåÁ•‘ÉÉ…ä°€Ä€¤€¤ì(($%ô(($%½¹ÍÐ…ÑÑÉ¥‰ÕÑ•Ì€ô©Í½¸¹‘…Ñ„¹…ÑÑÉ¥‰ÕÑ•Ìì(($%™½È€ ½¹ÍÐ­•ä¥¸…ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$%½¹ÍÐ…ÑÑÉ¥‰ÕÑ”€ô…ÑÑÉ¥‰ÕÑ•Íl­•ätì($$%±•Ð‰Õ™™•ÉÑÑÉ¥‰ÕÑ”ì(($$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¥Í%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($$$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•È€ô•Ñ%¹Ñ•É±•…Ù•‘	Õ™™•È ©Í½¸¹‘…Ñ„°…ÑÑÉ¥‰ÕÑ”¹‘…Ñ„€¤ì($$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹Ñ•É±•…Ù•‘	Õ™™•È°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹½™™Í•Ð°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$%ô•±Í”ì(($$$%½¹ÍÐÑåÁ•‘ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä …ÑÑÉ¥‰ÕÑ”¹ÑåÁ”°…ÑÑÉ¥‰ÕÑ”¹…ÉÉ…ä€¤ì($$$%½¹ÍÐ‰Õ™™•ÉÑÑÉ¥‰ÕÑ•½¹ÍÑÈ€ô…ÑÑÉ¥‰ÕÑ”¹¥Í%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€ü%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€è	Õ™™•ÉÑÑÉ¥‰ÕÑ”ì($$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü‰Õ™™•ÉÑÑÉ¥‰ÕÑ•½¹ÍÑÈ ÑåÁ•‘ÉÉ…ä°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$%ô(($$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤‰Õ™™•ÉÑÑÉ¥‰ÕÑ”¹¹…µ”€ô…ÑÑÉ¥‰ÕÑ”¹¹…µ”ì($$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹ÕÍ…”€„ôôÕ¹‘•™¥¹•€¤‰Õ™™•ÉÑÑÉ¥‰ÕÑ”¹Í•ÑUÍ…” …ÑÑÉ¥‰ÕÑ”¹ÕÍ…”€¤ì(($$%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” ­•ä°‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($%ô(($%½¹ÍÐµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€ô©Í½¸¹‘…Ñ„¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ìì(($%¥˜€ µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$%™½È€ ½¹ÍÐ­•ä¥¸µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$$%½¹ÍÐ…ÑÑÉ¥‰ÕÑ•ÉÉ…ä€ôµ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Íl­•ätì(($$$%½¹ÍÐ…ÉÉ…ä€ômtì(($$$%™½È€ ±•Ð¤€ô€À°¥°€ô…ÑÑÉ¥‰ÕÑ•ÉÉ…ä¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$$%½¹ÍÐ…ÑÑÉ¥‰ÕÑ”€ô…ÑÑÉ¥‰ÕÑ•ÉÉ…ål¤tì($$$$%±•Ð‰Õ™™•ÉÑÑÉ¥‰ÕÑ”ì(($$$$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¥Í%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($$$$$%½¹ÍÐ¥¹Ñ•É±•…Ù•‘	Õ™™•È€ô•Ñ%¹Ñ•É±•…Ù•‘	Õ™™•È ©Í½¸¹‘…Ñ„°…ÑÑÉ¥‰ÕÑ”¹‘…Ñ„€¤ì($$$$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹Ñ•É±•…Ù•‘	Õ™™•È°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹½™™Í•Ð°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$$$%ô•±Í”ì(($$$$$%½¹ÍÐÑåÁ•‘ÉÉ…ä€ô•ÑQåÁ•‘ÉÉ…ä …ÑÑÉ¥‰ÕÑ”¹ÑåÁ”°…ÑÑÉ¥‰ÕÑ”¹…ÉÉ…ä€¤ì($$$$$%‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€ô¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ÑåÁ•‘ÉÉ…ä°…ÑÑÉ¥‰ÕÑ”¹¥Ñ•µM¥é”°…ÑÑÉ¥‰ÕÑ”¹¹½Éµ…±¥é•€¤ì(($$$$%ô(($$$$%¥˜€ …ÑÑÉ¥‰ÕÑ”¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤‰Õ™™•ÉÑÑÉ¥‰ÕÑ”¹¹…µ”€ô…ÑÑÉ¥‰ÕÑ”¹¹…µ”ì($$$$%…ÉÉ…ä¹ÁÕÍ  ‰Õ™™•ÉÑÑÉ¥‰ÕÑ”€¤ì(($$$%ô(($$$%•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Íl­•ät€ô…ÉÉ…äì(($$%ô(($%ô(($%½¹ÍÐµ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”€ô©Í½¸¹‘…Ñ„¹µ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”ì(($%¥˜€ µ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”€¤ì(($$%•½µ•ÑÉä¹µ½ÉÁ¡Q…É•ÑÍI•±…Ñ¥Ù”€ôÑÉÕ”ì(($%ô(($%½¹ÍÐÉ½ÕÁÌ€ô©Í½¸¹‘…Ñ„¹É½ÕÁÌñð©Í½¸¹‘…Ñ„¹‘É…Ý…±±Ìñð©Í½¸¹‘…Ñ„¹½™™Í•ÑÌì(($%¥˜€ É½ÕÁÌ€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°¸€ôÉ½ÕÁÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐÉ½ÕÀ€ôÉ½ÕÁÍl¤tì(($$$%•½µ•ÑÉä¹…‘‘É½ÕÀ É½ÕÀ¹ÍÑ…ÉÐ°É½ÕÀ¹½Õ¹Ð°É½ÕÀ¹µ…Ñ•É¥…±%¹‘•à€¤ì(($$%ô(($%ô(($%½¹ÍÐ‰½Õ¹‘¥¹MÁ¡•É”€ô©Í½¸¹‘…Ñ„¹‰½Õ¹‘¥¹MÁ¡•É”ì(($%¥˜€ ‰½Õ¹‘¥¹MÁ¡•É”€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ•¹Ñ•È€ô¹•ÜY•Ñ½ÈÌ ¤ì(($$%¥˜€ ‰½Õ¹‘¥¹MÁ¡•É”¹•¹Ñ•È€„ôôÕ¹‘•™¥¹•€¤ì(($$$%•¹Ñ•È¹™É½µÉÉ…ä ‰½Õ¹‘¥¹MÁ¡•É”¹•¹Ñ•È€¤ì(($$%ô(($$%•½µ•ÑÉä¹‰½Õ¹‘¥¹MÁ¡•É”€ô¹•ÜMÁ¡•É” •¹Ñ•È°‰½Õ¹‘¥¹MÁ¡•É”¹É…‘¥ÕÌ€¤ì(($%ô(($%¥˜€ ©Í½¸¹¹…µ”€¤•½µ•ÑÉä¹¹…µ”€ô©Í½¸¹¹…µ”ì($%¥˜€ ©Í½¸¹ÕÍ•É…Ñ„€¤•½µ•ÑÉä¹ÕÍ•É…Ñ„€ô©Í½¸¹ÕÍ•É…Ñ„ì(($%É•ÑÕÉ¸•½µ•ÑÉäì((%ô()ô()±…ÍÌ=‰©•Ñ1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐÁ…Ñ €ô€ Ñ¡¥Ì¹Á…Ñ €ôôô€œœ€¤€ü1½…‘•ÉUÑ¥±Ì¹•áÑÉ…ÑUÉ±	…Í” ÕÉ°€¤€èÑ¡¥Ì¹Á…Ñ ì($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ôÑ¡¥Ì¹É•Í½ÕÉ•A…Ñ ñðÁ…Ñ ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ Ñ•áÐ€¤ì(($$%±•Ð©Í½¸€ô¹Õ±°ì(($$%ÑÉäì(($$$%©Í½¸€ô)M=8¹Á…ÉÍ” Ñ•áÐ€¤ì(($$%ô…Ñ € •ÉÉ½È€¤ì(($$$%¥˜€ ½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤½¹ÉÉ½È •ÉÉ½È€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!Ié=‰©•Ñ1½…‘•Èè…¹pÐÁ…ÉÍ”€œ€¬ÕÉ°€¬€œ¸œ°•ÉÉ½È¹µ•ÍÍ…”€¤ì(($$$%É•ÑÕÉ¸ì(($$%ô(($$%½¹ÍÐµ•Ñ…‘…Ñ„€ô©Í½¸¹µ•Ñ…‘…Ñ„ì(($$%¥˜€ µ•Ñ…‘…Ñ„€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”¹Ñ½1½Ý•É…Í” ¤€ôôô€•½µ•ÑÉäœ€¤ì(($$$%¥˜€ ½¹ÉÉ½È€„ôôÕ¹‘•™¥¹•€¤½¹ÉÉ½È ¹•ÜÉÉ½È €Q!I¹=‰©•Ñ1½…‘•Èè…¹pÐ±½…€œ€¬ÕÉ°€¤€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!I¹=‰©•Ñ1½…‘•Èè…¹pÐ±½…€œ€¬ÕÉ°€¤ì($$$%É•ÑÕÉ¸ì(($$%ô(($$%Í½Á”¹Á…ÉÍ” ©Í½¸°½¹1½…€¤ì(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì((%ô((%…Íå¹Œ±½…‘Íå¹Œ ÕÉ°°½¹AÉ½É•ÍÌ€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐÁ…Ñ €ô€ Ñ¡¥Ì¹Á…Ñ €ôôô€œœ€¤€ü1½…‘•ÉUÑ¥±Ì¹•áÑÉ…ÑUÉ±	…Í” ÕÉ°€¤€èÑ¡¥Ì¹Á…Ñ ì($%Ñ¡¥Ì¹É•Í½ÕÉ•A…Ñ €ôÑ¡¥Ì¹É•Í½ÕÉ•A…Ñ ñðÁ…Ñ ì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì(($%½¹ÍÐÑ•áÐ€ô…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ ÕÉ°°½¹AÉ½É•ÍÌ€¤ì(($%½¹ÍÐ©Í½¸€ô)M=8¹Á…ÉÍ” Ñ•áÐ€¤ì(($%½¹ÍÐµ•Ñ…‘…Ñ„€ô©Í½¸¹µ•Ñ…‘…Ñ„ì(($%¥˜€ µ•Ñ…‘…Ñ„€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”€ôôôÕ¹‘•™¥¹•ñðµ•Ñ…‘…Ñ„¹ÑåÁ”¹Ñ½1½Ý•É…Í” ¤€ôôô€•½µ•ÑÉäœ€¤ì(($$%Ñ¡É½Ü¹•ÜÉÉ½È €Q!I¹=‰©•Ñ1½…‘•Èè…¹pÐ±½…€œ€¬ÕÉ°€¤ì(($%ô(($%É•ÑÕÉ¸…Ý…¥ÐÍ½Á”¹Á…ÉÍ•Íå¹Œ ©Í½¸€¤ì((%ô((%Á…ÉÍ” ©Í½¸°½¹1½…€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•¹¥µ…Ñ¥½¹Ì ©Í½¸¹…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ¡…Á•Ì€ôÑ¡¥Ì¹Á…ÉÍ•M¡…Á•Ì ©Í½¸¹Í¡…Á•Ì€¤ì($%½¹ÍÐ•½µ•ÑÉ¥•Ì€ôÑ¡¥Ì¹Á…ÉÍ••½µ•ÑÉ¥•Ì ©Í½¸¹•½µ•ÑÉ¥•Ì°Í¡…Á•Ì€¤ì(($%½¹ÍÐ¥µ…•Ì€ôÑ¡¥Ì¹Á…ÉÍ•%µ…•Ì ©Í½¸¹¥µ…•Ì°™Õ¹Ñ¥½¸€ ¤ì(($$%¥˜€ ½¹1½…€„ôôÕ¹‘•™¥¹•€¤½¹1½… ½‰©•Ð€¤ì(($%ô€¤ì(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôÑ¡¥Ì¹Á…ÉÍ•Q•áÑÕÉ•Ì ©Í½¸¹Ñ•áÑÕÉ•Ì°¥µ…•Ì€¤ì($%½¹ÍÐµ…Ñ•É¥…±Ì€ôÑ¡¥Ì¹Á…ÉÍ•5…Ñ•É¥…±Ì ©Í½¸¹µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì€¤ì(($%½¹ÍÐ½‰©•Ð€ôÑ¡¥Ì¹Á…ÉÍ•=‰©•Ð ©Í½¸¹½‰©•Ð°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ­•±•Ñ½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•M­•±•Ñ½¹Ì ©Í½¸¹Í­•±•Ñ½¹Ì°½‰©•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹‘M­•±•Ñ½¹Ì ½‰©•Ð°Í­•±•Ñ½¹Ì€¤ì(($$¼¼(($%¥˜€ ½¹1½…€„ôôÕ¹‘•™¥¹•€¤ì(($$%±•Ð¡…Í%µ…•Ì€ô™…±Í”ì(($$%™½È€ ½¹ÍÐÕÕ¥¥¸¥µ…•Ì€¤ì(($$$%¥˜€ ¥µ…•ÍlÕÕ¥t¹‘…Ñ„¥¹ÍÑ…¹•½˜!Q51%µ…•±•µ•¹Ð€¤ì(($$$$%¡…Í%µ…•Ì€ôÑÉÕ”ì($$$$%‰É•…¬ì(($$$%ô(($$%ô(($$%¥˜€ ¡…Í%µ…•Ì€ôôô™…±Í”€¤½¹1½… ½‰©•Ð€¤ì(($%ô(($%É•ÑÕÉ¸½‰©•Ðì((%ô((%…Íå¹ŒÁ…ÉÍ•Íå¹Œ ©Í½¸€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•¹¥µ…Ñ¥½¹Ì ©Í½¸¹…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ¡…Á•Ì€ôÑ¡¥Ì¹Á…ÉÍ•M¡…Á•Ì ©Í½¸¹Í¡…Á•Ì€¤ì($%½¹ÍÐ•½µ•ÑÉ¥•Ì€ôÑ¡¥Ì¹Á…ÉÍ••½µ•ÑÉ¥•Ì ©Í½¸¹•½µ•ÑÉ¥•Ì°Í¡…Á•Ì€¤ì(($%½¹ÍÐ¥µ…•Ì€ô…Ý…¥ÐÑ¡¥Ì¹Á…ÉÍ•%µ…•ÍÍå¹Œ ©Í½¸¹¥µ…•Ì€¤ì(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôÑ¡¥Ì¹Á…ÉÍ•Q•áÑÕÉ•Ì ©Í½¸¹Ñ•áÑÕÉ•Ì°¥µ…•Ì€¤ì($%½¹ÍÐµ…Ñ•É¥…±Ì€ôÑ¡¥Ì¹Á…ÉÍ•5…Ñ•É¥…±Ì ©Í½¸¹µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì€¤ì(($%½¹ÍÐ½‰©•Ð€ôÑ¡¥Ì¹Á…ÉÍ•=‰©•Ð ©Í½¸¹½‰©•Ð°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤ì($%½¹ÍÐÍ­•±•Ñ½¹Ì€ôÑ¡¥Ì¹Á…ÉÍ•M­•±•Ñ½¹Ì ©Í½¸¹Í­•±•Ñ½¹Ì°½‰©•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹‘M­•±•Ñ½¹Ì ½‰©•Ð°Í­•±•Ñ½¹Ì€¤ì(($%É•ÑÕÉ¸½‰©•Ðì((%ô((%Á…ÉÍ•M¡…Á•Ì ©Í½¸€¤ì(($%½¹ÍÐÍ¡…Á•Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÍ¡…Á”€ô¹•ÜM¡…Á” ¤¹™É½µ)M=8 ©Í½¹l¤t€¤ì(($$$%Í¡…Á•ÍlÍ¡…Á”¹ÕÕ¥t€ôÍ¡…Á”ì(($$%ô(($%ô(($%É•ÑÕÉ¸Í¡…Á•Ìì((%ô((%Á…ÉÍ•M­•±•Ñ½¹Ì ©Í½¸°½‰©•Ð€¤ì(($%½¹ÍÐÍ­•±•Ñ½¹Ì€ôíôì($%½¹ÍÐ‰½¹•Ì€ôíôì(($$¼¼•¹•É…Ñ”‰½¹”±½½­ÕÀÑ…‰±”(($%½‰©•Ð¹ÑÉ…Ù•ÉÍ” ™Õ¹Ñ¥½¸€ ¡¥±€¤ì(($$%¥˜€ ¡¥±¹¥Í	½¹”€¤‰½¹•Íl¡¥±¹ÕÕ¥t€ô¡¥±ì(($%ô€¤ì(($$¼¼É•…Ñ”Í­•±•Ñ½¹Ì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÍ­•±•Ñ½¸€ô¹•ÜM­•±•Ñ½¸ ¤¹™É½µ)M=8 ©Í½¹l¤t°‰½¹•Ì€¤ì(($$$%Í­•±•Ñ½¹ÍlÍ­•±•Ñ½¸¹ÕÕ¥t€ôÍ­•±•Ñ½¸ì(($$%ô(($%ô(($%É•ÑÕÉ¸Í­•±•Ñ½¹Ìì((%ô((%Á…ÉÍ••½µ•ÑÉ¥•Ì ©Í½¸°Í¡…Á•Ì€¤ì(($%½¹ÍÐ•½µ•ÑÉ¥•Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ‰Õ™™•É•½µ•ÑÉå1½…‘•È€ô¹•Ü	Õ™™•É•½µ•ÑÉå1½…‘•È ¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%±•Ð•½µ•ÑÉäì($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%ÍÝ¥Ñ € ‘…Ñ„¹ÑåÁ”€¤ì(($$$$%…Í”€	Õ™™•É•½µ•ÑÉäœè($$$$%…Í”€%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉäœè(($$$$$%•½µ•ÑÉä€ô‰Õ™™•É•½µ•ÑÉå1½…‘•È¹Á…ÉÍ” ‘…Ñ„€¤ì($$$$$%‰É•…¬ì(($$$$%‘•™…Õ±Ðè(($$$$$%¥˜€ ‘…Ñ„¹ÑåÁ”¥¸•½µ•ÑÉ¥•Ì€¤ì(($$$$$$%•½µ•ÑÉä€ô•½µ•ÑÉ¥•Íl‘…Ñ„¹ÑåÁ”t¹™É½µ)M=8 ‘…Ñ„°Í¡…Á•Ì€¤ì(($$$$$%ô•±Í”ì(($$$$$$%½¹Í½±”¹Ý…É¸ Q!I¹=‰©•Ñ1½…‘•ÈèU¹ÍÕÁÁ½ÉÑ••½µ•ÑÉäÑåÁ”€ˆ‘ì‘…Ñ„¹ÑåÁ”ô‰€€¤ì(($$$$$%ô(($$$%ô(($$$%•½µ•ÑÉä¹ÕÕ¥€ô‘…Ñ„¹ÕÕ¥ì(($$$%¥˜€ ‘…Ñ„¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤•½µ•ÑÉä¹¹…µ”€ô‘…Ñ„¹¹…µ”ì($$$%¥˜€ ‘…Ñ„¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤•½µ•ÑÉä¹ÕÍ•É…Ñ„€ô‘…Ñ„¹ÕÍ•É…Ñ„ì(($$$%•½µ•ÑÉ¥•Íl‘…Ñ„¹ÕÕ¥t€ô•½µ•ÑÉäì(($$%ô(($%ô(($%É•ÑÕÉ¸•½µ•ÑÉ¥•Ìì((%ô((%Á…ÉÍ•5…Ñ•É¥…±Ì ©Í½¸°Ñ•áÑÕÉ•Ì€¤ì(($%½¹ÍÐ…¡”€ôíôì€¼¼5Õ±Ñ¥5…Ñ•É¥…°($%½¹ÍÐµ…Ñ•É¥…±Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ±½…‘•È€ô¹•Ü5…Ñ•É¥…±1½…‘•È ¤ì($$%±½…‘•È¹Í•ÑQ•áÑÕÉ•Ì Ñ•áÑÕÉ•Ì€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%¥˜€ …¡•l‘…Ñ„¹ÕÕ¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%…¡•l‘…Ñ„¹ÕÕ¥t€ô±½…‘•È¹Á…ÉÍ” ‘…Ñ„€¤ì(($$$%ô(($$$%µ…Ñ•É¥…±Íl‘…Ñ„¹ÕÕ¥t€ô…¡•l‘…Ñ„¹ÕÕ¥tì(($$%ô(($%ô(($%É•ÑÕÉ¸µ…Ñ•É¥…±Ìì((%ô((%Á…ÉÍ•¹¥µ…Ñ¥½¹Ì ©Í½¸€¤ì(($%½¹ÍÐ…¹¥µ…Ñ¥½¹Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð©Í½¸¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%½¹ÍÐ±¥À€ô¹¥µ…Ñ¥½¹±¥À¹Á…ÉÍ” ‘…Ñ„€¤ì(($$$%…¹¥µ…Ñ¥½¹Íl±¥À¹ÕÕ¥t€ô±¥Àì(($$%ô(($%ô(($%É•ÑÕÉ¸…¹¥µ…Ñ¥½¹Ìì((%ô((%Á…ÉÍ•%µ…•Ì ©Í½¸°½¹1½…€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì($%½¹ÍÐ¥µ…•Ì€ôíôì(($%±•Ð±½…‘•Èì(($%™Õ¹Ñ¥½¸±½…‘%µ…” ÕÉ°€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$%É•ÑÕÉ¸±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô°Õ¹‘•™¥¹•°™Õ¹Ñ¥½¸€ ¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô€¤ì(($%ô(($%™Õ¹Ñ¥½¸‘•Í•É¥…±¥é•%µ…” ¥µ…”€¤ì(($$%¥˜€ ÑåÁ•½˜¥µ…”€ôôô€ÍÑÉ¥¹œœ€¤ì(($$$%½¹ÍÐÕÉ°€ô¥µ…”ì(($$$%½¹ÍÐÁ…Ñ €ô€½x¡p½p¼¥ð¡m„µét¬è¡p½p¼¤ü¤½¤¹Ñ•ÍÐ ÕÉ°€¤€üÕÉ°€èÍ½Á”¹É•Í½ÕÉ•A…Ñ €¬ÕÉ°ì(($$$%É•ÑÕÉ¸±½…‘%µ…” Á…Ñ €¤ì(($$%ô•±Í”ì(($$$%¥˜€ ¥µ…”¹‘…Ñ„€¤ì(($$$$%É•ÑÕÉ¸ì($$$$$%‘…Ñ„è•ÑQåÁ•‘ÉÉ…ä ¥µ…”¹ÑåÁ”°¥µ…”¹‘…Ñ„€¤°($$$$$%Ý¥‘Ñ è¥µ…”¹Ý¥‘Ñ °($$$$$%¡•¥¡Ðè¥µ…”¹¡•¥¡Ð($$$$%ôì(($$$%ô•±Í”ì(($$$$%É•ÑÕÉ¸¹Õ±°ì(($$$%ô(($$%ô(($%ô(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€˜˜©Í½¸¹±•¹Ñ €ø€À€¤ì(($$%½¹ÍÐµ…¹…•È€ô¹•Ü1½…‘¥¹5…¹…•È ½¹1½…€¤ì(($$%±½…‘•È€ô¹•Ü%µ…•1½…‘•È µ…¹…•È€¤ì($$%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì(($$%™½È€ ±•Ð¤€ô€À°¥°€ô©Í½¸¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$%½¹ÍÐ¥µ…”€ô©Í½¹l¤tì($$$%½¹ÍÐÕÉ°€ô¥µ…”¹ÕÉ°ì(($$$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ÕÉ°€¤€¤ì(($$$$$¼¼±½……ÉÉ…ä½˜¥µ…•Ì”¹œÕ‰•Q•áÑÕÉ”(($$$$%½¹ÍÐ¥µ…•ÉÉ…ä€ômtì(($$$$%™½È€ ±•Ð¨€ô€À°©°€ôÕÉ°¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$$$$%½¹ÍÐÕÉÉ•¹ÑUÉ°€ôÕÉ±l¨tì(($$$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô‘•Í•É¥…±¥é•%µ…” ÕÉÉ•¹ÑUÉ°€¤ì(($$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”€„ôô¹Õ±°€¤ì(($$$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”¥¹ÍÑ…¹•½˜!Q51%µ…•±•µ•¹Ð€¤ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ‘•Í•É¥…±¥é•‘%µ…”€¤ì(($$$$$$%ô•±Í”ì(($$$$$$$$¼¼ÍÁ•¥…°…Í”è¡…¹‘±”…ÉÉ…ä½˜‘…Ñ„Ñ•áÑÕÉ•Ì™½ÈÕ‰”Ñ•áÑÕÉ•Ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ¹•Ü…Ñ…Q•áÑÕÉ” ‘•Í•É¥…±¥é•‘%µ…”¹‘…Ñ„°‘•Í•É¥…±¥é•‘%µ…”¹Ý¥‘Ñ °‘•Í•É¥…±¥é•‘%µ…”¹¡•¥¡Ð€¤€¤ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ¥µ…•ÉÉ…ä€¤ì(($$$%ô•±Í”ì(($$$$$¼¼±½…Í¥¹±”¥µ…”(($$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô‘•Í•É¥…±¥é•%µ…” ¥µ…”¹ÕÉ°€¤ì($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ‘•Í•É¥…±¥é•‘%µ…”€¤ì((($$$%ô(($$%ô(($%ô(($%É•ÑÕÉ¸¥µ…•Ìì((%ô((%…Íå¹ŒÁ…ÉÍ•%µ…•ÍÍå¹Œ ©Í½¸€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì($%½¹ÍÐ¥µ…•Ì€ôíôì(($%±•Ð±½…‘•Èì(($%…Íå¹Œ™Õ¹Ñ¥½¸‘•Í•É¥…±¥é•%µ…” ¥µ…”€¤ì(($$%¥˜€ ÑåÁ•½˜¥µ…”€ôôô€ÍÑÉ¥¹œœ€¤ì(($$$%½¹ÍÐÕÉ°€ô¥µ…”ì(($$$%½¹ÍÐÁ…Ñ €ô€½x¡p½p¼¥ð¡m„µét¬è¡p½p¼¤ü¤½¤¹Ñ•ÍÐ ÕÉ°€¤€üÕÉ°€èÍ½Á”¹É•Í½ÕÉ•A…Ñ €¬ÕÉ°ì(($$$%É•ÑÕÉ¸…Ý…¥Ð±½…‘•È¹±½…‘Íå¹Œ Á…Ñ €¤ì(($$%ô•±Í”ì(($$$%¥˜€ ¥µ…”¹‘…Ñ„€¤ì(($$$$%É•ÑÕÉ¸ì($$$$$%‘…Ñ„è•ÑQåÁ•‘ÉÉ…ä ¥µ…”¹ÑåÁ”°¥µ…”¹‘…Ñ„€¤°($$$$$%Ý¥‘Ñ è¥µ…”¹Ý¥‘Ñ °($$$$$%¡•¥¡Ðè¥µ…”¹¡•¥¡Ð($$$$%ôì(($$$%ô•±Í”ì(($$$$%É•ÑÕÉ¸¹Õ±°ì(($$$%ô(($$%ô(($%ô(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€˜˜©Í½¸¹±•¹Ñ €ø€À€¤ì(($$%±½…‘•È€ô¹•Ü%µ…•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($$%±½…‘•È¹Í•ÑÉ½ÍÍ=É¥¥¸ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€¤ì(($$%™½È€ ±•Ð¤€ô€À°¥°€ô©Í½¸¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$$%½¹ÍÐ¥µ…”€ô©Í½¹l¤tì($$$%½¹ÍÐÕÉ°€ô¥µ…”¹ÕÉ°ì(($$$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ÕÉ°€¤€¤ì(($$$$$¼¼±½……ÉÉ…ä½˜¥µ…•Ì”¹œÕ‰•Q•áÑÕÉ”(($$$$%½¹ÍÐ¥µ…•ÉÉ…ä€ômtì(($$$$%™½È€ ±•Ð¨€ô€À°©°€ôÕÉ°¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$$$$%½¹ÍÐÕÉÉ•¹ÑUÉ°€ôÕÉ±l¨tì(($$$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô…Ý…¥Ð‘•Í•É¥…±¥é•%µ…” ÕÉÉ•¹ÑUÉ°€¤ì(($$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”€„ôô¹Õ±°€¤ì(($$$$$$%¥˜€ ‘•Í•É¥…±¥é•‘%µ…”¥¹ÍÑ…¹•½˜!Q51%µ…•±•µ•¹Ð€¤ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ‘•Í•É¥…±¥é•‘%µ…”€¤ì(($$$$$$%ô•±Í”ì(($$$$$$$$¼¼ÍÁ•¥…°…Í”è¡…¹‘±”…ÉÉ…ä½˜‘…Ñ„Ñ•áÑÕÉ•Ì™½ÈÕ‰”Ñ•áÑÕÉ•Ì(($$$$$$$%¥µ…•ÉÉ…ä¹ÁÕÍ  ¹•Ü…Ñ…Q•áÑÕÉ” ‘•Í•É¥…±¥é•‘%µ…”¹‘…Ñ„°‘•Í•É¥…±¥é•‘%µ…”¹Ý¥‘Ñ °‘•Í•É¥…±¥é•‘%µ…”¹¡•¥¡Ð€¤€¤ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ¥µ…•ÉÉ…ä€¤ì(($$$%ô•±Í”ì(($$$$$¼¼±½…Í¥¹±”¥µ…”(($$$$%½¹ÍÐ‘•Í•É¥…±¥é•‘%µ…”€ô…Ý…¥Ð‘•Í•É¥…±¥é•%µ…” ¥µ…”¹ÕÉ°€¤ì($$$$%¥µ…•Íl¥µ…”¹ÕÕ¥t€ô¹•ÜM½ÕÉ” ‘•Í•É¥…±¥é•‘%µ…”€¤ì(($$$%ô(($$%ô(($%ô(($%É•ÑÕÉ¸¥µ…•Ìì((%ô((%Á…ÉÍ•Q•áÑÕÉ•Ì ©Í½¸°¥µ…•Ì€¤ì(($%™Õ¹Ñ¥½¸Á…ÉÍ•½¹ÍÑ…¹Ð Ù…±Õ”°ÑåÁ”€¤ì(($$%¥˜€ ÑåÁ•½˜Ù…±Õ”€ôôô€¹Õµ‰•Èœ€¤É•ÑÕÉ¸Ù…±Õ”ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•È¹Á…ÉÍ•Q•áÑÕÉ”è½¹ÍÑ…¹ÐÍ¡½Õ±‰”¥¸¹Õµ•É¥Œ™½É´¸œ°Ù…±Õ”€¤ì(($$%É•ÑÕÉ¸ÑåÁ•lÙ…±Õ”tì(($%ô(($%½¹ÍÐÑ•áÑÕÉ•Ì€ôíôì(($%¥˜€ ©Í½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô©Í½¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐ‘…Ñ„€ô©Í½¹l¤tì(($$$%¥˜€ ‘…Ñ„¹¥µ…”€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•Èè9¼€‰¥µ…”ˆÍÁ•¥™¥•™½Èœ°‘…Ñ„¹ÕÕ¥€¤ì(($$$%ô(($$$%¥˜€ ¥µ…•Íl‘…Ñ„¹¥µ…”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•¥µ…”œ°‘…Ñ„¹¥µ…”€¤ì(($$$%ô(($$$%½¹ÍÐÍ½ÕÉ”€ô¥µ…•Íl‘…Ñ„¹¥µ…”tì($$$%½¹ÍÐ¥µ…”€ôÍ½ÕÉ”¹‘…Ñ„ì(($$$%±•ÐÑ•áÑÕÉ”ì(($$$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¥µ…”€¤€¤ì(($$$$%Ñ•áÑÕÉ”€ô¹•ÜÕ‰•Q•áÑÕÉ” ¤ì(($$$$%¥˜€ ¥µ…”¹±•¹Ñ €ôôô€Ø€¤Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($$$%ô•±Í”ì(($$$$%¥˜€ ¥µ…”€˜˜¥µ…”¹‘…Ñ„€¤ì(($$$$$%Ñ•áÑÕÉ”€ô¹•Ü…Ñ…Q•áÑÕÉ” ¤ì(($$$$%ô•±Í”ì(($$$$$%Ñ•áÑÕÉ”€ô¹•ÜQ•áÑÕÉ” ¤ì(($$$$%ô(($$$$%¥˜€ ¥µ…”€¤Ñ•áÑÕÉ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì€¼¼Ñ•áÑÕÉ•Ì…¸¡…Ù”Õ¹‘•™¥¹•¥µ…”‘…Ñ„(($$$%ô(($$$%Ñ•áÑÕÉ”¹Í½ÕÉ”€ôÍ½ÕÉ”ì(($$$%Ñ•áÑÕÉ”¹ÕÕ¥€ô‘…Ñ„¹ÕÕ¥ì(($$$%¥˜€ ‘…Ñ„¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹¹…µ”€ô‘…Ñ„¹¹…µ”ì(($$$%¥˜€ ‘…Ñ„¹µ…ÁÁ¥¹œ€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹µ…ÁÁ¥¹œ€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹µ…ÁÁ¥¹œ°QaQUI}5AA%9€¤ì($$$%¥˜€ ‘…Ñ„¹¡…¹¹•°€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹¡…¹¹•°€ô‘…Ñ„¹¡…¹¹•°ì(($$$%¥˜€ ‘…Ñ„¹½™™Í•Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹½™™Í•Ð¹™É½µÉÉ…ä ‘…Ñ„¹½™™Í•Ð€¤ì($$$%¥˜€ ‘…Ñ„¹É•Á•…Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹É•Á•…Ð¹™É½µÉÉ…ä ‘…Ñ„¹É•Á•…Ð€¤ì($$$%¥˜€ ‘…Ñ„¹•¹Ñ•È€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹•¹Ñ•È¹™É½µÉÉ…ä ‘…Ñ„¹•¹Ñ•È€¤ì($$$%¥˜€ ‘…Ñ„¹É½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹É½Ñ…Ñ¥½¸€ô‘…Ñ„¹É½Ñ…Ñ¥½¸ì(($$$%¥˜€ ‘…Ñ„¹ÝÉ…À€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%Ñ•áÑÕÉ”¹ÝÉ…ÁL€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹ÝÉ…Ál€Àt°QaQUI}]IAA%9€¤ì($$$$%Ñ•áÑÕÉ”¹ÝÉ…ÁP€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹ÝÉ…Ál€Ät°QaQUI}]IAA%9€¤ì(($$$%ô(($$$%¥˜€ ‘…Ñ„¹™½Éµ…Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹™½Éµ…Ð€ô‘…Ñ„¹™½Éµ…Ðì($$$%¥˜€ ‘…Ñ„¹¥¹Ñ•É¹…±½Éµ…Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹¥¹Ñ•É¹…±½Éµ…Ð€ô‘…Ñ„¹¥¹Ñ•É¹…±½Éµ…Ðì($$$%¥˜€ ‘…Ñ„¹ÑåÁ”€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹ÑåÁ”€ô‘…Ñ„¹ÑåÁ”ì($$$%¥˜€ ‘…Ñ„¹½±½ÉMÁ…”€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹½±½ÉMÁ…”€ô‘…Ñ„¹½±½ÉMÁ…”ì($$$%¥˜€ ‘…Ñ„¹•¹½‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹•¹½‘¥¹œ€ô‘…Ñ„¹•¹½‘¥¹œì€¼¼‘•ÁÉ•…Ñ•°ÈÄÔÈ(($$$%¥˜€ ‘…Ñ„¹µ¥¹¥±Ñ•È€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹µ¥¹¥±Ñ•È€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹µ¥¹¥±Ñ•È°QaQUI}%1QH€¤ì($$$%¥˜€ ‘…Ñ„¹µ…¥±Ñ•È€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹µ…¥±Ñ•È€ôÁ…ÉÍ•½¹ÍÑ…¹Ð ‘…Ñ„¹µ…¥±Ñ•È°QaQUI}%1QH€¤ì($$$%¥˜€ ‘…Ñ„¹…¹¥Í½ÑÉ½Áä€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹…¹¥Í½ÑÉ½Áä€ô‘…Ñ„¹…¹¥Í½ÑÉ½Áäì(($$$%¥˜€ ‘…Ñ„¹™±¥Ád€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹™±¥Ád€ô‘…Ñ„¹™±¥Ádì(($$$%¥˜€ ‘…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌ€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹•¹•É…Ñ•5¥Áµ…ÁÌ€ô‘…Ñ„¹•¹•É…Ñ•5¥Áµ…ÁÌì($$$%¥˜€ ‘…Ñ„¹ÁÉ•µÕ±Ñ¥Á±å±Á¡„€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹ÁÉ•µÕ±Ñ¥Á±å±Á¡„€ô‘…Ñ„¹ÁÉ•µÕ±Ñ¥Á±å±Á¡„ì($$$%¥˜€ ‘…Ñ„¹Õ¹Á…­±¥¹µ•¹Ð€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹Õ¹Á…­±¥¹µ•¹Ð€ô‘…Ñ„¹Õ¹Á…­±¥¹µ•¹Ðì($$$%¥˜€ ‘…Ñ„¹½µÁ…É•Õ¹Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹½µÁ…É•Õ¹Ñ¥½¸€ô‘…Ñ„¹½µÁ…É•Õ¹Ñ¥½¸ì(($$$%¥˜€ ‘…Ñ„¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤Ñ•áÑÕÉ”¹ÕÍ•É…Ñ„€ô‘…Ñ„¹ÕÍ•É…Ñ„ì(($$$%Ñ•áÑÕÉ•Íl‘…Ñ„¹ÕÕ¥t€ôÑ•áÑÕÉ”ì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ•áÑÕÉ•Ìì((%ô((%Á…ÉÍ•=‰©•Ð ‘…Ñ„°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤ì(($%±•Ð½‰©•Ðì(($%™Õ¹Ñ¥½¸•Ñ•½µ•ÑÉä ¹…µ”€¤ì(($$%¥˜€ •½µ•ÑÉ¥•Íl¹…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹••½µ•ÑÉäœ°¹…µ”€¤ì(($$%ô(($$%É•ÑÕÉ¸•½µ•ÑÉ¥•Íl¹…µ”tì(($%ô(($%™Õ¹Ñ¥½¸•Ñ5…Ñ•É¥…° ¹…µ”€¤ì(($$%¥˜€ ¹…µ”€ôôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸Õ¹‘•™¥¹•ì(($$%¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¹…µ”€¤€¤ì(($$$%½¹ÍÐ…ÉÉ…ä€ômtì(($$$%™½È€ ±•Ð¤€ô€À°°€ô¹…µ”¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$$%½¹ÍÐÕÕ¥€ô¹…µ•l¤tì(($$$$%¥˜€ µ…Ñ•É¥…±ÍlÕÕ¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•µ…Ñ•É¥…°œ°ÕÕ¥€¤ì(($$$$%ô(($$$$%…ÉÉ…ä¹ÁÕÍ  µ…Ñ•É¥…±ÍlÕÕ¥t€¤ì(($$$%ô(($$$%É•ÑÕÉ¸…ÉÉ…äì(($$%ô(($$%¥˜€ µ…Ñ•É¥…±Íl¹…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•µ…Ñ•É¥…°œ°¹…µ”€¤ì(($$%ô(($$%É•ÑÕÉ¸µ…Ñ•É¥…±Íl¹…µ”tì(($%ô(($%™Õ¹Ñ¥½¸•ÑQ•áÑÕÉ” ÕÕ¥€¤ì(($$%¥˜€ Ñ•áÑÕÉ•ÍlÕÕ¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•ÈèU¹‘•™¥¹•Ñ•áÑÕÉ”œ°ÕÕ¥€¤ì(($$%ô(($$%É•ÑÕÉ¸Ñ•áÑÕÉ•ÍlÕÕ¥tì(($%ô(($%±•Ð•½µ•ÑÉä°µ…Ñ•É¥…°ì(($%ÍÝ¥Ñ € ‘…Ñ„¹ÑåÁ”€¤ì(($$%…Í”€M•¹”œè(($$$%½‰©•Ð€ô¹•ÜM•¹” ¤ì(($$$%¥˜€ ‘…Ñ„¹‰…­É½Õ¹€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%¥˜€ 9Õµ‰•È¹¥Í%¹Ñ••È ‘…Ñ„¹‰…­É½Õ¹€¤€¤ì(($$$$$%½‰©•Ð¹‰…­É½Õ¹€ô¹•Ü½±½È ‘…Ñ„¹‰…­É½Õ¹€¤ì(($$$$%ô•±Í”ì(($$$$$%½‰©•Ð¹‰…­É½Õ¹€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹‰…­É½Õ¹€¤ì(($$$$%ô(($$$%ô(($$$%¥˜€ ‘…Ñ„¹•¹Ù¥É½¹µ•¹Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½‰©•Ð¹•¹Ù¥É½¹µ•¹Ð€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹•¹Ù¥É½¹µ•¹Ð€¤ì(($$$%ô(($$$%¥˜€ ‘…Ñ„¹™½œ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%¥˜€ ‘…Ñ„¹™½œ¹ÑåÁ”€ôôô€½œœ€¤ì(($$$$$%½‰©•Ð¹™½œ€ô¹•Ü½œ ‘…Ñ„¹™½œ¹½±½È°‘…Ñ„¹™½œ¹¹•…È°‘…Ñ„¹™½œ¹™…È€¤ì(($$$$%ô•±Í”¥˜€ ‘…Ñ„¹™½œ¹ÑåÁ”€ôôô€½áÀÈœ€¤ì(($$$$$%½‰©•Ð¹™½œ€ô¹•Ü½áÀÈ ‘…Ñ„¹™½œ¹½±½È°‘…Ñ„¹™½œ¹‘•¹Í¥Ñä€¤ì(($$$$%ô(($$$$%¥˜€ ‘…Ñ„¹™½œ¹¹…µ”€„ôô€œœ€¤ì(($$$$$%½‰©•Ð¹™½œ¹¹…µ”€ô‘…Ñ„¹™½œ¹¹…µ”ì(($$$$%ô(($$$%ô(($$$%¥˜€ ‘…Ñ„¹‰…­É½Õ¹‘	±ÕÉÉ¥¹•ÍÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰…­É½Õ¹‘	±ÕÉÉ¥¹•ÍÌ€ô‘…Ñ„¹‰…­É½Õ¹‘	±ÕÉÉ¥¹•ÍÌì($$$%¥˜€ ‘…Ñ„¹‰…­É½Õ¹‘%¹Ñ•¹Í¥Ñä€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰…­É½Õ¹‘%¹Ñ•¹Í¥Ñä€ô‘…Ñ„¹‰…­É½Õ¹‘%¹Ñ•¹Í¥Ñäì(($$$%‰É•…¬ì(($$%…Í”€A•ÉÍÁ•Ñ¥Ù•…µ•É„œè(($$$%½‰©•Ð€ô¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ ‘…Ñ„¹™½Ø°‘…Ñ„¹…ÍÁ•Ð°‘…Ñ„¹¹•…È°‘…Ñ„¹™…È€¤ì(($$$%¥˜€ ‘…Ñ„¹™½ÕÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™½ÕÌ€ô‘…Ñ„¹™½ÕÌì($$$%¥˜€ ‘…Ñ„¹é½½´€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹é½½´€ô‘…Ñ„¹é½½´ì($$$%¥˜€ ‘…Ñ„¹™¥±µ…Õ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™¥±µ…Õ”€ô‘…Ñ„¹™¥±µ…Õ”ì($$$%¥˜€ ‘…Ñ„¹™¥±µ=™™Í•Ð€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™¥±µ=™™Í•Ð€ô‘…Ñ„¹™¥±µ=™™Í•Ðì($$$%¥˜€ ‘…Ñ„¹Ù¥•Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Ù¥•Ü€ô=‰©•Ð¹…ÍÍ¥¸ íô°‘…Ñ„¹Ù¥•Ü€¤ì(($$$%‰É•…¬ì(($$%…Í”€=ÉÑ¡½É…Á¡¥…µ•É„œè(($$$%½‰©•Ð€ô¹•Ü=ÉÑ¡½É…Á¡¥…µ•É„ ‘…Ñ„¹±•™Ð°‘…Ñ„¹É¥¡Ð°‘…Ñ„¹Ñ½À°‘…Ñ„¹‰½ÑÑ½´°‘…Ñ„¹¹•…È°‘…Ñ„¹™…È€¤ì(($$$%¥˜€ ‘…Ñ„¹é½½´€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹é½½´€ô‘…Ñ„¹é½½´ì($$$%¥˜€ ‘…Ñ„¹Ù¥•Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Ù¥•Ü€ô=‰©•Ð¹…ÍÍ¥¸ íô°‘…Ñ„¹Ù¥•Ü€¤ì(($$$%‰É•…¬ì(($$%…Í”€µ‰¥•¹Ñ1¥¡Ðœè(($$$%½‰©•Ð€ô¹•Üµ‰¥•¹Ñ1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä€¤ì(($$$%‰É•…¬ì(($$%…Í”€¥É•Ñ¥½¹…±1¥¡Ðœè(($$$%½‰©•Ð€ô¹•Ü¥É•Ñ¥½¹…±1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä€¤ì(($$$%‰É•…¬ì(($$%…Í”€A½¥¹Ñ1¥¡Ðœè(($$$%½‰©•Ð€ô¹•ÜA½¥¹Ñ1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä°‘…Ñ„¹‘¥ÍÑ…¹”°‘…Ñ„¹‘•…ä€¤ì(($$$%‰É•…¬ì(($$%…Í”€I•ÑÉ•…1¥¡Ðœè(($$$%½‰©•Ð€ô¹•ÜI•ÑÉ•…1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä°‘…Ñ„¹Ý¥‘Ñ °‘…Ñ„¹¡•¥¡Ð€¤ì(($$$%‰É•…¬ì(($$%…Í”€MÁ½Ñ1¥¡Ðœè(($$$%½‰©•Ð€ô¹•ÜMÁ½Ñ1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä°‘…Ñ„¹‘¥ÍÑ…¹”°‘…Ñ„¹…¹±”°‘…Ñ„¹Á•¹Õµ‰É„°‘…Ñ„¹‘•…ä€¤ì(($$$%‰É•…¬ì(($$%…Í”€!•µ¥ÍÁ¡•É•1¥¡Ðœè(($$$%½‰©•Ð€ô¹•Ü!•µ¥ÍÁ¡•É•1¥¡Ð ‘…Ñ„¹½±½È°‘…Ñ„¹É½Õ¹‘½±½È°‘…Ñ„¹¥¹Ñ•¹Í¥Ñä€¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¡ÑAÉ½‰”œè(($$$%½‰©•Ð€ô¹•Ü1¥¡ÑAÉ½‰” ¤¹™É½µ)M=8 ‘…Ñ„€¤ì(($$$%‰É•…¬ì(($$%…Í”€M­¥¹¹•‘5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$€%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì(($$$%½‰©•Ð€ô¹•ÜM­¥¹¹•‘5•Í  •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($$$%¥˜€ ‘…Ñ„¹‰¥¹‘5½‘”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰¥¹‘5½‘”€ô‘…Ñ„¹‰¥¹‘5½‘”ì($$$%¥˜€ ‘…Ñ„¹‰¥¹‘5…ÑÉ¥à€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹‰¥¹‘5…ÑÉ¥à¹™É½µÉÉ…ä ‘…Ñ„¹‰¥¹‘5…ÑÉ¥à€¤ì($$$%¥˜€ ‘…Ñ„¹Í­•±•Ñ½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í­•±•Ñ½¸€ô‘…Ñ„¹Í­•±•Ñ½¸ì(($$$%‰É•…¬ì(($$%…Í”€5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì(($$$%½‰©•Ð€ô¹•Ü5•Í  •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($$$%‰É•…¬ì(($$%…Í”€%¹ÍÑ…¹•‘5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì($$$%½¹ÍÐ½Õ¹Ð€ô‘…Ñ„¹½Õ¹Ðì($$$%½¹ÍÐ¥¹ÍÑ…¹•5…ÑÉ¥à€ô‘…Ñ„¹¥¹ÍÑ…¹•5…ÑÉ¥àì($$$%½¹ÍÐ¥¹ÍÑ…¹•½±½È€ô‘…Ñ„¹¥¹ÍÑ…¹•½±½Èì(($$$%½‰©•Ð€ô¹•Ü%¹ÍÑ…¹•‘5•Í  •½µ•ÑÉä°µ…Ñ•É¥…°°½Õ¹Ð€¤ì($$$%½‰©•Ð¹¥¹ÍÑ…¹•5…ÑÉ¥à€ô¹•Ü%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹•Ü±½…ÐÌÉÉÉ…ä ¥¹ÍÑ…¹•5…ÑÉ¥à¹…ÉÉ…ä€¤°€ÄØ€¤ì($$$%¥˜€ ¥¹ÍÑ…¹•½±½È€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹¥¹ÍÑ…¹•½±½È€ô¹•Ü%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¹•Ü±½…ÐÌÉÉÉ…ä ¥¹ÍÑ…¹•½±½È¹…ÉÉ…ä€¤°¥¹ÍÑ…¹•½±½È¹¥Ñ•µM¥é”€¤ì(($$$%‰É•…¬ì(($$%…Í”€	…Ñ¡•‘5•Í œè(($$$%•½µ•ÑÉä€ô•Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤ì($$$%µ…Ñ•É¥…°€ô•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤ì(($$$%½‰©•Ð€ô¹•Ü	…Ñ¡•‘5•Í  ‘…Ñ„¹µ…á•½µ•ÑÉå½Õ¹Ð°‘…Ñ„¹µ…áY•ÉÑ•á½Õ¹Ð°‘…Ñ„¹µ…á%¹‘•á½Õ¹Ð°µ…Ñ•É¥…°€¤ì($$$%½‰©•Ð¹•½µ•ÑÉä€ô•½µ•ÑÉäì($$$%½‰©•Ð¹Á•É=‰©•ÑÉÕÍÑÕµÕ±±•€ô‘…Ñ„¹Á•É=‰©•ÑÉÕÍÑÕµÕ±±•ì($$$%½‰©•Ð¹Í½ÉÑ=‰©•ÑÌ€ô‘…Ñ„¹Í½ÉÑ=‰©•ÑÌì(($$$%½‰©•Ð¹}‘É…ÝI…¹•Ì€ô‘…Ñ„¹‘É…ÝI…¹•Ìì($$$%½‰©•Ð¹}É•Í•ÉÙ•‘I…¹•Ì€ô‘…Ñ„¹É•Í•ÉÙ•‘I…¹•Ìì(($$$%½‰©•Ð¹}Ù¥Í¥‰¥±¥Ñä€ô‘…Ñ„¹Ù¥Í¥‰¥±¥Ñäì($$$%½‰©•Ð¹}…Ñ¥Ù”€ô‘…Ñ„¹…Ñ¥Ù”ì($$$%½‰©•Ð¹}‰½Õ¹‘Ì€ô‘…Ñ„¹‰½Õ¹‘Ì¹µ…À ‰½Õ¹€ôøì(($$$$%½¹ÍÐ‰½à€ô¹•Ü	½àÌ ¤ì($$$$%‰½à¹µ¥¸¹™É½µÉÉ…ä ‰½Õ¹¹‰½á5¥¸€¤ì($$$$%‰½à¹µ…à¹™É½µÉÉ…ä ‰½Õ¹¹‰½á5…à€¤ì(($$$$%½¹ÍÐÍÁ¡•É”€ô¹•ÜMÁ¡•É” ¤ì($$$$%ÍÁ¡•É”¹É…‘¥ÕÌ€ô‰½Õ¹¹ÍÁ¡•É•I…‘¥ÕÌì($$$$%ÍÁ¡•É”¹•¹Ñ•È¹™É½µÉÉ…ä ‰½Õ¹¹ÍÁ¡•É••¹Ñ•È€¤ì(($$$$%É•ÑÕÉ¸ì($$$$$%‰½á%¹¥Ñ¥…±¥é•è‰½Õ¹¹‰½á%¹¥Ñ¥…±¥é•°($$$$$%‰½àè‰½à°(($$$$$%ÍÁ¡•É•%¹¥Ñ¥…±¥é•è‰½Õ¹¹ÍÁ¡•É•%¹¥Ñ¥…±¥é•°($$$$$%ÍÁ¡•É”èÍÁ¡•É”($$$$%ôì(($$$%ô€¤ì(($$$%½‰©•Ð¹}µ…á•½µ•ÑÉå½Õ¹Ð€ô‘…Ñ„¹µ…á•½µ•ÑÉå½Õ¹Ðì($$$%½‰©•Ð¹}µ…áY•ÉÑ•á½Õ¹Ð€ô‘…Ñ„¹µ…áY•ÉÑ•á½Õ¹Ðì($$$%½‰©•Ð¹}µ…á%¹‘•á½Õ¹Ð€ô‘…Ñ„¹µ…á%¹‘•á½Õ¹Ðì(($$$%½‰©•Ð¹}•½µ•ÑÉå%¹¥Ñ¥…±¥é•€ô‘…Ñ„¹•½µ•ÑÉå%¹¥Ñ¥…±¥é•ì($$$%½‰©•Ð¹}•½µ•ÑÉå½Õ¹Ð€ô‘…Ñ„¹•½µ•ÑÉå½Õ¹Ðì(($$$%½‰©•Ð¹}µ…ÑÉ¥•ÍQ•áÑÕÉ”€ô•ÑQ•áÑÕÉ” ‘…Ñ„¹µ…ÑÉ¥•ÍQ•áÑÕÉ”¹ÕÕ¥€¤ì(($$$%‰É•…¬ì(($$%…Í”€1=œè(($$$%½‰©•Ð€ô¹•Ü1= ¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¹”œè(($$$%½‰©•Ð€ô¹•Ü1¥¹” •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¹•1½½Àœè(($$$%½‰©•Ð€ô¹•Ü1¥¹•1½½À •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€1¥¹•M•µ•¹ÑÌœè(($$$%½‰©•Ð€ô¹•Ü1¥¹•M•µ•¹ÑÌ •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€A½¥¹Ñ±½Õœè($$%…Í”€A½¥¹ÑÌœè(($$$%½‰©•Ð€ô¹•ÜA½¥¹ÑÌ •Ñ•½µ•ÑÉä ‘…Ñ„¹•½µ•ÑÉä€¤°•Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€MÁÉ¥Ñ”œè(($$$%½‰©•Ð€ô¹•ÜMÁÉ¥Ñ” •Ñ5…Ñ•É¥…° ‘…Ñ„¹µ…Ñ•É¥…°€¤€¤ì(($$$%‰É•…¬ì(($$%…Í”€É½ÕÀœè(($$$%½‰©•Ð€ô¹•ÜÉ½ÕÀ ¤ì(($$$%‰É•…¬ì(($$%…Í”€	½¹”œè(($$$%½‰©•Ð€ô¹•Ü	½¹” ¤ì(($$$%‰É•…¬ì(($$%‘•™…Õ±Ðè(($$$%½‰©•Ð€ô¹•Ü=‰©•ÐÍ ¤ì(($%ô(($%½‰©•Ð¹ÕÕ¥€ô‘…Ñ„¹ÕÕ¥ì(($%¥˜€ ‘…Ñ„¹¹…µ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹¹…µ”€ô‘…Ñ„¹¹…µ”ì(($%¥˜€ ‘…Ñ„¹µ…ÑÉ¥à€„ôôÕ¹‘•™¥¹•€¤ì(($$%½‰©•Ð¹µ…ÑÉ¥à¹™É½µÉÉ…ä ‘…Ñ„¹µ…ÑÉ¥à€¤ì(($$%¥˜€ ‘…Ñ„¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô‘…Ñ„¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”ì($$%¥˜€ ½‰©•Ð¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€¤½‰©•Ð¹µ…ÑÉ¥à¹‘•½µÁ½Í” ½‰©•Ð¹Á½Í¥Ñ¥½¸°½‰©•Ð¹ÅÕ…Ñ•É¹¥½¸°½‰©•Ð¹Í…±”€¤ì(($%ô•±Í”ì(($$%¥˜€ ‘…Ñ„¹Á½Í¥Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Á½Í¥Ñ¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹Á½Í¥Ñ¥½¸€¤ì($$%¥˜€ ‘…Ñ„¹É½Ñ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹É½Ñ…Ñ¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹É½Ñ…Ñ¥½¸€¤ì($$%¥˜€ ‘…Ñ„¹ÅÕ…Ñ•É¹¥½¸€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹ÅÕ…Ñ•É¹¥½¸¹™É½µÉÉ…ä ‘…Ñ„¹ÅÕ…Ñ•É¹¥½¸€¤ì($$%¥˜€ ‘…Ñ„¹Í…±”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í…±”¹™É½µÉÉ…ä ‘…Ñ„¹Í…±”€¤ì(($%ô(($%¥˜€ ‘…Ñ„¹ÕÀ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹ÕÀ¹™É½µÉÉ…ä ‘…Ñ„¹ÕÀ€¤ì(($%¥˜€ ‘…Ñ„¹…ÍÑM¡…‘½Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹…ÍÑM¡…‘½Ü€ô‘…Ñ„¹…ÍÑM¡…‘½Üì($%¥˜€ ‘…Ñ„¹É••¥Ù•M¡…‘½Ü€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹É••¥Ù•M¡…‘½Ü€ô‘…Ñ„¹É••¥Ù•M¡…‘½Üì(($%¥˜€ ‘…Ñ„¹Í¡…‘½Ü€¤ì(($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹‰¥…Ì€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹‰¥…Ì€ô‘…Ñ„¹Í¡…‘½Ü¹‰¥…Ìì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹¹½Éµ…±	¥…Ì€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹¹½Éµ…±	¥…Ì€ô‘…Ñ„¹Í¡…‘½Ü¹¹½Éµ…±	¥…Ìì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹É…‘¥ÕÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹É…‘¥ÕÌ€ô‘…Ñ„¹Í¡…‘½Ü¹É…‘¥ÕÌì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹µ…ÁM¥é”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹µ…ÁM¥é”¹™É½µÉÉ…ä ‘…Ñ„¹Í¡…‘½Ü¹µ…ÁM¥é”€¤ì($$%¥˜€ ‘…Ñ„¹Í¡…‘½Ü¹…µ•É„€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Í¡…‘½Ü¹…µ•É„€ôÑ¡¥Ì¹Á…ÉÍ•=‰©•Ð ‘…Ñ„¹Í¡…‘½Ü¹…µ•É„€¤ì(($%ô(($%¥˜€ ‘…Ñ„¹Ù¥Í¥‰±”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹Ù¥Í¥‰±”€ô‘…Ñ„¹Ù¥Í¥‰±”ì($%¥˜€ ‘…Ñ„¹™ÉÕÍÑÕµÕ±±•€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹™ÉÕÍÑÕµÕ±±•€ô‘…Ñ„¹™ÉÕÍÑÕµÕ±±•ì($%¥˜€ ‘…Ñ„¹É•¹‘•É=É‘•È€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹É•¹‘•É=É‘•È€ô‘…Ñ„¹É•¹‘•É=É‘•Èì($%¥˜€ ‘…Ñ„¹ÕÍ•É…Ñ„€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹ÕÍ•É…Ñ„€ô‘…Ñ„¹ÕÍ•É…Ñ„ì($%¥˜€ ‘…Ñ„¹±…å•ÉÌ€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹±…å•ÉÌ¹µ…Í¬€ô‘…Ñ„¹±…å•ÉÌì(($%¥˜€ ‘…Ñ„¹¡¥±‘É•¸€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ¡¥±‘É•¸€ô‘…Ñ„¹¡¥±‘É•¸ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð¡¥±‘É•¸¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½‰©•Ð¹…‘ Ñ¡¥Ì¹Á…ÉÍ•=‰©•Ð ¡¥±‘É•¹l¤t°•½µ•ÑÉ¥•Ì°µ…Ñ•É¥…±Ì°Ñ•áÑÕÉ•Ì°…¹¥µ…Ñ¥½¹Ì€¤€¤ì(($$%ô(($%ô(($%¥˜€ ‘…Ñ„¹…¹¥µ…Ñ¥½¹Ì€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ½‰©•Ñ¹¥µ…Ñ¥½¹Ì€ô‘…Ñ„¹…¹¥µ…Ñ¥½¹Ìì(($$%™½È€ ±•Ð¤€ô€Àì¤€ð½‰©•Ñ¹¥µ…Ñ¥½¹Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$$%½¹ÍÐÕÕ¥€ô½‰©•Ñ¹¥µ…Ñ¥½¹Íl¤tì(($$$%½‰©•Ð¹…¹¥µ…Ñ¥½¹Ì¹ÁÕÍ  …¹¥µ…Ñ¥½¹ÍlÕÕ¥t€¤ì(($$%ô(($%ô(($%¥˜€ ‘…Ñ„¹ÑåÁ”€ôôô€1=œ€¤ì(($$%¥˜€ ‘…Ñ„¹…ÕÑ½UÁ‘…Ñ”€„ôôÕ¹‘•™¥¹•€¤½‰©•Ð¹…ÕÑ½UÁ‘…Ñ”€ô‘…Ñ„¹…ÕÑ½UÁ‘…Ñ”ì(($$%½¹ÍÐ±•Ù•±Ì€ô‘…Ñ„¹±•Ù•±Ìì(($$%™½È€ ±•Ð°€ô€Àì°€ð±•Ù•±Ì¹±•¹Ñ ì°€¬¬€¤ì(($$$%½¹ÍÐ±•Ù•°€ô±•Ù•±Íl°tì($$$%½¹ÍÐ¡¥±€ô½‰©•Ð¹•Ñ=‰©•Ñ	åAÉ½Á•ÉÑä €ÕÕ¥œ°±•Ù•°¹½‰©•Ð€¤ì(($$$%¥˜€ ¡¥±€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%½‰©•Ð¹…‘‘1•Ù•° ¡¥±°±•Ù•°¹‘¥ÍÑ…¹”°±•Ù•°¹¡åÍÑ•É•Í¥Ì€¤ì(($$$%ô(($$%ô(($%ô(($%É•ÑÕÉ¸½‰©•Ðì((%ô((%‰¥¹‘M­•±•Ñ½¹Ì ½‰©•Ð°Í­•±•Ñ½¹Ì€¤ì(($%¥˜€ =‰©•Ð¹­•åÌ Í­•±•Ñ½¹Ì€¤¹±•¹Ñ €ôôô€À€¤É•ÑÕÉ¸ì(($%½‰©•Ð¹ÑÉ…Ù•ÉÍ” ™Õ¹Ñ¥½¸€ ¡¥±€¤ì(($$%¥˜€ ¡¥±¹¥ÍM­¥¹¹•‘5•Í €ôôôÑÉÕ”€˜˜¡¥±¹Í­•±•Ñ½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$$%½¹ÍÐÍ­•±•Ñ½¸€ôÍ­•±•Ñ½¹Íl¡¥±¹Í­•±•Ñ½¸tì(($$$%¥˜€ Í­•±•Ñ½¸€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹Ý…É¸ €Q!I¹=‰©•Ñ1½…‘•Èè9¼Í­•±•Ñ½¸™½Õ¹Ý¥Ñ UU%èœ°¡¥±¹Í­•±•Ñ½¸€¤ì(($$$%ô•±Í”ì(($$$$%¡¥±¹‰¥¹ Í­•±•Ñ½¸°¡¥±¹‰¥¹‘5…ÑÉ¥à€¤ì(($$$%ô(($$%ô(($%ô€¤ì((%ô()ô()½¹ÍÐQaQUI}5AA%9€ôì(%UY5…ÁÁ¥¹œèUY5…ÁÁ¥¹œ°(%Õ‰•I•™±•Ñ¥½¹5…ÁÁ¥¹œèÕ‰•I•™±•Ñ¥½¹5…ÁÁ¥¹œ°(%Õ‰•I•™É…Ñ¥½¹5…ÁÁ¥¹œèÕ‰•I•™É…Ñ¥½¹5…ÁÁ¥¹œ°(%ÅÕ¥É•Ñ…¹Õ±…ÉI•™±•Ñ¥½¹5…ÁÁ¥¹œèÅÕ¥É•Ñ…¹Õ±…ÉI•™±•Ñ¥½¹5…ÁÁ¥¹œ°(%ÅÕ¥É•Ñ…¹Õ±…ÉI•™É…Ñ¥½¹5…ÁÁ¥¹œèÅÕ¥É•Ñ…¹Õ±…ÉI•™É…Ñ¥½¹5…ÁÁ¥¹œ°(%Õ‰•UYI•™±•Ñ¥½¹5…ÁÁ¥¹œèÕ‰•UYI•™±•Ñ¥½¹5…ÁÁ¥¹œ)ôì()½¹ÍÐQaQUI}]IAA%9€ôì(%I•Á•…Ñ]É…ÁÁ¥¹œèI•Á•…Ñ]É…ÁÁ¥¹œ°(%±…µÁQ½‘•]É…ÁÁ¥¹œè±…µÁQ½‘•]É…ÁÁ¥¹œ°(%5¥ÉÉ½É•‘I•Á•…Ñ]É…ÁÁ¥¹œè5¥ÉÉ½É•‘I•Á•…Ñ]É…ÁÁ¥¹œ)ôì()½¹ÍÐQaQUI}%1QH€ôì(%9•…É•ÍÑ¥±Ñ•Èè9•…É•ÍÑ¥±Ñ•È°(%9•…É•ÍÑ5¥Áµ…Á9•…É•ÍÑ¥±Ñ•Èè9•…É•ÍÑ5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°(%9•…É•ÍÑ5¥Áµ…Á1¥¹•…É¥±Ñ•Èè9•…É•ÍÑ5¥Áµ…Á1¥¹•…É¥±Ñ•È°(%1¥¹•…É¥±Ñ•Èè1¥¹•…É¥±Ñ•È°(%1¥¹•…É5¥Áµ…Á9•…É•ÍÑ¥±Ñ•Èè1¥¹•…É5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°(%1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•Èè1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•È)ôì()±…ÍÌ%µ…•	¥Ñµ…Á1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì(($%Ñ¡¥Ì¹¥Í%µ…•	¥Ñµ…Á1½…‘•È€ôÑÉÕ”ì(($%¥˜€ ÑåÁ•½˜É•…Ñ•%µ…•	¥Ñµ…À€ôôô€Õ¹‘•™¥¹•œ€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹%µ…•	¥Ñµ…Á1½…‘•ÈèÉ•…Ñ•%µ…•	¥Ñµ…À ¤¹½ÐÍÕÁÁ½ÉÑ•¸œ€¤ì(($%ô(($%¥˜€ ÑåÁ•½˜™•Ñ €ôôô€Õ¹‘•™¥¹•œ€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹%µ…•	¥Ñµ…Á1½…‘•Èè™•Ñ  ¤¹½ÐÍÕÁÁ½ÉÑ•¸œ€¤ì(($%ô(($%Ñ¡¥Ì¹½ÁÑ¥½¹Ì€ôìÁÉ•µÕ±Ñ¥Á±å±Á¡„è€¹½¹”œôì((%ô((%Í•Ñ=ÁÑ¥½¹Ì ½ÁÑ¥½¹Ì€¤ì(($%Ñ¡¥Ì¹½ÁÑ¥½¹Ì€ô½ÁÑ¥½¹Ìì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%¥˜€ ÕÉ°€ôôôÕ¹‘•™¥¹•€¤ÕÉ°€ô€œœì(($%¥˜€ Ñ¡¥Ì¹Á…Ñ €„ôôÕ¹‘•™¥¹•€¤ÕÉ°€ôÑ¡¥Ì¹Á…Ñ €¬ÕÉ°ì(($%ÕÉ°€ôÑ¡¥Ì¹µ…¹…•È¹É•Í½±Ù•UI0 ÕÉ°€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ…¡•€ô…¡”¹•Ð ÕÉ°€¤ì(($%¥˜€ …¡•€„ôôÕ¹‘•™¥¹•€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì(($$$¼¼%˜…¡•¥Ì„ÁÉ½µ¥Í”°Ý…¥Ð™½È¥ÐÑ¼É•Í½±Ù”($$%¥˜€ …¡•¹Ñ¡•¸€¤ì(($$$%…¡•¹Ñ¡•¸ ¥µ…•	¥Ñµ…À€ôøì(($$$$%¥˜€ ½¹1½…€¤½¹1½… ¥µ…•	¥Ñµ…À€¤ì(($$$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$$%ô€¤¹…Ñ  ”€ôøì(($$$$%¥˜€ ½¹ÉÉ½È€¤½¹ÉÉ½È ”€¤ì(($$$%ô€¤ì($$$%É•ÑÕÉ¸ì(($$%ô(($$$¼¼%˜…¡•¥Ì¹½Ð„ÁÉ½µ¥Í”€¡¤¹”¸°¥ÐÌ…±É•…‘ä…¸¥µ…•	¥Ñµ…À¤($$%Í•ÑQ¥µ•½ÕÐ ™Õ¹Ñ¥½¸€ ¤ì(($$$%¥˜€ ½¹1½…€¤½¹1½… …¡•€¤ì(($$$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%ô°€À€¤ì(($$%É•ÑÕÉ¸…¡•ì(($%ô(($%½¹ÍÐ™•Ñ¡=ÁÑ¥½¹Ì€ôíôì($%™•Ñ¡=ÁÑ¥½¹Ì¹É•‘•¹Ñ¥…±Ì€ô€ Ñ¡¥Ì¹É½ÍÍ=É¥¥¸€ôôô€…¹½¹åµ½ÕÌœ€¤€ü€Í…µ”µ½É¥¥¸œ€è€¥¹±Õ‘”œì($%™•Ñ¡=ÁÑ¥½¹Ì¹¡•…‘•ÉÌ€ôÑ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•Èì(($%½¹ÍÐÁÉ½µ¥Í”€ô™•Ñ  ÕÉ°°™•Ñ¡=ÁÑ¥½¹Ì€¤¹Ñ¡•¸ ™Õ¹Ñ¥½¸€ É•Ì€¤ì(($$%É•ÑÕÉ¸É•Ì¹‰±½ˆ ¤ì(($%ô€¤¹Ñ¡•¸ ™Õ¹Ñ¥½¸€ ‰±½ˆ€¤ì(($$%É•ÑÕÉ¸É•…Ñ•%µ…•	¥Ñµ…À ‰±½ˆ°=‰©•Ð¹…ÍÍ¥¸ Í½Á”¹½ÁÑ¥½¹Ì°ì½±½ÉMÁ…•½¹Ù•ÉÍ¥½¸è€¹½¹”œô€¤€¤ì(($%ô€¤¹Ñ¡•¸ ™Õ¹Ñ¥½¸€ ¥µ…•	¥Ñµ…À€¤ì(($$%…¡”¹…‘ ÕÉ°°¥µ…•	¥Ñµ…À€¤ì(($$%¥˜€ ½¹1½…€¤½¹1½… ¥µ…•	¥Ñµ…À€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($$%É•ÑÕÉ¸¥µ…•	¥Ñµ…Àì(($%ô€¤¹…Ñ  ™Õ¹Ñ¥½¸€ ”€¤ì(($$%¥˜€ ½¹ÉÉ½È€¤½¹ÉÉ½È ”€¤ì(($$%…¡”¹É•µ½Ù” ÕÉ°€¤ì(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì($$%Í½Á”¹µ…¹…•È¹¥Ñ•µ¹ ÕÉ°€¤ì(($%ô€¤ì(($%…¡”¹…‘ ÕÉ°°ÁÉ½µ¥Í”€¤ì($%Í½Á”¹µ…¹…•È¹¥Ñ•µMÑ…ÉÐ ÕÉ°€¤ì((%ô()ô()±•Ð}½¹Ñ•áÐì()±…ÍÌÕ‘¥½½¹Ñ•áÐì((%ÍÑ…Ñ¥Œ•Ñ½¹Ñ•áÐ ¤ì(($%¥˜€ }½¹Ñ•áÐ€ôôôÕ¹‘•™¥¹•€¤ì(($$%}½¹Ñ•áÐ€ô¹•Ü€ Ý¥¹‘½Ü¹Õ‘¥½½¹Ñ•áÐñðÝ¥¹‘½Ü¹Ý•‰­¥ÑÕ‘¥½½¹Ñ•áÐ€¤ ¤ì(($%ô(($%É•ÑÕÉ¸}½¹Ñ•áÐì((%ô((%ÍÑ…Ñ¥ŒÍ•Ñ½¹Ñ•áÐ Ù…±Õ”€¤ì(($%}½¹Ñ•áÐ€ôÙ…±Õ”ì((%ô()ô()±…ÍÌÕ‘¥½1½…‘•È•áÑ•¹‘Ì1½…‘•Èì((%½¹ÍÑÉÕÑ½È µ…¹…•È€¤ì(($%ÍÕÁ•È µ…¹…•È€¤ì((%ô((%±½… ÕÉ°°½¹1½…°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%½¹ÍÐ±½…‘•È€ô¹•Ü¥±•1½…‘•È Ñ¡¥Ì¹µ…¹…•È€¤ì($%±½…‘•È¹Í•ÑI•ÍÁ½¹Í•QåÁ” €…ÉÉ…å‰Õ™™•Èœ€¤ì($%±½…‘•È¹Í•ÑA…Ñ  Ñ¡¥Ì¹Á…Ñ €¤ì($%±½…‘•È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È Ñ¡¥Ì¹É•ÅÕ•ÍÑ!•…‘•È€¤ì($%±½…‘•È¹Í•Ñ]¥Ñ¡É•‘•¹Ñ¥…±Ì Ñ¡¥Ì¹Ý¥Ñ¡É•‘•¹Ñ¥…±Ì€¤ì($%±½…‘•È¹±½… ÕÉ°°™Õ¹Ñ¥½¸€ ‰Õ™™•È€¤ì(($$%ÑÉäì(($$$$¼¼É•…Ñ”„½Áä½˜Ñ¡”‰Õ™™•È¸Q¡”‘•½‘•Õ‘¥½…Ñ…€µ•Ñ¡½($$$$¼¼‘•Ñ…¡•ÌÑ¡”‰Õ™™•ÈÝ¡•¸½µÁ±•Ñ”°ÁÉ•Ù•¹Ñ¥¹œÉ•ÕÍ”¸($$$%½¹ÍÐ‰Õ™™•É½Áä€ô‰Õ™™•È¹Í±¥” €À€¤ì(($$$%½¹ÍÐ½¹Ñ•áÐ€ôÕ‘¥½½¹Ñ•áÐ¹•Ñ½¹Ñ•áÐ ¤ì($$$%½¹Ñ•áÐ¹‘•½‘•Õ‘¥½…Ñ„ ‰Õ™™•É½Áä°™Õ¹Ñ¥½¸€ …Õ‘¥½	Õ™™•È€¤ì(($$$$%½¹1½… …Õ‘¥½	Õ™™•È€¤ì(($$$%ô€¤¹…Ñ  ¡…¹‘±•ÉÉ½È€¤ì(($$%ô…Ñ € ”€¤ì(($$$%¡…¹‘±•ÉÉ½È ”€¤ì(($$%ô(($%ô°½¹AÉ½É•ÍÌ°½¹ÉÉ½È€¤ì(($%™Õ¹Ñ¥½¸¡…¹‘±•ÉÉ½È ”€¤ì(($$%¥˜€ ½¹ÉÉ½È€¤ì(($$$%½¹ÉÉ½È ”€¤ì(($$%ô•±Í”ì(($$$%½¹Í½±”¹•ÉÉ½È ”€¤ì(($$%ô(($$%Í½Á”¹µ…¹…•È¹¥Ñ•µÉÉ½È ÕÉ°€¤ì(($%ô((%ô()ô()½¹ÍÐ}•å•I¥¡Ð€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}•å•1•™Ð€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì()±…ÍÌMÑ•É•½…µ•É„ì((%½¹ÍÑÉÕÑ½È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€MÑ•É•½…µ•É„œì(($%Ñ¡¥Ì¹…ÍÁ•Ð€ô€Äì(($%Ñ¡¥Ì¹•å•M•À€ô€À¸ÀØÐì(($%Ñ¡¥Ì¹…µ•É…0€ô¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ ¤ì($%Ñ¡¥Ì¹…µ•É…0¹±…å•ÉÌ¹•¹…‰±” €Ä€¤ì($%Ñ¡¥Ì¹…µ•É…0¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹…µ•É…H€ô¹•ÜA•ÉÍÁ•Ñ¥Ù•…µ•É„ ¤ì($%Ñ¡¥Ì¹…µ•É…H¹±…å•ÉÌ¹•¹…‰±” €È€¤ì($%Ñ¡¥Ì¹…µ•É…H¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹}…¡”€ôì($$%™½ÕÌè¹Õ±°°($$%™½Øè¹Õ±°°($$%…ÍÁ•Ðè¹Õ±°°($$%¹•…Èè¹Õ±°°($$%™…Èè¹Õ±°°($$%é½½´è¹Õ±°°($$%•å•M•Àè¹Õ±°($%ôì((%ô((%ÕÁ‘…Ñ” …µ•É„€¤ì(($%½¹ÍÐ…¡”€ôÑ¡¥Ì¹}…¡”ì(($%½¹ÍÐ¹••‘ÍUÁ‘…Ñ”€ô…¡”¹™½ÕÌ€„ôô…µ•É„¹™½ÕÌñð…¡”¹™½Ø€„ôô…µ•É„¹™½Øñð($$%…¡”¹…ÍÁ•Ð€„ôô…µ•É„¹…ÍÁ•Ð€¨Ñ¡¥Ì¹…ÍÁ•Ðñð…¡”¹¹•…È€„ôô…µ•É„¹¹•…Èñð($$%…¡”¹™…È€„ôô…µ•É„¹™…Èñð…¡”¹é½½´€„ôô…µ•É„¹é½½´ñð…¡”¹•å•M•À€„ôôÑ¡¥Ì¹•å•M•Àì(($%¥˜€ ¹••‘ÍUÁ‘…Ñ”€¤ì(($$%…¡”¹™½ÕÌ€ô…µ•É„¹™½ÕÌì($$%…¡”¹™½Ø€ô…µ•É„¹™½Øì($$%…¡”¹…ÍÁ•Ð€ô…µ•É„¹…ÍÁ•Ð€¨Ñ¡¥Ì¹…ÍÁ•Ðì($$%…¡”¹¹•…È€ô…µ•É„¹¹•…Èì($$%…¡”¹™…È€ô…µ•É„¹™…Èì($$%…¡”¹é½½´€ô…µ•É„¹é½½´ì($$%…¡”¹•å•M•À€ôÑ¡¥Ì¹•å•M•Àì(($$$¼¼=™˜µ…á¥ÌÍÑ•É•½Í½Á¥Œ•™™•Ð‰…Í•½¸($$$¼¼¡ÑÑÀè¼½Á…Õ±‰½ÕÉ­”¹¹•Ð½ÍÑ•É•½É…Á¡¥Ì½ÍÑ•É•½É•¹‘•È¼(($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹½Áä …µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€¤ì($$%½¹ÍÐ•å•M•Á!…±˜€ô…¡”¹•å•M•À€¼€Èì($$%½¹ÍÐ•å•M•Á=¹AÉ½©•Ñ¥½¸€ô•å•M•Á!…±˜€¨…¡”¹¹•…È€¼…¡”¹™½ÕÌì($$%½¹ÍÐåµ…à€ô€ …¡”¹¹•…È€¨5…Ñ ¹Ñ…¸ ÉI€¨…¡”¹™½Ø€¨€À¸Ô€¤€¤€¼…¡”¹é½½´ì($$%±•Ðáµ¥¸°áµ…àì(($$$¼¼ÑÉ…¹Í±…Ñ”á=™™Í•Ð(($$%}•å•1•™Ð¹•±•µ•¹ÑÍl€ÄÈt€ô€´•å•M•Á!…±˜ì($$%}•å•I¥¡Ð¹•±•µ•¹ÑÍl€ÄÈt€ô•å•M•Á!…±˜ì(($$$¼¼™½È±•™Ð•å”(($$%áµ¥¸€ô€´åµ…à€¨…¡”¹…ÍÁ•Ð€¬•å•M•Á=¹AÉ½©•Ñ¥½¸ì($$%áµ…à€ôåµ…à€¨…¡”¹…ÍÁ•Ð€¬•å•M•Á=¹AÉ½©•Ñ¥½¸ì(($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€Àt€ô€È€¨…¡”¹¹•…È€¼€ áµ…à€´áµ¥¸€¤ì($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€àt€ô€ áµ…à€¬áµ¥¸€¤€¼€ áµ…à€´áµ¥¸€¤ì(($$%Ñ¡¥Ì¹…µ•É…0¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹½Áä }ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€¤ì(($$$¼¼™½ÈÉ¥¡Ð•å”(($$%áµ¥¸€ô€´åµ…à€¨…¡”¹…ÍÁ•Ð€´•å•M•Á=¹AÉ½©•Ñ¥½¸ì($$%áµ…à€ôåµ…à€¨…¡”¹…ÍÁ•Ð€´•å•M•Á=¹AÉ½©•Ñ¥½¸ì(($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€Àt€ô€È€¨…¡”¹¹•…È€¼€ áµ…à€´áµ¥¸€¤ì($$%}ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹•±•µ•¹ÑÍl€àt€ô€ áµ…à€¬áµ¥¸€¤€¼€ áµ…à€´áµ¥¸€¤ì(($$%Ñ¡¥Ì¹…µ•É…H¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥à¹½Áä }ÁÉ½©•Ñ¥½¹5…ÑÉ¥à€¤ì(($%ô(($%Ñ¡¥Ì¹…µ•É…0¹µ…ÑÉ¥á]½É±¹½Áä …µ•É„¹µ…ÑÉ¥á]½É±€¤¹µÕ±Ñ¥Á±ä }•å•1•™Ð€¤ì($%Ñ¡¥Ì¹…µ•É…H¹µ…ÑÉ¥á]½É±¹½Áä …µ•É„¹µ…ÑÉ¥á]½É±€¤¹µÕ±Ñ¥Á±ä }•å•I¥¡Ð€¤ì((%ô()ô()±…ÍÌ±½¬ì((%½¹ÍÑÉÕÑ½È …ÕÑ½MÑ…ÉÐ€ôÑÉÕ”€¤ì(($%Ñ¡¥Ì¹…ÕÑ½MÑ…ÉÐ€ô…ÕÑ½MÑ…ÉÐì(($%Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ô€Àì($%Ñ¡¥Ì¹½±‘Q¥µ”€ô€Àì($%Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”€ô€Àì(($%Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€ô™…±Í”ì((%ô((%ÍÑ…ÉÐ ¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ô¹½Ü ¤ì(($%Ñ¡¥Ì¹½±‘Q¥µ”€ôÑ¡¥Ì¹ÍÑ…ÉÑQ¥µ”ì($%Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”€ô€Àì($%Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€ôÑÉÕ”ì((%ô((%ÍÑ½À ¤ì(($%Ñ¡¥Ì¹•Ñ±…ÁÍ•‘Q¥µ” ¤ì($%Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€ô™…±Í”ì($%Ñ¡¥Ì¹…ÕÑ½MÑ…ÉÐ€ô™…±Í”ì((%ô((%•Ñ±…ÁÍ•‘Q¥µ” ¤ì(($%Ñ¡¥Ì¹•Ñ•±Ñ„ ¤ì($%É•ÑÕÉ¸Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”ì((%ô((%•Ñ•±Ñ„ ¤ì(($%±•Ð‘¥™˜€ô€Àì(($%¥˜€ Ñ¡¥Ì¹…ÕÑ½MÑ…ÉÐ€˜˜€„Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€¤ì(($$%Ñ¡¥Ì¹ÍÑ…ÉÐ ¤ì($$%É•ÑÕÉ¸€Àì(($%ô(($%¥˜€ Ñ¡¥Ì¹ÉÕ¹¹¥¹œ€¤ì(($$%½¹ÍÐ¹•ÝQ¥µ”€ô¹½Ü ¤ì(($$%‘¥™˜€ô€ ¹•ÝQ¥µ”€´Ñ¡¥Ì¹½±‘Q¥µ”€¤€¼€ÄÀÀÀì($$%Ñ¡¥Ì¹½±‘Q¥µ”€ô¹•ÝQ¥µ”ì(($$%Ñ¡¥Ì¹•±…ÁÍ•‘Q¥µ”€¬ô‘¥™˜ì(($%ô(($%É•ÑÕÉ¸‘¥™˜ì((%ô()ô()™Õ¹Ñ¥½¸¹½Ü ¤ì((%É•ÑÕÉ¸€ ÑåÁ•½˜Á•É™½Éµ…¹”€ôôô€Õ¹‘•™¥¹•œ€ü…Ñ”€èÁ•É™½Éµ…¹”€¤¹¹½Ü ¤ì€¼¼Í•”€ŒÄÀÜÌÈ()ô()½¹ÍÐ}Á½Í¥Ñ¥½¸Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÅÕ…Ñ•É¹¥½¸Ä€ô€¼©}}AUI}|¨¼¹•ÜEÕ…Ñ•É¹¥½¸ ¤ì)½¹ÍÐ}Í…±”Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}½É¥•¹Ñ…Ñ¥½¸Ä€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌÕ‘¥½1¥ÍÑ•¹•È•áÑ•¹‘Ì=‰©•ÐÍì((%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Õ‘¥½1¥ÍÑ•¹•Èœì(($%Ñ¡¥Ì¹½¹Ñ•áÐ€ôÕ‘¥½½¹Ñ•áÐ¹•Ñ½¹Ñ•áÐ ¤ì(($%Ñ¡¥Ì¹…¥¸€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•…¥¸ ¤ì($%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($%Ñ¡¥Ì¹™¥±Ñ•È€ô¹Õ±°ì(($%Ñ¡¥Ì¹Ñ¥µ••±Ñ„€ô€Àì(($$¼¼ÁÉ¥Ù…Ñ”(($%Ñ¡¥Ì¹}±½¬€ô¹•Ü±½¬ ¤ì((%ô((%•Ñ%¹ÁÕÐ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸ì((%ô((%É•µ½Ù•¥±Ñ•È ¤ì(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•È€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹…¥¸¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•È€¤ì($$%Ñ¡¥Ì¹™¥±Ñ•È¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹™¥±Ñ•È€ô¹Õ±°ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ¥±Ñ•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹™¥±Ñ•Èì((%ô((%Í•Ñ¥±Ñ•È Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•È€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹…¥¸¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•È€¤ì($$%Ñ¡¥Ì¹™¥±Ñ•È¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹…¥¸¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($%ô(($%Ñ¡¥Ì¹™¥±Ñ•È€ôÙ…±Õ”ì($%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•È€¤ì($%Ñ¡¥Ì¹™¥±Ñ•È¹½¹¹•Ð Ñ¡¥Ì¹½¹Ñ•áÐ¹‘•ÍÑ¥¹…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ5…ÍÑ•ÉY½±Õµ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸¹…¥¸¹Ù…±Õ”ì((%ô((%Í•Ñ5…ÍÑ•ÉY½±Õµ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹…¥¸¹…¥¸¹Í•ÑQ…É•ÑÑQ¥µ” Ù…±Õ”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%½¹ÍÐ±¥ÍÑ•¹•È€ôÑ¡¥Ì¹½¹Ñ•áÐ¹±¥ÍÑ•¹•Èì($%½¹ÍÐÕÀ€ôÑ¡¥Ì¹ÕÀì(($%Ñ¡¥Ì¹Ñ¥µ••±Ñ„€ôÑ¡¥Ì¹}±½¬¹•Ñ•±Ñ„ ¤ì(($%Ñ¡¥Ì¹µ…ÑÉ¥á]½É±¹‘•½µÁ½Í” }Á½Í¥Ñ¥½¸Ä°}ÅÕ…Ñ•É¹¥½¸Ä°}Í…±”Ä€¤ì(($%}½É¥•¹Ñ…Ñ¥½¸Ä¹Í•Ð €À°€À°€´€Ä€¤¹…ÁÁ±åEÕ…Ñ•É¹¥½¸ }ÅÕ…Ñ•É¹¥½¸Ä€¤ì(($%¥˜€ ±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹`€¤ì(($$$¼¼½‘”Á…Ñ ™½È¡É½µ”€¡Í•”€ŒÄÐÌäÌ¤(($$%½¹ÍÐ•¹‘Q¥µ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€¬Ñ¡¥Ì¹Ñ¥µ••±Ñ„ì(($$%±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸Ä¹à°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸Ä¹ä°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹Á½Í¥Ñ¥½¹h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸Ä¹è°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹™½ÉÝ…É‘`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸Ä¹à°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹™½ÉÝ…É‘d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸Ä¹ä°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹™½ÉÝ…É‘h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸Ä¹è°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹ÕÁ`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” ÕÀ¹à°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹ÕÁd¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” ÕÀ¹ä°•¹‘Q¥µ”€¤ì($$%±¥ÍÑ•¹•È¹ÕÁh¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” ÕÀ¹è°•¹‘Q¥µ”€¤ì(($%ô•±Í”ì(($$%±¥ÍÑ•¹•È¹Í•ÑA½Í¥Ñ¥½¸ }Á½Í¥Ñ¥½¸Ä¹à°}Á½Í¥Ñ¥½¸Ä¹ä°}Á½Í¥Ñ¥½¸Ä¹è€¤ì($$%±¥ÍÑ•¹•È¹Í•Ñ=É¥•¹Ñ…Ñ¥½¸ }½É¥•¹Ñ…Ñ¥½¸Ä¹à°}½É¥•¹Ñ…Ñ¥½¸Ä¹ä°}½É¥•¹Ñ…Ñ¥½¸Ä¹è°ÕÀ¹à°ÕÀ¹ä°ÕÀ¹è€¤ì(($%ô((%ô()ô()±…ÍÌÕ‘¥¼•áÑ•¹‘Ì=‰©•ÐÍì((%½¹ÍÑÉÕÑ½È ±¥ÍÑ•¹•È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€Õ‘¥¼œì(($%Ñ¡¥Ì¹±¥ÍÑ•¹•È€ô±¥ÍÑ•¹•Èì($%Ñ¡¥Ì¹½¹Ñ•áÐ€ô±¥ÍÑ•¹•È¹½¹Ñ•áÐì(($%Ñ¡¥Ì¹…¥¸€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•…¥¸ ¤ì($%Ñ¡¥Ì¹…¥¸¹½¹¹•Ð ±¥ÍÑ•¹•È¹•Ñ%¹ÁÕÐ ¤€¤ì(($%Ñ¡¥Ì¹…ÕÑ½Á±…ä€ô™…±Í”ì(($%Ñ¡¥Ì¹‰Õ™™•È€ô¹Õ±°ì($%Ñ¡¥Ì¹‘•ÑÕ¹”€ô€Àì($%Ñ¡¥Ì¹±½½À€ô™…±Í”ì($%Ñ¡¥Ì¹±½½ÁMÑ…ÉÐ€ô€Àì($%Ñ¡¥Ì¹±½½Á¹€ô€Àì($%Ñ¡¥Ì¹½™™Í•Ð€ô€Àì($%Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€ôÕ¹‘•™¥¹•ì($%Ñ¡¥Ì¹Á±…å‰…­I…Ñ”€ô€Äì($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôÑÉÕ”ì($%Ñ¡¥Ì¹Í½ÕÉ”€ô¹Õ±°ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€•µÁÑäœì(($%Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð€ô€Àì($%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€ô€Àì($%Ñ¡¥Ì¹}½¹¹•Ñ•€ô™…±Í”ì(($%Ñ¡¥Ì¹™¥±Ñ•ÉÌ€ômtì((%ô((%•Ñ=ÕÑÁÕÐ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸ì((%ô((%Í•Ñ9½‘•M½ÕÉ” …Õ‘¥½9½‘”€¤ì(($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ô™…±Í”ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€…Õ‘¥½9½‘”œì($%Ñ¡¥Ì¹Í½ÕÉ”€ô…Õ‘¥½9½‘”ì($%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ5•‘¥…±•µ•¹ÑM½ÕÉ” µ•‘¥…±•µ•¹Ð€¤ì(($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ô™…±Í”ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€µ•‘¥…9½‘”œì($%Ñ¡¥Ì¹Í½ÕÉ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•5•‘¥…±•µ•¹ÑM½ÕÉ” µ•‘¥…±•µ•¹Ð€¤ì($%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ5•‘¥…MÑÉ•…µM½ÕÉ” µ•‘¥…MÑÉ•…´€¤ì(($%Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ô™…±Í”ì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€µ•‘¥…MÑÉ•…µ9½‘”œì($%Ñ¡¥Ì¹Í½ÕÉ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•5•‘¥…MÑÉ•…µM½ÕÉ” µ•‘¥…MÑÉ•…´€¤ì($%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ	Õ™™•È …Õ‘¥½	Õ™™•È€¤ì(($%Ñ¡¥Ì¹‰Õ™™•È€ô…Õ‘¥½	Õ™™•Èì($%Ñ¡¥Ì¹Í½ÕÉ•QåÁ”€ô€‰Õ™™•Èœì(($%¥˜€ Ñ¡¥Ì¹…ÕÑ½Á±…ä€¤Ñ¡¥Ì¹Á±…ä ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Á±…ä ‘•±…ä€ô€À€¤ì(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÕ‘¥¼¥Ì…±É•…‘äÁ±…å¥¹œ¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð€ôÑ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€¬‘•±…äì(($%½¹ÍÐÍ½ÕÉ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•	Õ™™•ÉM½ÕÉ” ¤ì($%Í½ÕÉ”¹‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•Èì($%Í½ÕÉ”¹±½½À€ôÑ¡¥Ì¹±½½Àì($%Í½ÕÉ”¹±½½ÁMÑ…ÉÐ€ôÑ¡¥Ì¹±½½ÁMÑ…ÉÐì($%Í½ÕÉ”¹±½½Á¹€ôÑ¡¥Ì¹±½½Á¹ì($%Í½ÕÉ”¹½¹•¹‘•€ôÑ¡¥Ì¹½¹¹‘•¹‰¥¹ Ñ¡¥Ì€¤ì($%Í½ÕÉ”¹ÍÑ…ÉÐ Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð°Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€¬Ñ¡¥Ì¹½™™Í•Ð°Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸€¤ì(($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Í½ÕÉ”€ôÍ½ÕÉ”ì(($%Ñ¡¥Ì¹Í•Ñ•ÑÕ¹” Ñ¡¥Ì¹‘•ÑÕ¹”€¤ì($%Ñ¡¥Ì¹Í•ÑA±…å‰…­I…Ñ” Ñ¡¥Ì¹Á±…å‰…­I…Ñ”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹½¹¹•Ð ¤ì((%ô((%Á…ÕÍ” ¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$$¼¼ÕÁ‘…Ñ”ÕÉÉ•¹ÐÁÉ½É•ÍÌ(($$%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€¬ô5…Ñ ¹µ…à Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€´Ñ¡¥Ì¹}ÍÑ…ÉÑ•‘Ð°€À€¤€¨Ñ¡¥Ì¹Á±…å‰…­I…Ñ”ì(($$%¥˜€ Ñ¡¥Ì¹±½½À€ôôôÑÉÕ”€¤ì(($$$$¼¼•¹ÍÕÉ”}ÁÉ½É•ÍÌ‘½•Ì¹½Ð•á••‘ÕÉ…Ñ¥½¸Ý¥Ñ ±½½Á•…Õ‘¥½Ì(($$$%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€ôÑ¡¥Ì¹}ÁÉ½É•ÍÌ€”€ Ñ¡¥Ì¹‘ÕÉ…Ñ¥½¸ñðÑ¡¥Ì¹‰Õ™™•È¹‘ÕÉ…Ñ¥½¸€¤ì(($$%ô(($$%Ñ¡¥Ì¹Í½ÕÉ”¹ÍÑ½À ¤ì($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹•¹‘•€ô¹Õ±°ì(($$%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ½À ¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹}ÁÉ½É•ÍÌ€ô€Àì(($%¥˜€ Ñ¡¥Ì¹Í½ÕÉ”€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹ÍÑ½À ¤ì($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹•¹‘•€ô¹Õ±°ì(($%ô(($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½¹¹•Ð ¤ì(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €ø€À€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl€Àt€¤ì(($$%™½È€ ±•Ð¤€ô€Ä°°€ôÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤€´€Ät¹½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤t€¤ì(($$%ô(($$%Ñ¡¥Ì¹™¥±Ñ•ÉÍlÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €´€Ät¹½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô(($%Ñ¡¥Ì¹}½¹¹•Ñ•€ôÑÉÕ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‘¥Í½¹¹•Ð ¤ì(($%¥˜€ Ñ¡¥Ì¹}½¹¹•Ñ•€ôôô™…±Í”€¤ì(($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ Ñ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €ø€À€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl€Àt€¤ì(($$%™½È€ ±•Ð¤€ô€Ä°°€ôÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤€´€Ät¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹™¥±Ñ•ÉÍl¤t€¤ì(($$%ô(($$%Ñ¡¥Ì¹™¥±Ñ•ÉÍlÑ¡¥Ì¹™¥±Ñ•ÉÌ¹±•¹Ñ €´€Ät¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹•Ñ=ÕÑÁÕÐ ¤€¤ì(($%ô(($%Ñ¡¥Ì¹}½¹¹•Ñ•€ô™…±Í”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ¥±Ñ•ÉÌ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹™¥±Ñ•ÉÌì((%ô((%Í•Ñ¥±Ñ•ÉÌ Ù…±Õ”€¤ì(($%¥˜€ €„Ù…±Õ”€¤Ù…±Õ”€ômtì(($%¥˜€ Ñ¡¥Ì¹}½¹¹•Ñ•€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹‘¥Í½¹¹•Ð ¤ì($$%Ñ¡¥Ì¹™¥±Ñ•ÉÌ€ôÙ…±Õ”¹Í±¥” ¤ì($$%Ñ¡¥Ì¹½¹¹•Ð ¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹™¥±Ñ•ÉÌ€ôÙ…±Õ”¹Í±¥” ¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ•ÑÕ¹” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹‘•ÑÕ¹”€ôÙ…±Õ”ì(($%¥˜€ Ñ¡¥Ì¹Í½ÕÉ”¹‘•ÑÕ¹”€ôôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸ì€¼¼½¹±äÍ•Ð‘•ÑÕ¹”Ý¡•¸…Ù…¥±…‰±”(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹‘•ÑÕ¹”¹Í•ÑQ…É•ÑÑQ¥µ” Ñ¡¥Ì¹‘•ÑÕ¹”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ•ÑÕ¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘•ÑÕ¹”ì((%ô((%•Ñ¥±Ñ•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•Ñ¥±Ñ•ÉÌ ¥l€Àtì((%ô((%Í•Ñ¥±Ñ•È ™¥±Ñ•È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•Ñ¥±Ñ•ÉÌ ™¥±Ñ•È€ül™¥±Ñ•Èt€èmt€¤ì((%ô((%Í•ÑA±…å‰…­I…Ñ” Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹Á±…å‰…­I…Ñ”€ôÙ…±Õ”ì(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹Á±…å‰…­I…Ñ”¹Í•ÑQ…É•ÑÑQ¥µ” Ñ¡¥Ì¹Á±…å‰…­I…Ñ”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•ÑA±…å‰…­I…Ñ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á±…å‰…­I…Ñ”ì((%ô((%½¹¹‘• ¤ì(($%Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ô™…±Í”ì((%ô((%•Ñ1½½À ¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸™…±Í”ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ì¹±½½Àì((%ô((%Í•Ñ1½½À Ù…±Õ”€¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôô™…±Í”€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹Õ‘¥¼èÑ¡¥ÌÕ‘¥¼¡…Ì¹¼Á±…å‰…¬½¹ÑÉ½°¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%Ñ¡¥Ì¹±½½À€ôÙ…±Õ”ì(($%¥˜€ Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôôÑÉÕ”€¤ì(($$%Ñ¡¥Ì¹Í½ÕÉ”¹±½½À€ôÑ¡¥Ì¹±½½Àì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ1½½ÁMÑ…ÉÐ Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹±½½ÁMÑ…ÉÐ€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ1½½Á¹ Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹±½½Á¹€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•ÑY½±Õµ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹…¥¸¹…¥¸¹Ù…±Õ”ì((%ô((%Í•ÑY½±Õµ” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹…¥¸¹…¥¸¹Í•ÑQ…É•ÑÑQ¥µ” Ù…±Õ”°Ñ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”°€À¸ÀÄ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}Á½Í¥Ñ¥½¸€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÅÕ…Ñ•É¹¥½¸€ô€¼©}}AUI}|¨¼¹•ÜEÕ…Ñ•É¹¥½¸ ¤ì)½¹ÍÐ}Í…±”€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}½É¥•¹Ñ…Ñ¥½¸€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌA½Í¥Ñ¥½¹…±Õ‘¥¼•áÑ•¹‘ÌÕ‘¥¼ì((%½¹ÍÑÉÕÑ½È ±¥ÍÑ•¹•È€¤ì(($%ÍÕÁ•È ±¥ÍÑ•¹•È€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È€ôÑ¡¥Ì¹½¹Ñ•áÐ¹É•…Ñ•A…¹¹•È ¤ì($%Ñ¡¥Ì¹Á…¹¹•È¹Á…¹¹¥¹5½‘•°€ô€!IQœì($%Ñ¡¥Ì¹Á…¹¹•È¹½¹¹•Ð Ñ¡¥Ì¹…¥¸€¤ì((%ô((%½¹¹•Ð ¤ì(($%ÍÕÁ•È¹½¹¹•Ð ¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹½¹¹•Ð Ñ¡¥Ì¹…¥¸€¤ì((%ô((%‘¥Í½¹¹•Ð ¤ì(($%ÍÕÁ•È¹‘¥Í½¹¹•Ð ¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹‘¥Í½¹¹•Ð Ñ¡¥Ì¹…¥¸€¤ì((%ô((%•Ñ=ÕÑÁÕÐ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•Èì((%ô((%•ÑI•™¥ÍÑ…¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹É•™¥ÍÑ…¹”ì((%ô((%Í•ÑI•™¥ÍÑ…¹” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹É•™¥ÍÑ…¹”€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•ÑI½±±½™™…Ñ½È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹É½±±½™™…Ñ½Èì((%ô((%Í•ÑI½±±½™™…Ñ½È Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹É½±±½™™…Ñ½È€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ¥ÍÑ…¹•5½‘•° ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹‘¥ÍÑ…¹•5½‘•°ì((%ô((%Í•Ñ¥ÍÑ…¹•5½‘•° Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹‘¥ÍÑ…¹•5½‘•°€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ5…á¥ÍÑ…¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Á…¹¹•È¹µ…á¥ÍÑ…¹”ì((%ô((%Í•Ñ5…á¥ÍÑ…¹” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹µ…á¥ÍÑ…¹”€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ¥É•Ñ¥½¹…±½¹” ½¹•%¹¹•É¹±”°½¹•=ÕÑ•É¹±”°½¹•=ÕÑ•É…¥¸€¤ì(($%Ñ¡¥Ì¹Á…¹¹•È¹½¹•%¹¹•É¹±”€ô½¹•%¹¹•É¹±”ì($%Ñ¡¥Ì¹Á…¹¹•È¹½¹•=ÕÑ•É¹±”€ô½¹•=ÕÑ•É¹±”ì($%Ñ¡¥Ì¹Á…¹¹•È¹½¹•=ÕÑ•É…¥¸€ô½¹•=ÕÑ•É…¥¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%¥˜€ Ñ¡¥Ì¹¡…ÍA±…å‰…­½¹ÑÉ½°€ôôôÑÉÕ”€˜˜Ñ¡¥Ì¹¥ÍA±…å¥¹œ€ôôô™…±Í”€¤É•ÑÕÉ¸ì(($%Ñ¡¥Ì¹µ…ÑÉ¥á]½É±¹‘•½µÁ½Í” }Á½Í¥Ñ¥½¸°}ÅÕ…Ñ•É¹¥½¸°}Í…±”€¤ì(($%}½É¥•¹Ñ…Ñ¥½¸¹Í•Ð €À°€À°€Ä€¤¹…ÁÁ±åEÕ…Ñ•É¹¥½¸ }ÅÕ…Ñ•É¹¥½¸€¤ì(($%½¹ÍÐÁ…¹¹•È€ôÑ¡¥Ì¹Á…¹¹•Èì(($%¥˜€ Á…¹¹•È¹Á½Í¥Ñ¥½¹`€¤ì(($$$¼¼½‘”Á…Ñ ™½È¡É½µ”…¹¥É•™½à€¡Í•”€ŒÄÐÌäÌ¤(($$%½¹ÍÐ•¹‘Q¥µ”€ôÑ¡¥Ì¹½¹Ñ•áÐ¹ÕÉÉ•¹ÑQ¥µ”€¬Ñ¡¥Ì¹±¥ÍÑ•¹•È¹Ñ¥µ••±Ñ„ì(($$%Á…¹¹•È¹Á½Í¥Ñ¥½¹`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸¹à°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹Á½Í¥Ñ¥½¹d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸¹ä°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹Á½Í¥Ñ¥½¹h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }Á½Í¥Ñ¥½¸¹è°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹½É¥•¹Ñ…Ñ¥½¹`¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸¹à°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹½É¥•¹Ñ…Ñ¥½¹d¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸¹ä°•¹‘Q¥µ”€¤ì($$%Á…¹¹•È¹½É¥•¹Ñ…Ñ¥½¹h¹±¥¹•…ÉI…µÁQ½Y…±Õ•ÑQ¥µ” }½É¥•¹Ñ…Ñ¥½¸¹è°•¹‘Q¥µ”€¤ì(($%ô•±Í”ì(($$%Á…¹¹•È¹Í•ÑA½Í¥Ñ¥½¸ }Á½Í¥Ñ¥½¸¹à°}Á½Í¥Ñ¥½¸¹ä°}Á½Í¥Ñ¥½¸¹è€¤ì($$%Á…¹¹•È¹Í•Ñ=É¥•¹Ñ…Ñ¥½¸ }½É¥•¹Ñ…Ñ¥½¸¹à°}½É¥•¹Ñ…Ñ¥½¸¹ä°}½É¥•¹Ñ…Ñ¥½¸¹è€¤ì(($%ô((%ô()ô()±…ÍÌÕ‘¥½¹…±åÍ•Èì((%½¹ÍÑÉÕÑ½È …Õ‘¥¼°™™ÑM¥é”€ô€ÈÀÐà€¤ì(($%Ñ¡¥Ì¹…¹…±åÍ•È€ô…Õ‘¥¼¹½¹Ñ•áÐ¹É•…Ñ•¹…±åÍ•È ¤ì($%Ñ¡¥Ì¹…¹…±åÍ•È¹™™ÑM¥é”€ô™™ÑM¥é”ì(($%Ñ¡¥Ì¹‘…Ñ„€ô¹•ÜU¥¹ÐáÉÉ…ä Ñ¡¥Ì¹…¹…±åÍ•È¹™É•ÅÕ•¹å	¥¹½Õ¹Ð€¤ì(($%…Õ‘¥¼¹•Ñ=ÕÑÁÕÐ ¤¹½¹¹•Ð Ñ¡¥Ì¹…¹…±åÍ•È€¤ì((%ô(((%•ÑÉ•ÅÕ•¹å…Ñ„ ¤ì(($%Ñ¡¥Ì¹…¹…±åÍ•È¹•Ñ	åÑ•É•ÅÕ•¹å…Ñ„ Ñ¡¥Ì¹‘…Ñ„€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘…Ñ„ì((%ô((%•ÑÙ•É…•É•ÅÕ•¹ä ¤ì(($%±•ÐÙ…±Õ”€ô€Àì($%½¹ÍÐ‘…Ñ„€ôÑ¡¥Ì¹•ÑÉ•ÅÕ•¹å…Ñ„ ¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð‘…Ñ„¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ù…±Õ”€¬ô‘…Ñ…l¤tì(($%ô(($%É•ÑÕÉ¸Ù…±Õ”€¼‘…Ñ„¹±•¹Ñ ì((%ô()ô()±…ÍÌAÉ½Á•ÉÑå5¥á•Èì((%½¹ÍÑÉÕÑ½È ‰¥¹‘¥¹œ°ÑåÁ•9…µ”°Ù…±Õ•M¥é”€¤ì(($%Ñ¡¥Ì¹‰¥¹‘¥¹œ€ô‰¥¹‘¥¹œì($%Ñ¡¥Ì¹Ù…±Õ•M¥é”€ôÙ…±Õ•M¥é”ì(($%±•Ðµ¥áÕ¹Ñ¥½¸°($$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”°($$%Í•Ñ%‘•¹Ñ¥Ñäì(($$¼¼‰Õ™™•È±…å½ÕÐèl¥¹½µ¥¹œð…ÔÀð…ÔÄð½É¥œð…‘‘Ôð€¡½ÁÑ¥½¹…°Ý½É¬¤t($$¼¼($$¼¼¥¹Ñ•ÉÁ½±…Ñ½ÉÌ…¸ÕÍ”€¹‰Õ™™•È…ÌÑ¡•¥È€¹É•ÍÕ±Ð($$¼¼Ñ¡”‘…Ñ„Ñ¡•¸½•ÌÑ¼€¥¹½µ¥¹œœ($$¼¼($$¼¼€…ÔÀœ…¹€…ÔÄœ…É”ÕÍ•™É…µ”µ¥¹Ñ•É±•…Ù•™½È($$¼¼Ñ¡”ÕµÕ±…Ñ¥Ù”É•ÍÕ±Ð…¹…É”½µÁ…É•Ñ¼‘•Ñ•Ð($$¼¼¡…¹•Ì($$¼¼($$¼¼€½É¥œœÍÑ½É•ÌÑ¡”½É¥¥¹…°ÍÑ…Ñ”½˜Ñ¡”ÁÉ½Á•ÉÑä($$¼¼($$¼¼€…‘œ¥ÌÕÍ•™½È…‘‘¥Ñ¥Ù”ÕµÕ±…Ñ¥Ù”É•ÍÕ±ÑÌ($$¼¼($$¼¼€Ý½É¬œ¥Ì½ÁÑ¥½¹…°…¹¥Ì½¹±äÁÉ•Í•¹Ð™½ÈÅÕ…Ñ•É¹¥½¸ÑåÁ•Ì¸%Ð¥ÌÕÍ•($$¼¼Ñ¼ÍÑ½É”¥¹Ñ•Éµ•‘¥…Ñ”ÅÕ…Ñ•É¹¥½¸µÕ±Ñ¥Á±¥…Ñ¥½¸É•ÍÕ±ÑÌ(($%ÍÝ¥Ñ € ÑåÁ•9…µ”€¤ì(($$%…Í”€ÅÕ…Ñ•É¹¥½¸œè($$$%µ¥áÕ¹Ñ¥½¸€ôÑ¡¥Ì¹}Í±•ÉÀì($$$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹}Í±•ÉÁ‘‘¥Ñ¥Ù”ì($$$%Í•Ñ%‘•¹Ñ¥Ñä€ôÑ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥ÑåEÕ…Ñ•É¹¥½¸ì(($$$%Ñ¡¥Ì¹‰Õ™™•È€ô¹•Ü±½…ÐØÑÉÉ…ä Ù…±Õ•M¥é”€¨€Ø€¤ì($$$%Ñ¡¥Ì¹}Ý½É­%¹‘•à€ô€Ôì($$$%‰É•…¬ì(($$%…Í”€ÍÑÉ¥¹œœè($$%…Í”€‰½½°œè($$$%µ¥áÕ¹Ñ¥½¸€ôÑ¡¥Ì¹}Í•±•Ðì(($$$$¼¼UÍ”Ñ¡”É•Õ±…Èµ¥à™Õ¹Ñ¥½¸…¹™½È…‘‘¥Ñ¥Ù”½¸Ñ¡•Í”ÑåÁ•Ì°($$$$¼¼…‘‘¥Ñ¥Ù”¥Ì¹½ÐÉ•±•Ù…¹Ð™½È¹½¸µ¹Õµ•É¥ŒÑåÁ•Ì($$$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹}Í•±•Ðì(($$$%Í•Ñ%‘•¹Ñ¥Ñä€ôÑ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå=Ñ¡•Èì(($$$%Ñ¡¥Ì¹‰Õ™™•È€ô¹•ÜÉÉ…ä Ù…±Õ•M¥é”€¨€Ô€¤ì($$$%‰É•…¬ì(($$%‘•™…Õ±Ðè($$$%µ¥áÕ¹Ñ¥½¸€ôÑ¡¥Ì¹}±•ÉÀì($$$%µ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹}±•ÉÁ‘‘¥Ñ¥Ù”ì($$$%Í•Ñ%‘•¹Ñ¥Ñä€ôÑ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå9Õµ•É¥Œì(($$$%Ñ¡¥Ì¹‰Õ™™•È€ô¹•Ü±½…ÐØÑÉÉ…ä Ù…±Õ•M¥é”€¨€Ô€¤ì(($%ô(($%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¸€ôµ¥áÕ¹Ñ¥½¸ì($%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¹‘‘¥Ñ¥Ù”€ôµ¥áÕ¹Ñ¥½¹‘‘¥Ñ¥Ù”ì($%Ñ¡¥Ì¹}Í•Ñ%‘•¹Ñ¥Ñä€ôÍ•Ñ%‘•¹Ñ¥Ñäì($%Ñ¡¥Ì¹}½É¥%¹‘•à€ô€Ìì($%Ñ¡¥Ì¹}…‘‘%¹‘•à€ô€Ðì(($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ô€Àì($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ô€Àì(($%Ñ¡¥Ì¹ÕÍ•½Õ¹Ð€ô€Àì($%Ñ¡¥Ì¹É•™•É•¹•½Õ¹Ð€ô€Àì((%ô(($¼¼…ÕµÕ±…Ñ”‘…Ñ„¥¸Ñ¡”€¥¹½µ¥¹œœÉ•¥½¸¥¹Ñ¼€…Ôñ¤øœ(%…ÕµÕ±…Ñ” …Õ%¹‘•à°Ý•¥¡Ð€¤ì(($$¼¼¹½Ñ”è¡…ÁÁ¥±ä…ÕµÕ±…Ñ¥¹œ¹½Ñ¡¥¹œÝ¡•¸Ý•¥¡Ð€ô€À°Ñ¡”…±±•È­¹½ÝÌ($$¼¼Ñ¡”Ý•¥¡Ð…¹Í¡½Õ±‘¸Ð¡…Ù”µ…‘”Ñ¡”…±°¥¸Ñ¡”™¥ÉÍÐÁ±…”(($%½¹ÍÐ‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°($$%½™™Í•Ð€ô…Õ%¹‘•à€¨ÍÑÉ¥‘”€¬ÍÑÉ¥‘”ì(($%±•ÐÕÉÉ•¹Ñ]•¥¡Ð€ôÑ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ðì(($%¥˜€ ÕÉÉ•¹Ñ]•¥¡Ð€ôôô€À€¤ì(($$$¼¼…Õ8€èô¥¹½µ¥¹œ€¨Ý•¥¡Ð(($$%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$$%‰Õ™™•Él½™™Í•Ð€¬¤t€ô‰Õ™™•Él¤tì(($$%ô(($$%ÕÉÉ•¹Ñ]•¥¡Ð€ôÝ•¥¡Ðì(($%ô•±Í”ì(($$$¼¼…Õ8€èô…Õ8€¬¥¹½µ¥¹œ€¨Ý•¥¡Ð(($$%ÕÉÉ•¹Ñ]•¥¡Ð€¬ôÝ•¥¡Ðì($$%½¹ÍÐµ¥à€ôÝ•¥¡Ð€¼ÕÉÉ•¹Ñ]•¥¡Ðì($$%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¸ ‰Õ™™•È°½™™Í•Ð°€À°µ¥à°ÍÑÉ¥‘”€¤ì(($%ô(($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ôÕÉÉ•¹Ñ]•¥¡Ðì((%ô(($¼¼…ÕµÕ±…Ñ”‘…Ñ„¥¸Ñ¡”€¥¹½µ¥¹œœÉ•¥½¸¥¹Ñ¼€…‘œ(%…ÕµÕ±…Ñ•‘‘¥Ñ¥Ù” Ý•¥¡Ð€¤ì(($%½¹ÍÐ‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°($$%½™™Í•Ð€ôÍÑÉ¥‘”€¨Ñ¡¥Ì¹}…‘‘%¹‘•àì(($%¥˜€ Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ôôô€À€¤ì(($$$¼¼…‘€ô¥‘•¹Ñ¥Ñä(($$%Ñ¡¥Ì¹}Í•Ñ%‘•¹Ñ¥Ñä ¤ì(($%ô(($$¼¼…‘€èô…‘€¬¥¹½µ¥¹œ€¨Ý•¥¡Ð(($%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¹‘‘¥Ñ¥Ù” ‰Õ™™•È°½™™Í•Ð°€À°Ý•¥¡Ð°ÍÑÉ¥‘”€¤ì($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€¬ôÝ•¥¡Ðì((%ô(($¼¼…ÁÁ±äÑ¡”ÍÑ…Ñ”½˜€…Ôñ¤øœÑ¼Ñ¡”‰¥¹‘¥¹œÝ¡•¸…ÕÌ‘¥™™•È(%…ÁÁ±ä …Õ%¹‘•à€¤ì(($%½¹ÍÐÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°($$%‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%½™™Í•Ð€ô…Õ%¹‘•à€¨ÍÑÉ¥‘”€¬ÍÑÉ¥‘”°(($$%Ý•¥¡Ð€ôÑ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð°($$%Ý•¥¡Ñ‘‘¥Ñ¥Ù”€ôÑ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”°(($$%‰¥¹‘¥¹œ€ôÑ¡¥Ì¹‰¥¹‘¥¹œì(($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ô€Àì($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ô€Àì(($%¥˜€ Ý•¥¡Ð€ð€Ä€¤ì(($$$¼¼…Õ8€èô…Õ8€¬½É¥¥¹…°€¨€ €Ä€´ÕµÕ±…Ñ¥Ù•]•¥¡Ð€¤(($$%½¹ÍÐ½É¥¥¹…±Y…±Õ•=™™Í•Ð€ôÍÑÉ¥‘”€¨Ñ¡¥Ì¹}½É¥%¹‘•àì(($$%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¸ ($$$%‰Õ™™•È°½™™Í•Ð°½É¥¥¹…±Y…±Õ•=™™Í•Ð°€Ä€´Ý•¥¡Ð°ÍÑÉ¥‘”€¤ì(($%ô(($%¥˜€ Ý•¥¡Ñ‘‘¥Ñ¥Ù”€ø€À€¤ì(($$$¼¼…Õ8€èô…Õ8€¬…‘‘¥Ñ¥Ù”…Õ8(($$%Ñ¡¥Ì¹}µ¥á	Õ™™•ÉI•¥½¹‘‘¥Ñ¥Ù” ‰Õ™™•È°½™™Í•Ð°Ñ¡¥Ì¹}…‘‘%¹‘•à€¨ÍÑÉ¥‘”°€Ä°ÍÑÉ¥‘”€¤ì(($%ô(($%™½È€ ±•Ð¤€ôÍÑÉ¥‘”°”€ôÍÑÉ¥‘”€¬ÍÑÉ¥‘”ì¤€„ôô”ì€¬¬¤€¤ì(($$%¥˜€ ‰Õ™™•Él¤t€„ôô‰Õ™™•Él¤€¬ÍÑÉ¥‘”t€¤ì(($$$$¼¼Ù…±Õ”¡…Ì¡…¹•€´øÕÁ‘…Ñ”Í•¹”É…Á (($$$%‰¥¹‘¥¹œ¹Í•ÑY…±Õ” ‰Õ™™•È°½™™Í•Ð€¤ì($$$%‰É•…¬ì(($$%ô(($%ô((%ô(($¼¼É•µ•µ‰•ÈÑ¡”ÍÑ…Ñ”½˜Ñ¡”‰½Õ¹ÁÉ½Á•ÉÑä…¹½Áä¥ÐÑ¼‰½Ñ …ÕÌ(%Í…Ù•=É¥¥¹…±MÑ…Ñ” ¤ì(($%½¹ÍÐ‰¥¹‘¥¹œ€ôÑ¡¥Ì¹‰¥¹‘¥¹œì(($%½¹ÍÐ‰Õ™™•È€ôÑ¡¥Ì¹‰Õ™™•È°($$%ÍÑÉ¥‘”€ôÑ¡¥Ì¹Ù…±Õ•M¥é”°(($$%½É¥¥¹…±Y…±Õ•=™™Í•Ð€ôÍÑÉ¥‘”€¨Ñ¡¥Ì¹}½É¥%¹‘•àì(($%‰¥¹‘¥¹œ¹•ÑY…±Õ” ‰Õ™™•È°½É¥¥¹…±Y…±Õ•=™™Í•Ð€¤ì(($$¼¼…ÕlÀ¸¸Åt€èô½É¥œ€´´¥¹¥Ñ¥…±±ä‘•Ñ•Ð¡…¹•Ì……¥¹ÍÐÑ¡”½É¥¥¹…°($%™½È€ ±•Ð¤€ôÍÑÉ¥‘”°”€ô½É¥¥¹…±Y…±Õ•=™™Í•Ðì¤€„ôô”ì€¬¬¤€¤ì(($$%‰Õ™™•Él¤t€ô‰Õ™™•Él½É¥¥¹…±Y…±Õ•=™™Í•Ð€¬€ ¤€”ÍÑÉ¥‘”€¤tì(($%ô(($$¼¼‘Ñ¼¥‘•¹Ñ¥Ñä™½È…‘‘¥Ñ¥Ù”($%Ñ¡¥Ì¹}Í•Ñ%‘•¹Ñ¥Ñä ¤ì(($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ð€ô€Àì($%Ñ¡¥Ì¹ÕµÕ±…Ñ¥Ù•]•¥¡Ñ‘‘¥Ñ¥Ù”€ô€Àì((%ô(($¼¼…ÁÁ±äÑ¡”ÍÑ…Ñ”ÁÉ•Ù¥½ÕÍ±äÑ…­•¸Ù¥„€Í…Ù•=É¥¥¹…±MÑ…Ñ”œÑ¼Ñ¡”‰¥¹‘¥¹œ(%É•ÍÑ½É•=É¥¥¹…±MÑ…Ñ” ¤ì(($%½¹ÍÐ½É¥¥¹…±Y…±Õ•=™™Í•Ð€ôÑ¡¥Ì¹Ù…±Õ•M¥é”€¨€Ìì($%Ñ¡¥Ì¹‰¥¹‘¥¹œ¹Í•ÑY…±Õ” Ñ¡¥Ì¹‰Õ™™•È°½É¥¥¹…±Y…±Õ•=™™Í•Ð€¤ì((%ô((%}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå9Õµ•É¥Œ ¤ì(($%½¹ÍÐÍÑ…ÉÑ%¹‘•à€ôÑ¡¥Ì¹}…‘‘%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”ì($%½¹ÍÐ•¹‘%¹‘•à€ôÍÑ…ÉÑ%¹‘•à€¬Ñ¡¥Ì¹Ù…±Õ•M¥é”ì(($%™½È€ ±•Ð¤€ôÍÑ…ÉÑ%¹‘•àì¤€ð•¹‘%¹‘•àì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹‰Õ™™•Él¤t€ô€Àì(($%ô((%ô((%}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥ÑåEÕ…Ñ•É¹¥½¸ ¤ì(($%Ñ¡¥Ì¹}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå9Õµ•É¥Œ ¤ì($%Ñ¡¥Ì¹‰Õ™™•ÉlÑ¡¥Ì¹}…‘‘%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”€¬€Ìt€ô€Äì((%ô((%}Í•Ñ‘‘¥Ñ¥Ù•%‘•¹Ñ¥Ñå=Ñ¡•È ¤ì(($%½¹ÍÐÍÑ…ÉÑ%¹‘•à€ôÑ¡¥Ì¹}½É¥%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”ì($%½¹ÍÐÑ…É•Ñ%¹‘•à€ôÑ¡¥Ì¹}…‘‘%¹‘•à€¨Ñ¡¥Ì¹Ù…±Õ•M¥é”ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹Ù…±Õ•M¥é”ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹‰Õ™™•ÉlÑ…É•Ñ%¹‘•à€¬¤t€ôÑ¡¥Ì¹‰Õ™™•ÉlÍÑ…ÉÑ%¹‘•à€¬¤tì(($%ô((%ô((($¼¼µ¥à™Õ¹Ñ¥½¹Ì((%}Í•±•Ð ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%¥˜€ Ð€øô€À¸Ô€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$$%‰Õ™™•Él‘ÍÑ=™™Í•Ð€¬¤t€ô‰Õ™™•ÉlÍÉ=™™Í•Ð€¬¤tì(($$%ô(($%ô((%ô((%}Í±•ÉÀ ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð€¤ì(($%EÕ…Ñ•É¹¥½¸¹Í±•ÉÁ±…Ð ‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°ÍÉ=™™Í•Ð°Ð€¤ì((%ô((%}Í±•ÉÁ‘‘¥Ñ¥Ù” ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%½¹ÍÐÝ½É­=™™Í•Ð€ôÑ¡¥Ì¹}Ý½É­%¹‘•à€¨ÍÑÉ¥‘”ì(($$¼¼MÑ½É”É•ÍÕ±Ð¥¸¥¹Ñ•Éµ•‘¥…Ñ”‰Õ™™•È½™™Í•Ð($%EÕ…Ñ•É¹¥½¸¹µÕ±Ñ¥Á±åEÕ…Ñ•É¹¥½¹Í±…Ð ‰Õ™™•È°Ý½É­=™™Í•Ð°‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°ÍÉ=™™Í•Ð€¤ì(($$¼¼M±•ÉÀÑ¼Ñ¡”¥¹Ñ•Éµ•‘¥…Ñ”É•ÍÕ±Ð($%EÕ…Ñ•É¹¥½¸¹Í±•ÉÁ±…Ð ‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°‘ÍÑ=™™Í•Ð°‰Õ™™•È°Ý½É­=™™Í•Ð°Ð€¤ì((%ô((%}±•ÉÀ ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%½¹ÍÐÌ€ô€Ä€´Ðì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$%½¹ÍÐ¨€ô‘ÍÑ=™™Í•Ð€¬¤ì(($$%‰Õ™™•Él¨t€ô‰Õ™™•Él¨t€¨Ì€¬‰Õ™™•ÉlÍÉ=™™Í•Ð€¬¤t€¨Ðì(($%ô((%ô((%}±•ÉÁ‘‘¥Ñ¥Ù” ‰Õ™™•È°‘ÍÑ=™™Í•Ð°ÍÉ=™™Í•Ð°Ð°ÍÑÉ¥‘”€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôôÍÑÉ¥‘”ì€¬¬¤€¤ì(($$%½¹ÍÐ¨€ô‘ÍÑ=™™Í•Ð€¬¤ì(($$%‰Õ™™•Él¨t€ô‰Õ™™•Él¨t€¬‰Õ™™•ÉlÍÉ=™™Í•Ð€¬¤t€¨Ðì(($%ô((%ô()ô((¼¼¡…É…Ñ•ÉÌmt¸è¼…É”É•Í•ÉÙ•™½ÈÑÉ…¬‰¥¹‘¥¹œÍå¹Ñ…à¸)½¹ÍÐ}IMIY}!IM}I€ô€qqmqquqp¸éqp¼œì)½¹ÍÐ}É•Í•ÉÙ•‘I”€ô¹•ÜI•áÀ €lœ€¬}IMIY}!IM}I€¬€tœ°€œœ€¤ì((¼¼ÑÑ•µÁÑÌÑ¼…±±½Ü¹½‘”¹…µ•Ì™É½´…¹ä±…¹Õ…”¸LÔÌqÝ€É••áÀµ…Ñ¡•Ì(¼¼½¹±ä±…Ñ¥¸¡…É…Ñ•ÉÌ°…¹Ñ¡”Õ¹¥½‘”qÁí1ô¥Ì¹½Ðå•ÐÍÕÁÁ½ÉÑ•¸M¼(¼¼¥¹ÍÑ•…°Ý”•á±Õ‘”É•Í•ÉÙ•¡…É…Ñ•ÉÌ…¹µ…Ñ •Ù•ÉåÑ¡¥¹œ•±Í”¸)½¹ÍÐ}Ý½É‘¡…È€ô€mxœ€¬}IMIY}!IM}I€¬€tœì)½¹ÍÐ}Ý½É‘¡…É=É½Ð€ô€mxœ€¬}IMIY}!IM}I¹É•Á±…” €qp¸œ°€œœ€¤€¬€tœì((¼¼A…É•¹Ð‘¥É•Ñ½É¥•Ì°‘•±¥µ¥Ñ•‰ä€œ¼œ½È€œèœ¸ÕÉÉ•¹Ñ±äÕ¹ÕÍ•°‰ÕÐµÕÍÐ(¼¼‰”µ…Ñ¡•Ñ¼Á…ÉÍ”Ñ¡”É•ÍÐ½˜Ñ¡”ÑÉ…¬¹…µ”¸)½¹ÍÐ}‘¥É•Ñ½ÉåI”€ô€¼©}}AUI}|¨¼€¼  üé]­mp¼ét¤¨¤¼¹Í½ÕÉ”¹É•Á±…” €]œ°}Ý½É‘¡…È€¤ì((¼¼Q…É•Ð¹½‘”¸5…ä½¹Ñ…¥¸Ý½É¡…É…Ñ•ÉÌ€¡„µéµhÀ´å|¤…¹€œ¸œ½È€œ´œ¸)½¹ÍÐ}¹½‘•I”€ô€¼©}}AUI}|¨¼€¼¡]=¬¤ü¼¹Í½ÕÉ”¹É•Á±…” €]=œ°}Ý½É‘¡…É=É½Ð€¤ì((¼¼=‰©•Ð½¸Ñ…É•Ð¹½‘”°…¹…•ÍÍ½È¸5…ä¹½Ð½¹Ñ…¥¸É•Í•ÉÙ•(¼¼¡…É…Ñ•ÉÌ¸•ÍÍ½Èµ…ä½¹Ñ…¥¸…¹ä¡…É…Ñ•È•á•ÁÐ±½Í¥¹œ‰É…­•Ð¸)½¹ÍÐ}½‰©•ÑI”€ô€¼©}}AUI}|¨¼€¼ üép¸¡]¬¤ üéql ¸¬¥qt¤ü¤ü¼¹Í½ÕÉ”¹É•Á±…” €]œ°}Ý½É‘¡…È€¤ì((¼¼AÉ½Á•ÉÑä…¹…•ÍÍ½È¸5…ä¹½Ð½¹Ñ…¥¸É•Í•ÉÙ•¡…É…Ñ•ÉÌ¸•ÍÍ½Èµ…ä(¼¼½¹Ñ…¥¸…¹ä¹½¸µ‰É…­•Ð¡…É…Ñ•ÉÌ¸)½¹ÍÐ}ÁÉ½Á•ÉÑåI”€ô€¼©}}AUI}|¨¼€½p¸¡]¬¤ üéql ¸¬¥qt¤ü¼¹Í½ÕÉ”¹É•Á±…” €]œ°}Ý½É‘¡…È€¤ì()½¹ÍÐ}ÑÉ…­I”€ô¹•ÜI•áÀ €œœ($¬€xœ($¬}‘¥É•Ñ½ÉåI”($¬}¹½‘•I”($¬}½‰©•ÑI”($¬}ÁÉ½Á•ÉÑåI”($¬€œœ(¤ì()½¹ÍÐ}ÍÕÁÁ½ÉÑ•‘=‰©•Ñ9…µ•Ì€ôl€µ…Ñ•É¥…°œ°€µ…Ñ•É¥…±Ìœ°€‰½¹•Ìœ°€µ…Àœtì()±…ÍÌ½µÁ½Í¥Ñ”ì((%½¹ÍÑÉÕÑ½È Ñ…É•ÑÉ½ÕÀ°Á…Ñ °½ÁÑ¥½¹…±A…ÉÍ•‘A…Ñ €¤ì(($%½¹ÍÐÁ…ÉÍ•‘A…Ñ €ô½ÁÑ¥½¹…±A…ÉÍ•‘A…Ñ ñðAÉ½Á•ÉÑå	¥¹‘¥¹œ¹Á…ÉÍ•QÉ…­9…µ” Á…Ñ €¤ì(($%Ñ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ€ôÑ…É•ÑÉ½ÕÀì($%Ñ¡¥Ì¹}‰¥¹‘¥¹Ì€ôÑ…É•ÑÉ½ÕÀ¹ÍÕ‰ÍÉ¥‰•| Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì((%ô((%•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹ ¤ì€¼¼‰¥¹…±°‰¥¹‘¥¹œ(($%½¹ÍÐ™¥ÉÍÑY…±¥‘%¹‘•à€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°($$%‰¥¹‘¥¹œ€ôÑ¡¥Ì¹}‰¥¹‘¥¹Íl™¥ÉÍÑY…±¥‘%¹‘•àtì(($$¼¼…¹½¹±ä…±°€¹•ÑY…±Õ”½¸Ñ¡”™¥ÉÍÐ($%¥˜€ ‰¥¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤‰¥¹‘¥¹œ¹•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì((%ô((%Í•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹Í•ÑY…±Õ” …ÉÉ…ä°½™™Í•Ð€¤ì(($%ô((%ô((%‰¥¹ ¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹‰¥¹ ¤ì(($%ô((%ô((%Õ¹‰¥¹ ¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ôÑ¡¥Ì¹}Ñ…É•ÑÉ½ÕÀ¹¹…¡•‘=‰©•ÑÍ|°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹Õ¹‰¥¹ ¤ì(($%ô((%ô()ô((¼¼9½Ñ”èQ¡¥Ì±…ÍÌÕÍ•Ì„MÑ…Ñ”Á…ÑÑ•É¸½¸„Á•Èµµ•Ñ¡½‰…Í¥Ìè(¼¼€‰¥¹œÍ•ÑÌ€Ñ¡¥Ì¹•ÑY…±Õ”œ€¼€Í•ÑY…±Õ”œ…¹Í¡…‘½ÝÌÑ¡”(¼¼ÁÉ½Ñ½ÑåÁ”Ù•ÉÍ¥½¸½˜Ñ¡•Í”µ•Ñ¡½‘ÌÝ¥Ñ ½¹”Ñ¡…ÐÉ•ÁÉ•Í•¹ÑÌ(¼¼Ñ¡”‰½Õ¹ÍÑ…Ñ”¸]¡•¸Ñ¡”ÁÉ½Á•ÉÑä¥Ì¹½Ð™½Õ¹°Ñ¡”µ•Ñ¡½‘Ì(¼¼‰•½µ”¹¼µ½ÁÌ¸)±…ÍÌAÉ½Á•ÉÑå	¥¹‘¥¹œì((%½¹ÍÑÉÕÑ½È É½½Ñ9½‘”°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%Ñ¡¥Ì¹Á…Ñ €ôÁ…Ñ ì($%Ñ¡¥Ì¹Á…ÉÍ•‘A…Ñ €ôÁ…ÉÍ•‘A…Ñ ñðAÉ½Á•ÉÑå	¥¹‘¥¹œ¹Á…ÉÍ•QÉ…­9…µ” Á…Ñ €¤ì(($%Ñ¡¥Ì¹¹½‘”€ôAÉ½Á•ÉÑå	¥¹‘¥¹œ¹™¥¹‘9½‘” É½½Ñ9½‘”°Ñ¡¥Ì¹Á…ÉÍ•‘A…Ñ ¹¹½‘•9…µ”€¤ì(($%Ñ¡¥Ì¹É½½Ñ9½‘”€ôÉ½½Ñ9½‘”ì(($$¼¼¥¹¥Ñ¥…°ÍÑ…Ñ”½˜Ñ¡•Í”µ•Ñ¡½‘ÌÑ¡…Ð…±±Ì€‰¥¹œ($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹}•ÑY…±Õ•}Õ¹‰½Õ¹ì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹}Í•ÑY…±Õ•}Õ¹‰½Õ¹ì((%ô(((%ÍÑ…Ñ¥ŒÉ•…Ñ” É½½Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%¥˜€ €„€ É½½Ð€˜˜É½½Ð¹¥Í¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀ€¤€¤ì(($$%É•ÑÕÉ¸¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ É½½Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%ô•±Í”ì(($$%É•ÑÕÉ¸¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ” É½½Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%ô((%ô(($¼¨¨($€¨I•Á±…•ÌÍÁ…•ÌÝ¥Ñ Õ¹‘•ÉÍ½É•Ì…¹É•µ½Ù•ÌÕ¹ÍÕÁÁ½ÉÑ•¡…É…Ñ•ÉÌ™É½´($€¨¹½‘”¹…µ•Ì°Ñ¼•¹ÍÕÉ”½µÁ…Ñ¥‰¥±¥ÑäÝ¥Ñ Á…ÉÍ•QÉ…­9…µ” ¤¸($€¨($€¨Á…É…´íÍÑÉ¥¹ô¹…µ”9½‘”¹…µ”Ñ¼‰”Í…¹¥Ñ¥é•¸($€¨É•ÑÕÉ¸íÍÑÉ¥¹ô($€¨¼(%ÍÑ…Ñ¥ŒÍ…¹¥Ñ¥é•9½‘•9…µ” ¹…µ”€¤ì(($%É•ÑÕÉ¸¹…µ”¹É•Á±…” €½qÌ½œ°€|œ€¤¹É•Á±…” }É•Í•ÉÙ•‘I”°€œœ€¤ì((%ô((%ÍÑ…Ñ¥ŒÁ…ÉÍ•QÉ…­9…µ” ÑÉ…­9…µ”€¤ì(($%½¹ÍÐµ…Ñ¡•Ì€ô}ÑÉ…­I”¹•á•Œ ÑÉ…­9…µ”€¤ì(($%¥˜€ µ…Ñ¡•Ì€ôôô¹Õ±°€¤ì(($$%Ñ¡É½Ü¹•ÜÉÉ½È €AÉ½Á•ÉÑå	¥¹‘¥¹œè…¹¹½ÐÁ…ÉÍ”ÑÉ…­9…µ”è€œ€¬ÑÉ…­9…µ”€¤ì(($%ô(($%½¹ÍÐÉ•ÍÕ±ÑÌ€ôì($$$¼¼‘¥É•Ñ½Éå9…µ”èµ…Ñ¡•Íl€Ät°€¼¼€¡ÑÍ¡Ü¤ÕÉÉ•¹Ñ±äÕ¹ÕÍ•($$%¹½‘•9…µ”èµ…Ñ¡•Íl€Èt°($$%½‰©•Ñ9…µ”èµ…Ñ¡•Íl€Ìt°($$%½‰©•Ñ%¹‘•àèµ…Ñ¡•Íl€Ðt°($$%ÁÉ½Á•ÉÑå9…µ”èµ…Ñ¡•Íl€Ôt°€¼¼É•ÅÕ¥É•($$%ÁÉ½Á•ÉÑå%¹‘•àèµ…Ñ¡•Íl€Øt($%ôì(($%½¹ÍÐ±…ÍÑ½Ð€ôÉ•ÍÕ±ÑÌ¹¹½‘•9…µ”€˜˜É•ÍÕ±ÑÌ¹¹½‘•9…µ”¹±…ÍÑ%¹‘•á=˜ €œ¸œ€¤ì(($%¥˜€ ±…ÍÑ½Ð€„ôôÕ¹‘•™¥¹•€˜˜±…ÍÑ½Ð€„ôô€´€Ä€¤ì(($$%½¹ÍÐ½‰©•Ñ9…µ”€ôÉ•ÍÕ±ÑÌ¹¹½‘•9…µ”¹ÍÕ‰ÍÑÉ¥¹œ ±…ÍÑ½Ð€¬€Ä€¤ì(($$$¼¼=‰©•Ð¹…µ•ÌµÕÍÐ‰”¡•­•……¥¹ÍÐ…¸…±±½Ý±¥ÍÐ¸=Ñ¡•ÉÝ¥Í”°Ñ¡•É”($$$¼¼¥Ì¹¼Ý…äÑ¼Á…ÉÍ”€™½¼¹‰…È¹‰…èœè€‰…èœµÕÍÐ‰”„ÁÉ½Á•ÉÑä°‰ÕÐ($$$¼¼€‰…Èœ½Õ±‰”Ñ¡”½‰©•Ñ9…µ”°½ÈÁ…ÉÐ½˜„¹½‘•9…µ”€¡Ý¡¥ …¸($$$¼¼¥¹±Õ‘”€œ¸œ¡…É…Ñ•ÉÌ¤¸($$%¥˜€ }ÍÕÁÁ½ÉÑ•‘=‰©•Ñ9…µ•Ì¹¥¹‘•á=˜ ½‰©•Ñ9…µ”€¤€„ôô€´€Ä€¤ì(($$$%É•ÍÕ±ÑÌ¹¹½‘•9…µ”€ôÉ•ÍÕ±ÑÌ¹¹½‘•9…µ”¹ÍÕ‰ÍÑÉ¥¹œ €À°±…ÍÑ½Ð€¤ì($$$%É•ÍÕ±ÑÌ¹½‰©•Ñ9…µ”€ô½‰©•Ñ9…µ”ì(($$%ô(($%ô(($%¥˜€ É•ÍÕ±ÑÌ¹ÁÉ½Á•ÉÑå9…µ”€ôôô¹Õ±°ñðÉ•ÍÕ±ÑÌ¹ÁÉ½Á•ÉÑå9…µ”¹±•¹Ñ €ôôô€À€¤ì(($$%Ñ¡É½Ü¹•ÜÉÉ½È €AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½ÐÁ…ÉÍ”ÁÉ½Á•ÉÑå9…µ”™É½´ÑÉ…­9…µ”è€œ€¬ÑÉ…­9…µ”€¤ì(($%ô(($%É•ÑÕÉ¸É•ÍÕ±ÑÌì((%ô((%ÍÑ…Ñ¥Œ™¥¹‘9½‘” É½½Ð°¹½‘•9…µ”€¤ì(($%¥˜€ ¹½‘•9…µ”€ôôôÕ¹‘•™¥¹•ñð¹½‘•9…µ”€ôôô€œœñð¹½‘•9…µ”€ôôô€œ¸œñð¹½‘•9…µ”€ôôô€´€Äñð¹½‘•9…µ”€ôôôÉ½½Ð¹¹…µ”ñð¹½‘•9…µ”€ôôôÉ½½Ð¹ÕÕ¥€¤ì(($$%É•ÑÕÉ¸É½½Ðì(($%ô(($$¼¼Í•…É ¥¹Ñ¼Í­•±•Ñ½¸‰½¹•Ì¸($%¥˜€ É½½Ð¹Í­•±•Ñ½¸€¤ì(($$%½¹ÍÐ‰½¹”€ôÉ½½Ð¹Í­•±•Ñ½¸¹•Ñ	½¹•	å9…µ” ¹½‘•9…µ”€¤ì(($$%¥˜€ ‰½¹”€„ôôÕ¹‘•™¥¹•€¤ì(($$$%É•ÑÕÉ¸‰½¹”ì(($$%ô(($%ô(($$¼¼Í•…É ¥¹Ñ¼¹½‘”ÍÕ‰ÑÉ•”¸($%¥˜€ É½½Ð¹¡¥±‘É•¸€¤ì(($$%½¹ÍÐÍ•…É¡9½‘•MÕ‰ÑÉ•”€ô™Õ¹Ñ¥½¸€ ¡¥±‘É•¸€¤ì(($$$%™½È€ ±•Ð¤€ô€Àì¤€ð¡¥±‘É•¸¹±•¹Ñ ì¤€¬¬€¤ì(($$$$%½¹ÍÐ¡¥±‘9½‘”€ô¡¥±‘É•¹l¤tì(($$$$%¥˜€ ¡¥±‘9½‘”¹¹…µ”€ôôô¹½‘•9…µ”ñð¡¥±‘9½‘”¹ÕÕ¥€ôôô¹½‘•9…µ”€¤ì(($$$$$%É•ÑÕÉ¸¡¥±‘9½‘”ì(($$$$%ô(($$$$%½¹ÍÐÉ•ÍÕ±Ð€ôÍ•…É¡9½‘•MÕ‰ÑÉ•” ¡¥±‘9½‘”¹¡¥±‘É•¸€¤ì(($$$$%¥˜€ É•ÍÕ±Ð€¤É•ÑÕÉ¸É•ÍÕ±Ðì(($$$%ô(($$$%É•ÑÕÉ¸¹Õ±°ì(($$%ôì(($$%½¹ÍÐÍÕ‰QÉ••9½‘”€ôÍ•…É¡9½‘•MÕ‰ÑÉ•” É½½Ð¹¡¥±‘É•¸€¤ì(($$%¥˜€ ÍÕ‰QÉ••9½‘”€¤ì(($$$%É•ÑÕÉ¸ÍÕ‰QÉ••9½‘”ì(($$%ô(($%ô(($%É•ÑÕÉ¸¹Õ±°ì((%ô(($¼¼Ñ¡•Í”…É”ÕÍ•Ñ¼€‰‰¥¹ˆ„¹½¹•á¥ÍÑ•¹ÐÁÉ½Á•ÉÑä(%}•ÑY…±Õ•}Õ¹…Ù…¥±…‰±” ¤íô(%}Í•ÑY…±Õ•}Õ¹…Ù…¥±…‰±” ¤íô(($¼¼•ÑÑ•ÉÌ((%}•ÑY…±Õ•}‘¥É•Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%‰Õ™™•Él½™™Í•Ðt€ôÑ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”tì((%ô((%}•ÑY…±Õ•}…ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐÍ½ÕÉ”€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ôÍ½ÕÉ”¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‰Õ™™•Él½™™Í•Ð€¬¬t€ôÍ½ÕÉ•l¤tì(($%ô((%ô((%}•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%‰Õ™™•Él½™™Í•Ðt€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àtì((%ô((%}•ÑY…±Õ•}Ñ½ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹Ñ½ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì((%ô(($¼¼¥É•Ð((%}Í•ÑY…±Õ•}‘¥É•Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”t€ô‰Õ™™•Él½™™Í•Ðtì((%ô((%}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”t€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•ÑlÑ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”t€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô(($¼¼¹Ñ¥É•ÉÉ…ä((%}Í•ÑY…±Õ•}…ÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐ‘•ÍÐ€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ô‘•ÍÐ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‘•ÍÑl¤t€ô‰Õ™™•Él½™™Í•Ð€¬¬tì(($%ô((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐ‘•ÍÐ€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ô‘•ÍÐ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‘•ÍÑl¤t€ô‰Õ™™•Él½™™Í•Ð€¬¬tì(($%ô(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%½¹ÍÐ‘•ÍÐ€ôÑ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑäì(($%™½È€ ±•Ð¤€ô€À°¸€ô‘•ÍÐ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%‘•ÍÑl¤t€ô‰Õ™™•Él½™™Í•Ð€¬¬tì(($%ô(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô(($¼¼ÉÉ…å±•µ•¹Ð((%}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àt€ô‰Õ™™•Él½™™Í•Ðtì((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àt€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑålÑ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•àt€ô‰Õ™™•Él½™™Í•Ðtì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô(($¼¼!…ÍQ½É½µÉÉ…ä((%}Í•ÑY…±Õ•}™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì((%ô((%}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ” ‰Õ™™•È°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä¹™É½µÉÉ…ä ‰Õ™™•È°½™™Í•Ð€¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%}•ÑY…±Õ•}Õ¹‰½Õ¹ Ñ…É•ÑÉÉ…ä°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹ ¤ì($%Ñ¡¥Ì¹•ÑY…±Õ” Ñ…É•ÑÉÉ…ä°½™™Í•Ð€¤ì((%ô((%}Í•ÑY…±Õ•}Õ¹‰½Õ¹ Í½ÕÉ•ÉÉ…ä°½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹‰¥¹ ¤ì($%Ñ¡¥Ì¹Í•ÑY…±Õ” Í½ÕÉ•ÉÉ…ä°½™™Í•Ð€¤ì((%ô(($¼¼É•…Ñ”•ÑÑ•È€¼Í•ÑÑ•ÈÁ…¥È™½È„ÁÉ½Á•ÉÑä¥¸Ñ¡”Í•¹”É…Á (%‰¥¹ ¤ì(($%±•ÐÑ…É•Ñ=‰©•Ð€ôÑ¡¥Ì¹¹½‘”ì($%½¹ÍÐÁ…ÉÍ•‘A…Ñ €ôÑ¡¥Ì¹Á…ÉÍ•‘A…Ñ ì(($%½¹ÍÐ½‰©•Ñ9…µ”€ôÁ…ÉÍ•‘A…Ñ ¹½‰©•Ñ9…µ”ì($%½¹ÍÐÁÉ½Á•ÉÑå9…µ”€ôÁ…ÉÍ•‘A…Ñ ¹ÁÉ½Á•ÉÑå9…µ”ì($%±•ÐÁÉ½Á•ÉÑå%¹‘•à€ôÁ…ÉÍ•‘A…Ñ ¹ÁÉ½Á•ÉÑå%¹‘•àì(($%¥˜€ €„Ñ…É•Ñ=‰©•Ð€¤ì(($$%Ñ…É•Ñ=‰©•Ð€ôAÉ½Á•ÉÑå	¥¹‘¥¹œ¹™¥¹‘9½‘” Ñ¡¥Ì¹É½½Ñ9½‘”°Á…ÉÍ•‘A…Ñ ¹¹½‘•9…µ”€¤ì(($$%Ñ¡¥Ì¹¹½‘”€ôÑ…É•Ñ=‰©•Ðì(($%ô(($$¼¼Í•Ð™…¥°ÍÑ…Ñ”Í¼Ý”…¸©ÕÍÐ€É•ÑÕÉ¸œ½¸•ÉÉ½È($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹}•ÑY…±Õ•}Õ¹…Ù…¥±…‰±”ì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹}Í•ÑY…±Õ•}Õ¹…Ù…¥±…‰±”ì(($$¼¼•¹ÍÕÉ”Ñ¡•É”¥Ì„Ù…±Õ”¹½‘”($%¥˜€ €„Ñ…É•Ñ=‰©•Ð€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè9¼Ñ…É•Ð¹½‘”™½Õ¹™½ÈÑÉ…¬è€œ€¬Ñ¡¥Ì¹Á…Ñ €¬€œ¸œ€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%¥˜€ ½‰©•Ñ9…µ”€¤ì(($$%±•Ð½‰©•Ñ%¹‘•à€ôÁ…ÉÍ•‘A…Ñ ¹½‰©•Ñ%¹‘•àì(($$$¼¼ÍÁ•¥…°…Í•ÌÝ•É”Ý”¹••Ñ¼É•… ‘••Á•È¥¹Ñ¼Ñ¡”¡¥•É…É¡äÑ¼•ÐÑ¡”™…”µ…Ñ•É¥…±Ì¸¸¸¸($$%ÍÝ¥Ñ € ½‰©•Ñ9…µ”€¤ì(($$$%…Í”€µ…Ñ•É¥…±Ìœè(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°…Ì¹½‘”‘½•Ì¹½Ð¡…Ù”„µ…Ñ•É¥…°¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…Ñ•É¥…±Ì€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°¹µ…Ñ•É¥…±Ì…Ì¹½‘”¹µ…Ñ•É¥…°‘½•Ì¹½Ð¡…Ù”„µ…Ñ•É¥…±Ì…ÉÉ…ä¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…Ñ•É¥…±Ìì(($$$$%‰É•…¬ì(($$$%…Í”€‰½¹•Ìœè(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹Í­•±•Ñ½¸€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼‰½¹•Ì…Ì¹½‘”‘½•Ì¹½Ð¡…Ù”„Í­•±•Ñ½¸¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$$¼¼Á½Ñ•¹Ñ¥…°™ÕÑÕÉ”½ÁÑ¥µ¥é…Ñ¥½¸èÍ­¥ÀÑ¡¥Ì¥˜ÁÉ½Á•ÉÑå%¹‘•à¥Ì…±É•…‘ä…¸¥¹Ñ••È($$$$$¼¼…¹½¹Ù•ÉÐÑ¡”¥¹Ñ••ÈÍÑÉ¥¹œÑ¼„ÑÉÕ”¥¹Ñ••È¸(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹Í­•±•Ñ½¸¹‰½¹•Ìì(($$$$$¼¼ÍÕÁÁ½ÉÐÉ•Í½±Ù¥¹œµ½ÉÁ¡Q…É•Ð¹…µ•Ì¥¹Ñ¼¥¹‘¥•Ì¸($$$$%™½È€ ±•Ð¤€ô€Àì¤€ðÑ…É•Ñ=‰©•Ð¹±•¹Ñ ì¤€¬¬€¤ì(($$$$$%¥˜€ Ñ…É•Ñ=‰©•Ñl¤t¹¹…µ”€ôôô½‰©•Ñ%¹‘•à€¤ì(($$$$$$%½‰©•Ñ%¹‘•à€ô¤ì($$$$$$%‰É•…¬ì(($$$$$%ô(($$$$%ô(($$$$%‰É•…¬ì(($$$%…Í”€µ…Àœè(($$$$%¥˜€ €µ…Àœ¥¸Ñ…É•Ñ=‰©•Ð€¤ì(($$$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹µ…Àì($$$$$%‰É•…¬ì(($$$$%ô(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°…Ì¹½‘”‘½•Ì¹½Ð¡…Ù”„µ…Ñ•É¥…°¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…À€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ…Ñ•É¥…°¹µ…À…Ì¹½‘”¹µ…Ñ•É¥…°‘½•Ì¹½Ð¡…Ù”„µ…À¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ð¹µ…Ñ•É¥…°¹µ…Àì($$$$%‰É•…¬ì(($$$%‘•™…Õ±Ðè(($$$$%¥˜€ Ñ…É•Ñ=‰©•Ñl½‰©•Ñ9…µ”t€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼½‰©•Ñ9…µ”½˜¹½‘”Õ¹‘•™¥¹•¸œ°Ñ¡¥Ì€¤ì($$$$$%É•ÑÕÉ¸ì(($$$$%ô(($$$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ñl½‰©•Ñ9…µ”tì(($$%ô((($$%¥˜€ ½‰©•Ñ%¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$$%¥˜€ Ñ…É•Ñ=‰©•Ñl½‰©•Ñ%¹‘•àt€ôôôÕ¹‘•™¥¹•€¤ì(($$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œèQÉå¥¹œÑ¼‰¥¹Ñ¼½‰©•Ñ%¹‘•à½˜½‰©•Ñ9…µ”°‰ÕÐ¥ÌÕ¹‘•™¥¹•¸œ°Ñ¡¥Ì°Ñ…É•Ñ=‰©•Ð€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$$%Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ñl½‰©•Ñ%¹‘•àtì(($$%ô(($%ô(($$¼¼É•Í½±Ù”ÁÉ½Á•ÉÑä($%½¹ÍÐ¹½‘•AÉ½Á•ÉÑä€ôÑ…É•Ñ=‰©•ÑlÁÉ½Á•ÉÑå9…µ”tì(($%¥˜€ ¹½‘•AÉ½Á•ÉÑä€ôôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ¹½‘•9…µ”€ôÁ…ÉÍ•‘A…Ñ ¹¹½‘•9…µ”ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œèQÉå¥¹œÑ¼ÕÁ‘…Ñ”ÁÉ½Á•ÉÑä™½ÈÑÉ…¬è€œ€¬¹½‘•9…µ”€¬($$$$œ¸œ€¬ÁÉ½Á•ÉÑå9…µ”€¬€œ‰ÕÐ¥ÐÝ…Í¹pÐ™½Õ¹¸œ°Ñ…É•Ñ=‰©•Ð€¤ì($$%É•ÑÕÉ¸ì(($%ô(($$¼¼‘•Ñ•Éµ¥¹”Ù•ÉÍ¥½¹¥¹œÍ¡•µ”($%±•ÐÙ•ÉÍ¥½¹¥¹œ€ôÑ¡¥Ì¹Y•ÉÍ¥½¹¥¹œ¹9½¹”ì(($%Ñ¡¥Ì¹Ñ…É•Ñ=‰©•Ð€ôÑ…É•Ñ=‰©•Ðì(($%¥˜€ Ñ…É•Ñ=‰©•Ð¹¹••‘ÍUÁ‘…Ñ”€„ôôÕ¹‘•™¥¹•€¤ì€¼¼µ…Ñ•É¥…°(($$%Ù•ÉÍ¥½¹¥¹œ€ôÑ¡¥Ì¹Y•ÉÍ¥½¹¥¹œ¹9••‘ÍUÁ‘…Ñ”ì(($%ô•±Í”¥˜€ Ñ…É•Ñ=‰©•Ð¹µ…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”€„ôôÕ¹‘•™¥¹•€¤ì€¼¼¹½‘”ÑÉ…¹Í™½É´(($$%Ù•ÉÍ¥½¹¥¹œ€ôÑ¡¥Ì¹Y•ÉÍ¥½¹¥¹œ¹5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”ì(($%ô(($$¼¼‘•Ñ•Éµ¥¹”¡½ÜÑ¡”ÁÉ½Á•ÉÑä•ÑÌ‰½Õ¹($%±•Ð‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹¥É•Ðì(($%¥˜€ ÁÉ½Á•ÉÑå%¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$$¼¼…•ÍÌ„ÍÕˆ•±•µ•¹Ð½˜Ñ¡”ÁÉ½Á•ÉÑä…ÉÉ…ä€¡½¹±äÁÉ¥µ¥Ñ¥Ù•Ì…É”ÍÕÁÁ½ÉÑ•É¥¡Ð¹½Ü¤(($$%¥˜€ ÁÉ½Á•ÉÑå9…µ”€ôôô€µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ìœ€¤ì(($$$$¼¼Á½Ñ•¹Ñ¥…°½ÁÑ¥µ¥é…Ñ¥½¸°Í­¥ÀÑ¡¥Ì¥˜ÁÉ½Á•ÉÑå%¹‘•à¥Ì…±É•…‘ä…¸¥¹Ñ••È°…¹½¹Ù•ÉÐÑ¡”¥¹Ñ••ÈÍÑÉ¥¹œÑ¼„ÑÉÕ”¥¹Ñ••È¸(($$$$¼¼ÍÕÁÁ½ÉÐÉ•Í½±Ù¥¹œµ½ÉÁ¡Q…É•Ð¹…µ•Ì¥¹Ñ¼¥¹‘¥•Ì¸($$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹•½µ•ÑÉä€¤ì(($$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì‰•…ÕÍ”¹½‘”‘½•Ì¹½Ð¡…Ù”„•½µ•ÑÉä¸œ°Ñ¡¥Ì€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$$%¥˜€ €„Ñ…É•Ñ=‰©•Ð¹•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì€¤ì(($$$$%½¹Í½±”¹•ÉÉ½È €Q!I¹AÉ½Á•ÉÑå	¥¹‘¥¹œè…¸¹½Ð‰¥¹Ñ¼µ½ÉÁ¡Q…É•Ñ%¹™±Õ•¹•Ì‰•…ÕÍ”¹½‘”‘½•Ì¹½Ð¡…Ù”„•½µ•ÑÉä¹µ½ÉÁ¡ÑÑÉ¥‰ÕÑ•Ì¸œ°Ñ¡¥Ì€¤ì($$$$%É•ÑÕÉ¸ì(($$$%ô(($$$%¥˜€ Ñ…É•Ñ=‰©•Ð¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…ÉålÁÉ½Á•ÉÑå%¹‘•àt€„ôôÕ¹‘•™¥¹•€¤ì(($$$$%ÁÉ½Á•ÉÑå%¹‘•à€ôÑ…É•Ñ=‰©•Ð¹µ½ÉÁ¡Q…É•Ñ¥Ñ¥½¹…ÉålÁÉ½Á•ÉÑå%¹‘•àtì(($$$%ô(($$%ô(($$%‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹ÉÉ…å±•µ•¹Ðì(($$%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä€ô¹½‘•AÉ½Á•ÉÑäì($$%Ñ¡¥Ì¹ÁÉ½Á•ÉÑå%¹‘•à€ôÁÉ½Á•ÉÑå%¹‘•àì(($%ô•±Í”¥˜€ ¹½‘•AÉ½Á•ÉÑä¹™É½µÉÉ…ä€„ôôÕ¹‘•™¥¹•€˜˜¹½‘•AÉ½Á•ÉÑä¹Ñ½ÉÉ…ä€„ôôÕ¹‘•™¥¹•€¤ì(($$$¼¼µÕÍÐÕÍ”½Áä™½È=‰©•ÐÍ¹Õ±•È½EÕ…Ñ•É¹¥½¸(($$%‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹!…ÍÉ½µQ½ÉÉ…äì(($$%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä€ô¹½‘•AÉ½Á•ÉÑäì(($%ô•±Í”¥˜€ ÉÉ…ä¹¥ÍÉÉ…ä ¹½‘•AÉ½Á•ÉÑä€¤€¤ì(($$%‰¥¹‘¥¹QåÁ”€ôÑ¡¥Ì¹	¥¹‘¥¹QåÁ”¹¹Ñ¥É•ÉÉ…äì(($$%Ñ¡¥Ì¹É•Í½±Ù•‘AÉ½Á•ÉÑä€ô¹½‘•AÉ½Á•ÉÑäì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹ÁÉ½Á•ÉÑå9…µ”€ôÁÉ½Á•ÉÑå9…µ”ì(($%ô(($$¼¼Í•±•Ð•ÑÑ•È€¼Í•ÑÑ•È($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹•ÑÑ•É	å	¥¹‘¥¹QåÁ•l‰¥¹‘¥¹QåÁ”tì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹M•ÑÑ•É	å	¥¹‘¥¹QåÁ•¹‘Y•ÉÍ¥½¹¥¹l‰¥¹‘¥¹QåÁ”ulÙ•ÉÍ¥½¹¥¹œtì((%ô((%Õ¹‰¥¹ ¤ì(($%Ñ¡¥Ì¹¹½‘”€ô¹Õ±°ì(($$¼¼‰…¬Ñ¼Ñ¡”ÁÉ½Ñ½ÑåÁ”Ù•ÉÍ¥½¸½˜•ÑY…±Õ”€¼Í•ÑY…±Õ”($$¼¼¹½Ñ”è…Ù½¥‘¥¹œÑ¼µÕÑ…Ñ”Ñ¡”Í¡…Á”½˜€Ñ¡¥ÌœÙ¥„€‘•±•Ñ”œ($%Ñ¡¥Ì¹•ÑY…±Õ”€ôÑ¡¥Ì¹}•ÑY…±Õ•}Õ¹‰½Õ¹ì($%Ñ¡¥Ì¹Í•ÑY…±Õ”€ôÑ¡¥Ì¹}Í•ÑY…±Õ•}Õ¹‰½Õ¹ì((%ô()ô()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ”€ô½µÁ½Í¥Ñ”ì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹	¥¹‘¥¹QåÁ”€ôì(%¥É•Ðè€À°(%¹Ñ¥É•ÉÉ…äè€Ä°(%ÉÉ…å±•µ•¹Ðè€È°(%!…ÍÉ½µQ½ÉÉ…äè€Ì)ôì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹Y•ÉÍ¥½¹¥¹œ€ôì(%9½¹”è€À°(%9••‘ÍUÁ‘…Ñ”è€Ä°(%5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”è€È)ôì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹•ÑÑ•É	å	¥¹‘¥¹QåÁ”€ôl((%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}‘¥É•Ð°(%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}…ÉÉ…ä°(%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð°(%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}•ÑY…±Õ•}Ñ½ÉÉ…ä°()tì()AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹M•ÑÑ•É	å	¥¹‘¥¹QåÁ•¹‘Y•ÉÍ¥½¹¥¹œ€ôl((%l($$¼¼¥É•Ð($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}‘¥É•Ð°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}‘¥É•Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t°l(($$¼¼¹Ñ¥É•ÉÉ…ä(($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…ä°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t°l(($$¼¼ÉÉ…å±•µ•¹Ð($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ð°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}…ÉÉ…å±•µ•¹Ñ}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t°l(($$¼¼!…ÍQ½É½µÉÉ…ä($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}™É½µÉÉ…ä°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ9••‘ÍUÁ‘…Ñ”°($%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹}Í•ÑY…±Õ•}™É½µÉÉ…å}Í•Ñ5…ÑÉ¥á]½É±‘9••‘ÍUÁ‘…Ñ”°((%t()tì((¼¨¨(€¨(€¨É½ÕÀ½˜½‰©•ÑÌÑ¡…ÐÉ••¥Ù•Ì„Í¡…É•…¹¥µ…Ñ¥½¸ÍÑ…Ñ”¸(€¨(€¨UÍ…”è(€¨(€¨€€´‘½‰©•ÑÌå½ÔÝ½Õ±½Ñ¡•ÉÝ¥Í”Á…ÍÌ…Ì€É½½ÐœÑ¼Ñ¡”(€¨€€€½¹ÍÑÉÕÑ½È½ÈÑ¡”€¹±¥ÁÑ¥½¸µ•Ñ¡½½˜¹¥µ…Ñ¥½¹5¥á•È¸(€¨(€¨€€´%¹ÍÑ•…Á…ÍÌÑ¡¥Ì½‰©•Ð…Ì€É½½Ðœ¸(€¨(€¨€€´e½Ô…¸…±Í¼…‘…¹É•µ½Ù”½‰©•ÑÌ±…Ñ•ÈÝ¡•¸Ñ¡”µ¥á•È(€¨€€€¥ÌÉÕ¹¹¥¹œ¸(€¨(€¨9½Ñ”è(€¨(€¨€€€=‰©•ÑÌ½˜Ñ¡¥Ì±…ÍÌ…ÁÁ•…È…Ì½¹”½‰©•ÐÑ¼Ñ¡”µ¥á•È°(€¨€€€Í¼…¡”½¹ÑÉ½°½˜Ñ¡”¥¹‘¥Ù¥‘Õ…°½‰©•ÑÌµÕÍÐ‰”‘½¹”(€¨€€€½¸Ñ¡”É½ÕÀ¸(€¨(€¨1¥µ¥Ñ…Ñ¥½¸è(€¨(€¨€€´Q¡”…¹¥µ…Ñ•ÁÉ½Á•ÉÑ¥•ÌµÕÍÐ‰”½µÁ…Ñ¥‰±”…µ½¹œÑ¡”(€¨€€€…±°½‰©•ÑÌ¥¸Ñ¡”É½ÕÀ¸(€¨(€¨€€´Í¥¹±”ÁÉ½Á•ÉÑä…¸•¥Ñ¡•È‰”½¹ÑÉ½±±•Ñ¡É½Õ „(€¨€€€Ñ…É•ÐÉ½ÕÀ½È‘¥É•Ñ±ä°‰ÕÐ¹½Ð‰½Ñ ¸(€¨¼()±…ÍÌ¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀì((%½¹ÍÑÉÕÑ½È ¤ì(($%Ñ¡¥Ì¹¥Í¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÕÕ¥€ô•¹•É…Ñ•UU% ¤ì(($$¼¼…¡•½‰©•ÑÌ™½±±½Ý•‰äÑ¡”…Ñ¥Ù”½¹•Ì($%Ñ¡¥Ì¹}½‰©•ÑÌ€ôÉÉ…ä¹ÁÉ½Ñ½ÑåÁ”¹Í±¥”¹…±° …ÉÕµ•¹ÑÌ€¤ì(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô€Àì€¼¼Ñ¡É•Í¡½±($$¼¼¹½Ñ”èÉ•…‰äAÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ”(($%½¹ÍÐ¥¹‘¥•Ì€ôíôì($%Ñ¡¥Ì¹}¥¹‘¥•Í	åUU%€ô¥¹‘¥•Ìì€¼¼™½È‰½½­­••Á¥¹œ(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%¥¹‘¥•Íl…ÉÕµ•¹ÑÍl¤t¹ÕÕ¥t€ô¤ì(($%ô(($%Ñ¡¥Ì¹}Á…Ñ¡Ì€ômtì€¼¼¥¹Í¥‘”èÍÑÉ¥¹œ($%Ñ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì€ômtì€¼¼¥¹Í¥‘”èìÝ”‘½¸Ð…É”°¡•É”ô($%Ñ¡¥Ì¹}‰¥¹‘¥¹Ì€ômtì€¼¼¥¹Í¥‘”èÉÉ…äðAÉ½Á•ÉÑå	¥¹‘¥¹œ€ø($%Ñ¡¥Ì¹}‰¥¹‘¥¹Í%¹‘¥•Í	åA…Ñ €ôíôì€¼¼¥¹Í¥‘”è¥¹‘¥•Ì¥¸Ñ¡•Í”…ÉÉ…åÌ(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%Ñ¡¥Ì¹ÍÑ…ÑÌ€ôì(($$%½‰©•ÑÌèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}½‰©•ÑÌ¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Ñ¡¥Ì¹Ñ½Ñ…°€´Í½Á”¹¹…¡•‘=‰©•ÑÍ|ì(($$$%ô($$%ô°($$%•Ð‰¥¹‘¥¹ÍA•É=‰©•Ð ¤ì(($$$%É•ÑÕÉ¸Í½Á”¹}‰¥¹‘¥¹Ì¹±•¹Ñ ì(($$%ô(($%ôì((%ô((%…‘ ¤ì(($%½¹ÍÐ½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¥¹‘¥•Í	åUU%€ôÑ¡¥Ì¹}¥¹‘¥•Í	åUU%°($$%Á…Ñ¡Ì€ôÑ¡¥Ì¹}Á…Ñ¡Ì°($$%Á…ÉÍ•‘A…Ñ¡Ì€ôÑ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%±•Ð­¹½Ý¹=‰©•Ð€ôÕ¹‘•™¥¹•°($$%¹=‰©•ÑÌ€ô½‰©•ÑÌ¹±•¹Ñ °($$%¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|ì(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô…ÉÕµ•¹ÑÍl¤t°($$$%ÕÕ¥€ô½‰©•Ð¹ÕÕ¥ì($$%±•Ð¥¹‘•à€ô¥¹‘¥•Í	åUU%lÕÕ¥tì(($$%¥˜€ ¥¹‘•à€ôôôÕ¹‘•™¥¹•€¤ì(($$$$¼¼Õ¹­¹½Ý¸½‰©•Ð€´ø…‘¥ÐÑ¼Ñ¡”Q%YÉ•¥½¸(($$$%¥¹‘•à€ô¹=‰©•ÑÌ€¬¬ì($$$%¥¹‘¥•Í	åUU%lÕÕ¥t€ô¥¹‘•àì($$$%½‰©•ÑÌ¹ÁÕÍ  ½‰©•Ð€¤ì(($$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$%‰¥¹‘¥¹Íl¨t¹ÁÕÍ  ¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ ½‰©•Ð°Á…Ñ¡Íl¨t°Á…ÉÍ•‘A…Ñ¡Íl¨t€¤€¤ì(($$$%ô(($$%ô•±Í”¥˜€ ¥¹‘•à€ð¹…¡•‘=‰©•ÑÌ€¤ì(($$$%­¹½Ý¹=‰©•Ð€ô½‰©•ÑÍl¥¹‘•àtì(($$$$¼¼µ½Ù”•á¥ÍÑ¥¹œ½‰©•ÐÑ¼Ñ¡”Q%YÉ•¥½¸(($$$%½¹ÍÐ™¥ÉÍÑÑ¥Ù•%¹‘•à€ô€´´¹…¡•‘=‰©•ÑÌ°($$$$%±…ÍÑ…¡•‘=‰©•Ð€ô½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àtì(($$$%¥¹‘¥•Í	åUU%l±…ÍÑ…¡•‘=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì($$$%½‰©•ÑÍl¥¹‘•àt€ô±…ÍÑ…¡•‘=‰©•Ðì(($$$%¥¹‘¥•Í	åUU%lÕÕ¥t€ô™¥ÉÍÑÑ¥Ù•%¹‘•àì($$$%½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô½‰©•Ðì(($$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨t°($$$$$%±…ÍÑ…¡•€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àtì(($$$$%±•Ð‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àtì(($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô±…ÍÑ…¡•ì(($$$$%¥˜€ ‰¥¹‘¥¹œ€ôôôÕ¹‘•™¥¹•€¤ì(($$$$$$¼¼Í¥¹”Ý”‘¼¹½Ð‰½Ñ¡•ÈÑ¼É•…Ñ”¹•Ü‰¥¹‘¥¹Ì($$$$$$¼¼™½È½‰©•ÑÌÑ¡…Ð…É”…¡•°Ñ¡”‰¥¹‘¥¹œµ…ä($$$$$$¼¼½Èµ…ä¹½Ð•á¥ÍÐ(($$$$$%‰¥¹‘¥¹œ€ô¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ ½‰©•Ð°Á…Ñ¡Íl¨t°Á…ÉÍ•‘A…Ñ¡Íl¨t€¤ì(($$$$%ô(($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô‰¥¹‘¥¹œì(($$$%ô(($$%ô•±Í”¥˜€ ½‰©•ÑÍl¥¹‘•àt€„ôô­¹½Ý¹=‰©•Ð€¤ì(($$$%½¹Í½±”¹•ÉÉ½È €Q!I¹¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀè¥™™•É•¹Ð½‰©•ÑÌÝ¥Ñ Ñ¡”Í…µ”UU%€œ€¬($$$$$‘•Ñ•Ñ•¸±•…¸Ñ¡”…¡•Ì½ÈÉ•É•…Ñ”å½ÕÈ¥¹™É…ÍÑÉÕÑÕÉ”Ý¡•¸É•±½…‘¥¹œÍ•¹•Ì¸œ€¤ì(($$%ô€¼¼•±Í”Ñ¡”½‰©•Ð¥Ì…±É•…‘äÝ¡•É”Ý”Ý…¹Ð¥ÐÑ¼‰”(($%ô€¼¼™½È…ÉÕµ•¹ÑÌ(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô¹…¡•‘=‰©•ÑÌì((%ô((%É•µ½Ù” ¤ì(($%½¹ÍÐ½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¥¹‘¥•Í	åUU%€ôÑ¡¥Ì¹}¥¹‘¥•Í	åUU%°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%±•Ð¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|ì(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô…ÉÕµ•¹ÑÍl¤t°($$$%ÕÕ¥€ô½‰©•Ð¹ÕÕ¥°($$$%¥¹‘•à€ô¥¹‘¥•Í	åUU%lÕÕ¥tì(($$%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€˜˜¥¹‘•à€øô¹…¡•‘=‰©•ÑÌ€¤ì(($$$$¼¼µ½Ù”•á¥ÍÑ¥¹œ½‰©•Ð¥¹Ñ¼Ñ¡”!É•¥½¸(($$$%½¹ÍÐ±…ÍÑ…¡•‘%¹‘•à€ô¹…¡•‘=‰©•ÑÌ€¬¬°($$$$%™¥ÉÍÑÑ¥Ù•=‰©•Ð€ô½‰©•ÑÍl±…ÍÑ…¡•‘%¹‘•àtì(($$$%¥¹‘¥•Í	åUU%l™¥ÉÍÑÑ¥Ù•=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì($$$%½‰©•ÑÍl¥¹‘•àt€ô™¥ÉÍÑÑ¥Ù•=‰©•Ðì(($$$%¥¹‘¥•Í	åUU%lÕÕ¥t€ô±…ÍÑ…¡•‘%¹‘•àì($$$%½‰©•ÑÍl±…ÍÑ…¡•‘%¹‘•àt€ô½‰©•Ðì(($$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨t°($$$$$%™¥ÉÍÑÑ¥Ù”€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ…¡•‘%¹‘•àt°($$$$$%‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àtì(($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô™¥ÉÍÑÑ¥Ù”ì($$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ…¡•‘%¹‘•àt€ô‰¥¹‘¥¹œì(($$$%ô(($$%ô(($%ô€¼¼™½È…ÉÕµ•¹ÑÌ(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô¹…¡•‘=‰©•ÑÌì((%ô(($¼¼É•µ½Ù”€˜™½É•Ð(%Õ¹…¡” ¤ì(($%½¹ÍÐ½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¥¹‘¥•Í	åUU%€ôÑ¡¥Ì¹}¥¹‘¥•Í	åUU%°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%±•Ð¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|°($$%¹=‰©•ÑÌ€ô½‰©•ÑÌ¹±•¹Ñ ì(($%™½È€ ±•Ð¤€ô€À°¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô…ÉÕµ•¹ÑÍl¤t°($$$%ÕÕ¥€ô½‰©•Ð¹ÕÕ¥°($$$%¥¹‘•à€ô¥¹‘¥•Í	åUU%lÕÕ¥tì(($$%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$$%‘•±•Ñ”¥¹‘¥•Í	åUU%lÕÕ¥tì(($$$%¥˜€ ¥¹‘•à€ð¹…¡•‘=‰©•ÑÌ€¤ì(($$$$$¼¼½‰©•Ð¥Ì…¡•°Í¡É¥¹¬Ñ¡”!É•¥½¸(($$$$%½¹ÍÐ™¥ÉÍÑÑ¥Ù•%¹‘•à€ô€´´¹…¡•‘=‰©•ÑÌ°($$$$$%±…ÍÑ…¡•‘=‰©•Ð€ô½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àt°($$$$$%±…ÍÑ%¹‘•à€ô€´´¹=‰©•ÑÌ°($$$$$%±…ÍÑ=‰©•Ð€ô½‰©•ÑÍl±…ÍÑ%¹‘•àtì(($$$$$¼¼±…ÍÐ…¡•½‰©•ÐÑ…­•ÌÑ¡¥Ì½‰©•ÐÌÁ±…”($$$$%¥¹‘¥•Í	åUU%l±…ÍÑ…¡•‘=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì($$$$%½‰©•ÑÍl¥¹‘•àt€ô±…ÍÑ…¡•‘=‰©•Ðì(($$$$$¼¼±…ÍÐ½‰©•Ð½•ÌÑ¼Ñ¡”…Ñ¥Ù…Ñ•Í±½Ð…¹Á½À($$$$%¥¹‘¥•Í	åUU%l±…ÍÑ=‰©•Ð¹ÕÕ¥t€ô™¥ÉÍÑÑ¥Ù•%¹‘•àì($$$$%½‰©•ÑÍl™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô±…ÍÑ=‰©•Ðì($$$$%½‰©•ÑÌ¹Á½À ¤ì(($$$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨t°($$$$$$%±…ÍÑ…¡•€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àt°($$$$$$%±…ÍÐ€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ%¹‘•àtì(($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô±…ÍÑ…¡•ì($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l™¥ÉÍÑÑ¥Ù•%¹‘•àt€ô±…ÍÐì($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ ¹Á½À ¤ì(($$$$%ô(($$$%ô•±Í”ì(($$$$$¼¼½‰©•Ð¥Ì…Ñ¥Ù”°©ÕÍÐÍÝ…ÀÝ¥Ñ Ñ¡”±…ÍÐ…¹Á½À(($$$$%½¹ÍÐ±…ÍÑ%¹‘•à€ô€´´¹=‰©•ÑÌ°($$$$$%±…ÍÑ=‰©•Ð€ô½‰©•ÑÍl±…ÍÑ%¹‘•àtì(($$$$%¥˜€ ±…ÍÑ%¹‘•à€ø€À€¤ì(($$$$$%¥¹‘¥•Í	åUU%l±…ÍÑ=‰©•Ð¹ÕÕ¥t€ô¥¹‘•àì(($$$$%ô(($$$$%½‰©•ÑÍl¥¹‘•àt€ô±…ÍÑ=‰©•Ðì($$$$%½‰©•ÑÌ¹Á½À ¤ì(($$$$$¼¼…½Õ¹Ñ¥¹œ¥Ì‘½¹”°¹½Ü‘¼Ñ¡”Í…µ”™½È…±°‰¥¹‘¥¹Ì(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¹	¥¹‘¥¹Ìì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%½¹ÍÐ‰¥¹‘¥¹Í½ÉA…Ñ €ô‰¥¹‘¥¹Íl¨tì(($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¥¹‘•àt€ô‰¥¹‘¥¹Í½ÉA…Ñ¡l±…ÍÑ%¹‘•àtì($$$$$%‰¥¹‘¥¹Í½ÉA…Ñ ¹Á½À ¤ì(($$$$%ô(($$$%ô€¼¼…¡•½È…Ñ¥Ù”(($$%ô€¼¼¥˜½‰©•Ð¥Ì­¹½Ý¸(($%ô€¼¼™½È…ÉÕµ•¹ÑÌ(($%Ñ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|€ô¹…¡•‘=‰©•ÑÌì((%ô(($¼¼%¹Ñ•É¹…°¥¹Ñ•É™…”ÕÍ•‰ä‰•™É¥•¹‘•AÉ½Á•ÉÑå	¥¹‘¥¹œ¹½µÁ½Í¥Ñ”è((%ÍÕ‰ÍÉ¥‰•| Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($$¼¼É•ÑÕÉ¹Ì…¸…ÉÉ…ä½˜‰¥¹‘¥¹Ì™½ÈÑ¡”¥Ù•¸Á…Ñ Ñ¡…Ð¥Ì¡…¹•($$¼¼…½É‘¥¹œÑ¼Ñ¡”½¹Ñ…¥¹•½‰©•ÑÌ¥¸Ñ¡”É½ÕÀ(($%½¹ÍÐ¥¹‘¥•Í	åA…Ñ €ôÑ¡¥Ì¹}‰¥¹‘¥¹Í%¹‘¥•Í	åA…Ñ ì($%±•Ð¥¹‘•à€ô¥¹‘¥•Í	åA…Ñ¡lÁ…Ñ tì($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤É•ÑÕÉ¸‰¥¹‘¥¹Íl¥¹‘•àtì(($%½¹ÍÐÁ…Ñ¡Ì€ôÑ¡¥Ì¹}Á…Ñ¡Ì°($$%Á…ÉÍ•‘A…Ñ¡Ì€ôÑ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì°($$%½‰©•ÑÌ€ôÑ¡¥Ì¹}½‰©•ÑÌ°($$%¹=‰©•ÑÌ€ô½‰©•ÑÌ¹±•¹Ñ °($$%¹…¡•‘=‰©•ÑÌ€ôÑ¡¥Ì¹¹…¡•‘=‰©•ÑÍ|°($$%‰¥¹‘¥¹Í½ÉA…Ñ €ô¹•ÜÉÉ…ä ¹=‰©•ÑÌ€¤ì(($%¥¹‘•à€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì(($%¥¹‘¥•Í	åA…Ñ¡lÁ…Ñ t€ô¥¹‘•àì(($%Á…Ñ¡Ì¹ÁÕÍ  Á…Ñ €¤ì($%Á…ÉÍ•‘A…Ñ¡Ì¹ÁÕÍ  Á…ÉÍ•‘A…Ñ €¤ì($%‰¥¹‘¥¹Ì¹ÁÕÍ  ‰¥¹‘¥¹Í½ÉA…Ñ €¤ì(($%™½È€ ±•Ð¤€ô¹…¡•‘=‰©•ÑÌ°¸€ô½‰©•ÑÌ¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ½‰©•Ð€ô½‰©•ÑÍl¤tì($$%‰¥¹‘¥¹Í½ÉA…Ñ¡l¤t€ô¹•ÜAÉ½Á•ÉÑå	¥¹‘¥¹œ ½‰©•Ð°Á…Ñ °Á…ÉÍ•‘A…Ñ €¤ì(($%ô(($%É•ÑÕÉ¸‰¥¹‘¥¹Í½ÉA…Ñ ì((%ô((%Õ¹ÍÕ‰ÍÉ¥‰•| Á…Ñ €¤ì(($$¼¼Ñ•±±ÌÑ¡”É½ÕÀÑ¼™½É•Ð…‰½ÕÐ„ÁÉ½Á•ÉÑäÁ…Ñ …¹¹¼±½¹•È($$¼¼ÕÁ‘…Ñ”Ñ¡”…ÉÉ…äÁÉ•Ù¥½ÕÍ±ä½‰Ñ…¥¹•Ý¥Ñ €ÍÕ‰ÍÉ¥‰•|œ(($%½¹ÍÐ¥¹‘¥•Í	åA…Ñ €ôÑ¡¥Ì¹}‰¥¹‘¥¹Í%¹‘¥•Í	åA…Ñ °($$%¥¹‘•à€ô¥¹‘¥•Í	åA…Ñ¡lÁ…Ñ tì(($%¥˜€ ¥¹‘•à€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐÁ…Ñ¡Ì€ôÑ¡¥Ì¹}Á…Ñ¡Ì°($$$%Á…ÉÍ•‘A…Ñ¡Ì€ôÑ¡¥Ì¹}Á…ÉÍ•‘A…Ñ¡Ì°($$$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$$%±…ÍÑ	¥¹‘¥¹Í%¹‘•à€ô‰¥¹‘¥¹Ì¹±•¹Ñ €´€Ä°($$$%±…ÍÑ	¥¹‘¥¹Ì€ô‰¥¹‘¥¹Íl±…ÍÑ	¥¹‘¥¹Í%¹‘•àt°($$$%±…ÍÑ	¥¹‘¥¹ÍA…Ñ €ôÁ…Ñ¡l±…ÍÑ	¥¹‘¥¹Í%¹‘•àtì(($$%¥¹‘¥•Í	åA…Ñ¡l±…ÍÑ	¥¹‘¥¹ÍA…Ñ t€ô¥¹‘•àì(($$%‰¥¹‘¥¹Íl¥¹‘•àt€ô±…ÍÑ	¥¹‘¥¹Ìì($$%‰¥¹‘¥¹Ì¹Á½À ¤ì(($$%Á…ÉÍ•‘A…Ñ¡Íl¥¹‘•àt€ôÁ…ÉÍ•‘A…Ñ¡Íl±…ÍÑ	¥¹‘¥¹Í%¹‘•àtì($$%Á…ÉÍ•‘A…Ñ¡Ì¹Á½À ¤ì(($$%Á…Ñ¡Íl¥¹‘•àt€ôÁ…Ñ¡Íl±…ÍÑ	¥¹‘¥¹Í%¹‘•àtì($$%Á…Ñ¡Ì¹Á½À ¤ì(($%ô((%ô()ô()±…ÍÌ¹¥µ…Ñ¥½¹Ñ¥½¸ì((%½¹ÍÑÉÕÑ½È µ¥á•È°±¥À°±½…±I½½Ð€ô¹Õ±°°‰±•¹‘5½‘”€ô±¥À¹‰±•¹‘5½‘”€¤ì(($%Ñ¡¥Ì¹}µ¥á•È€ôµ¥á•Èì($%Ñ¡¥Ì¹}±¥À€ô±¥Àì($%Ñ¡¥Ì¹}±½…±I½½Ð€ô±½…±I½½Ðì($%Ñ¡¥Ì¹‰±•¹‘5½‘”€ô‰±•¹‘5½‘”ì(($%½¹ÍÐÑÉ…­Ì€ô±¥À¹ÑÉ…­Ì°($$%¹QÉ…­Ì€ôÑÉ…­Ì¹±•¹Ñ °($$%¥¹Ñ•ÉÁ½±…¹ÑÌ€ô¹•ÜÉÉ…ä ¹QÉ…­Ì€¤ì(($%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ì€ôì($$%•¹‘¥¹MÑ…ÉÐèi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ°($$%•¹‘¥¹¹èi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ($%ôì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹QÉ…­Ìì€¬¬¤€¤ì(($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹Ð€ôÑÉ…­Íl¤t¹É•…Ñ•%¹Ñ•ÉÁ½±…¹Ð ¹Õ±°€¤ì($$%¥¹Ñ•ÉÁ½±…¹ÑÍl¤t€ô¥¹Ñ•ÉÁ½±…¹Ðì($$%¥¹Ñ•ÉÁ½±…¹Ð¹Í•ÑÑ¥¹Ì€ô¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ìì(($%ô(($%Ñ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ì€ô¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ìì(($%Ñ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑÌ€ô¥¹Ñ•ÉÁ½±…¹ÑÌì€¼¼‰½Õ¹‰äÑ¡”µ¥á•È(($$¼¼¥¹Í¥‘”èAÉ½Á•ÉÑå5¥á•È€¡µ…¹…•‰äÑ¡”µ¥á•È¤($%Ñ¡¥Ì¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ì€ô¹•ÜÉÉ…ä ¹QÉ…­Ì€¤ì(($%Ñ¡¥Ì¹}…¡•%¹‘•à€ô¹Õ±°ì€¼¼™½ÈÑ¡”µ•µ½Éäµ…¹…•È($%Ñ¡¥Ì¹}‰å±¥Á…¡•%¹‘•à€ô¹Õ±°ì€¼¼™½ÈÑ¡”µ•µ½Éäµ…¹…•È(($%Ñ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì($%Ñ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì(($%Ñ¡¥Ì¹±½½À€ô1½½ÁI•Á•…Ðì($%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô€´€Äì(($$¼¼±½‰…°µ¥á•ÈÑ¥µ”Ý¡•¸Ñ¡”…Ñ¥½¸¥ÌÑ¼‰”ÍÑ…ÉÑ•($$¼¼¥ÐÌÍ•Ð‰…¬Ñ¼€¹Õ±°œÕÁ½¸ÍÑ…ÉÐ½˜Ñ¡”…Ñ¥½¸($%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì(($$¼¼Í…±•±½…°Ñ¥µ”½˜Ñ¡”…Ñ¥½¸($$¼¼•ÑÌ±…µÁ•½ÈÝÉ…ÁÁ•Ñ¼€À¸¹±¥À¹‘ÕÉ…Ñ¥½¸…½É‘¥¹œÑ¼±½½À($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì(($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ô€Äì($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”€ô€Äì(($%Ñ¡¥Ì¹Ý•¥¡Ð€ô€Äì($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ð€ô€Äì(($%Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ô%¹™¥¹¥Ñäì€¼¼¹¼¸½˜É•Á•Ñ¥Ñ¥½¹ÌÝ¡•¸±½½Á¥¹œ(($%Ñ¡¥Ì¹Á…ÕÍ•€ô™…±Í”ì€¼¼ÑÉÕ”€´øé•É¼•™™•Ñ¥Ù”Ñ¥µ”Í…±”($%Ñ¡¥Ì¹•¹…‰±•€ôÑÉÕ”ì€¼¼™…±Í”€´øé•É¼•™™•Ñ¥Ù”Ý•¥¡Ð(($%Ñ¡¥Ì¹±…µÁ]¡•¹¥¹¥Í¡•€ô™…±Í”ì¼¼­••À™••‘¥¹œÑ¡”±…ÍÐ™É…µ”ü(($%Ñ¡¥Ì¹é•É½M±½Á•ÑMÑ…ÉÐ€ôÑÉÕ”ì¼¼™½ÈÍµ½½Ñ ¥¹Ñ•ÉÁ½±…Ñ¥½¸Ü½¼Í•Á…É…Ñ”($%Ñ¡¥Ì¹é•É½M±½Á•Ñ¹€ôÑÉÕ”ì¼¼±¥ÁÌ™½ÈÍÑ…ÉÐ°±½½À…¹•¹((%ô(($¼¼MÑ…Ñ”€˜M¡•‘Õ±¥¹œ((%Á±…ä ¤ì(($%Ñ¡¥Ì¹}µ¥á•È¹}…Ñ¥Ù…Ñ•Ñ¥½¸ Ñ¡¥Ì€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ½À ¤ì(($%Ñ¡¥Ì¹}µ¥á•È¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ Ñ¡¥Ì€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹É•Í•Ð ¤ì((%ô((%É•Í•Ð ¤ì(($%Ñ¡¥Ì¹Á…ÕÍ•€ô™…±Í”ì($%Ñ¡¥Ì¹•¹…‰±•€ôÑÉÕ”ì(($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì€¼¼É•ÍÑ…ÉÐ±¥À($%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô€´€Äì¼¼™½É•ÐÁÉ•Ù¥½ÕÌ±½½ÁÌ($%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì¼¼™½É•ÐÍ¡•‘Õ±¥¹œ(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á…‘¥¹œ ¤¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô((%¥ÍIÕ¹¹¥¹œ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹•¹…‰±•€˜˜€„Ñ¡¥Ì¹Á…ÕÍ•€˜˜Ñ¡¥Ì¹Ñ¥µ•M…±”€„ôô€À€˜˜($$%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ôôô¹Õ±°€˜˜Ñ¡¥Ì¹}µ¥á•È¹}¥ÍÑ¥Ù•Ñ¥½¸ Ñ¡¥Ì€¤ì((%ô(($¼¼É•ÑÕÉ¸ÑÉÕ”Ý¡•¸Á±…ä¡…Ì‰••¸…±±•(%¥ÍM¡•‘Õ±• ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}µ¥á•È¹}¥ÍÑ¥Ù•Ñ¥½¸ Ñ¡¥Ì€¤ì((%ô((%ÍÑ…ÉÑÐ Ñ¥µ”€¤ì(($%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ôÑ¥µ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ1½½À µ½‘”°É•Á•Ñ¥Ñ¥½¹Ì€¤ì(($%Ñ¡¥Ì¹±½½À€ôµ½‘”ì($%Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ôÉ•Á•Ñ¥Ñ¥½¹Ìì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼]•¥¡Ð(($¼¼Í•ÐÑ¡”Ý•¥¡ÐÍÑ½ÁÁ¥¹œ…¹äÍ¡•‘Õ±•™…‘¥¹œ($¼¼…±Ñ¡½Õ €¹•¹…‰±•€ô™…±Í”å¥•±‘Ì…¸•™™•Ñ¥Ù”Ý•¥¡Ð½˜é•É¼°Ñ¡¥Ì($¼¼µ•Ñ¡½‘½•Ì€©¹½Ð¨¡…¹”€¹•¹…‰±•°‰•…ÕÍ”¥ÐÝ½Õ±‰”½¹™ÕÍ¥¹œ(%Í•Ñ™™•Ñ¥Ù•]•¥¡Ð Ý•¥¡Ð€¤ì(($%Ñ¡¥Ì¹Ý•¥¡Ð€ôÝ•¥¡Ðì(($$¼¼¹½Ñ”èÍ…µ”±½¥Œ…ÌÝ¡•¸ÕÁ‘…Ñ•…ÐÉÕ¹Ñ¥µ”($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ð€ôÑ¡¥Ì¹•¹…‰±•€üÝ•¥¡Ð€è€Àì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á…‘¥¹œ ¤ì((%ô(($¼¼É•ÑÕÉ¸Ñ¡”Ý•¥¡Ð½¹Í¥‘•É¥¹œ™…‘¥¹œ…¹€¹•¹…‰±•(%•Ñ™™•Ñ¥Ù•]•¥¡Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ðì((%ô((%™…‘•%¸ ‘ÕÉ…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Í¡•‘Õ±•…‘¥¹œ ‘ÕÉ…Ñ¥½¸°€À°€Ä€¤ì((%ô((%™…‘•=ÕÐ ‘ÕÉ…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}Í¡•‘Õ±•…‘¥¹œ ‘ÕÉ…Ñ¥½¸°€Ä°€À€¤ì((%ô((%É½ÍÍ…‘•É½´ ™…‘•=ÕÑÑ¥½¸°‘ÕÉ…Ñ¥½¸°Ý…ÉÀ€¤ì(($%™…‘•=ÕÑÑ¥½¸¹™…‘•=ÕÐ ‘ÕÉ…Ñ¥½¸€¤ì($%Ñ¡¥Ì¹™…‘•%¸ ‘ÕÉ…Ñ¥½¸€¤ì(($%¥˜€ Ý…ÉÀ€¤ì(($$%½¹ÍÐ™…‘•%¹ÕÉ…Ñ¥½¸€ôÑ¡¥Ì¹}±¥À¹‘ÕÉ…Ñ¥½¸°($$$%™…‘•=ÕÑÕÉ…Ñ¥½¸€ô™…‘•=ÕÑÑ¥½¸¹}±¥À¹‘ÕÉ…Ñ¥½¸°(($$$%ÍÑ…ÉÑ¹‘I…Ñ¥¼€ô™…‘•=ÕÑÕÉ…Ñ¥½¸€¼™…‘•%¹ÕÉ…Ñ¥½¸°($$$%•¹‘MÑ…ÉÑI…Ñ¥¼€ô™…‘•%¹ÕÉ…Ñ¥½¸€¼™…‘•=ÕÑÕÉ…Ñ¥½¸ì(($$%™…‘•=ÕÑÑ¥½¸¹Ý…ÉÀ €Ä¸À°ÍÑ…ÉÑ¹‘I…Ñ¥¼°‘ÕÉ…Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹Ý…ÉÀ •¹‘MÑ…ÉÑI…Ñ¥¼°€Ä¸À°‘ÕÉ…Ñ¥½¸€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%É½ÍÍ…‘•Q¼ ™…‘•%¹Ñ¥½¸°‘ÕÉ…Ñ¥½¸°Ý…ÉÀ€¤ì(($%É•ÑÕÉ¸™…‘•%¹Ñ¥½¸¹É½ÍÍ…‘•É½´ Ñ¡¥Ì°‘ÕÉ…Ñ¥½¸°Ý…ÉÀ€¤ì((%ô((%ÍÑ½Á…‘¥¹œ ¤ì(($%½¹ÍÐÝ•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì($$%Ñ¡¥Ì¹}µ¥á•È¹}Ñ…­•	…­½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼Q¥µ”M…±”½¹ÑÉ½°(($¼¼Í•ÐÑ¡”Ñ¥µ”Í…±”ÍÑ½ÁÁ¥¹œ…¹äÍ¡•‘Õ±•Ý…ÉÁ¥¹œ($¼¼…±Ñ¡½Õ €¹Á…ÕÍ•€ôÑÉÕ”å¥•±‘Ì…¸•™™•Ñ¥Ù”Ñ¥µ”Í…±”½˜é•É¼°Ñ¡¥Ì($¼¼µ•Ñ¡½‘½•Ì€©¹½Ð¨¡…¹”€¹Á…ÕÍ•°‰•…ÕÍ”¥ÐÝ½Õ±‰”½¹™ÕÍ¥¹œ(%Í•Ñ™™•Ñ¥Ù•Q¥µ•M…±” Ñ¥µ•M…±”€¤ì(($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ôÑ¥µ•M…±”ì($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”€ôÑ¡¥Ì¹Á…ÕÍ•€ü€À€èÑ¥µ•M…±”ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô(($¼¼É•ÑÕÉ¸Ñ¡”Ñ¥µ”Í…±”½¹Í¥‘•É¥¹œÝ…ÉÁ¥¹œ…¹€¹Á…ÕÍ•(%•Ñ™™•Ñ¥Ù•Q¥µ•M…±” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”ì((%ô((%Í•ÑÕÉ…Ñ¥½¸ ‘ÕÉ…Ñ¥½¸€¤ì(($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ôÑ¡¥Ì¹}±¥À¹‘ÕÉ…Ñ¥½¸€¼‘ÕÉ…Ñ¥½¸ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô((%Íå¹]¥Ñ  …Ñ¥½¸€¤ì(($%Ñ¡¥Ì¹Ñ¥µ”€ô…Ñ¥½¸¹Ñ¥µ”ì($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ô…Ñ¥½¸¹Ñ¥µ•M…±”ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì((%ô((%¡…±Ð ‘ÕÉ…Ñ¥½¸€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Ý…ÉÀ Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”°€À°‘ÕÉ…Ñ¥½¸€¤ì((%ô((%Ý…ÉÀ ÍÑ…ÉÑQ¥µ•M…±”°•¹‘Q¥µ•M…±”°‘ÕÉ…Ñ¥½¸€¤ì(($%½¹ÍÐµ¥á•È€ôÑ¡¥Ì¹}µ¥á•È°($$%¹½Ü€ôµ¥á•È¹Ñ¥µ”°($$%Ñ¥µ•M…±”€ôÑ¡¥Ì¹Ñ¥µ•M…±”ì(($%±•Ð¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€ôôô¹Õ±°€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð€ôµ¥á•È¹}±•¹‘½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¤ì($$%Ñ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%ô(($%½¹ÍÐÑ¥µ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°($$%Ù…±Õ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Í…µÁ±•Y…±Õ•Ìì(($%Ñ¥µ•Íl€Àt€ô¹½Üì($%Ñ¥µ•Íl€Ät€ô¹½Ü€¬‘ÕÉ…Ñ¥½¸ì(($%Ù…±Õ•Íl€Àt€ôÍÑ…ÉÑQ¥µ•M…±”€¼Ñ¥µ•M…±”ì($%Ù…±Õ•Íl€Ät€ô•¹‘Q¥µ•M…±”€¼Ñ¥µ•M…±”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÑ½Á]…ÉÁ¥¹œ ¤ì(($%½¹ÍÐÑ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€ô¹Õ±°ì($$%Ñ¡¥Ì¹}µ¥á•È¹}Ñ…­•	…­½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ð€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼=‰©•Ð•ÍÍ½ÉÌ((%•Ñ5¥á•È ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}µ¥á•Èì((%ô((%•Ñ±¥À ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}±¥Àì((%ô((%•ÑI½½Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}±½…±I½½ÐñðÑ¡¥Ì¹}µ¥á•È¹}É½½Ðì((%ô(($¼¼%¹Ñ•É¹„((%}ÕÁ‘…Ñ” Ñ¥µ”°‘•±Ñ…Q¥µ”°Ñ¥µ•¥É•Ñ¥½¸°…Õ%¹‘•à€¤ì(($$¼¼…±±•‰äÑ¡”µ¥á•È(($%¥˜€ €„Ñ¡¥Ì¹•¹…‰±•€¤ì(($$$¼¼…±°€¹}ÕÁ‘…Ñ•]•¥¡Ð ¤Ñ¼ÕÁ‘…Ñ”€¹}•™™•Ñ¥Ù•]•¥¡Ð(($$%Ñ¡¥Ì¹}ÕÁ‘…Ñ•]•¥¡Ð Ñ¥µ”€¤ì($$%É•ÑÕÉ¸ì(($%ô(($%½¹ÍÐÍÑ…ÉÑQ¥µ”€ôÑ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”ì(($%¥˜€ ÍÑ…ÉÑQ¥µ”€„ôô¹Õ±°€¤ì(($$$¼¼¡•¬™½ÈÍ¡•‘Õ±•ÍÑ…ÉÐ½˜…Ñ¥½¸(($$%½¹ÍÐÑ¥µ•IÕ¹¹¥¹œ€ô€ Ñ¥µ”€´ÍÑ…ÉÑQ¥µ”€¤€¨Ñ¥µ•¥É•Ñ¥½¸ì($$%¥˜€ Ñ¥µ•IÕ¹¹¥¹œ€ð€ÀñðÑ¥µ•¥É•Ñ¥½¸€ôôô€À€¤ì(($$$%‘•±Ñ…Q¥µ”€ô€Àì(($$%ô•±Í”ì((($$$%Ñ¡¥Ì¹}ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì€¼¼Õ¹Í¡•‘Õ±”($$$%‘•±Ñ…Q¥µ”€ôÑ¥µ•¥É•Ñ¥½¸€¨Ñ¥µ•IÕ¹¹¥¹œì(($$%ô(($%ô(($$¼¼…ÁÁ±äÑ¥µ”Í…±”…¹…‘Ù…¹”Ñ¥µ”(($%‘•±Ñ…Q¥µ”€¨ôÑ¡¥Ì¹}ÕÁ‘…Ñ•Q¥µ•M…±” Ñ¥µ”€¤ì($%½¹ÍÐ±¥ÁQ¥µ”€ôÑ¡¥Ì¹}ÕÁ‘…Ñ•Q¥µ” ‘•±Ñ…Q¥µ”€¤ì(($$¼¼¹½Ñ”è}ÕÁ‘…Ñ•Q¥µ”µ…ä‘¥Í…‰±”Ñ¡”…Ñ¥½¸É•ÍÕ±Ñ¥¹œ¥¸($$¼¼…¸•™™•Ñ¥Ù”Ý•¥¡Ð½˜€À(($%½¹ÍÐÝ•¥¡Ð€ôÑ¡¥Ì¹}ÕÁ‘…Ñ•]•¥¡Ð Ñ¥µ”€¤ì(($%¥˜€ Ý•¥¡Ð€ø€À€¤ì(($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑÌ€ôÑ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑÌì($$%½¹ÍÐÁÉ½Á•ÉÑå5¥á•ÉÌ€ôÑ¡¥Ì¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($$%ÍÝ¥Ñ € Ñ¡¥Ì¹‰±•¹‘5½‘”€¤ì(($$$%…Í”‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”è(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¥¹Ñ•ÉÁ½±…¹ÑÌ¹±•¹Ñ ì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%¥¹Ñ•ÉÁ½±…¹ÑÍl¨t¹•Ù…±Õ…Ñ” ±¥ÁQ¥µ”€¤ì($$$$$%ÁÉ½Á•ÉÑå5¥á•ÉÍl¨t¹…ÕµÕ±…Ñ•‘‘¥Ñ¥Ù” Ý•¥¡Ð€¤ì(($$$$%ô(($$$$%‰É•…¬ì(($$$%…Í”9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”è($$$%‘•™…Õ±Ðè(($$$$%™½È€ ±•Ð¨€ô€À°´€ô¥¹Ñ•ÉÁ½±…¹ÑÌ¹±•¹Ñ ì¨€„ôô´ì€¬¬¨€¤ì(($$$$$%¥¹Ñ•ÉÁ½±…¹ÑÍl¨t¹•Ù…±Õ…Ñ” ±¥ÁQ¥µ”€¤ì($$$$$%ÁÉ½Á•ÉÑå5¥á•ÉÍl¨t¹…ÕµÕ±…Ñ” …Õ%¹‘•à°Ý•¥¡Ð€¤ì(($$$$%ô(($$%ô(($%ô((%ô((%}ÕÁ‘…Ñ•]•¥¡Ð Ñ¥µ”€¤ì(($%±•ÐÝ•¥¡Ð€ô€Àì(($%¥˜€ Ñ¡¥Ì¹•¹…‰±•€¤ì(($$%Ý•¥¡Ð€ôÑ¡¥Ì¹Ý•¥¡Ðì($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ðì(($$%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”€ô¥¹Ñ•ÉÁ½±…¹Ð¹•Ù…±Õ…Ñ” Ñ¥µ”€¥l€Àtì(($$$%Ý•¥¡Ð€¨ô¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”ì(($$$%¥˜€ Ñ¥µ”€ø¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Íl€Ät€¤ì(($$$$%Ñ¡¥Ì¹ÍÑ½Á…‘¥¹œ ¤ì(($$$$%¥˜€ ¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”€ôôô€À€¤ì(($$$$$$¼¼™…‘•½ÕÐ°‘¥Í…‰±”($$$$$%Ñ¡¥Ì¹•¹…‰±•€ô™…±Í”ì(($$$$%ô(($$$%ô(($$%ô(($%ô(($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•]•¥¡Ð€ôÝ•¥¡Ðì($%É•ÑÕÉ¸Ý•¥¡Ðì((%ô((%}ÕÁ‘…Ñ•Q¥µ•M…±” Ñ¥µ”€¤ì(($%±•ÐÑ¥µ•M…±”€ô€Àì(($%¥˜€ €„Ñ¡¥Ì¹Á…ÕÍ•€¤ì(($$%Ñ¥µ•M…±”€ôÑ¡¥Ì¹Ñ¥µ•M…±”ì(($$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ñ¥µ•M…±•%¹Ñ•ÉÁ½±…¹Ðì(($$%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€„ôô¹Õ±°€¤ì(($$$%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”€ô¥¹Ñ•ÉÁ½±…¹Ð¹•Ù…±Õ…Ñ” Ñ¥µ”€¥l€Àtì(($$$%Ñ¥µ•M…±”€¨ô¥¹Ñ•ÉÁ½±…¹ÑY…±Õ”ì(($$$%¥˜€ Ñ¥µ”€ø¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Íl€Ät€¤ì(($$$$%Ñ¡¥Ì¹ÍÑ½Á]…ÉÁ¥¹œ ¤ì(($$$$%¥˜€ Ñ¥µ•M…±”€ôôô€À€¤ì(($$$$$$¼¼µ½Ñ¥½¸¡…Ì¡…±Ñ•°Á…ÕÍ”($$$$$%Ñ¡¥Ì¹Á…ÕÍ•€ôÑÉÕ”ì(($$$$%ô•±Í”ì(($$$$$$¼¼Ý…ÉÀ‘½¹”€´…ÁÁ±ä™¥¹…°Ñ¥µ”Í…±”($$$$$%Ñ¡¥Ì¹Ñ¥µ•M…±”€ôÑ¥µ•M…±”ì(($$$$%ô(($$$%ô(($$%ô(($%ô(($%Ñ¡¥Ì¹}•™™•Ñ¥Ù•Q¥µ•M…±”€ôÑ¥µ•M…±”ì($%É•ÑÕÉ¸Ñ¥µ•M…±”ì((%ô((%}ÕÁ‘…Ñ•Q¥µ” ‘•±Ñ…Q¥µ”€¤ì(($%½¹ÍÐ‘ÕÉ…Ñ¥½¸€ôÑ¡¥Ì¹}±¥À¹‘ÕÉ…Ñ¥½¸ì($%½¹ÍÐ±½½À€ôÑ¡¥Ì¹±½½Àì(($%±•ÐÑ¥µ”€ôÑ¡¥Ì¹Ñ¥µ”€¬‘•±Ñ…Q¥µ”ì($%±•Ð±½½Á½Õ¹Ð€ôÑ¡¥Ì¹}±½½Á½Õ¹Ðì(($%½¹ÍÐÁ¥¹A½¹œ€ô€ ±½½À€ôôô1½½ÁA¥¹A½¹œ€¤ì(($%¥˜€ ‘•±Ñ…Q¥µ”€ôôô€À€¤ì(($$%¥˜€ ±½½Á½Õ¹Ð€ôôô€´€Ä€¤É•ÑÕÉ¸Ñ¥µ”ì(($$%É•ÑÕÉ¸€ Á¥¹A½¹œ€˜˜€ ±½½Á½Õ¹Ð€˜€Ä€¤€ôôô€Ä€¤€ü‘ÕÉ…Ñ¥½¸€´Ñ¥µ”€èÑ¥µ”ì(($%ô(($%¥˜€ ±½½À€ôôô1½½Á=¹”€¤ì(($$%¥˜€ ±½½Á½Õ¹Ð€ôôô€´€Ä€¤ì(($$$$¼¼©ÕÍÐÍÑ…ÉÑ•(($$$%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô€Àì($$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì ÑÉÕ”°ÑÉÕ”°™…±Í”€¤ì(($$%ô(($$%¡…¹‘±•}ÍÑ½Àèì(($$$%¥˜€ Ñ¥µ”€øô‘ÕÉ…Ñ¥½¸€¤ì(($$$$%Ñ¥µ”€ô‘ÕÉ…Ñ¥½¸ì(($$$%ô•±Í”¥˜€ Ñ¥µ”€ð€À€¤ì(($$$$%Ñ¥µ”€ô€Àì(($$$%ô•±Í”ì(($$$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$$%‰É•…¬¡…¹‘±•}ÍÑ½Àì(($$$%ô(($$$%¥˜€ Ñ¡¥Ì¹±…µÁ]¡•¹¥¹¥Í¡•€¤Ñ¡¥Ì¹Á…ÕÍ•€ôÑÉÕ”ì($$$%•±Í”Ñ¡¥Ì¹•¹…‰±•€ô™…±Í”ì(($$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$%Ñ¡¥Ì¹}µ¥á•È¹‘¥ÍÁ…Ñ¡Ù•¹Ð ì($$$$%ÑåÁ”è€™¥¹¥Í¡•œ°…Ñ¥½¸èÑ¡¥Ì°($$$$%‘¥É•Ñ¥½¸è‘•±Ñ…Q¥µ”€ð€À€ü€´€Ä€è€Ä($$$%ô€¤ì(($$%ô(($%ô•±Í”ì€¼¼É•Á•Ñ¥Ñ¥Ù”I•Á•…Ð½ÈA¥¹A½¹œ(($$%¥˜€ ±½½Á½Õ¹Ð€ôôô€´€Ä€¤ì(($$$$¼¼©ÕÍÐÍÑ…ÉÑ•(($$$%¥˜€ ‘•±Ñ…Q¥µ”€øô€À€¤ì(($$$$%±½½Á½Õ¹Ð€ô€Àì(($$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì ÑÉÕ”°Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ôôô€À°Á¥¹A½¹œ€¤ì(($$$%ô•±Í”ì(($$$$$¼¼Ý¡•¸±½½Á¥¹œ¥¸É•Ù•ÉÍ”‘¥É•Ñ¥½¸°Ñ¡”¥¹¥Ñ¥…°($$$$$¼¼ÑÉ…¹Í¥Ñ¥½¸Ñ¡É½Õ é•É¼½Õ¹ÑÌ…Ì„É•Á•Ñ¥Ñ¥½¸°($$$$$¼¼Í¼±•…Ù”±½½Á½Õ¹Ð…Ð€´Ä(($$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì Ñ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€ôôô€À°ÑÉÕ”°Á¥¹A½¹œ€¤ì(($$$%ô(($$%ô(($$%¥˜€ Ñ¥µ”€øô‘ÕÉ…Ñ¥½¸ñðÑ¥µ”€ð€À€¤ì(($$$$¼¼ÝÉ…À…É½Õ¹(($$$%½¹ÍÐ±½½Á•±Ñ„€ô5…Ñ ¹™±½½È Ñ¥µ”€¼‘ÕÉ…Ñ¥½¸€¤ì€¼¼Í¥¹•($$$%Ñ¥µ”€´ô‘ÕÉ…Ñ¥½¸€¨±½½Á•±Ñ„ì(($$$%±½½Á½Õ¹Ð€¬ô5…Ñ ¹…‰Ì ±½½Á•±Ñ„€¤ì(($$$%½¹ÍÐÁ•¹‘¥¹œ€ôÑ¡¥Ì¹É•Á•Ñ¥Ñ¥½¹Ì€´±½½Á½Õ¹Ðì(($$$%¥˜€ Á•¹‘¥¹œ€ðô€À€¤ì(($$$$$¼¼¡…Ù”Ñ¼ÍÑ½À€¡ÍÝ¥Ñ ÍÑ…Ñ”°±…µÀÑ¥µ”°™¥É”•Ù•¹Ð¤(($$$$%¥˜€ Ñ¡¥Ì¹±…µÁ]¡•¹¥¹¥Í¡•€¤Ñ¡¥Ì¹Á…ÕÍ•€ôÑÉÕ”ì($$$$%•±Í”Ñ¡¥Ì¹•¹…‰±•€ô™…±Í”ì(($$$$%Ñ¥µ”€ô‘•±Ñ…Q¥µ”€ø€À€ü‘ÕÉ…Ñ¥½¸€è€Àì(($$$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$$%Ñ¡¥Ì¹}µ¥á•È¹‘¥ÍÁ…Ñ¡Ù•¹Ð ì($$$$$%ÑåÁ”è€™¥¹¥Í¡•œ°…Ñ¥½¸èÑ¡¥Ì°($$$$$%‘¥É•Ñ¥½¸è‘•±Ñ…Q¥µ”€ø€À€ü€Ä€è€´€Ä($$$$%ô€¤ì(($$$%ô•±Í”ì(($$$$$¼¼­••ÀÉÕ¹¹¥¹œ(($$$$%¥˜€ Á•¹‘¥¹œ€ôôô€Ä€¤ì(($$$$$$¼¼•¹Ñ•É¥¹œÑ¡”±…ÍÐÉ½Õ¹(($$$$$%½¹ÍÐ…ÑMÑ…ÉÐ€ô‘•±Ñ…Q¥µ”€ð€Àì($$$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì …ÑMÑ…ÉÐ°€„…ÑMÑ…ÉÐ°Á¥¹A½¹œ€¤ì(($$$$%ô•±Í”ì(($$$$$%Ñ¡¥Ì¹}Í•Ñ¹‘¥¹Ì ™…±Í”°™…±Í”°Á¥¹A½¹œ€¤ì(($$$$%ô(($$$$%Ñ¡¥Ì¹}±½½Á½Õ¹Ð€ô±½½Á½Õ¹Ðì(($$$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$$$%Ñ¡¥Ì¹}µ¥á•È¹‘¥ÍÁ…Ñ¡Ù•¹Ð ì($$$$$%ÑåÁ”è€±½½Àœ°…Ñ¥½¸èÑ¡¥Ì°±½½Á•±Ñ„è±½½Á•±Ñ„($$$$%ô€¤ì(($$$%ô(($$%ô•±Í”ì(($$$%Ñ¡¥Ì¹Ñ¥µ”€ôÑ¥µ”ì(($$%ô(($$%¥˜€ Á¥¹A½¹œ€˜˜€ ±½½Á½Õ¹Ð€˜€Ä€¤€ôôô€Ä€¤ì(($$$$¼¼¥¹Ù•ÉÐÑ¥µ”™½ÈÑ¡”€‰Á½¹œÉ½Õ¹ˆ(($$$%É•ÑÕÉ¸‘ÕÉ…Ñ¥½¸€´Ñ¥µ”ì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ¥µ”ì((%ô((%}Í•Ñ¹‘¥¹Ì …ÑMÑ…ÉÐ°…Ñ¹°Á¥¹A½¹œ€¤ì(($%½¹ÍÐÍ•ÑÑ¥¹Ì€ôÑ¡¥Ì¹}¥¹Ñ•ÉÁ½±…¹ÑM•ÑÑ¥¹Ìì(($%¥˜€ Á¥¹A½¹œ€¤ì(($$%Í•ÑÑ¥¹Ì¹•¹‘¥¹MÑ…ÉÐ€ôi•É½M±½Á•¹‘¥¹œì($$%Í•ÑÑ¥¹Ì¹•¹‘¥¹¹€ôi•É½M±½Á•¹‘¥¹œì(($%ô•±Í”ì(($$$¼¼…ÍÍÕµ¥¹œ™½È1½½Á=¹”…ÑMÑ…ÉÐ€ôô…Ñ¹€ôôÑÉÕ”(($$%¥˜€ …ÑMÑ…ÉÐ€¤ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹MÑ…ÉÐ€ôÑ¡¥Ì¹é•É½M±½Á•ÑMÑ…ÉÐ€üi•É½M±½Á•¹‘¥¹œ€èi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œì(($$%ô•±Í”ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹MÑ…ÉÐ€ô]É…ÁÉ½Õ¹‘¹‘¥¹œì(($$%ô(($$%¥˜€ …Ñ¹€¤ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹¹€ôÑ¡¥Ì¹é•É½M±½Á•Ñ¹€üi•É½M±½Á•¹‘¥¹œ€èi•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œì(($$%ô•±Í”ì(($$$%Í•ÑÑ¥¹Ì¹•¹‘¥¹¹€$€ô]É…ÁÉ½Õ¹‘¹‘¥¹œì(($$%ô(($%ô((%ô((%}Í¡•‘Õ±•…‘¥¹œ ‘ÕÉ…Ñ¥½¸°Ý•¥¡Ñ9½Ü°Ý•¥¡ÑQ¡•¸€¤ì(($%½¹ÍÐµ¥á•È€ôÑ¡¥Ì¹}µ¥á•È°¹½Ü€ôµ¥á•È¹Ñ¥µ”ì($%±•Ð¥¹Ñ•ÉÁ½±…¹Ð€ôÑ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ðì(($%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€ôôô¹Õ±°€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð€ôµ¥á•È¹}±•¹‘½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¤ì($$%Ñ¡¥Ì¹}Ý•¥¡Ñ%¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%ô(($%½¹ÍÐÑ¥µ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Á…É…µ•Ñ•ÉA½Í¥Ñ¥½¹Ì°($$%Ù…±Õ•Ì€ô¥¹Ñ•ÉÁ½±…¹Ð¹Í…µÁ±•Y…±Õ•Ìì(($%Ñ¥µ•Íl€Àt€ô¹½Üì($%Ù…±Õ•Íl€Àt€ôÝ•¥¡Ñ9½Üì($%Ñ¥µ•Íl€Ät€ô¹½Ü€¬‘ÕÉ…Ñ¥½¸ì($%Ù…±Õ•Íl€Ät€ôÝ•¥¡ÑQ¡•¸ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()½¹ÍÐ}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÍI•ÍÕ±Ñ	Õ™™•È€ô¹•Ü±½…ÐÌÉÉÉ…ä €Ä€¤ì(()±…ÍÌ¹¥µ…Ñ¥½¹5¥á•È•áÑ•¹‘ÌÙ•¹Ñ¥ÍÁ…Ñ¡•Èì((%½¹ÍÑÉÕÑ½È É½½Ð€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹}É½½Ð€ôÉ½½Ðì($%Ñ¡¥Ì¹}¥¹¥Ñ5•µ½Éå5…¹…•È ¤ì($%Ñ¡¥Ì¹}…Õ%¹‘•à€ô€Àì($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì($%Ñ¡¥Ì¹Ñ¥µ•M…±”€ô€Ä¸Àì((%ô((%}‰¥¹‘Ñ¥½¸ …Ñ¥½¸°ÁÉ½Ñ½ÑåÁ•Ñ¥½¸€¤ì(($%½¹ÍÐÉ½½Ð€ô…Ñ¥½¸¹}±½…±I½½ÐñðÑ¡¥Ì¹}É½½Ð°($$%ÑÉ…­Ì€ô…Ñ¥½¸¹}±¥À¹ÑÉ…­Ì°($$%¹QÉ…­Ì€ôÑÉ…­Ì¹±•¹Ñ °($$%‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ì°($$%¥¹Ñ•ÉÁ½±…¹ÑÌ€ô…Ñ¥½¸¹}¥¹Ñ•ÉÁ½±…¹ÑÌ°($$%É½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥°($$%‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”ì(($%±•Ð‰¥¹‘¥¹Í	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ‰¥¹‘¥¹Í	å9…µ”€ôôôÕ¹‘•™¥¹•€¤ì(($$%‰¥¹‘¥¹Í	å9…µ”€ôíôì($$%‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥t€ô‰¥¹‘¥¹Í	å9…µ”ì(($%ô(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹QÉ…­Ìì€¬¬¤€¤ì(($$%½¹ÍÐÑÉ…¬€ôÑÉ…­Íl¤t°($$$%ÑÉ…­9…µ”€ôÑÉ…¬¹¹…µ”ì(($$%±•Ð‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Í	å9…µ•lÑÉ…­9…µ”tì(($$%¥˜€ ‰¥¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$¬¬‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ðì($$$%‰¥¹‘¥¹Íl¤t€ô‰¥¹‘¥¹œì(($$%ô•±Í”ì(($$$%‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$$%¥˜€ ‰¥¹‘¥¹œ€„ôôÕ¹‘•™¥¹•€¤ì(($$$$$¼¼•á¥ÍÑ¥¹œ‰¥¹‘¥¹œ°µ…­”ÍÕÉ”Ñ¡”…¡”­¹½ÝÌ(($$$$%¥˜€ ‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ôôô¹Õ±°€¤ì(($$$$$$¬¬‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ðì($$$$$%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ°É½½ÑUÕ¥°ÑÉ…­9…µ”€¤ì(($$$$%ô(($$$$%½¹Ñ¥¹Õ”ì(($$$%ô(($$$%½¹ÍÐÁ…Ñ €ôÁÉ½Ñ½ÑåÁ•Ñ¥½¸€˜˜ÁÉ½Ñ½ÑåÁ•Ñ¥½¸¸($$$$%}ÁÉ½Á•ÉÑå	¥¹‘¥¹Íl¤t¹‰¥¹‘¥¹œ¹Á…ÉÍ•‘A…Ñ ì(($$$%‰¥¹‘¥¹œ€ô¹•ÜAÉ½Á•ÉÑå5¥á•È ($$$$%AÉ½Á•ÉÑå	¥¹‘¥¹œ¹É•…Ñ” É½½Ð°ÑÉ…­9…µ”°Á…Ñ €¤°($$$$%ÑÉ…¬¹Y…±Õ•QåÁ•9…µ”°ÑÉ…¬¹•ÑY…±Õ•M¥é” ¤€¤ì(($$$$¬¬‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ðì($$$%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ°É½½ÑUÕ¥°ÑÉ…­9…µ”€¤ì(($$$%‰¥¹‘¥¹Íl¤t€ô‰¥¹‘¥¹œì(($$%ô(($$%¥¹Ñ•ÉÁ½±…¹ÑÍl¤t¹É•ÍÕ±Ñ	Õ™™•È€ô‰¥¹‘¥¹œ¹‰Õ™™•Èì(($%ô((%ô((%}…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì(($%¥˜€ €„Ñ¡¥Ì¹}¥ÍÑ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤€¤ì(($$%¥˜€ …Ñ¥½¸¹}…¡•%¹‘•à€ôôô¹Õ±°€¤ì(($$$$¼¼Ñ¡¥Ì…Ñ¥½¸¡…Ì‰••¸™½É½ÑÑ•¸‰äÑ¡”…¡”°‰ÕÐÑ¡”ÕÍ•È($$$$¼¼…ÁÁ•…ÉÌÑ¼‰”ÍÑ¥±°ÕÍ¥¹œ¥Ð€´øÉ•‰¥¹(($$$%½¹ÍÐÉ½½ÑUÕ¥€ô€ …Ñ¥½¸¹}±½…±I½½ÐñðÑ¡¥Ì¹}É½½Ð€¤¹ÕÕ¥°($$$$%±¥ÁUÕ¥€ô…Ñ¥½¸¹}±¥À¹ÕÕ¥°($$$$%…Ñ¥½¹Í½É±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($$$%Ñ¡¥Ì¹}‰¥¹‘Ñ¥½¸ …Ñ¥½¸°($$$$%…Ñ¥½¹Í½É±¥À€˜˜…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Íl€Àt€¤ì(($$$%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸°±¥ÁUÕ¥°É½½ÑUÕ¥€¤ì(($$%ô(($$%½¹ÍÐ‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($$$¼¼¥¹É•µ•¹ÐÉ•™•É•¹”½Õ¹ÑÌ€¼Í½ÉÐ½ÕÐÍÑ…Ñ”($$%™½È€ ±•Ð¤€ô€À°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$$%¥˜€ ‰¥¹‘¥¹œ¹ÕÍ•½Õ¹Ð€¬¬€ôôô€À€¤ì(($$$$%Ñ¡¥Ì¹}±•¹‘	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì($$$$%‰¥¹‘¥¹œ¹Í…Ù•=É¥¥¹…±MÑ…Ñ” ¤ì(($$$%ô(($$%ô(($$%Ñ¡¥Ì¹}±•¹‘Ñ¥½¸ …Ñ¥½¸€¤ì(($%ô((%ô((%}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì(($%¥˜€ Ñ¡¥Ì¹}¥ÍÑ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤€¤ì(($$%½¹ÍÐ‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($$$¼¼‘•É•µ•¹ÐÉ•™•É•¹”½Õ¹ÑÌ€¼Í½ÉÐ½ÕÐÍÑ…Ñ”($$%™½È€ ±•Ð¤€ô€À°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$$%¥˜€ €´´‰¥¹‘¥¹œ¹ÕÍ•½Õ¹Ð€ôôô€À€¤ì(($$$$%‰¥¹‘¥¹œ¹É•ÍÑ½É•=É¥¥¹…±MÑ…Ñ” ¤ì($$$$%Ñ¡¥Ì¹}Ñ…­•	…­	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($$$%ô(($$%ô(($$%Ñ¡¥Ì¹}Ñ…­•	…­Ñ¥½¸ …Ñ¥½¸€¤ì(($%ô((%ô(($¼¼5•µ½Éäµ…¹…•È((%}¥¹¥Ñ5•µ½Éå5…¹…•È ¤ì(($%Ñ¡¥Ì¹}…Ñ¥½¹Ì€ômtì€¼¼€¹Ñ¥Ù•Ñ¥½¹Ìœ™½±±½Ý•‰ä¥¹…Ñ¥Ù”½¹•Ì($%Ñ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì€ô€Àì(($%Ñ¡¥Ì¹}…Ñ¥½¹Í	å±¥À€ôíôì($$¼¼¥¹Í¥‘”è($$¼¼ì($$¼¼€%­¹½Ý¹Ñ¥½¹ÌèÉÉ…äð¹¥µ…Ñ¥½¹Ñ¥½¸€ø€´ÕÍ•…ÌÁÉ½Ñ½ÑåÁ•Ì($$¼¼€%…Ñ¥½¹	åI½½Ðè¹¥µ…Ñ¥½¹Ñ¥½¸€´±½½­ÕÀ($$¼¼ô((($%Ñ¡¥Ì¹}‰¥¹‘¥¹Ì€ômtì€¼¼€¹Ñ¥Ù•	¥¹‘¥¹Ìœ™½±±½Ý•‰ä¥¹…Ñ¥Ù”½¹•Ì($%Ñ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ì€ô€Àì(($%Ñ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”€ôíôì€¼¼¥¹Í¥‘”è5…Àð¹…µ”°AÉ½Á•ÉÑå5¥á•È€ø((($%Ñ¡¥Ì¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ€ômtì€¼¼Í…µ”…µ”…Ì…‰½Ù”($%Ñ¡¥Ì¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ€ô€Àì(($%½¹ÍÐÍ½Á”€ôÑ¡¥Ìì(($%Ñ¡¥Ì¹ÍÑ…ÑÌ€ôì(($$%…Ñ¥½¹Ìèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}…Ñ¥½¹Ì¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}¹Ñ¥Ù•Ñ¥½¹Ìì(($$$%ô($$%ô°($$%‰¥¹‘¥¹Ìèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}‰¥¹‘¥¹Ì¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}¹Ñ¥Ù•	¥¹‘¥¹Ìì(($$$%ô($$%ô°($$%½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌèì($$$%•ÐÑ½Ñ…° ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ¹±•¹Ñ ì(($$$%ô°($$$%•Ð¥¹UÍ” ¤ì(($$$$%É•ÑÕÉ¸Í½Á”¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌì(($$$%ô($$%ô(($%ôì((%ô(($¼¼5•µ½Éäµ…¹…•µ•¹Ð™½È¹¥µ…Ñ¥½¹Ñ¥½¸½‰©•ÑÌ((%}¥ÍÑ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($%½¹ÍÐ¥¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•àì($%É•ÑÕÉ¸¥¹‘•à€„ôô¹Õ±°€˜˜¥¹‘•à€ðÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ìì((%ô((%}…‘‘%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸°±¥ÁUÕ¥°É½½ÑUÕ¥€¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Àì(($%±•Ð…Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%¥˜€ …Ñ¥½¹Í½É±¥À€ôôôÕ¹‘•™¥¹•€¤ì(($$%…Ñ¥½¹Í½É±¥À€ôì(($$$%­¹½Ý¹Ñ¥½¹Ìèl…Ñ¥½¸t°($$$%…Ñ¥½¹	åI½½Ðèíô(($$%ôì(($$%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô€Àì(($$%…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥t€ô…Ñ¥½¹Í½É±¥Àì(($%ô•±Í”ì(($$%½¹ÍÐ­¹½Ý¹Ñ¥½¹Ì€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Ìì(($$%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô­¹½Ý¹Ñ¥½¹Ì¹±•¹Ñ ì($$%­¹½Ý¹Ñ¥½¹Ì¹ÁÕÍ  …Ñ¥½¸€¤ì(($%ô(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô…Ñ¥½¹Ì¹±•¹Ñ ì($%…Ñ¥½¹Ì¹ÁÕÍ  …Ñ¥½¸€¤ì(($%…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥t€ô…Ñ¥½¸ì((%ô((%}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl…Ñ¥½¹Ì¹±•¹Ñ €´€Ät°($$%…¡•%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•àì(($%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ô…¡•%¹‘•àì($%…Ñ¥½¹Íl…¡•%¹‘•àt€ô±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸ì($%…Ñ¥½¹Ì¹Á½À ¤ì(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô¹Õ±°ì((($%½¹ÍÐ±¥ÁUÕ¥€ô…Ñ¥½¸¹}±¥À¹ÕÕ¥°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥À°($$%…Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥t°($$%­¹½Ý¹Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Ì°(($$%±…ÍÑ-¹½Ý¹Ñ¥½¸€ô($$$%­¹½Ý¹Ñ¥½¹Í½É±¥Ál­¹½Ý¹Ñ¥½¹Í½É±¥À¹±•¹Ñ €´€Ät°(($$%‰å±¥Á…¡•%¹‘•à€ô…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•àì(($%±…ÍÑ-¹½Ý¹Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô‰å±¥Á…¡•%¹‘•àì($%­¹½Ý¹Ñ¥½¹Í½É±¥Ál‰å±¥Á…¡•%¹‘•àt€ô±…ÍÑ-¹½Ý¹Ñ¥½¸ì($%­¹½Ý¹Ñ¥½¹Í½É±¥À¹Á½À ¤ì(($%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô¹Õ±°ì((($%½¹ÍÐ…Ñ¥½¹	åI½½Ð€ô…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½Ð°($$%É½½ÑUÕ¥€ô€ …Ñ¥½¸¹}±½…±I½½ÐñðÑ¡¥Ì¹}É½½Ð€¤¹ÕÕ¥ì(($%‘•±•Ñ”…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ­¹½Ý¹Ñ¥½¹Í½É±¥À¹±•¹Ñ €ôôô€À€¤ì(($$%‘•±•Ñ”…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%ô(($%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹Í½ÉÑ¥½¸ …Ñ¥½¸€¤ì((%ô((%}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹Í½ÉÑ¥½¸ …Ñ¥½¸€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ô…Ñ¥½¸¹}ÁÉ½Á•ÉÑå	¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ô€À°¸€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl¤tì(($$%¥˜€ €´´‰¥¹‘¥¹œ¹É•™•É•¹•½Õ¹Ð€ôôô€À€¤ì(($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($$%ô(($%ô((%ô((%}±•¹‘Ñ¥½¸ …Ñ¥½¸€¤ì(($$¼¼l…Ñ¥Ù”…Ñ¥½¹Ìð€¥¹…Ñ¥Ù”…Ñ¥½¹Ì€t($$¼¼l€…Ñ¥Ù”…Ñ¥½¹Ì€ùð¥¹…Ñ¥Ù”…Ñ¥½¹Ìt($$¼¼€€€€€€€€€€€€€€€€Ì€€€€€€€„($$¼¼€€€€€€€€€€€€€€€€€€ðµÍÝ…À´ø($$¼¼€€€€€€€€€€€€€€€€„€€€€€€€Ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%ÁÉ•Ù%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•à°(($$%±…ÍÑÑ¥Ù•%¹‘•à€ôÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì€¬¬°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl±…ÍÑÑ¥Ù•%¹‘•àtì(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô±…ÍÑÑ¥Ù•%¹‘•àì($%…Ñ¥½¹Íl±…ÍÑÑ¥Ù•%¹‘•àt€ô…Ñ¥½¸ì(($%™¥ÉÍÑ%¹…Ñ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%…Ñ¥½¹ÍlÁÉ•Ù%¹‘•àt€ô™¥ÉÍÑ%¹…Ñ¥Ù•Ñ¥½¸ì((%ô((%}Ñ…­•	…­Ñ¥½¸ …Ñ¥½¸€¤ì(($$¼¼l€…Ñ¥Ù”…Ñ¥½¹Ì€ð¥¹…Ñ¥Ù”…Ñ¥½¹Ìt($$¼¼l…Ñ¥Ù”…Ñ¥½¹Ìðð¥¹…Ñ¥Ù”…Ñ¥½¹Ì€t($$¼¼€€€€€€€„€€€€€€€Ì($$¼¼€€€€€€€€€ðµÍÝ…À´ø($$¼¼€€€€€€€Ì€€€€€€€„(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%ÁÉ•Ù%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•à°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•à€ô€´´Ñ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì°(($$%±…ÍÑÑ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àtì(($%…Ñ¥½¸¹}…¡•%¹‘•à€ô™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àì($%…Ñ¥½¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àt€ô…Ñ¥½¸ì(($%±…ÍÑÑ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%…Ñ¥½¹ÍlÁÉ•Ù%¹‘•àt€ô±…ÍÑÑ¥Ù•Ñ¥½¸ì((%ô(($¼¼5•µ½Éäµ…¹…•µ•¹Ð™½ÈAÉ½Á•ÉÑå5¥á•È½‰©•ÑÌ((%}…‘‘%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ°É½½ÑUÕ¥°ÑÉ…­9…µ”€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”°($$%‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ìì(($%±•Ð‰¥¹‘¥¹	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ‰¥¹‘¥¹	å9…µ”€ôôôÕ¹‘•™¥¹•€¤ì(($$%‰¥¹‘¥¹	å9…µ”€ôíôì($$%‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥t€ô‰¥¹‘¥¹	å9…µ”ì(($%ô(($%‰¥¹‘¥¹	å9…µ•lÑÉ…­9…µ”t€ô‰¥¹‘¥¹œì(($%‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ô‰¥¹‘¥¹Ì¹±•¹Ñ ì($%‰¥¹‘¥¹Ì¹ÁÕÍ  ‰¥¹‘¥¹œ€¤ì((%ô((%}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%ÁÉ½Á	¥¹‘¥¹œ€ô‰¥¹‘¥¹œ¹‰¥¹‘¥¹œ°($$%É½½ÑUÕ¥€ôÁÉ½Á	¥¹‘¥¹œ¹É½½Ñ9½‘”¹ÕÕ¥°($$%ÑÉ…­9…µ”€ôÁÉ½Á	¥¹‘¥¹œ¹Á…Ñ °($$%‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”°($$%‰¥¹‘¥¹	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥t°(($$%±…ÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl‰¥¹‘¥¹Ì¹±•¹Ñ €´€Ät°($$%…¡•%¹‘•à€ô‰¥¹‘¥¹œ¹}…¡•%¹‘•àì(($%±…ÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ¹}…¡•%¹‘•à€ô…¡•%¹‘•àì($%‰¥¹‘¥¹Íl…¡•%¹‘•àt€ô±…ÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œì($%‰¥¹‘¥¹Ì¹Á½À ¤ì(($%‘•±•Ñ”‰¥¹‘¥¹	å9…µ•lÑÉ…­9…µ”tì(($%¥˜€ =‰©•Ð¹­•åÌ ‰¥¹‘¥¹	å9…µ”€¤¹±•¹Ñ €ôôô€À€¤ì(($$%‘•±•Ñ”‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%ô((%ô((%}±•¹‘	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%ÁÉ•Ù%¹‘•à€ô‰¥¹‘¥¹œ¹}…¡•%¹‘•à°(($$%±…ÍÑÑ¥Ù•%¹‘•à€ôÑ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ì€¬¬°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl±…ÍÑÑ¥Ù•%¹‘•àtì(($%‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ô±…ÍÑÑ¥Ù•%¹‘•àì($%‰¥¹‘¥¹Íl±…ÍÑÑ¥Ù•%¹‘•àt€ô‰¥¹‘¥¹œì(($%™¥ÉÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œ¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%‰¥¹‘¥¹ÍlÁÉ•Ù%¹‘•àt€ô™¥ÉÍÑ%¹…Ñ¥Ù•	¥¹‘¥¹œì((%ô((%}Ñ…­•	…­	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%ÁÉ•Ù%¹‘•à€ô‰¥¹‘¥¹œ¹}…¡•%¹‘•à°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•à€ô€´´Ñ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ì°(($$%±…ÍÑÑ¥Ù•	¥¹‘¥¹œ€ô‰¥¹‘¥¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àtì(($%‰¥¹‘¥¹œ¹}…¡•%¹‘•à€ô™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àì($%‰¥¹‘¥¹Íl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àt€ô‰¥¹‘¥¹œì(($%±…ÍÑÑ¥Ù•	¥¹‘¥¹œ¹}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%‰¥¹‘¥¹ÍlÁÉ•Ù%¹‘•àt€ô±…ÍÑÑ¥Ù•	¥¹‘¥¹œì((%ô((($¼¼5•µ½Éäµ…¹…•µ•¹Ð½˜%¹Ñ•ÉÁ½±…¹ÑÌ™½ÈÝ•¥¡Ð…¹Ñ¥µ”Í…±”((%}±•¹‘½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¤ì(($%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑÌ€ôÑ¡¥Ì¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ°($$%±…ÍÑÑ¥Ù•%¹‘•à€ôÑ¡¥Ì¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ€¬¬ì(($%±•Ð¥¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹ÑÍl±…ÍÑÑ¥Ù•%¹‘•àtì(($%¥˜€ ¥¹Ñ•ÉÁ½±…¹Ð€ôôôÕ¹‘•™¥¹•€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð€ô¹•Ü1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð ($$$%¹•Ü±½…ÐÌÉÉÉ…ä €È€¤°¹•Ü±½…ÐÌÉÉÉ…ä €È€¤°($$$$Ä°}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÍI•ÍÕ±Ñ	Õ™™•È€¤ì(($$%¥¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à€ô±…ÍÑÑ¥Ù•%¹‘•àì($$%¥¹Ñ•ÉÁ½±…¹ÑÍl±…ÍÑÑ¥Ù•%¹‘•àt€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%ô(($%É•ÑÕÉ¸¥¹Ñ•ÉÁ½±…¹Ðì((%ô((%}Ñ…­•	…­½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹Ð ¥¹Ñ•ÉÁ½±…¹Ð€¤ì(($%½¹ÍÐ¥¹Ñ•ÉÁ½±…¹ÑÌ€ôÑ¡¥Ì¹}½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ°($$%ÁÉ•Ù%¹‘•à€ô¥¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à°(($$%™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•à€ô€´´Ñ¡¥Ì¹}¹Ñ¥Ù•½¹ÑÉ½±%¹Ñ•ÉÁ½±…¹ÑÌ°(($$%±…ÍÑÑ¥Ù•%¹Ñ•ÉÁ½±…¹Ð€ô¥¹Ñ•ÉÁ½±…¹ÑÍl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àtì(($%¥¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à€ô™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àì($%¥¹Ñ•ÉÁ½±…¹ÑÍl™¥ÉÍÑ%¹…Ñ¥Ù•%¹‘•àt€ô¥¹Ñ•ÉÁ½±…¹Ðì(($%±…ÍÑÑ¥Ù•%¹Ñ•ÉÁ½±…¹Ð¹}}…¡•%¹‘•à€ôÁÉ•Ù%¹‘•àì($%¥¹Ñ•ÉÁ½±…¹ÑÍlÁÉ•Ù%¹‘•àt€ô±…ÍÑÑ¥Ù•%¹Ñ•ÉÁ½±…¹Ðì((%ô(($¼¼É•ÑÕÉ¸…¸…Ñ¥½¸™½È„±¥À½ÁÑ¥½¹…±±äÕÍ¥¹œ„ÕÍÑ½´É½½ÐÑ…É•Ð($¼¼½‰©•Ð€¡Ñ¡¥Ìµ•Ñ¡½…±±½…Ñ•Ì„±½Ð½˜‘å¹…µ¥Œµ•µ½Éä¥¸…Í”„($¼¼ÁÉ•Ù¥½ÕÍ±äÕ¹­¹½Ý¸±¥À½É½½Ð½µ‰¥¹…Ñ¥½¸¥ÌÍÁ•¥™¥•¤(%±¥ÁÑ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð°‰±•¹‘5½‘”€¤ì(($%½¹ÍÐÉ½½Ð€ô½ÁÑ¥½¹…±I½½ÐñðÑ¡¥Ì¹}É½½Ð°($$%É½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥ì(($%±•Ð±¥Á=‰©•Ð€ôÑåÁ•½˜±¥À€ôôô€ÍÑÉ¥¹œœ€ü¹¥µ…Ñ¥½¹±¥À¹™¥¹‘	å9…µ” É½½Ð°±¥À€¤€è±¥Àì(($%½¹ÍÐ±¥ÁUÕ¥€ô±¥Á=‰©•Ð€„ôô¹Õ±°€ü±¥Á=‰©•Ð¹ÕÕ¥€è±¥Àì(($%½¹ÍÐ…Ñ¥½¹Í½É±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì($%±•ÐÁÉ½Ñ½ÑåÁ•Ñ¥½¸€ô¹Õ±°ì(($%¥˜€ ‰±•¹‘5½‘”€ôôôÕ¹‘•™¥¹•€¤ì(($$%¥˜€ ±¥Á=‰©•Ð€„ôô¹Õ±°€¤ì(($$$%‰±•¹‘5½‘”€ô±¥Á=‰©•Ð¹‰±•¹‘5½‘”ì(($$%ô•±Í”ì(($$$%‰±•¹‘5½‘”€ô9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”ì(($$%ô(($%ô(($%¥˜€ …Ñ¥½¹Í½É±¥À€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹ÍÐ•á¥ÍÑ¥¹Ñ¥½¸€ô…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tì(($$%¥˜€ •á¥ÍÑ¥¹Ñ¥½¸€„ôôÕ¹‘•™¥¹•€˜˜•á¥ÍÑ¥¹Ñ¥½¸¹‰±•¹‘5½‘”€ôôô‰±•¹‘5½‘”€¤ì(($$$%É•ÑÕÉ¸•á¥ÍÑ¥¹Ñ¥½¸ì(($$%ô(($$$¼¼Ý”­¹½ÜÑ¡”±¥À°Í¼Ý”‘½¸Ð¡…Ù”Ñ¼Á…ÉÍ”…±°($$$¼¼Ñ¡”‰¥¹‘¥¹Ì……¥¸‰ÕÐ…¸©ÕÍÐ½Áä($$%ÁÉ½Ñ½ÑåÁ•Ñ¥½¸€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Íl€Àtì(($$$¼¼…±Í¼°Ñ…­”Ñ¡”±¥À™É½´Ñ¡”ÁÉ½Ñ½ÑåÁ”…Ñ¥½¸($$%¥˜€ ±¥Á=‰©•Ð€ôôô¹Õ±°€¤($$$%±¥Á=‰©•Ð€ôÁÉ½Ñ½ÑåÁ•Ñ¥½¸¹}±¥Àì(($%ô(($$¼¼±¥ÀµÕÍÐ‰”­¹½Ý¸Ý¡•¸ÍÁ•¥™¥•Ù¥„ÍÑÉ¥¹œ($%¥˜€ ±¥Á=‰©•Ð€ôôô¹Õ±°€¤É•ÑÕÉ¸¹Õ±°ì(($$¼¼…±±½…Ñ”…±°É•Í½ÕÉ•ÌÉ•ÅÕ¥É•Ñ¼ÉÕ¸¥Ð($%½¹ÍÐ¹•ÝÑ¥½¸€ô¹•Ü¹¥µ…Ñ¥½¹Ñ¥½¸ Ñ¡¥Ì°±¥Á=‰©•Ð°½ÁÑ¥½¹…±I½½Ð°‰±•¹‘5½‘”€¤ì(($%Ñ¡¥Ì¹}‰¥¹‘Ñ¥½¸ ¹•ÝÑ¥½¸°ÁÉ½Ñ½ÑåÁ•Ñ¥½¸€¤ì(($$¼¼…¹µ…­”Ñ¡”…Ñ¥½¸­¹½Ý¸Ñ¼Ñ¡”µ•µ½Éäµ…¹…•È($%Ñ¡¥Ì¹}…‘‘%¹…Ñ¥Ù•Ñ¥½¸ ¹•ÝÑ¥½¸°±¥ÁUÕ¥°É½½ÑUÕ¥€¤ì(($%É•ÑÕÉ¸¹•ÝÑ¥½¸ì((%ô(($¼¼•Ð…¸•á¥ÍÑ¥¹œ…Ñ¥½¸(%•á¥ÍÑ¥¹Ñ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð€¤ì(($%½¹ÍÐÉ½½Ð€ô½ÁÑ¥½¹…±I½½ÐñðÑ¡¥Ì¹}É½½Ð°($$%É½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥°(($$%±¥Á=‰©•Ð€ôÑåÁ•½˜±¥À€ôôô€ÍÑÉ¥¹œœ€ü($$$%¹¥µ…Ñ¥½¹±¥À¹™¥¹‘	å9…µ” É½½Ð°±¥À€¤€è±¥À°(($$%±¥ÁUÕ¥€ô±¥Á=‰©•Ð€ü±¥Á=‰©•Ð¹ÕÕ¥€è±¥À°(($$%…Ñ¥½¹Í½É±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%¥˜€ …Ñ¥½¹Í½É±¥À€„ôôÕ¹‘•™¥¹•€¤ì(($$%É•ÑÕÉ¸…Ñ¥½¹Í½É±¥À¹…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tñð¹Õ±°ì(($%ô(($%É•ÑÕÉ¸¹Õ±°ì((%ô(($¼¼‘•…Ñ¥Ù…Ñ•Ì…±°ÁÉ•Ù¥½ÕÍ±äÍ¡•‘Õ±•…Ñ¥½¹Ì(%ÍÑ½Á±±Ñ¥½¸ ¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%¹Ñ¥½¹Ì€ôÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ìì(($%™½È€ ±•Ð¤€ô¹Ñ¥½¹Ì€´€Äì¤€øô€Àì€´´¤€¤ì(($$%…Ñ¥½¹Íl¤t¹ÍÑ½À ¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼…‘Ù…¹”Ñ¡”Ñ¥µ”…¹ÕÁ‘…Ñ”…ÁÁ±äÑ¡”…¹¥µ…Ñ¥½¸(%ÕÁ‘…Ñ” ‘•±Ñ…Q¥µ”€¤ì(($%‘•±Ñ…Q¥µ”€¨ôÑ¡¥Ì¹Ñ¥µ•M…±”ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%¹Ñ¥½¹Ì€ôÑ¡¥Ì¹}¹Ñ¥Ù•Ñ¥½¹Ì°(($$%Ñ¥µ”€ôÑ¡¥Ì¹Ñ¥µ”€¬ô‘•±Ñ…Q¥µ”°($$%Ñ¥µ•¥É•Ñ¥½¸€ô5…Ñ ¹Í¥¸ ‘•±Ñ…Q¥µ”€¤°(($$%…Õ%¹‘•à€ôÑ¡¥Ì¹}…Õ%¹‘•àxô€Äì(($$¼¼ÉÕ¸…Ñ¥Ù”…Ñ¥½¹Ì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹Ñ¥½¹Ìì€¬¬¤€¤ì(($$%½¹ÍÐ…Ñ¥½¸€ô…Ñ¥½¹Íl¤tì(($$%…Ñ¥½¸¹}ÕÁ‘…Ñ” Ñ¥µ”°‘•±Ñ…Q¥µ”°Ñ¥µ•¥É•Ñ¥½¸°…Õ%¹‘•à€¤ì(($%ô(($$¼¼ÕÁ‘…Ñ”Í•¹”É…Á (($%½¹ÍÐ‰¥¹‘¥¹Ì€ôÑ¡¥Ì¹}‰¥¹‘¥¹Ì°($$%¹	¥¹‘¥¹Ì€ôÑ¡¥Ì¹}¹Ñ¥Ù•	¥¹‘¥¹Ìì(($%™½È€ ±•Ð¤€ô€Àì¤€„ôô¹	¥¹‘¥¹Ìì€¬¬¤€¤ì(($$%‰¥¹‘¥¹Íl¤t¹…ÁÁ±ä …Õ%¹‘•à€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼±±½ÝÌå½ÔÑ¼Í••¬Ñ¼„ÍÁ•¥™¥ŒÑ¥µ”¥¸…¸…¹¥µ…Ñ¥½¸¸(%Í•ÑQ¥µ” Ñ¥µ•%¹M•½¹‘Ì€¤ì(($%Ñ¡¥Ì¹Ñ¥µ”€ô€Àì€¼¼i•É¼½ÕÐÑ¥µ”…ÑÑÉ¥‰ÕÑ”™½È¹¥µ…Ñ¥½¹5¥á•È½‰©•Ðì($%™½È€ ±•Ð¤€ô€Àì¤€ðÑ¡¥Ì¹}…Ñ¥½¹Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹}…Ñ¥½¹Íl¤t¹Ñ¥µ”€ô€Àì€¼¼i•É¼½ÕÐÑ¥µ”…ÑÑÉ¥‰ÕÑ”™½È…±°…ÍÍ½¥…Ñ•¹¥µ…Ñ¥½¹Ñ¥½¸½‰©•ÑÌ¸(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÕÁ‘…Ñ” Ñ¥µ•%¹M•½¹‘Ì€¤ì€¼¼UÁ‘…Ñ”ÕÍ•Ñ¼Í•Ð•á…ÐÑ¥µ”¸I•ÑÕÉ¹Ì€‰Ñ¡¥Ìˆ¹¥µ…Ñ¥½¹5¥á•È½‰©•Ð¸((%ô(($¼¼É•ÑÕÉ¸Ñ¡¥Ìµ¥á•ÈÌÉ½½ÐÑ…É•Ð½‰©•Ð(%•ÑI½½Ð ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹}É½½Ðì((%ô(($¼¼™É•”…±°É•Í½ÕÉ•ÌÍÁ•¥™¥ŒÑ¼„Á…ÉÑ¥Õ±…È±¥À(%Õ¹…¡•±¥À ±¥À€¤ì(($%½¹ÍÐ…Ñ¥½¹Ì€ôÑ¡¥Ì¹}…Ñ¥½¹Ì°($$%±¥ÁUÕ¥€ô±¥À¹ÕÕ¥°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥À°($$%…Ñ¥½¹Í½É±¥À€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%¥˜€ …Ñ¥½¹Í½É±¥À€„ôôÕ¹‘•™¥¹•€¤ì(($$$¼¼¹½Ñ”è©ÕÍÐ…±±¥¹œ}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸Ý½Õ±µ•ÍÌÕÀÑ¡”($$$¼¼¥Ñ•É…Ñ¥½¸ÍÑ…Ñ”…¹…±Í¼É•ÅÕ¥É”ÕÁ‘…Ñ¥¹œÑ¡”ÍÑ…Ñ”Ý”…¸($$$¼¼©ÕÍÐÑ¡É½Ü…Ý…ä(($$%½¹ÍÐ…Ñ¥½¹ÍQ½I•µ½Ù”€ô…Ñ¥½¹Í½É±¥À¹­¹½Ý¹Ñ¥½¹Ìì(($$%™½È€ ±•Ð¤€ô€À°¸€ô…Ñ¥½¹ÍQ½I•µ½Ù”¹±•¹Ñ ì¤€„ôô¸ì€¬¬¤€¤ì(($$$%½¹ÍÐ…Ñ¥½¸€ô…Ñ¥½¹ÍQ½I•µ½Ù•l¤tì(($$$%Ñ¡¥Ì¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì(($$$%½¹ÍÐ…¡•%¹‘•à€ô…Ñ¥½¸¹}…¡•%¹‘•à°($$$$%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸€ô…Ñ¥½¹Íl…Ñ¥½¹Ì¹±•¹Ñ €´€Ätì(($$$%…Ñ¥½¸¹}…¡•%¹‘•à€ô¹Õ±°ì($$$%…Ñ¥½¸¹}‰å±¥Á…¡•%¹‘•à€ô¹Õ±°ì(($$$%±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸¹}…¡•%¹‘•à€ô…¡•%¹‘•àì($$$%…Ñ¥½¹Íl…¡•%¹‘•àt€ô±…ÍÑ%¹…Ñ¥Ù•Ñ¥½¸ì($$$%…Ñ¥½¹Ì¹Á½À ¤ì(($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹Í½ÉÑ¥½¸ …Ñ¥½¸€¤ì(($$%ô(($$%‘•±•Ñ”…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥tì(($%ô((%ô(($¼¼™É•”…±°É•Í½ÕÉ•ÌÍÁ•¥™¥ŒÑ¼„Á…ÉÑ¥Õ±…ÈÉ½½ÐÑ…É•Ð½‰©•Ð(%Õ¹…¡•I½½Ð É½½Ð€¤ì(($%½¹ÍÐÉ½½ÑUÕ¥€ôÉ½½Ð¹ÕÕ¥°($$%…Ñ¥½¹Í	å±¥À€ôÑ¡¥Ì¹}…Ñ¥½¹Í	å±¥Àì(($%™½È€ ½¹ÍÐ±¥ÁUÕ¥¥¸…Ñ¥½¹Í	å±¥À€¤ì(($$%½¹ÍÐ…Ñ¥½¹	åI½½Ð€ô…Ñ¥½¹Í	å±¥Ál±¥ÁUÕ¥t¹…Ñ¥½¹	åI½½Ð°($$$%…Ñ¥½¸€ô…Ñ¥½¹	åI½½ÑlÉ½½ÑUÕ¥tì(($$%¥˜€ …Ñ¥½¸€„ôôÕ¹‘•™¥¹•€¤ì(($$$%Ñ¡¥Ì¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($$%ô(($%ô(($%½¹ÍÐ‰¥¹‘¥¹Í	åI½½Ð€ôÑ¡¥Ì¹}‰¥¹‘¥¹Í	åI½½Ñ¹‘9…µ”°($$%‰¥¹‘¥¹	å9…µ”€ô‰¥¹‘¥¹Í	åI½½ÑlÉ½½ÑUÕ¥tì(($%¥˜€ ‰¥¹‘¥¹	å9…µ”€„ôôÕ¹‘•™¥¹•€¤ì(($$%™½È€ ½¹ÍÐÑÉ…­9…µ”¥¸‰¥¹‘¥¹	å9…µ”€¤ì(($$$%½¹ÍÐ‰¥¹‘¥¹œ€ô‰¥¹‘¥¹	å9…µ•lÑÉ…­9…µ”tì($$$%‰¥¹‘¥¹œ¹É•ÍÑ½É•=É¥¥¹…±MÑ…Ñ” ¤ì($$$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•	¥¹‘¥¹œ ‰¥¹‘¥¹œ€¤ì(($$%ô(($%ô((%ô(($¼¼É•µ½Ù”„Ñ…É•Ñ•±¥À™É½´Ñ¡”…¡”(%Õ¹…¡•Ñ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð€¤ì(($%½¹ÍÐ…Ñ¥½¸€ôÑ¡¥Ì¹•á¥ÍÑ¥¹Ñ¥½¸ ±¥À°½ÁÑ¥½¹…±I½½Ð€¤ì(($%¥˜€ …Ñ¥½¸€„ôô¹Õ±°€¤ì(($$%Ñ¡¥Ì¹}‘•…Ñ¥Ù…Ñ•Ñ¥½¸ …Ñ¥½¸€¤ì($$%Ñ¡¥Ì¹}É•µ½Ù•%¹…Ñ¥Ù•Ñ¥½¸ …Ñ¥½¸€¤ì(($%ô((%ô()ô()±…ÍÌU¹¥™½É´ì((%½¹ÍÑÉÕÑ½È Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹Ù…±Õ”€ôÙ…±Õ”ì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜU¹¥™½É´ Ñ¡¥Ì¹Ù…±Õ”¹±½¹”€ôôôÕ¹‘•™¥¹•€üÑ¡¥Ì¹Ù…±Õ”€èÑ¡¥Ì¹Ù…±Õ”¹±½¹” ¤€¤ì((%ô()ô()±•Ð}¥€ô€Àì()±…ÍÌU¹¥™½ÉµÍÉ½ÕÀ•áÑ•¹‘ÌÙ•¹Ñ¥ÍÁ…Ñ¡•Èì((%½¹ÍÑÉÕÑ½È ¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹¥ÍU¹¥™½ÉµÍÉ½ÕÀ€ôÑÉÕ”ì(($%=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä Ñ¡¥Ì°€¥œ°ìÙ…±Õ”è}¥€¬¬ô€¤ì(($%Ñ¡¥Ì¹¹…µ”€ô€œœì(($%Ñ¡¥Ì¹ÕÍ…”€ôMÑ…Ñ¥É…ÝUÍ…”ì($%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ€ômtì((%ô((%…‘ Õ¹¥™½É´€¤ì(($%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹ÁÕÍ  Õ¹¥™½É´€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%É•µ½Ù” Õ¹¥™½É´€¤ì(($%½¹ÍÐ¥¹‘•à€ôÑ¡¥Ì¹Õ¹¥™½ÉµÌ¹¥¹‘•á=˜ Õ¹¥™½É´€¤ì(($%¥˜€ ¥¹‘•à€„ôô€´€Ä€¤Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹ÍÁ±¥” ¥¹‘•à°€Ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ9…µ” ¹…µ”€¤ì(($%Ñ¡¥Ì¹¹…µ”€ô¹…µ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑUÍ…” Ù…±Õ”€¤ì(($%Ñ¡¥Ì¹ÕÍ…”€ôÙ…±Õ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹‘¥ÍÁ…Ñ¡Ù•¹Ð ìÑåÁ”è€‘¥ÍÁ½Í”œô€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹¹…µ”€ôÍ½ÕÉ”¹¹…µ”ì($%Ñ¡¥Ì¹ÕÍ…”€ôÍ½ÕÉ”¹ÕÍ…”ì(($%½¹ÍÐÕ¹¥™½ÉµÍM½ÕÉ”€ôÍ½ÕÉ”¹Õ¹¥™½ÉµÌì(($%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹±•¹Ñ €ô€Àì(($%™½È€ ±•Ð¤€ô€À°°€ôÕ¹¥™½ÉµÍM½ÕÉ”¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%½¹ÍÐÕ¹¥™½ÉµÌ€ôÉÉ…ä¹¥ÍÉÉ…ä Õ¹¥™½ÉµÍM½ÕÉ•l¤t€¤€üÕ¹¥™½ÉµÍM½ÕÉ•l¤t€èlÕ¹¥™½ÉµÍM½ÕÉ•l¤ttì(($$%™½È€ ±•Ð¨€ô€Àì¨€ðÕ¹¥™½ÉµÌ¹±•¹Ñ ì¨€¬¬€¤ì(($$$%Ñ¡¥Ì¹Õ¹¥™½ÉµÌ¹ÁÕÍ  Õ¹¥™½ÉµÍl¨t¹±½¹” ¤€¤ì(($$%ô(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô()±…ÍÌ%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È•áÑ•¹‘Ì%¹Ñ•É±•…Ù•‘	Õ™™•Èì((%½¹ÍÑÉÕÑ½È …ÉÉ…ä°ÍÑÉ¥‘”°µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ô€Ä€¤ì(($%ÍÕÁ•È …ÉÉ…ä°ÍÑÉ¥‘”€¤ì(($%Ñ¡¥Ì¹¥Í%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È€ôÑÉÕ”ì(($%Ñ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôµ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”€¤ì(($%Ñ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôÍ½ÕÉ”¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ‘…Ñ„€¤ì(($%½¹ÍÐ¥ˆ€ôÍÕÁ•È¹±½¹” ‘…Ñ„€¤ì(($%¥ˆ¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôÑ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì(($%É•ÑÕÉ¸¥ˆì((%ô((%Ñ½)M=8 ‘…Ñ„€¤ì(($%½¹ÍÐ©Í½¸€ôÍÕÁ•È¹Ñ½)M=8 ‘…Ñ„€¤ì(($%©Í½¸¹¥Í%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È€ôÑÉÕ”ì($%©Í½¸¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”€ôÑ¡¥Ì¹µ•Í¡A•ÉÑÑÉ¥‰ÕÑ”ì(($%É•ÑÕÉ¸©Í½¸ì((%ô()ô()±…ÍÌ1	Õ™™•ÉÑÑÉ¥‰ÕÑ”ì((%½¹ÍÑÉÕÑ½È ‰Õ™™•È°ÑåÁ”°¥Ñ•µM¥é”°•±•µ•¹ÑM¥é”°½Õ¹Ð€¤ì(($%Ñ¡¥Ì¹¥Í1	Õ™™•ÉÑÑÉ¥‰ÕÑ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹¹…µ”€ô€œœì(($%Ñ¡¥Ì¹‰Õ™™•È€ô‰Õ™™•Èì($%Ñ¡¥Ì¹ÑåÁ”€ôÑåÁ”ì($%Ñ¡¥Ì¹¥Ñ•µM¥é”€ô¥Ñ•µM¥é”ì($%Ñ¡¥Ì¹•±•µ•¹ÑM¥é”€ô•±•µ•¹ÑM¥é”ì($%Ñ¡¥Ì¹½Õ¹Ð€ô½Õ¹Ðì(($%Ñ¡¥Ì¹Ù•ÉÍ¥½¸€ô€Àì((%ô((%Í•Ð¹••‘ÍUÁ‘…Ñ” Ù…±Õ”€¤ì(($%¥˜€ Ù…±Õ”€ôôôÑÉÕ”€¤Ñ¡¥Ì¹Ù•ÉÍ¥½¸€¬¬ì((%ô((%Í•Ñ	Õ™™•È ‰Õ™™•È€¤ì(($%Ñ¡¥Ì¹‰Õ™™•È€ô‰Õ™™•Èì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑQåÁ” ÑåÁ”°•±•µ•¹ÑM¥é”€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ôÑåÁ”ì($%Ñ¡¥Ì¹•±•µ•¹ÑM¥é”€ô•±•µ•¹ÑM¥é”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ%Ñ•µM¥é” ¥Ñ•µM¥é”€¤ì(($%Ñ¡¥Ì¹¥Ñ•µM¥é”€ô¥Ñ•µM¥é”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ñ½Õ¹Ð ½Õ¹Ð€¤ì(($%Ñ¡¥Ì¹½Õ¹Ð€ô½Õ¹Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô()ô()±…ÍÌI…å…ÍÑ•Èì((%½¹ÍÑÉÕÑ½È ½É¥¥¸°‘¥É•Ñ¥½¸°¹•…È€ô€À°™…È€ô%¹™¥¹¥Ñä€¤ì(($%Ñ¡¥Ì¹É…ä€ô¹•ÜI…ä ½É¥¥¸°‘¥É•Ñ¥½¸€¤ì($$¼¼‘¥É•Ñ¥½¸¥Ì…ÍÍÕµ•Ñ¼‰”¹½Éµ…±¥é•€¡™½È…ÕÉ…Ñ”‘¥ÍÑ…¹”…±Õ±…Ñ¥½¹Ì¤(($%Ñ¡¥Ì¹¹•…È€ô¹•…Èì($%Ñ¡¥Ì¹™…È€ô™…Èì($%Ñ¡¥Ì¹…µ•É„€ô¹Õ±°ì($%Ñ¡¥Ì¹±…å•ÉÌ€ô¹•Ü1…å•ÉÌ ¤ì(($%Ñ¡¥Ì¹Á…É…µÌ€ôì($$%5•Í èíô°($$%1¥¹”èìÑ¡É•Í¡½±è€Äô°($$%1=èíô°($$%A½¥¹ÑÌèìÑ¡É•Í¡½±è€Äô°($$%MÁÉ¥Ñ”èíô($%ôì((%ô((%Í•Ð ½É¥¥¸°‘¥É•Ñ¥½¸€¤ì(($$¼¼‘¥É•Ñ¥½¸¥Ì…ÍÍÕµ•Ñ¼‰”¹½Éµ…±¥é•€¡™½È…ÕÉ…Ñ”‘¥ÍÑ…¹”…±Õ±…Ñ¥½¹Ì¤(($%Ñ¡¥Ì¹É…ä¹Í•Ð ½É¥¥¸°‘¥É•Ñ¥½¸€¤ì((%ô((%Í•ÑÉ½µ…µ•É„ ½½É‘Ì°…µ•É„€¤ì(($%¥˜€ …µ•É„¹¥ÍA•ÉÍÁ•Ñ¥Ù•…µ•É„€¤ì(($$%Ñ¡¥Ì¹É…ä¹½É¥¥¸¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ …µ•É„¹µ…ÑÉ¥á]½É±€¤ì($$%Ñ¡¥Ì¹É…ä¹‘¥É•Ñ¥½¸¹Í•Ð ½½É‘Ì¹à°½½É‘Ì¹ä°€À¸Ô€¤¹Õ¹ÁÉ½©•Ð …µ•É„€¤¹ÍÕˆ Ñ¡¥Ì¹É…ä¹½É¥¥¸€¤¹¹½Éµ…±¥é” ¤ì($$%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì(($%ô•±Í”¥˜€ …µ•É„¹¥Í=ÉÑ¡½É…Á¡¥…µ•É„€¤ì(($$%Ñ¡¥Ì¹É…ä¹½É¥¥¸¹Í•Ð ½½É‘Ì¹à°½½É‘Ì¹ä°€ …µ•É„¹¹•…È€¬…µ•É„¹™…È€¤€¼€ …µ•É„¹¹•…È€´…µ•É„¹™…È€¤€¤¹Õ¹ÁÉ½©•Ð …µ•É„€¤ì€¼¼Í•Ð½É¥¥¸¥¸Á±…¹”½˜…µ•É„($$%Ñ¡¥Ì¹É…ä¹‘¥É•Ñ¥½¸¹Í•Ð €À°€À°€´€Ä€¤¹ÑÉ…¹Í™½Éµ¥É•Ñ¥½¸ …µ•É„¹µ…ÑÉ¥á]½É±€¤ì($$%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì(($%ô•±Í”ì(($$%½¹Í½±”¹•ÉÉ½È €Q!I¹I…å…ÍÑ•ÈèU¹ÍÕÁÁ½ÉÑ•…µ•É„ÑåÁ”è€œ€¬…µ•É„¹ÑåÁ”€¤ì(($%ô((%ô((%¥¹Ñ•ÉÍ•Ñ=‰©•Ð ½‰©•Ð°É•ÕÉÍ¥Ù”€ôÑÉÕ”°¥¹Ñ•ÉÍ•ÑÌ€ômt€¤ì(($%¥¹Ñ•ÉÍ•Ñ=‰©•Ð ½‰©•Ð°Ñ¡¥Ì°¥¹Ñ•ÉÍ•ÑÌ°É•ÕÉÍ¥Ù”€¤ì(($%¥¹Ñ•ÉÍ•ÑÌ¹Í½ÉÐ …ÍM½ÉÐ€¤ì(($%É•ÑÕÉ¸¥¹Ñ•ÉÍ•ÑÌì((%ô((%¥¹Ñ•ÉÍ•Ñ=‰©•ÑÌ ½‰©•ÑÌ°É•ÕÉÍ¥Ù”€ôÑÉÕ”°¥¹Ñ•ÉÍ•ÑÌ€ômt€¤ì(($%™½È€ ±•Ð¤€ô€À°°€ô½‰©•ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%¥¹Ñ•ÉÍ•Ñ=‰©•Ð ½‰©•ÑÍl¤t°Ñ¡¥Ì°¥¹Ñ•ÉÍ•ÑÌ°É•ÕÉÍ¥Ù”€¤ì(($%ô(($%¥¹Ñ•ÉÍ•ÑÌ¹Í½ÉÐ …ÍM½ÉÐ€¤ì(($%É•ÑÕÉ¸¥¹Ñ•ÉÍ•ÑÌì((%ô()ô()™Õ¹Ñ¥½¸…ÍM½ÉÐ „°ˆ€¤ì((%É•ÑÕÉ¸„¹‘¥ÍÑ…¹”€´ˆ¹‘¥ÍÑ…¹”ì()ô()™Õ¹Ñ¥½¸¥¹Ñ•ÉÍ•Ñ=‰©•Ð ½‰©•Ð°É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ°É•ÕÉÍ¥Ù”€¤ì((%¥˜€ ½‰©•Ð¹±…å•ÉÌ¹Ñ•ÍÐ É…å…ÍÑ•È¹±…å•ÉÌ€¤€¤ì(($%½‰©•Ð¹É…å…ÍÐ É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ€¤ì((%ô((%¥˜€ É•ÕÉÍ¥Ù”€ôôôÑÉÕ”€¤ì(($%½¹ÍÐ¡¥±‘É•¸€ô½‰©•Ð¹¡¥±‘É•¸ì(($%™½È€ ±•Ð¤€ô€À°°€ô¡¥±‘É•¸¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%¥¹Ñ•ÉÍ•Ñ=‰©•Ð ¡¥±‘É•¹l¤t°É…å…ÍÑ•È°¥¹Ñ•ÉÍ•ÑÌ°ÑÉÕ”€¤ì(($%ô((%ô()ô((¼¨¨(€¨I•˜è¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½MÁ¡•É¥…±}½½É‘¥¹…Ñ•}ÍåÍÑ•´(€¨(€¨Q¡”Á½±…È…¹±”€¡Á¡¤¤¥Ìµ•…ÍÕÉ•™É½´Ñ¡”Á½Í¥Ñ¥Ù”äµ…á¥Ì¸Q¡”Á½Í¥Ñ¥Ù”äµ…á¥Ì¥ÌÕÀ¸(€¨Q¡”…é¥µÕÑ¡…°…¹±”€¡Ñ¡•Ñ„¤¥Ìµ•…ÍÕÉ•™É½´Ñ¡”Á½Í¥Ñ¥Ù”èµ…á¥Ì¸(€¨¼(()±…ÍÌMÁ¡•É¥…°ì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°Á¡¤€ô€À°Ñ¡•Ñ„€ô€À€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì($%Ñ¡¥Ì¹Á¡¤€ôÁ¡¤ì€¼¼Á½±…È…¹±”($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì€¼¼…é¥µÕÑ¡…°…¹±”(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ð É…‘¥ÕÌ°Á¡¤°Ñ¡•Ñ„€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì($%Ñ¡¥Ì¹Á¡¤€ôÁ¡¤ì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä ½Ñ¡•È€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô½Ñ¡•È¹É…‘¥ÕÌì($%Ñ¡¥Ì¹Á¡¤€ô½Ñ¡•È¹Á¡¤ì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ô½Ñ¡•È¹Ñ¡•Ñ„ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô(($¼¼É•ÍÑÉ¥ÐÁ¡¤Ñ¼‰”‰•ÑÝ••¸AL…¹A$µAL(%µ…­•M…™” ¤ì(($%½¹ÍÐAL€ô€À¸ÀÀÀÀÀÄì($%Ñ¡¥Ì¹Á¡¤€ô5…Ñ ¹µ…à AL°5…Ñ ¹µ¥¸ 5…Ñ ¹A$€´AL°Ñ¡¥Ì¹Á¡¤€¤€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑÉ½µY•Ñ½ÈÌ Ø€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì Ø¹à°Ø¹ä°Ø¹è€¤ì((%ô((%Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì à°ä°è€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô5…Ñ ¹ÍÅÉÐ à€¨à€¬ä€¨ä€¬è€¨è€¤ì(($%¥˜€ Ñ¡¥Ì¹É…‘¥ÕÌ€ôôô€À€¤ì(($$%Ñ¡¥Ì¹Ñ¡•Ñ„€ô€Àì($$%Ñ¡¥Ì¹Á¡¤€ô€Àì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹Ñ¡•Ñ„€ô5…Ñ ¹…Ñ…¸È à°è€¤ì($$%Ñ¡¥Ì¹Á¡¤€ô5…Ñ ¹…½Ì ±…µÀ ä€¼Ñ¡¥Ì¹É…‘¥ÕÌ°€´€Ä°€Ä€¤€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô((¼¨¨(€¨I•˜è¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½å±¥¹‘É¥…±}½½É‘¥¹…Ñ•}ÍåÍÑ•´(€¨¼()±…ÍÌå±¥¹‘É¥…°ì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€Ä°Ñ¡•Ñ„€ô€À°ä€ô€À€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì€¼¼‘¥ÍÑ…¹”™É½´Ñ¡”½É¥¥¸Ñ¼„Á½¥¹Ð¥¸Ñ¡”àµèÁ±…¹”($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì€¼¼½Õ¹Ñ•É±½­Ý¥Í”…¹±”¥¸Ñ¡”àµèÁ±…¹”µ•…ÍÕÉ•¥¸É…‘¥…¹Ì™É½´Ñ¡”Á½Í¥Ñ¥Ù”èµ…á¥Ì($%Ñ¡¥Ì¹ä€ôäì€¼¼¡•¥¡Ð…‰½Ù”Ñ¡”àµèÁ±…¹”(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•Ð É…‘¥ÕÌ°Ñ¡•Ñ„°ä€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ôÉ…‘¥ÕÌì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ôÑ¡•Ñ„ì($%Ñ¡¥Ì¹ä€ôäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä ½Ñ¡•È€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô½Ñ¡•È¹É…‘¥ÕÌì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ô½Ñ¡•È¹Ñ¡•Ñ„ì($%Ñ¡¥Ì¹ä€ô½Ñ¡•È¹äì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑÉ½µY•Ñ½ÈÌ Ø€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì Ø¹à°Ø¹ä°Ø¹è€¤ì((%ô((%Í•ÑÉ½µ…ÉÑ•Í¥…¹½½É‘Ì à°ä°è€¤ì(($%Ñ¡¥Ì¹É…‘¥ÕÌ€ô5…Ñ ¹ÍÅÉÐ à€¨à€¬è€¨è€¤ì($%Ñ¡¥Ì¹Ñ¡•Ñ„€ô5…Ñ ¹…Ñ…¸È à°è€¤ì($%Ñ¡¥Ì¹ä€ôäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÐ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÈ ¤ì()±…ÍÌ	½àÈì((%½¹ÍÑÉÕÑ½È µ¥¸€ô¹•ÜY•Ñ½ÈÈ €¬%¹™¥¹¥Ñä°€¬%¹™¥¹¥Ñä€¤°µ…à€ô¹•ÜY•Ñ½ÈÈ €´%¹™¥¹¥Ñä°€´%¹™¥¹¥Ñä€¤€¤ì(($%Ñ¡¥Ì¹¥Í	½àÈ€ôÑÉÕ”ì(($%Ñ¡¥Ì¹µ¥¸€ôµ¥¸ì($%Ñ¡¥Ì¹µ…à€ôµ…àì((%ô((%Í•Ð µ¥¸°µ…à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹½Áä µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹½Áä µ…à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑÉ½µA½¥¹ÑÌ Á½¥¹ÑÌ€¤ì(($%Ñ¡¥Ì¹µ…­•µÁÑä ¤ì(($%™½È€ ±•Ð¤€ô€À°¥°€ôÁ½¥¹ÑÌ¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$%Ñ¡¥Ì¹•áÁ…¹‘	åA½¥¹Ð Á½¥¹ÑÍl¤t€¤ì(($%ô(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Í•ÑÉ½µ•¹Ñ•É¹‘M¥é” •¹Ñ•È°Í¥é”€¤ì(($%½¹ÍÐ¡…±™M¥é”€ô}Ù•Ñ½ÈÐ¹½Áä Í¥é”€¤¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì($%Ñ¡¥Ì¹µ¥¸¹½Áä •¹Ñ•È€¤¹ÍÕˆ ¡…±™M¥é”€¤ì($%Ñ¡¥Ì¹µ…à¹½Áä •¹Ñ•È€¤¹…‘ ¡…±™M¥é”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô((%½Áä ‰½à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹½Áä ‰½à¹µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹½Áä ‰½à¹µ…à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%µ…­•µÁÑä ¤ì(($%Ñ¡¥Ì¹µ¥¸¹à€ôÑ¡¥Ì¹µ¥¸¹ä€ô€¬%¹™¥¹¥Ñäì($%Ñ¡¥Ì¹µ…à¹à€ôÑ¡¥Ì¹µ…à¹ä€ô€´%¹™¥¹¥Ñäì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%¥ÍµÁÑä ¤ì(($$¼¼Ñ¡¥Ì¥Ì„µ½É”É½‰ÕÍÐ¡•¬™½È•µÁÑäÑ¡…¸€ Ù½±Õµ”€ðô€À€¤‰•…ÕÍ”Ù½±Õµ”…¸•ÐÁ½Í¥Ñ¥Ù”Ý¥Ñ ÑÝ¼¹•…Ñ¥Ù”…á•Ì(($%É•ÑÕÉ¸€ Ñ¡¥Ì¹µ…à¹à€ðÑ¡¥Ì¹µ¥¸¹à€¤ñð€ Ñ¡¥Ì¹µ…à¹ä€ðÑ¡¥Ì¹µ¥¸¹ä€¤ì((%ô((%•Ñ•¹Ñ•È Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹¥ÍµÁÑä ¤€üÑ…É•Ð¹Í•Ð €À°€À€¤€èÑ…É•Ð¹…‘‘Y•Ñ½ÉÌ Ñ¡¥Ì¹µ¥¸°Ñ¡¥Ì¹µ…à€¤¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì((%ô((%•ÑM¥é” Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹¥ÍµÁÑä ¤€üÑ…É•Ð¹Í•Ð €À°€À€¤€èÑ…É•Ð¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹µ…à°Ñ¡¥Ì¹µ¥¸€¤ì((%ô((%•áÁ…¹‘	åA½¥¹Ð Á½¥¹Ð€¤ì(($%Ñ¡¥Ì¹µ¥¸¹µ¥¸ Á½¥¹Ð€¤ì($%Ñ¡¥Ì¹µ…à¹µ…à Á½¥¹Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•áÁ…¹‘	åY•Ñ½È Ù•Ñ½È€¤ì(($%Ñ¡¥Ì¹µ¥¸¹ÍÕˆ Ù•Ñ½È€¤ì($%Ñ¡¥Ì¹µ…à¹…‘ Ù•Ñ½È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•áÁ…¹‘	åM…±…È Í…±…È€¤ì(($%Ñ¡¥Ì¹µ¥¸¹…‘‘M…±…È €´Í…±…È€¤ì($%Ñ¡¥Ì¹µ…à¹…‘‘M…±…È Í…±…È€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½¹Ñ…¥¹ÍA½¥¹Ð Á½¥¹Ð€¤ì(($%É•ÑÕÉ¸Á½¥¹Ð¹à€ðÑ¡¥Ì¹µ¥¸¹àñðÁ½¥¹Ð¹à€øÑ¡¥Ì¹µ…à¹àñð($$%Á½¥¹Ð¹ä€ðÑ¡¥Ì¹µ¥¸¹äñðÁ½¥¹Ð¹ä€øÑ¡¥Ì¹µ…à¹ä€ü™…±Í”€èÑÉÕ”ì((%ô((%½¹Ñ…¥¹Í	½à ‰½à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹µ¥¸¹à€ðô‰½à¹µ¥¸¹à€˜˜‰½à¹µ…à¹à€ðôÑ¡¥Ì¹µ…à¹à€˜˜($$%Ñ¡¥Ì¹µ¥¸¹ä€ðô‰½à¹µ¥¸¹ä€˜˜‰½à¹µ…à¹ä€ðôÑ¡¥Ì¹µ…à¹äì((%ô((%•ÑA…É…µ•Ñ•È Á½¥¹Ð°Ñ…É•Ð€¤ì(($$¼¼Q¡¥Ì…¸Á½Ñ•¹Ñ¥…±±ä¡…Ù”„‘¥Ù¥‘”‰äé•É¼¥˜Ñ¡”‰½à($$¼¼¡…Ì„Í¥é”‘¥µ•¹Í¥½¸½˜€À¸(($%É•ÑÕÉ¸Ñ…É•Ð¹Í•Ð ($$$ Á½¥¹Ð¹à€´Ñ¡¥Ì¹µ¥¸¹à€¤€¼€ Ñ¡¥Ì¹µ…à¹à€´Ñ¡¥Ì¹µ¥¸¹à€¤°($$$ Á½¥¹Ð¹ä€´Ñ¡¥Ì¹µ¥¸¹ä€¤€¼€ Ñ¡¥Ì¹µ…à¹ä€´Ñ¡¥Ì¹µ¥¸¹ä€¤($$¤ì((%ô((%¥¹Ñ•ÉÍ•ÑÍ	½à ‰½à€¤ì(($$¼¼ÕÍ¥¹œ€ÐÍÁ±¥ÑÑ¥¹œÁ±…¹•ÌÑ¼ÉÕ±”½ÕÐ¥¹Ñ•ÉÍ•Ñ¥½¹Ì(($%É•ÑÕÉ¸‰½à¹µ…à¹à€ðÑ¡¥Ì¹µ¥¸¹àñð‰½à¹µ¥¸¹à€øÑ¡¥Ì¹µ…à¹àñð($$%‰½à¹µ…à¹ä€ðÑ¡¥Ì¹µ¥¸¹äñð‰½à¹µ¥¸¹ä€øÑ¡¥Ì¹µ…à¹ä€ü™…±Í”€èÑÉÕ”ì((%ô((%±…µÁA½¥¹Ð Á½¥¹Ð°Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ…É•Ð¹½Áä Á½¥¹Ð€¤¹±…µÀ Ñ¡¥Ì¹µ¥¸°Ñ¡¥Ì¹µ…à€¤ì((%ô((%‘¥ÍÑ…¹•Q½A½¥¹Ð Á½¥¹Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹±…µÁA½¥¹Ð Á½¥¹Ð°}Ù•Ñ½ÈÐ€¤¹‘¥ÍÑ…¹•Q¼ Á½¥¹Ð€¤ì((%ô((%¥¹Ñ•ÉÍ•Ð ‰½à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹µ…à ‰½à¹µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹µ¥¸ ‰½à¹µ…à€¤ì(($%¥˜€ Ñ¡¥Ì¹¥ÍµÁÑä ¤€¤Ñ¡¥Ì¹µ…­•µÁÑä ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Õ¹¥½¸ ‰½à€¤ì(($%Ñ¡¥Ì¹µ¥¸¹µ¥¸ ‰½à¹µ¥¸€¤ì($%Ñ¡¥Ì¹µ…à¹µ…à ‰½à¹µ…à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÑÉ…¹Í±…Ñ” ½™™Í•Ð€¤ì(($%Ñ¡¥Ì¹µ¥¸¹…‘ ½™™Í•Ð€¤ì($%Ñ¡¥Ì¹µ…à¹…‘ ½™™Í•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•ÅÕ…±Ì ‰½à€¤ì(($%É•ÑÕÉ¸‰½à¹µ¥¸¹•ÅÕ…±Ì Ñ¡¥Ì¹µ¥¸€¤€˜˜‰½à¹µ…à¹•ÅÕ…±Ì Ñ¡¥Ì¹µ…à€¤ì((%ô()ô()½¹ÍÐ}ÍÑ…ÉÑ@€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ÍÑ…ÉÑ¹€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌ1¥¹”Ìì((%½¹ÍÑÉÕÑ½È ÍÑ…ÉÐ€ô¹•ÜY•Ñ½ÈÌ ¤°•¹€ô¹•ÜY•Ñ½ÈÌ ¤€¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÐ€ôÍÑ…ÉÐì($%Ñ¡¥Ì¹•¹€ô•¹ì((%ô((%Í•Ð ÍÑ…ÉÐ°•¹€¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÐ¹½Áä ÍÑ…ÉÐ€¤ì($%Ñ¡¥Ì¹•¹¹½Áä •¹€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä ±¥¹”€¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÐ¹½Áä ±¥¹”¹ÍÑ…ÉÐ€¤ì($%Ñ¡¥Ì¹•¹¹½Áä ±¥¹”¹•¹€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•Ñ•¹Ñ•È Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ…É•Ð¹…‘‘Y•Ñ½ÉÌ Ñ¡¥Ì¹ÍÑ…ÉÐ°Ñ¡¥Ì¹•¹€¤¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì((%ô((%‘•±Ñ„ Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ…É•Ð¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹•¹°Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì((%ô((%‘¥ÍÑ…¹•MÄ ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ…ÉÐ¹‘¥ÍÑ…¹•Q½MÅÕ…É• Ñ¡¥Ì¹•¹€¤ì((%ô((%‘¥ÍÑ…¹” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ…ÉÐ¹‘¥ÍÑ…¹•Q¼ Ñ¡¥Ì¹•¹€¤ì((%ô((%…Ð Ð°Ñ…É•Ð€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘•±Ñ„ Ñ…É•Ð€¤¹µÕ±Ñ¥Á±åM…±…È Ð€¤¹…‘ Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì((%ô((%±½Í•ÍÑA½¥¹ÑQ½A½¥¹ÑA…É…µ•Ñ•È Á½¥¹Ð°±…µÁQ½1¥¹”€¤ì(($%}ÍÑ…ÉÑ@¹ÍÕ‰Y•Ñ½ÉÌ Á½¥¹Ð°Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì($%}ÍÑ…ÉÑ¹¹ÍÕ‰Y•Ñ½ÉÌ Ñ¡¥Ì¹•¹°Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì(($%½¹ÍÐÍÑ…ÉÑ¹È€ô}ÍÑ…ÉÑ¹¹‘½Ð }ÍÑ…ÉÑ¹€¤ì($%½¹ÍÐÍÑ…ÉÑ¹‘}ÍÑ…ÉÑ@€ô}ÍÑ…ÉÑ¹¹‘½Ð }ÍÑ…ÉÑ@€¤ì(($%±•ÐÐ€ôÍÑ…ÉÑ¹‘}ÍÑ…ÉÑ@€¼ÍÑ…ÉÑ¹Èì(($%¥˜€ ±…µÁQ½1¥¹”€¤ì(($$%Ð€ô±…µÀ Ð°€À°€Ä€¤ì(($%ô(($%É•ÑÕÉ¸Ðì((%ô((%±½Í•ÍÑA½¥¹ÑQ½A½¥¹Ð Á½¥¹Ð°±…µÁQ½1¥¹”°Ñ…É•Ð€¤ì(($%½¹ÍÐÐ€ôÑ¡¥Ì¹±½Í•ÍÑA½¥¹ÑQ½A½¥¹ÑA…É…µ•Ñ•È Á½¥¹Ð°±…µÁQ½1¥¹”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ì¹‘•±Ñ„ Ñ…É•Ð€¤¹µÕ±Ñ¥Á±åM…±…È Ð€¤¹…‘ Ñ¡¥Ì¹ÍÑ…ÉÐ€¤ì((%ô((%…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥à€¤ì(($%Ñ¡¥Ì¹ÍÑ…ÉÐ¹…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥à€¤ì($%Ñ¡¥Ì¹•¹¹…ÁÁ±å5…ÑÉ¥àÐ µ…ÑÉ¥à€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%•ÅÕ…±Ì ±¥¹”€¤ì(($%É•ÑÕÉ¸±¥¹”¹ÍÑ…ÉÐ¹•ÅÕ…±Ì Ñ¡¥Ì¹ÍÑ…ÉÐ€¤€˜˜±¥¹”¹•¹¹•ÅÕ…±Ì Ñ¡¥Ì¹•¹€¤ì((%ô((%±½¹” ¤ì(($%É•ÑÕÉ¸¹•ÜÑ¡¥Ì¹½¹ÍÑÉÕÑ½È ¤¹½Áä Ñ¡¥Ì€¤ì((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÌ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌMÁ½Ñ1¥¡Ñ!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì((%½¹ÍÑÉÕÑ½È ±¥¡Ð°½±½È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô±¥¡Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€MÁ½Ñ1¥¡Ñ!•±Á•Èœì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ôl($$$À°€À°€À°€$À°€À°€Ä°($$$À°€À°€À°€$Ä°€À°€Ä°($$$À°€À°€À°$´€Ä°€À°€Ä°($$$À°€À°€À°€$À°€Ä°€Ä°($$$À°€À°€À°€$À°€´€Ä°€Ä($%tì(($%™½È€ ±•Ð¤€ô€À°¨€ô€Ä°°€ô€ÌÈì¤€ð°ì¤€¬¬°¨€¬¬€¤ì(($$%½¹ÍÐÀÄ€ô€ ¤€¼°€¤€¨5…Ñ ¹A$€¨€Èì($$%½¹ÍÐÀÈ€ô€ ¨€¼°€¤€¨5…Ñ ¹A$€¨€Èì(($$%Á½Í¥Ñ¥½¹Ì¹ÁÕÍ  ($$$%5…Ñ ¹½Ì ÀÄ€¤°5…Ñ ¹Í¥¸ ÀÄ€¤°€Ä°($$$%5…Ñ ¹½Ì ÀÈ€¤°5…Ñ ¹Í¥¸ ÀÈ€¤°€Ä($$$¤ì(($%ô(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%Ñ¡¥Ì¹½¹”€ô¹•Ü1¥¹•M•µ•¹ÑÌ •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹½¹”€¤ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹½¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô((%ÕÁ‘…Ñ” ¤ì(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì($%Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($%½¹ÍÐ½¹•1•¹Ñ €ôÑ¡¥Ì¹±¥¡Ð¹‘¥ÍÑ…¹”€üÑ¡¥Ì¹±¥¡Ð¹‘¥ÍÑ…¹”€è€ÄÀÀÀì($%½¹ÍÐ½¹•]¥‘Ñ €ô½¹•1•¹Ñ €¨5…Ñ ¹Ñ…¸ Ñ¡¥Ì¹±¥¡Ð¹…¹±”€¤ì(($%Ñ¡¥Ì¹½¹”¹Í…±”¹Í•Ð ½¹•]¥‘Ñ °½¹•]¥‘Ñ °½¹•1•¹Ñ €¤ì(($%}Ù•Ñ½ÈÌ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹µ…ÑÉ¥á]½É±€¤ì(($%Ñ¡¥Ì¹½¹”¹±½½­Ð }Ù•Ñ½ÈÌ€¤ì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì(($%ô((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÈ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}‰½¹•5…ÑÉ¥à€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì)½¹ÍÐ}µ…ÑÉ¥á]½É±‘%¹Ø€ô€¼©}}AUI}|¨¼¹•Ü5…ÑÉ¥àÐ ¤ì(()±…ÍÌM­•±•Ñ½¹!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì((%½¹ÍÑÉÕÑ½È ½‰©•Ð€¤ì(($%½¹ÍÐ‰½¹•Ì€ô•Ñ	½¹•1¥ÍÐ ½‰©•Ð€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ½±½ÉÌ€ômtì(($%½¹ÍÐ½±½ÈÄ€ô¹•Ü½±½È €À°€À°€Ä€¤ì($%½¹ÍÐ½±½ÈÈ€ô¹•Ü½±½È €À°€Ä°€À€¤ì(($%™½È€ ±•Ð¤€ô€Àì¤€ð‰½¹•Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%½¹ÍÐ‰½¹”€ô‰½¹•Íl¤tì(($$%¥˜€ ‰½¹”¹Á…É•¹Ð€˜˜‰½¹”¹Á…É•¹Ð¹¥Í	½¹”€¤ì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½ÈÄ¹È°½±½ÈÄ¹œ°½±½ÈÄ¹ˆ€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½ÈÈ¹È°½±½ÈÈ¹œ°½±½ÈÈ¹ˆ€¤ì(($$%ô(($%ô(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°‘•ÁÑ¡Q•ÍÐè™…±Í”°‘•ÁÑ¡]É¥Ñ”è™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”°ÑÉ…¹ÍÁ…É•¹ÐèÑÉÕ”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹¥ÍM­•±•Ñ½¹!•±Á•È€ôÑÉÕ”ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€M­•±•Ñ½¹!•±Á•Èœì(($%Ñ¡¥Ì¹É½½Ð€ô½‰©•Ðì($%Ñ¡¥Ì¹‰½¹•Ì€ô‰½¹•Ìì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô½‰©•Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%½¹ÍÐ‰½¹•Ì€ôÑ¡¥Ì¹‰½¹•Ìì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì($%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤ì(($%}µ…ÑÉ¥á]½É±‘%¹Ø¹½Áä Ñ¡¥Ì¹É½½Ð¹µ…ÑÉ¥á]½É±€¤¹¥¹Ù•ÉÐ ¤ì(($%™½È€ ±•Ð¤€ô€À°¨€ô€Àì¤€ð‰½¹•Ì¹±•¹Ñ ì¤€¬¬€¤ì(($$%½¹ÍÐ‰½¹”€ô‰½¹•Íl¤tì(($$%¥˜€ ‰½¹”¹Á…É•¹Ð€˜˜‰½¹”¹Á…É•¹Ð¹¥Í	½¹”€¤ì(($$$%}‰½¹•5…ÑÉ¥à¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì }µ…ÑÉ¥á]½É±‘%¹Ø°‰½¹”¹µ…ÑÉ¥á]½É±€¤ì($$$%}Ù•Ñ½ÈÈ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ }‰½¹•5…ÑÉ¥à€¤ì($$$%Á½Í¥Ñ¥½¸¹Í•Ñaeh ¨°}Ù•Ñ½ÈÈ¹à°}Ù•Ñ½ÈÈ¹ä°}Ù•Ñ½ÈÈ¹è€¤ì(($$$%}‰½¹•5…ÑÉ¥à¹µÕ±Ñ¥Á±å5…ÑÉ¥•Ì }µ…ÑÉ¥á]½É±‘%¹Ø°‰½¹”¹Á…É•¹Ð¹µ…ÑÉ¥á]½É±€¤ì($$$%}Ù•Ñ½ÈÈ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ }‰½¹•5…ÑÉ¥à€¤ì($$$%Á½Í¥Ñ¥½¸¹Í•Ñaeh ¨€¬€Ä°}Ù•Ñ½ÈÈ¹à°}Ù•Ñ½ÈÈ¹ä°}Ù•Ñ½ÈÈ¹è€¤ì(($$$%¨€¬ô€Èì(($$%ô(($%ô(($%•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô(()™Õ¹Ñ¥½¸•Ñ	½¹•1¥ÍÐ ½‰©•Ð€¤ì((%½¹ÍÐ‰½¹•1¥ÍÐ€ômtì((%¥˜€ ½‰©•Ð¹¥Í	½¹”€ôôôÑÉÕ”€¤ì(($%‰½¹•1¥ÍÐ¹ÁÕÍ  ½‰©•Ð€¤ì((%ô((%™½È€ ±•Ð¤€ô€Àì¤€ð½‰©•Ð¹¡¥±‘É•¸¹±•¹Ñ ì¤€¬¬€¤ì(($%‰½¹•1¥ÍÐ¹ÁÕÍ ¹…ÁÁ±ä ‰½¹•1¥ÍÐ°•Ñ	½¹•1¥ÍÐ ½‰©•Ð¹¡¥±‘É•¹l¤t€¤€¤ì((%ô((%É•ÑÕÉ¸‰½¹•1¥ÍÐì()ô()±…ÍÌA½¥¹Ñ1¥¡Ñ!•±Á•È•áÑ•¹‘Ì5•Í ì((%½¹ÍÑÉÕÑ½È ±¥¡Ð°ÍÁ¡•É•M¥é”°½±½È€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•ÜMÁ¡•É••½µ•ÑÉä ÍÁ¡•É•M¥é”°€Ð°€È€¤ì($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ìÝ¥É•™É…µ”èÑÉÕ”°™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½¥¹Ñ1¥¡Ñ!•±Á•Èœì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ôÑ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((($$¼¨($¼¼Q=<è‘•±•Ñ”Ñ¡¥Ì½µµ•¹Ðü(%½¹ÍÐ‘¥ÍÑ…¹••½µ•ÑÉä€ô¹•ÜQ!I¹%½Í…¡•‘É½¹•½µ•ÑÉä €Ä°€È€¤ì(%½¹ÍÐ‘¥ÍÑ…¹•5…Ñ•É¥…°€ô¹•ÜQ!I¹5•Í¡	…Í¥5…Ñ•É¥…° ì½±½Èè¡•á½±½È°™½œè™…±Í”°Ý¥É•™É…µ”èÑÉÕ”°½Á…¥Ñäè€À¸Ä°ÑÉ…¹ÍÁ…É•¹ÐèÑÉÕ”ô€¤ì((%Ñ¡¥Ì¹±¥¡ÑMÁ¡•É”€ô¹•ÜQ!I¹5•Í  ‰Õ±‰•½µ•ÑÉä°‰Õ±‰5…Ñ•É¥…°€¤ì(%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”€ô¹•ÜQ!I¹5•Í  ‘¥ÍÑ…¹••½µ•ÑÉä°‘¥ÍÑ…¹•5…Ñ•É¥…°€¤ì((%½¹ÍÐ€ô±¥¡Ð¹‘¥ÍÑ…¹”ì((%¥˜€ €ôôô€À¸À€¤ì(($%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Ù¥Í¥‰±”€ô™…±Í”ì((%ô•±Í”ì(($%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Í…±”¹Í•Ð °°€¤ì((%ô((%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”€¤ì($¨¼((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô((%ÕÁ‘…Ñ” ¤ì(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì(($%ô(($$¼¨($%½¹ÍÐ€ôÑ¡¥Ì¹±¥¡Ð¹‘¥ÍÑ…¹”ì(($%¥˜€ €ôôô€À¸À€¤ì(($$%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Ù¥Í¥‰±”€ô™…±Í”ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Ù¥Í¥‰±”€ôÑÉÕ”ì($$%Ñ¡¥Ì¹±¥¡Ñ¥ÍÑ…¹”¹Í…±”¹Í•Ð °°€¤ì(($%ô($$¨¼((%ô()ô()½¹ÍÐ}Ù•Ñ½ÈÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}½±½ÈÄ€ô€¼©}}AUI}|¨¼¹•Ü½±½È ¤ì)½¹ÍÐ}½±½ÈÈ€ô€¼©}}AUI}|¨¼¹•Ü½±½È ¤ì()±…ÍÌ!•µ¥ÍÁ¡•É•1¥¡Ñ!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì((%½¹ÍÑÉÕÑ½È ±¥¡Ð°Í¥é”°½±½È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô±¥¡Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€!•µ¥ÍÁ¡•É•1¥¡Ñ!•±Á•Èœì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü=Ñ…¡•‘É½¹•½µ•ÑÉä Í¥é”€¤ì($%•½µ•ÑÉä¹É½Ñ…Ñ•d 5…Ñ ¹A$€¨€À¸Ô€¤ì(($%Ñ¡¥Ì¹µ…Ñ•É¥…°€ô¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ìÝ¥É•™É…µ”èÑÉÕ”°™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì($%¥˜€ Ñ¡¥Ì¹½±½È€ôôôÕ¹‘•™¥¹•€¤Ñ¡¥Ì¹µ…Ñ•É¥…°¹Ù•ÉÑ•á½±½ÉÌ€ôÑÉÕ”ì(($%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤ì($%½¹ÍÐ½±½ÉÌ€ô¹•Ü±½…ÐÌÉÉÉ…ä Á½Í¥Ñ¥½¸¹½Õ¹Ð€¨€Ì€¤ì(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%Ñ¡¥Ì¹…‘ ¹•Ü5•Í  •½µ•ÑÉä°Ñ¡¥Ì¹µ…Ñ•É¥…°€¤€¤ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô((%ÕÁ‘…Ñ” ¤ì(($%½¹ÍÐµ•Í €ôÑ¡¥Ì¹¡¥±‘É•¹l€Àtì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%½¹ÍÐ½±½ÉÌ€ôµ•Í ¹•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ€¤ì(($$%}½±½ÈÄ¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì($$%}½±½ÈÈ¹½Áä Ñ¡¥Ì¹±¥¡Ð¹É½Õ¹‘½±½È€¤ì(($$%™½È€ ±•Ð¤€ô€À°°€ô½±½ÉÌ¹½Õ¹Ðì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐ½±½È€ô€ ¤€ð€ °€¼€È€¤€¤€ü}½±½ÈÄ€è}½±½ÈÈì(($$$%½±½ÉÌ¹Í•Ñaeh ¤°½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$%ô(($$%½±½ÉÌ¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%ô(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($%µ•Í ¹±½½­Ð }Ù•Ñ½ÈÄ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±€¤¹¹•…Ñ” ¤€¤ì((%ô()ô()±…ÍÌÉ¥‘!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì((%½¹ÍÑÉÕÑ½È Í¥é”€ô€ÄÀ°‘¥Ù¥Í¥½¹Ì€ô€ÄÀ°½±½ÈÄ€ô€ÁàÐÐÐÐÐÐ°½±½ÈÈ€ô€Áààààààà€¤ì(($%½±½ÈÄ€ô¹•Ü½±½È ½±½ÈÄ€¤ì($%½±½ÈÈ€ô¹•Ü½±½È ½±½ÈÈ€¤ì(($%½¹ÍÐ•¹Ñ•È€ô‘¥Ù¥Í¥½¹Ì€¼€Èì($%½¹ÍÐÍÑ•À€ôÍ¥é”€¼‘¥Ù¥Í¥½¹Ìì($%½¹ÍÐ¡…±™M¥é”€ôÍ¥é”€¼€Èì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômt°½±½ÉÌ€ômtì(($%™½È€ ±•Ð¤€ô€À°¨€ô€À°¬€ô€´¡…±™M¥é”ì¤€ðô‘¥Ù¥Í¥½¹Ìì¤€¬¬°¬€¬ôÍÑ•À€¤ì(($$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €´¡…±™M¥é”°€À°¬°¡…±™M¥é”°€À°¬€¤ì($$%Ù•ÉÑ¥•Ì¹ÁÕÍ  ¬°€À°€´¡…±™M¥é”°¬°€À°¡…±™M¥é”€¤ì(($$%½¹ÍÐ½±½È€ô¤€ôôô•¹Ñ•È€ü½±½ÈÄ€è½±½ÈÈì(($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì($$%½±½È¹Ñ½ÉÉ…ä ½±½ÉÌ°¨€¤ì¨€¬ô€Ìì(($%ô(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€É¥‘!•±Á•Èœì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()±…ÍÌA½±…ÉÉ¥‘!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì((%½¹ÍÑÉÕÑ½È É…‘¥ÕÌ€ô€ÄÀ°Í•Ñ½ÉÌ€ô€ÄØ°É¥¹Ì€ô€à°‘¥Ù¥Í¥½¹Ì€ô€ØÐ°½±½ÈÄ€ô€ÁàÐÐÐÐÐÐ°½±½ÈÈ€ô€Áààààààà€¤ì(($%½±½ÈÄ€ô¹•Ü½±½È ½±½ÈÄ€¤ì($%½±½ÈÈ€ô¹•Ü½±½È ½±½ÈÈ€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ½±½ÉÌ€ômtì(($$¼¼É•…Ñ”Ñ¡”Í•Ñ½ÉÌ(($%¥˜€ Í•Ñ½ÉÌ€ø€Ä€¤ì(($$%™½È€ ±•Ð¤€ô€Àì¤€ðÍ•Ñ½ÉÌì¤€¬¬€¤ì(($$$%½¹ÍÐØ€ô€ ¤€¼Í•Ñ½ÉÌ€¤€¨€ 5…Ñ ¹A$€¨€È€¤ì(($$$%½¹ÍÐà€ô5…Ñ ¹Í¥¸ Ø€¤€¨É…‘¥ÕÌì($$$%½¹ÍÐè€ô5…Ñ ¹½Ì Ø€¤€¨É…‘¥ÕÌì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  à°€À°è€¤ì(($$$%½¹ÍÐ½±½È€ô€ ¤€˜€Ä€¤€ü½±½ÈÄ€è½±½ÈÈì(($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$%ô(($%ô(($$¼¼É•…Ñ”Ñ¡”É¥¹Ì(($%™½È€ ±•Ð¤€ô€Àì¤€ðÉ¥¹Ìì¤€¬¬€¤ì(($$%½¹ÍÐ½±½È€ô€ ¤€˜€Ä€¤€ü½±½ÈÄ€è½±½ÈÈì(($$%½¹ÍÐÈ€ôÉ…‘¥ÕÌ€´€ É…‘¥ÕÌ€¼É¥¹Ì€¨¤€¤ì(($$%™½È€ ±•Ð¨€ô€Àì¨€ð‘¥Ù¥Í¥½¹Ìì¨€¬¬€¤ì(($$$$¼¼™¥ÉÍÐÙ•ÉÑ•à(($$$%±•ÐØ€ô€ ¨€¼‘¥Ù¥Í¥½¹Ì€¤€¨€ 5…Ñ ¹A$€¨€È€¤ì(($$$%±•Ðà€ô5…Ñ ¹Í¥¸ Ø€¤€¨Èì($$$%±•Ðè€ô5…Ñ ¹½Ì Ø€¤€¨Èì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  à°€À°è€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$$$¼¼Í•½¹Ù•ÉÑ•à(($$$%Ø€ô€ € ¨€¬€Ä€¤€¼‘¥Ù¥Í¥½¹Ì€¤€¨€ 5…Ñ ¹A$€¨€È€¤ì(($$$%à€ô5…Ñ ¹Í¥¸ Ø€¤€¨Èì($$$%è€ô5…Ñ ¹½Ì Ø€¤€¨Èì(($$$%Ù•ÉÑ¥•Ì¹ÁÕÍ  à°€À°è€¤ì($$$%½±½ÉÌ¹ÁÕÍ  ½±½È¹È°½±½È¹œ°½±½È¹ˆ€¤ì(($$%ô(($%ô(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A½±…ÉÉ¥‘!•±Á•Èœì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()½¹ÍÐ}ØÄ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ØÈ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}ØÌ€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì()±…ÍÌ¥É•Ñ¥½¹…±1¥¡Ñ!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì((%½¹ÍÑÉÕÑ½È ±¥¡Ð°Í¥é”°½±½È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹±¥¡Ð€ô±¥¡Ðì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô±¥¡Ð¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹½±½È€ô½±½Èì(($%Ñ¡¥Ì¹ÑåÁ”€ô€¥É•Ñ¥½¹…±1¥¡Ñ!•±Á•Èœì(($%¥˜€ Í¥é”€ôôôÕ¹‘•™¥¹•€¤Í¥é”€ô€Äì(($%±•Ð•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” l($$$´Í¥é”°Í¥é”°€À°($$%Í¥é”°Í¥é”°€À°($$%Í¥é”°€´Í¥é”°€À°($$$´Í¥é”°€´Í¥é”°€À°($$$´Í¥é”°Í¥é”°€À($%t°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì™½œè™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%Ñ¡¥Ì¹±¥¡ÑA±…¹”€ô¹•Ü1¥¹” •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹±¥¡ÑA±…¹”€¤ì(($%•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” l€À°€À°€À°€À°€À°€Ät°€Ì€¤€¤ì(($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”€ô¹•Ü1¥¹” •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”€¤ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô((%ÕÁ‘…Ñ” ¤ì(($%Ñ¡¥Ì¹±¥¡Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì($%Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹ÕÁ‘…Ñ•]½É±‘5…ÑÉ¥à ÑÉÕ”°™…±Í”€¤ì(($%}ØÄ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹µ…ÑÉ¥á]½É±€¤ì($%}ØÈ¹Í•ÑÉ½µ5…ÑÉ¥áA½Í¥Ñ¥½¸ Ñ¡¥Ì¹±¥¡Ð¹Ñ…É•Ð¹µ…ÑÉ¥á]½É±€¤ì($%}ØÌ¹ÍÕ‰Y•Ñ½ÉÌ }ØÈ°}ØÄ€¤ì(($%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹±½½­Ð }ØÈ€¤ì(($%¥˜€ Ñ¡¥Ì¹½±½È€„ôôÕ¹‘•™¥¹•€¤ì(($$%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì($$%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð Ñ¡¥Ì¹½±½È€¤ì(($%ô•±Í”ì(($$%Ñ¡¥Ì¹±¥¡ÑA±…¹”¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì($$%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹µ…Ñ•É¥…°¹½±½È¹½Áä Ñ¡¥Ì¹±¥¡Ð¹½±½È€¤ì(($%ô(($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹±½½­Ð }ØÈ€¤ì($%Ñ¡¥Ì¹Ñ…É•Ñ1¥¹”¹Í…±”¹è€ô}ØÌ¹±•¹Ñ  ¤ì((%ô()ô()½¹ÍÐ}Ù•Ñ½È€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)½¹ÍÐ}…µ•É„€ô€¼©}}AUI}|¨¼¹•Ü…µ•É„ ¤ì((¼¨¨(€¨$´Í¡½ÝÌ™ÉÕÍÑÕ´°±¥¹”½˜Í¥¡Ð…¹ÕÀ½˜Ñ¡”…µ•É„(€¨$´ÍÕ¥Ñ…‰±”™½È™…ÍÐÕÁ‘…Ñ•Ì(€¨€$´‰…Í•½¸™ÉÕÍÑÕ´Ù¥ÍÕ…±¥é…Ñ¥½¸¥¸±¥¡Ñ°¹©ÌÍ¡…‘½Ýµ…À•á…µÁ±”(€¨$%¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½•Ù…¹Ü½±¥¡Ñ°¹©Ì½‰±½ˆ½µ…ÍÑ•È½Ñ•ÍÑÌ½Í¡…‘½Ýµ…À¹¡Ñµ°(€¨¼()±…ÍÌ…µ•É…!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì((%½¹ÍÑÉÕÑ½È …µ•É„€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè€Áá™™™™™˜°Ù•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ômtì($%½¹ÍÐ½±½ÉÌ€ômtì(($%½¹ÍÐÁ½¥¹Ñ5…À€ôíôì(($$¼¼¹•…È(($%…‘‘1¥¹” €¸Äœ°€¸Èœ€¤ì($%…‘‘1¥¹” €¸Èœ°€¸Ðœ€¤ì($%…‘‘1¥¹” €¸Ðœ°€¸Ìœ€¤ì($%…‘‘1¥¹” €¸Ìœ°€¸Äœ€¤ì(($$¼¼™…È(($%…‘‘1¥¹” €˜Äœ°€˜Èœ€¤ì($%…‘‘1¥¹” €˜Èœ°€˜Ðœ€¤ì($%…‘‘1¥¹” €˜Ðœ°€˜Ìœ€¤ì($%…‘‘1¥¹” €˜Ìœ°€˜Äœ€¤ì(($$¼¼Í¥‘•Ì(($%…‘‘1¥¹” €¸Äœ°€˜Äœ€¤ì($%…‘‘1¥¹” €¸Èœ°€˜Èœ€¤ì($%…‘‘1¥¹” €¸Ìœ°€˜Ìœ€¤ì($%…‘‘1¥¹” €¸Ðœ°€˜Ðœ€¤ì(($$¼¼½¹”(($%…‘‘1¥¹” €Àœ°€¸Äœ€¤ì($%…‘‘1¥¹” €Àœ°€¸Èœ€¤ì($%…‘‘1¥¹” €Àœ°€¸Ìœ€¤ì($%…‘‘1¥¹” €Àœ°€¸Ðœ€¤ì(($$¼¼ÕÀ(($%…‘‘1¥¹” €ÔÄœ°€ÔÈœ€¤ì($%…‘‘1¥¹” €ÔÈœ°€ÔÌœ€¤ì($%…‘‘1¥¹” €ÔÌœ°€ÔÄœ€¤ì(($$¼¼Ñ…É•Ð(($%…‘‘1¥¹” €Œœ°€Ðœ€¤ì($%…‘‘1¥¹” €Àœ°€Œœ€¤ì(($$¼¼É½ÍÌ(($%…‘‘1¥¹” €¸Äœ°€¸Èœ€¤ì($%…‘‘1¥¹” €¸Ìœ°€¸Ðœ€¤ì(($%…‘‘1¥¹” €˜Äœ°€˜Èœ€¤ì($%…‘‘1¥¹” €˜Ìœ°€˜Ðœ€¤ì(($%™Õ¹Ñ¥½¸…‘‘1¥¹” „°ˆ€¤ì(($$%…‘‘A½¥¹Ð „€¤ì($$%…‘‘A½¥¹Ð ˆ€¤ì(($%ô(($%™Õ¹Ñ¥½¸…‘‘A½¥¹Ð ¥€¤ì(($$%Ù•ÉÑ¥•Ì¹ÁÕÍ  €À°€À°€À€¤ì($$%½±½ÉÌ¹ÁÕÍ  €À°€À°€À€¤ì(($$%¥˜€ Á½¥¹Ñ5…Ál¥t€ôôôÕ¹‘•™¥¹•€¤ì(($$$%Á½¥¹Ñ5…Ál¥t€ômtì(($$%ô(($$%Á½¥¹Ñ5…Ál¥t¹ÁÕÍ  € Ù•ÉÑ¥•Ì¹±•¹Ñ €¼€Ì€¤€´€Ä€¤ì(($%ô(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€…µ•É…!•±Á•Èœì(($%Ñ¡¥Ì¹…µ•É„€ô…µ•É„ì($%¥˜€ Ñ¡¥Ì¹…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à€¤Ñ¡¥Ì¹…µ•É„¹ÕÁ‘…Ñ•AÉ½©•Ñ¥½¹5…ÑÉ¥à ¤ì(($%Ñ¡¥Ì¹µ…ÑÉ¥à€ô…µ•É„¹µ…ÑÉ¥á]½É±ì($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹Á½¥¹Ñ5…À€ôÁ½¥¹Ñ5…Àì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì(($$¼¼½±½ÉÌ(($%½¹ÍÐ½±½ÉÉÕÍÑÕ´€ô¹•Ü½±½È €Áá™™…„ÀÀ€¤ì($%½¹ÍÐ½±½É½¹”€ô¹•Ü½±½È €Áá™˜ÀÀÀÀ€¤ì($%½¹ÍÐ½±½ÉUÀ€ô¹•Ü½±½È €ÁàÀÁ……™˜€¤ì($%½¹ÍÐ½±½ÉQ…É•Ð€ô¹•Ü½±½È €Áá™™™™™˜€¤ì($%½¹ÍÐ½±½ÉÉ½ÍÌ€ô¹•Ü½±½È €ÁàÌÌÌÌÌÌ€¤ì(($%Ñ¡¥Ì¹Í•Ñ½±½ÉÌ ½±½ÉÉÕÍÑÕ´°½±½É½¹”°½±½ÉUÀ°½±½ÉQ…É•Ð°½±½ÉÉ½ÍÌ€¤ì((%ô((%Í•Ñ½±½ÉÌ ™ÉÕÍÑÕ´°½¹”°ÕÀ°Ñ…É•Ð°É½ÍÌ€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì(($%½¹ÍÐ½±½ÉÑÑÉ¥‰ÕÑ”€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ€¤ì(($$¼¼¹•…È(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €À°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ä°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ä°¸È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €È°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ì°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸È°¸Ð($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ð°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ô°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ð°¸Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ø°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ü°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ì°¸Ä(($$¼¼™…È(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €à°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ä°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜Ä°˜È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÀ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÄ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜È°˜Ð($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÈ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÌ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜Ð°˜Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÐ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÔ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼˜Ì°˜Ä(($$¼¼Í¥‘•Ì(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄØ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÄÜ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ä°˜Ä($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Äà°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ää°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸È°˜È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÀ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÄ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ì°˜Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÈ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÌ°™ÉÕÍÑÕ´¹È°™ÉÕÍÑÕ´¹œ°™ÉÕÍÑÕ´¹ˆ€¤ì€¼¼¸Ð°˜Ð(($$¼¼½¹”(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÐ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÔ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸Ä($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈØ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÈÜ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Èà°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Èä°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸Ì($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÀ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÄ°½¹”¹È°½¹”¹œ°½¹”¹ˆ€¤ì€¼¼À°¸Ð(($$¼¼ÕÀ(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÈ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÌ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì€¼¼ÔÄ°ÔÈ($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÐ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÔ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì€¼¼ÔÈ°ÔÌ($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌØ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÌÜ°ÕÀ¹È°ÕÀ¹œ°ÕÀ¹ˆ€¤ì€¼¼ÔÌ°ÔÄ(($$¼¼Ñ…É•Ð(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ìà°Ñ…É•Ð¹È°Ñ…É•Ð¹œ°Ñ…É•Ð¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ìä°Ñ…É•Ð¹È°Ñ…É•Ð¹œ°Ñ…É•Ð¹ˆ€¤ì€¼¼Œ°Ð($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÀ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÄ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼À°Œ(($$¼¼É½ÍÌ(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÈ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÌ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼¸Ä°¸È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÐ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÔ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼¸Ì°¸Ð(($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐØ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €ÐÜ°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼˜Ä°˜È($%½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ðà°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì½±½ÉÑÑÉ¥‰ÕÑ”¹Í•Ñaeh €Ðä°É½ÍÌ¹È°É½ÍÌ¹œ°É½ÍÌ¹ˆ€¤ì€¼¼˜Ì°˜Ð(($%½±½ÉÑÑÉ¥‰ÕÑ”¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%ÕÁ‘…Ñ” ¤ì(($%½¹ÍÐ•½µ•ÑÉä€ôÑ¡¥Ì¹•½µ•ÑÉäì($%½¹ÍÐÁ½¥¹Ñ5…À€ôÑ¡¥Ì¹Á½¥¹Ñ5…Àì(($%½¹ÍÐÜ€ô€Ä° €ô€Äì(($$¼¼Ý”¹••©ÕÍÐ…µ•É„ÁÉ½©•Ñ¥½¸µ…ÑÉ¥à¥¹Ù•ÉÍ”($$¼¼Ý½É±µ…ÑÉ¥àµÕÍÐ‰”¥‘•¹Ñ¥Ñä(($%}…µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥á%¹Ù•ÉÍ”¹½Áä Ñ¡¥Ì¹…µ•É„¹ÁÉ½©•Ñ¥½¹5…ÑÉ¥á%¹Ù•ÉÍ”€¤ì(($$¼¼•¹Ñ•È€¼Ñ…É•Ð(($%Í•ÑA½¥¹Ð €Œœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€À°€´€Ä€¤ì($%Í•ÑA½¥¹Ð €Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€À°€Ä€¤ì(($$¼¼¹•…È(($%Í•ÑA½¥¹Ð €¸Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€´ °€´€Ä€¤ì($%Í•ÑA½¥¹Ð €¸Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€´ °€´€Ä€¤ì($%Í•ÑA½¥¹Ð €¸Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü° °€´€Ä€¤ì($%Í•ÑA½¥¹Ð €¸Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü° °€´€Ä€¤ì(($$¼¼™…È(($%Í•ÑA½¥¹Ð €˜Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€´ °€Ä€¤ì($%Í•ÑA½¥¹Ð €˜Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€´ °€Ä€¤ì($%Í•ÑA½¥¹Ð €˜Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü° °€Ä€¤ì($%Í•ÑA½¥¹Ð €˜Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü° °€Ä€¤ì(($$¼¼ÕÀ(($%Í•ÑA½¥¹Ð €ÔÄœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü€¨€À¸Ü° €¨€Ä¸Ä°€´€Ä€¤ì($%Í•ÑA½¥¹Ð €ÔÈœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü€¨€À¸Ü° €¨€Ä¸Ä°€´€Ä€¤ì($%Í•ÑA½¥¹Ð €ÔÌœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À° €¨€È°€´€Ä€¤ì(($$¼¼É½ÍÌ(($%Í•ÑA½¥¹Ð €˜Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€À°€Ä€¤ì($%Í•ÑA½¥¹Ð €˜Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€À°€Ä€¤ì($%Í•ÑA½¥¹Ð €˜Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€´ °€Ä€¤ì($%Í•ÑA½¥¹Ð €˜Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À° °€Ä€¤ì(($%Í•ÑA½¥¹Ð €¸Äœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€´Ü°€À°€´€Ä€¤ì($%Í•ÑA½¥¹Ð €¸Èœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°Ü°€À°€´€Ä€¤ì($%Í•ÑA½¥¹Ð €¸Ìœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À°€´ °€´€Ä€¤ì($%Í•ÑA½¥¹Ð €¸Ðœ°Á½¥¹Ñ5…À°•½µ•ÑÉä°}…µ•É„°€À° °€´€Ä€¤ì(($%•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô(()™Õ¹Ñ¥½¸Í•ÑA½¥¹Ð Á½¥¹Ð°Á½¥¹Ñ5…À°•½µ•ÑÉä°…µ•É„°à°ä°è€¤ì((%}Ù•Ñ½È¹Í•Ð à°ä°è€¤¹Õ¹ÁÉ½©•Ð …µ•É„€¤ì((%½¹ÍÐÁ½¥¹ÑÌ€ôÁ½¥¹Ñ5…ÁlÁ½¥¹Ðtì((%¥˜€ Á½¥¹ÑÌ€„ôôÕ¹‘•™¥¹•€¤ì(($%½¹ÍÐÁ½Í¥Ñ¥½¸€ô•½µ•ÑÉä¹•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ€¤ì(($%™½È€ ±•Ð¤€ô€À°°€ôÁ½¥¹ÑÌ¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%Á½Í¥Ñ¥½¸¹Í•Ñaeh Á½¥¹ÑÍl¤t°}Ù•Ñ½È¹à°}Ù•Ñ½È¹ä°}Ù•Ñ½È¹è€¤ì(($%ô((%ô()ô()½¹ÍÐ}‰½à€ô€¼©}}AUI}|¨¼¹•Ü	½àÌ ¤ì()±…ÍÌ	½á!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì((%½¹ÍÑÉÕÑ½È ½‰©•Ð°½±½È€ô€Áá™™™˜ÀÀ€¤ì(($%½¹ÍÐ¥¹‘¥•Ì€ô¹•ÜU¥¹ÐÄÙÉÉ…ä l€À°€Ä°€Ä°€È°€È°€Ì°€Ì°€À°€Ð°€Ô°€Ô°€Ø°€Ø°€Ü°€Ü°€Ð°€À°€Ð°€Ä°€Ô°€È°€Ø°€Ì°€Üt€¤ì($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ô¹•Ü±½…ÐÌÉÉÉ…ä €à€¨€Ì€¤ì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•Ñ%¹‘•à ¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹‘¥•Ì°€Ä€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì(($%Ñ¡¥Ì¹½‰©•Ð€ô½‰©•Ðì($%Ñ¡¥Ì¹ÑåÁ”€ô€	½á!•±Á•Èœì(($%Ñ¡¥Ì¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì(($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì((%ô((%ÕÁ‘…Ñ” ½‰©•Ð€¤ì(($%¥˜€ ½‰©•Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$%½¹Í½±”¹Ý…É¸ €Q!I¹	½á!•±Á•Èè€¹ÕÁ‘…Ñ” ¤¡…Ì¹¼±½¹•È…ÉÕµ•¹ÑÌ¸œ€¤ì(($%ô(($%¥˜€ Ñ¡¥Ì¹½‰©•Ð€„ôôÕ¹‘•™¥¹•€¤ì(($$%}‰½à¹Í•ÑÉ½µ=‰©•Ð Ñ¡¥Ì¹½‰©•Ð€¤ì(($%ô(($%¥˜€ }‰½à¹¥ÍµÁÑä ¤€¤É•ÑÕÉ¸ì(($%½¹ÍÐµ¥¸€ô}‰½à¹µ¥¸ì($%½¹ÍÐµ…à€ô}‰½à¹µ…àì(($$¼¨($$$Õ}}}|Ð($$Ä½}}|À½ð($%ð€Ù}}ñ|Ü($$È½}}|Ì¼(($$Àèµ…à¹à°µ…à¹ä°µ…à¹è($$Äèµ¥¸¹à°µ…à¹ä°µ…à¹è($$Èèµ¥¸¹à°µ¥¸¹ä°µ…à¹è($$Ìèµ…à¹à°µ¥¸¹ä°µ…à¹è($$Ðèµ…à¹à°µ…à¹ä°µ¥¸¹è($$Ôèµ¥¸¹à°µ…à¹ä°µ¥¸¹è($$Øèµ¥¸¹à°µ¥¸¹ä°µ¥¸¹è($$Üèµ…à¹à°µ¥¸¹ä°µ¥¸¹è($$¨¼(($%½¹ÍÐÁ½Í¥Ñ¥½¸€ôÑ¡¥Ì¹•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹Á½Í¥Ñ¥½¸ì($%½¹ÍÐ…ÉÉ…ä€ôÁ½Í¥Ñ¥½¸¹…ÉÉ…äì(($%…ÉÉ…ål€Àt€ôµ…à¹àì…ÉÉ…ål€Ät€ôµ…à¹äì…ÉÉ…ål€Èt€ôµ…à¹èì($%…ÉÉ…ål€Ìt€ôµ¥¸¹àì…ÉÉ…ål€Ðt€ôµ…à¹äì…ÉÉ…ål€Ôt€ôµ…à¹èì($%…ÉÉ…ål€Øt€ôµ¥¸¹àì…ÉÉ…ål€Üt€ôµ¥¸¹äì…ÉÉ…ål€àt€ôµ…à¹èì($%…ÉÉ…ål€ät€ôµ…à¹àì…ÉÉ…ål€ÄÀt€ôµ¥¸¹äì…ÉÉ…ål€ÄÄt€ôµ…à¹èì($%…ÉÉ…ål€ÄÈt€ôµ…à¹àì…ÉÉ…ål€ÄÌt€ôµ…à¹äì…ÉÉ…ål€ÄÐt€ôµ¥¸¹èì($%…ÉÉ…ål€ÄÔt€ôµ¥¸¹àì…ÉÉ…ål€ÄØt€ôµ…à¹äì…ÉÉ…ål€ÄÜt€ôµ¥¸¹èì($%…ÉÉ…ål€Äàt€ôµ¥¸¹àì…ÉÉ…ål€Äät€ôµ¥¸¹äì…ÉÉ…ål€ÈÀt€ôµ¥¸¹èì($%…ÉÉ…ål€ÈÄt€ôµ…à¹àì…ÉÉ…ål€ÈÈt€ôµ¥¸¹äì…ÉÉ…ål€ÈÌt€ôµ¥¸¹èì(($%Á½Í¥Ñ¥½¸¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì((%ô((%Í•ÑÉ½µ=‰©•Ð ½‰©•Ð€¤ì(($%Ñ¡¥Ì¹½‰©•Ð€ô½‰©•Ðì($%Ñ¡¥Ì¹ÕÁ‘…Ñ” ¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°É•ÕÉÍ¥Ù”€¤ì(($%Ñ¡¥Ì¹½‰©•Ð€ôÍ½ÕÉ”¹½‰©•Ðì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()±…ÍÌ	½àÍ!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì((%½¹ÍÑÉÕÑ½È ‰½à°½±½È€ô€Áá™™™˜ÀÀ€¤ì(($%½¹ÍÐ¥¹‘¥•Ì€ô¹•ÜU¥¹ÐÄÙÉÉ…ä l€À°€Ä°€Ä°€È°€È°€Ì°€Ì°€À°€Ð°€Ô°€Ô°€Ø°€Ø°€Ü°€Ü°€Ð°€À°€Ð°€Ä°€Ô°€È°€Ø°€Ì°€Üt€¤ì(($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ôl€Ä°€Ä°€Ä°€´€Ä°€Ä°€Ä°€´€Ä°€´€Ä°€Ä°€Ä°€´€Ä°€Ä°€Ä°€Ä°€´€Ä°€´€Ä°€Ä°€´€Ä°€´€Ä°€´€Ä°€´€Ä°€Ä°€´€Ä°€´€Ätì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì(($%•½µ•ÑÉä¹Í•Ñ%¹‘•à ¹•Ü	Õ™™•ÉÑÑÉ¥‰ÕÑ” ¥¹‘¥•Ì°€Ä€¤€¤ì(($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì(($%Ñ¡¥Ì¹‰½à€ô‰½àì(($%Ñ¡¥Ì¹ÑåÁ”€ô€	½àÍ!•±Á•Èœì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%½¹ÍÐ‰½à€ôÑ¡¥Ì¹‰½àì(($%¥˜€ ‰½à¹¥ÍµÁÑä ¤€¤É•ÑÕÉ¸ì(($%‰½à¹•Ñ•¹Ñ•È Ñ¡¥Ì¹Á½Í¥Ñ¥½¸€¤ì(($%‰½à¹•ÑM¥é” Ñ¡¥Ì¹Í…±”€¤ì(($%Ñ¡¥Ì¹Í…±”¹µÕ±Ñ¥Á±åM…±…È €À¸Ô€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()±…ÍÌA±…¹•!•±Á•È•áÑ•¹‘Ì1¥¹”ì((%½¹ÍÑÉÕÑ½È Á±…¹”°Í¥é”€ô€Ä°¡•à€ô€Áá™™™˜ÀÀ€¤ì(($%½¹ÍÐ½±½È€ô¡•àì(($%½¹ÍÐÁ½Í¥Ñ¥½¹Ì€ôl€Ä°€´€Ä°€À°€´€Ä°€Ä°€À°€´€Ä°€´€Ä°€À°€Ä°€Ä°€À°€´€Ä°€Ä°€À°€´€Ä°€´€Ä°€À°€Ä°€´€Ä°€À°€Ä°€Ä°€Àtì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì(($%ÍÕÁ•È •½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€A±…¹•!•±Á•Èœì(($%Ñ¡¥Ì¹Á±…¹”€ôÁ±…¹”ì(($%Ñ¡¥Ì¹Í¥é”€ôÍ¥é”ì(($%½¹ÍÐÁ½Í¥Ñ¥½¹ÌÈ€ôl€Ä°€Ä°€À°€´€Ä°€Ä°€À°€´€Ä°€´€Ä°€À°€Ä°€Ä°€À°€´€Ä°€´€Ä°€À°€Ä°€´€Ä°€Àtì(($%½¹ÍÐ•½µ•ÑÉäÈ€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉäÈ¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Á½Í¥Ñ¥½¹ÌÈ°€Ì€¤€¤ì($%•½µ•ÑÉäÈ¹½µÁÕÑ•	½Õ¹‘¥¹MÁ¡•É” ¤ì(($%Ñ¡¥Ì¹…‘ ¹•Ü5•Í  •½µ•ÑÉäÈ°¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°½Á…¥Ñäè€À¸È°ÑÉ…¹ÍÁ…É•¹ÐèÑÉÕ”°‘•ÁÑ¡]É¥Ñ”è™…±Í”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤€¤ì((%ô((%ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹Í•Ð €À°€À°€À€¤ì(($%Ñ¡¥Ì¹Í…±”¹Í•Ð €À¸Ô€¨Ñ¡¥Ì¹Í¥é”°€À¸Ô€¨Ñ¡¥Ì¹Í¥é”°€Ä€¤ì(($%Ñ¡¥Ì¹±½½­Ð Ñ¡¥Ì¹Á±…¹”¹¹½Éµ…°€¤ì(($%Ñ¡¥Ì¹ÑÉ…¹Í±…Ñ•h €´Ñ¡¥Ì¹Á±…¹”¹½¹ÍÑ…¹Ð€¤ì(($%ÍÕÁ•È¹ÕÁ‘…Ñ•5…ÑÉ¥á]½É± ™½É”€¤ì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹¡¥±‘É•¹l€Àt¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()½¹ÍÐ}…á¥Ì€ô€¼©}}AUI}|¨¼¹•ÜY•Ñ½ÈÌ ¤ì)±•Ð}±¥¹••½µ•ÑÉä°}½¹••½µ•ÑÉäì()±…ÍÌÉÉ½Ý!•±Á•È•áÑ•¹‘Ì=‰©•ÐÍì(($¼¼‘¥È¥Ì…ÍÍÕµ•Ñ¼‰”¹½Éµ…±¥é•((%½¹ÍÑÉÕÑ½È ‘¥È€ô¹•ÜY•Ñ½ÈÌ €À°€À°€Ä€¤°½É¥¥¸€ô¹•ÜY•Ñ½ÈÌ €À°€À°€À€¤°±•¹Ñ €ô€Ä°½±½È€ô€Áá™™™˜ÀÀ°¡•…‘1•¹Ñ €ô±•¹Ñ €¨€À¸È°¡•…‘]¥‘Ñ €ô¡•…‘1•¹Ñ €¨€À¸È€¤ì(($%ÍÕÁ•È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€ÉÉ½Ý!•±Á•Èœì(($%¥˜€ }±¥¹••½µ•ÑÉä€ôôôÕ¹‘•™¥¹•€¤ì(($$%}±¥¹••½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($$%}±¥¹••½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” l€À°€À°€À°€À°€Ä°€Àt°€Ì€¤€¤ì(($$%}½¹••½µ•ÑÉä€ô¹•Üå±¥¹‘•É•½µ•ÑÉä €À°€À¸Ô°€Ä°€Ô°€Ä€¤ì($$%}½¹••½µ•ÑÉä¹ÑÉ…¹Í±…Ñ” €À°€´€À¸Ô°€À€¤ì(($%ô(($%Ñ¡¥Ì¹Á½Í¥Ñ¥½¸¹½Áä ½É¥¥¸€¤ì(($%Ñ¡¥Ì¹±¥¹”€ô¹•Ü1¥¹” }±¥¹••½µ•ÑÉä°¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì($%Ñ¡¥Ì¹±¥¹”¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹±¥¹”€¤ì(($%Ñ¡¥Ì¹½¹”€ô¹•Ü5•Í  }½¹••½µ•ÑÉä°¹•Ü5•Í¡	…Í¥5…Ñ•É¥…° ì½±½Èè½±½È°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤€¤ì($%Ñ¡¥Ì¹½¹”¹µ…ÑÉ¥áÕÑ½UÁ‘…Ñ”€ô™…±Í”ì($%Ñ¡¥Ì¹…‘ Ñ¡¥Ì¹½¹”€¤ì(($%Ñ¡¥Ì¹Í•Ñ¥É•Ñ¥½¸ ‘¥È€¤ì($%Ñ¡¥Ì¹Í•Ñ1•¹Ñ  ±•¹Ñ °¡•…‘1•¹Ñ °¡•…‘]¥‘Ñ €¤ì((%ô((%Í•Ñ¥É•Ñ¥½¸ ‘¥È€¤ì(($$¼¼‘¥È¥Ì…ÍÍÕµ•Ñ¼‰”¹½Éµ…±¥é•(($%¥˜€ ‘¥È¹ä€ø€À¸äääää€¤ì(($$%Ñ¡¥Ì¹ÅÕ…Ñ•É¹¥½¸¹Í•Ð €À°€À°€À°€Ä€¤ì(($%ô•±Í”¥˜€ ‘¥È¹ä€ð€´€À¸äääää€¤ì(($$%Ñ¡¥Ì¹ÅÕ…Ñ•É¹¥½¸¹Í•Ð €Ä°€À°€À°€À€¤ì(($%ô•±Í”ì(($$%}…á¥Ì¹Í•Ð ‘¥È¹è°€À°€´‘¥È¹à€¤¹¹½Éµ…±¥é” ¤ì(($$%½¹ÍÐÉ…‘¥…¹Ì€ô5…Ñ ¹…½Ì ‘¥È¹ä€¤ì(($$%Ñ¡¥Ì¹ÅÕ…Ñ•É¹¥½¸¹Í•ÑÉ½µá¥Í¹±” }…á¥Ì°É…‘¥…¹Ì€¤ì(($%ô((%ô((%Í•Ñ1•¹Ñ  ±•¹Ñ °¡•…‘1•¹Ñ €ô±•¹Ñ €¨€À¸È°¡•…‘]¥‘Ñ €ô¡•…‘1•¹Ñ €¨€À¸È€¤ì(($%Ñ¡¥Ì¹±¥¹”¹Í…±”¹Í•Ð €Ä°5…Ñ ¹µ…à €À¸ÀÀÀÄ°±•¹Ñ €´¡•…‘1•¹Ñ €¤°€Ä€¤ì€¼¼Í•”€ŒÄÜÐÔà($%Ñ¡¥Ì¹±¥¹”¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì(($%Ñ¡¥Ì¹½¹”¹Í…±”¹Í•Ð ¡•…‘]¥‘Ñ °¡•…‘1•¹Ñ °¡•…‘]¥‘Ñ €¤ì($%Ñ¡¥Ì¹½¹”¹Á½Í¥Ñ¥½¸¹ä€ô±•¹Ñ ì($%Ñ¡¥Ì¹½¹”¹ÕÁ‘…Ñ•5…ÑÉ¥à ¤ì((%ô((%Í•Ñ½±½È ½±½È€¤ì(($%Ñ¡¥Ì¹±¥¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð ½±½È€¤ì($%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹½±½È¹Í•Ð ½±½È€¤ì((%ô((%½Áä Í½ÕÉ”€¤ì(($%ÍÕÁ•È¹½Áä Í½ÕÉ”°™…±Í”€¤ì(($%Ñ¡¥Ì¹±¥¹”¹½Áä Í½ÕÉ”¹±¥¹”€¤ì($%Ñ¡¥Ì¹½¹”¹½Áä Í½ÕÉ”¹½¹”€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹±¥¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹±¥¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹½¹”¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹½¹”¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()±…ÍÌá•Í!•±Á•È•áÑ•¹‘Ì1¥¹•M•µ•¹ÑÌì((%½¹ÍÑÉÕÑ½È Í¥é”€ô€Ä€¤ì(($%½¹ÍÐÙ•ÉÑ¥•Ì€ôl($$$À°€À°€À°%Í¥é”°€À°€À°($$$À°€À°€À°$À°Í¥é”°€À°($$$À°€À°€À°$À°€À°Í¥é”($%tì(($%½¹ÍÐ½±½ÉÌ€ôl($$$Ä°€À°€À°$Ä°€À¸Ø°€À°($$$À°€Ä°€À°$À¸Ø°€Ä°€À°($$$À°€À°€Ä°$À°€À¸Ø°€Ä($%tì(($%½¹ÍÐ•½µ•ÑÉä€ô¹•Ü	Õ™™•É•½µ•ÑÉä ¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €Á½Í¥Ñ¥½¸œ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” Ù•ÉÑ¥•Ì°€Ì€¤€¤ì($%•½µ•ÑÉä¹Í•ÑÑÑÉ¥‰ÕÑ” €½±½Èœ°¹•Ü±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ” ½±½ÉÌ°€Ì€¤€¤ì(($%½¹ÍÐµ…Ñ•É¥…°€ô¹•Ü1¥¹•	…Í¥5…Ñ•É¥…° ìÙ•ÉÑ•á½±½ÉÌèÑÉÕ”°Ñ½¹•5…ÁÁ•è™…±Í”ô€¤ì(($%ÍÕÁ•È •½µ•ÑÉä°µ…Ñ•É¥…°€¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€á•Í!•±Á•Èœì((%ô((%Í•Ñ½±½ÉÌ áá¥Í½±½È°åá¥Í½±½È°éá¥Í½±½È€¤ì(($%½¹ÍÐ½±½È€ô¹•Ü½±½È ¤ì($%½¹ÍÐ…ÉÉ…ä€ôÑ¡¥Ì¹•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹½±½È¹…ÉÉ…äì(($%½±½È¹Í•Ð áá¥Í½±½È€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€À€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€Ì€¤ì(($%½±½È¹Í•Ð åá¥Í½±½È€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€Ø€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€ä€¤ì(($%½±½È¹Í•Ð éá¥Í½±½È€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€ÄÈ€¤ì($%½±½È¹Ñ½ÉÉ…ä …ÉÉ…ä°€ÄÔ€¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹…ÑÑÉ¥‰ÕÑ•Ì¹½±½È¹¹••‘ÍUÁ‘…Ñ”€ôÑÉÕ”ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‘¥ÍÁ½Í” ¤ì(($%Ñ¡¥Ì¹•½µ•ÑÉä¹‘¥ÍÁ½Í” ¤ì($%Ñ¡¥Ì¹µ…Ñ•É¥…°¹‘¥ÍÁ½Í” ¤ì((%ô()ô()±…ÍÌM¡…Á•A…Ñ ì((%½¹ÍÑÉÕÑ½È ¤ì(($%Ñ¡¥Ì¹ÑåÁ”€ô€M¡…Á•A…Ñ œì(($%Ñ¡¥Ì¹½±½È€ô¹•Ü½±½È ¤ì(($%Ñ¡¥Ì¹ÍÕ‰A…Ñ¡Ì€ômtì($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ €ô¹Õ±°ì((%ô((%µ½Ù•Q¼ à°ä€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ €ô¹•ÜA…Ñ  ¤ì($%Ñ¡¥Ì¹ÍÕ‰A…Ñ¡Ì¹ÁÕÍ  Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ €¤ì($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹µ½Ù•Q¼ à°ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%±¥¹•Q¼ à°ä€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹±¥¹•Q¼ à°ä€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÅÕ…‘É…Ñ¥ÕÉÙ•Q¼ …Aà°…Aä°…`°…d€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹ÅÕ…‘É…Ñ¥ÕÉÙ•Q¼ …Aà°…Aä°…`°…d€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%‰•é¥•ÉÕÉÙ•Q¼ …@Åà°…@Åä°…@Éà°…@Éä°…`°…d€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹‰•é¥•ÉÕÉÙ•Q¼ …@Åà°…@Åä°…@Éà°…@Éä°…`°…d€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%ÍÁ±¥¹•Q¡ÉÔ ÁÑÌ€¤ì(($%Ñ¡¥Ì¹ÕÉÉ•¹ÑA…Ñ ¹ÍÁ±¥¹•Q¡ÉÔ ÁÑÌ€¤ì(($%É•ÑÕÉ¸Ñ¡¥Ìì((%ô((%Ñ½M¡…Á•Ì ¥Í\€¤ì(($%™Õ¹Ñ¥½¸Ñ½M¡…Á•Í9½!½±•Ì ¥¹MÕ‰Á…Ñ¡Ì€¤ì(($$%½¹ÍÐÍ¡…Á•Ì€ômtì(($$%™½È€ ±•Ð¤€ô€À°°€ô¥¹MÕ‰Á…Ñ¡Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$$%½¹ÍÐÑµÁA…Ñ €ô¥¹MÕ‰Á…Ñ¡Íl¤tì(($$$%½¹ÍÐÑµÁM¡…Á”€ô¹•ÜM¡…Á” ¤ì($$$%ÑµÁM¡…Á”¹ÕÉÙ•Ì€ôÑµÁA…Ñ ¹ÕÉÙ•Ìì(($$$%Í¡…Á•Ì¹ÁÕÍ  ÑµÁM¡…Á”€¤ì(($$%ô(($$%É•ÑÕÉ¸Í¡…Á•Ìì(($%ô(($%™Õ¹Ñ¥½¸¥ÍA½¥¹Ñ%¹Í¥‘•A½±å½¸ ¥¹AÐ°¥¹A½±å½¸€¤ì(($$%½¹ÍÐÁ½±å1•¸€ô¥¹A½±å½¸¹±•¹Ñ ì(($$$¼¼¥¹AÐ½¸Á½±å½¸½¹Ñ½ÕÈ€ôø¥µµ•‘¥…Ñ”ÍÕ•ÍÌ€€€½È($$$¼¼Ñ½±¥¹œ½˜¥¹Í¥‘”½½ÕÑÍ¥‘”…Ð•Ù•ÉäÍ¥¹±”„¥¹Ñ•ÉÍ•Ñ¥½¸Á½¥¹Ð½˜…¸•‘”($$$¼¼€Ý¥Ñ Ñ¡”¡½É¥é½¹Ñ…°±¥¹”Ñ¡É½Õ ¥¹AÐ°±•™Ð½˜¥¹AÐ($$$¼¼€¹½Ð½Õ¹Ñ¥¹œ±½Ý•Éd•¹‘Á½¥¹ÑÌ½˜•‘•Ì…¹Ý¡½±”•‘•Ì½¸Ñ¡…Ð±¥¹”($$%±•Ð¥¹Í¥‘”€ô™…±Í”ì($$%™½È€ ±•ÐÀ€ôÁ½±å1•¸€´€Ä°Ä€ô€ÀìÄ€ðÁ½±å1•¸ìÀ€ôÄ€¬¬€¤ì(($$$%±•Ð•‘•1½ÝAÐ€ô¥¹A½±å½¹lÀtì($$$%±•Ð•‘•!¥¡AÐ€ô¥¹A½±å½¹lÄtì(($$$%±•Ð•‘•à€ô•‘•!¥¡AÐ¹à€´•‘•1½ÝAÐ¹àì($$$%±•Ð•‘•ä€ô•‘•!¥¡AÐ¹ä€´•‘•1½ÝAÐ¹äì(($$$%¥˜€ 5…Ñ ¹…‰Ì •‘•ä€¤€ø9Õµ‰•È¹AM%1=8€¤ì(($$$$$¼¼¹½ÐÁ…É…±±•°($$$$%¥˜€ •‘•ä€ð€À€¤ì(($$$$$%•‘•1½ÝAÐ€ô¥¹A½±å½¹lÄtì•‘•à€ô€´•‘•àì($$$$$%•‘•!¥¡AÐ€ô¥¹A½±å½¹lÀtì•‘•ä€ô€´•‘•äì(($$$$%ô(($$$$%¥˜€ € ¥¹AÐ¹ä€ð•‘•1½ÝAÐ¹ä€¤ñð€ ¥¹AÐ¹ä€ø•‘•!¥¡AÐ¹ä€¤€¤€$%½¹Ñ¥¹Õ”ì(($$$$%¥˜€ ¥¹AÐ¹ä€ôôô•‘•1½ÝAÐ¹ä€¤ì(($$$$$%¥˜€ ¥¹AÐ¹à€ôôô•‘•1½ÝAÐ¹à€¤$%É•ÑÕÉ¸%ÑÉÕ”ì$$¼¼¥¹AÐ¥Ì½¸½¹Ñ½ÕÈ€ü($$$$$$¼¼½¹Ñ¥¹Õ”ì$$$$¼¼¹¼¥¹Ñ•ÉÍ•Ñ¥½¸½È•‘•1½ÝAÐ€ôø‘½•Í¸Ð½Õ¹Ð€„„„(($$$$%ô•±Í”ì(($$$$$%½¹ÍÐÁ•ÉÁ‘”€ô•‘•ä€¨€ ¥¹AÐ¹à€´•‘•1½ÝAÐ¹à€¤€´•‘•à€¨€ ¥¹AÐ¹ä€´•‘•1½ÝAÐ¹ä€¤ì($$$$$%¥˜€ Á•ÉÁ‘”€ôôô€À€¤$$$%É•ÑÕÉ¸%ÑÉÕ”ì$$¼¼¥¹AÐ¥Ì½¸½¹Ñ½ÕÈ€ü($$$$$%¥˜€ Á•ÉÁ‘”€ð€À€¤€$$$%½¹Ñ¥¹Õ”ì($$$$$%¥¹Í¥‘”€ô€„¥¹Í¥‘”ì$$¼¼ÑÉÕ”¥¹Ñ•ÉÍ•Ñ¥½¸±•™Ð½˜¥¹AÐ(($$$$%ô(($$$%ô•±Í”ì(($$$$$¼¼Á…É…±±•°½È½±±¥¹•…È($$$$%¥˜€ ¥¹AÐ¹ä€„ôô•‘•1½ÝAÐ¹ä€¤€$%½¹Ñ¥¹Õ”ì$$$¼¼Á…É…±±•°($$$$$¼¼•‘”±¥•Ì½¸Ñ¡”Í…µ”¡½É¥é½¹Ñ…°±¥¹”…Ì¥¹AÐ($$$$%¥˜€ € € •‘•!¥¡AÐ¹à€ðô¥¹AÐ¹à€¤€˜˜€ ¥¹AÐ¹à€ðô•‘•1½ÝAÐ¹à€¤€¤ñð($$$$$$€ € •‘•1½ÝAÐ¹à€ðô¥¹AÐ¹à€¤€˜˜€ ¥¹AÐ¹à€ðô•‘•!¥¡AÐ¹à€¤€¤€¤$%É•ÑÕÉ¸%ÑÉÕ”ì$¼¼¥¹AÐèA½¥¹Ð½¸½¹Ñ½ÕÈ€„($$$$$¼¼½¹Ñ¥¹Õ”ì(($$$%ô(($$%ô(($$%É•ÑÕÉ¸%¥¹Í¥‘”ì(($%ô(($%½¹ÍÐ¥Í±½­]¥Í”€ôM¡…Á•UÑ¥±Ì¹¥Í±½­]¥Í”ì(($%½¹ÍÐÍÕ‰A…Ñ¡Ì€ôÑ¡¥Ì¹ÍÕ‰A…Ñ¡Ìì($%¥˜€ ÍÕ‰A…Ñ¡Ì¹±•¹Ñ €ôôô€À€¤É•ÑÕÉ¸mtì(($%±•ÐÍ½±¥°ÑµÁA…Ñ °ÑµÁM¡…Á”ì($%½¹ÍÐÍ¡…Á•Ì€ômtì(($%¥˜€ ÍÕ‰A…Ñ¡Ì¹±•¹Ñ €ôôô€Ä€¤ì(($$%ÑµÁA…Ñ €ôÍÕ‰A…Ñ¡Íl€Àtì($$%ÑµÁM¡…Á”€ô¹•ÜM¡…Á” ¤ì($$%ÑµÁM¡…Á”¹ÕÉÙ•Ì€ôÑµÁA…Ñ ¹ÕÉÙ•Ìì($$%Í¡…Á•Ì¹ÁÕÍ  ÑµÁM¡…Á”€¤ì($$%É•ÑÕÉ¸Í¡…Á•Ìì(($%ô(($%±•Ð¡½±•Í¥ÉÍÐ€ô€„¥Í±½­]¥Í” ÍÕ‰A…Ñ¡Íl€Àt¹•ÑA½¥¹ÑÌ ¤€¤ì($%¡½±•Í¥ÉÍÐ€ô¥Í\€ü€„¡½±•Í¥ÉÍÐ€è¡½±•Í¥ÉÍÐì(($$¼¼½¹Í½±”¹±½œ ‰!½±•Ì™¥ÉÍÐˆ°¡½±•Í¥ÉÍÐ¤ì(($%½¹ÍÐ‰•ÑÑ•ÉM¡…Á•!½±•Ì€ômtì($%½¹ÍÐ¹•ÝM¡…Á•Ì€ômtì($%±•Ð¹•ÝM¡…Á•!½±•Ì€ômtì($%±•Ðµ…¥¹%‘à€ô€Àì($%±•ÐÑµÁA½¥¹ÑÌì(($%¹•ÝM¡…Á•Ílµ…¥¹%‘àt€ôÕ¹‘•™¥¹•ì($%¹•ÝM¡…Á•!½±•Ílµ…¥¹%‘àt€ômtì(($%™½È€ ±•Ð¤€ô€À°°€ôÍÕ‰A…Ñ¡Ì¹±•¹Ñ ì¤€ð°ì¤€¬¬€¤ì(($$%ÑµÁA…Ñ €ôÍÕ‰A…Ñ¡Íl¤tì($$%ÑµÁA½¥¹ÑÌ€ôÑµÁA…Ñ ¹•ÑA½¥¹ÑÌ ¤ì($$%Í½±¥€ô¥Í±½­]¥Í” ÑµÁA½¥¹ÑÌ€¤ì($$%Í½±¥€ô¥Í\€ü€„Í½±¥€èÍ½±¥ì(($$%¥˜€ Í½±¥€¤ì(($$$%¥˜€ € €„¡½±•Í¥ÉÍÐ€¤€˜˜€ ¹•ÝM¡…Á•Ílµ…¥¹%‘àt€¤€¤%µ…¥¹%‘à€¬¬ì(($$$%¹•ÝM¡…Á•Ílµ…¥¹%‘àt€ôìÌè¹•ÜM¡…Á” ¤°ÀèÑµÁA½¥¹ÑÌôì($$$%¹•ÝM¡…Á•Ílµ…¥¹%‘àt¹Ì¹ÕÉÙ•Ì€ôÑµÁA…Ñ ¹ÕÉÙ•Ìì(($$$%¥˜€ ¡½±•Í¥ÉÍÐ€¤%µ…¥¹%‘à€¬¬ì($$$%¹•ÝM¡…Á•!½±•Ílµ…¥¹%‘àt€ômtì(($$$$¼½½¹Í½±”¹±½œ Üœ°¤¤ì(($$%ô•±Í”ì(($$$%¹•ÝM¡…Á•!½±•Ílµ…¥¹%‘àt¹ÁÕÍ  ì èÑµÁA…Ñ °ÀèÑµÁA½¥¹ÑÍl€Àtô€¤ì(($$$$¼½½¹Í½±”¹±½œ Üœ°¤¤ì(($$%ô(($%ô(($$¼¼½¹±ä!½±•Ìü€´øÁÉ½‰…‰±ä…±°M¡…Á•ÌÝ¥Ñ ÝÉ½¹œ½É¥•¹Ñ…Ñ¥½¸($%¥˜€ €„¹•ÝM¡…Á•Íl€Àt€¤%É•ÑÕÉ¸%Ñ½M¡…Á•Í9½!½±•Ì ÍÕ‰A…Ñ¡Ì€¤ì((($%¥˜€ ¹•ÝM¡…Á•Ì¹±•¹Ñ €ø€Ä€¤ì(($$%±•Ð…µ‰¥Õ½ÕÌ€ô™…±Í”ì($$%±•ÐÑ½¡…¹”€ô€Àì(($$%™½È€ ±•ÐÍ%‘à€ô€À°Í1•¸€ô¹•ÝM¡…Á•Ì¹±•¹Ñ ìÍ%‘à€ðÍ1•¸ìÍ%‘à€¬¬€¤ì(($$$%‰•ÑÑ•ÉM¡…Á•!½±•ÍlÍ%‘àt€ômtì(($$%ô(($$%™½È€ ±•ÐÍ%‘à€ô€À°Í1•¸€ô¹•ÝM¡…Á•Ì¹±•¹Ñ ìÍ%‘à€ðÍ1•¸ìÍ%‘à€¬¬€¤ì(($$$%½¹ÍÐÍ¡¼€ô¹•ÝM¡…Á•!½±•ÍlÍ%‘àtì(($$$%™½È€ ±•Ð¡%‘à€ô€Àì¡%‘à€ðÍ¡¼¹±•¹Ñ ì¡%‘à€¬¬€¤ì(($$$$%½¹ÍÐ¡¼€ôÍ¡½l¡%‘àtì($$$$%±•Ð¡½±•}Õ¹…ÍÍ¥¹•€ôÑÉÕ”ì(($$$$%™½È€ ±•ÐÌÉ%‘à€ô€ÀìÌÉ%‘à€ð¹•ÝM¡…Á•Ì¹±•¹Ñ ìÌÉ%‘à€¬¬€¤ì(($$$$$%¥˜€ ¥ÍA½¥¹Ñ%¹Í¥‘•A½±å½¸ ¡¼¹À°¹•ÝM¡…Á•ÍlÌÉ%‘àt¹À€¤€¤ì(($$$$$$%¥˜€ Í%‘à€„ôôÌÉ%‘à€¤%Ñ½¡…¹”€¬¬ì(($$$$$$%¥˜€ ¡½±•}Õ¹…ÍÍ¥¹•€¤ì(($$$$$$$%¡½±•}Õ¹…ÍÍ¥¹•€ô™…±Í”ì($$$$$$$%‰•ÑÑ•ÉM¡…Á•!½±•ÍlÌÉ%‘àt¹ÁÕÍ  ¡¼€¤ì(($$$$$$%ô•±Í”ì(($$$$$$$%…µ‰¥Õ½ÕÌ€ôÑÉÕ”ì(($$$$$$%ô(($$$$$%ô(($$$$%ô(($$$$%¥˜€ ¡½±•}Õ¹…ÍÍ¥¹•€¤ì(($$$$$%‰•ÑÑ•ÉM¡…Á•!½±•ÍlÍ%‘àt¹ÁÕÍ  ¡¼€¤ì(($$$$%ô(($$$%ô(($$%ô(($$%¥˜€ Ñ½¡…¹”€ø€À€˜˜…µ‰¥Õ½ÕÌ€ôôô™…±Í”€¤ì(($$$%¹•ÝM¡…Á•!½±•Ì€ô‰•ÑÑ•ÉM¡…Á•!½±•Ìì(($$%ô(($%ô(($%±•ÐÑµÁ!½±•Ìì(($%™½È€ ±•Ð¤€ô€À°¥°€ô¹•ÝM¡…Á•Ì¹±•¹Ñ ì¤€ð¥°ì¤€¬¬€¤ì(($$%ÑµÁM¡…Á”€ô¹•ÝM¡…Á•Íl¤t¹Ìì($$%Í¡…Á•Ì¹ÁÕÍ  ÑµÁM¡…Á”€¤ì($$%ÑµÁ!½±•Ì€ô¹•ÝM¡…Á•!½±•Íl¤tì(($$%™½È€ ±•Ð¨€ô€À°©°€ôÑµÁ!½±•Ì¹±•¹Ñ ì¨€ð©°ì¨€¬¬€¤ì(($$$%ÑµÁM¡…Á”¹¡½±•Ì¹ÁÕÍ  ÑµÁ!½±•Íl¨t¹ €¤ì(($$%ô(($%ô(($$¼½½¹Í½±”¹±½œ ‰Í¡…Á”ˆ°Í¡…Á•Ì¤ì(($%É•ÑÕÉ¸Í¡…Á•Ìì((%ô()ô()¥˜€ ÑåÁ•½˜}}Q!I}YQ==1M}|€„ôô€Õ¹‘•™¥¹•œ€¤ì((%}}Q!I}YQ==1M}|¹‘¥ÍÁ…Ñ¡Ù•¹Ð ¹•ÜÕÍÑ½µÙ•¹Ð €É•¥ÍÑ•Èœ°ì‘•Ñ…¥°èì($%É•Ù¥Í¥½¸èIY%M%=8°(%ôô€¤€¤ì()ô()¥˜€ ÑåÁ•½˜Ý¥¹‘½Ü€„ôô€Õ¹‘•™¥¹•œ€¤ì((%¥˜€ Ý¥¹‘½Ü¹}}Q!I}|€¤ì(($%½¹Í½±”¹Ý…É¸ €]I9%9è5Õ±Ñ¥Á±”¥¹ÍÑ…¹•Ì½˜Q¡É•”¹©Ì‰•¥¹œ¥µÁ½ÉÑ•¸œ€¤ì((%ô•±Í”ì(($%Ý¥¹‘½Ü¹}}Q!I}|€ôIY%M%=8ì((%ô()ô()•áÁ½ÉÐìM¥±µ¥Q½¹•5…ÁÁ¥¹œ°‘‘ÅÕ…Ñ¥½¸°‘‘=Á•É…Ñ¥½¸°‘‘¥Ñ¥Ù•¹¥µ…Ñ¥½¹	±•¹‘5½‘”°‘‘¥Ñ¥Ù•	±•¹‘¥¹œ°aQ½¹•5…ÁÁ¥¹œ°±Á¡…½Éµ…Ð°±Ý…åÍ½µÁ…É”°±Ý…åÍ•ÁÑ °±Ý…åÍMÑ•¹¥±Õ¹Œ°µ‰¥•¹Ñ1¥¡Ð°¹¥µ…Ñ¥½¹Ñ¥½¸°¹¥µ…Ñ¥½¹±¥À°¹¥µ…Ñ¥½¹1½…‘•È°¹¥µ…Ñ¥½¹5¥á•È°¹¥µ…Ñ¥½¹=‰©•ÑÉ½ÕÀ°¹¥µ…Ñ¥½¹UÑ¥±Ì°ÉÕÉÙ”°ÉÉ…å…µ•É„°ÉÉ½Ý!•±Á•È°ÑÑ…¡•‘	¥¹‘5½‘”°Õ‘¥¼°Õ‘¥½¹…±åÍ•È°Õ‘¥½½¹Ñ•áÐ°Õ‘¥½1¥ÍÑ•¹•È°Õ‘¥½1½…‘•È°á•Í!•±Á•È°	…­M¥‘”°	…Í¥•ÁÑ¡A…­¥¹œ°	…Í¥M¡…‘½Ý5…À°	…Ñ¡•‘5•Í °	½¹”°	½½±•…¹-•å™É…µ•QÉ…¬°	½àÈ°	½àÌ°	½àÍ!•±Á•È°	½á•½µ•ÑÉä°	½á!•±Á•È°	Õ™™•ÉÑÑÉ¥‰ÕÑ”°	Õ™™•É•½µ•ÑÉä°	Õ™™•É•½µ•ÑÉå1½…‘•È°	åÑ•QåÁ”°…¡”°…µ•É„°…µ•É…!•±Á•È°…¹Ù…ÍQ•áÑÕÉ”°…ÁÍÕ±••½µ•ÑÉä°…ÑµÕ±±I½µÕÉÙ”Ì°¥¹•½¹Q½¹•5…ÁÁ¥¹œ°¥É±••½µ•ÑÉä°±…µÁQ½‘•]É…ÁÁ¥¹œ°±½¬°½±½È°½±½É-•å™É…µ•QÉ…¬°½±½É5…¹…•µ•¹Ð°½µÁÉ•ÍÍ•‘ÉÉ…åQ•áÑÕÉ”°½µÁÉ•ÍÍ•‘Õ‰•Q•áÑÕÉ”°½µÁÉ•ÍÍ•‘Q•áÑÕÉ”°½µÁÉ•ÍÍ•‘Q•áÑÕÉ•1½…‘•È°½¹••½µ•ÑÉä°½¹ÍÑ…¹Ñ±Á¡……Ñ½È°½¹ÍÑ…¹Ñ½±½É…Ñ½È°Õ‰•…µ•É„°Õ‰•I•™±•Ñ¥½¹5…ÁÁ¥¹œ°Õ‰•I•™É…Ñ¥½¹5…ÁÁ¥¹œ°Õ‰•Q•áÑÕÉ”°Õ‰•Q•áÑÕÉ•1½…‘•È°Õ‰•UYI•™±•Ñ¥½¹5…ÁÁ¥¹œ°Õ‰¥	•é¥•ÉÕÉÙ”°Õ‰¥	•é¥•ÉÕÉÙ”Ì°Õ‰¥%¹Ñ•ÉÁ½±…¹Ð°Õ±±…•	…¬°Õ±±…•É½¹Ð°Õ±±…•É½¹Ñ	…¬°Õ±±…•9½¹”°ÕÉÙ”°ÕÉÙ•A…Ñ °ÕÍÑ½µ	±•¹‘¥¹œ°ÕÍÑ½µQ½¹•5…ÁÁ¥¹œ°å±¥¹‘•É•½µ•ÑÉä°å±¥¹‘É¥…°°…Ñ„ÍQ•áÑÕÉ”°…Ñ…ÉÉ…åQ•áÑÕÉ”°…Ñ…Q•áÑÕÉ”°…Ñ…Q•áÑÕÉ•1½…‘•È°…Ñ…UÑ¥±Ì°•É•µ•¹ÑMÑ•¹¥±=À°•É•µ•¹Ñ]É…ÁMÑ•¹¥±=À°•™…Õ±Ñ1½…‘¥¹5…¹…•È°•ÁÑ¡½Éµ…Ð°•ÁÑ¡MÑ•¹¥±½Éµ…Ð°•ÁÑ¡Q•áÑÕÉ”°•Ñ…¡•‘	¥¹‘5½‘”°¥É•Ñ¥½¹…±1¥¡Ð°¥É•Ñ¥½¹…±1¥¡Ñ!•±Á•È°¥ÍÉ•Ñ•%¹Ñ•ÉÁ½±…¹Ð°¥ÍÁ±…å@Í½±½ÉMÁ…”°½‘•…¡•‘É½¹•½µ•ÑÉä°½Õ‰±•M¥‘”°ÍÑ±Á¡……Ñ½È°ÍÑ½±½É…Ñ½È°å¹…µ¥½ÁåUÍ…”°å¹…µ¥É…ÝUÍ…”°å¹…µ¥I•…‘UÍ…”°‘•Í•½µ•ÑÉä°±±¥ÁÍ•ÕÉÙ”°ÅÕ…±½µÁ…É”°ÅÕ…±•ÁÑ °ÅÕ…±MÑ•¹¥±Õ¹Œ°ÅÕ¥É•Ñ…¹Õ±…ÉI•™±•Ñ¥½¹5…ÁÁ¥¹œ°ÅÕ¥É•Ñ…¹Õ±…ÉI•™É…Ñ¥½¹5…ÁÁ¥¹œ°Õ±•È°Ù•¹Ñ¥ÍÁ…Ñ¡•È°áÑÉÕ‘••½µ•ÑÉä°¥±•1½…‘•È°±½…ÐÄÙ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°±½…ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°±½…ÐØÑ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°±½…ÑQåÁ”°½œ°½áÀÈ°É…µ•‰Õ™™•ÉQ•áÑÕÉ”°É½¹ÑM¥‘”°ÉÕÍÑÕ´°1	Õ™™•ÉÑÑÉ¥‰ÕÑ”°1M0Ä°1M0Ì°É•…Ñ•É½µÁ…É”°É•…Ñ•É•ÁÑ °É•…Ñ•ÉÅÕ…±½µÁ…É”°É•…Ñ•ÉÅÕ…±•ÁÑ °É•…Ñ•ÉÅÕ…±MÑ•¹¥±Õ¹Œ°É•…Ñ•ÉMÑ•¹¥±Õ¹Œ°É¥‘!•±Á•È°É½ÕÀ°!…±™±½…ÑQåÁ”°!•µ¥ÍÁ¡•É•1¥¡Ð°!•µ¥ÍÁ¡•É•1¥¡Ñ!•±Á•È°%½Í…¡•‘É½¹•½µ•ÑÉä°%µ…•	¥Ñµ…Á1½…‘•È°%µ…•1½…‘•È°%µ…•UÑ¥±Ì°%¹É•µ•¹ÑMÑ•¹¥±=À°%¹É•µ•¹Ñ]É…ÁMÑ•¹¥±=À°%¹ÍÑ…¹•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹ÍÑ…¹•‘	Õ™™•É•½µ•ÑÉä°%¹ÍÑ…¹•‘%¹Ñ•É±•…Ù•‘	Õ™™•È°%¹ÍÑ…¹•‘5•Í °%¹ÐÄÙ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹Ðá	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹ÑQåÁ”°%¹Ñ•É±•…Ù•‘	Õ™™•È°%¹Ñ•É±•…Ù•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”°%¹Ñ•ÉÁ½±…¹Ð°%¹Ñ•ÉÁ½±…Ñ•¥ÍÉ•Ñ”°%¹Ñ•ÉÁ½±…Ñ•1¥¹•…È°%¹Ñ•ÉÁ½±…Ñ•Mµ½½Ñ °%¹Ù•ÉÑMÑ•¹¥±=À°-••ÁMÑ•¹¥±=À°-•å™É…µ•QÉ…¬°1=°1…Ñ¡••½µ•ÑÉä°1…å•ÉÌ°1•ÍÍ½µÁ…É”°1•ÍÍ•ÁÑ °1•ÍÍÅÕ…±½µÁ…É”°1•ÍÍÅÕ…±•ÁÑ °1•ÍÍÅÕ…±MÑ•¹¥±Õ¹Œ°1•ÍÍMÑ•¹¥±Õ¹Œ°1¥¡Ð°1¥¡ÑAÉ½‰”°1¥¹”°1¥¹”Ì°1¥¹•	…Í¥5…Ñ•É¥…°°1¥¹•ÕÉÙ”°1¥¹•ÕÉÙ”Ì°1¥¹•…Í¡•‘5…Ñ•É¥…°°1¥¹•1½½À°1¥¹•M•µ•¹ÑÌ°1¥¹•…É¥ÍÁ±…å@Í½±½ÉMÁ…”°1¥¹•…É¹½‘¥¹œ°1¥¹•…É¥±Ñ•È°1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð°1¥¹•…É5¥Á5…Á1¥¹•…É¥±Ñ•È°1¥¹•…É5¥Á5…Á9•…É•ÍÑ¥±Ñ•È°1¥¹•…É5¥Áµ…Á1¥¹•…É¥±Ñ•È°1¥¹•…É5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°1¥¹•…ÉMI	½±½ÉMÁ…”°1¥¹•…ÉQ½¹•5…ÁÁ¥¹œ°1¥¹•…ÉQÉ…¹Í™•È°1½…‘•È°1½…‘•ÉUÑ¥±Ì°1½…‘¥¹5…¹…•È°1½½Á=¹”°1½½ÁA¥¹A½¹œ°1½½ÁI•Á•…Ð°1Õµ¥¹…¹•±Á¡…½Éµ…Ð°1Õµ¥¹…¹•½Éµ…Ð°5=UM°5…Ñ•É¥…°°5…Ñ•É¥…±1½…‘•È°5…Ñ¡UÑ¥±Ì°5…ÑÉ¥àÌ°5…ÑÉ¥àÐ°5…áÅÕ…Ñ¥½¸°5•Í °5•Í¡	…Í¥5…Ñ•É¥…°°5•Í¡•ÁÑ¡5…Ñ•É¥…°°5•Í¡¥ÍÑ…¹•5…Ñ•É¥…°°5•Í¡1…µ‰•ÉÑ5…Ñ•É¥…°°5•Í¡5…Ñ…Á5…Ñ•É¥…°°5•Í¡9½Éµ…±5…Ñ•É¥…°°5•Í¡A¡½¹5…Ñ•É¥…°°5•Í¡A¡åÍ¥…±5…Ñ•É¥…°°5•Í¡MÑ…¹‘…É‘5…Ñ•É¥…°°5•Í¡Q½½¹5…Ñ•É¥…°°5¥¹ÅÕ…Ñ¥½¸°5¥ÉÉ½É•‘I•Á•…Ñ]É…ÁÁ¥¹œ°5¥á=Á•É…Ñ¥½¸°5Õ±Ñ¥Á±å	±•¹‘¥¹œ°5Õ±Ñ¥Á±å=Á•É…Ñ¥½¸°9•…É•ÍÑ¥±Ñ•È°9•…É•ÍÑ5¥Á5…Á1¥¹•…É¥±Ñ•È°9•…É•ÍÑ5¥Á5…Á9•…É•ÍÑ¥±Ñ•È°9•…É•ÍÑ5¥Áµ…Á1¥¹•…É¥±Ñ•È°9•…É•ÍÑ5¥Áµ…Á9•…É•ÍÑ¥±Ñ•È°9•Ù•É½µÁ…É”°9•Ù•É•ÁÑ °9•Ù•ÉMÑ•¹¥±Õ¹Œ°9½	±•¹‘¥¹œ°9½½±½ÉMÁ…”°9½Q½¹•5…ÁÁ¥¹œ°9½Éµ…±¹¥µ…Ñ¥½¹	±•¹‘5½‘”°9½Éµ…±	±•¹‘¥¹œ°9½ÑÅÕ…±½µÁ…É”°9½ÑÅÕ…±•ÁÑ °9½ÑÅÕ…±MÑ•¹¥±Õ¹Œ°9Õµ‰•É-•å™É…µ•QÉ…¬°=‰©•ÐÍ°=‰©•Ñ1½…‘•È°=‰©•ÑMÁ…•9½Éµ…±5…À°=Ñ…¡•‘É½¹•½µ•ÑÉä°=¹•…Ñ½È°=¹•5¥¹ÕÍ½¹ÍÑ…¹Ñ±Á¡……Ñ½È°=¹•5¥¹ÕÍ½¹ÍÑ…¹Ñ½±½É…Ñ½È°=¹•5¥¹ÕÍÍÑ±Á¡……Ñ½È°=¹•5¥¹ÕÍÍÑ½±½É…Ñ½È°=¹•5¥¹ÕÍMÉ±Á¡……Ñ½È°=¹•5¥¹ÕÍMÉ½±½É…Ñ½È°=ÉÑ¡½É…Á¡¥…µ•É„°@ÍAÉ¥µ…É¥•Ì°AM¡…‘½Ý5…À°AM½™ÑM¡…‘½Ý5…À°A5I5•¹•É…Ñ½È°A…Ñ °A•ÉÍÁ•Ñ¥Ù•…µ•É„°A±…¹”°A±…¹••½µ•ÑÉä°A±…¹•!•±Á•È°A½¥¹Ñ1¥¡Ð°A½¥¹Ñ1¥¡Ñ!•±Á•È°A½¥¹ÑÌ°A½¥¹ÑÍ5…Ñ•É¥…°°A½±…ÉÉ¥‘!•±Á•È°A½±å¡•‘É½¹•½µ•ÑÉä°A½Í¥Ñ¥½¹…±Õ‘¥¼°AÉ½Á•ÉÑå	¥¹‘¥¹œ°AÉ½Á•ÉÑå5¥á•È°EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”°EÕ…‘É…Ñ¥	•é¥•ÉÕÉÙ”Ì°EÕ…Ñ•É¹¥½¸°EÕ…Ñ•É¹¥½¹-•å™É…µ•QÉ…¬°EÕ…Ñ•É¹¥½¹1¥¹•…É%¹Ñ•ÉÁ½±…¹Ð°I}I9}IQÉ}½Éµ…Ð°I}IQÅ}½Éµ…Ð°IY%M%=8°I	•ÁÑ¡A…­¥¹œ°I	½Éµ…Ð°I	%¹Ñ••É½Éµ…Ð°I	}MQ|ÄÁàÄÁ}½Éµ…Ð°I	}MQ|ÄÁàÕ}½Éµ…Ð°I	}MQ|ÄÁàÙ}½Éµ…Ð°I	}MQ|ÄÁàá}½Éµ…Ð°I	}MQ|ÄÉàÄÁ}½Éµ…Ð°I	}MQ|ÄÉàÄÉ}½Éµ…Ð°I	}MQ|ÑàÑ}½Éµ…Ð°I	}MQ|ÕàÑ}½Éµ…Ð°I	}MQ|ÕàÕ}½Éµ…Ð°I	}MQ|ÙàÕ}½Éµ…Ð°I	}MQ|ÙàÙ}½Éµ…Ð°I	}MQ|áàÕ}½Éµ…Ð°I	}MQ|áàÙ}½Éµ…Ð°I	}MQ|áàá}½Éµ…Ð°I	}	AQ}½Éµ…Ð°I	}QÉ}}½Éµ…Ð°I	}AYIQ|É	AAXÅ}½Éµ…Ð°I	}AYIQ|Ñ	AAXÅ}½Éµ…Ð°I	}LÍQ}aPÅ}½Éµ…Ð°I	}LÍQ}aPÍ}½Éµ…Ð°I	}LÍQ}aPÕ}½Éµ…Ð°I	}	AQ}M%9}½Éµ…Ð°I	}	AQ}U9M%9}½Éµ…Ð°I	}QÅ}½Éµ…Ð°I	}QÉ}½Éµ…Ð°I	}AYIQ|É	AAXÅ}½Éµ…Ð°I	}AYIQ|Ñ	AAXÅ}½Éµ…Ð°I	}LÍQ}aPÅ}½Éµ…Ð°I½Éµ…Ð°I%¹Ñ••É½Éµ…Ð°I…ÝM¡…‘•É5…Ñ•É¥…°°I…ä°I…å…ÍÑ•È°I•ŒÜÀåAÉ¥µ…É¥•Ì°I•ÑÉ•…1¥¡Ð°I•‘½Éµ…Ð°I•‘%¹Ñ••É½Éµ…Ð°I•¥¹¡…É‘Q½¹•5…ÁÁ¥¹œ°I•¹‘•ÉQ…É•Ð°I•Á•…Ñ]É…ÁÁ¥¹œ°I•Á±…•MÑ•¹¥±=À°I•Ù•ÉÍ•MÕ‰ÑÉ…ÑÅÕ…Ñ¥½¸°I¥¹•½µ•ÑÉä°M%9}I}I9}IQÉ}½Éµ…Ð°M%9}I}IQÅ}½Éµ…Ð°MI	½±½ÉMÁ…”°MI	QÉ…¹Í™•È°M•¹”°M¡…‘•É¡Õ¹¬°M¡…‘•É1¥ˆ°M¡…‘•É5…Ñ•É¥…°°M¡…‘½Ý5…Ñ•É¥…°°M¡…Á”°M¡…Á••½µ•ÑÉä°M¡…Á•A…Ñ °M¡…Á•UÑ¥±Ì°M¡½ÉÑQåÁ”°M­•±•Ñ½¸°M­•±•Ñ½¹!•±Á•È°M­¥¹¹•‘5•Í °M½ÕÉ”°MÁ¡•É”°MÁ¡•É••½µ•ÑÉä°MÁ¡•É¥…°°MÁ¡•É¥…±!…Éµ½¹¥ÌÌ°MÁ±¥¹•ÕÉÙ”°MÁ½Ñ1¥¡Ð°MÁ½Ñ1¥¡Ñ!•±Á•È°MÁÉ¥Ñ”°MÁÉ¥Ñ•5…Ñ•É¥…°°MÉ±Á¡……Ñ½È°MÉ±Á¡…M…ÑÕÉ…Ñ•…Ñ½È°MÉ½±½É…Ñ½È°MÑ…Ñ¥½ÁåUÍ…”°MÑ…Ñ¥É…ÝUÍ…”°MÑ…Ñ¥I•…‘UÍ…”°MÑ•É•½…µ•É„°MÑÉ•…µ½ÁåUÍ…”°MÑÉ•…µÉ…ÝUÍ…”°MÑÉ•…µI•…‘UÍ…”°MÑÉ¥¹-•å™É…µ•QÉ…¬°MÕ‰ÑÉ…ÑÅÕ…Ñ¥½¸°MÕ‰ÑÉ…Ñ¥Ù•	±•¹‘¥¹œ°Q=U °Q…¹•¹ÑMÁ…•9½Éµ…±5…À°Q•ÑÉ…¡•‘É½¹•½µ•ÑÉä°Q•áÑÕÉ”°Q•áÑÕÉ•1½…‘•È°Q½ÉÕÍ•½µ•ÑÉä°Q½ÉÕÍ-¹½Ñ•½µ•ÑÉä°QÉ¥…¹±”°QÉ¥…¹±•…¹É…Ý5½‘”°QÉ¥…¹±•MÑÉ¥ÁÉ…Ý5½‘”°QÉ¥…¹±•ÍÉ…Ý5½‘”°QÕ‰••½µ•ÑÉä°QÝ½A…ÍÍ½Õ‰±•M¥‘”°UY5…ÁÁ¥¹œ°U¥¹ÐÄÙ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¥¹ÐÌÉ	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¥¹Ðá	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¥¹Ðá±…µÁ•‘	Õ™™•ÉÑÑÉ¥‰ÕÑ”°U¹¥™½É´°U¹¥™½ÉµÍÉ½ÕÀ°U¹¥™½ÉµÍ1¥ˆ°U¹¥™½ÉµÍUÑ¥±Ì°U¹Í¥¹•‘	åÑ•QåÁ”°U¹Í¥¹•‘%¹ÐÈÐáQåÁ”°U¹Í¥¹•‘%¹ÑQåÁ”°U¹Í¥¹•‘M¡½ÉÐÐÐÐÑQåÁ”°U¹Í¥¹•‘M¡½ÉÐÔÔÔÅQåÁ”°U¹Í¥¹•‘M¡½ÉÑQåÁ”°YM5M¡…‘½Ý5…À°Y•Ñ½ÈÈ°Y•Ñ½ÈÌ°Y•Ñ½ÈÐ°Y•Ñ½É-•å™É…µ•QÉ…¬°Y¥‘•½Q•áÑÕÉ”°]•‰0ÅI•¹‘•É•È°]•‰0ÍI•¹‘•ÉQ…É•Ð°]•‰1ÉÉ…åI•¹‘•ÉQ…É•Ð°]•‰1½½É‘¥¹…Ñ•MåÍÑ•´°]•‰1Õ‰•I•¹‘•ÉQ…É•Ð°]•‰15Õ±Ñ¥Á±•I•¹‘•ÉQ…É•ÑÌ°]•‰1I•¹‘•ÉQ…É•Ð°]•‰1I•¹‘•É•È°]•‰1UÑ¥±Ì°]•‰AU½½É‘¥¹…Ñ•MåÍÑ•´°]¥É•™É…µ••½µ•ÑÉä°]É…ÁÉ½Õ¹‘¹‘¥¹œ°i•É½ÕÉÙ…ÑÕÉ•¹‘¥¹œ°i•É½…Ñ½È°i•É½M±½Á•¹‘¥¹œ°i•É½MÑ•¹¥±=À°}MI	½Éµ…Ð°É•…Ñ•…¹Ù…Í±•µ•¹Ð°ÍI	¹½‘¥¹œôì