const { useState } = require("react");

const useModalShow = () => {
  const [isShow, setIsShow] = useState(false);

  const handleOnHide = () => {
    setIsShow(false);
  };

  return {
    isShow,
    setIsShow,
    onHide: handleOnHide,
  };
};

export default useModalShow;
