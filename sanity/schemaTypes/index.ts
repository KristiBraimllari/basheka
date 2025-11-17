import { type SchemaTypeDefinition } from 'sanity'
import heroSection from './heroSection'
import service from './service'
import project from './project'
import resource from './resource'
import teamMember from './teamMember'
import timelineEvent from './timelineEvent'
import sustainabilityMetric from './sustainabilityMetric'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    service,
    project,
    resource,
    teamMember,
    timelineEvent,
    sustainabilityMetric,
    siteSettings,
  ],
}
