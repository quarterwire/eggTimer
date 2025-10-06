export default {
  sanitize: (input: string) => input.replace(/<[^>]*>?/gm, ''), // strip all tags
}
