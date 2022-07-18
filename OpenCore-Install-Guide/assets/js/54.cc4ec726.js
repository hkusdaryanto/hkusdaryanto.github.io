(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{516:function(e,t,i){e.exports=i.p+"assets/img/mmio-white.0ee7b5c7.png"},695:function(e,t,i){"use strict";i.r(t);var a=i(35),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fixing-kaslr-slide-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixing-kaslr-slide-values"}},[e._v("#")]),e._v(" Fixing KASLR slide values")]),e._v(" "),a("p",[e._v('This section is for users who wish to understand and fix "Couldn\'t allocate runtime area" errors. This is most common with either Z390, X99 and X299.')]),e._v(" "),a("ul",[a("li",[e._v("Note: OpenCore is required, Clover is no longer supported in this guide")])]),e._v(" "),a("h2",{attrs:{id:"so-what-is-kaslr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-what-is-kaslr"}},[e._v("#")]),e._v(" So what is KASLR")]),e._v(" "),a("p",[e._v("Well KASLR stands for Kernel address space layout randomization, what it's used for is security purposes. Specifically, this makes it much harder for attackers to figure out where the important objects are in memory as it's always random both between machines and between boots. "),a("a",{attrs:{href:"https://lwn.net/Articles/569635/",target:"_blank",rel:"noopener noreferrer"}},[e._v("More in-depth explainer on KASLR"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Where this becomes an issue is when you introduce devices with either small memory maps or just way too many devices present. There likely is space for the kernel to operate but there's also free space where the kernel won't fit entirely. This is where "),a("code",[e._v("slide=xxx")]),e._v(" fits in. Instead of letting macOS choose a random area to operate in each boot, we'll constrain it to somewhere that we know will work.")]),e._v(" "),a("h2",{attrs:{id:"and-who-is-this-info-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-who-is-this-info-for"}},[e._v("#")]),e._v(" And who is this info for")]),e._v(" "),a("p",[e._v("Well as I mentioned earlier, this is for users who don't have enough space for the kernel or moves to a place that is too small. You'll generally experience an error similar to this when booting:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Error allocating 0x1197b pages at 0x0000000017a80000 alloc type 2\nCouldn't allocate runtime area\n")])])]),a("p",[e._v("With some variation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Only 244/256 slide values are usable!\n")])])]),a("p",[e._v("Or even crashes while running macOS:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("panic(cpu 6 caller 0xffffff801fc057ba): a freed zone element has been modified in zone kalloc.4096: expected 0x3f00116dbe8a46f6 but found 0x3f00116d00000000\n")])])]),a("p",[e._v("The best part about these errors is that they can be random, also the reason why power cycling your PC 20 times also can fix the issue but only temporarily.")]),e._v(" "),a("p",[e._v("Fun Fact: It takes around 31 ms to find an area to operate in, manually setting a slide value can on average can reduce boot times by 0.207%!!!")]),e._v(" "),a("h2",{attrs:{id:"so-how-do-i-fix-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-how-do-i-fix-this"}},[e._v("#")]),e._v(" So how do I fix this")]),e._v(" "),a("p",[e._v("The real fix to this is quite simple actually. What you'll need:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("OpenCore users")]),e._v(":\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenRuntime"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenShell"),a("OutboundLink")],1),e._v("(Don't forget to enable this under "),a("code",[e._v("Root -> Misc -> Tools")]),e._v(")")])])])]),e._v(" "),a("p",[e._v("And we'll also need to configure our config.plist -> Booter:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("AvoidRuntimeDefrag")]),e._v(": YES\n"),a("ul",[a("li",[e._v("Fixes UEFI runtime services like date, time, NVRAM, power control, etc")])])]),e._v(" "),a("li",[a("strong",[e._v("DevirtualiseMmio")]),e._v(": YES\n"),a("ul",[a("li",[e._v("Reduces Stolen Memory Footprint, expands options for "),a("code",[e._v("slide=N")]),e._v(" values and very helpful with fixing Memory Allocation issues on Z390.")])])]),e._v(" "),a("li",[a("strong",[e._v("EnableSafeModeSlide")]),e._v(": YES\n"),a("ul",[a("li",[e._v("Allows for slide values to be used in Safe mode")])])]),e._v(" "),a("li",[a("strong",[e._v("ProtectUefiServices")]),e._v(": NO\n"),a("ul",[a("li",[e._v("Protects UEFI services from being overridden by the firmware, mainly relevant for VMs, 300 series and newer systems like Ice Lake and Comet Lake")])])]),e._v(" "),a("li",[a("strong",[e._v("ProvideCustomSlide")]),e._v(": YES\n"),a("ul",[a("li",[e._v("This makes sure the kernel will only choose good regions and avoid those that may result in boot failures. It's still random but omits those bad regions in its randomization")])])]),e._v(" "),a("li",[a("strong",[e._v("RebuildAppleMemoryMap")]),e._v(": YES\n"),a("ul",[a("li",[e._v("Generates Memory Map compatible with macOS, can break on some laptop OEM firmwares so if you receive early boot failures disable this, this makes sure our memory map will fit to what the kernel expects")])])])]),e._v(" "),a("h2",{attrs:{id:"prepping-the-bios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepping-the-bios"}},[e._v("#")]),e._v(" Prepping the BIOS")]),e._v(" "),a("p",[e._v("The reason we need to reset the memory map is we want it to be more deterministic, what I mean by this is that there will be less variation on each boot so we have fewer edge cases(Memory Maps are not always consistent on boots). To prep:")]),e._v(" "),a("ul",[a("li",[e._v("Update BIOS(extremely important as early BIOS's shipped are known to have memory map issues, especially with Z390)")]),e._v(" "),a("li",[e._v("Clear CMOS")]),e._v(" "),a("li",[e._v("Enable much needed BIOS settings:\n"),a("ul",[a("li",[a("code",[e._v("Above4GDecoding")]),e._v(": This allows devices to use memory regions above 4GB meaning macOS will have more room to fit, can be problematic on some X99, X299 so recommended to test with and without.\n"),a("ul",[a("li",[e._v("Note: On BIOS supporting Resizable BAR Support, enabling Above4G will unlock this option. Please ensure that Booter -> Quirks -> ResizeAppleGpuBars is set to "),a("code",[e._v("0")]),e._v(" if this is enabled.")])])]),e._v(" "),a("li",[a("code",[e._v("Boot Options -> Windows8.1/10 mode")]),e._v(": This will make sure no old legacy garbage is loaded. Fun fact, "),a("code",[e._v("other OS")]),e._v(" is only designed for booting older versions of Windows and not for other OS.")])])]),e._v(" "),a("li",[e._v("Disable as many unneeded devices in the BIOS(this means there is less variation in the map on each boot, so fewer chances of boot failure). Common settings:\n"),a("ul",[a("li",[a("code",[e._v("CSM")]),e._v(": For legacy support, adds a bunch of garbage we don't want. This also can break the shell so you can't boot into it.")]),e._v(" "),a("li",[a("code",[e._v("Intel SGX")]),e._v(": Software Guard Extensions, takes up a lot of space and does nothing in macOS.")]),e._v(" "),a("li",[a("code",[e._v("Parallel Port")]),e._v(": macOS can't even see parallel.")]),e._v(" "),a("li",[a("code",[e._v("Serial Port")]),e._v(": I'd like to know how many of you are debugging the kernel...")]),e._v(" "),a("li",[a("code",[e._v("iGPU")]),e._v(": Not ideal but some systems have such bloated maps that the iGPU just can't fit.")]),e._v(" "),a("li",[a("code",[e._v("Thunderbolt")]),e._v(": Many hacks don't have thunderbolt working, boards that don't have thunderbolt but have this option just waste more space.")]),e._v(" "),a("li",[a("code",[e._v("LED lighting")]),e._v(": Sorry mate, time to go.")]),e._v(" "),a("li",[a("code",[e._v("Legacy USB")]),e._v(": More Legacy Crap.")])])])]),e._v(" "),a("h2",{attrs:{id:"test-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-boot"}},[e._v("#")]),e._v(" Test boot")]),e._v(" "),a("p",[e._v("With our adjusted EFI, config.plist and BIOS settings, it's time we try out our new setup. If you still have issues, well it looks like we'll need to do a deep dive and calculate our slide value")]),e._v(" "),a("h2",{attrs:{id:"finding-the-slide-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-slide-value"}},[e._v("#")]),e._v(" Finding the Slide value")]),e._v(" "),a("p",[e._v("Now what you'll want to do is open the EFI shell in your boot manager of choice and run "),a("code",[e._v("memmap")]),e._v(". This will give you a list of all pages and their sizes. This is where the fun begins.")]),e._v(" "),a("p",[e._v("Example of what you'll see:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Type")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Start")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("End")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("# Pages")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Attributes")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("RT_Data")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000001")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("800000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Available")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000001000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000057FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000057")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Reserved")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000058000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000058FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000001")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Available")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000059000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000008FFFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000037")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("RT_Code")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000090000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000090FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000001")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("800000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Available")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000091000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000009DFFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000D")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Reserved")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000009E000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000009FFFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000002")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Available")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000100000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000005B635FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000005B536")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("BS_Data")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000005B636000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000005B675FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000040")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Available")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000005B676000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006AF77FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000F902")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("LoaderCode")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006AF78000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B155FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("00000000000001DE")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("BS_Data")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B156000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B523FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("00000000000003CE")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("ACPI_NVS")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B524000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B524FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000001")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("BS_Data")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B526000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B625FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("0000000000000100")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Available")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B626000")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000006B634FFF")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("000000000000000F")])])])])]),e._v(" "),a("p",[e._v("Now you may be wondering how the hell we convert this to a slide value, well it's quite simple. What we're interested in is the largest available value within the "),a("code",[e._v("Start")]),e._v(" column. In this example we see that "),a("code",[e._v("000000006B626000")]),e._v(" is our largest, do note that these are in HEX so if there are multiple values close to each other you may need to convert them to decimal. To the calculate slide value(macOS's built-in calculator has a programming function by pressing ⌘+3):")]),e._v(" "),a("p",[a("code",[e._v("000000006B626000")]),e._v(" = "),a("code",[e._v("0x6B626000")])]),e._v(" "),a("p",[e._v("("),a("code",[e._v("0x6B626000")]),e._v(" - "),a("code",[e._v("0x100000")]),e._v(")/"),a("code",[e._v("0x200000")]),e._v(" = "),a("code",[e._v("0x35A")])]),e._v(" "),a("p",[e._v("And to verify that this is correct:")]),e._v(" "),a("p",[a("code",[e._v("0x100000")]),e._v(" + ("),a("code",[e._v("0x35A")]),e._v(" * "),a("code",[e._v("0x200000")]),e._v(") = "),a("code",[e._v("0x6B500000")])]),e._v(" "),a("p",[e._v("Whenever the returned value is "),a("strong",[e._v("not")]),e._v(" the original("),a("code",[e._v("0x6B500000")]),e._v(" vs "),a("code",[e._v("0x6B626000")]),e._v("), just add +1 to your final slide value. This is due to rounding. So for example "),a("code",[e._v("0x35A")]),e._v(" converted to decimal becomes "),a("code",[e._v("858")]),e._v(" and then +1 will give you "),a("code",[e._v("slide=859")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("But wait for just a second, this is higher than 256!")])]),e._v(" "),a("p",[e._v("That is correct, this is caused by memory maps that include "),a("code",[e._v("Above4GDecoding")]),e._v(" sectors which cannot be used. So you will need to keep going down the list until you find a small enough value(for us that would be "),a("code",[e._v("0000000000100000")]),e._v(").")]),e._v(" "),a("p",[e._v("And just to make it a bit clearer on the formula:")]),e._v(" "),a("p",[e._v("(HEX - "),a("code",[e._v("0x100000")]),e._v(")/"),a("code",[e._v("0x200000")]),e._v(" = Slide Value in HEX")]),e._v(" "),a("p",[a("code",[e._v("0x100000")]),e._v(" + (Slide Value in HEX * "),a("code",[e._v("0x200000")]),e._v(") = Your original HEX value(if not then add +1 to your slide value)")]),e._v(" "),a("p",[e._v("With this formula in mind, the highest Start value you would be able to use to give you a low enough slide value would be 0x20100000.")]),e._v(" "),a("p",[e._v("Now navigate into your config.plist and add your slide value with the rest of your boot arguments(for us it would be "),a("code",[e._v("slide=0")]),e._v(" when using "),a("code",[e._v("0x100000")]),e._v("). If this value still gives you errors then you may proceed to the second-largest "),a("code",[e._v("Start")]),e._v(" value and so on.")]),e._v(" "),a("p",[e._v("Sometimes you may find that when you calculate slide that you receive super small vales like "),a("code",[e._v("slide=-0.379150390625")]),e._v(", when this happens round this to "),a("code",[e._v("slide=0")]),e._v(".")]),e._v(" "),a("p",[e._v("And for users who are having issues finding their slide value can also type "),a("code",[e._v("$slide [insert largest #Pages value]")]),e._v(" in the #Sandbox channel on the "),a("a",{attrs:{href:"https://discord.gg/u8V7N5C",target:"_blank",rel:"noopener noreferrer"}},[e._v("r/Hackintosh Discord"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("But this is soooooo hard")])]),e._v(" "),a("p",[e._v("Well fret not, for there is a simple solution. After running "),a("code",[e._v("memmap")]),e._v(" in the shell, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("shell> fs0: //replace with your USB\n\nfs0:\\> dir //to verify this is the right directory, if not try fs1 and so on\n\nDirectory of fs0:\\\n01/01/01 3:30p   EFI\n\nfs0:\\> memmap > memmap.txt\n")])])]),a("p",[e._v("This will add a "),a("code",[e._v("memmap.txt")]),e._v(" file to the root of your EFI, you can then proceed to drop it into the r/Hackintosh discord in the #Sandbox channel and type "),a("code",[e._v("$slide [insert a link to memmap.txt]")])]),e._v(" "),a("h2",{attrs:{id:"using-devirtualisemmio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-devirtualisemmio"}},[e._v("#")]),e._v(" Using DevirtualiseMmio")]),e._v(" "),a("p",[e._v("DevirtualiseMmio is quite an interesting quirk, specifically in that it gets around a huge hurdle with many PCI device systems like some Z390 boards and virtually all HEDT boards like X99 and X299. How it does this is it takes MMIO regions and removes runtime attributes allowing them to be used as space for the kernel to sit comfortably, pair this with "),a("code",[e._v("ProvideCustomSlide")]),e._v(" quirk means we can keep the security feature of slide while also getting a bootable machine.")]),e._v(" "),a("p",[e._v("For extremely problematic systems like Threadripper TRX40 19h, we need to find specific regions that aren't required for proper operation. This is where "),a("code",[e._v("MmioWhitelist")]),e._v(" comes into play. Note that whitelisting isn't required for most systems")]),e._v(" "),a("p",[e._v("If you run the debug version of OpenCore with DevirtualiseMmio, you'll notice this in your logs:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("21:495 00:009 OCABC: MMIO devirt start\n21:499 00:003 OCABC: MMIO devirt 0x60000000 (0x10000 pages, 0x8000000000000001) skip 0\n21:503 00:003 OCABC: MMIO devirt 0xFE000000 (0x11 pages, 0x8000000000000001) skip 0\n21:506 00:003 OCABC: MMIO devirt 0xFEC00000 (0x1 pages, 0x8000000000000001) skip 0\n21:510 00:003 OCABC: MMIO devirt 0xFED00000 (0x1 pages, 0x8000000000000001) skip 0\n21:513 00:003 OCABC: MMIO devirt 0xFEE00000 (0x1 pages, 0x800000000000100D) skip 0\n21:516 00:003 OCABC: MMIO devirt 0xFF000000 (0x1000 pages, 0x800000000000100D) skip 0\n21:520 00:003 OCABC: MMIO devirt end, saved 278608 KB\n")])])]),a("ul",[a("li",[e._v("Note: See "),a("RouterLink",{attrs:{to:"/troubleshooting/debug.html"}},[e._v("OpenCore Debugging")]),e._v(" on how to enable logging to file")],1)]),e._v(" "),a("p",[e._v("So we have 6 regions we need to go through and see which are bad, best idea is to block all MMIO sections "),a("em",[e._v("except")]),e._v(" one and try each region to get a list of good regions.")]),e._v(" "),a("p",[e._v("Now lets take the above example and create our own MmioWhitelist, we'll need to first convert the address from hexadecimal to decimal:")]),e._v(" "),a("ul",[a("li",[e._v("MMIO devirt 0x60000000 -> 1610612736")]),e._v(" "),a("li",[e._v("MMIO devirt 0xFE000000 -> 4261412864")]),e._v(" "),a("li",[e._v("MMIO devirt 0xFEC00000 -> 4273995776")]),e._v(" "),a("li",[e._v("MMIO devirt 0xFED00000 -> 4275044352")]),e._v(" "),a("li",[e._v("MMIO devirt 0xFEE00000 -> 4276092928")]),e._v(" "),a("li",[e._v("MMIO devirt 0xFF000000 -> 4278190080")])]),e._v(" "),a("p",[e._v("Should look something like this when done:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(516),alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);