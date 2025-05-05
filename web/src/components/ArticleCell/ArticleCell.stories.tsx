import type { Meta, StoryObj } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

// Define meta
const meta: Meta = {
  title: 'Cells/ArticleCell',
  tags: ['autodocs'],
}

export default meta

// Corrected Story: loading
export const loading: StoryObj<typeof Loading> = {
  render: () => {
    return <Loading />
  },
}

// Corrected Story: empty
export const empty: StoryObj<typeof Empty> = {
  render: () => {
    return <Empty />
  },
}

// Corrected Story: failure
export const failure: StoryObj<typeof Failure> = {
  render: (args: React.ComponentProps<typeof Failure>) => {
    return <Failure error={new Error('Oh no')} {...args} />
  },
}

// Corrected Story: success
export const success: StoryObj<typeof Success> = {
  render: (args: React.ComponentProps<typeof Success>) => {
    return <Success {...standard()} {...args} />
  },
}
