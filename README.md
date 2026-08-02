# GonzHome

GonzHome is Martin Gonzalvez's central landing page for the print-and-play
websites, browser tools, and public community spaces he maintains.

The site is intended to be a simple page that PnPers can bookmark and use as a
jumping-off point. It is a fully static website built with plain HTML, CSS, and
JavaScript for deployment on GitHub Pages.

## What the site contains

### Games and resources

- [PnPFinder](https://pnpfinder.com) — directory of free and paid PnP games
- [PnP Daily](https://pnpdaily.gonzhome.us) — rotating PnP news, games, builds,
  tips, and community highlights
- [PnP Launchpad](https://launchpad.gonzhome.us) — PnP crowdfunding campaigns,
  previews, promotions, and late pledges
- [PnPTools](https://pnptools.gonzhome.us) — curated PnP resources, groups,
  stores, and utilities

### Making tools

- [BoardSplitter](https://boardsplitter.gonzhome.us) — divides large game boards
  into print-ready pages
- [Card Prototyper](https://prototyper.gonzhome.us) — visual editor for tabletop
  card mockups
- [Card Extractor](https://extractor.gonzhome.us) — extracts individual card
  images from printable PDFs
- [Card Formatter](https://formatter.gonzhome.us) — creates print-ready card PDFs
  with cut guides and duplex layouts
- [TokenMaker](https://tokenmaker.gonzhome.us) — designs custom game tokens and
  arranges them on print-ready sheets
- [Dicemaker](https://dicemaker.gonzhome.us) — designs custom dice and arranges
  them in templates on print-ready sheets

### Community spaces

- [Print & Play Hideaway](https://facebook.com/groups/pnphideaway) — Facebook
  group founded and administered by Martin since 2018
- [r/printandplay](https://reddit.com/r/printandplay) — subreddit co-moderated
  by Martin
- [Monthly PnP Crafting Geeklist](https://boardgamegeek.com/thread/482943) —
  monthly BoardGameGeek list stewarded by Martin since August 2020
- [PnP Hideaway on YouTube](https://www.youtube.com/@PnPHideaway) — more than
  150 PnP-related videos

The [Geeklist Generator](https://geeklist.gonzhome.us) is linked as a subdued
guest-host utility beneath the main community destinations. It is a specialized
tool for monthly PnP Crafting Geeklist hosts rather than a public community
destination.

### Optional support

- [Ko-fi](https://ko-fi.com/marting) — a deliberately low-pressure “buy me a
  coffee” link near the bottom of the page

## Design direction

GonzHome should feel like a useful, personal workshop directory rather than a
generic product or marketing page. The current direction combines a clean,
bookmarkable structure with enough color and illustration to feel welcoming to
the PnP community.

### Layout

- Use large tiles for every destination, arranged in two columns on wider
  screens and one column on phones.
- Give games and resources, making tools, and community spaces comparable
  visual importance.
- Keep each tile easy to scan: category, icon, name, short description, and
  external-link indicator.
- Preserve generous spacing between sections and avoid crowding the page with
  extra calls to action.

### Color and visual tone

- Give each tile its own softly tinted background.
- Keep color washes restrained—generally about 18–31% color mixed with the card
  background—rather than using fully saturated blocks. The games and resources
  tiles use the stronger end of that range so their distinct colors remain
  apparent.
- Use rounded corners, fine borders, and modest shadows for a tactile feel.
- Favor friendly handmade details over glossy product-page effects.
- Avoid making the page louder, busier, or more promotional than the current
  design.

### Imagery

- Use official project favicons and logos where they are available.
- Use a simple local icon or CSS monogram when a project has no suitable image.
- Card Prototyper uses a custom local icon that matches the other tools.
- The hero illustration should remain explicitly PnP-focused, showing a cutting
  mat, printable card sheet, paper trimmer, ruler, craft knife, and scissors.
- The personal note should remain paired with Martin's `DrHenryArmitage`
  BoardGameGeek avatar.

### Interaction and accessibility

- Keep hover motion subtle: a small lift, restrained shadow, and clear arrow
  feedback.
- Support both light and dark themes; the selected theme is stored in
  `localStorage`.
- Maintain responsive desktop, tablet, and phone layouts.
- Preserve keyboard focus styles, semantic headings, a skip link, and
  reduced-motion support.

### Content voice

- Keep descriptions succinct, practical, and community-oriented.
- Use a personal first-person voice where Martin's role or motivation matters.
- Present GonzHome as a useful jumping-off point, not as a commercial service.
- Keep the Ko-fi invitation clearly optional and visually secondary to the
  directory and community content.

## Project structure

```text
gonzhome/
├── index.html                  # Content, project links, and inline hero artwork
├── styles.css                 # Layout, themes, illustrations, and responsive CSS
├── app.js                     # Theme toggle and current footer year
├── favicon.svg                # GonzHome browser icon
├── assets/
│   ├── prototyper-icon.svg    # Custom Card Prototyper directory icon
│   ├── dicemaker-tool.svg     # Custom Dicemaker directory icon
│   └── tokenmaker-tool.webp   # TokenMaker directory illustration
├── CNAME                      # GitHub Pages custom domain
├── .nojekyll                  # Disables Jekyll processing
└── README.md
```

There is no build step, package manager, framework, or server-side component.

## Run locally

From the project directory:

```bash
python3 -m http.server 8765
```

Then open <http://localhost:8765>.

Any unused local port can be substituted for `8765`.

## Routine maintenance

### Edit a destination

Project and community destinations are written directly in `index.html`.
Update the relevant anchor URL, label, and description together.

### Update community figures

The Facebook and Reddit membership figures and the YouTube video count are
static text. Review them periodically and update `index.html` when the public
figures change.

### Add another project

1. Add a new linked tile to the appropriate directory section in `index.html`.
2. Prefer the project's official favicon or logo for its thumbnail.
3. Add a local SVG under `assets/` if no suitable official image exists.
4. Give the tile a restrained color tint consistent with the existing palette.
5. Add the destination to this README.
6. Test the tile in light and dark themes at desktop and phone widths.

### External image dependencies

Most project thumbnails use images hosted by their respective GonzHome sites.
The personal avatar is hosted by BoardGameGeek's image CDN. If one of those
paths changes, update its `img src` in `index.html`.

Current external image sources include:

- PnPFinder favicon
- PnP Daily favicon
- PnP Launchpad logo
- PnPTools favicon
- Card Extractor favicon
- Card Formatter favicon
- Martin's BoardGameGeek avatar

BoardSplitter uses a local CSS monogram. Card Prototyper, Dicemaker, and
TokenMaker use local artwork in `assets/`.

## Validation checklist

Before publishing:

1. Run `node --check app.js`.
2. Serve the folder locally rather than opening `index.html` directly.
3. Check light and dark themes.
4. Check desktop and phone layouts.
5. Open every project and community link.
6. Confirm all external thumbnails load.
7. Verify keyboard focus is visible and the skip link works.

## Publish with GitHub Pages

1. Create a GitHub repository and push these files to its `main` branch.
2. In **Settings → Pages**, publish from `main` and `/ (root)`.
3. Set the Pages custom domain to `gonzhome.us`.
4. Add the Cloudflare DNS records below.
5. Wait for GitHub's DNS and certificate checks to finish.
6. Enable **Enforce HTTPS** in the Pages settings.

The root `CNAME` file already contains `gonzhome.us`.

Once this site is live, `pnpdaily/sites.html` should link here as the canonical
directory. If that older directory remains available, keep its project list in
sync.

## Cloudflare DNS

Add all four GitHub Pages IPv4 records for the apex and a `www` CNAME:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| CNAME | `www` | `mgonzalvez.github.io` | DNS only |

With `gonzhome.us` configured as the custom domain, GitHub Pages will redirect
`www.gonzhome.us` to the canonical apex address. DNS changes can take up to 24
hours to propagate.

Avoid wildcard records such as `*.gonzhome.us`. Verify the custom domain in the
GitHub account's Pages settings to reduce domain-takeover risk.

## Email DNS

Website DNS and email DNS are separate.

If `@gonzhome.us` addresses should receive or send email, choose an email
provider—or Cloudflare Email Routing for forwarding—and use the exact MX, SPF,
DKIM, and DMARC records supplied by that provider.

If the domain will not be used for email, do not add arbitrary MX records.
Publish restrictive SPF and DMARC policies appropriate for a non-mail domain.
The correct records depend on whether any third-party service sends mail on
behalf of `gonzhome.us`.
