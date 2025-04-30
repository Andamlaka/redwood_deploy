// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  article: {
    __typename: 'Article' as const,
    id: 42,
  },
})
