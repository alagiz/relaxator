import React from "react";
import { IParticleVortexView } from "./IParticleVortexView";
import { Styled } from "../styled";
import ParticleVortexOnly from "../components/ParticleVortexOnly/ParticleVortexOnly";

const ParticleVortexShowcaseView: React.FC<IParticleVortexView> = ({
  particleNumberValue,
  particleTraceWidthValue,
  particleLifeTimeValue,
  backgroundColor,
  vortexNumberValue,
  onShowCaseItemClick,
  onMenuToggle,
  isMenuVisible,
  showCases
}) => {
  return (
    <Styled.ShowcaseComponentContainer>
      <Styled.MenuItemsContainer>
        {isMenuVisible &&
          showCases.map(showCase => (
            <Styled.MenuItem
              key={showCase.id}
              onClick={() => onShowCaseItemClick(showCase.id)}
            >
              <div> {showCase.title} </div>
            </Styled.MenuItem>
          ))}
        {isMenuVisible && (
          <Styled.MenuToggleItem onClick={() => onMenuToggle()}>
            <div> ▲ </div>
          </Styled.MenuToggleItem>
        )}
        {!isMenuVisible && (
          <Styled.MenuToggleItem onClick={() => onMenuToggle()}>
            <div> ▼ </div>
          </Styled.MenuToggleItem>
        )}
      </Styled.MenuItemsContainer>

      <ParticleVortexOnly
        vortexNumberValue={vortexNumberValue}
        particleTraceWidthValue={particleTraceWidthValue}
        particleNumberValue={particleNumberValue}
        particleLifeTimeValue={particleLifeTimeValue}
        backgroundColor={backgroundColor}
      />
    </Styled.ShowcaseComponentContainer>
  );
};

export default ParticleVortexShowcaseView;
