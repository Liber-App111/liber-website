# Website refresh: manual actions

Branch: `website-refresh-2026-09` · Updated 21 September 2026 (pricing and plans confirmed)

This lists only what needs you. Everything else in the refresh is done on the branch. The site must not go live while any item marked **Before merge** is open. Seven of them are also marked in the pages themselves (highlighted in yellow, or as dashed placeholder frames).

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

## 2. Check four small product facts not in your confirmed list

**WHY IT IS NEEDED**
Each is still on the site but was not in the plan lists you confirmed.

- **Backdating** ("If it happened yesterday, change the date"; "Add moments from earlier days"). Recorded as built in an earlier inspection of the live app.
- **"No card needed"** to start free. Your wording from the previous live site.
- **GST.** Are $9.00 and $90.00 GST-inclusive? If Liber is registered for GST, the displayed price must include it.
- **Cancellation method.** The app says "Cancel whenever you like". The Terms (clause 23) say to cancel by contacting Liber. The site says only "cancel whenever you like" and "plans renew automatically", with a link to the Terms.

**WHAT I NEED TO PROVIDE/DO**
Confirm each, or say which to remove. If the app lets people cancel themselves, the Terms need updating (item 11).

**WHERE IT GOES**
`index.html` (How it works, FAQ, pricing notes).

**WHEN IT SHOULD BE DONE**
Before merge.

## 3. Provide four product screenshots

**WHY IT IS NEEDED**
The repository has no product screenshots, and none may be mocked up.

**WHAT I NEED TO PROVIDE/DO**
Phone screenshots from the live app on a demo account with invented moments:

- **S1:** a saved moment in the Journal, with a photo.
- **S2:** writing a moment, with a photo added and a child chosen.
- **S3:** the Journal with a few weeks of moments.
- **S4:** a child's Record, with the things you keep writing about.

Portrait PNG, about 1170 px wide.

**WHERE IT GOES**
`images/`, then swap the frames marked `data-placeholder="S1…S4"` in `index.html`.

**WHEN IT SHOULD BE DONE**
Before merge.

## 4. Provide the short product video, or decide to launch without it

**WHY IT IS NEEDED**
Section 7, "See it in under a minute", is a placeholder.

**WHAT I NEED TO PROVIDE/DO**
Either:
- a 45 to 60 second screen recording on the demo account (storyboard in LIB-WEB-01, F.4); or
- a decision to remove the section for launch, which is a one-edit change.

**WHERE IT GOES**
`index.html`, the frame marked `data-placeholder="V1"`.

**WHEN IT SHOULD BE DONE**
Before merge.

## 5. Confirm consent for the two quotes

**WHY IT IS NEEDED**
Quotes are used only where traced to a real message, with the person's agreement.

**WHAT I NEED TO PROVIDE/DO**
Confirm, or say which to remove:
- Zephyr's quote on the homepage;
- the unnamed parent's quote on "Am I doing enough?".

**WHERE IT GOES**
`index.html`, `am-i-doing-enough/index.html` (marked `data-confirm-note`).

**WHEN IT SHOULD BE DONE**
Before merge.

## 6. Confirm continued use of the three family photographs

**WHY IT IS NEEDED**
The creek, journalling and family photos show children. They are already live; the refresh reuses them.

**WHAT I NEED TO PROVIDE/DO**
Confirm yes, or say which to replace.

**WHERE IT GOES**
`index.html`, `about/index.html`.

**WHEN IT SHOULD BE DONE**
Before merge.

## 7. Decide the co-parents page

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

## 8. Get a true vector version of the logo

**WHY IT IS NEEDED**
The `image_50.svg` supplied on 21 September is a 500×541 PNG wrapped in an SVG file (a Figma export), not vector artwork. The site's screen logos are fine, but print and large display need real vector paths. `favicon.svg` also still wraps a raster.

**WHAT I NEED TO PROVIDE/DO**
Commission, or export from the original design file, SVGs made of paths: full lockup, horizontal, tree only, one-colour and reversed. Transparent background, no tagline.

**WHERE IT GOES**
`images/`, and replace `favicon.svg`.

**WHEN IT SHOULD BE DONE**
Before any print material. It is not blocking the website.

## 9. Merge and deploy

**WHY IT IS NEEDED**
Netlify publishes `main` to liber.net.au.

**WHAT I NEED TO PROVIDE/DO**
When items 2 to 6 are done and `validate_site.py --release` passes, open a pull request and merge it yourself.

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
- describe cancellation by contacting Liber.

The confirmed plans and app wording now differ: Plus is unlimited moments, voice capture, family sharing, and preparing and exporting Learning Records, and the app says "Cancel whenever you like". The website does not change legal text.

**WHAT I NEED TO PROVIDE/DO**
Decide with your adviser whether to update the Terms.

**WHERE IT GOES**
`terms/index.html`.

**WHEN IT SHOULD BE DONE**
Soon after launch.
