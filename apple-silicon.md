---
layout: tf-doc
title: TotalFinder on Apple Silicon (M1, M2, etc.)
subtitle: TotalFinder on Apple Silicon (M1, M2, etc.)
---

<p class="info-box compatibility">
	While TotalFinder <i>is</i> compatible with <a href="https://en.wikipedia.org/wiki/Apple_silicon">Apple Silicon</a>, this is <a href="https://blog.binaryage.com/totalfinder-totalspaces-future/"><i>not</i> officially supported by BinaryAge</a>.<br>
	If you are looking for help, please kindly <a href="https://discuss.binaryage.com/t/8364">refer to the discussion thread on the BinaryAge forums</a>.
</p>

The instructions below will guide you through the steps required to use TotalFinder on your Apple Silicon machine.

---

## 0. Checking the current state of your system

Run `csrutil status` in a Terminal to verify your system's current SIP status.

If you see the output **below** (SIP enabled), then begin from **Part 1**.
<pre class="terminal">
System Integrity Protection status: enabled.
</pre>

If you see the output **below** (SIP disabled), then begin from **Part 3**.
<pre class="terminal">
System Integrity Protection status: disabled.
</pre>

If you see the output **below** (SIP partially weakened), then begin from **Part 3**, and keep reading to find out what SIP flags TotalFinder requires you to set in recoveryOS.
<pre class="terminal">
System Integrity Protection status: unknown (Custom Configuration).
</pre>

---

## 1. Switching your Apple Silicon machine to "Reduced Security" mode

<p class="info-box exclamation">
Your machine may be less secure when you disable these security features. It is entirely your decision whether or not to modify these settings.
</p>

If you've _already_ placed your Mac in "Reduced Security" mode before, simply skip this section.

※ If you use kernel extensions (kexts) on your system, you are already in "Reduced Security" mode.

① Shut down your Apple Silicon machine.  
② Press and hold down the power button until the text under the Apple logo says "Loading startup options…", then let go.  
③ Select "Options".  
④ You are now in recoveryOS — enter your password if it asks.  
⑤ Go to Utilities → Startup Security Utility.  
⑥ Select "Reduced Security" and enable "Allow user management of kernel extensions from identified developers".  
⑦ Shut down your Apple Silicon machine.  

<p class="info-box compatibility">
※ TotalFinder does <i>not</i> actually use any kernel extensions for any part of its functionality. The only reason why we perform this step is because it is required in order for SIP to be correctly disabled. The reason why is not yet fully understood.
</p>

---

## 2. Disabling SIP (System Integrity Protection)

<p class="info-box exclamation">
<b>IMPORTANT:</b> Disabling SIP in <i>any</i> capacity, even partially, will also disable Apple Pay, as well as iOS-on-macOS apps downloaded from the App Store (※ more on this below).<br>
<br>
This is a strange (and annoying) decision that Apple has recently decided to make. It used to be the case that Apple Pay would actually work fine on T2 Mac hardware with SIP disabled… but that changed with the bridgeOS update shipped with macOS 13, which backported this previously Apple Silicon exclusive behaviour to T2 Macs, too.
</p>

<p class="info-box compatibility">
※ iOS-on-macOS apps that were installed through other non-App Store means, such as via sideloading, third-party tools, or your own developed apps from Xcode will continue to function normally. The <i>only</i> iOS apps that will stop working are ones encrypted with Apple's FairPlay DRM — in other words, just those downloaded from the App Store.
</p>

① Follow steps 2〜4 from above.  
② Go to Utilities → Terminal.  
③ Type in the following to fully disable SIP: `csrutil disable`  
④ Reboot your Apple Silicon machine.

---

## 3. Disabling TotalFinder's architecture check

① Run the following command in a Terminal session.
<pre class="terminal">
touch ~/.totalfinder-dontcheckarchitecture
</pre>

※ If you have multiple users on your Apple Silicon machine that use TotalFinder, you will need to repeat just the `touch` command above for each user.

② Either run the following command in a Terminal session, or use Activity Monitor to force-quit `TotalFinder.app` and then open it again from `/Applications`.
<pre class="terminal">
killall TotalFinder; open /Applications/TotalFinder.app
</pre>

---

## TotalFinder should now be fully operational!

Enjoy TotalFinder on your Apple Silicon machine!

(※ There may be a few on-screen dialogs from TotalFinder left for you to go through, but they should be relatively simple and straightforward.)

---

## Is there a way to only disable _just_ the parts of SIP that TotalFinder strictly needs? I want my system to be as secure as possible while still using TotalFinder!

<p class="info-box compatibility">
<b>※ Note:</b> If you were directed to this page by TotalFinder from the NVRAM dialog shown on macOS 13 Ventura or above, this is the section you're looking for.<br>
</p>

TotalFinder requires that you have at _least_ `CSR_ALLOW_TASK_FOR_PID` (`0x04`, `--without debug`) and `CSR_ALLOW_UNRESTRICTED_FS` (`0x02`, `--without fs`) disabled.

`CSR_ALLOW_UNRESTRICTED_NVRAM` (`0x40`, `--without nvram`) is required only for Apple Silicon machines running macOS 13 Ventura or newer.

All other SIP features do not affect TotalFinder's functionality and can be in any state you want.

You can partially disable just the SIP flags mentioned above for TotalFinder operation using one of these `csrutil` invocations in recoveryOS.

### Apple Silicon
<pre class="terminal">
csrutil enable --without debug --without fs --without nvram
</pre>

<p class="info-box compatibility">
<b>※ Note:</b> For macOS 12 and below, <code>--without nvram</code> is not <i>actually</i> required. It's just included here for the sake of simplicity.<br>
</p>

<!-- I know it's a little weird to include Intel/AMD in the Apple Silicon page, but this is because I kinda… link to it in the discussion thread as a general-purpose "how to partially weaken SIP" page. I'll properly fix this when I do a larger overhaul of the documentation, since right now everything is just kinda horribly disjointed, including the OTHER SIP-related page originally written by Antonin. -->

### Intel/AMD
<pre class="terminal">
csrutil enable --without debug --without fs
</pre>

**※ Using unsigned or ad-hoc signed kexts?** If so, you will need to add `--without kext` to your `csrutil` invocation. (`CSR_ALLOW_UNAPPROVED_KEXTS` (`0x200`))

**※ Do you use other software that requires SIP to be disabled?** The vast majority of software that requires SIP to be disabled only really require the same two features as TotalFinder to be disabled. However, in some uncommon cases, you may have to disable additional SIP features. If something you use starts asking you to "disable SIP" after running the above `csrutil` invocation, please refer to the documentation and/or support of the software in question for more information.

<p class="info-box compatibility">
<b>※ Note:</b> Please note that a partially-enabled SIP configuration is considered "unsupported" by Apple. Apple only supports an SIP-fully-disabled configuration.<br>
<br>
That being said, many people including myself (Karen) have been running a partially-enabled SIP configuration for many years without any issues. The choice is entirely up to you.
</p>

---

## Manually enabling arm64e ABI support in macOS 13 Ventura and above

TotalFinder supports automatically enabling arm64e ABI support for you with just one button press.

However, if you would prefer to do it manually, here are the instructions on how to do so.

① Run the following command in a Terminal session to see if you have any boot-args already set.
<pre class="terminal">
nvram boot-args
</pre>

② Run the following command to enable arm64e ABI support. Make sure that you add in your own pre-existing boot-args, if you have any set!

It will ask you for your password — it is normal to not be able to see it as you type.
<pre class="terminal">
sudo nvram boot-args="-arm64e_preview_abi"
</pre>

③ Reboot your system for the changes to take effect.

---

## How do I revert these changes?

① Run the following command in a Terminal session.
<pre class="terminal">
rm ~/.totalfinder-dontcheckarchitecture
</pre>

※ If you have multiple users on your Apple Silicon machine that use TotalFinder, you will need to repeat just the `rm` command above for each user.

② Follow steps 2〜4 from [the first section above](#mark-1-switching-your-apple-silicon-mac-to-reduced-security-mode).

③ If you are certain that you switched your Apple Silicon machine to "Reduced Security" mode solely just for TotalFinder, go ahead and enable "Full Security" mode. This will also re-enable SIP.

**However,** if you use (or think you use) other applications on your Mac that use kernel extensions (kexts), run the following command in a Terminal session to re-enable SIP while keeping "Reduced Security" mode.
<pre class="terminal">
csrutil enable
</pre>

④ Run `csrutil status` in a Terminal to verify that SIP has been re-enabled. The output should resemble something like what's shown below:
<pre class="terminal">
-bash-3.2# csrutil status
System Integrity Protection status: enabled.
</pre>

⑤ Reboot your Apple Silicon machine.
