
const actor = {
    type: 'document',
    name: 'actor',
    title: 'Actor',
    fields: [
        {
            type: 'string',
            name: 'fullname',
            title: 'Actor',
            description: 'Actor name',
        },
        {
            type: 'slug',
            name: 'name',
            title: 'Slug',
            decription: 'Unique URL for actor',
            validation: Rule => Rule.required(),
            options: {
                source: 'fullname',
                maxLength: 200,
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200),
            }
        },
        {
            type: 'reference',
            name: 'movies',
            title: 'Movie',
            to: {type: 'movie'},
        },
        {
            type: 'image',
            name: 'img',
            title: 'Image',
        },
        {
            type: 'text',
            name: 'story',
            title: 'Personal story',
            description: 'Story of the actor',
        },
    ],
    preview: {
        select: {
            title: 'name.current',
        },
    },
}
export default actor;