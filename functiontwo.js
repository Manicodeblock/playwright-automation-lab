function outer()
{
    let outrerVariable = "outter";
    console.log("I am outer variable");
    function inner()
    {
        let innerVariable="inner";
        console.log("i am inner variable")
    }
    inner()
}

outer()

// in this below code need to call also both functions based on their scopes like inner function should be call inside it scope 
//rather we have an option to return the inner function and then automatically iit will work like this 


function outer()
{
    let outrerVariable = "outter";
    console.log("I am outer variable");
    function inner()
    {
        let innerVariable="inner";
        console.log("i am inner variable")
    }
    return inner

}

outer()