
const getUrl={
    getL(){
      var url = decodeURI(document.URL);
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
