import { SEARCH_RESTAUTANTS } from "../../../Utils/Constants/constants";
import useFetch, { TApiResponse } from "../../../Utils/useFetch";

export default function CardContainer() {
  const data: TApiResponse = useFetch(SEARCH_RESTAUTANTS);

  if (data.loading) {
    return <div>Loading...</div>;
  } else {
    console.log(data);
  }
  return <div>Cards are under Process :)</div>;
}
