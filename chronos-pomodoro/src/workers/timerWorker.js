self.onmessage = function (event) {
  console.log("WORKER recebeu:", event.data);

  self.postMessage("OLÁ PARA VOCÊ TAMBÈM");
};
