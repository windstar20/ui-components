'use client'

import { isParentRoute, ROUTE_PATH, routes } from '@/routes';

const ItemPage = ({ params : {item} }: {params: {item: string[]}}) => {
  console.log('%c[page.tsx : 5 james ] props =', 'color:yellow;' ,item)
  const path = ['', ...item].join('/') as ROUTE_PATH;
  const route = routes[path];
  if(!route || isParentRoute(route)) return null;
  const {children : Component} = route;
  return Component ? <Component /> :null;

  // return <div>Item Page {path}</div>
}
export default ItemPage;