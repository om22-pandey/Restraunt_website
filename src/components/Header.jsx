const Title = () =>(
    <a href="">
        <img className="logo" src="https://foodvilla.no/src/img/logo.png" alt="logo"/>
    </a>
)

export const HeaderComponent = ()=>{
    return(
    <div className="header">
        <Title></Title>
        <div className="nav-items">
            <ul className="">
                <li>home</li>
                <li>about</li>
                <li>contact us</li>
                <li>cart</li>
            </ul> 
        </div>
    </div>
    )
}
