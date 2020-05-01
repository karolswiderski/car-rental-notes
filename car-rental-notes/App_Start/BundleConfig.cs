using System.Web;
using System.Web.Optimization;

namespace car_rental_notes
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/layout").Include(
                      "~/Scripts/myScripts/Layout/left-menu.js",
                      "~/Scripts/myScripts/Layout/set-display.js"));

            bundles.Add(new StyleBundle("~/bundles/board_index").Include(
                "~/Scripts/myScripts/Board/show-addnewnote.js",
                "~/Scripts/myScripts/Board/operations-with-note.js",
                "~/Scripts/myScripts/Board/operations-with-topToolsBar.js",
                "~/Scripts/myScripts/Board/set-note-layout.js",
                "~/Scripts/myScripts/Other/confirm.js"));

            bundles.Add(new StyleBundle("~/bundles/addnewnote").Include(
                "~/Scripts/myScripts/Board/addnewnote-date-and-timepicker.js"));

            bundles.Add(new StyleBundle("~/bundles/wall").Include(
                "~/Scripts/myScripts/Wall/show-addannouncement.js",
                "~/Scripts/myScripts/Other/confirm.js"));

            bundles.Add(new StyleBundle("~/bundles/account").Include(
                "~/Scripts/myScripts/Account/myaccount-set-partial.js"));

        }
    }
}
