import { TabHeroContent, TabId } from '@/shared';
import { ComponentType, SVGProps } from 'react';

export interface Tab {
  id: TabId;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  content: TabHeroContent;
  screenContentBaseImage: string;
  animationComponent?: ComponentType;
}
