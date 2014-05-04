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
4. Finder will be relaunched with TotalFinder

## TotalFinder updates

TotalFinder uses the [Sparkle](http://sparkle.andymatuschak.org) updating system. By default it notifies you whenever there is a new version available. You may also check for new versions manually. Please keep TotalFinder updated. You may also participate in [testing new releases](/beta-changes).

<img src="/images/update-dialog.png" class="doc-image add-shadow" style="width:400px">

## TotalFinder in login startup items

By default, the installer puts `TotalFinder.app` into startup items to be launched during login. This ensures TotalFinder is loaded into Finder when you start the system. You may remove `TotalFinder.app` from your login startup items to prevent TotalFinder from launching at startup.

<img src="/images/login-items.png" class="doc-image add-shadow" style="width:400px">

## Uninstallation

For removal please read the [uninstallation page](/uninstallation).

## Installation locations

* `/Application/TotalFinder.app` - application launcher and plugin bundle
* `/Library/ScriptingAdditions/TotalFinder.osax` - scripting extension responsible for injecting TotalFinder plugin into Finder

## Configuration settings

`/Users/<user>/Library/Preferences/com.apple.finder.plist` - all TotalFinder related keys are prefixed with `TotalFinder`

Note: You may safely remove any TotalFinder prefixed keys. TotalFinder will re-create them with default values when restarted. Deleting the whole `com.apple.finder.plist` file and restarting Finder will reset both Finder and TotalFinder into factory defaults.