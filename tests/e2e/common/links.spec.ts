import { type Page, expect, test } from "@playwright/test"

test.describe("No broken links", () => {
  test("There are no broken links", async ({ page }, testInfo) => {
    await page.goto("/")

    const linkUrls = await getAllLinksFromPage(page)
    for (const url of linkUrls) {
      await test.step(`Checking link: ${url}`, async () => {
        const response = await page.request.get(url)
        expect(
          [200, 999],
          `${url} has no ok status code (${response.status()})`,
        ).toContain(response.status())
      })
    }
  })
})

async function getAllLinksFromPage(page: Page) {
  const allLinks = await page.getByRole("link").all()
  const allHrefs = await Promise.all(
    allLinks.map((link) => link.getAttribute("href")),
  )
  const relevantHrefs = allHrefs
    .filter(Boolean)
    .filter((href) => href.startsWith("http"))

  const validHrefs = new Set<string>()
  for (const link of relevantHrefs) {
    validHrefs.add(new URL(link, page.url()).href)
  }

  return Array.from(validHrefs)
}
