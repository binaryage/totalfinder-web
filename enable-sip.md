---
layout: tf-doc
title: How to enable System Integrity Protection
subtitle: How to enable System Integrity Protection
---

You must boot into the [Recovery OS](https://support.apple.com/en-us/HT201314). You do this by restarting your machine, and holding `COMMAND + R` until the Apple logo appears.

Then select Terminal from the Utilities menu. It looks like this:

<img src="/images/recovery-1.png">

In the window that opens, type `csrutil clear` and press return. 

This clears existing configuration of System Integrity Protection to default state which is "enabled".

Now type `reboot` and press return to restart your machine.

---

More information about [TotalFinder and System Integrity Protection](/system-integrity-protection).