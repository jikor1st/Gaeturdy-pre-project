import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    &.input-error {
        label {
            border: 1px solid red;
        }
        .label-text,
        .error {
            color: red;
        }
    }
`;

const Label = styled.label`
    display: inline-flex;
    align-items: baseline;
    padding: 0 16px;
    position: relative;
    box-sizing: border-box;
    position: relative;
    height: 56px;
    border-bottom: 1px solid black;
`;

const InputBox = styled.input`
    display: flex;
    border: none;
    height: 100%;
    background-color: transparent;
    &:focus {
        outline: none;
    }
`;

const LabelText = styled.div`
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%) scale(1);
    transform-origin: left;
    transition: all ease-in-out 0.2s;
`;

const Container = styled.div`
    display: flex;
    max-width: 1094px;
    justify-content: center;
    margin: 0 auto;
`;
const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
`;

function Input({
    label,
    maxLength,
    icon,
    Trailing,
    helper,
    error,
    id,
    variant,
    required,
}) {
    const [inputLength, setInputLength] = useState(0);

    const inputLengthCheck = (e) => {
        setInputLength(e.target.value.length);
    };
    let requiredComponent;
    if (required) {
        requiredComponent = <span className="required">*</span>;
    } else {
        requiredComponent = "";
    }
    let iconComponent;
    if (icon) {
        iconComponent = <span className="required">*</span>;
    } else {
        iconComponent = "";
    }
    return (
        <Container>
            <InputContainer
                style={{
                    border: variant === "outlined" ? "1px solid black" : "",
                    backgroundColor: variant === "filled" ? "#eee" : "",
                }}
                className={error ? "input-error" : ""}
            >
                <Label>
                    <LabelText className="label-text">
                        {iconComponent}
                        {label}
                        {requiredComponent}
                    </LabelText>
                    <InputBox
                        id={id}
                        onFocus={(el) => {
                            const label = el.target
                                .closest("label")
                                .querySelector(".label-text");
                            label.style.top = 0;
                            label.style.transform =
                                "translateY(-50%) scale(0.9)";
                        }}
                        onBlur={(el) => {
                            if (el.target.value.length <= 0) {
                                const label = el.target
                                    .closest("label")
                                    .querySelector(".label-text");
                                label.style.top = "50%";
                                label.style.transform =
                                    "translateY(-50%) scale(1)";
                            }
                        }}
                        onChange={inputLengthCheck}
                        maxLength={maxLength}
                    ></InputBox>
                </Label>
                <TextContainer>
                    <div>
                        <div style={{ display: "none" }} className="helper">
                            {helper}
                        </div>
                        <div style={{ display: "none" }} className="error">
                            {error}
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "none" }} className="max-length">
                            <span id="currentLength">{inputLength}</span> /{" "}
                            {maxLength}
                        </div>
                    </div>
                </TextContainer>
            </InputContainer>
        </Container>
    );
}

export default Input;
