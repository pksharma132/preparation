function print(num) {

    function helper(num, current) {
        if (num < current) {
            return;
        }
        console.log(current);

        return helper(num, current+1);
    }

    helper(num, 1);

}

console.log(print(100))