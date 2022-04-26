---
layout: tf-doc
title: TotalFinder on Apple Silicon
subtitle: TotalFinder on Apple Silicon (ARM architecture)
---

Good news! TotalFinder can still work on M1 Macs running macOS 12 (Monterey). 

The bad news is that you have to disable
even more security features on your machine. The trick is that you have to switch your system into "Reduced Security" mode
before you disable System Integrity Protection (SIP) itself. Please see the instructions below. 

<p class="info-box compatibility">
Please note that we <a href="https://blog.binaryage.com/totalfinder-totalspaces-future">have officially announced</a> 
that we stopped TotalFinder development and we are not going to support this setup.
If you are looking for help, please kindly <a href="https://discuss.binaryage.com/">ask community members on the forums</a>.
</p>

<p class="info-box exclamation">
Your machine may be less secure when you disable extra security features. It is entirely your decision to modify the settings.
</p>

## 1. Switch your Apple Silicon Mac to "Reduced Security" mode

If you've already placed your Mac in "Reduced Security" mode before, simply skip this section.

1. Shut down your Apple Silicon Mac.
2. Press and hold down the power button until the text under the Apple logo says "Loading startup options…", then let go.
3. Select "Options".
4. You are now in recoveryOS — enter your password if it asks.
5. Go to Utilities → Startup Security Utility.
6. Select "Reduced Security" and enable "Allow user management of kernel extensions from identified developers".
7. Shut down your Apple Silicon Mac.

<p class="info-box compatibility">
TotalFinder does not actually use any kernel extensions for any part of its functionality. The only reason why this step is required is because it is required in order for SIP to be correctly disabled. The reason why this is required is not yet understood.
</p>

## 2. Disable SIP (System Integrity Protection)

<p class="info-box exclamation">
Disabling SIP in any capacity, even partially, will also disable Apple Pay, as well as any iOS-on-macOS apps you may have downloaded from the App Store. This is a strange (and annoying) decision that Apple has decided to make specifically on Apple Silicon, as Apple Pay actually works fine even when SIP is disabled on x86_64 (Intel) Macs.
</p>

1. Follow steps 2〜4 from above.
2. Go to Utilities → Terminal.
3. Type in the following to fully disable SIP: `csrutil disable`
4. Reboot your Apple Silicon Mac.

## 3. Disable TotalFinder's architecture check

First, in `Terminal.app`, run this command:
<pre class="terminal">
touch ~/.totalfinder-dontcheckarchitecture
</pre>

Then force-quit `TotalFinder.app` and launch it again from `Applications`, or use this code while in terminal:
<pre class="terminal">
killall TotalFinder; open /Applications/TotalFinder.app
</pre>

**TotalFinder should now be fully operational!**

---

## How revert this setup?

First, in `Terminal.app`, run this command:
<pre class="terminal">
rm ~/.totalfinder-dontcheckarchitecture
</pre>

Then reboot and enable full security mode. This should also fully enable SIP again. You can check it via:

<pre class="terminal">
csrutil status
System Integrity Protection status: enabled.
</pre>
