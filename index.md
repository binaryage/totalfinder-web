---
title: TotalFinder brings tabs to your native Finder and more!
product_title: TotalFinder
subtitle: brings tabs to your native Finder and more!
layout: product
icon: /shared/img/totalfinder-icon.png
downloadtitle: Download v0.8.1
download: http://downloads.binaryage.com/TotalFinder-0.8.1.dmg
mainshot: /shared/img/totalfinder-mainshot.png
mainshotfull: /shared/img/totalfinder-mainshot-full.png
overlaysx: 1032px
overlaysy: 683px
overlaycx: 25px
overlaycy: 10px
facebook: 1
retweet: 1
---

<div class="more-box more-box-align">
    <div class="release-notice" style="font-size: 18px">Still in ALPHA, but cool! Snow Leopard only!</div>
    <p class="release-explanation">Read more about latest releases <a href="http://blog.binaryage.com">on the blog</a>.</p>
</div>

## Features

#### Motto: <strike>Let's teach Finder new tricks!</strike> No, make Finder rock!

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

#### When we can expect the first version?
> Hey, look for download button in the top part of the page. Still in ALPHA though.

#### I'm afraid of installing any SIMBL plugins. Aren't they evil?
> SIMBL plugin is a program which is able to patch other application **during runtime**. TotalFinder will never overwrite your Finder.app or touch anything inside. Uninstalling basically means removing TotalFinder.bundle from SIMBL folder. SIMBL plugins have same privileges as other (classic) desktop applications. You have to trust the authors that they will not screw up your computer. You have to trust me, I'm quite a nice guy. By the way Finder.app runs under user's rights, not under Administrator's privileges, so it is a classic OSX app.

#### What about Apple Updates of Finder.app or OSX upgrades?
> Right, there is always a risk that application breaks during OS update or upgrade (be it SIMBL or not). With SIMBL that risk is much higher because it hooks into other app's internals. If you want TotalFinder features you have to go and live more dangerously. I'm trying to make TotalFinder as robust as possible by checking Finder.app shape before overriding it's functionality. Anyway, you have always option to uninstall TotalFinder and return back to your original unaltered Finder.app when something goes wrong. I will do my best to keep TotalFinder compatible with Apple's updates. Believe it or not, I'm using this software on daily basis so I can spot problems very quickly :-)

#### How do I uninstall TotalFinder?
> Download TotalFinder, open DMG and execute `Uninstall.scpt` applescript. You may check the source code so you can see it is not doing anything evil to your machine.

#### Are you going to sell this?
> Yes, in the future. I need to buy a third mac!

#### How much will TotalFinder be?
> Please follow this thread: [http://getsatisfaction.com/binaryage/topics/how_much_will_totalfinder_be](http://getsatisfaction.com/binaryage/topics/how_much_will_totalfinder_be)

#### I'm willing to pay you 20EUR if you open-source it. Would it be possible?
> Not anytime soon. I love open-source, but this is not the type of a project suitable as an open-source product. Donations for open-source tools haven't worked for me very well in the past. But I'm open for discussion.

#### What is Echelon?
> Echelon is a solution to prevent .DS_Store files to be created all over the place on your disk.<br>Interested how it works? Read this blog post: [http://blog.binaryage.com/totalfinder-alpha](http://blog.binaryage.com/totalfinder-alpha)

#### Can you replace Chrome tabs with Safari tabs?
> I'm indifferent. Some people prefer Chrome tabs, some prefer Safari tabs. There are haters on both sides. This may be "skin" option in the future.

## History
<div class="changelog">&nbsp;</div>
<script type="text/javascript" charset="utf-8">
    $('.changelog').load('changelog.html #page');
</script>