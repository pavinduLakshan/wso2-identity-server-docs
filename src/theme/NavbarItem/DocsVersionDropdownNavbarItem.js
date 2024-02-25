/* eslint-disable header/header */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import {useLocation} from '@docusaurus/router';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  // (CUSTOM) Hide version dropdown on non-versioned pages
  // eslint-disable-next-line react/destructuring-assignment
  // const activeDocContext = useActiveDocContext(props.docsPluginId);
  const location = useLocation();

  const unversionedRoutes = [
    /^\/blog(?:\/[\w-]+)?(?:\/#\w+)?$/g
  ]

  function checkPathname(pathname) {
    // Check if the provided pathname matches any of the regexes in the list
    return unversionedRoutes.some(regex => regex.test(pathname))
  }

  if (checkPathname(location.pathname)) {
    return null;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DocsVersionDropdownNavbarItem {...props} />;
}
