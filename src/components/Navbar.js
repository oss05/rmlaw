import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          <Link to="/"><img src={Logorma} alt="logo-rma" /></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink>
                  <Link className="navCont" to="/">
                    {this.props.data.navbar.home.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink>
                  <Link className="navCont" to="/quienessomos">
                    <FontAwesomeIcon className="i" icon="users" />
                    {this.props.data.navbar.quienesSomos.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink >
                  <Link className="navCont" to="/abogados">
                    <FontAwesomeIcon className="i" icon="gavel" />
                    {this.props.data.navbar.abogados.content}
                  </Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="navItem">
                <DropdownToggle nav caret>
                  <Link className="navCont">
                    <FontAwesomeIcon className="i" icon="home" />
                    {this.props.data.navbar.areasDePractica.content}
                  </Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/telecomunicaciones">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.telecom.content}
                    </DropdownItem>
                  </Link>
                  <Link to="/creditos-finanzas">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.creditos.content}
                    </DropdownItem>
                  </Link>
                  <Link to="/radiodifusion">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.radio.content}
                    </DropdownItem>
                  </Link>
                  <Link to="/derecho-corporativo">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.transaccional.content}
                    </DropdownItem>
                  </Link>
                  <Link to="/energia">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.energia.content}
                    </DropdownItem>
                  </Link>
                  <Link to="/competencia-economica">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.competenciaEconomica.content}
                    </DropdownItem>
                  </Link>
                  <Link to="/asesoria-legislativa">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.asesoria.content}
                    </DropdownItem>
                  </Link>
                  <Link to="/litigio">
                    <DropdownItem className="navCont">
                      <FontAwesomeIcon className="i" icon="caret-right" />
                      {this.props.data.navbar.litigio.content}
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="navItem">
                <NavLink>
                  <Link className="navCont" to="/bolsadetrabajo">
                    <FontAwesomeIcon className="i" icon="suitcase" />
                    {this.props.data.navbar.bolsaDeTrabajo.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink>
                  <Link className="navCont" to="/publicaciones">
                    <FontAwesomeIcon className="i" icon="file-contract" />
                    {this.props.data.navbar.publicaciones.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink>
                  <Link className="navCont" to="/contacto">
                    <FontAwesomeIcon className="i" icon="phone" />
                    {this.props.data.navbar.contacto.content}
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="navItem">
                <img style={{ width: '45px' }} onChange={this.props.handelChangeIdioma} src={imagesPath[imageName]} onClick={this.toggleImage} />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}