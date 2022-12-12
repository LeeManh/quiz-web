import pathRoutes from "constants/pathRoutes";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import useQueryConfig from "./useQueryConfig";

const useSearchQuiz = () => {
  const navigate = useNavigate();
  const queryConfig = useQueryConfig();

  const [inputSearch, setInputSearch] = useState("");

  const handleChangeSearch = (e) => setInputSearch(e.target.value);

  const handleSubmitSearch = () => {
    navigate({
      to: pathRoutes.dashboard,
      search: createSearchParams({
        ...queryConfig,
        page: 1,
        search: inputSearch,
      }).toString(),
    });
  };

  return { handleChangeSearch, handleSubmitSearch, inputSearch };
};

export default useSearchQuiz;
