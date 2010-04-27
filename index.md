---
title: TotalFinder brings tabs to your native Finder and more!
product_title: TotalFinder
product_badge: Snow Leopard Only!
product_subtitle: brings tabs to your native Finder and more!
subtitle: brings tabs to your native Finder and more!
layout: product
download: http://downloads.binaryage.com/TotalFinder-0.8.3.dmg
downloadtitle: Download 0.8.3
buy: http://store.binaryage.com
buytitle: buy
note: <b>ALPHA</b> is free until 1.0. Then it expires and you may buy final version for $15.
advert: Read more about the development progress <a href="http://blog.binaryage.com">on the blog ...</a>
facebook: 1
retweet: 1
usethis: totalfinder
meta_title: TotalFinder brings tabs to your native Finder and more!
meta_description: TotalFinder is a plugin for Finder.app which adds tabs like in Chrome browser and dual panels like in TotalCommander. It also enables various tweaks for advanced users...
meta_image: /images/totalfinder-screenshot-tabs.png
buzz: 1
fbsdk: 1
ogmeta: {
    site_name: "BinaryAge website",
    description: "TotalFinder adds tabs into your native Finder and more!",
    email: "antonin@binaryage.com",
    type: "product",
    title: "TotalFinder",
    url: "http://totalfinder.binaryage.com",
    image: "http://totalfinder.binaryage.com/shared/img/icons/totalfinder-256.png"
}
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

## Teaser

&#x2764; Love you Veronica! -- Darwin

<embed class="rev3PlayerEmbed" type="application/x-shockwave-flash" src="http://revision3.com/player-v4346" allowFullScreen="true" quality="high" allowScriptAccess="always" width="100%" height="600"/>
<div style="font-size: 10px; text-align: right; position: line-height: 10px;">The footage courtesy of <a href="http://revision3.com/tzdaily/2010-02-16totalfinder">TekZilla Daily (Revision3 TV)</a></div>

## FAQ

#### How TotalFinder works?
> TotalFinder contains plugin which gets loaded into running Finder when you launch TotalFinder.app. It works similar to [SIMBL plugins](http://www.culater.net/software/SIMBL/SIMBL.php) you may know from other programs. TotalFinder is not dependent on SIMBL to be installed in your system (since version 0.8.3).

#### I'm afraid of installing any Finder plugins. Aren't they evil?
> TotalFinder will never overwrite your Finder.app files. It modifies running Finder application in-memory. Uninstalling basically means removing TotalFinder.app, but you should use uninstaller which does proper cleanup.

#### How do I uninstall TotalFinder?
> There is an uninstall option under status menu icon. You may also download TotalFinder again, open DMG and execute `Uninstall TotalFinder.app`.

#### What about Apple updates of Finder.app and OSX upgrades?
> Right, there is always a risk that application breaks during OS update or upgrade. With TotalFinder that risk is much higher because it hooks into Finder's internals. If you want TotalFinder features you have to go and live more dangerously. I'm trying to do my best to make TotalFinder as robust as possible by checking Finder.app version and shape before overriding its functionality. Anyway, you have always option to uninstall TotalFinder and return back to your original unaltered Finder.app when something goes wrong. I will do my best to keep TotalFinder compatible with Apple's updates. I'm using this software on daily basis so I can spot problems very quickly :-)

#### How to run unaltered Finder without uninstalling TotalFinder?
> You may go to Terminal.app and type `killall Finder`. This will restart Finder and TotalFinder does not load automatically. You may also want to remove TotalFinder.app from your login startup items in the `System Preferences` to prevent loading TotalFinder on startup.

#### TotalFinder installs into `/Applications`, may I move it elsewhere?
> No. TotalFinder consists of various components (`TotalFinder.bundle`, `TotalFinder.osax`, `TotalFinder.kext`) and these guys expect `TotalFinder.app` to reside in `/Applications`. Please don't make things  complicated. Also please note that `TotalFinder.app` files are installed under admin's rights. So only admin may remove it. This is because TotalFinder is meant to be installed system-wide for all users. But only the user who installed it gets TotalFinder.app in his/hers login startup items initially. Make sense?

#### I'm running OSX 10.5 (Leopard). Why is TotalFinder available only for OSX 10.6 (Snow Leopard)?
> Apple rewrote of Finder.app for Snow Leopard. The new Finder is using Cocoa framework. This made it possible to build TotalFinder on top of existing Finder.app. Older versions of OSX have Finder implemented in Carbon which is almost impossible to tweak. There is no easy way how to port TotalFinder under Leopard. I'm sorry.

#### What is that Purchase screen in preferences? Are you going to sell TotalFinder?
> Yes, in the future when it matures to version 1.0. I need to buy a third mac!

#### How much will TotalFinder be?
> Please follow this thread: [http://getsatisfaction.com/binaryage/topics/how_much_will_totalfinder_be](http://getsatisfaction.com/binaryage/topics/how_much_will_totalfinder_be)

#### What is TotalFinder.kext (Echelon)?
> Yeah, installing kernel extensions sounds scary, but it is a solution to prevent .DS_Store files to be created all over the place on your disk.<br>Interested how it works? Read this blog post: [http://blog.binaryage.com/totalfinder-alpha](http://blog.binaryage.com/totalfinder-alpha)

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