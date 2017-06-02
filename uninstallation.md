---
layout: tf-doc
title: Uninstalling TotalFinder
subtitle: Uninstall TotalFinder
---

## Removal is just two clicks away

TotalFinder comes with a convenient uninstaller script which safely removes TotalFinder from your computer.

Under TotalFinder's Menu icon select `Uninstall TotalFinder`:

<img src="/images/uninstall-menu.png" class="doc-image add-shadow" style="width:400px">

<img src="/images/really-uninstall.png" class="doc-image add-shadow" style="width:400px">

<img src="/images/uninstaller.png" class="doc-image add-shadow" style="width:400px">

If you have trouble running the menu command you may alternatively run the following in Terminal.app: 

    open "/Applications/TotalFinder.app/Contents/Resources/TotalFinder.bundle/Contents/Resources/TotalFinder Uninstaller.app"

Or download and open the latest archive from [totalfinder.binaryage.com](https://totalfinder.binaryage.com) and launch TotalFinder Uninstaller from the DMG.

## Purging the configuration

By default the uninstaller does not remove your configuration settings from `/Users/<user>/Library/Preferences/com.binaryage.totalfinder.plist`

It is just a few extra bytes we leave in case you need to temporarily uninstall TotalFinder and decide to reinstall later. 

<img src="/images/property-list-editor.png" class="doc-image add-shadow" style="width:400px;">

If you want to clean the TotalFinder trail completely. Force quit Finder via CMD+OPT+ESC and then delete the plist from Terminal.app:

    rm ~/Library/Preferences/com.binaryage.totalfinder.plist
