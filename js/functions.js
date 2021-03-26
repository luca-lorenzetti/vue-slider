// Funzione per l'autoPlay
const autoPlay = (app,time) =>{
  
 let auto = setInterval(function(){
    app.nextImage(false,app.currentPos++);
   },time);

   return auto;
}

