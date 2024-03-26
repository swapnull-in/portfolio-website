import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  //const skills = ['JavaScript (ES13)', 'Node.js', 'Android', 'iOS', 'Kotlin', 'SwiftUI'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Swapnil Godambe, a Director of Engineering at my current company{' '}
              <a href="https://www.axisbank.com" target="_blank" rel="noreferrer">
                Axis Bank DBAT | Freecharge
              </a>
              .
            </p>

            <p>
              I am really enjoying my time working here with some of the brightest minds. Being
              responsible for technical ownership of financial products.
            </p>

            <p>
              Previously, co-founded consultancy company - The Observatory specialised in Mobile
              Apps and Web Applications. We built initial version of{' '}
              <a href="https://servify.in/">Servify</a> and later got acquired by{' '}
              <a href="https://servify.in/">Servify</a>.
            </p>

            <p>
              {' '}
              <a href="https://servify.in/">Servify</a> ($800 Mn) is startup based out of Mumbai.
              Specialised in after sales and digital insurance. Was a core-team member and worked
              closely with founder. Lead the engineering team and built the product from concept to
              global launch. Hired and trained team from 0 to 50. Worked closely with all the
              business functions.
            </p>

            <p>
              Prior to that worked on building Mobile Apps and platforms at{' '}
              <a href="https://www.wolterskluwer.com/en-in">Wolters Kluwer | Medknow</a> &{' '}
              <a href="https://www.linkedin.com/company/vivaconnect-helo/">
                mobile apps development firm
              </a>
            </p>

            <p>
              My main focus these days is building financial products and digital experiences at{' '}
              <a href="https://www.axisbank.com">Axis Bank DBAT | Freecharge</a>.
            </p>

            <p>
              Also, I have in-person attended,{' '}
              <a href="https://io.google/2019/">Google I/O 2019,</a>{' '}
              <a href="https://developer.apple.com/wwdc23/">Apple WWDC 2019</a>,{' '}
              <a href="https://www.ces.tech">CES 2019,</a> &amp;{' '}
              <a href="https://www.ces.tech">CES 2020</a> .
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
