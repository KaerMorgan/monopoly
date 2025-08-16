import { DynamicIcon } from './DynamicIcon';

type Props = {
  title: string;
};

export const JailField = ({ title }: Props) => {
  return (
    <div className="">
      <DynamicIcon name="jail" />
      <span className="">{title}</span>
    </div>
  );
};
