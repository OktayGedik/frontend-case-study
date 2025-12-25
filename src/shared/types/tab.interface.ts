import { TabHeroContent, TabId } from '@/shared';
import React from 'react';

export interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: TabHeroContent;
  screenContentBaseImage?: string;
}
