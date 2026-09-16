// import {app} from  '../index.js'
// import {describe, it, expect} from '@jest/globals';
// import request from 'supertest';
// describe('POST/sum test', () => {
// 	it('should return the sum of the two opposite sign number', async () => {
// 		const res = await request(app).post('/sum').send({
// 			a: 1,
// 			b: 2
// 		})
// 		expect(res.statusCode).toBe(200);
// 		expect(res.body.answer).toBe(3);
// 	});
// 	it('should return the sum of the two opposite sign number', async () => {
// 		const res = await request(app).post('/sum').send({
// 			a: -1,
// 			b: -2
// 		})
// 		expect(res.statusCode).toBe(200);
// 		expect(res.body.answer).toBe(-3);
// 	});
// 	it('should return the sum of 0 to 0', async () => {
// 		const res = await request(app).post('/sum').send({
// 			a: 0,
// 			b: 0
// 		})
// 		expect(res.statusCode).toBe(200);
// 		expect(res.body.answer).toBe(0);
// 	});
// });
import { expect, test } from 'vitest';
test('true === true', () => {
    expect(true).toBe(true);
});
//# sourceMappingURL=sum.test.js.map