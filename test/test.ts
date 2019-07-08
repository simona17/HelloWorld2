import printMessege from  '../helloworld'

describe('Hello World', () =>{
    it('says hello world with no name', () =>{
        expect(printMessege()).toEqual('Hello, World!')

    })

})
