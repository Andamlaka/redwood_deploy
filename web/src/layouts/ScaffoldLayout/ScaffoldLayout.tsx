import type { ReactNode } from 'react'
import ScaffoldLayout from './ScaffoldLayout'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children?: ReactNode
}

const ScaffoldLayoutWrapper = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <ScaffoldLayout
      title={title}
      titleTo={titleTo as keyof typeof import('@redwoodjs/router').routes}
      buttonLabel={buttonLabel}
      buttonTo={buttonTo as keyof typeof import('@redwoodjs/router').routes}
    >
      {children}
    </ScaffoldLayout>
  )
}

export default ScaffoldLayoutWrapper
