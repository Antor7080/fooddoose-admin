import AddBanner from "../Components/Admin/AddBanner/AddBanner";
import AllBanner from "../Components/Admin/AddBanner/AllBanner";
import EditBanner from "../Components/Admin/AddBanner/EditBannner";
import Dashboard from "../Components/Admin/Dashboard";
import AddMerchants from "../Components/Admin/Merchants/AddMerchants";
import AllMerchants from "../Components/Admin/Merchants/AllMerchants";
import EditMerchants from "../Components/Admin/Merchants/EditMerchant";
import ViewMerchants from "../Components/Admin/Merchants/ViewMerchant";
import PendingMerchants from "../Components/Admin/Merchants/PendingMerchants";
import RejectedMerchants from "../Components/Admin/Merchants/RejectedMerchants";
import AllOrder from "../Components/Admin/Order/AllOrder";
import PendingOrder from "../Components/Admin/Order/PendingOrder";
import ProgressOrder from "../Components/Admin/Order/ProgressOrder";
import RejectedOrder from "../Components/Admin/Order/RejectedOrder";
import ReturningOrder from "../Components/Admin/Order/ReturningOrder";
import DeliveryCost from "../Components/Admin/DeliveryCost/DeliveryCost";
import MerchantBanner from "../Components/Admin/AddBanner/MerchantBanner";

const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  {
    path: "/admin/add-banner",
    exact: true,
    name: "Dashboard",
    component: AddBanner,
  },
  {
    path: "/admin/merchant-banner",
    exact: true,
    name: "Dashboard",
    component: MerchantBanner,
  },
  {
    path: "/admin/admin-banner",
    exact: true,
    name: "AllBanner",
    component: AllBanner,
  },
  {
    path: "/admin/update-banner/:id",
    exact: true,
    name: "Dashboard",
    component: EditBanner,
  },
  {
    path: "/admin/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/add-merchants",
    exact: true,
    name: "AddMerchants",
    component: AddMerchants,
  },
  {
    path: "/admin/all-merchants",
    exact: true,
    name: "AllMerchants",
    component: AllMerchants,
  },
  {
    path: "/admin/pending-merchants",
    exact: true,
    name: "PendingMerchants",
    component: PendingMerchants,
  },
  {
    path: "/admin/rejected-merchants",
    exact: true,
    name: "RejectedMerchants",
    component: RejectedMerchants,
  },
  {
    path: "/admin/view-merchant/:id",
    exact: true,
    name: "ViewMerchants",
    component: ViewMerchants,
  },
  {
    path: "/admin/edit-merchant/:id",
    exact: true,
    name: "EditMerchant",
    component: EditMerchants,
  },
  {
    path: "/admin/all-order",
    exact: true,
    name: "AllOrder",
    component: AllOrder,
  },
  {
    path: "/admin/pending-order",
    exact: true,
    name: "PendingOrder",
    component: PendingOrder,
  },
  {
    path: "/admin/rejected-order",
    exact: true,
    name: "RejectedOrder",
    component: RejectedOrder,
  },
  {
    path: "/admin/progress-order",
    exact: true,
    name: "ProgressOrder",
    component: ProgressOrder,
  },
  {
    path: "/admin/progress-order",
    exact: true,
    name: "ProgressOrder",
    component: ProgressOrder,
  },
  {
    path: "/admin/returning-order",
    exact: true,
    name: "ReturningOrder",
    component: ReturningOrder,
  },
  {
    path: "/admin/DeliveryCost",
    exact: true,
    name: "DeliveryCost",
    component: DeliveryCost,
  }
];

export default routes;
