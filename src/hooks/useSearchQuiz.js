// import pathRoutes from "constants/pathRoutes";
import { useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import useQueryConfig from "./useQueryConfig";

const useSearchQuiz = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryConfig = useQueryConfig();

  const [inputSearch, setInputSearch] = useState("");

  const handleChangeSearch = (e) => setInputSearch(e.target.value);

  const handleSubmitSearch = () => {
    navigate({
      to: pathname,
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
