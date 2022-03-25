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
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            description: 'Unique url name for movie',
            validation: Rule => Rule.required(),
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200),
            },
        },
        {
            type: 'image',
            name: 'poster',
            title: 'Poster',
        },
        {
            type: 'reference',
            name: 'actor',
            title: 'Actor',
            to: {type: 'actor'},
        },
        {
            type: 'text',
            name: 'plot',
            title: 'Plot',
            description: 'Movie plot'
        },
    ],
    preview: {
        select: {
            title: 'slug.current',
        },
    },
}

export default movie;