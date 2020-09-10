var test = function(num){
    console.log(num)
    if (num != 10){
        test(num+1);
    } 
};

test(0);