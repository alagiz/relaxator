import { IShowCase } from "../container/IShowCase";

export interface IParticleVortexView {
  particleNumberValue: number;
  particleTraceWidthValue: number;
  particleLifeTimeValue: number;
  backgroundColor: string;
  vortexNumberValue: number;
  showCases: IShowCase[];
  onShowCaseItemClick: (showCaseName: string) => void;
  onMenuToggle: () => void;
  isMenuVisible: boolean;
  onGithubLinkClick: () => void;
}
