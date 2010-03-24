---
title: TotalFinder brings tabs to your native Finder and more!
product_title: TotalFinder
product_badge: Snow Leopard Only!
product_subtitle: brings tabs to your native Finder and more!
subtitle: brings tabs to your native Finder and more!
layout: product
download: http://downloads.binaryage.com/TotalFinder-0.8.1.dmg
downloadtitle: Download 0.8.1
buy: http://store.binaryage.com
buytitle: buy
note: <b>ALPHA</b> is free until 1.0. Then it expires and you will get chance to buy final version for $15.
advert: Read more about the development progress <a href="http://blog.binaryage.com">on the blog ...</a>
facebook: 1
retweet: 1
usethis: totalfinder
meta_title: TotalFinder brings tabs to your native Finder and more!
meta_description: TotalFinder is a plugin for Finder.app which adds tabs like in Chrome browser and dual panels like in TotalCommander. It also enables various tweaks for advanced users, for example "Folders on Top" feature or "Visor window" available system-wide on a hot key.
meta_image: /images/totalfinder-screenshot-tabs.png
shots: [{
    title: "TotalFinder with tabs!",
    thumb: "/images/totalfinder-screenshot-tabs-t.png",
    full: "/images/totalfinder-screenshot-tabs.png"
},
{
    title: "TotalFinder in dual mode",
    thumb: "/images/totalfinder-screenshot-dual-mode-t.png",
    full: "/images/totalfinder-screenshot-dual-mode.png"
},
{
    title: "TotalFinder visor window slides from bottom",
    thumb: "/images/totalfinder-screenshot-visor-t.png",
    full: "/images/totalfinder-screenshot-visor.png"
},
{
    title: "TotalFinder preferences - Visor",
    thumb: "/images/totalfinder-screenshot-preferences-visor-t.png",
    full: "/images/totalfinder-screenshot-preferences-visor.png"
},
{
    title: "TotalFinder preferences - .DS_Store redirection",
    thumb: "/images/totalfinder-screenshot-preferences-store-t.png",
    full: "/images/totalfinder-screenshot-preferences-store.png"
},
{
    title: "TotalFinder preferences - various tweaks",
    thumb: "/images/totalfinder-screenshot-preferences-tweaks-t.png",
    full: "/images/totalfinder-screenshot-preferences-tweaks.png"
},
{
    title: "TotalFinder preferences - info screen",
    thumb: "/images/totalfinder-screenshot-preferences-info-t.png",
    full: "/images/totalfinder-screenshot-preferences-info.png"
}]
---

## Features

### Motto: Make Finder totally rock!

It is finally possible under Snow Leopard with <a href="http://www.culater.net/software/SIMBL/SIMBL.php">SIMBL</a>.

### Implemented features:

* TABS like in Google Chrome! ([read more](http://blog.binaryage.com/totalfinder-with-tabs))
* Add a dual-panel mode (like in good old Norton Commander)
* Make Finder available system-wide on a hot-key (like [Visor](http://visor.binaryage.com))
* Stop creating .DS_Store litter ([read more](http://blog.binaryage.com/totalfinder-alpha))
* Show the folders always on top ([read more](http://blog.binaryage.com/i-can-haz-folders-on-top))

### Future goals:

* Add a better keyboard shortcuts (for keyboard-oriented freaks like me)
* Enable a cooperation mode with Terminal.app (for command-line lovers)
* Add user friendly [MacFUSE](http://code.google.com/p/macfuse/) support
* And what about better git/svn/hg integration?
* [And more satisfaction!](http://getsatisfaction.com/binaryage/products/binaryage_totalfinder)

## FAQ

#### I'm running OSX 10.5 Leopard. Why is TotalFinder available only for 10.6 Snow Leopard?
> Apple did rewrite of Finder.app for Snow Leopard. The new Finder is using Cocoa framework. This made it possible to build TotalFinder on top of existing Finder app. Older versions of OSX have Finder implemented in Carbon which is almost impossible to tweak. I will never port TotalFinder under Leopard. I'm sorry.

#### I'm afraid of installing any SIMBL plugins. Aren't they evil?
> SIMBL plugin is a program which is able to patch other application **during runtime**. TotalFinder will never overwrite your Finder.app or touch anything inside. Uninstalling basically means removing TotalFinder.bundle from SIMBL folder. SIMBL plugins have same privileges as other (classic) desktop applications. You have to trust the authors that they will not screw up your computer. You have to trust me, I'm quite a nice guy. By the way Finder.app runs under user's rights, not under Administrator's privileges, so it is a classic OSX app.

#### What about Apple Updates of Finder.app or OSX upgrades?
> Right, there is always a risk that application breaks during OS update or upgrade (be it SIMBL or not). With SIMBL that risk is much higher because it hooks into other app's internals. If you want TotalFinder features you have to go and live more dangerously. I'm trying to do my best to make TotalFinder as robust as possible by checking Finder.app shape before overriding it's functionality. Anyway, you have always option to uninstall TotalFinder and return back to your original unaltered Finder.app when something goes wrong. I will do my best to keep TotalFinder compatible with Apple's updates. I'm using this software on daily basis so I can spot problems very quickly :-)

#### How do I uninstall TotalFinder?
> There is an uninstall option under status menu icon. You may also download TotalFinder, open DMG and execute `Uninstall.scpt` applescript. You may check the source code so you can see it is not doing anything evil to your machine.

#### What is that Purchase screen in preferences? Are you going to sell TotalFinder?
> Yes, in the future when it matures to version 1.0. I need to buy a third mac!

#### How much will TotalFinder be?
> Please follow this thread: [http://getsatisfaction.com/binaryage/topics/how_much_will_totalfinder_be](http://getsatisfaction.com/binaryage/topics/how_much_will_totalfinder_be)

#### What is Echelon?
> Echelon is a solution to prevent .DS_Store files to be created all over the place on your disk.<br>Interested how it works? Read this blog post: [http://blog.binaryage.com/totalfinder-alpha](http://blog.binaryage.com/totalfinder-alpha)

#### I use Safari! Can you replace Chrome tabs with Safari tabs?
> I'm indifferent. Some people prefer Chrome tabs, some prefer Safari tabs. There are haters on both sides. This may be "skin" option in the future.

## Changelog

<div class="changelogx">&nbsp;</div>
<script type="text/javascript" charset="utf-8">
    $(function() {
        $('.changelogx').load('changelog.html #page', function() {
            Cufon.replace('.changelogx h4');
        });
    });
</script>