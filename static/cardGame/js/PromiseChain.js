class PromiseChain{
    constructor(){
        this.functionArray = []
        this.initialFunction = null
        this.finalFunction = null
        this.count = 0
    }

    initializeChain(_f){
        this.initialFunction = _f
    }

    addPromiseFunctionPair(array){
        let promisePair = {
            "response": array[0],
            "initial": array[1]

        }
        this.functionArray.push(promisePair)
    }

    finalizeChain(_f){
        this.finalFunction = _f
    }

    async startChain(){
        let promise = await this.createPromise(this.initialFunction)
        let promiseNext = await this.addThen(promise)
        console.log(promiseNext);
    }

    async addThen(promise){
        let self = this
        let pairs = this.functionArray[0]

        let responseFunction = pairs["response"]
        let initialFunction = pairs["initial"]
        // console.log(initalFunction);
        let result = await promise.then(function(res, err){
            responseFunction(res, err)
            return self.createPromise(initialFunction)
        })
        return result
    }



}
