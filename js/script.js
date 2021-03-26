  var app = new Vue({
    el: '#root',
    data: {
      title: "Carousel",
      imagesUrl:[
        "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
        "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
      ],
      currentPos: 0,
      isAutoPlay: true,
      autoInterval: null
    },
    methods: {
      //Funzione per il click dei pulsanti avanti e indietro
      nextImage: function(autoPlay){

        //Controllo se è impostato su autoplay e in caso contrario fermo il autoplay
        if( autoPlay ){
          clearInterval(this.autoInterval);
        } 
        if( this.currentPos < 0){
          this.currentPos = this.imagesUrl.length-1;
        }
        else if( this.currentPos > this.imagesUrl.length-1){
          this.currentPos = 0;
        }
      },
      // Funzione per il click del bullet
      clickBullet: function(elem, index){
       
        this.currentPos = index;
      }
    },
    //Funzioni caricate quando l'app viene montata dopo la creazione
    mounted: function() {
        // Richiamo la  funzione per l'autoplay
          this.autoInterval = autoPlay(this, 3000);
    }
  })



