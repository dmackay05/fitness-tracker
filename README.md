# fitness-tracker

Personal fitness PWA. GitHub Pages serves the front end; `Code.gs` is the Google Apps Script
that syncs to Google Sheets. There is no build step: the files below are served as they are.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Page markup, tab panels, Settings, overlays |
| `styles.css` | All styling |
| `app.js` | All logic: rendering, logging, sync, timers, settings |
| `data-exercises.js` | The training program: weekly sessions, reserve moves, warm-ups, setup text, muscle maps |
| `data-figures.js` | Exercise figure drawings (animated SVG), captions, setup pictures |
| `data-food.js` | Recipe Library and nutrition tip lists |
| `data-yoga.js` | Yoga pose library, pose drawings, preset flows |
| `service-worker.js` | Offline cache |
| `Code.gs` | Apps Script backend (deployed separately in Google) |

The `data-*.js` files are plain tables loaded before `app.js`. To change an exercise, recipe or
pose, edit the data file; `app.js` has a one-line pointer where each table used to sit.

## Releasing a build

Bump the same number in three places, every time:

1. `APP_BUILD` in `app.js`
2. every `?v=` in `index.html` (stylesheet and all five scripts share one number)
3. `CACHE_VERSION` in `service-worker.js`

Then run `node --check` on `app.js` and each `data-*.js`.

## Error handling

A `catch` must not swallow an error silently. Call `ftCaught(e,'functionName')`; it records the
error on the device (Settings → Sync & Backup → "Caught errors") and in the console.
Leave a catch empty only for best-effort device calls: vibrate, audio, wake lock, focus, scroll.
Do not wrap calls in `typeof fn==='function'` checks for functions defined in this repo.
