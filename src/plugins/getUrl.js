
const getUrl={
    getL(){
      var url;
      var u = navigator.userAgent, app = navigator.appVersion;
      if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
         url = decodeURI(document.URL);
      } else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
         url = document.url;
      }
      if(url.indexOf("?") != -1){
        url = url.split("?")[1].split('&');
        return url;
      }else{
        return;
      }
    }
}

export default class getLocation{
  static install(Vue){
    Object.defineProperty(Vue.prototype,'$geturl',{
      get(){ return getUrl}
    })
  }
}
