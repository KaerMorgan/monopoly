import { lazy, Suspense, type ComponentType, type SVGProps } from 'react';
import HomeIcon from '@icons/home.svg?react';

type SVGComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface Props extends SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

const iconCache = new Map<string, SVGComponent>();

export const DynamicIcon = ({ name, width = 16, height = 16, size, ...props }: Props) => {
  if (iconCache.has(name)) {
    const CachedIcon = iconCache.get(name)!;
    return <CachedIcon width={size ?? width} height={size ?? height} {...props} />;
  }

  const LazyIcon = lazy<SVGComponent>(async () => {
    try {
      const module = await import(`../assets/icons/${name}.svg?react`);
      const IconComponent = module.default;

      iconCache.set(name, IconComponent);

      return { default: IconComponent };
    } catch (error) {
      console.error('❌[DynamicIcon] Icon ' + name + ' was not found. \n Error: ', error);
      return { default: HomeIcon };
    }
  });

  return (
    <Suspense fallback={<div className="size-4 animate-pulse rounded bg-gray-200" />}>
      <LazyIcon width={size ?? width} height={size ?? height} {...props} />
    </Suspense>
  );
};
