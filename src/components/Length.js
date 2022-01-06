import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledText = styled.Text`
    font-size: 24px;
`

const getLength = text => {
    console.log(`Target Text: ${text}`);
    return text.length;
}

const list = ['javaScript', 'Expo', 'Expo', 'React Native'];

let idx = 0;
const Length = () => {
    const [text, setText] = useState(list[0])
    // const [length, setLength] = useState('');


    const _onPress = () => {
        console.log('called _onPress');
        // setLength(getLength(text));
        ++idx;
        if (idx < list.length) setText(list[idx])
        // else {
        //     idx = 0;
        //     _onPress();
        // }
    };
    const length = useMemo(()=> getLength(text), [text])

    return (
        <>
            <StyledText>Text: {text}</StyledText>
            <StyledText>Length: {length}</StyledText>
            <Button title="Get Length" onPress={_onPress}></Button>
        </>
    );

};

export default Length