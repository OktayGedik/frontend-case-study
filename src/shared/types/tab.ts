import React from 'react';

export interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: TabContent;
}

export interface TabContent {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
}
