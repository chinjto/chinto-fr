import {createClient} from '@sanity/client';

// TODO à bousculer dans des variables de déploiement
// rien de sensible car publique (peut partir sur Github), mais plus propre de le variabiliser par env'
export const sanityClient = createClient({
  projectId: 'msozvpkg',
  dataset: 'production',
  apiVersion: '2026-09-16',
  useCdn: true
});
