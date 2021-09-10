const api = func => func(1);
const api2 = func => func(2);
// const api2 = func => setTimeout(() => func(2), 2000);
const api3 = func => func(3);

api(function(result){
    console.log('result: ', result)
    api2(function(result2){
        console.log('result2: ', result2)
        api3(function(result3){
            console.log('result3: ', result3)
        });
    });
});

// Will print to browser/nodejs console:
// result: 1
// result2: 2
// result3: 3