function link({ to, children }) {
    const handleClick = (event) => {
        event.preventDefault();    
    };

    return <a onClick={handleClick}>{children}</a>
}

export default link;