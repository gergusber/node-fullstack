"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
class Operation {
    constructor(edits) {
        this.edits = edits;
    }
    combine(operation) {
        this.edits = Operation.combine(this, operation).edits;
    }
    apply(string) {
        let result = '';
        let index = 0;
        for (const edit of this.edits) {
            if (edit.skip) {
                result += string.slice(index, index + edit.skip);
                index += edit.skip;
            }
            if (edit.insert) {
                result += edit.insert;
            }
            if (edit.delete) {
                index += edit.delete;
            }
        }
        result += string.slice(index);
        return result;
    }
    static combine(op1, op2) {
        const combinedEdits = [];
        let index1 = 0;
        let index2 = 0;
        while (index1 < op1.edits.length || index2 < op2.edits.length) {
            const edit1 = op1.edits[index1];
            const edit2 = op2.edits[index2];
            if (edit1 && !edit2) {
                combinedEdits.push(edit1);
                index1++;
            }
            else if (!edit1 && edit2) {
                combinedEdits.push(edit2);
                index2++;
            }
            else {
                if (edit1.skip && edit2.skip) {
                    const skip = Math.min(edit1.skip, edit2.skip);
                    combinedEdits.push({ skip });
                    edit1.skip -= skip;
                    edit2.skip -= skip;
                    if (edit1.skip === 0)
                        index1++;
                    if (edit2.skip === 0)
                        index2++;
                }
                else if (edit1.skip) {
                    combinedEdits.push(edit1);
                    index1++;
                }
                else if (edit2.skip) {
                    combinedEdits.push(edit2);
                    index2++;
                }
                if (edit1.insert && edit2.insert) {
                    combinedEdits.push({ insert: edit1.insert + edit2.insert });
                    index1++;
                    index2++;
                }
                else if (edit1.insert) {
                    combinedEdits.push(edit1);
                    index1++;
                }
                else if (edit2.insert) {
                    combinedEdits.push(edit2);
                    index2++;
                }
                if (edit1.delete && edit2.delete) {
                    const del = Math.min(edit1.delete, edit2.delete);
                    combinedEdits.push({ delete: del });
                    edit1.delete -= del;
                    edit2.delete -= del;
                    if (edit1.delete === 0)
                        index1++;
                    if (edit2.delete === 0)
                        index2++;
                }
                else if (edit1.delete) {
                    combinedEdits.push(edit1);
                    index1++;
                }
                else if (edit2.delete) {
                    combinedEdits.push(edit2);
                    index2++;
                }
            }
        }
        return new Operation(combinedEdits);
    }
}
exports.Operation = Operation;
