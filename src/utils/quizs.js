const getQuizs = (quizs, queryConfig) => {
  const start = (queryConfig.page - 1) * queryConfig.limit;
  const end = queryConfig.page * queryConfig.limit;

  const allQuizs = quizs.filter((quiz) => {
    if (
      queryConfig?.search &&
      !quiz.title
        .toLocaleLowerCase()
        .includes(queryConfig.search?.toLocaleLowerCase())
    )
      return false;

    if (queryConfig?.difficulty && queryConfig.difficulty === "all")
      return true;

    if (queryConfig?.difficulty && quiz.difficulty !== queryConfig.difficulty)
      return false;

    return true;
  });

  const quizsRender = allQuizs.slice(start, end);

  return { allQuizs, quizsRender };
};

export default getQuizs;
