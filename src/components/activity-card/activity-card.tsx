import { ComponentProps, FunctionComponent } from "react";
import { TrashIcon } from "../icons";
import { IActivity, formatDate } from "@/utils";

interface IActivityCardProps extends ComponentProps<"div"> {
  activity: IActivity;
  onClickDelete: ComponentProps<"button">["onClick"];
  onClickTitle: ComponentProps<"div">["onClick"];
}

type TActivity = FunctionComponent<IActivityCardProps>;

export const ActivityCard: TActivity = (props) => {
  const { activity, onClickDelete, onClickTitle, ...divProps } = props;

  return (
    <div className="shadow-card p-[25px] h-[234px] flex flex-col rounded-xl" {...divProps}>
      <div data-cy="activity-item" className="grow" onClick={onClickTitle}>
        <a className="font-bold text-[18px] line-clamp-6 cursor-pointer h-full" data-cy="activity-item-title">
          {activity.title}
        </a>
      </div>

      <div className="flex justify-between">
        <span data-cy="activity-item-date" className="text-base text-secondary-text">
          {formatDate(activity.created_at)}
        </span>
        <button data-cy="activity-item-delete-button" onClick={onClickDelete}>
          <TrashIcon className="icon" />
        </button>
      </div>
    </div>
  );
};
