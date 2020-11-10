import utils from './utils'
const sum = function(a: number, b: number): number {
    return a + b
}
console.log(sum(1,2))

const init = function(instance: number) {
    if (!(document && document.body)) {
        console.log('document not ready yet, trying again in 500 ')
    }

}
// console.log(init(1))
// console.log(utils.getClassName())
// console.log(utils.getData())
;(window as any).Utils = utils