import React from 'react';

export enum TabId {
  DocumentScanner = 'document-scanner',
  SignStamp = 'sign-stamp',
  BatchScanning = 'batch-scanning',
  AdvancedFilters = 'advanced-filters',
  ExportShare = 'export-share',
}

export interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: TabContent;
  screenContentBaseImage?: string;
}

export interface TabContent {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
}
