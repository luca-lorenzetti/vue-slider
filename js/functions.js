// Funzione per l'autoPlay
const autoPlay = (app,time) =>{
  
 let auto = setInterval(function(){
    app.nextImage(app.currentPos++, false);
   },time);

   return auto;
}

