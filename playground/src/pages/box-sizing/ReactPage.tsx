import styled from "@emotion/styled"
import { useState, type MouseEventHandler } from "react"

const initDisplay = "block"
const initBorder = "0px"
const initPadding = "0"
const initBoxSizing = "border-box"

const modifyDisplay = "flex"
const modifyBorder = "10px solid"
const modifyPadding = "10px"
const modifyBoxSizing = "content-box"

export const ReactPage = () => {
    const [parentProps, setParentProps] = useState<ParentProps>({
        display: initDisplay,
    })

    const [childProps, setChildProps] = useState<ChildProps>({
        border: initBorder,
        padding: initPadding,
        boxSizing: initBoxSizing
    })
    const { display } = parentProps
    const { border, padding, boxSizing } = childProps
    const changeParentDisplay: MouseEventHandler<HTMLButtonElement> = (_) => {
        setParentProps({ ...parentProps, display: parentProps.display === initDisplay ? modifyDisplay : initDisplay })
    }
    const changeChildBorder: MouseEventHandler<HTMLButtonElement> = (_) => {
        setChildProps({ ...childProps, border: childProps.border === initBorder ? modifyBorder : initBorder })
    }
    const changeChildPadding: MouseEventHandler<HTMLButtonElement> = (_) => {
        setChildProps({ ...childProps, padding: childProps.padding === initPadding ? modifyPadding : initPadding })
    }
    const changeChildBoxSizing: MouseEventHandler<HTMLButtonElement> = (_) => {
        setChildProps({ ...childProps, boxSizing: childProps.boxSizing === initBoxSizing ? modifyBoxSizing : initBoxSizing })
    }
    return <>
        <DisplaySquare>
            <Center>
                <CurrentCSS>
                    <p>.parent &#123;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;display: {display};</p>
                    <p>&#125;</p>
                    <br />
                    <p>.child &#123;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;width: 100%;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;border: {border};</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;padding: {padding};</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;box-sizing: {boxSizing};</p>
                    <p>&#125;</p>
                </CurrentCSS>
            </Center>
            <Center>
                <Parent display={display}>
                    <p>Parent</p>
                    <Child border={border} padding={padding} boxSizing={boxSizing}><p>Child</p></Child>
                </Parent>
            </Center>
        </DisplaySquare>
        <div className="buttonArea">
            <p>Parent</p>
            <button onClick={changeParentDisplay}>display</button>
            <p>Child</p>
            <button onClick={changeChildBorder}>border</button>
            <button onClick={changeChildPadding}>padding</button>
            <button onClick={changeChildBoxSizing}>box-sizing</button>
        </div>
        <p>This contents is inspaired by <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing</a></p>
    </>
}

const DisplaySquare = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    background-color: white;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    height: 200px;
`

const CurrentCSS = styled.div`
    display: block;
    width: 70%;
    height: 200px;
    background-color: white;
    margin: 10px;
`

type ParentProps = {
    display: "block" | "flex"
}

const Parent = styled.div<ParentProps>`
    display: ${prop => prop.display};
    width: 200px;
    height: 200px;
    background-color: red;
    position: relative;

    & p {
        color: white;
        font-weight: bold;
        position: absolute;
    }
`

type ChildProps = {
    border: string
    padding: string
    boxSizing: "border-box" | "content-box"
}

const Child = styled.div<ChildProps>`
    margin: 50px 0px 0px 0px;
    display: block;
    width: 100%;
    height: 50%;
    background-color: blue;
    padding:  ${props => props.padding};
    border: ${props => props.border};
    box-sizing: ${props => props.boxSizing};

    & p {
        color: white;
        font-weight: bold;
    }
`