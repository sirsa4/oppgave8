//https://www.sanity.io/docs/image-type

const image = {
    type: 'image',
    name: 'poster',
    title: 'Poster',
    options: {
        hotspot: true,
    },
    fields: [
        {
            type: 'string',
            name: 'image',
            title: 'Poster',
            description: 'Add Image',
            isHighlighted: true,
        },
    ],
}

export default image;