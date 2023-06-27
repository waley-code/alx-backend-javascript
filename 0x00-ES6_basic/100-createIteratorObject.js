export default function createIteratorObject(report) {
    const x = Object.values(report);
    let y = [];
    let re = [];
    x.map(c => y.push(...(Object.values(c))));
    for(let s of y){
        re.push(...s)
    }
    return re;
}