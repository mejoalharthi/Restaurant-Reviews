if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log("It is Work Now !");
  }).catch(function() {
    console.log("Ops it's Failed");
  });
}
