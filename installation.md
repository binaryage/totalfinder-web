---
layout: tf-doc
title: Installing TotalFinder
subtitle: Install TotalFinder
---

## Installation is easy

TotalFinder has a convenient installer which guides you through the installation steps:

1. Download and open the latest archive TotalFinder-X.Y.Z.dmg from [http://totalfinder.binaryage.com](http://totalfinder.binaryage.com)
2. Launch `TotalFinder.pkg`
3. Click through the installation process
4. Finder will restart with TotalFinder

## TotalFinder updates

TotalFinder uses the [Sparkle](http://sparkle.andymatuschak.org/) updating system. By default it notifies you whenever there is a new version available. You may also check for new versions manually.
<img src="/images/update-dialog.png" class="doc-inline-image-50">

## TotalFinder in login startup items

By default, the installer puts `TotalFinder.app` into startup items to be launched during login. This ensures TotalFinder is loaded into Finder when you start the system. You may remove `TotalFinder.app` from your login startup items to prevent TotalFinder from launching at startup.

<img src="/images/login-items.png" class="doc-inline-image-50">

## Uninstallation

For removal please check the [uninstallation page](/uninstallation).

## Installation locations

* `/Application/TotalFinder.app` - application launcher and plugin bundle
* `/System/Library/Extensions/TotalFinder.kext` - kernel extension (optional)
* `/Library/ScriptingAdditions/TotalFinder.osax` - scripting extension responsible for injecting TotalFinder plugin into Finder

## Configuration settings

* `/Users/<user>/Library/Preferences/com.apple.finder.plist` - all TotalFinder related keys are prefixed with `TotalFinder`
    
Note: You may safely remove any TotalFinder prefixed keys. TotalFinder recreates them with default values when restarted. Deleting the whole `com.apple.finder.plist` file and restarting Finder will reset both Finder and TotalFinder into their initial state (factory defaults).