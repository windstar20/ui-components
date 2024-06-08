'use client'
import { ChildRoute, gnbRootList, isParentRoute, ParentRoute, ROUTE, ROUTE_PATH, routes } from '@/routes';
import classNames from 'classnames';
import { ROUTER_TYPE } from 'next/dist/build/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';

console.log('%c[gnb.tsx : 3 james ] gnbRootList =', 'color:yellow;', gnbRootList);

const ParentGnbItem = ({ route: {  name, link, children}, currentPath}: { route: ParentRoute, currentPath: ROUTE_PATH }) => {
  const open = children.includes(currentPath);
  return (
    <li className={classNames('parent', `items-${children.length}`, {open})}>
      <Link href={link}>{name}</Link>
      <ul className={'subRoutes'}>
        {children.map(r => {
          const route = routes[r];
          return <GnbItem route={route} currentPath={currentPath} key={route.key}/>;
        })}
      </ul>
    </li>
  );
};
const ChildGnbItem = ({route: { name, link }, currentPath}: { route: ChildRoute, currentPath: ROUTE_PATH }) => {
  return (
    <li className={classNames({active: link === currentPath})}>
      <Link href={link}>{name}</Link>
    </li>
  );
};
const GnbItem = ({ route, currentPath }: { route: ROUTE, currentPath: ROUTE_PATH }) => {
  if (isParentRoute(route)) return <ParentGnbItem route={route} currentPath={currentPath} />;
  return <ChildGnbItem route={route} currentPath={currentPath} />;
  /*return (
    <li><Link href={link}>{name}</Link></li>
  )*/
};
const Gnb = () => {
  const {item = []} = useParams();
  const currentPath = ['', ...item].join('/') as ROUTE_PATH
  console.log('%c[gnb.tsx : 42 james ] currentPath =', 'color:yellow;' ,currentPath);

  return (
    <aside>
      <h1><Link href={'/'}> UI 요소 모음 <sub>FE James</sub></Link></h1>
      <ul className={'mainRoutes'}>
        {gnbRootList.map(route => {
          console.log(`r = `, route);
          return <GnbItem route={route} currentPath={currentPath} key={route.key} />;
        })}
      </ul>
    </aside>
  );
};
export default Gnb;