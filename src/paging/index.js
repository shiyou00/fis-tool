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
