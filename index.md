---
title: TotalFinder brings tabs to your native Finder and more!
product_title: TotalFinder
product_badge: Snow Leopard Only!
product_subtitle: brings tabs to your native Finder and more!
subtitle: brings tabs to your native Finder and more!
layout: product
download: http://downloads.binaryage.com/TotalFinder-0.9.3.dmg
downloadtitle: Download 0.9.3
buy: http://store.binaryage.com
buytitle: buy
note: TotalFinder is free until version 1.0 at which point the fee will be $15.
advert: Read more about the development progress <a href="http://blog.binaryage.com">on the blog ...</a>
facebook: 1
retweet: 1
usethis: totalfinder
meta_title: TotalFinder brings tabs to your native Finder and more!
meta_keywords: totalfinder,binaryage,finder,visor,osx,app,application,productivity,mac,indie,software
meta_description: TotalFinder is a plugin for Finder.app which adds tabs like in Chrome browser, dual panels similar to TotalCommander and more tweaks.
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

#### How does TotalFinder work?
> TotalFinder is a plugin which gets loaded into the Finder when you launch the TotalFinder.app. It works similarly to [SIMBL plugins](http://www.culater.net/software/SIMBL/SIMBL.php) which you may know from other programs. However, TotalFinder is a standalone application and is not dependent on SIMBL (since version 0.8.3).

#### I'm afraid of installing any Finder plugins. Aren't they evil?
> TotalFinder will never overwrite your Finder.app files. It modifies the running Finder application image in-memory.

#### How do I uninstall TotalFinder?
> There is an uninstall option available through the TotalFinder menubar icon. You can also download TotalFinder again, open the DMG, and then execute `Uninstall TotalFinder.app`.

#### What about Finder upgrades and system updates?
> First of all, I use TotalFinder myself on a daily basis so I am able to spot any potential problems very quickly. Plus, I am 100% committed to keeping TotalFinder compatible with Apple's updates.
Please remember, if you ever do experience any problem whatsoever, it's extremely easy to uninstall TotalFinder and return to the Apple's basic Finder. Please help make TotalFinder better and report your issues on [getsatisfaction](http://getsatisfaction.com/binaryage).

#### How can I run an unaltered Finder without uninstalling TotalFinder?
> You can go to the Terminal and type: `killall Finder`. This will restart the Finder and TotalFinder will not load automatically at this time. You can also remove TotalFinder from your login startup items in the System Preferences to prevent TotalFinder from loading at startup.

#### TotalFinder installs into `/Applications`. Can I move it elsewhere?
> No. 
TotalFinder consists of various components (TotalFinder.bundle, TotalFinder.osax, TotalFinder.kext). Each of these items expect TotalFinder.app to reside in /Applications. 
Please also note that TotalFinder files are installed under admin's rights. So only admin may remove it. This is because TotalFinder is meant to be installed system-wide for all users.

#### I'm running OSX 10.5 (Leopard). Why is TotalFinder available only for OSX 10.6 (Snow Leopard)?
> Apple rewrote the Finder for Snow Leopard. The Finder in Snow Leopard uses the Cocoa framework and this made it possible to build TotalFinder on top of the base level Finder. In older versions of OSX the Finder uses the Carbon framework which is almost impossible to tweak. This means that there is simply no easy way to make TotalFinder work under Leopard. Sorry!

#### How much is TotalFinder?
> From Version 1.0 onwards, TotalFinder is no longer free and will cost $15. In terms of licensing I'd like using the concept of dual licensing:
> <br>1) Per-user = use it on as many machines you want while you are the only user using this license of TotalFinder
> <br>2) Per-machine = use it on one machine, unlimited number of users. You may freely switch between those two.

#### What is TotalFinder.kext (Echelon)?
> It is a solution to prevent .DS_Store files to be created in local folders of your disk. TotalFinder keeps them in one separate folder, but pretends to Finder they are still in original places. Are you more interested in how it works? Read this blog post: [http://blog.binaryage.com/totalfinder-alpha](http://blog.binaryage.com/totalfinder-alpha)

#### I use Safari! Can you replace Chrome tabs with Safari tabs?
> I'm indifferent. Some people prefer Chrome tabs, some prefer Safari tabs. There are haters on both sides. This may be a "skin" option in the future.

I am always open to feedback and suggestions. Thanks!

## Changelog

<div class="changelogx">&nbsp;</div>
<script type="text/javascript" charset="utf-8">
    $(function() {
        $('.changelogx').load('changelog.html #page', function() {
            Cufon.replace('.changelogx h4');
        });
    });
</script>