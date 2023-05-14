import ActivityCard from "@/components/activity-card";
import Button from "@/components/button";
import { LoadingCircular, PlusIcon } from "@/components/icons";
import {
  IActivity,
  apiEndpoints,
  apiKey,
  queryClient,
  useActivityQuery,
  useAlertDelete,
  useCreateActivity,
  useNotification,
} from "@/utils";
import { useNavigate } from "react-router-dom";

const showAlertDelete = useAlertDelete.getState().open;
const showNotification = useNotification.getState().open;

export const Home = () => {
  const navigate = useNavigate();

  /// TODO: Hook to get list of octivity
  const { data: activities = { data: [] }, isLoading: loadingFetch } = useActivityQuery();

  // TODO: hook to create activity
  const { mutateAsync: createActivity, isLoading: loadingCreate } = useCreateActivity({
    onSuccess: () => {
      queryClient.invalidateQueries([apiKey.activity]);
    },
  });

  // TODO: Handle create activity
  const handleAddActivity = async () => {
    await createActivity({ title: "New Activity" });
  };

  // TODO: Action after click button Delete
  const handleClickButtonDelete = (activity: IActivity) => () => {
    showAlertDelete({
      message: "Apakah anda yakin menghapus List Item",
      dataName: activity.title,
      deleteUrl: `${apiEndpoints.activity}/${activity.id}`,
      actionAfterDelete: () => {
        queryClient.invalidateQueries([apiKey.activity]);

        showNotification({ message: "Activity berhasil dihapus" });
      },
    });
  };

  const handleClickDetail = (activity: IActivity) => () => navigate(`/detail-activity/${activity.id}`);

  if (loadingFetch) {
    return (
      <div className="w-full flex justify-center items-center">
        <LoadingCircular className="text-primary w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <section className="py-[43px] flex justify-between w-full">
        <h1 className="page-title" data-cy="activity-title">
          Activity
        </h1>

        <Button
          data-cy="activity-add-button"
          className="w-[159px]"
          onClick={handleAddActivity}
          startIcon={<PlusIcon className="icon" />}
          isLoading={loadingCreate}
        >
          Tambah
        </Button>
      </section>

      {activities.data.length <= 0 ? (
        <img data-cy="activity-empty-state" src="/empty-todo.svg" className="w-[767px] h-[490px]" onClick={handleAddActivity} />
      ) : (
        <section className="py-2 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 w-full">
          {activities.data.map((activity) => {
            return (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onClickDelete={handleClickButtonDelete(activity)}
                onClickTitle={handleClickDetail(activity)}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};
