import type { Tab } from '../types';
import DocumentScannerIcon from '../assets/icons/featureTabs/document-scanner.svg?react';
import SignStampIcon from '../assets/icons/featureTabs/sign-stamp.svg?react';
import BatchScanningIcon from '../assets/icons/featureTabs/batch-scanning.svg?react';
import AdvancedFiltersIcon from '../assets/icons/featureTabs/advanced-filters.svg?react';
import ExportShareIcon from '../assets/icons/featureTabs/export-share.svg?react';

export const FEATURE_TABS = [
  {
    id: 'document-scanner' as const,
    label: 'Document Scanner' as const,
    icon: DocumentScannerIcon,
    content: {
      title: 'Document Scanner',
      subTitle: 'Scan with Ease',
      description:
        'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
      buttonText: 'Learn More',
    },
  },
  {
    id: 'sign-stamp' as const,
    label: 'Sign & Stamp' as const,
    icon: SignStampIcon,
    content: {
      title: 'Sign & Stamp',
      subTitle: 'One-Tap Focus',
      description:
        'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
      buttonText: 'Learn More',
    },
  },
  {
    id: 'batch-scanning' as const,
    label: 'Batch Scanning' as const,
    icon: BatchScanningIcon,
    content: {
      title: 'Batch Scanning',
      subTitle: 'Multiple Page Scan',
      description:
        'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
      buttonText: 'Learn More',
    },
  },
  {
    id: 'advanced-filters' as const,
    label: 'Advanced Filters' as const,
    icon: AdvancedFiltersIcon,
    content: {
      title: 'Advanced Filters',
      subTitle: 'Unique Filters',
      description:
        'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
      buttonText: 'Learn More',
    },
  },
  {
    id: 'export-share' as const,
    label: 'Export & Share' as const,
    icon: ExportShareIcon,
    content: {
      title: 'Export & Share',
      subTitle: 'All-Round Conversion',
      description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
      buttonText: 'Learn More',
    },
  },
] as const satisfies ReadonlyArray<Tab>;
