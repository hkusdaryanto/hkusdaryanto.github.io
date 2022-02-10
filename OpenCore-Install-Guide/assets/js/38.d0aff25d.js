(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{400:function(e,t,a){e.exports=a.p+"assets/img/asus-tsc.2397797f.png"},401:function(e,t,a){e.exports=a.p+"assets/img/asus-tsc-2.029ce318.png"},609:function(e,t,a){e.exports=a.p+"assets/img/lang.cb258f4f.png"},610:function(e,t,a){e.exports=a.p+"assets/img/Default.5b6ca6c9.png"},611:function(e,t,a){e.exports=a.p+"assets/img/Showalldevices.bc11c239.png"},612:function(e,t,a){e.exports=a.p+"assets/img/2-min-remaining.aca72475.jpeg"},613:function(e,t,a){e.exports=a.p+"assets/img/check-network.1589d634.png"},614:function(e,t,a){e.exports=a.p+"assets/img/ping.14fc994b.png"},715:function(e,t,a){"use strict";a.r(t);var r=a(35),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"userspace-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#userspace-issues"}},[e._v("#")]),e._v(" Userspace Issues")]),e._v(" "),r("p",[e._v("Issues regarding once you've booted the installer and the GUI has loaded.")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#macos-installer-in-russian"}},[e._v("macOS installer in Russian")])]),r("li",[r("a",{attrs:{href:"#macos-installer-being-damaged"}},[e._v("macOS Installer being damaged")])]),r("li",[r("a",{attrs:{href:"#stuck-on-or-near-ioconsoleusers-gioscreenlock-giolockstate-3"}},[e._v("Stuck on or near IOConsoleUsers: gIOScreenLock.../gIOLockState (3...")])]),r("li",[r("a",{attrs:{href:"#scrambled-screen-on-laptops"}},[e._v("Scrambled Screen on laptops")])]),r("li",[r("a",{attrs:{href:"#black-screen-after-ioconsoleusers-gioscreenlock-on-laptops-and-aios"}},[e._v("Black screen after IOConsoleUsers: gIOScreenLock... on laptops and AIOs")])]),r("li",[r("a",{attrs:{href:"#black-screen-after-ioconsoleusers-gioscreenlock-on-navi"}},[e._v("Black screen after IOConsoleUsers: gIOScreenLock... on Navi")])]),r("li",[r("a",{attrs:{href:"#frozen-in-the-macos-installer-after-30-seconds"}},[e._v("Frozen in the macOS installer after 30 seconds")])]),r("li",[r("a",{attrs:{href:"#_15h-16h-cpu-reboot-after-data-privacy-screen"}},[e._v("15h/16h CPU reboot after Data & Privacy screen")])]),r("li",[r("a",{attrs:{href:"#macos-frozen-right-before-login"}},[e._v("macOS frozen right before login")])]),r("li",[r("a",{attrs:{href:"#mediakit-reports-not-enough-space"}},[e._v("MediaKit reports not enough space")])]),r("li",[r("a",{attrs:{href:"#diskutility-failing-to-erase"}},[e._v("DiskUtility failing to erase")])]),r("li",[r("a",{attrs:{href:"#sata-drives-not-shown-in-diskutility"}},[e._v("SATA Drives Not Shown in DiskUtility")])]),r("li",[r("a",{attrs:{href:"#stuck-at-2-minutes-remaining"}},[e._v("Stuck at 2 minutes remaining")])]),r("li",[r("a",{attrs:{href:"#the-recovery-server-cannot-get-contacted"}},[e._v("The recovery server cannot get contacted")])]),r("li",[r("a",{attrs:{href:"#keyboard-and-mouse-broken-in-big-sur"}},[e._v("Keyboard and Mouse broken in Big Sur")])]),r("li",[r("a",{attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update-in-order-to-install-to-this-volume"}},[e._v("Stuck on Your Mac needs a firmware update in order to install to this volume")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"macos-installer-in-russian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos-installer-in-russian"}},[e._v("#")]),e._v(" macOS installer in Russian")]),e._v(" "),r("p",[e._v("Default sample config is in Russian because slavs rule the Hackintosh world, check your "),r("code",[e._v("prev-lang:kbd")]),e._v(" value under "),r("code",[e._v("NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82")]),e._v(". Set to "),r("code",[e._v("656e2d55533a30")]),e._v(" for American: en-US:0 and a full list can be found in "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Utilities/AppleKeyboardLayouts/AppleKeyboardLayouts.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleKeyboardLayouts.txt"),r("OutboundLink")],1),e._v(". For those using with a simple text editor(ie. UEFI Shell, Notepad++, etc), "),r("code",[e._v("656e2d55533a30")]),e._v(" will become "),r("code",[e._v("ZW4tVVM6MA==")])]),e._v(" "),r("p",[e._v("You may also need to reset NVRAM in the boot picker as well")]),e._v(" "),r("ul",[r("li",[e._v("Note: Thinkpad laptops are known to be semi-bricked after an NVRAM reset in OpenCore, we recommend resetting NVRAM by updating the BIOS on these machines.")])]),e._v(" "),r("p",[e._v("Still didn't work? Well time for the big guns. We'll force remove that exact property and let OpenCore rebuild it:")]),e._v(" "),r("p",[r("code",[e._v("NVRAM -> Delete -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> Item 0")]),e._v(" then set it Type "),r("code",[e._v("String")]),e._v(" and Value "),r("code",[e._v("prev-lang:kbd")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(609),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"macos-installer-being-damaged"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos-installer-being-damaged"}},[e._v("#")]),e._v(" macOS Installer being damaged")]),e._v(" "),r("p",[e._v("If you've download macOS before October 2019, you likely have an expired macOS Installer certificate, there's 2 ways to fix this:")]),e._v(" "),r("ul",[r("li",[e._v("Download newest copy of macOS")]),e._v(" "),r("li",[e._v("Change date in terminal to when the certificate was valid")])]),e._v(" "),r("p",[e._v("For the latter:")]),e._v(" "),r("ul",[r("li",[e._v("Disconnect all networking devices(Ethernet, disable WiFi)")]),e._v(" "),r("li",[e._v("In the recovery terminal set to September 1st, 2019:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("date 0901000019\n")])])]),r("h2",{attrs:{id:"stuck-on-or-near-ioconsoleusers-gioscreenlock-giolockstate-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-or-near-ioconsoleusers-gioscreenlock-giolockstate-3"}},[e._v("#")]),e._v(" Stuck on or near "),r("code",[e._v("IOConsoleUsers: gIOScreenLock...")]),e._v("/"),r("code",[e._v("gIOLockState (3...")])]),e._v(" "),r("p",[e._v("This is right before the GPU is properly initialized, verify the following:")]),e._v(" "),r("ul",[r("li",[e._v("GPU is UEFI capable(GTX 7XX/2013+)")]),e._v(" "),r("li",[e._v("CSM is off in the BIOS")]),e._v(" "),r("li",[e._v("Forcing PCIe 3.0 link speed")]),e._v(" "),r("li",[e._v("Double check that ig-platform-id and device-id are valid if running an iGPU.\n"),r("ul",[r("li",[e._v("Desktop UHD 630's may need to use "),r("code",[e._v("00009B3E")]),e._v(" instead")])])]),e._v(" "),r("li",[e._v("Trying various "),r("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen Fixes"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("code",[e._v("-igfxmlr")]),e._v(' boot argument. This can also manifest as a "Divide by Zero" error.')])])]),e._v(" "),r("li",[e._v("Coffee Lake iGPU users may also need "),r("code",[e._v("igfxonln=1")]),e._v(" in 10.15.4 and newer")])]),e._v(" "),r("h2",{attrs:{id:"scrambled-screen-on-laptops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scrambled-screen-on-laptops"}},[e._v("#")]),e._v(" Scrambled Screen on laptops")]),e._v(" "),r("p",[e._v('Enable CSM in your UEFI settings. This may appear as "Boot legacy ROMs" or other legacy setting.')]),e._v(" "),r("h2",{attrs:{id:"black-screen-after-ioconsoleusers-gioscreenlock-on-laptops-and-aios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#black-screen-after-ioconsoleusers-gioscreenlock-on-laptops-and-aios"}},[e._v("#")]),e._v(" Black screen after "),r("code",[e._v("IOConsoleUsers: gIOScreenLock...")]),e._v(" on laptops and AIOs")]),e._v(" "),r("p",[e._v("Verify the following:")]),e._v(" "),r("ul",[r("li",[e._v("SSDT-PNLF is installed(ie. EFI/OC/ACPI as well as config.plist -> ACPI -> Add)")]),e._v(" "),r("li",[e._v("iGPU properties were setup correctly under "),r("code",[e._v("DeviceProperties -> Add -> PciRoot(0x0)/Pci(0x2,0x0)")])]),e._v(" "),r("li",[e._v("Coffee Lake and newer laptops, add "),r("code",[e._v("-igfxblr")]),e._v(" to your boot-args\n"),r("ul",[r("li",[e._v("Alternatively, add "),r("code",[e._v("enable-backlight-registers-fix | Data | 01000000")]),e._v(" to "),r("code",[e._v("PciRoot(0x0)/Pci(0x2,0x0)")])])])])]),e._v(" "),r("p",[e._v("Additionally, verify issues mentioned in "),r("a",{attrs:{href:"#stuck-on-or-near-ioconsoleusers-gioscreenlock-giolockstate-3"}},[e._v("Stuck on or near "),r("code",[e._v("IOConsoleUsers: gIOScreenLock...")])])]),e._v(" "),r("h2",{attrs:{id:"black-screen-after-ioconsoleusers-gioscreenlock-on-navi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#black-screen-after-ioconsoleusers-gioscreenlock-on-navi"}},[e._v("#")]),e._v(" Black screen after "),r("code",[e._v("IOConsoleUsers: gIOScreenLock...")]),e._v(" on Navi")]),e._v(" "),r("ul",[r("li",[e._v("Add "),r("code",[e._v("agdpmod=pikera")]),e._v(" to boot args")]),e._v(" "),r("li",[e._v("Switch between different display outputs")]),e._v(" "),r("li",[e._v("Try running MacPro7,1 SMBIOS with the boot-arg "),r("code",[e._v("agdpmod=ignore")])])]),e._v(" "),r("p",[e._v("For MSI Navi users, you'll need to apply the patch mentioned here: "),r("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/901",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installer not working with 5700XT #901"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Specifically, add the following entry under "),r("code",[e._v("Kernel -> Patch")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Base:\nComment: Navi VBIOS Bug Patch\nCount: 1\nEnabled: YES\nFind: 4154592C526F6D2300\nIdentifier: com.apple.kext.AMDRadeonX6000Framebuffer\nLimit: 0\nMask:\nMinKernel:\nMaxKernel:\nReplace: 414D442C526F6D2300\nReplaceMask:\nSkip: 0\n")])])]),r("h2",{attrs:{id:"frozen-in-the-macos-installer-after-30-seconds"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frozen-in-the-macos-installer-after-30-seconds"}},[e._v("#")]),e._v(" Frozen in the macOS installer after 30 seconds")]),e._v(" "),r("p",[e._v("This is likely due to faulty or outright missing NullCPUPowerManagement, the one hosted on AMD OSX's Vanilla Guide is corrupted. Go yell at Shannee to fix it. To fix the issue, remove NullCPUPowerManagement from "),r("code",[e._v("Kernel -> Add")]),e._v(" and "),r("code",[e._v("EFI/OC/Kexts")]),e._v(" then enable "),r("code",[e._v("DummyPowerManagement")]),e._v(" under "),r("code",[e._v("Kernel -> Emulate")])]),e._v(" "),r("h2",{attrs:{id:"_15h-16h-cpu-reboot-after-data-privacy-screen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_15h-16h-cpu-reboot-after-data-privacy-screen"}},[e._v("#")]),e._v(" 15h/16h CPU reboot after Data & Privacy screen")]),e._v(" "),r("p",[e._v("Follow directions here after UPDATE 2: "),r("a",{attrs:{href:"https://www.insanelymac.com/forum/topic/335877-amd-mojave-kernel-development-and-testing/?do=findComment&comment=2658085",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fix Data and Privacy reboot"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"macos-frozen-right-before-login"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos-frozen-right-before-login"}},[e._v("#")]),e._v(" macOS frozen right before login")]),e._v(" "),r("p",[e._v("This is a common example of screwed up TSC, for most system add "),r("a",{attrs:{href:"https://github.com/lvs1974/CpuTscSync",target:"_blank",rel:"noopener noreferrer"}},[e._v("CpuTscSync"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("For Skylake-X, many firmwares including Asus and EVGA won't write to all cores. So we'll need to reset the TSC on cold boot and wake with "),r("a",{attrs:{href:"https://github.com/interferenc/TSCAdjustReset",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSCAdjustReset"),r("OutboundLink")],1),e._v(". Compiled version can be found here: "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/TSCAdjustReset.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSCAdjustReset.kext"),r("OutboundLink")],1),e._v(". Note that you "),r("strong",[e._v("must")]),e._v(" open up the kext(ShowPackageContents in finder, "),r("code",[e._v("Contents -> Info.plist")]),e._v(") and change the Info.plist -> "),r("code",[e._v("IOKitPersonalities -> IOPropertyMatch -> IOCPUNumber")]),e._v(" to the number of CPU threads you have starting from "),r("code",[e._v("0")]),e._v("(i9 7980xe 18 core would be "),r("code",[e._v("35")]),e._v(" as it has 36 threads total)")]),e._v(" "),r("p",[e._v("The most common way to see the TSC issue:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[e._v("Case 1")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Case 2")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[r("img",{attrs:{src:a(400),alt:""}})]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("img",{attrs:{src:a(401),alt:""}})])])])]),e._v(" "),r("h2",{attrs:{id:"mediakit-reports-not-enough-space"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mediakit-reports-not-enough-space"}},[e._v("#")]),e._v(" MediaKit reports not enough space")]),e._v(" "),r("p",[e._v("This error is due to a small EFI, by default Windows will create a 100MB EFI whereas macOS will expect 200MB. To get around this you have 2 way to go:")]),e._v(" "),r("ul",[r("li",[e._v("Expand the EFI of the drive to 200MB(See Google on how)")]),e._v(" "),r("li",[e._v("Format the entire drive instead of just the partition\n"),r("ul",[r("li",[e._v("Note by default Disk Utility only shows partitions, press Cmd/Win+2 to show all devices(Alternatively you can press the view button)")])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[e._v("Default")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Show All Devices(Cmd+2)")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[r("img",{attrs:{src:a(610),alt:""}})]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("img",{attrs:{src:a(611),alt:""}})])])])]),e._v(" "),r("h2",{attrs:{id:"diskutility-failing-to-erase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#diskutility-failing-to-erase"}},[e._v("#")]),e._v(" DiskUtility failing to erase")]),e._v(" "),r("p",[e._v("This is either 1(or more) of 5 issues:")]),e._v(" "),r("ul",[r("li",[e._v("Formatting partition and not the drive, see "),r("a",{attrs:{href:"#mediakit-reports-not-enough-space"}},[e._v("MediaKit reports not enough space")])]),e._v(" "),r("li",[e._v("DiskUtility has an odd bug where it will fail on first erase, try erasing again")]),e._v(" "),r("li",[e._v("SATA Hot-plug support in the BIOS is causing issues(try disabling this option)")]),e._v(" "),r("li",[e._v("Old firmware, make sure the drive is on the latest firmware")]),e._v(" "),r("li",[e._v("And finally, you may just have a bad drive")])]),e._v(" "),r("h2",{attrs:{id:"sata-drives-not-shown-in-diskutility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sata-drives-not-shown-in-diskutility"}},[e._v("#")]),e._v(" SATA Drives Not Shown in DiskUtility")]),e._v(" "),r("ul",[r("li",[e._v("Make sure SATA Mode is AHCI in bios")]),e._v(" "),r("li",[e._v("Certain SATA controllers may not be officially supported by macOS, for these cases you'll want to grab "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/CtlnaAHCIPort.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("CtlnaAHCIPort.kext"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For very legacy SATA controllers, "),r("a",{attrs:{href:"https://www.insanelymac.com/forum/files/file/436-ahciportinjectorkext/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AHCIPortInjector.kext"),r("OutboundLink")],1),e._v(" may be more suitable.")])])])]),e._v(" "),r("h2",{attrs:{id:"stuck-at-2-minutes-remaining"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stuck-at-2-minutes-remaining"}},[e._v("#")]),e._v(" Stuck at 2 minutes remaining")]),e._v(" "),r("p",[r("img",{attrs:{src:a(612),alt:""}})]),e._v(" "),r("p",[e._v("This error is directly related to the stage at which macOS will write certain NVRAM variables for your system to boot next, and so when there's issues revolving around NVRAM it'll stall here.")]),e._v(" "),r("p",[e._v("To resolve, we have a few options:")]),e._v(" "),r("ul",[r("li",[e._v("300 series Intel Fix(ie. Z390):\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PMC"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Others can set the following in their config.plist:\n"),r("ul",[r("li",[e._v("LegacyEnable -> YES")]),e._v(" "),r("li",[e._v("LegacyOverwrite -> YES")]),e._v(" "),r("li",[e._v("WriteFlash -> YES")])])])]),e._v(" "),r("h2",{attrs:{id:"the-recovery-server-cannot-get-contacted"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-recovery-server-cannot-get-contacted"}},[e._v("#")]),e._v(" The recovery server cannot get contacted")]),e._v(" "),r("p",[e._v("If you made your installer in Windows or Linux, then this means your USB installer is recovery based. What this means is that only a small portion of the macOS installer is on disk while the rest must be downloaded from Apple servers in the installer. And reason we do not include full installer guides is due to unstable HFS drivers and other utilities that commonly end up with data corruption.")]),e._v(" "),r("p",[e._v("To resolve the error, you have a few options:")]),e._v(" "),r("ul",[r("li",[e._v("Ensure you have a working Ethernet or WiFi connection\n"),r("ul",[r("li",[e._v("Open "),r("code",[e._v("Network Utility")]),e._v(" under "),r("code",[e._v("Utilties")]),e._v(" header in the installer and see if your Network Card shows up\n"),r("ul",[r("li",[e._v("If you network card "),r("strong",[e._v("doesn't")]),e._v(" show up, it's likely you're missing the right Network kext\n"),r("ul",[r("li",[e._v("Please refer here: "),r("RouterLink",{attrs:{to:"/ktext.html#ethernet"}},[e._v("Ethernet Kexts")]),e._v(" and "),r("RouterLink",{attrs:{to:"/find-hardware.html"}},[e._v("Finding your hardware")])],1)])]),e._v(" "),r("li",[e._v("If the network card "),r("strong",[e._v("does")]),e._v(" show up, next run "),r("code",[e._v("ping -c3 www.google.com")]),e._v(" in the installer's terminal to ensure your network connection is working\n"),r("ul",[r("li",[e._v("If nothing shows, either your network or kexts are acting up\n"),r("ul",[r("li",[e._v("We recommend trying older variants of kexts in cases where newer builds have weird bugs with your hardware")])])]),e._v(" "),r("li",[e._v("If it does return something, then the issue is on Apple's end. You'll simply need to try to install again another time unfortunately")])])])])])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Check NIC")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Ping")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("img",{attrs:{src:a(613),alt:""}})]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("img",{attrs:{src:a(614),alt:"Ping"}})])])])]),e._v(" "),r("h2",{attrs:{id:"keyboard-and-mouse-broken-in-big-sur"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-and-mouse-broken-in-big-sur"}},[e._v("#")]),e._v(" Keyboard and Mouse broken in Big Sur")]),e._v(" "),r("p",[e._v("For certain legacy systems(ie. Core2 Duo/2010 and older), you may notice that while the USB ports work your HID-based devices such as the keyboard and mouse may be broken. To resolve this, add the following patch:")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("IOHIDFamily Patch")]),e._v(" "),r("p",[e._v("config.plist -> Kernel -> Patch:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Key")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Type")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Base")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("String")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("_isSingleUser")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Count")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Integer")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("1")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Enabled")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Boolean")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("True")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Find")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Data")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Identifier")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("String")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("com.apple.iokit.IOHIDFamily")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Limit")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Integer")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("0")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Mask")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Data")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("MaxKernel")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("String")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("MinKernel")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("String")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("20.0.0")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Replace")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Data")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("B801000000C3")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("ReplaceMask")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Data")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Skip")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Integer")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("0")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://applelife.ru/threads/ustanovka-macos-big-sur-11-0-beta-na-intel-pc-old.2944999/page-81#post-884400",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"stuck-on-your-mac-needs-a-firmware-update-in-order-to-install-to-this-volume"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update-in-order-to-install-to-this-volume"}},[e._v("#")]),e._v(" Stuck on "),r("code",[e._v("Your Mac needs a firmware update in order to install to this volume")])]),e._v(" "),r("p",[e._v("If you're being prompted to update your firmware to install with an APFS volume, this likely indicates an outdated SMBIOS table. First, verify the following:")]),e._v(" "),r("ul",[r("li",[e._v("You have "),r("code",[e._v("PlatformInfo -> Automatic")]),e._v(" enabled")]),e._v(" "),r("li",[r("code",[e._v("UpdateSMBIOSMode")]),e._v(" is set to "),r("code",[e._v("Create")]),e._v(" "),r("ul",[r("li",[e._v("Make sure "),r("code",[e._v("CustomSMBIOSGuid")]),e._v(" is disabled")]),e._v(" "),r("li",[e._v("For Dell and VAIO machines, ensure that "),r("code",[e._v("CustomSMBIOSGuid")]),e._v(" is enabled and "),r("code",[e._v("UpdateSMBIOSMode")]),e._v(" is set to "),r("code",[e._v("Custom")]),e._v(" instead\n"),r("ul",[r("li",[r("code",[e._v("CustomSMBIOSGuid")]),e._v(" and "),r("code",[e._v("UpdateSMBIOSMode")]),e._v(" should always be in tandem with each other")])])])])]),e._v(" "),r("li",[e._v("Using a SMBIOS supported in this version of macOS\n"),r("ul",[r("li",[e._v("ie. you're not using "),r("code",[e._v("-no_compat_check")])])])]),e._v(" "),r("li",[e._v("You're using the latest version of OpenCore")])]),e._v(" "),r("p",[e._v("If you still receive this error, then there's likely some outdated SMBIOS info in OpenCore itself. We recommend changing to a similar SMBIOS and see if this is resolved. For a full list of SMBIOS, see here: "),r("RouterLink",{attrs:{to:"/extras/smbios-support.html"}},[e._v("Choosing the right SMBIOS")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);