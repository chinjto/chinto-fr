import {createClient} from '@sanity/client';
import {environment} from '@env/environment';

export const sanityClient = createClient(environment.sanity);
