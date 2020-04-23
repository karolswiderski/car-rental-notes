﻿using System.Web;
using System.Web.Optimization;

namespace car_rental_notes
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // ----------------------------------------------------------------------------------------------------

            bundles.Add(new StyleBundle("~/bundles/layout").Include(
                      "~/Scripts/myScripts/Layout/left-menu.js",
                      "~/Scripts/myScripts/Layout/set-display.js"));

            bundles.Add(new StyleBundle("~/bundles/board_index").Include(
                "~/Scripts/myScripts/Board/show-addnewnote.js",
                "~/Scripts/myScripts/Board/operations-with-note.js",
                "~/Scripts/myScripts/Board/operations-with-topToolsBar.js",
                "~/Scripts/myScripts/Board/set-note-layout.js"));

            bundles.Add(new StyleBundle("~/bundles/addnewnote").Include(
                "~/Scripts/myScripts/Board/choose-option-in-addnewnote.js"));

            bundles.Add(new StyleBundle("~/bundles/wall").Include(
                "~/Scripts/myScripts/Wall/show-addannouncemente.js"));

        }
    }
}
