import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import author from './author'
import category from './category'
import blogcontent from './blogcontent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category,blogcontent,],
}
