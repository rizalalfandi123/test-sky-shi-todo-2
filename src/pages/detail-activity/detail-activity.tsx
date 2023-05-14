import { useDetailActivityQuery } from "@/utils";
import { DetailActivityBody } from "./detail-activity-body";
import { DetailActivityTitle } from "./detail-activity-title";
import { LoadingCircular } from "@/components/icons";
import { useParams } from "react-router-dom";

export const DetailActivity = () => {
  const { idActivity = "" } = useParams();

  const { data = { title: "", todo_items: [] }, isLoading: loadingGetDetail } = useDetailActivityQuery(idActivity);

  if (loadingGetDetail) {
    return (
      <div className="w-full flex justify-center items-center">
        <LoadingCircular className="text-primary w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <DetailActivityTitle initialTitle={data.title} />
      <DetailActivityBody todos={data.todo_items}/>
    </div>
  );
};
