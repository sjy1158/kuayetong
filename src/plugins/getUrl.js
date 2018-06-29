
const getUrl={
    getL(){
      var url = window.location;
      if(url.indexOf("?") != -1){
        url = url.split("?");
        return alert(url);
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
