import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 's2614gkl',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2022-03-07"
})

