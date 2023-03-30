let a = document.getElementById("a1");

let b = document.getElementById("a2"); 

let c = document.getElementById("b");

let arr = ["0.jpg", "1.jpg","2.jpg"];

let index=0;
// c.style.backgroundImage=`url(${"girlyanda/"+'images(1).png'})`


a.onclick=function(e){
        // b.images(1).png = alert("Hello");   

        if(index == 3){
            index = 0;
            console.log(index);
        
    }
    c.style.backgroundImage=`url(${"girlyanda/"+arr[index]})`
    index+=1;
    console.log(index);

}
b.onclick=function(b){
   
    if(index == -1){
        index = 3;
        console.log(index);
    } 
    c.style.backgroundImage=`url(${"girlyanda/"+arr[index]})`
    index-= 1;
    console.log(index);

}







