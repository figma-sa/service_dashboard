// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { forwardRef } from 'react';

import AppLayout, { AppLayoutProps } from '@cloudscape-design/components/app-layout';
import AppLayoutToolbar from '@cloudscape-design/components/app-layout-toolbar';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import enMessages from '@cloudscape-design/components/i18n/messages/all.en.json';

import { isVisualRefresh } from '../../common/apply-mode';

export const CustomAppLayout = forwardRef<AppLayoutProps.Ref, AppLayoutProps>(function CustomAppLayout(props, ref) {
  return (
    <I18nProvider locale="en" messages={[enMessages]}>
      {isVisualRefresh ? <AppLayoutToolbar ref={ref} {...props} /> : <AppLayout ref={ref} {...props} />}
    </I18nProvider>
  );
});
