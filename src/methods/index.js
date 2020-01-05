/**
 * @param list:any[]
 * @param page:number
 * @param pageSize:number
 * @returns newList
 */
export const paging = (list, page, pageSize) => {
  const pageStart = (page - 1) * pageSize;
  return list.slice(pageStart, pageStart + pageSize);
};

/**
 *
 * @param list:any[]
 * @param keyword:string | number
 * @param fields:any[]
 * @param callback:()=>{}
 */
export const filter = (
  list,
  keyword,
  fields,
  callback
) => {
  let filteredList;
  if (keyword) {
    const lowerCaseKeyword = keyword.toLowerCase();
    filteredList = list.filter((item, index) => {
      if (callback) {
        callback(item, index);
      }

      return fields.some(field =>
        item[field].toLowerCase().includes(lowerCaseKeyword)
      );
    });
  } else {
    list.forEach((item, index) => {
      if (callback) {
        callback(item, index);
      }
    });
    filteredList = list;
  }
  return filteredList;
};

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
