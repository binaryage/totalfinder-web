---
layout: tf-doc
title: System OSAX
subtitle: TotalFinder with System Integrity Protection fully enabled
---

Under OS X 10.11 (El Capitan) and macOS 10.12 (Sierra), TotalFinder cannot install itself on a normally configured machine due to [System Integrity Protection](https://en.wikipedia.org/wiki/System_Integrity_Protection).

[This article describes how to partially disable System Integrity Protection](/system-integrity-protection) to install and run TotalFinder under El Capitan and higher.

## What if I need to keep SIP fully enabled?

There is a way, but it has some major drawbacks. This article is for technical users who need to run TotalFinder with fully enabled SIP.

This technique does not require you to disable SIP, but it requires you to modify system files in Recovery OS.

1. It requires technical knowledge how to mount file-systems and manipulate files using command-line.
2. With any TotalFinder update. You will have to repeat this installation.
3. With any system update, TotalFinder files are likely to be removed from system folders. You would have to repeat this installation.

## Technical details

TotalFinder needs to inject code into Finder.app. It uses mechanism called [Scripting additions](https://developer.apple.com/library/mac/technotes/tn1164). Scripting addition is a special code bundle which can be injected into running applications.

Scripting additions have 'osax' file extension. Historically there are three places where scripting addtions can be placed:

1. `~/Library/ScriptingAdditions`
2. `/Library/ScriptingAdditions`
3. `/System/Library/ScriptingAdditions`

The original idea was to keep user-specific additions in the first location, system-wide admin-installed additions in the second one and Apple's own system additions in the third location.
There are various restrictions on what is considered a _valid_ OSAX and those restrictions evolved over successive OS versions.
After El Capitan, scripting additions placed in `/Library/ScriptingAdditions` are no longer allowed to inject into system processes (processes with Apple's code signature) due to System Integrity Protection.

However it is possible to put an addition into `/System/Library/ScriptingAdditions` and it can then freely inject into system processes.
This technique was [discovered and described by SIMBL developers](https://github.com/norio-nomura/EasySIMBL/issues/26#issuecomment-117028426).
The problem is that `/System/Library/ScriptingAdditions` is a system folder protected by SIP. You can manipulate it only with SIP fully disabled or from within Recovery OS.

By default TotalFinder installs its scripting addition into `/Library/ScriptingAddtions`. Then you can manually move it to `/System/Library/ScriptingAdditions`. TotalFinder is aware of this setup since [version 1.7.10](https://totalfinder.binaryage.com/beta-changes#1.7.10).

But you should be aware of the drawbacks:

1. `/System/Library/ScriptingAdditions` is owned by Apple, any system update can decide to remove non-Apple files from there.
2. `/System/Library/ScriptingAdditions` is under SIP protection, that means that TotalFinder update cannot modify TotalFinder.osax located there. TotalFinder update will place TotalFinder.osax as usual into `/Library/ScriptingAddtions` and you have to be aware of it and go into Recovery OS and move it again.

### Installation steps

1. Install TotalFinder (or update TotalFinder)
2. Reboot into [Recovery OS](https://support.apple.com/en-us/HT201314)
3. Open Terminal from Utilities menu
4. Mount your main system disk - this depends on your setup, see explanation below
5. Move TotalFinder.osax from `/Library/ScriptingAdditions` to `/System/Library/ScriptingAdditions` on your system disk
6. Fix rights on newly moved folder

### STEP 4: mount your main system disk

This can get more complicated depending on your setup. If you don't use FileVault, you can use `Disk Utility` to mount your main system disk using GUI. 
Or use `diskutil mount` from command-line. In case of FileVault you have to use `disktutil corestorage unlockVolume` command.

In either case you should end up with your main system disk mounted at `/Volumes/[NAME]` where `[NAME]` is some name you gave to your disk during formatting (potentially includes spaces).

### STEPS 5-6: move and fix rights

My system disk was mounted as `/Volumes/Capitan`, here are commands relevant to my situation:

    cd "/Volumes/Capitan/System/Library/ScriptingAdditions"
    mv "../../../Library/ScriptingAdditions/TotalFinder.osax" .
    chown -R root:wheel TotalFinder.osax

## Final words

As you can see. It is not that difficult if you know what you are doing. The main problem are TotalFinder and system updates. You have to repeat this installation over and over again.

### A note on uninstallation

Again you have to go into Recovery OS, mount your main system disk and remove TotalFinder.osax from `/System/Library/ScriptingAdditions`. My uninstaller cannot do that because it is a SIP-protected location.

    cd "/Volumes/Capitan/System/Library/ScriptingAdditions"
    rm -rf TotalFinder.osax
