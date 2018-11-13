import * as glMatrix from './common';

export function create() {
	let out = new glMatrix.ARRAY_TYPE(4);
	if (glMatrix.ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
		out[2] = 0;
	}
	out[3] = 1;
	return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
export function rotateX(out, a, rad) {
	rad *= 0.5;
	let ax = a[0],
		ay = a[1],
		az = a[2],
		aw = a[3];
	let bx = Math.sin(rad),
		bw = Math.cos(rad);
	out[0] = ax * bw + aw * bx;
	out[1] = ay * bw + az * bx;
	out[2] = az * bw - ay * bx;
	out[3] = aw * bw - ax * bx;
	return out;
}
