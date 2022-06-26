const rainbow = (WrappedComponent) => {
    const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + "-text";

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent  {...props} />
            </div>
        )
    }
    
}
 
export default rainbow;