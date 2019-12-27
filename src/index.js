const fisTool = {
  isType: function( type ){
    return function( obj ){
      return Object.prototype.toString.call( obj ) === '[object '+ type +']';
    }
  }
};

export default fisTool;
