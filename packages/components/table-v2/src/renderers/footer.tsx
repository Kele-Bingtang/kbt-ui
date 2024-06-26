import type { CSSProperties, FunctionalComponent } from 'vue'

type FooterRendererProps = {
  class?: JSX.IntrinsicAttributes['class']
  style: CSSProperties
}

const Footer: FunctionalComponent<FooterRendererProps> = (props, { slots }) => {
  return (
    <div class={props.class} style={props.style}>
      {slots.default?.()}
    </div>
  )
}

Footer.displayName = 'KTableV2Footer'

export default Footer
