import ReactDOM  from "react-dom";
import Task4 from './task4';
import './style.css';
//ReactDOM.render(<Task4/>,document.getElementById('root'));
var a=(x) =>
{
    var a=5;
    var b=10;
    var c=a+b+x;
    document.getElementById('root').innerHTML=c;
}
a(20);



class Demo{
    methodone(){

    var a=5;
    var b=10;
    var c=a+b;
    document.getElementById('root').innerHTML=c;
}
}
var mydemo= new Demo();
mydemo.methodone();


var b=() =>
{
    const a = prompt("Enter a number:");
    if(a%11==0){
        console.log("number is divisible by 11");
    }
    else{
        console.log("number not divisible");
    }
}
b();


class Trial{
    method(n){
        var n,re,s=0;
        while(n)
        {
            re=n%10;
            s=s+re;
            n=Math.floor(n/10);
        }
        document.getElementById("root").innerHTML=s;
    }
    }
    var obj=new Trial();
    obj.method(1598);
    