let a = document.getElementById("a1");
let b = document.getElementById("a2");
let c = document.getElementById("d");
let c1 = document.querySelectorAll("#c_1");

let arr = ["0.jpg", "1.jpg", "2.jpg"];

let index = 0;
c1[index].classList.add("color");

console.log(c1);



// btn left
c.style.backgroundImage=`url(${"img/"+arr[index]})`;



a.onclick=function(e){
    index++;
    if(index > 2){
        index = 0;
        c.style.backgroundImage=`url(${"img/"+arr[index]})`;
      
        c1[index].classList.add("color");
        c1[2].classList.remove("color");


    }
    c.style.backgroundImage=`url(${"img/"+arr[index]})`;

    c1[index].classList.add("color");

    c1[index-1].classList.remove("color");
 
}

console.log(b);
// index-=1; 

b.onclick=function(){
  
    index -= 1;
    

    if(index==-1){
        index = 2;
        c1[0].classList.remove("color");

        

    }   
    if(index >=0){

        c.style.backgroundImage=`url(${"img/"+arr[index]})`;
        c1[index].classList.add("color");
    c1[index+1].classList.remove("color");
    } 
    console.log(index);
}


function TimeOut(){
    
    if(index > 2){
        index = 0;
        console.log(index);
    }
    c.style.backgroundImage=`url(${"img/"+arr[index]})`;
    index+=1;
   
}
setInterval(TimeOut, 5000);

