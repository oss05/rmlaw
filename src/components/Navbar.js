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

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="prevent-nav">
        <Navbar color="#fff" light expand="md" className="custom-navbar">
          <NavbarBrand href="/"><img src={Logorma} alt="logo-rma" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink href="/"><Translate className="navCont" content="navbar.home.content"/></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/quienessomos">
                  <FontAwesomeIcon className="i" icon="users" />
                  <Translate className="navCont" content="navbar.quienesSomos.content"/>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/abogados">
                  <FontAwesomeIcon className="i" icon="gavel" />
                  <Translate className="navCont" content="navbar.abogados.content"/>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="navItem">
                <DropdownToggle nav caret>
                  <FontAwesomeIcon className="i" icon="home" />
                  <Translate className="navCont" content="navbar.areasDePractica.content"/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/telecomunicaciones">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.telecom.content"/>
                  </DropdownItem>
                  <DropdownItem href="/creditos-finanzas">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.creditos.content"/>
                  </DropdownItem>
                  <DropdownItem href="/radiodifusion">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.radio.content"/>
                  </DropdownItem>
                  <DropdownItem href="/derecho-corporativo">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.transaccional.content"/>
                  </DropdownItem>
                  <DropdownItem href="/energia">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.energia.content"/>
                  </DropdownItem>
                  <DropdownItem href="/competencia-economica">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.competenciaEconomica.content"/>
                  </DropdownItem>
                  <DropdownItem href="/asesoria-legislativa">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.asesoria.content"/>
                  </DropdownItem>
                  <DropdownItem href="/litigio">
                    <FontAwesomeIcon className="i" icon="caret-right" />
                    <Translate className="navCont" content="navbar.litigio.content"/>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="navItem">
                <NavLink href="/bolsadetrabajo">
                  <FontAwesomeIcon className="i" icon="suitcase" />
                  <Translate className="navCont" content="navbar.bolsaDeTrabajo.content"/>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/publicaciones">
                  <FontAwesomeIcon className="i" icon="file-contract" />
                  <Translate className="navCont" content="navbar.publicaciones.content"/>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/contacto">
                  <FontAwesomeIcon className="i" icon="phone" />
                  <Translate className="navCont" content="navbar.contacto.content"/>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}