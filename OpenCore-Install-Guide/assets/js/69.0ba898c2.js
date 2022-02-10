(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{680:function(t,e,l){"use strict";l.r(e);var i=l(35),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"apple-secure-boot"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#apple-secure-boot"}},[t._v("#")]),t._v(" Apple Secure Boot")]),t._v(" "),l("p",[t._v("These settings in your config.plist can restrict which macOS versions OpenCore will boot. You will want to check these really quick before booting your USB.")]),t._v(" "),l("h2",{attrs:{id:"misc"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),l("h3",{attrs:{id:"security-securebootmodel"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#security-securebootmodel"}},[t._v("#")]),t._v(" Security -> SecureBootModel")]),t._v(" "),l("p",[t._v("OpenCore by default has "),l("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security/applesecureboot.html#what-is-apple-secure-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple Secure Boot"),l("OutboundLink")],1),t._v(" enabled.\nThis enables security features such as the verification of macOS' "),l("code",[t._v("boot.efi")]),t._v(", with the side effect of restricting which macOS versions OpenCore will boot.")]),t._v(" "),l("ul",[l("li",[t._v("Big Sur and Above (11.0+): The recommended value is "),l("code",[t._v("Default")]),t._v(".")]),t._v(" "),l("li",[t._v("High Sierra-Catalina (10.13-10.15):\n"),l("ul",[l("li",[t._v("If your model is not listed below, set to "),l("code",[t._v("Disabled")]),t._v(".")]),t._v(" "),l("li",[t._v("If running Nvidia Web Drivers, set to "),l("code",[t._v("Disabled")]),t._v(".")]),t._v(" "),l("li",[t._v("If your model is listed, compare the minimum version with the version your installing. Disable if your installer is below the minimum version listed for your SMBIOS.")])])]),t._v(" "),l("li",[t._v("Sierra and Below (10.4-10.12): This setting has no effect.")]),t._v(" "),l("li",[t._v("If booting multiple versions, you may need to set the value to "),l("code",[t._v("Disabled")]),t._v(".\n"),l("ul",[l("li",[t._v("For example, a non-T2 SMBIOS booting High Sierra and Big Sur would need this disabled.")]),t._v(" "),l("li",[t._v("A T2 SMBIOS would be limited by the minimum version listed below.")])])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("T2 Mac Models")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("SMBIOS")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Minimum macOS Version")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("iMacPro1,1 (December 2017)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.2 (17C2111)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,1 (July 2018)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,2 (July 2018)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Macmini8,1 (October 2018)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.14 (18A2063)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,1 (October 2018)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.1 (18B2084)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,3 (May 2019)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F132)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,4 (July 2019)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,2 (July 2019)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,1 (November 2019)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B2093)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacPro7,1 (December 2019)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B88)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir9,1 (March 2020)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.3 (19D2064)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,2 (May 2020)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2269)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,3 (May 2020)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2265)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,4 (June 2020)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.5 (19F96)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,1 (August 2020)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,2 (August 2020)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])])])])]),t._v(" "),l("h1",{attrs:{id:"now-with-all-this-done-head-to-the-installation-page"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done-head-to-the-installation-page"}},[t._v("#")]),t._v(" Now with all this done, head to the "),l("RouterLink",{attrs:{to:"/installation/installation-process.html"}},[t._v("Installation Page")])],1)])}),[],!1,null,null,null);e.default=a.exports}}]);