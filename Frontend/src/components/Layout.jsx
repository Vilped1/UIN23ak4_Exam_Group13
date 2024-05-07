import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children }) {
    return(
        <div>
            <Header/>
            <Nav />
            {children}
        </div>
    )
}