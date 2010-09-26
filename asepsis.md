---
layout: tf-page
title: Asepsis in TotalFinder
subtitle: Asepsis in TotalFinder
prev: Visor
prev_link: /visor
next: Tweaks
next_link: /tweaks
---

<div class="doc-side">
    <h2>Preferences</h2>
    <img src="/images/preferences-menu.png" class="doc-pref-menu">
    <img src="/images/pref-asepsis.png" class="doc-pref">
</div>

## What is Asepsis?

This is an advanced feature for command-line users. Asepsis is disabled by default.

When you view a folder using Finder you may tweak its display options like icon size, sorting options or color labels. These settings are sticky and will apply anytime you return to view visited folder. Finder remembers these settings in a hidden file named .DS_Store which gets saved into the given folder. You could notice those files when working with some software which is not aware of this convention. For example some UNIX command-line tools or seeing your Mac disks from a Windows machine.

And here is the problem. Those files are being created whenever you open folder in Finder even if you don't tweak anything. They get created on every visit and pollute disks with those tiny files. Normally you would not see those files in Finder, but if you use some command-line tool or enable display of those files in Finder you can get annoyed quickly.

The Asepsis enables you to redirect creation of those files into a special dedicated folder. With redirection Finder works the same way, but .DS_Store files are isolated in dedicated folder `/usr/local/.dscache`.

## What can I do with Asepsis?

1. You may redirect creation of .DS_Store files
2. You may disable/enable creation of .DS_Store files on Network Disks

## Kernel Extension

For Asepsis feature to work TotalFinder has to be connected to supporting kernel extension TotalFinder.kext which has to be running in the system. This extension installs by default so it should work out of the box.

In case you have customized installation components and skipped TotalFinder.kext or if you disabled it using some system commands, please make sure you have it running again. The connection status has to be green.

## Technical explanation

TotalFinder.kext is released as an open-source project. Anyone can review the code, compile own version and improve the functionality. The project is [hosted at GitHub](http://github.com/binaryage/totalfinder-kext) where you can find further [technical explanation](http://github.com/binaryage/totalfinder-kext) of how Asepsis feature works. 

## Migration Assistant

This tool haven't been yet implemented. In the future the Migration Assistant will help you move existing .DS_Store files when switching Asepsis mode.