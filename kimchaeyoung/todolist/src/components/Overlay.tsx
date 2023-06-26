import styled from "styled-components";

export type overlayProps = {
    isShow: boolean;
};

const OverlayDim = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #212121;
    opacity: 0.4;
    z-index: 1;
`;

function Overlay({ isShow }: overlayProps) {
    return (
        <OverlayDim
            style={{
                display: isShow ? "block" : "none",
            }}
        />
    );
}

export default Overlay;
