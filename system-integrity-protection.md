---
layout: tf-doc
title: System Integrity Protection
subtitle: How to run TotalFinder under System Integrity Protection
---

Under OS X 10.11 (El Capitan), TotalFinder cannot run on a normally configured machine due to [System Integrity Protection](https://en.wikipedia.org/wiki/System_Integrity_Protection).

System Integrity Protection (SIP) is a new security feature introduced by Apple. That's good, but unfortunately it prevents TotalFinder from augmenting Finder. This article will tell you how to configure your machine, so that you can use TotalFinder. Before you do this, it is important to get informed about [what System Integrity Protection is, and what it means to turn it off](https://en.wikipedia.org/wiki/System_Integrity_Protection). Apple also provided [some information here](https://developer.apple.com/library/prerelease/mac/documentation/Security/Conceptual/System_Integrity_Protection_Guide/Introduction/Introduction.html).

<div class="license-desk">
<a href="http://binaryage.com/about">
<img width="20" height="20" src="http://www.gravatar.com/avatar/79322c2ed80c2d722de8c9d0475198a0?s=40" style="float: left; position: relative; top: 2px; margin-right: 6px; display:block; border: 1px solid #ccc" title="Who is Antonin?">
</a>
At this point I want you to pause and ask yourself a question. Do you really depend on TotalFinder workflows so much that you want to possibly lower your system security?
Frankly, I'm going to stop active TotalFinder development because it is not economically viable to continue development for a small group of users who decide to disable SIP.
Also it is likely that in the next OS release after El Capitan TotalFinder won't work at all. It is increasingly more difficult to reverse-engineer Finder 
as new parts are being written in Swift. Also operating system security hardening will probaly continue in future. Those are good things, but you will have to let TotalFinder go at some point anyway. 
Maybe for you the day is today. Bite the bullet and move on. I have prepared a list of <a href="http://discuss.binaryage.com/t/totalfinder-alternatives">TotalFinder alternatives here</a>. 
</div>

Anyways, if you decide to modify the setting under El Capitan, you will be able to install and run TotalFinder as before. Just to be clear...

<div class="license-desk exclamation">
I'm not encouraging you to turn System Integrity Protection off. Your machine may be less secure with it off. It is entirely your decision.
</div>

## How to modify System Integrity Protection

You must boot into the Recovery OS. You do this by restarting your machine, and holding `COMMAND + R` until the Apple logo appears.

Then select Terminal from the Utilities menu. It looks like this:

<img src="/images/recovery-1.png">

In the window that opens, type `csrutil enable --without debug` and press return. 

<img src="/images/recovery-2.png">

This turns off the part of SIP that TotalFinder needs to run, and OS X complains that it is an unsupported configuration.

Now type `reboot` and press return to restart your machine. After restart you may install the [latest version of TotalFinder](/beta-changes#latest).

## Technical details

TotalFinder works by changing Finder.app. OS X does not provide any other way to achieve deep Finder modifications, we believe this is the only way the functionality of TotalFinder can be achieved.

In order to add or change some features of Finder, we use a technique called _code injection_. This means we add some additional code to the Finder program whilst it is running to do what we need. This is relatively safe - in fact we do not change any part of OS X on the disk. You only have to force quit Finder via `COMMAND+OPTION+ESC` to relaunch Finder.app cleanly and everything will be as if TotalFinder was never running.

However, in El Capitan new security measures disallow this kind of modification _even if you have administrator access_. In order for TotalFinder to launch, part of System Integrity Protection must be disabled.

You can find some further information [in our blog](http://blog.binaryage.com/el-capitan-update).

