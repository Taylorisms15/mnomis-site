(function(){
  try{
    var p = window.location.pathname || "/";
    var base = "/";
    var m = p.match(/^\/(mnomis\.com)(\/|$)/);
    if(m){ base = "/" + m[1] + "/"; }
    var existing = document.querySelector("base");
    if(existing){ existing.setAttribute("href", base); }
    else{
      var b = document.createElement("base");
      b.setAttribute("href", base);
      document.head.insertBefore(b, document.head.firstChild);
    }
    window.__MNOMIS_BASE__ = base;
  }catch(e){}
})();
