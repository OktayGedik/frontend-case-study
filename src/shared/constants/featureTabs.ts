import type { Tab } from '../types';
import DocumentScannerIcon from '../assets/icons/featureTabs/document-scanner.svg?react';
import SignStampIcon from '../assets/icons/featureTabs/sign-stamp.svg?react';
import BatchScanningIcon from '../assets/icons/featureTabs/batch-scanning.svg?react';
import AdvancedFiltersIcon from '../assets/icons/featureTabs/advanced-filters.svg?react';
import ExportShareIcon from '../assets/icons/featureTabs/export-share.svg?react';

const tabs = [
  {
    id: 'document-scanner' as const,
    label: 'Document Scanner' as const,
    icon: DocumentScannerIcon,
  },
  {
    id: 'sign-stamp' as const,
    label: 'Sign & Stamp' as const,
    icon: SignStampIcon,
  },
  {
    id: 'batch-scanning' as const,
    label: 'Batch Scanning' as const,
    icon: BatchScanningIcon,
  },
  {
    id: 'advanced-filters' as const,
    label: 'Advanced Filters' as const,
    icon: AdvancedFiltersIcon,
  },
  {
    id: 'export-share' as const,
    label: 'Export & Share' as const,
    icon: ExportShareIcon,
  },
];

export const FEATURE_TABS: readonly Tab[] = tabs;
