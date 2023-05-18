import { Operation } from '../models/Operation'
import { expect } from 'chai';

describe('Options tests', () => { // the tests container
  it('checking default options', () => { // the single test

    const s = "abcdefg";
    const op1 = new Operation([{ skip: 1 }, { insert: "FOO" }]);
    const op2 = new Operation([{ skip: 3 }, { insert: "BAR" }]);


    const dataOp1 = op1.apply(s); // => "aFOObcdefg"
    const dataOp2 = op2.apply(s); // => "abcBARdefg"
    console.log('op1 :',dataOp1 )
    console.log('op2 :',dataOp2 )

    const combined1 = Operation.combine(op1, op2); // => [{ skip: 1 }, { insert: 'FOO' }, { skip: 2}, { insert: 'BAR' } ]
    const dataCombined1 = combined1.apply(s); // => "aFOObcBARdefg"
    
    console.log('op1 combined1 :',dataCombined1 )

    const combined2 = Operation.combine(op2, op1);
    const dataCombined2 = combined2.apply(s); // => "aFOObcBARdefg"

    console.log('op1 combined2 :',dataCombined2 )

    // NB: This expectation is true for this specific case, but not in the general case.
    // Can you think of an example where this assertion might not be true?
    expect(dataCombined2).to.equal(dataCombined1);
  });
});