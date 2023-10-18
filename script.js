let api_key ="AIzaSyBdDCS905o_lDEFnPhz4uklo5DY09jcHqQ"
let video_http = "https://www.googleapis.com/youtube/v3/videos?"
let channel_http="https://www.googleapis.com/youtube/v3/channels?"
 
// let videoCardContainer = document.querySelector('#video-container')

fetch(video_http + new URLSearchParams({
    key: api_key,
    part:'snippet',
    chart: 'mostPopular',
    maxResults :100,
    regionCode:'IN'


}))
.then(res => res.json())
.then(data=>{
    // console.log(data)
    // console.log(data.items)
    data.items.forEach(item =>{
getChannelIcon(item)
    })
})
.catch(err=>console.log(console.err))
const getChannelIcon = (video_data)=>{
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part:'snippet',
        id: video_data.snippet.channelId
      
        
    
    
    }))
    .then(res =>  res.json()
    ).then(data =>{
        // console.log(data)
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url
        // console.log(video_data)
        makeVideoCard(video_data)
    })


 }

 const makeVideoCard =(data)=>{
    let videoContainer = document.querySelector('#video-container')
    let date = new Date(data.snippet.publishedAt).toLocaleDateString()

    videoContainer.innerHTML  +=
    `
    <div class="video-item" " onclick="location.href='https://youtube.com/watch?v=${data.id}'">
    <img src=${data.snippet.thumbnails.high.url} alt="">
    <div class="details">
        <img src=${data.channelThumbnail} alt="">
        <div class="main-det">
            
    
 
            
    <p>${data.snippet.title}</p>

    <h3>${data.snippet.channelTitle}</h3>

        
    
    
    </div>
</div>
   </div>
    `

 }
//      // <div class="card mx-2  my-4" style="width: 18rem;" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
    //             <img src=${data.snippet.thumbnails.high.url} class="card-img-top" alt="...">
    //             <div class="card-body">
    //               <h5 class="card-title">${data.snippet.title}</h5>
    //               <p class="card-text">
    //               ${data.snippet.title}
    //               </p>
    //               <a href="#" class="btn btn-primary">Go somewhere</a>
    //             </div>
    //           </div>
    //  search=============
    const search = document.getElementById('search')
    const searchBtn = document.getElementById('search-btn')

let searchLink = "https://www.youtube.com/results?search_query="
searchBtn.addEventListener('click',()=>{
    if(search.value.length){
        location.href = searchLink + search.value
    }
})