(function () {
  function obj() {

  };

  obj.prototype.tostring = () => {
    console.log('tostring')
  }

  let tmp = new obj();
  tmp.tostring();

})()