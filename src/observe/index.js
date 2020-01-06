export class Observe{
  catchList = [];

  subscribe(fn){
    this.catchList.push(fn);
  }

  publish(){
    for( let i = 0, fn; fn = this.catchList[ i++ ]; ){
      fn.apply( this, arguments );    // arguments 是发布消息时带上的参数
    }
  }
}
