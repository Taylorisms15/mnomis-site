(function(){
  try{
    var p = window.location.pathname || "/";
    // If served from a GitHub Pages project path like /mnomis.com/..., set base accordingly
    var base = "";
    var m = p.match(/^\/(mnomis\.com)(\/|$)/);
    if(m){ base = "/" + m[1] + "/"; }
    // If no project path, leave base empty (root deployment)
    // Inject <base> if not already present
    if(!document.querySelector("base")){
      var b = document.createElement("base");
      b.setAttribute("href", base || "/");
      document.head.insertBefore(b, document.head.firstChild);
    }
    // Expose computed base for other scripts
    window.__MNOMIS_BASE__ = base || "/";
  }catch(e){}
})();
