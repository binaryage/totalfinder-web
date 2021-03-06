---
layout: tf-doc
title: Installing TotalFinder
subtitle: Install TotalFinder
---

<p class="info-box compatibility">
This page describes macOS 10.14 (Mojave) specific information.<br>
If you have previous macOS version please refer to <b><a href="/installation-sierra">previous instructions</a></b>.
</p>

TotalFinder has a convenient installer which guides you through the installation steps:

* Download and open the latest archive TotalFinder-X.Y.Z.dmg from [https://totalfinder.binaryage.com](https://totalfinder.binaryage.com)
* Launch `TotalFinder.pkg`

<img src="/images/installer-dmg.png" class="doc-image add-shadow" style="width:400px"><br>

* Click through the installation process

<img src="/images/successful-install.png" class="doc-image add-shadow" style="width:400px">

* In case [System Integrity Protection](/sip) (SIP) is enabled you will be presented with this dialog:

<img src="/images/sip-wizard-mojave-01.png" class="doc-image add-shadow" style="width:400px">

<img src="/images/sip-wizard-mojave-02.png" class="doc-image add-shadow" style="width:400px">

<b>Please read [our article about SIP](/sip) before you decide to turn it off.</b>

* After disabling SIP in recoverOS and going back to your main OS, TotalFinder should start automatically.

## TotalFinder updates

TotalFinder uses the [Sparkle](https://sparkle-project.org) updating system. After installation it asks you for permission to check for updates automatically:

<img src="/images/sparkle-setup.png" class="doc-image add-shadow" style="width:400px">

If enabled it notifies you whenever there is a new version available. You may also check for new versions manually.

<img src="/images/update-dialog.png" class="doc-image add-shadow" style="width:400px">

Please keep TotalFinder updated because it needs to follow potential changes in Apple's Finder.app closely. 

You might also help by participating in [testing beta releases](/beta-changes). Thank you.

## TotalFinder in login startup items

By default, the installer puts `TotalFinder.app` into startup items to be launched during login. This ensures TotalFinder is loaded into Finder when you start the system. You may remove `TotalFinder.app` from your login startup items to prevent TotalFinder from launching at startup.

<img src="/images/login-items.png" class="doc-image add-shadow" style="width:400px">

## Uninstallation

For removal please read the [uninstallation page](/uninstallation).

## Installation locations

* `/Application/TotalFinder.app` - an application launcher and plugin bundle
* `/Library/ScriptingAdditions/TotalFinder.osax` - a scripting extension responsible for injecting TotalFinder plugin into Finder

## Configuration settings

`/Users/<user>/Library/Preferences/com.binaryage.totalfinder.plist`

Note: You may safely remove the TotalFinder plist file or remove any values inside. TotalFinder will re-create it with default values when restarted.
