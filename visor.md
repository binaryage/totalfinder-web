---
layout: tf-page
title: Visor in TotalFinder
subtitle: Visor in TotalFinder
prev: Show System Files
prev_link: /show-system-files
next: Asepsis
next_link: /asepsis
---

<img src="/images/visor-fade.png" class="doc-image" style="margin-bottom: 0px">

<div class="doc-side">
    <h2>Preferences</h2>
    <img src="/images/preferences-menu.png" class="doc-pref-menu">
    <img src="/images/pref-visor.png" class="doc-pref">
</div>

## What is Visor?

Visor is a system-wide TotalFinder window displaying at the bottom of the screen. The idea is to have one dedicated TotalFinder instance always ready just one key press away. This functionality is inspired by [Terminal.app's Visor](http://visor.binaryage.com).

This feature is disabled by default. It is meant to be enabled by advanced users who want to adopt Visor-based workflow. It works best when you have auto-hiding Dock panel.

## What can I do with Visor?

1. You may show and hide it
2. You may hide it by pressing Escape (optional)
3. You may pin visor window
4. You may tweak its appearance and behavior

## Activation and deactivation

To activate the Visor press the keyboard shortcut. You may alternatively double tap option key. To deactivate, press it again or hit escape. Visor deactivates also when another application gets input focus.

## Pinning Visor

Sometimes you may want Visor to temporarily stay open even if you switch to another application. In this situation you may pin the Visor using blue button in the top left corner of the Visor window. There is a keyboard shortcut `⇧⌘P` for doing it quickly without mouse.

While pinned, Visor does not hide when losing focus. Hiding using activation shortcut still works.

## Resizing Visor

Visor was designed to occupy whole width of the screen in the bottom part. You may adjust Visor's height by dragging window frame (drag the area behind tabs).

Some users have wide monitors and they also want to control the width and horizontal position of the Visor window. In this case you may enable a `FreeForm Window` switch which enables arbitrary size and horizontal position for the Visor window. Use the classic resizing gripper in the bottom right window corner.

## Sliding effect

Visor window slides on screen similar way how game console did in original Quake game. You may customize this effect by specifying duration and whether you want it to fade and slide.

## Screens and Spaces

* **Screen** - on multi-monitor systems forces Visor window to appear on particular screen
* **Show on all Spaces** - Visor window will appear on all spaces (recommended)
* **Show above the Dock level** - displays Visor above Dock

## Keyboard Shortcuts

<div class="keyboard-shortcuts">
    <table border="0" cellspacing="0" cellpadding="0">
        <tr><th>Action</th><th>Shortcut</th><th>Comment</th></tr>
        <tr><td>Show or hide Visor</td><td>⌥`</td><td>alternatively double tap ⌥+⌥</td></tr>
        <tr><td>Hide Visor while opened</td><td>⎋</td><td>optional, disabled by default</td></tr>
        <tr><td>Pin Visor</td><td>⇧⌘P</td><td></td></tr>
    </table>
</div>
