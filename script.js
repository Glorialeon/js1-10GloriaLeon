function sleep_in(weekday,onVacation) {

    if(weekday==true&&onVacation==true){
        return true;
    }

    if(weekday==false&&onVacation==false){
        return true;
    }
    if(weekday==true&&onVacation==false){
        return false;
    }
    if(weekday==false&&onVacation==true){
        return true;
    }
}


function monkey_trouble(a_smile,b_smile){

    if(a_smile==true&&b_smile==false){
        return false;
    }

    if(a_smile==true&&b_smile==true){
        return true;
    }
    if(a_smile==false&&b_smile==false){
        return true;
    }
    if(a_smile==false&&b_smile==true){
        return false;
    }
}

function string_times(string,n){
    var result ="";
    for(var i=0; i <= n; i++){
        result+=string;
    }
    return result;
}

function front_times(string,n){
    var result = "";
    var str= string.substring(0,3);
    for(var i=1; i<=n; i++){
        result +=str;
    }
    return result;
}


function string_bits(string){
    var x ="";
    for(var i=0; i < string.length; i= i+2){
        x = x + string[i];
    }
    return x;
}


function caughtSpeeding(speed,birthday){
    if(speed <= 60 && birthday== false){
        return 0;
    }
    if(speed<= 60 && birthday == true){
        return 0;
    }
    if(speed>= 61 && speed <=65 && birthday == true){
        return 0;
    }
    if(speed>=65 && speed<= 80 && birthday == true){
        return 1;
    }
    if(speed>= 61 && speed <= 80 && birthday == false){
        return 1;
    }
    if(speed>= 81 && birthday == false){
        return 2;
    }
    if(speed>= 81 && birthday == true){
        return 2;
    }
}


function fizzBuzz(int){
    if(int %3 == 0 && int %5 ==0){
    return "fizzBuzz";
    }
    if(int %3 == 0){
        return "Fizz";
    }else{
        if(int %5 == 0){
            return "Buzz";
        }else{
            return int + "!";
        }
    }

}

function teaParty(candy,tea) {
    if (candy >= tea * 2 || tea >= candy * 2) {
        return 2;
    }else{
        if(candy < 5 && tea < 5){
            return 0;
        }
        if(candy < 5 && tea >= 5){
            return 0;
        }
        if(candy >= 5 && tea < 5){
            return 0;
        }
        if(candy >=5 && tea >= 5){
            return 1;
        }

    }
}

function blackjack(num1,num2) {
    if (num1 > 2 && num2 > 2) {
        if (num1 > num2 && num1 <= 21) {
            return num1;
        }
        if (num2 > num1 && num2 <= 21) {
            return num2;
        }
        if(num1 > 21 && num2 <= 21){
            return num2;
        }
        if(num1 < 21 && num2 >= 21){
            return num1;
        }
    }
    if (num1 > 21 && num2 > 21) {
        return 0;
    }
}

function tester(){
    document.getElementById("output").innerHTML= sleep_in(false, false);
    document.getElementById("output1").innerHTML= monkey_trouble(true, true);
    document.getElementById("output2").innerHTML= string_times("Hi",5);
    document.getElementById("output3").innerHTML= front_times("Hello",3);
    document.getElementById("output4").innerHTML= string_bits("Hello");
    document.getElementById("output5").innerHTML= caughtSpeeding(70, true);
    document.getElementById("output6").innerHTML= fizzBuzz(15);
    document.getElementById("output7").innerHTML= teaParty(3,8);
    document.getElementById("output8").innerHTML= blackjack(22,25);
    document.getElementById("output9").innerHTML= loneSum(3,3,3);
}

// 10. loneSum
// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values,
//     it does not count towards the sum.
//
// loneSum(1, 2, 3) → 6       loneSum(3, 2, 3) → 2        loneSum(3, 3, 3) → 0

function loneSum(a,b,c){
    if(a == b && a == c ){
        return 0;
    }
    if(a==b){
        return c;
    }
    if(b==c){
        return a;
    }
    if(c==a){
        return b;
    }else{
        return a+b+c
    }

}
















