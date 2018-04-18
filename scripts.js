(function () {
  function factory() {
    return (...a) => {
      a.forEach( txt => console.log(txt));
    };
  }
  
  factory()('asd', 'vff', 'as');
})()