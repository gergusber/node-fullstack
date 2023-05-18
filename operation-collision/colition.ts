import { Operation } from './models/Operation'

const s = "abcdefg";
const op1 = new Operation([{ skip: 1 }, { insert: "FOO" }]);
const op2 = new Operation([{ skip: 3 }, { insert: "BAR" }]);


  op1.apply(s); // => "aFOObcdefg"
  op2.apply(s); // => "abcBARdefg"

  const combined1 = Operation.combine(op1, op2); // => [{ skip: 1 }, { insert: 'FOO' }, { skip: 2}, { insert: 'BAR' } ]
  combined1.apply(s); // => "aFOObcBARdefg"

  const combined2 = Operation.combine(op2, op1);

  // NB: This expectation is true for this specific case, but not in the general case.
  // Can you think of an example where this assertion might not be true?
  // expect(combined2.apply(s)).to.equal(combined1.apply(s));
