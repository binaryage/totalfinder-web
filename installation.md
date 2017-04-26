---
layout: tf-doc
title: Installing TotalFinder
subtitle: Install TotalFinder
---

## Installation is not that hard

TotalFinder has a convenient installer which guides you through the installation steps:

* Download and open the latest archive TotalFinder-X.Y.Z.dmg from [https://totalfinder.binaryage.com](https://totalfinder.binaryage.com)
* Launch `TotalFinder.pkg`

<img src="/images/installer-dmg.png" class="doc-image add-shadow" style="width:400px"><br>

* Click through the installation process

<img src="/images/successful-install.png" class="doc-image add-shadow" style="width:400px">

* (one-time setup) In case [System Integrity Protection](/sip) (SIP) is enabled and you don't have TotalFinder system component installed previously:

<img src="/images/sip-wizard-01.png" class="doc-image add-shadow" style="width:400px">

<img src="/images/sip-wizard-02.png" class="doc-image add-shadow" style="width:400px">

* After disabling SIP in recoverOS and going back to your main OS:

<img src="/images/sip-wizard-03.png" class="doc-image add-shadow" style="width:400px">

* As your last step you should re-enable SIP. Please read [detailed explanation here](/sip).

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
* `/System/Library/ScriptingAdditions/TotalFinderSIP.osax` - a scripting extension to work around [System Integrity Protection](/sip)

Please note that `TotalFinderSIP.osax` must be installed when System Integrity Protection is temporarily disabled. That is why TotalFinder requires additional installation steps and rebooting into recovery OS.

## Configuration settings

`/Users/<user>/Library/Preferences/com.binaryage.totalfinder.plist`

Note: You may safely remove the TotalFinder plist file or remove any values inside. TotalFinder will re-create it with default values when restarted.
