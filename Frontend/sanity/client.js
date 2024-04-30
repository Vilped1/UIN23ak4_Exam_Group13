import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 's2614gkl',
    dataset: 'production',
    apiVersion: '2021-03-07',
    useCdn: true
})