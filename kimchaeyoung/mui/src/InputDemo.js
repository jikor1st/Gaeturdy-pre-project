import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Button = styled.div`
    display: flex;
`;

const Container = styled.div`
    display: flex;
    max-width: 1094px;
    justify-content: center;
    margin: 0 auto;
`;

function InputDemo({ label, maxLength, helper, error, buttons, icon }) {
    const handleButton = (e) => {
        const targetId = e.target.id;
        if (e.target.checked) {
            document.querySelector(`.${targetId}`).style.display = "block";
        } else {
            document.querySelector(`.${targetId}`).style.display = "none";
        }
    };
    return (
        <Container>
            <Input
                label={label}
                maxLength={maxLength}
                helper={helper}
                error={error}
                icon={icon}
            />
            <div>
                {buttons &&
                    buttons.map((button) => {
                        return (
                            <Button key={button.id}>
                                <label htmlFor={button.id}>
                                    <input
                                        type="checkbox"
                                        id={button.id}
                                        name={button.id}
                                        value={button.name}
                                        onClick={handleButton}
                                    />
                                    {button.name}
                                </label>
                            </Button>
                        );
                    })}
            </div>
        </Container>
    );
}

export default InputDemo;
