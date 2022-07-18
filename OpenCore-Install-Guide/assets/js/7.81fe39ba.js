(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{396:function(t,e,a){t.exports=a.p+"assets/img/format-usb.83a24b13.png"},570:function(t,e,a){t.exports=a.p+"assets/img/munki.cb5c523a.png"},571:function(t,e,a){t.exports=a.p+"assets/img/munki-process.c0791880.png"},572:function(t,e,a){t.exports=a.p+"assets/img/munki-done.581ad405.png"},573:function(t,e,a){t.exports=a.p+"assets/img/munki-dmg.893a0e5d.png"},574:function(t,e,a){t.exports=a.p+"assets/img/download.974b60da.png"},575:function(t,e,a){t.exports=a.p+"assets/img/boot-disk.73bf04f5.png"},576:function(t,e,a){t.exports=a.p+"assets/img/boot-done.48b57b22.png"},577:function(t,e,a){t.exports=a.p+"assets/img/efi-base.2af0e24a.png"},578:function(t,e,a){t.exports=a.p+"assets/img/mount-efi-usb.c855475e.png"},579:function(t,e,a){t.exports=a.p+"assets/img/base-efi.3b1f0304.png"},709:function(t,e,a){"use strict";a.r(e);var s=a(35),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"making-the-installer-in-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer-in-macos"}},[t._v("#")]),t._v(" Making the installer in macOS")]),t._v(" "),s("p",[t._v("While you don't need a fresh install of macOS to use OpenCore, some users prefer having a fresh slate with their boot manager upgrades.")]),t._v(" "),s("p",[t._v("To start we'll want to grab ourselves a copy of macOS. You can skip this and head to formatting the USB if you're just making a bootable OpenCore stick and not an installer. For everyone else, you can either download macOS from the App Store or with Munki's script.")]),t._v(" "),s("h2",{attrs:{id:"downloading-macos-modern-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos-modern-os"}},[t._v("#")]),t._v(" Downloading macOS: Modern OS")]),t._v(" "),s("ul",[s("li",[t._v("This method allows you to download macOS 10.13 and newer, for 10.12 and older see "),s("a",{attrs:{href:"#downloading-macos-legacy-os"}},[t._v("Downloading macOS: Legacy OS")])])]),t._v(" "),s("p",[t._v("From a macOS machine that meets the requirements of the OS version you want to install, go directly to the App Store and download the desired OS release and continue to "),s("a",{attrs:{href:"#setting-up-the-installer"}},[s("strong",[t._v("Setting up the installer")])]),t._v(".")]),t._v(" "),s("p",[t._v("For machines that need a specific OS release or can't download from the App Store, you can use the Munki's InstallInstallMacOS utility.")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Note for users running macOS Monterey 12.3 or above")]),t._v(" "),s("p",[t._v("Starting from macOS Monterey 12.3, Apple removed support for "),s("code",[t._v("python2.7")]),t._v(", so without it "),s("code",[t._v("installinstallmacos.py")]),t._v(" will throw the following error:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("This tool requires the Python xattr module. Perhaps run 'pip install xattr' to install it.\n")])])]),s("p",[t._v("To overcome the issue, we recommend to install "),s("code",[t._v("Command Line Tools for Xcode")]),t._v(" by running "),s("code",[t._v("xcode-select --install")]),t._v(" in a Terminal and then run "),s("code",[t._v("pip3 install xattr")])]),t._v(" "),s("p",[t._v("After that you can run the same command below but with "),s("code",[t._v("python3")]),t._v(" instead of just "),s("code",[t._v("python")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/macOS-installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/macOS-installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/munki/macadmin-scripts/main/installinstallmacos.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" installinstallmacos.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python3 installinstallmacos.py\n")])])])]),t._v(" "),s("p",[t._v("In order to run it, just copy and paste the below command in a terminal window:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/macOS-installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/macOS-installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/munki/macadmin-scripts/main/installinstallmacos.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" installinstallmacos.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python installinstallmacos.py\n")])])]),s("p",[s("img",{attrs:{src:a(570),alt:""}})]),t._v(" "),s("p",[t._v("As you can see, we get a nice list of macOS installers. If you need a particular versions of macOS, you can select it by typing the number next to it. For this example we'll choose 10:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(571),alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("macOS 12, Monterey Note")]),t._v(": As this OS is quite new, there's still some issues with certain systems to resolve. For more information, see here: "),s("RouterLink",{attrs:{to:"/extras/monterey.html"}},[t._v("macOS 12: Monterey")]),t._v(" "),s("ul",[s("li",[t._v("For first time users, we recommend macOS Catalina (10.15) or Big Sur (11)")]),t._v(" "),s("li",[s("span",{staticStyle:{color:"red"}},[t._v(" CAUTION: ")]),t._v(" With macOS 11.3 and newer, "),s("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/162",target:"_blank",rel:"noopener noreferrer"}},[t._v("XhciPortLimit is broken resulting in boot loops"),s("OutboundLink")],1),t._v(". We advise users either install an older OS(ie. macOS 10.15, Catalina) or find a 11.2.3 or older Big Sur installer\n"),s("ul",[s("li",[t._v("For education purposes, we have a copy provided here: "),s("a",{attrs:{href:"https://archive.org/details/install-mac-os-11.2.3-20-d-91",target:"_blank",rel:"noopener noreferrer"}},[t._v("macOS 11.2.3 InstallAssistant(macOS)"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("If you've already "),s("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/usb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mapped your USB ports"),s("OutboundLink")],1),t._v(" and disabled "),s("code",[t._v("XhciPortLimit")]),t._v(", you can boot macOS 11.3+ without issue")])])])])],1)]),t._v(" "),s("p",[t._v("This is going to take a while as we're downloading the entire 8GB+ macOS installer, so it's highly recommended to read the rest of the guide while you wait.")]),t._v(" "),s("p",[t._v("Once finished, you'll find in your "),s("code",[t._v("~/macOS-Installer/")]),t._v(" folder a DMG containing the macOS Installer, called "),s("code",[t._v("Install_macOS_11.1-20C69.dmg")]),t._v(" for example. Mount it and you'll find the installer application.")]),t._v(" "),s("ul",[s("li",[t._v("Note: We recommend to move the Install macOS.app into the "),s("code",[t._v("/Applications")]),t._v(" folder, as we'll be executing commands from there.")]),t._v(" "),s("li",[t._v("Note 2: Running Cmd+Shift+G in Finder will allow you to easily jump to "),s("code",[t._v("~/macOS-installer")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(572),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(573),alt:""}})]),t._v(" "),s("p",[t._v("From here, jump to "),s("a",{attrs:{href:"#setting-up-the-installer"}},[t._v("Setting up the installer")]),t._v(" to finish your work. If you want to check the integrity of your download, you can check "),s("a",{attrs:{href:"https://github.com/notpeter/apple-installer-checksums",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository of checksums"),s("OutboundLink")],1),t._v(", although do note that these are crowdsourced checksums and may not be a reliable way to check for authenticity.")]),t._v(" "),s("h2",{attrs:{id:"downloading-macos-legacy-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos-legacy-os"}},[t._v("#")]),t._v(" Downloading macOS: Legacy OS")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("This method allows you to download much older versions of OS X, currently supporting all Intel versions of OS X(10.4 to current)")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/installer-guide/mac-install-pkg.html"}},[t._v("Legacy macOS: Offline method")]),t._v(" "),s("ul",[s("li",[t._v("10.10-10.12 Supported")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/installer-guide/mac-install-recovery.html"}},[t._v("Legacy macOS: Online method(10.7-10.15 Supported)")]),t._v(" "),s("ul",[s("li",[t._v("10.7-11 Supported")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/installer-guide/mac-install-dmg.html"}},[t._v("Legacy macOS: Disk Images")]),t._v(" "),s("ul",[s("li",[t._v("10.4-10.6 Supported")])])],1)])])]),t._v(" "),s("h2",{attrs:{id:"setting-up-the-installer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-installer"}},[t._v("#")]),t._v(" Setting up the installer")]),t._v(" "),s("p",[t._v("Now we'll be formatting the USB to prep for both the macOS installer and OpenCore. We'll want to use macOS Extended (HFS+) with a GUID partition map. This will create two partitions: the main "),s("code",[t._v("MyVolume")]),t._v(" and a second called "),s("code",[t._v("EFI")]),t._v(" which is used as a boot partition where your firmware will check for boot files.")]),t._v(" "),s("ul",[s("li",[t._v("Note: By default, Disk Utility only shows partitions – press Cmd/Win+2 to show all devices (alternatively you can press the View button)")]),t._v(" "),s("li",[t._v('Note 2: Users following "Legacy macOS: Online method" section can skip to '),s("a",{attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(396),alt:"Formatting the USB"}})]),t._v(" "),s("p",[t._v("Next run the "),s("code",[t._v("createinstallmedia")]),t._v(" command provided by "),s("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple"),s("OutboundLink")],1),t._v(". Note that the command is made for USB's formatted with the name "),s("code",[t._v("MyVolume")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n")])])]),s("p",[t._v("This will take some time so you may want to grab a coffee or continue reading the guide (to be fair you really shouldn't be following this guide step by step without reading the whole thing first).")]),t._v(" "),s("p",[t._v("You can also replace the "),s("code",[t._v("createinstallmedia")]),t._v(" path with that of where your installer's located (same idea with the drive name).")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Legacy createinstallmedia Commands")]),t._v(" "),s("p",[t._v("Pulled from Apple's own site: "),s("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create a bootable installer for macOS"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monterey")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Monterey.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Catalina")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" High"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app --nointeraction\n")])])])]),t._v(" "),s("h2",{attrs:{id:"legacy-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-setup"}},[t._v("#")]),t._v(" Legacy Setup")]),t._v(" "),s("p",[t._v("For systems not supporting UEFI boot, see below:")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Setting up Legacy Boot")]),t._v(" "),s("p",[t._v("To start, you need the following:")]),t._v(" "),s("ul",[s("li",[t._v("BootInstall_IA32.tool or BootInstall_X64.tool\n"),s("ul",[s("li",[t._v("This can be found in OpenCorePkg under "),s("code",[t._v("/Utilties/LegacyBoot/")])])])]),t._v(" "),s("li",[t._v("Install USB(Created above)")])]),t._v(" "),s("p",[t._v("Within your OpenCore build folder, navigate to "),s("code",[t._v("Utilities/LegacyBoot")]),t._v(". Here you'll find a file called "),s("code",[t._v("BootInstall_ARCH.tool")]),t._v(". What this does is install DuetPkg to your desired drive.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(574),alt:"BootInstall Location"}})]),t._v(" "),s("p",[t._v("Now run this tool in terminal "),s("strong",[t._v("with sudo")]),t._v("(This tool will likely fail otherwise):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace X64 with IA32 if you have a 32-Bit CPU")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ~/Downloads/OpenCore/Utilities/legacyBoot/BootInstall_X64.tool\n")])])]),s("p",[s("img",{attrs:{src:a(575),alt:"Disk Selection/writing new MBR"}})]),t._v(" "),s("p",[t._v("This will give you a list of available disks, choose yours and you will be prompted to write a new MBR. Choose yes"),s("code",[t._v("[y]")]),t._v(" and you'll be finished.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(576),alt:"Finished Installer"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(577),alt:"Base EFI"}})]),t._v(" "),s("p",[t._v("This will provide you with an EFI partition with either a "),s("strong",[t._v("bootia32")]),t._v(" or "),s("strong",[t._v("bootx64")]),t._v(" file")])]),t._v(" "),s("h2",{attrs:{id:"setting-up-opencore-s-efi-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("#")]),t._v(" Setting up OpenCore's EFI environment")]),t._v(" "),s("p",[t._v("Setting up OpenCore's EFI environment is simple – all you need to do is mount our EFI system partition. This is automatically made when we format with GUID but is unmounted by default, this is where our friend "),s("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[t._v("MountEFI"),s("OutboundLink")],1),t._v(" comes in:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(578),alt:"MountEFI"}})]),t._v(" "),s("p",[t._v("You'll notice that once we open the EFI partition, it's empty. This is where the fun begins.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(579),alt:"Empty EFI partition"}})]),t._v(" "),s("h2",{attrs:{id:"now-with-all-of-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-of-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[t._v("#")]),t._v(" Now with all of this done, head to "),s("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[t._v("Setting up the EFI")]),t._v(" to finish up your work")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);