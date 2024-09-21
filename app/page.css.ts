import { style } from '@vanilla-extract/css';

export const main = style({
  width: '100%',
  minHeight: '100vh',
  padding: 18
})

export const wrapper = style({
  width: 600,
  margin: 'auto',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%'
    },
  }
});

export const view = style({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export const name = style({
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 80,
  fontWeight: '100',
  letterSpacing: -6
  // color: '#fff'
});

export const job = style({
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 50,
  // color: '#fff'
});


export const heroWrapper = style({
  position: 'relative',
});

export const innerCircle = style({
  position: 'relative',
  // border: '1px dashed #000',
  borderRadius: '50%',
  width: 400,
  height: 400,
  overflow: 'hidden'
});

export const sunglasses = style({
  position: 'absolute',
  top: 108,
  left: 142,
  fontSize: 120
});

export const introduceText = style({
  marginTop: 20,
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 30,
  fontWeight: 100,
  color: '#eee'
});

export const deco = style({
  position: 'absolute',
  fontSize: 50
})