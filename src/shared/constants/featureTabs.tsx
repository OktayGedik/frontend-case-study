import type { Tab } from '../types';
import { TabId } from '../types';
import DocumentScannerIcon from '../assets/icons/featureTabs/document-scanner.svg?react';
import SignStampIcon from '../assets/icons/featureTabs/sign-stamp.svg?react';
import BatchScanningIcon from '../assets/icons/featureTabs/batch-scanning.svg?react';
import AdvancedFiltersIcon from '../assets/icons/featureTabs/advanced-filters.svg?react';
import ExportShareIcon from '../assets/icons/featureTabs/export-share.svg?react';
import DocumentScannerBaseImage from '../assets/images/documentScanner/document-scanner-base.png';
import BatchScanningImage from '../assets/images/batchScanning/batch-scanning-base.png';
import AdvancedFiltersImage from '../assets/images/advancedFilters/advanced-filters-base.png';
import ExportShareImage from '../assets/images/exportShare/export-share-base.png';
import SignStampBaseImage from '../assets/images/signStamp/sign-stamp-base.png';
import {
  AdvancedFilterAnimation,
  BatchScanningAnimation,
  ExportAnimation,
  SignStampAnimation,
} from '@/components';
export const FEATURE_TABS = [
  {
    id: TabId.DocumentScanner,
    label: 'Document Scanner',
    icon: DocumentScannerIcon,
    screenContentBaseImage: DocumentScannerBaseImage,
    content: {
      title: 'Document Scanner',
      subTitle: 'Scan with Ease',
      description:
        'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
      buttonText: 'Learn More',
    },
  },
  {
    id: TabId.SignStamp,
    label: 'Sign & Stamp',
    icon: SignStampIcon,
    screenContentBaseImage: SignStampBaseImage,
    animationComponent: SignStampAnimation,
    content: {
      title: 'Sign & Stamp',
      subTitle: 'One-Tap Focus',
      description:
        'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
      buttonText: 'Learn More',
    },
  },
  {
    id: TabId.BatchScanning,
    label: 'Batch Scanning',
    icon: BatchScanningIcon,
    screenContentBaseImage: BatchScanningImage,
    animationComponent: BatchScanningAnimation,
    content: {
      title: 'Batch Scanning',
      subTitle: 'Multiple Page Scan',
      description:
        'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
      buttonText: 'Learn More',
    },
  },
  {
    id: TabId.AdvancedFilters,
    label: 'Advanced Filters',
    icon: AdvancedFiltersIcon,
    screenContentBaseImage: AdvancedFiltersImage,
    animationComponent: AdvancedFilterAnimation,
    content: {
      title: 'Advanced Filters',
      subTitle: 'Unique Filters',
      description:
        'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
      buttonText: 'Learn More',
    },
  },
  {
    id: TabId.ExportShare,
    label: 'Export & Share',
    icon: ExportShareIcon,
    screenContentBaseImage: ExportShareImage,
    animationComponent: ExportAnimation,
    content: {
      title: 'Export & Share',
      subTitle: 'All-Round Conversion',
      description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
      buttonText: 'Learn More',
    },
  },
] as const satisfies ReadonlyArray<Tab>;
