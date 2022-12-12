import { isUndefined, omitBy } from "lodash";
import useQueryParams from "./useQueryParams";

const useQueryConfig = () => {
  const queryParams = useQueryParams();

  let queryConfig = {
    page: queryParams.page || 1,
    limit: queryParams.limit || 6,
    difficulty: queryParams.difficulty,
    search: queryParams.search,
  };

  queryConfig = omitBy(queryConfig, (val) => isUndefined(val));

  return queryConfig;
};

export default useQueryConfig;
