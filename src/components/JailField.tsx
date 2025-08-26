import { DynamicIcon } from './DynamicIcon';

type Props = {
  id: number;
  title: string;
  subtitle?: string;
};

export const JailField = ({ title, id, subtitle = 'Обычный посетитель' }: Props) => {
  return (
    <div className="border-main-black flex size-22 flex-col border" data-id={id}>
      <div
        className="border-main-black bg-field flex h-full w-full flex-col items-center justify-center gap-0.5 border-b p-0.5"
        data-type="prison"
      >
        <DynamicIcon name="prisoner" size={24} />
        <span className="text-xs">{title}</span>
      </div>

      <div
        className="bg-field flex h-full w-full items-center justify-center gap-0.5 text-center"
        data-type="prison visitor"
      >
        <DynamicIcon name="next" size={12} />
        <span className="max-w-16 text-xs">{subtitle}</span>
        <DynamicIcon name="next" size={12} className="rotate-90" />
      </div>
    </div>
  );
};
