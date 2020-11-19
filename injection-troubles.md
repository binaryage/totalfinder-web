---
layout: tf-doc
title: TotalFinder Injection Troubles
subtitle: Troubles launching TotalFinder
---

I guess you are visiting this page because you just saw this notification:

<img src="/images/totalfinder-injection-troubles-notification.png" class="no-background" style="width:400px" alt="Notification: Troubles launching TotalFinder - Apple Events cannot be delivered"><br>

TotalFinder needs to send Apple Events to inject own code into running Finder.app and then successfully take control 
over it. Unfortunately this failed on your machine for some reason.

## A bit of historical context

In the old days when TotalFinder was first written macOS was pretty unrestricted. Apps could talk to each other freely.
It was flexible but potentially unsecure. Over time Apple devs started adding various ways how to harden the system.
In recent macOS versions user has to grant permissions to TotalFinder to be able to talk to Finder using Apple Events.

This plan to harden the OS sounds good in theory but how keep backward compatibility?

1. obviously there are many apps doing various things in various ways 
   => Apple devs must cover all such cases including weird corner cases
2. rogue apps could abuse security prompts, trigger them repeatedly and nag users into submission
   => Apple devs must somehow present prompts in a sane way and implement some heuristics to prevent such abuse
3. this security system gets pretty complex
   => Apple devs are expected not to introduce bugs

Unfortunately this wasn't executed perfectly. If you are interested in details Felix Schwarz wrote
excellent articles about this topic:

1. [https://www.felix-schwarz.org/blog/2018/06/apple-event-sandboxing-in-macos-mojave](https://www.felix-schwarz.org/blog/2018/06/apple-event-sandboxing-in-macos-mojave)
2. [https://www.felix-schwarz.org/blog/2018/08/new-apple-event-apis-in-macos-mojave](https://www.felix-schwarz.org/blog/2018/08/new-apple-event-apis-in-macos-mojave)

TotalFinder has also own [history of troubles](https://discuss.binaryage.com/t/totalfinder-does-not-launch) 
trying to adapt to the changes Apple devs were introducing
and fighting their bugs while introducing our own bugs. 
Software is not perfect, let's troubleshoot it.

## Troubleshooting

##### 1. please make sure you are running [latest TotalFinder for you macOS version](/compatibility).

##### 2. please look into `System Preferences > Security & Privacy > Privacy > Automation`.

> You should see that [TotalFinder is granted automation permissions to control Finder](/automation-permissions).

##### 3. what if there is no mention of TotalFinder?

> Well, sometimes this privacy subsystem gets into an unfortunate state: It thinks that it should prompt user for permissions, 
> and it also thinks it needs to prevent abuse, so it blocks permission prompts. That's pretty confusing if you asked me.
> Usually this ban on permission prompts is time based. So it should expire after some time.

> Other possibility is that the permission database is somehow borked. I believe that macOS 10.15 (Mojave) [had issues with this](https://github.com/Hammerspoon/hammerspoon/issues/2031#issuecomment-478250239). 
> I would recommend resetting it from command-line:

<pre class="terminal">tccutil reset AppleEvents</pre>

> If that does not help, you might consider resetting all privacy decisions:

<pre class="terminal">tccutil reset All</pre>

> btw. To see manual pages of `tccutil` you can run:

<pre class="terminal">man tccutil</pre>

> I'm not sure if you need to kill any processes for this to take effect, better do it:

<pre class="terminal">killall TotalFinder; killall Finder</pre>

> Or better reboot your computer according to [this article](https://eclecticlight.co/2018/11/20/what-does-the-tcc-compatibility-database-do/). 

<pre class="terminal">sudo reboot</pre>

> Didn't help? Since you already have disabled the SIP, 
> there is one last brutal way how to nuke broken privacy database

<pre class="terminal">sudo rm "/Library/Application Support/com.apple.TCC/TCC.db"</pre>

> Then immediately reboot your computer. At least this [has worked to some people on the interwebs](https://community.folivora.ai/t/bug-cant-add-btt-to-mojave-privacy-security-settings/6688/2).

##### 4. rebooted and no success, what next?

> Please email me at [support@binaryage.com](mailto:support@binaryage.com). We can continue there.