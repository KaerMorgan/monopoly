import { DynamicIcon } from './DynamicIcon';

type Props = {
  id: number;
};

export const GoToJailField = ({ id }: Props) => {
  return (
    <div
      className="border-main-black bg-field col-start-1 row-start-11 flex size-full flex-col border-2"
      data-id={id}
    >
      <DynamicIcon name="go-to-jail" className="size-full" />
    </div>
  );
};
