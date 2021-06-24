import { convertPxToNum } from '@src/util/units';

describe('Unit utils', () => {
  it('convertPxToNum', () => {
    const pxStr = '18px';
    const notPx = '3rem';

    expect(convertPxToNum(pxStr)).toBe(18);
    expect(() => convertPxToNum(notPx)).toThrow();
  });
});