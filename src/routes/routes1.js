import ExpenseMerchant from "../Components/Merchant/Account/Expense";
import IncomeMerchant from "../Components/Merchant/Account/Income";
import MakeSalaryMerchant from "../Components/Merchant/Account/MakeSalary";
import PaidInvoiceMerchant from "../Components/Merchant/Account/PaidInvoice";
import UnpaidInvoiceMerchant from "../Components/Merchant/Account/UnpaidInvoice";
import DashboardMerchant from "../Components/Merchant/DashboardMerchant";
import AddFood from "../Components/Merchant/Food/AddFood";
import AllFood from "../Components/Merchant/Food/AllFood";
import CategoriyEdit from "../Components/Merchant/Food/CategoriyEdit";
import EditAllFood from "../Components/Merchant/Food/EditAllFood";
import Categories from "../Components/Merchant/Food/Categories";
import AllOrderMerchant from "../Components/Merchant/Order/AllOrder";
import PendingOrderMerchant from "../Components/Merchant/Order/PendingOrder";
import ProgressOrderMerchant from "../Components/Merchant/Order/ProgressOrder";
import RejectedOrderMerchant from "../Components/Merchant/Order/RejectedOrder";
import ReturningOrderMerchant from "../Components/Merchant/Order/ReturningOrder";
import Profile from "../Components/Merchant/Profile/Profile";
import UpdateAdditional from "../Components/Merchant/Profile/UpdateAdditional";
import UpdatePassword from "../Components/Merchant/Profile/UpdatePassword";
import UpdateProfile from "../Components/Merchant/Profile/UpdateProfile";
import AddExtraItem from "../Components/Merchant/Food/AddExtraItem";
import EditExtraItem from "../Components/Merchant/Food/EditExtraItem";
import OrderDetails from "../Components/Merchant/Order/OrderDetails";
import AddBanner from "../Components/Merchant/AddBanner/AddBanner";
import AllBanner from "../Components/Merchant/AddBanner/AllBanner";

const routes = [
  {
    path: "/merchant/dashboard",
    exact: true,
    name: "DashoardMerchant",
    component: DashboardMerchant,
  },
  {
    path: "/merchant/add-food",
    exact: true,
    name: "AddFood",
    component: AddFood,
  },
  {
    path: "/merchant/add-extra-item",
    exact: true,
    name: "AddExtraItem",
    component: AddExtraItem,
  },
  {
    path: "/merchant/edit-extra-item/:id",
    exact: true,
    name: "EditExtraItem",
    component: EditExtraItem,
  },
  {
    path: "/merchant/categories",
    exact: true,
    name: "Categories",
    component: Categories,
  },
  {
    path: "/merchant/categories/edit/:id",
    exact: true,
    name: "CategoriyEdit",
    component: CategoriyEdit,
  },
  {
    path: "/merchant/all-food",
    exact: true,
    name: "AllFood",
    component: AllFood,
  },
  {
    path: "/merchant/all-food/edit/:id",
    exact: true,
    name: "EditAllFood",
    component: EditAllFood,
  },
  {
    path: "/merchant/all-order",
    exact: true,
    name: "AllOrderMerchant",
    component: AllOrderMerchant,
  },
  {
    path: "/merchant/add-banner",
    exact: true,
    name: "AddBanner",
    component: AddBanner,
  },
  {
    path: "/merchant/all-banner",
    exact: true,
    name: "AllBanner",
    component: AllBanner,
  },
  {
    path: "/merchant/pending-order",
    exact: true,
    name: "PendingOrderMerchant",
    component: PendingOrderMerchant,
  },
  {
    path: "/merchant/rejected-order",
    exact: true,
    name: "RejectedOrderMerchant",
    component: RejectedOrderMerchant,
  },
  {
    path: "/merchant/progress-order",
    exact: true,
    name: "ProgressOrderMerchant",
    component: ProgressOrderMerchant,
  },
  {
    path: "/order-details/:id",
    exact: true,
    name: "OrderDetails",
    component: OrderDetails,
  },
  {
    path: "/merchant/returning-order",
    exact: true,
    name: "ReturningOrderMerchant",
    component: ReturningOrderMerchant,
  },
  {
    path: "/merchant/income",
    exact: true,
    name: "IncomeMerchant",
    component: IncomeMerchant,
  },
  {
    path: "/merchant/expense",
    exact: true,
    name: "ExpenseMerchant",
    component: ExpenseMerchant,
  },
  {
    path: "/merchant/paid-invoice",
    exact: true,
    name: "PaidInvoiceMerchant",
    component: PaidInvoiceMerchant,
  },
  {
    path: "/merchant/unpaid-invoice",
    exact: true,
    name: "UnpaidInvoiceMerchant",
    component: UnpaidInvoiceMerchant,
  },
  {
    path: "/merchant/make-salary",
    exact: true,
    name: "MakeSalaryMerchant",
    component: MakeSalaryMerchant,
  },
  {
    path: "/merchant/profile",
    exact: true,
    name: "Profile",
    component: Profile,
  },
  {
    path: "/merchant/update-info",
    exact: true,
    name: "UpdateAdditional",
    component: UpdateAdditional,
  },
  {
    path: "/merchant/update-profile",
    exact: true,
    name: "UpdateProfile",
    component: UpdateProfile,
  },
  {
    path: "/merchant/update-password",
    exact: true,
    name: "UpdatePassword",
    component: UpdatePassword,
  },
];

export default routes;
