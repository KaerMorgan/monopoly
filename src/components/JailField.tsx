import { DynamicIcon } from './DynamicIcon';

type Props = {
  id: number;
  title: string;
  subtitle?: string;
};

export const JailField = ({
  title,
  id,
  subtitle = 'Обычный посетитель',
}: Props) => {
  return (
    <div className="flex size-25 flex-col border" data-id={id}>
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-0.5 border-b p-0.5"
        data-type="prison"
      >
        <DynamicIcon name="prisoner" size={24} />
        <span className="text-xs">{title}</span>
      </div>

      <div
        className="flex h-full w-full items-center justify-center gap-0.5 text-center"
        data-type="prison visitor"
      >
        <DynamicIcon name="next" size={12} />
        <span className="max-w-16 text-xs">{subtitle}</span>
        <DynamicIcon name="next" size={12} className="rotate-90" />
      </div>
    </div>
  );
};
