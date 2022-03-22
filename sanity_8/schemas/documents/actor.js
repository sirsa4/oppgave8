
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
    ],
    preview: {
        select: {
            title: 'name.current',
        },
    },
}
export default actor;