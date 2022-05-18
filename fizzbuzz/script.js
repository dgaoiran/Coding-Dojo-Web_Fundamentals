console.log("testing");

function get_array() {
    var arr = [];
    for (var x = 1; x <101; x++){
        if (x % 3 != 0 && x % 5 != 0){
            arr.push(x);
        }
        else {
            var y = "";
            if (x % 3 == 0){
                y = "Fizz";
            }
            if (x % 5 == 0){
                y = "Buzz";
            }
            if (x % 3 == 0 && x % 5 == 0){
                y = "FizzBuzz";
            }
            arr.push(y);
        }
    }
    console.log(arr);
}
get_array();