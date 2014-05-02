---
layout: tf-doc
title: About TotalFinder
subtitle: About TotalFinder
---

## TotalFinder is just a better Finder

<img src="/images/showcase/thumb-showcase-dual-mode.png" style="float:right; width:360px; margin-left: 20px; position: relative; top: -24px">

TotalFinder works like the original Finder but adds [tabs](/tabs), [dual panel mode](/dual-mode), [folders on top](/folders-on-top) and other [useful features](/tweaks).

My goal is to improve the Finder in areas where it is lacking but keep the overall design, which is good.

TotalFinder works 10.8 (Mountain Lion) and 10.9 (Mavericks).

## TotalFinder is a plugin, not a replacement

TotalFinder is an add-on which gets loaded into the Finder when you launch `TotalFinder.app`. It does not modify your Finder files on the disk. TotalFinder is a standalone application. When launched it changes the current instance of Finder running in memory. We call this process injection.

## System updates from Apple

Due to the nature of how TotalFinder works, there is a small risk that TotalFinder might break with future Finder updates. Our entire team uses TotalFinder on a daily basis so we spot problems very quickly. So far, Finder updates have generally introduced minor cosmetic changes. I am also a member of Apple's Developer Program and have access to pre-release versions of system updates. I am committed to keeping TotalFinder compatible with Apple's updates.

Please remember that if you ever experience any problem whatsoever, please send us a [support email](mailto:support@binaryage.com). In the worst case, it is easy to [uninstall TotalFinder](/uninstallation) and return to the Apple's basic Finder.

## How to restart the Finder

The easies way is probably via Force Quit menu (`CMD+OPT+ESC`):

<img src="/images/force-quit-finder.png" class="doc-image-with-shadow" style="width: 400px">

Alternatively you can go to the `Terminal.app` and type: 
   
    killall Finder

Killing Finder will restart the Finder without injecting TotalFinder again. To reopen TotalFinder, launch TotalFinder.app in /Applications.