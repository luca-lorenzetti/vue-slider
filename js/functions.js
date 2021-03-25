// Funzione per l'autoPlay
const autoPlay = (app,time) =>{
  
 setInterval(function(){
    app.nextImage(app.currentPos++);
   },time);
}