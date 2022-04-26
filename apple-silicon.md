---
layout: tf-doc
title: TotalFinder on Apple Silicon
subtitle: TotalFinder on Apple Silicon (arm64 / AArch64 architecture)
---

Good news! TotalFinder works on Apple Silicon! Not only that, but on macOS 12 Monterey, too!

… The bad news is that you'll have to disable even _more_ security features on your machine.

The instructions below will guide you through switching your system into "Reduced Security" mode, and then disabling System Integrity Protection (SIP) afterwards.

<p class="info-box compatibility">
Please note that we <a href="https://blog.binaryage.com/totalfinder-totalspaces-future">have officially announced</a> that we have stopped TotalFinder development. As a result, we are not going to officially support this setup. If you are looking for help, please kindly <a href="https://discuss.binaryage.com/">ask our community members on the forums</a>.
</p>

<p class="info-box exclamation">
Your machine may be less secure when you disable these security features. It is entirely your decision whether or not to modify these settings.
</p>

## 1. Switching your Apple Silicon Mac to "Reduced Security" mode

If you've _already_ placed your Mac in "Reduced Security" mode before, simply skip this section.

※ If you use kernel extensions (kexts) on your system, you are already in "Reduced Security" mode.

1. Shut down your Apple Silicon Mac.
2. Press and hold down the power button until the text under the Apple logo says "Loading startup options…", then let go.
3. Select "Options".
4. You are now in recoveryOS — enter your password if it asks.
5. Go to Utilities → Startup Security Utility.
6. Select "Reduced Security" and enable "Allow user management of kernel extensions from identified developers".
7. Shut down your Apple Silicon Mac.

<p class="info-box compatibility">
TotalFinder does <i>not</i> actually use any kernel extensions for any part of its functionality. The only reason why we perform this step is because it is required in order for SIP to be correctly disabled. The reason why is not yet fully understood.
</p>

## 2. Disabling SIP (System Integrity Protection)

<p class="info-box exclamation">
Disabling SIP in <i>any</i> capacity, even partially, will also disable Apple Pay, as well as any iOS-on-macOS apps you may have downloaded from the App Store. This is a strange (and annoying) decision that Apple has decided to make specifically on Apple Silicon, as Apple Pay actually works fine even when SIP is disabled on x86_64 (Intel) Macs.
</p>

<p class="info-box compatibility">
※ iOS-on-macOS apps that were installed through other non-App Store means, such as via sideloading, third-party wrappers, or your own developed apps from Xcode will continue to function. Basically, if the app binaries are encrypted with Apple's FairPlay DRM, it will stop working if SIP is disabled.
</p>

1. Follow steps 2〜4 from above.
2. Go to Utilities → Terminal.
3. Type in the following to fully disable SIP: `csrutil disable`
4. Reboot your Apple Silicon Mac.

## 3. Disabling TotalFinder's architecture check

1. Run the following command in a Terminal session.
<pre class="terminal">
touch ~/.totalfinder-dontcheckarchitecture
</pre>

※ If you have multiple users on your Apple Silicon Mac that use TotalFinder, you will need to repeat just the `touch` command above for each user.

2. Either run the following command in a Terminal session, or use Activity Monitor to force-quit `TotalFinder.app` and then open it again from `/Applications`.
<pre class="terminal">
killall TotalFinder; open /Applications/TotalFinder.app
</pre>

## TotalFinder should now be fully operational!

---

## How do I revert these changes?

1. Run the following command in a Terminal session.
<pre class="terminal">
rm ~/.totalfinder-dontcheckarchitecture
</pre>

※ If you have multiple users on your Apple Silicon Mac that use TotalFinder, you will need to repeat just the `rm` command above for each user.

2. Follow steps 2〜4 from [the first section above](#mark-1-switch-your-apple-silicon-mac-to-reduced-security-mode).

3. If you switched your Apple Silicon Mac to "Reduced Security" mode solely just for TotalFinder, go ahead and enable "Full Security" mode. This will also re-enable SIP. **However,** if you use other applications on your Mac that require the use of kernel extensions (or "kexts"), run the following command in a Terminal session to re-enable SIP while keeping "Reduced Security" mode.
<pre class="terminal">
csrutil enable
</pre>

4. Run `csrutil status` in a Terminal to verify that SIP has been re-enabled. The output should look something like what's shown below:
<pre class="terminal">
-bash-3.2# csrutil status
System Integrity Protection status: enabled.
</pre>

5. Reboot your Apple Silicon Mac.
