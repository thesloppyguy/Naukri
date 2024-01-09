import SvgColor from "../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/",
    icon: icon("ic_analytics"),
  },
  {
    title: "search",
    path: "/search",
    icon: icon("ic_user"),
  },
  {
    title: "jobs",
    path: "/jobs",
    icon: icon("ic_cart"),
  },
  {
    title: "users",
    path: "/users",
    icon: icon("ic_blog"),
  },
];

export default navConfig;
