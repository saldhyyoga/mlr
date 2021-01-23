const admin = {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      name: "Product",
      url: "/products",
      icon: "icon-diamond",
    },
    {
      name: "Penjualan",
      url: "/sales",
      icon: "icon-pie-chart",
    },
    {
      name: "Prediksi",
      url: "/prediksi",
      icon: "icon-graph",
    },
    // {
    //   name: "Laporan Prediksi",
    //   url: "/laporan-prediksi",
    //   icon: "icon-chart",
    // },
    // {
    //   name: "Akun",
    //   url: "/accounts",
    //   icon: "icon-people",
    // },
  ],
};

const manager = {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      name: "Transaction",
      url: "/transaction-list",
      icon: "icon-wallet",
    },
    {
      name: "My Account",
      icon: "fa fa-user-circle fa-lg",
      children: [
        {
          name: "Profile",
          url: "/profile",
          icon: "fa fa-user-o fa-lg",
        },
      ],
    },
    {
      name: "Settings",
      icon: "icon-wrench",
      children: [
        {
          name: "Config API",
          url: "/config-api",
          icon: "icon-key",
        },
        {
          name: "API Documentation",
          url: "#",
          icon: "icon-book-open",
          attributes: {
            onClick: () => {
              window.open(
                "https://documenter.getpostman.com/view/5363407/T1LVA4pQ"
              );
            },
          },
        },
      ],
    },
    {
      name: "Customer Care",
      url: "/customer-care",
      icon: "icon-user-female",
    },
  ],
};

export { admin, manager };
