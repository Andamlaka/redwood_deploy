import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

// ...

export const createContact: MutationResolvers['createContact'] = ({
  input,
}) => {
  validate(input.email, 'email', { email: true })
  return db.contact.create({ data: input })
}