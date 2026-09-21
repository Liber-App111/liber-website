# Website refresh: manual actions

Branch: `website-refresh-2026-09` · Prepared 21 September 2026

This lists only what needs you. Everything else in the refresh is done on the branch. The site must not go live while any item marked **Before merge** is open. Nine of them are also marked in the pages themselves (highlighted in yellow, or as dashed placeholder frames).

This file is blocked from the public site by a rule in `netlify.toml`.

---

## 1. Push the branch to GitHub

**WHY IT IS NEEDED**
The work was done in a clone of `Liber-App111/liber-website`, but the session had no GitHub credentials, so it could not push.

**WHAT I NEED TO PROVIDE/DO**
Apply the supplied patch or bundle and push the branch. The exact commands are in the delivery note. Do not merge.

**WHERE IT GOES**
GitHub, branch `website-refresh-2026-09`.

**WHEN IT SHOULD BE DONE**
First. If Netlify deploy previews are switched on for branches, the push gives you a private preview URL to review. That preview is not production.

## 2. Confirm the Liber Plus price

**WHY IT IS NEEDED**
The repository has no price anywhere. Your notes record both A$14 (18 September) and $9 (21 September).

**WHAT I NEED TO PROVIDE/DO**
Give the price in AUD, including GST, for monthly and, if it exists, annual. The Terms confirm both billing periods exist.

**WHERE IT GOES**
`index.html`, Pricing section, `data-confirm="plus-price"`. Also the SoftwareApplication `offers` in the same page's JSON-LD, which currently lists Free only.

**WHEN IT SHOULD BE DONE**
Before merge.

## 3. Confirm what Liber Plus includes

**WHY IT IS NEEDED**
The only repository evidence is the Terms (1 March 2026, before V2). They say paid tiers include "extended progress history, continuity, and the ability to print reports for approval". That may not match V2, and the site must not invent feature gates.

**WHAT I NEED TO PROVIDE/DO**
A short list of what Plus includes in V2 today, in plain words.

**WHERE IT GOES**
`index.html`, Pricing section, `data-confirm="plus-entitlements"`.

**WHEN IT SHOULD BE DONE**
Before merge.

## 4. Confirm the Free list and the Learning Record wording

**WHY IT IS NEEDED**
These describe V2 behaviour I could not verify from the website repository:

- *Free list:* unlimited moments, photos, several children, backdating, each child's Record, and the learning-path choice.
- *Learning Record wording:* "choose the period, read it through, decide who sees it", and "prepare a Learning Record".

**WHAT I NEED TO PROVIDE/DO**
Read the Free card and the "What is a Learning Record?" section against the live app. Say what's wrong, if anything.

**WHERE IT GOES**
`index.html` (Pricing and Learning Record sections), `learning-record/index.html`, `llms.txt`.

**WHEN IT SHOULD BE DONE**
Before merge.

## 5. Provide four product screenshots

**WHY IT IS NEEDED**
The repository has no product screenshots, and none may be mocked up.

**WHAT I NEED TO PROVIDE/DO**
Take phone screenshots from the live app on a demo account with invented moments (no real children's names or photos):

- **S1:** a saved moment in the Journal, with a photo.
- **S2:** writing a moment, with a photo added and a child chosen.
- **S3:** the Journal with a few weeks of moments.
- **S4:** a child's Record, including the things you keep writing about.

Portrait PNG, about 1170 px wide.

**WHERE IT GOES**
`images/`. Then swap each dashed frame marked `data-placeholder="S1…S4"` in `index.html`. This is a routine code change that can be done for you once the files exist.

**WHEN IT SHOULD BE DONE**
Before merge.

## 6. Provide the short product video

**WHY IT IS NEEDED**
Section 7, "See it in under a minute", has a placeholder only.

**WHAT I NEED TO PROVIDE/DO**
A 45 to 60 second screen recording on the demo account: write a moment, see it kept, open the child's Record, prepare a Learning Record. MP4 with captions, no voiceover needed. Storyboard in LIB-WEB-01, F.4.

**WHERE IT GOES**
`images/` or a video host. Swap the frame marked `data-placeholder="V1"`.

**WHEN IT SHOULD BE DONE**
Before merge. Alternatively, decide to launch without it: the section can be removed in one edit.

## 7. Confirm consent for the two quotes

**WHY IT IS NEEDED**
Quotes are used only where they can be traced to a real message and the person has agreed.

**WHAT I NEED TO PROVIDE/DO**
For each quote, confirm you hold the message and the person's agreement to be quoted. If you can't, say so and the quote comes out.

- **Zephyr:** "I take a photo and save it in Liber and then chuck the paperwork…" on the homepage.
- **An unnamed parent:** "It feels good to see it at the end of the day…" on Am I doing enough?

**WHERE IT GOES**
`index.html` (`data-confirm-note="Zephyr testimonial consent"`) and `am-i-doing-enough/index.html`.

**WHEN IT SHOULD BE DONE**
Before merge.

## 8. Confirm continued use of the three family photographs

**WHY IT IS NEEDED**
The creek photo, the journalling photo and the family photo show children. They are already published on the live site, and the refresh reuses them in similar places. Permission for children's photos should be a decision, not an assumption.

**WHAT I NEED TO PROVIDE/DO**
Confirm yes, or say which to replace.

**WHERE IT GOES**
`index.html` (Why it exists, Founder, closing section), `about/index.html`.

**WHEN IT SHOULD BE DONE**
Before merge.

## 9. Get a vector version of the logo

**WHY IT IS NEEDED**
The supplied logo is a 398×430 PNG. The site uses a cleaned, transparent version at screen sizes, which is fine for launch. It will not hold up in print, the convention material, or large display.

`favicon.svg` currently wraps a small raster tree, because no vector source exists.

**WHAT I NEED TO PROVIDE/DO**
Commission or export SVG versions, all with transparent backgrounds and no tagline:

- full lockup;
- tree and wordmark side by side;
- tree only;
- one-colour and reversed versions.

**WHERE IT GOES**
`images/`, and replace `favicon.svg`.

**WHEN IT SHOULD BE DONE**
Before any print material. It is not blocking for the website.

## 10. Decide the co-parents page

**WHY IT IS NEEDED**
The page says both parents can add moments to one record. Nothing in the website repository shows whether co-parent sharing is live in V2.

It has been removed from the navigation, footer, sitemap and `llms.txt`, and marked `noindex`. Its content is unchanged and it is still reachable by direct link.

**WHAT I NEED TO PROVIDE/DO**
Choose one:

- (a) It's live: re-link it.
- (b) It's coming: rewrite it as coming.
- (c) Delete the page, and add a redirect to the homepage.

**WHERE IT GOES**
`for-separated-families/index.html`, the navigation, `sitemap.xml`.

**WHEN IT SHOULD BE DONE**
Before the convention.

## 11. Merge and deploy

**WHY IT IS NEEDED**
The README says GitHub deploys to Netlify and on to liber.net.au, so merging to `main` publishes the site.

**WHAT I NEED TO PROVIDE/DO**
When items 2 to 8 are done and the checks in the delivery note pass with `--release`, open a pull request from `website-refresh-2026-09` and merge it yourself.

**WHERE IT GOES**
GitHub, then Netlify.

**WHEN IT SHOULD BE DONE**
Last.

## 12. Ask your legal adviser about two lines in the Terms (optional)

**WHY IT IS NEEDED**
The Terms (1 March 2026) describe Liber as in "beta" and paid tiers as including printing "reports for approval". The new site avoids both, because Liber can't promise approval and V2 is published.

**WHAT I NEED TO PROVIDE/DO**
Decide with your adviser whether the Terms should be updated. The website refresh did not change any legal text.

**WHERE IT GOES**
`terms/index.html`.

**WHEN IT SHOULD BE DONE**
When convenient.
