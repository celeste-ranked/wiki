# Install

There are three ways to run Celeste Ranked. They all end up in the same place,
they differ in who installs things and whether you get a second copy of Celeste
on disk.

| | Second copy of Celeste | Everest and mod updates | Your existing mods |
|---|---|---|---|
| [New instance](#new-instance) | Yes | Launcher handles it | Untouched |
| [Linked install](#linked-install) | No | Launcher handles it | Shared |
| [Manual](#manual) | No | You handle it (Olympus) | Shared |

If you're not sure and just want to start playing, pick **New instance**.

## Requirements

- A legal copy of Celeste
- [Everest](https://everestapi.github.io/) - Launcher installs this for you
  on a new instance. For the other two you need it already.

## New instance

Launcher copies your celeste into a separate folder and sets that folder up
on its own, with its own Everest and its own saves. Your normal celeste isnt affected.

1. Download the launcher from [celesteranked.com/download](https://celesteranked.com/download).
2. Choose "Create a Ranked INstance"
3. Point it at your existing Celeste so it has something to copy.
4. Pick where the Ranked instance should live. It can't be your real Celeste
   folder, the launcher will refuse.
5. Launch Ranked from the launcher.

Pick this if its your first time dealing with modded celeste and you just want to
try out ranked quickly (though it is highly recommended to please check out [Everest](https://everestapi.github.io/) and modded celeste as it offers so much in the game along with the amazing community. Check out the official celeste discord [here](https://discord.gg/celeste)).

OR

Pick this if you have a heavily modded setup you don't want touched.
The cost here is disk space,
it's a full second copy of the game.

## Linked install

The launcher installs the Ranked mod into the modded Celeste you already have.
No second copy.

1. Download the launcher from [celesteranked.com/download](https://celesteranked.com/download).
2. Choose "Use me Celeste install". A Steam based Celeste with Everest is detected
   automatically, otherwise pick the folder yourself.
3. Launch Ranked from the launcher.

Main reason to pick this would be if your main modded celeste instance
has tons of mods that cost load time. Since the only way to access ranked
via an existing celeste install is to either `Hold left` in title screen or the `Menu button`, it requires you to load your normal celeste first, just to restart into the ranked instance. To avoid that restart, the launcher can just directly launch it into the ranked instance.

This is also useful as your main install would have many modded maps that you
would like to play in ranked lobbies, and using your existing instance allows you
to quickly load them. The launcher still installs and updates the Ranked mod for you, and unlinking removes the mod again.

Your `Mods` folder is shared with your normal setup, so mods you install for
Ranked show up in your regular game too. Ranked won't load mods that aren't
whitelisted, see [Mods and the whitelist](/installation/mods).

## Manual

No launcher at all. Install the Ranked mod yourself like any other Celeste mod,
through Olympus (coming soon after alpha) or by dropping the zip in `Mods`.

1. Place the zip into your `Mods` folder.
2. Launch Celeste through Everest as normal.
3. On the title screen, **hold Left** to restart into the Ranked instance. (or the meu button)
   Holding Left again from Ranked takes you back to normal Everest.

Pick this if you already live in Olympus and want to manage the mod yourself.

## Your settings and saves stay separate

However you install it, the Ranked instance keeps its own settings and its own
save files, under `CelesteRanked/Saves` in the game folder. Your file timer,
completions, etc, don't move while you play Ranked, and changing settings
in Ranked doesn't change them in your normal game.

The first launch copies your existing settings across as a starting point, so
keybinds and resolution carry over. After that the two are independent.

## Signing in

Celeste Ranked identifies you by your Steam account.

If you launched Celeste via a steam install, sign-in is automatic and you will not be
asked for anything.

If you own Celeste somewhere else (itch.io, Epic), the game cannot prove
ownership on its own. You will be shown a button to sign in through Steam
in your browser instead. This links your Steam account, even if you don't
have the game in steam.

The sign-in via external link lasts 30 days, after which you sign in again.

## Troubleshooting

_bleh_

Stuck? Contact [@nachogooda](https://discordapp.com/users/879048612817010799) on Discord.
