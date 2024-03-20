function ListItem(props) {
    return(
        <div>
        <a href={props.href} download={props.dowload} class="btn"> {props.nameBtn} </a>
    </div>
    )
}

function ButtonPage(props) {
    const btns = props.btns;
    return (
        <div>
            {btns.map((btn) => (
                <ListItem 
                href={btn.href}
                download={btn.dowload}
                nameBtn={btn.nameBtn}
                />
            ) )}
        </div>
    )
}
export default ButtonPage;