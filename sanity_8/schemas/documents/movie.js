const movie = {
    type: 'document',
    name: 'movie',
    title: 'Movie',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Movie',
            description: 'Movie Title',
        },
        {
            type: 'reference',
            name: 'actor',
            title: 'Actor',
            to: {type: 'actor'},
        }
    ],
}

export default movie;