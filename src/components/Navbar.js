import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logorma from '../assets/logo-rma.png';
import '../css/Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const imagesPath = {
  mx: 'https://cdn.icon-icons.com/icons2/1531/PNG/512/3253493-flag-mexico-icon_106775.png',
  us: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png'
}

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  state = {
    open: true,
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
    this.props.handelChangeIdioma()
  }
  getImageName = () => this.state.open ? 'mx' : 'us'

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const imageName = this.getImageName();
    return (
      <div className="prevent-nav">
        <Navbar color="#fff" light expand="md" className="custom-navbar">
          <NavbarBrand href="/"><img src={Logorma} alt="logo-rma" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink href="/" className="navCont"> {this.props.data.navbar.home.inicio} </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/quienessomos">
                  <FontAwesomeIcon className="i" icon="users" />
                  {this.props.data.navbar.home.inicio}
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/abogados">
                  <FontAwesomeIcon className="i" icon="gavel" />
                  {this.props.data.navbar.home.inicio}
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="navItem">
                <DropdownToggle nav caret>
                  <FontAwesomeIcon className="i" icon="home" />
                  {this.props.data.navbar.home.inicio}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/telecomunicaciones">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                  <DropdownItem href="/creditos-finanzas">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                  <DropdownItem href="/radiodifusion">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                  <DropdownItem href="/derecho-corporativo">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                  <DropdownItem href="/energia">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                  <DropdownItem href="/competencia-economica">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                  <DropdownItem href="/asesoria-legislativa">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                  <DropdownItem href="/litigio">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    {this.props.data.navbar.home.inicio}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="navItem">
                <NavLink href="/bolsadetrabajo">
                  <FontAwesomeIcon className="i" icon="suitcase" />
                  {this.props.data.navbar.home.inicio}
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/publicaciones">
                  <FontAwesomeIcon className="i" icon="file-contract" />
                  {this.props.data.navbar.home.inicio}
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/contacto">
                  <FontAwesomeIcon className="i" icon="phone" />
                  {this.props.data.navbar.home.inicio}
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <img style={{width: '45px'}} onChange={this.props.handelChangeIdioma} src={imagesPath[imageName]} onClick={this.toggleImage} />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}