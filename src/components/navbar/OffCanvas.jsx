import { Container, Image } from 'react-bootstrap'
import { Ul, UserBox, Li, Text, TextLogo } from './styled'
import { SiGoogleclassroom } from 'react-icons/si'
import { BiCalendar } from 'react-icons/bi'
import { FiSettings, FiLogOut } from 'react-icons/fi'

export const OffCanvas = () => {
    return (
        <>
            <div className="offcanvas-header border">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Our ClassRoom</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <UserBox className="border">
                    <Image className="mt-2" fluid src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt=".." height="75" width="75" />
                    <p>user name</p>
                    <p>user@gmail.com</p>
                </UserBox>
                <div className="border mt-2">
                    <Ul className="mt-2">
                        <Li className="mb-3"><SiGoogleclassroom className="" /><span className="mx-3">Classes</span></Li>
                        <Li className="mb-3"><BiCalendar className="" /><span className="mx-3">Calender</span></Li>
                    </Ul>
                </div>
                <div className="border mt-2">
                    <Text className="text-muted">Enrolled Classes</Text>
                    <Ul className="mt-2">
                        {
                            true ?
                                <Li className="mb-3">
                                    <TextLogo>M</TextLogo>
                                    <span className="mx-3">Maths</span>
                                </Li>
                                :
                                <Text>No Enrolled Classes</Text>
                        }
                    </Ul>
                </div>
                <div className="border mt-2">
                    <Text className="text-muted">Teaching Classes</Text>
                    <Ul className="mt-2">
                        {
                            false ?
                                <Li className="mb-3"><SiGoogleclassroom className="" /><span className="mx-3">Classes</span></Li>
                                :
                                <Text>No Teaching Classes</Text>
                        }
                    </Ul>
                </div>
                <UserBox className="border mt-2">
                    <Ul className="mt-2">
                        <Li className="mb-3"><FiSettings className="" /><span className="mx-3">Settings</span></Li>
                        <Li className="mb-3"><FiLogOut className="" /><span className="mx-3">Log out</span></Li>
                    </Ul>
                </UserBox>
            </div>
        </>
    )
}

