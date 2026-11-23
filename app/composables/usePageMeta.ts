import { SITE_URL, pageMeta } from '~/utils/seo'

// Setzt Title, Description, Open Graph und (auf Unterseiten) BreadcrumbList für eine Route aus seo.ts
export function usePageMeta(path: string) {
  const meta = pageMeta[path]
  if (!meta) throw new Error(`Keine Seitendaten für ${path} in utils/seo.ts`)

  useSeoMeta({
    title: meta.title,
    description: meta.description,
    ogTitle: meta.title,
    ogDescription: meta.description,
    twitterTitle: meta.title,
    twitterDescription: meta.description,
  })

  if (path !== '/') {
    useHead({
      script: [{
        key: 'breadcrumb-schema',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: pageMeta['/']!.name, item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: meta.name, item: `${SITE_URL}${path}` },
          ],
        }),
      }],
    })
  }
}
