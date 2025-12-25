var posts=["2025/12/26/Windows to Linux/","2025/12/04/How to Get Rich-6/","2025/11/30/How to Get Rich-5/","2025/11/26/How to Get Rich-4/","2025/11/22/How to Get Rich-3/","2025/11/16/How to Get Rich-2/","2025/11/12/How to Get Rich-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };