import React from 'react';

// reactstrap components
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="http://www.fam-front.com/">FAM</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://www.fam-front.com/">About me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://famzil.medium.com/">Blog</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{' '}
          <i className="tim-icons icon-heart-2" /> by{' '}
          <a href="http://www.fam-front.com/" target="_blank" rel="noreferrer">
            FAM
          </a>{' '}
          for a better web development experience - All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
