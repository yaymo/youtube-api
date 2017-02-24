var base_url="https://www.googleapis.com/youtube/v3/search";

function getYoutubeImages(search, callback){
  var query = {
    part: 'snippet',
    key: "AIzaSyDWOubUaaKOeIMUYrgVPbCA2Mnafv8Hhx4",
    q: search
  }
    $.getJSON(base_url, query, callback);
}

function displayImages(results){
  var result = '';
  if(results.items.length>0){
    results.items.forEach(function(item){
      result += '<li class="list">'
       + '<img src="' + item.snippet.thumbnails.medium.url + '">' + '</li>'
    });
  }
  else{
    result += '<p> No results</p>';
  }
  $('.js-results').html(result);
}


  $('.js-form').submit(function(event){
    event.preventDefault();
    var query = $('.js-search').val();
    getYoutubeImages(query, displayImages);
  });

