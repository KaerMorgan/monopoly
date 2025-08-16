import { lazy, Suspense, type ComponentType, type SVGProps } from 'react';
import HomeIcon from '@icons/home.svg';

type SVGComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface Props extends SVGProps<SVGSVGElement> {
  name: string;
}

const iconCache = new Map<string, SVGComponent>();

export const DynamicIcon = ({ name, ...props }: Props) => {
  if (iconCache.has(name)) {
    const CachedIcon = iconCache.get(name)!;
    return <CachedIcon {...props} />;
  }

  const LazyIcon = lazy(async () => {
    try {
      const module = await import(`@icons/${name}.svg?react`);
      const IconComponent = module.default;

      iconCache.set(name, IconComponent);

      return { default: IconComponent };
    } catch (error) {
      console.error('❌[DynamicIcon] Icon ' + name + ' was not found.');
      return { default: HomeIcon };
    }
  });

  return (
    <Suspense
      fallback={<div className="h-6 w-6 animate-pulse rounded bg-gray-200" />}
    >
      <LazyIcon {...props} />
    </Suspense>
  );
};
