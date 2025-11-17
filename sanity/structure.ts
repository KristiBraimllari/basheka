import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings (Singleton)
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      // Hero Section
      S.listItem()
        .title('Hero Section')
        .child(
          S.document()
            .schemaType('heroSection')
            .documentId('heroSection')
        ),
      S.divider(),
      // Main Content Types
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('resource').title('Resources'),
      S.divider(),
      // About Page Content
      S.documentTypeListItem('teamMember').title('Team Members'),
      S.documentTypeListItem('timelineEvent').title('Timeline Events'),
      S.documentTypeListItem('sustainabilityMetric').title('Sustainability Metrics'),
    ])
