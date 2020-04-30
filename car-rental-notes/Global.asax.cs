using car_rental_notes.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace car_rental_notes
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_AuthenticateRequest()
        {
            if (User == null) return;
            string userName = Context.User.Identity.Name;

            string[] roles = null;
            using (Db db = new Db())
            {
                UsersDTO dto = db.Users.FirstOrDefault(x => x.Login == userName);
                roles = db.UserRoles.Where(x => x.User_Id == dto.User_Id).Select(x => x.Role.Nazwa).ToArray();
            }

            IIdentity userIdentity = new GenericIdentity(userName);
            IPrincipal newUserObj = new GenericPrincipal(userIdentity, roles);

            Context.User = newUserObj;
        }
    }
}
