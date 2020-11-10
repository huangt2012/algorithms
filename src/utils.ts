export default class Utils {
    
    // private __data: any
    static __data: TestData[]
    static getClassName() {
        return 'classname'
    }

    static getData() {
        const className = this.getClassName()
        this.__data = [{
            id: 2,
            name: 'test2',
            score: 333
        }]
        return this.__data
    }

    static getTestData(): TestData {
        return {
            id: 1,
            name: 'string',
            score: 12
        }
    }
}