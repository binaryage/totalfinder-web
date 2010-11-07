---
layout: tf-page
title: Uninstalling TotalFinder
subtitle: Uninstalling TotalFinder
prev: Installation
prev_link: /installation
next: Licensing
next_link: /licensing
---

## Removal is just two clicks away

TotalFinder comes with a convenient uninstaller script which safely removes TotalFinder from your computer.

Under TotalFinder's Menu Bar item select `Uninstall TotalFinder`:

<div style="position:relative; margin-bottom: 20px;">
    <img src="/images/uninstall-menu.png" class="doc-inline-image" style="left: 0px; top: -60px">
    <img src="/images/really-uninstall.png" class="doc-inline-image" style="width: 340px; left: 260px; top: 68px; position: absolute">
    <img src="/images/uninstaller.png" class="doc-inline-image" style="width: 346px; left: 320px; top: -46px">
</div>

In case of troubles running menu command you may alternatively:

* In Terminal.app execute `open "/Applications/TotalFinder.app/Contents/Resources/TotalFinder Uninstaller.app"`
* Download and open the latest archive from [http://totalfinder.binaryage.com](http://totalfinder.binaryage.com) and launch `TotalFinder Uninstaller.app`

## Purging the configuration

<img src="/images/property-list-editor.png" style="width:400px; float: right; position: relative; top: -40px; margin-left: 40px">

By default the uninstaller does not remove your configuration settings from `/Users/<user>/Library/Preferences/com.apple.finder.plist`. 
    
It is just a few extra bytes we leave for case you are just reinstalling for some reason. It is also convenient to keep your license key there just for case you return to TotalFinder later.

In some future version uninstaller will offer to remove the configuration. Right now you have to do it by hand. If you want to clean the TotalFinder trail completely, remove all TotalFinder prefixed keys from that file. You can use plist editor to do that:

    open ~/Library/Preferences/com.apple.finder.plist