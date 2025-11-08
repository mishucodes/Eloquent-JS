//Some Promises:
    let p1 = Promise.resolve('1');
    let p2 = Promise.resolve('2');
    let p3 = Promise.resolve('3');
    let p4 = Promise.resolve('4');
    let p5 = Promise.resolve('5');
    let px = Promise.reject('x');

//My Version:
function PromiseAll(...promises)
{
    return new Promise((resolve, reject) =>    
    {
        let resolvedPromises = [];
        let totalPromises = 0;
        for(let promise of promises)
        {
            promise.then(value =>
                {
                    resolvedPromises.push(value);
                    totalPromises++
                    if(totalPromises === promises.length)
                        resolve(resolvedPromises);
                })
            .catch(err => reject(err));
        }
    });
}
PromiseAll(p1,p2,p3,p4,p5).then(value => console.log(value));
PromiseAll(p1,p2,p3,p4,p5,px).then(value => console.log(value)).catch(err => console.log(err));
PromiseAll(p1,p2,px,p3,p4,p5).then(value => console.log(value)).catch(err => console.log(err));






//Author's Version:
function Promise_all(promises)
{
    return new Promise((resolve, reject) =>
        {
            let results = [];
            let pending = promises.length;
            for (let i = 0; i < promises.length; i++)
            {
                promises[i].then(result =>
                    {
                        results[i] = result;
                        pending--;
                        if (pending == 0)
                            resolve(results);
                    }).catch(reject);
            }
            if (promises.length == 0) resolve(results);
        });
}

//Testing code:
//a)
    Promise_all([]).then(array => console.log("This should be []:", array));

//b)
    function soon(val)
    {
        return new Promise(resolve => setTimeout(() => resolve(val), Math.random() * 500));
    }
    Promise_all([soon(1), soon(2), soon(3)]).then(array => console.log("This should be [1, 2, 3]:", array));
//c)
    Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => console.log("We should not get here"))
    .catch(error => console.log("Unexpected failure:", error));``