if('serviceWorker' in navigator){
  navigator.serviceWorker.register('js/sw.js').then(function() {
    console.log("It is Work Now !");
  }).catch(function() {
    console.log("Ops it's Failed");
  });
}
