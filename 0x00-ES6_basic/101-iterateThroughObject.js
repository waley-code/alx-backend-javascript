export default function iterateThroughObject(reportWithIterator) {
    let st = "";
    for (let index = 0; index < reportWithIterator.length; index++) {
        st += reportWithIterator[index] +(( index ==(reportWithIterator.length - 1))? "": " | ");
    }
 return st;
}