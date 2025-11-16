var posts=["2025/11/16/How to Get Rich-2/","2025/11/12/How to Get Rich-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };