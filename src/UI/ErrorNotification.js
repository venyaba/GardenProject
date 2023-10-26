const errorStyles = {
    textAlign: 'center',
    display: "block",
    color: "#ff2400"
}
export const ErrorNotification = () =>{
    return <span style={errorStyles}>Something went wrong, server not answer!</span>
}