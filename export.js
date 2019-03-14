const axios = require('axios');


    let apiKey = 'AIzaSyDP3_DEkRSfAKgXoy0JvZi4hjQ-ae1BxSk' ;
//let youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLkWIEmwZeYzqOOkeVCcMqPWV8WPhIXNxt&key=AIzaSyDP3_DEkRSfAKgXoy0JvZi4hjQ-ae1BxSk` ;

    let expInfo = (playID)=>{
     qlayID = 'PLkWIEmwZeYzqOOkeVCcMqPWV8WPhIXNxt&';
     let derial = 2;
      return  axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playID}&key=${apiKey}`)
    .then((response) => {
      var response = response.data.items;
      //items[0].snippet.position
      var d = response.map;
      var name = response.map(x => x.snippet.title);
      var thumb = response.map(x => x.snippet.thumbnails.medium.url);
      var vid = response.map(x => x.snippet.resourceId.videoId);
      var did = response[0].snippet.resourceId.videoId;
     
     return title = {name,thumb,vid,did} ;
           
          }).catch(error =>{
                  console.log('there is an error');
          })
      
      
    }
    

   
  module.exports.expInfo = expInfo;

 
  