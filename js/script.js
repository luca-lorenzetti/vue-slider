var app = new Vue({
    el: '#root',
    data: {
      imagesUrl:[
        "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
        "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
      ],
      currentPos: 0
    },
    methods: {
      nextImage: function(elem, index){
        
        if( this.currentPos < 0){
          this.currentPos = this.imagesUrl.length-1;
        }
        else if( this.currentPos > this.imagesUrl.length-1){
          this.currentPos = 0;
        }

      }
    },
  })
