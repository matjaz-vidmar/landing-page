/** @jsxImportSource @emotion/react */
import './style.css';
import { css } from '@emotion/react';
import bigLongPhoto from './images/bigLongPhoto.png';
import colors from './images/colors.png';
import logo from './images/logo.svg';
import smallLogos from './images/small-logos.png';

const mainStyles = css``;
const headerStyles = css`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 8px 20px;
  align-items: center;
  align-content: center;
  gap: 16px;
  margin-left: 5px;
  margin-right: 5px;
  position: sticky;
  top: 0;
  width: 98%;
  z-index: 2;
`;

const blackButtonStyles = css`
  background: black;
  color: white;
  border-radius: 4px;
  width: 20px;
  padding: 8px 20px;
  align-items: center;
  align-content: center;
  text-decoration: none;
  :hover {
    background-color: #404040;
  }
`;

const bigBlackButtonStyles = css`
  background: black;
  color: white;
  border-radius: 6px;
  width: 350px;
  height: 40px;
  padding: 8px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-justify: inherit;
  :hover {
    background-color: #404040;
  }
`;

const whiteButtonStyles = css`
  background: white;
  color: black;
  border-radius: 4px;
  width: 15px;
  border: 1px solid #b8b8b8;
  padding: 8px 20px;
  text-decoration: none;
  width: fit-content;
`;

const navStyles = css`
  a {
    transition: 0, 4s;
    text-decoration: none;
    margin-right: 10px;
    color: grey;
    justify-content: left;
    align-items: left;
    margin-left: 70px;

    &:hover {
      color: purple;
    }
  }
`;

const blackButtonStyleHover = css`
  background: black;
  color: white;
  border-radius: 4px;
  width: 20px;
  padding: 8px 20px;
  align-items: center;
  align-content: center;
  text-decoration: none;

  :hover {
    transition: box-shadow 0.5s;
    border: 2px solid purple;
    background: purple;
  }
`;

const bodyStyle = css`
  padding-left: 550px;
  padding-right: 500px;
  border-top: 50px;
  position: relative;
  nav-up: 100px;
  padding-top: 50px;
`;

const h3Style = css`
  font-weight: 200;
`;

const navProduct = css`
  justify-content: left;
  display: flex;
  flex-flow: row;
  padding-left: 10px;
  height: 30px;
  align-items: center;
  padding-bottom: 30px;
  padding-inline: 20px;
  gap: 2-px;
`;

const navButtons = css`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 8px 10px;
  align-items: center;
  align-content: center;
  gap: 16px;
  margin-left: 5px;
  margin-right: 5px;
`;

const h2Style = css`
  font-size: larger;
`;

const h4Style = css`
  font: 10px;
  font-weight: lighter;
`;

const divAbovePic = css`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

const stickyBottom = css`
  background: black;

  border-radius: 12px;
  width: 800px;
  height: 30px;
  padding: 15px 25px;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: top;
  align-content: center;
  margin: auto;
  background: linear-gradient(
    to right,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  :hover {
    background-color: #404040;
  }
`;

const blackButtonStylesSticky = css`
  background: #282828;
  color: white;
  border-radius: 30px;
  width: 150px;
  padding: 8px 20px;

  :hover {
    background-color: #404040;
  }
`;

const divBlackBackground = css`
  background: black;
  border-radius: 12px;
  width: 800px;
  height: 30px;
  padding: 20px 25px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin: auto;
  position: sticky;
  bottom: 0;
`;

const smallWhiteText = css`
  color: white;
  width: fit-content;
  padding: 30px 10px;
`;

function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        <nav css={navStyles}>
          <img src={logo} alt="Landingfolio" />

          <strong>Landingfolio</strong>

          <a href="Inspiration" css={navStyles}>
            Inspiration
          </a>
          <a href="Component Library" css={navStyles}>
            Component Library
          </a>
          <a href="Templates" css={navStyles}>
            Templates
          </a>
          <a href="Learn" css={navStyles}>
            Learn
          </a>
          <a href="Tools" css={navStyles}>
            Tools
          </a>
          <a href="Pricing" css={navStyles}>
            Pricing
          </a>
        </nav>
        <nav>
          <a href="support" css={blackButtonStyles}>
            💬 Support
          </a>
          <a href="Login" css={whiteButtonStyles}>
            Login
          </a>
        </nav>
      </header>
      <body css={bodyStyle}>
        <div>
          <h1>local-membership-template.webflow</h1>
          <h3 css={h3Style}>Local Membership Template</h3>
          <nav css={navProduct}>
            <p>Product</p>

            <img alt="colors" src={colors} />
          </nav>
          <div css={navButtons}>
            <a css={whiteButtonStyles}>
              <strong>Page: </strong> All
            </a>
            <a css={whiteButtonStyles}>
              <strong>Device: </strong>Desktop
            </a>
            <a css={bigBlackButtonStyles}>Visit site</a>
          </div>
          <div css={divAbovePic}>
            <nav>
              <h2 css={h2Style}>
                Extensive component library for Tailwind, Webflow & Figma
              </h2>
              <h4 css={h4Style}>
                Give every page a stunning, professional look — with hundreds of
                components to
                <br /> choose from.
              </h4>
            </nav>
            <nav>
              <br />

              <a css={blackButtonStyleHover}>Browse library</a>
              <br />
              <br />

              <img alt="small logos" src={smallLogos} />
            </nav>
          </div>
        </div>
        <img alt="big long pic" src={bigLongPhoto} />
      </body>
      <div css={divBlackBackground}>
        <span css={stickyBottom}>
          Premium Components for Tailwind & Webflow.{' '}
        </span>
        <p css={smallWhiteText}> Instantly Copied.</p>{' '}
        <button css={blackButtonStylesSticky}>Browse collection</button>
      </div>
    </div>
  );
}

export default App;
