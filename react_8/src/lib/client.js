import sanityClient from '@sanity/client';

const options = {
    projectId: 'rmo30pqe',
    dataset: 'production',
    apiVersion: '2022-03-22',
}

const client = sanityClient({
    ...options,
    useCdn: true,
})

export default client;