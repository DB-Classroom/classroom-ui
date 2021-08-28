import { Header } from './styled'
import { IoMenu } from 'react-icons/io5'
import { OffCanvas } from './OffCanvas'

const Navbar = () => {

    return (
        <Header classNameName="fixed-top">
            <p>DB ClassRoom</p>
            <button className="border-0 bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <IoMenu size={30} />
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <OffCanvas />
            </div>
        </Header>
    );
}
export default Navbar;