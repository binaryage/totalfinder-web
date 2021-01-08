---
layout: tf-doc
title: About TotalFinder
subtitle: About TotalFinder
---

<p class="info-box compatibility">
TotalFinder was tested to work in macOS 10.15 (Catalina) and later.<br>
Unfortunately it requires a deep system tweak. <b>Please read <a href="/sip">this document</a> to learn details</b>.
</p>

<p class="info-box compatibility">
TotalFinder is not compatible with Apple's latest computers with 
<a href="https://en.wikipedia.org/wiki/Apple_M1">M1 chip</a>.
It fails by reporting <a href="/injection-troubles">that Apple events cannot be delivered</a>. Unfortunately there is no known solution at this point.
Please subscribe to <a href="https://discuss.binaryage.com/t/totalfinder-on-m1-macbook-air/7879">this forum thread</a>
for further updates.
</p>

## TotalFinder is just a better Finder

TotalFinder works like the normal Finder but adds [tabs](/tabs), [dual panel](/dual-mode), [colored labels](/colored-labels) and other [features](/tweaks).

<img src="/images/showcase/full-clabels.png" class="doc-image add-shadow" style="width:500px">

My goal is to improve Finder in a few areas where it is lacking but keep the general design.

## TotalFinder is a plugin, not a replacement

Please keep in mind that TotalFinder is an add-on which gets loaded into the Finder when you launch `TotalFinder.app`. It does not modify your Finder files on the disk. TotalFinder is installed as a standalone application. But when launched it changes the current instance of Finder running in memory. I call this process TotalFinder **injection** into Finder.

## System updates from Apple

Due to the nature of how TotalFinder works, there is always a minor risk that TotalFinder might break with future Finder updates. Our entire team uses TotalFinder on a daily basis so we spot problems very quickly. So far, Finder updates have generally introduced minor changes. I am also a member of Apple's Developer Program and have access to pre-release versions of system updates. I am committed to keeping TotalFinder compatible with Apple's updates.

Please remember that if you ever experience any problem whatsoever, first check if you have running [the latest version available](/beta-changes). If yes, please report the issue on [the forums](https://discuss.binaryage.com) or send us a [support email](mailto:support@binaryage.com). In the worst case, it is easy to [uninstall TotalFinder](/uninstallation) and return to the Apple's basic Finder.

## How to restart the Finder

The easiest way is probably using **Force Quit** menu via <code title="command + option + esc">⌘+⌥+esc</code>:

<img src="/images/force-quit-finder.png" class="doc-image add-shadow" style="width:300px">

Alternatively you can run this command: 

<pre class="terminal">killall Finder</pre>

Killing Finder will restart Finder without injecting TotalFinder again. To reopen TotalFinder, launch TotalFinder.app in `/Applications`.
