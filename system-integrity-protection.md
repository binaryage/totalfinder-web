---
layout: tf-doc
title: System Integrity Protection
subtitle: How to run TotalFinder under System Integrity Protection
---

TotalFinder [versions 1.7.2 and above](/beta-changes) have support for OSX 10.11 El Capitan, but cannot run on a normally configured machine due to System Integrity Protection, a new security feature in El Capitan.

This article will tell you how to configure your machine by modifying the new setting, so that you can run TotalFinder.

Before you do this, it is important to get informed about [what System Integrity Protection is, and what it means to turn it off](https://en.wikipedia.org/wiki/System_Integrity_Protection). Technical details are well covered in [the El Capitan review on Ars Technica](http://arstechnica.com/apple/2015/09/os-x-10-11-el-capitan-the-ars-technica-review/8). Apple also provide [some information here](https://developer.apple.com/library/prerelease/mac/documentation/Security/Conceptual/System_Integrity_Protection_Guide/Introduction/Introduction.html). 

Anyway, if you decide to modify the setting under El Capitan, you will be able to install and run TotalFinder as before. Just to be clear...

<div class="license-desk exclamation">
I'm not encouraging you to modify your System Integrity Protection settings. Your machine may be less secure if you do. It is entirely your decision.
</div>

## How to partially disable System Integrity Protection

You must boot into the [Recovery OS](https://support.apple.com/en-us/HT201314). You do this by restarting your machine, and holding `COMMAND + R` until the Apple logo appears.

Then select Terminal from the Utilities menu. It looks like this:

<img src="/shared/img/recovery-utilities-terminal.png">

In the window that opens, type `csrutil enable --without debug` and press return. 

<img src="/shared/img/recovery-terminal-csrutil-enable-without-debug.png">

This turns off the part of SIP that TotalFinder needs to run, and OS X complains that it is an unsupported configuration.

Now type `reboot` and press return to restart your machine. After restart you may install the [latest version of TotalFinder](/beta-changes#latest).

## Technical details

TotalFinder works by changing Finder.app. OS X does not provide any other way to achieve deep Finder modifications, we believe this is the only way the functionality of TotalFinder can be achieved.

In order to add or change some features of Finder, we use a technique called _code injection_. This means we add some additional code to the Finder program whilst it is running to do what we need. This is relatively safe - in fact we do not change any part of OS X on the disk. You only have to force quit Finder via `COMMAND+OPTION+ESC` to relaunch Finder.app cleanly and everything will be as if TotalFinder was never running.

However, after El Capitan, new security measures disallow this kind of modification _even if you have administrator access_. In order for TotalFinder to launch, part of System Integrity Protection must be disabled.

You can find some further information [in our blog](http://blog.binaryage.com/el-capitan-update).

## Need to enable System Integrity Protection again?

Please follow [this article](/enable-sip).



