import type { NextApiRequest, NextApiResponse } from 'next'

// @Todo I don't know correct return type at the time.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function exit(_: NextApiRequest, res: NextApiResponse) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}
