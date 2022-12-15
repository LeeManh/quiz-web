import SideMenuAdmin from "components/admin/SideMenuAdmin/SideMenuAdmin";
import { AdminLayoutContainer, ContentWrap } from "./AdminLayout.styled";

const AdminLayout = ({ children }) => {
  return (
    <AdminLayoutContainer>
      <SideMenuAdmin />

      <ContentWrap>{children}</ContentWrap>
    </AdminLayoutContainer>
  );
};

export default AdminLayout;
