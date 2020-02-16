import { IShowCase } from "../container/IShowCase";

export interface IParticleVortexView {
  particleNumberValue: number;
  particleTraceWidthValue: number;
  particleLifeTimeValue: number;
  backgroundColor: string;
  vortexNumberValue: number;
  onShowCaseItemClick: (showCaseName: string) => void;
  showCases: IShowCase[];
}
