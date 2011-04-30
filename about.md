---
layout: tf-doc
title: About TotalFinder
subtitle: About TotalFinder
---

## TotalFinder is just a better Finder

<img src="/images/showcase/thumb-showcase-dual-mode.png" style="float:right; width:360px; margin-left: 20px; position: relative; top: -24px">

TotalFinder works like the original Finder but adds [tabs](/tabs), [dual panel](/dual-mode), [folders on top](/folders-on-top) and other [useful features](/tweaks).

My goal is to improve Finder in areas where it lacks but keep the overall design which is good in my opinion.

TotalFinder works OSX 10.6 (Snow Leopard). [Some features](/lion) are also available in OSX 10.7 (Lion).

## TotalFinder is a plugin for Finder

TotalFinder is an add-on which gets loaded into the Finder when you launch `TotalFinder.app`. It does not modify your Finder files on the disk, it modifies current instance of Finder running in memory. It works similarly to [SIMBL plugins](http://www.culater.net/software/SIMBL/SIMBL.php) which you may know from [other programs](http://code.google.com/p/simbl/wiki/SIMBLPlugins). However, TotalFinder is a standalone application and is not dependent on SIMBL and should work reliably alongside other SIMBL applications.

## System updates from Apple

Due to the nature of how TotalFinder works, there is a small risk that TotalFinder might break with future Finder version. I use TotalFinder myself on a daily basis so I am able to spot any potential problems very quickly. So far Finder updates have introduced just minor cosmetic changes. I am also member of Apple Developer Program and have access to pre-release versions of system updates. I'm committed to keeping TotalFinder compatible with Apple's updates. 

Please remember, if you ever do experience any problem whatsoever, it is extremely easy to [uninstall TotalFinder](/uninstallation) and return to the Apple's basic Finder. In case of any troubles you may [find help on forums](http://support.binaryage.com) quickly or [email me directly](mailto:antonin@binaryage.com). Just keep this in mind.

## TotalFinder installs into /Applications

You cannot move it elsewhere. TotalFinder consists of various components (`TotalFinder.bundle`, `TotalFinder.osax`, `TotalFinder.kext`). Each of these items expects TotalFinder.app to reside in /Applications. Please also note that TotalFinder files are installed under admin rights. So only admin may remove it. This is because TotalFinder is meant to be installed system-wide for all users.

## How to restart Finder

You can go to the Terminal.app and type: 
   
    killall Finder 
    
This will restart the Finder into an unaltered state. That means TotalFinder will not load automatically this time. To open TotalFinder again launch TotalFinder.app in /Applications.

## TotalFinder Kernel Extension

TotalFinder.kext is a solution to prevent .DS_Store files from being created in local folders of your disk. TotalFinder keeps them in one separate folder, but pretends to Finder they are still in the original places. You may read more about this feature in [TotalFinder Asepsis article](/asepsis). You may also customize installation and uncheck installing of the kernel extension. 
