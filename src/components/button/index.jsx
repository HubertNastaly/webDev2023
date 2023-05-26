import { css, styled } from '@stitches/react'

export const Button = ({  link, onClick, children, ...commonProps }) => {
  return link ? (
    <LinkButton href={link} {...commonProps}>
      {children}
    </LinkButton> 
  ) : (
    <RegularButton onClick={onClick} {...commonProps}>
      {children}
    </RegularButton>
  )
}

const buttonStyles = css({
  minWidth: 160,
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  textAlign: 'center',

  variants: {
    variant: {
      primary: {
        color: 'white',
        background: '#ED4C5C',
        textTransform: 'uppercase',
      },
      secondary: {
        color: '#ED4C5C',
        background: 'white',
        textTransform: 'uppercase',
      },
      plain: {
        color: '#ED4C5C',
        background: 'none'
      }
    },
    size: {
      small: {
        fontSize: '12px',
        lineHeight: '18px'
      },
      regular: {
        fontSize: '14px',
        padding: '17px 34px',
      }
    },
    weight: {
      regular: {
        fontWeight: 400
      },
      bold: {
        fontWeight: 600
      },
      heavy: {
        fontWeight: 700
      }
    }
  },

  defaultVariants: {
    variant: 'plain',
    size: 'regular',
    weight: 'regular'
  }
})

const RegularButton = styled('button', buttonStyles)
const LinkButton = styled('a', buttonStyles, {
  display: 'block',
  textDecoration: 'none'
})

export default Button
