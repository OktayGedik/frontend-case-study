import { Tab } from '../../data/types';
import DocumentScannerIcon from './icons/document-scanner.svg?react';
import SignStampIcon from './icons/sign-stamp.svg?react';
import BatchScanningIcon from './icons/batch-scanning.svg?react';
import AdvancedFiltersIcon from './icons/advanced-filters.svg?react';
import ExportShareIcon from './icons/export-share.svg?react';

export const FEATURE_TABS = [
  {
    id: 'document-scanner',
    label: 'Document Scanner',
    icon: DocumentScannerIcon,
  },
  {
    id: 'sign-stamp',
    label: 'Sign & Stamp',
    icon: SignStampIcon,
  },
  {
    id: 'batch-scanning',
    label: 'Batch Scanning',
    icon: BatchScanningIcon,
  },
  {
    id: 'advanced-filters',
    label: 'Advanced Filters',
    icon: AdvancedFiltersIcon,
  },
  {
    id: 'export-share',
    label: 'Export & Share',
    icon: ExportShareIcon,
  },
] as const satisfies readonly Tab[];
