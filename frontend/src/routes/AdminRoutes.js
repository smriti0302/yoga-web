import AllAsanas from "../components/content-management/AllAsanas";
import RegisterPlaylistForm from "../components/content-management/forms/RegisterPlaylistForm";
import RegisterVideoForm from "../components/content-management/forms/RegisterVideoForm";
import AdminHome from "../pages/admin/AdminHome";
<<<<<<< Updated upstream
import AllPlaylists from "../components/content-management/AllPlaylists";
import AllLanguages from "../components/content-management/AllLanguages";
import RegisterLanguageForm from "../components/content-management/forms/RegisterLanguage";
import RegisterNewPlan from "../pages/admin/Plans/RegisterNewPlan";
import ViewAllPlans from "../pages/admin/Plans/ViewAllPlans";
=======
import AllPlaylists from "../components/content-management/forms/AllPlaylists";
import Plan from "../components/content-management/forms/Plans";

>>>>>>> Stashed changes
export const AdminRoutes = [
  {
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/content/video/create",
    element: <RegisterVideoForm />,
  },
  {
    path: "/content/playlist/create",
    element: <RegisterPlaylistForm />,
  },
  {
    path: "/content/language/create",
    element: <RegisterLanguageForm />,
  },
  {
    path: "/content/video/create/addmarkers",
    element: <RegisterVideoForm />,
  },
  {
    path: "/admin/allAsanas",
    element: <AllAsanas />,
  },
  {
    path: "/admin/allPlaylists",
    element: <AllPlaylists />,
  },
  {
<<<<<<< Updated upstream
    path: "/admin/allLanguages",
    element: <AllLanguages />,
  },
  {
    path: "/admin/plan/registernewplan",
    element: <RegisterNewPlan />,
  },
  {
    path: "/admin/plan/viewallplans",
    element: <ViewAllPlans />,
  }
=======
    path: "/admin/plans",
    element: <Plan />,
  },
>>>>>>> Stashed changes
];
