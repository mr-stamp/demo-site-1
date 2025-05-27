/**
  This script will inject the global page header into the #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Mr. Stamp\'s Personal Site</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/demo-site-1">Home</a></li><li><a href="/demo-site-1/photo-albums">Photos</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/demo-site-1/art-projects">Art Projects</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/demo-site-1/music">Music</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/demo-site-1/web-dev">Web Development</a><ul><li><a href="/demo-site-1/wdsub/week1.html">Week 1</a></li><li><a href="/demo-site-1/wdsub/recipe.html">Week 2</a></li><li><a href="/demo-site-1/wdsub/anchors.html">Week 3</a></li><li><a href="/demo-site-1/wdsub/poem.html">Week 4</a></li><li><a href="/demo-site-1/wdsub/reviews.html">Week 5</a></li><li><a href="/demo-site-1/wdsub/journal.html">Week 6</a></li><li><a href="/demo-site-1/wdsub/band-page.html">Week 7</a></li><li><a href="/demo-site-1/wdsub/list-maker.html">Week 8</a></li><li><a href="/demo-site-1/wdsub/pythag.html">Week 9</a></li><li><a href="/demo-site-1/wdsub/ttt.html">Week 10</a></li><li><a href="/demo-site-1/wdsub/time-keeper.html">Week 11</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
