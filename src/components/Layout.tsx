import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "./organisms/Modal";

const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <Modal handleClick={closeModal} />}
      <Outlet />
    </div>
  );
};

export default Layout;
