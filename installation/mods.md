# Mods and the whitelist

Ranked matches have to be fair, so the Ranked instance only loads mods from an
approved list. Everything else is turned off while you play.

This is why the Ranked instance restarts the game: it relaunches with the
unapproved mods disabled, and puts them back when you return to normal
everest. Nothing is uninstalled, your `Mods` folder is left alone.

## What's allowed

**Required.** Everest and the Ranked mod itself. Ranked won't start without them.

**Helpers and dependencies.** If an approved mod needs another mod to work, that one is automatically allowed too.

**Skin mods.** Cosmetic mods are approved in bulk, since they don't change how the game plays. A long list is already approved and more get added on request.

**Custom maps.** Allowed in lobbies, not in ranked matches. See below.

## Ranked matches vs lobbies

Ranked matches use a fixed pool, so everyone races the same thing. The rules are strict and the whitelist is the whitelist.

Lobbies are looser. When loaded into CelesteRanked Instance, go to create lobby and choose custom maps, and then you'll be able to select maps that you had installed in your instance. Even though these maps aren't loaded, the mod auto detects all enabled map mods (no lobbies or gyms) from your
instance and you can choose to add them to the pool. And since they're not loaded, you will need to restart to play these non-whitelisted map mods in a lobby, and during this time will not be able to join ranked queue. To join ranked queue again, you will need to restart again to unload those mods. And for joining a lobby, same idea.

Note that this only applies to custom maps that are not part of ranked pool.
So you can play ranked maps, vanilla maps, (more maps will be added to the pool later), in a lobby without a restart.

::: tip Note:
Restarts are automatic and you don't need to do anything apart from choosing.
:::

## Mod verification

Approved mods are checked against the versions published on gamebanana. If a
mod's files don't match what's published, it's flagged.


## Getting a mod approved

Contact [@nachogooda](https://discordapp.com/users/879048612817010799) on Discord. Skin mods and other purely
cosmetic things are usually fine. Anything that changes movement, physics or
level layout will not be approved for ranked matches.

Useful to include:

- The mod's exact name as it appears in Everest
- Its gamebanana link
- What it changes

## "My mod got turned off"

That's expected if it isn't on the whitelist. It comes back when you leave Ranked.

If an approved mod is being blocked, it's usually the version. The whitelist can
require a minimum version, so update it and try again. Still stuck, ask in the
Discord.
