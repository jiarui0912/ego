const base = {
  // baseUrl: 'http://localhost:3600',
  baseUrl: '/api',
  login: '/api/login',
  goodsList: '/api/projectList',
  search: '/api/search',
  delete: '/api/backend/item/deleteItemById',
  update: "/api/backend/item/updateTbItem",// 修改商品信息
  insert: "/api/backend/itemParam/insertItemParam",// 添加商品信息
  selectItemCategory: "/api/backend/itemCategory/selectItemCategoryByParentId",//类目选择
}


export default base