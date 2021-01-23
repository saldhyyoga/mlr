import React from "react";

// admin
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Transaction = React.lazy(() =>
  import("./views/Pages/Transaction/Transaction")
);
const Report = React.lazy(() => import("./views/Pages/Report/Report"));
const UserManagement = React.lazy(() =>
  import("./views/Pages/UserManagement/UserManagement")
);
const EditUser = React.lazy(() =>
  import("./views/Pages/UserManagement/EditUser")
);
// const Bank = React.lazy(() => import('./views/Pages/Bank/Bank'));
const Bank2 = React.lazy(() => import("./views/Pages/Bank/Bank2"));
const EditBank = React.lazy(() => import("./views/Pages/Bank/EditBank"));
const CreateBank = React.lazy(() => import("./views/Pages/Bank/CreateBank"));
// const RekeningAdmin = React.lazy(() => import('./views/Pages/Rekening/Rekening'));
const RekeningAdmin2 = React.lazy(() =>
  import("./views/Pages/Rekening/Rekening2")
);
const CreateRekeningAdmin = React.lazy(() =>
  import("./views/Pages/Rekening/CreateRekening")
);
const EditRekening = React.lazy(() =>
  import("./views/Pages/Rekening/EditRekening")
);
// const UserGroups = React.lazy(() => import('./views/Pages/Group/Group'));
const UserGroups2 = React.lazy(() => import("./views/Pages/Group/Group2"));
const Operation = React.lazy(() => import("./views/Pages/Operation/Operation"));
const AddUser = React.lazy(() => import("./views/Pages/Operation/AddUser"));
// const EditUserOperation = React.lazy(() => import('./views/Pages/Operation/EditUser'));
const EditUserOperational = React.lazy(() =>
  import("./views/Pages/Operation/EditUserOperational")
);

// merchant
const Profile = React.lazy(() => import("./views/Profile/Profile"));
const ConfigAPI = React.lazy(() => import("./views/Pages/ConfigAPI/ConfigAPI"));
const ConfigAPIView = React.lazy(() =>
  import("./views/Pages/ConfigAPI/ConfigAPIView")
);
const RekeningMerchant = React.lazy(() =>
  import("./views/Pages/RekeningMerchant/RekeningMerchant")
);
const CreateRekeningMerchant = React.lazy(() =>
  import("./views/Pages/RekeningMerchant/CreateRekeningMerchant")
);
const EditRekeningMerchant = React.lazy(() =>
  import("./views/Pages/RekeningMerchant/EditRekeningMerchant")
);
const MerchantTransaction = React.lazy(() =>
  import("./views/Pages/TransactionMerchant/Transaction")
);
const ApiDocumentation = React.lazy(() =>
  import("./views/Pages/APIDoc/ApiDoc")
);
const CustomerCare = React.lazy(() =>
  import("./views/Pages/CustomerCare/CustomerCare")
);

// const TestDebounce = React.lazy(() => import('./components/testDebounce'));

const Product = React.lazy(() => import("./views/Pages/Product/index"));
const Penjualan = React.lazy(() => import("./views/Pages/Penjualan/index"));
const Prediksi = React.lazy(() => import("./views/Pages/Prediksi/index"));
const DetailPrediksi = React.lazy(() =>
  import("./views/Pages/Prediksi/DetailPrediksi")
);

const adminRoutes = [
  { path: "/", exact: true, name: "Home", component: Dashboard },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/products", name: "Product", component: Product },
  { path: "/sales", name: "Penjualan", component: Penjualan },
  { path: "/prediksi", name: "Prediksi", component: Prediksi },
  {
    path: "/detail-prediksi/:id",
    name: "Detail Prediksi",
    component: DetailPrediksi,
  },
];

const managerRoutes = [
  { path: "/", exact: true, name: "Home", component: Dashboard },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/prediksi", name: "Prediksi", component: Prediksi },
  {
    path: "/detail-prediksi/:id",
    name: "Detail Prediksi",
    component: DetailPrediksi,
  },
];

export { adminRoutes, managerRoutes };
