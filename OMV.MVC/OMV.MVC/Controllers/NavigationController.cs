using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OMV.MVC.Controllers
{
    public class NavigationController : Controller
    {
        //
        // GET: /Navigation/
        public ActionResult Index(string category, string subcategories)
        {
            var categoryBag = category;
            List<string> parts = new List<string>();
            foreach(string p in subcategories.Split('/'))
            {
                parts.Add(p);
            }

           
            return Content(String.Format("{0}",parts[0]+parts[1]));
        }
	}
}