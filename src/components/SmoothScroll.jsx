import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {

    return (
        <ReactLenis root options={{ lerp: 0.1 }}>
            {children}
        </ReactLenis>
    )
};

export default SmoothScroll;