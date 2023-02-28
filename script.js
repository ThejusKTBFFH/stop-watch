
const display = document.getElementById("display");

const castarea = document.getElementById("cast-area");

let ms =0
let second =0; 
let min =0;
let hr =0;

let interval;
const start =()=>{

   interval = setInterval(()=>{

        

        
            ms++
        if(ms>99){
            ms=0;
            second++
        }
        if(second >59){
            second  =0;
            min++
        }

          if(min >59){
            hr++;
            min =0;
        }
     

        // console.log(display.innerHTML);
        display.innerHTML = `${hr}: ${min} : ${second} : ${ms}`;
        
        // console.log(`${hr}: ${min} : ${second}`)
    }, 10)

}

const pause =()=>{
    clearInterval(interval);
}

const reset =()=>{

    clearInterval(interval);
    ms =0
    second =0; 
    min =0;
     hr =0;
    display.innerHTML = `${hr}: ${min} : ${second} : ${ms}`;

    castarea.innerHTML = "";
    
}
let id =1;
const cast =()=>{
    
    let time = document.createElement("p");

    time.innerText+= `Cast ${id} : ${hr} : ${min} : ${second} : ${ms}  `

    console.log(castarea);

    castarea.appendChild(time);
    id++
    
}