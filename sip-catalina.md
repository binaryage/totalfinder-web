---
layout: tf-doc
title: System Integrity Protection under macOS 10.15 (Catalina)
subtitle: TotalFinder with System Integrity Protection
---

<p class="info-box compatibility">
This page describes macOS 10.15 (Catalina) specific information.<br>
If you have previous macOS version please refer to <b><a href="/sip-mojave">previous macOS SIP instructions</a></b>.<br>
You might want to read <a href="https://blog.binaryage.com/sip-and-mojave">this blog post</a> for historical context.
</p>

TotalFinder has support for macOS 10.15 (Catalina), but cannot run on a normally configured machine due to [System Integrity Protection](https://en.wikipedia.org/wiki/System_Integrity_Protection) (SIP).
This article can help you how to configure your machine to allow TotalFiner installation by modifying the SIP setting.

If you decide to modify the settings, you will be able to install TotalFinder. Just to be clear...

<p class="info-box exclamation">
Your machine may be less secure when System Integrity Protection is disabled. It is entirely your decision to modify the settings.
</p>

## How to install TotalFinder by turning off System Integrity Protection

TotalFinder will guide you through the process via notification dialogs.
Please check the [TotalFinder installation page](/installation) for general installation steps.
This document explains SIP-specific steps.

You must boot into the Recovery OS. You do this by restarting your machine, and holding `Command+R` until the Apple logo
appears. Then select Terminal from the Utilities menu. It looks like this:

<img src="/shared/img/recovery-utilities-terminal.png" class="doc-image">

In the window that opens, type <code>csrutil disable</code> and press return. This turns off System Integrity Protection so
that TotalFinder can be installed.

<img src="/images/csrutil-disable.jpg" class="doc-image">

Reboot your machine and you may install and run the [latest version of TotalFinder](/changes-beta).

Unfortunately you have to keep SIP disabled to allow TotalFinder. In earlier macOS versions it was possible to turn SIP off only to
complete TotalFinder installation steps and enable it back again. That is no longer possible with macOS 10.15 (Catalina) due to hardened
macOS security settings.

## Technical details

TotalFinder works by altering the built-in system application Finder.app.

In order to change some features of Finder, we use a technique called _code injection_. This means we add some additional code
to the Finder program whilst it is running to do what we need. This is relatively safe - in fact we do not change any part of
macOS on the disk. You only have to quit Finder via `Command+Option+Esc`, and the Finder will restart and everything will be
as if TotalFinder was never running.

However, in macOS 10.11 (El Capitan) and later the macOS developers added a feature that disallows this kind of modification even if you
have administrator access. It will also disallow other kinds of modifications (such as replacing parts of the system on disk).

## Uninstallation and SIP

To remove TotalFinder from your system, run the uninstaller found on the [latest dmg download of TotalFinder](/changes-beta).
