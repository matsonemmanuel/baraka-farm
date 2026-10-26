export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Training",
    href: "/training",
    children: [
      {
        label: "Training Programmes",
        href: "/training#programmes",
      },
    ],
  },
  {
    label: "Products & Supplies",
    href: "/products",
    children: [
      {
        label: "Poultry Feeds",
        href: "/products/poultry-feeds",
      },
      {
        label: "Feeders & Drinkers",
        href: "/products/feeders-drinkers",
      },
      {
        label: "Vaccines & Medicines",
        href: "/products/vaccines-medicines",
      },
      {
        label: "Housing Equipment",
        href: "/products/housing-equipment",
      },
      {
        label: "Farm Tools",
        href: "/products/farm-tools",
      },
      {
        label: "Supply Packages",
        href: "/products/supply-packages",
      },
      {
        label: "Request a Quote",
        href: "/products/request-quote",
      },
    ],
  },
  {
  label: "Farm Management",
  href: "/farm-management",
  children: [
    {
      label: "Health & Biosecurity",
      href: "/farm-management/health-biosecurity",
    },
  ],
},
  {
    label: "Insights",
    href: "/insights",
    children: [
      {
        label: "Farmer Story",
        href: "/insights/farmer-stories",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];