// First, we must import the schema creator
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type' // eslint-disable-line import/no-unresolved
// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator' // eslint-disable-line import/no-unresolved

// Then import schema types from any plugins that might expose them
// @ts-ignore

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'picture',
          title: 'Picture',
          type: 'image',
        },
      ],
    },

    {
      name: 'post',
      type: 'document',
      title: 'Post',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'coverImageUrl',
          title: 'Cover Image URL',
          type: 'image',
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: 'author' }],
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
        },
      ],
    },
  ]),
})
