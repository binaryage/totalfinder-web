---
layout: tf-doc
title: TotalFinder on Apple Silicon
subtitle: TotalFinder on Apple Silicon (M1, etc.)
---

Good news! TotalFinder is compatible with [Apple Silicon](https://en.wikipedia.org/wiki/Apple_silicon) (arm64 / AArch64 architecture) as of [version 1.14.1](https://totalfinder.binaryage.com/beta-changes#1.14.1)! Not only that, but it works with [macOS 12 (Monterey)](https://en.wikipedia.org/wiki/MacOS_Monterey), too!

… The bad news is that you'll have to disable even _more_ security features on your machine.

The instructions below will guide you through switching your Apple Silicon system into "Reduced Security" mode, and then disabling System Integrity Protection (SIP) afterwards.

<p class="info-box compatibility">
Please note that while TotalFinder works on Apple Silicon, this is NOT officially supported by BinaryAge, as we <a href="https://blog.binaryage.com/totalfinder-totalspaces-future">have officially announced</a> that we have stopped TotalFinder development. If you are looking for help, please kindly <a href="https://discuss.binaryage.com/t/8364">ask our community members on the forums</a>.
</p>

<p class="info-box exclamation">
Your machine may be less secure when you disable these security features. It is entirely your decision whether or not to modify these settings.
</p>

## 1. Switching your Apple Silicon Mac to "Reduced Security" mode

If you've _already_ placed your Mac in "Reduced Security" mode before, simply skip this section.

※ If you use kernel extensions (kexts) on your system, you are already in "Reduced Security" mode.

① Shut down your Apple Silicon Mac.  
② Press and hold down the power button until the text under the Apple logo says "Loading startup options…", then let go.  
③ Select "Options".  
④ You are now in recoveryOS — enter your password if it asks.  
⑤ Go to Utilities → Startup Security Utility.  
⑥ Select "Reduced Security" and enable "Allow user management of kernel extensions from identified developers".  
⑦ Shut down your Apple Silicon Mac.  

<p class="info-box compatibility">
※ TotalFinder does <i>not</i> actually use any kernel extensions for any part of its functionality. The only reason why we perform this step is because it is required in order for SIP to be correctly disabled. The reason why is not yet fully understood.
</p>

## 2. Disabling SIP (System Integrity Protection)

<p class="info-box exclamation">
<b>IMPORTANT:</b> Disabling SIP in <i>any</i> capacity, even partially, will also disable Apple Pay, as well as iOS-on-macOS apps downloaded from the App Store (more on this below). This is a strange (and annoying) decision that Apple has decided to make specifically on Apple Silicon, as Apple Pay actually works fine even when SIP is disabled on x86_64 (Intel) Macs.
</p>

<p class="info-box compatibility">
※ iOS-on-macOS apps that were installed through other non-App Store means, such as via sideloading, third-party tools, or your own developed apps from Xcode will continue to function normally. The <i>only</i> iOS apps that will stop working are ones encrypted with Apple's FairPlay DRM — in other words, just those downloaded from the App Store.
</p>

① Follow steps 2〜4 from above.  
② Go to Utilities → Terminal.  
③ Type in the following to fully disable SIP: `csrutil disable`  
④ Reboot your Apple Silicon Mac.

## 3. Disabling TotalFinder's architecture check

① Run the following command in a Terminal session.
<pre class="terminal">
touch ~/.totalfinder-dontcheckarchitecture
</pre>

※ If you have multiple users on your Apple Silicon Mac that use TotalFinder, you will need to repeat just the `touch` command above for each user.

② Either run the following command in a Terminal session, or use Activity Monitor to force-quit `TotalFinder.app` and then open it again from `/Applications`.
<pre class="terminal">
killall TotalFinder; open /Applications/TotalFinder.app
</pre>

## TotalFinder should now be fully operational!

Enjoy TotalFinder on your Apple Silicon Mac!

---

## How do I revert these changes?

① Run the following command in a Terminal session.
<pre class="terminal">
rm ~/.totalfinder-dontcheckarchitecture
</pre>

※ If you have multiple users on your Apple Silicon Mac that use TotalFinder, you will need to repeat just the `rm` command above for each user.

② Follow steps 2〜4 from [the first section above](#mark-1-switching-your-apple-silicon-mac-to-reduced-security-mode).

③ If you are certain that you switched your Apple Silicon Mac to "Reduced Security" mode solely just for TotalFinder, go ahead and enable "Full Security" mode. This will also re-enable SIP.

**However,** if you use (or think you use) other applications on your Mac that use kernel extensions (kexts), run the following command in a Terminal session to re-enable SIP while keeping "Reduced Security" mode.
<pre class="terminal">
csrutil enable
</pre>

④ Run `csrutil status` in a Terminal to verify that SIP has been re-enabled. The output should resemble something like what's shown below:
<pre class="terminal">
-bash-3.2# csrutil status
System Integrity Protection status: enabled.
</pre>

⑤ Reboot your Apple Silicon Mac.
