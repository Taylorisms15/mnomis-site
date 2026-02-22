(function(){
  try{
    var p = window.location.pathname || "/";
    var base = "";
    // GitHub Pages project path support: /mnomis.com/...
    var m = p.match(/^\/(mnomis\.com)(\/|$)/);
    if(m){ base = "/" + m[1] + "/"; }
    if(!document.querySelector("base")){
      var b = document.createElement("base");
      b.setAttribute("href", base || "/");
      document.head.insertBefore(b, document.head.firstChild);
    }
    window.__MNOMIS_BASE__ = base || "/";
  }catch(e){}
})();
