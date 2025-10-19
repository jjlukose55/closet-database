import { LinkProps, Redirect } from 'expo-router';

type ValidRoute = LinkProps['href'];

let lastExplorePath: ValidRoute = '/explore/you';

export function setLastExplorePath(path: string): void {
  lastExplorePath = `/explore/${path}` as ValidRoute;
}

export function getLastExplorePath(): ValidRoute {
  return lastExplorePath || '/explore/you';
}

export default function RedirectExplore() {
  return <Redirect href={getLastExplorePath()} />;
}
