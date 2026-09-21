# Website refresh: manual actions

Branch: `website-refresh-2026-09` · Updated 21 September 2026 (pricing and plans confirmed)

This lists only what needs you. Everything else in the refresh is done on the branch. The site must not go live while any item marked **Before merge** is open. The two quote consents were also marked in the pages themselves (highlighted in yellow, or as dashed placeholder frames).

This file is blocked from the public site by a rule in `netlify.toml`.

---

## 1. Push the branch to GitHub

**WHY IT IS NEEDED**
The work was done in a clone of `Liber-App111/liber-website`. The session had no GitHub credentials.

**WHAT I NEED TO PROVIDE/DO**
Apply the supplied patch or bundle and push the branch. Do not merge.

**WHERE IT GOES**
GitHub, branch `website-refresh-2026-09`.

**WHEN IT SHOULD BE DONE**
First. A branch push does not change production.

## 2. Product facts: RESOLVED

All confirmed by Adam on 21 September 2026. The site already matches each one, so no content change was needed.

- **Backdating** is supported. The site says "If it happened yesterday, change the date" and "Add moments from earlier days".
- **The free plan needs no card.** The site says "No card needed".
- **GST.** Liber is not currently registered for GST, so the website must not say prices include GST. It shows $9.00 AUD a month and $90.00 AUD a year and makes no GST claim.
- **Cancelling.** Liber Plus can be cancelled through the app. The site says "cancel whenever you like", which is consistent.
- **Account and record deletion** is handled through support@liber.net.au. The site makes no deletion claim; support@liber.net.au is its listed contact.

## 3. Recognition screenshot: RESOLVED

Confirmed by Adam on 21 September 2026. The "What Liber has noticed across your moments" card (Watching & listening, 3 moments) is explicitly approved as the substitute for the surfing screenshot.

If LIB-REC-02-D is signed and renames the card, this screenshot will need replacing then.

## 4. Consent for the two quotes: RESOLVED

Resolved 21 September 2026:
- Zephyr has consented to the homepage quote.
- The unnamed parent has consented to the quote on "Am I doing enough?".

The in-page consent markers have been removed.

## 5. Lisa's agreement to the example Learning Record strip: RESOLVED

Resolved 21 September 2026. Lisa has given consent for the example Learning Record strip to be published. The strip shows pages 1, 3, 4 and 12, with Bodhi's first name, school year and state, photos of both boys, and counts from her journal. It is on the Learning Record page. Adam's approval as parent was given earlier.

## 6. Decide the co-parents page

**WHY IT IS NEEDED**
Family sharing is now confirmed as a Liber Plus feature, but the page does not match what is confirmed:

- It says both parents can add moments to one record. How family sharing actually behaves is not confirmed.
- It invites visitors to "Try it free", while family sharing is a Plus feature.

The page is unlinked from the navigation and footer, out of the sitemap and `llms.txt`, and marked `noindex`. Its content is unchanged and it still has 15 em dashes.

**WHAT I NEED TO PROVIDE/DO**
Describe what family sharing lets a second parent do (view only, add moments, or something else). Then choose:
- rewrite the page to match and re-link it; or
- remove the page, with a redirect to the homepage.

**WHERE IT GOES**
`for-separated-families/index.html`, navigation, `sitemap.xml`, `llms.txt`.

**WHEN IT SHOULD BE DONE**
Before the convention. It is not blocking the merge while unlinked.

## 7. Get a true vector version of the logo

**WHY IT IS NEEDED**
The `image_50.svg` supplied on 21 September is a 500×541 PNG wrapped in an SVG file (a Figma export), not vector artwork. The site's screen logos are fine, but print and large display need real vector paths. `favicon.svg` also still wraps a raster.

**WHAT I NEED TO PROVIDE/DO**
Commission, or export from the original design file, SVGs made of paths: full lockup, horizontal, tree only, one-colour and reversed. Transparent background, no tagline.

**WHERE IT GOES**
`images/`, and replace `favicon.svg`.

**WHEN IT SHOULD BE DONE**
Before any print material. It is not blocking the website.

## 8. Raise the in-app example record wording with your developer (not a website change)

**WHY IT IS NEEDED**
The example record inside the app (EXAMPLE RECORD viewer) contains lines that conflict with Liber's own standards and the website:

- **Screen 2:** "A selection of days, not every day". This contradicts the site's distinction that a portfolio is a selection and a Learning Record is the broader record.
- **Screen 6:** "LIBER NOTICED" interpretations presented as if Recognition already works at full depth.
- **Screen 9:**
  - "A boy who is not yet reading", a deficit statement;
  - "got every word on his spelling list right", a score, next to screen 2's "No scores, levels or grades";
  - a February to August narrative with the child as the subject and a trajectory.

None of these screens is used on the website. The website task did not touch the app.

**WHAT I NEED TO PROVIDE/DO**
Decide whether to have the example record revised in the app.

**WHERE IT GOES**
The Liber app, not this repository.

**WHEN IT SHOULD BE DONE**
When convenient. Parents see this record in the app today.

## 9. Merge and deploy

**WHY IT IS NEEDED**
Netlify publishes `main` to liber.net.au.

**WHAT I NEED TO PROVIDE/DO**
When `validate_site.py --release` passes, open a pull request and merge it yourself.

**WHERE IT GOES**
GitHub, then Netlify.

**WHEN IT SHOULD BE DONE**
Last.

## 10. Your NSW guide article (optional)

**WHY IT IS NEEDED**
The article is outside the refresh and was not edited. It has 58 em dashes, and it is your signed piece.

**WHAT I NEED TO PROVIDE/DO**
Say whether you want its punctuation brought into line.

**WHERE IT GOES**
`guides/nesa-home-visit-evidence/index.html`.

**WHEN IT SHOULD BE DONE**
When convenient.

## 11. Ask your legal adviser about the Terms (optional)

**WHY IT IS NEEDED**
The Terms (1 March 2026):
- describe Liber as in "beta";
- describe paid tiers as including printing "reports for approval";
- describe cancellation by contacting Liber, whereas Plus can now be cancelled through the app (confirmed 21 September 2026).

The confirmed plans and app wording now differ: Plus is unlimited moments, voice capture, family sharing, and preparing and exporting Learning Records, and the app says "Cancel whenever you like". The website does not change legal text.

**WHAT I NEED TO PROVIDE/DO**
Decide with your adviser whether to update the Terms.

**WHERE IT GOES**
`terms/index.html`.

**WHEN IT SHOULD BE DONE**
Soon after launch.
