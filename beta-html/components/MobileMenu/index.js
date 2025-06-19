import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function MobileHeader(props) {
  const router = useRouter();
  return (
    <div className="mobile-header">
      <div className={router.pathname === "/" ? "active" : ""}>
        <a href="/">
          HIZ TESTİ
        </a>
      </div>
      <div className={router.pathname === "/history" ? "active" : ""}>
        <a href="/history">
          <FormattedMessage id="resultsNav" />
        </a>
      </div>
      <div className={router.pathname === "/settings" ? "active" : ""}>
        <a href="/settings">
          <FormattedMessage id="settingsNav" />
        </a>
      </div>
      <div className={router.pathname === "/about-us" ? "active" : ""}>
        <a href="/about-us">
          <FormattedMessage id="aboutNav" />
        </a>                  
      </div>
    </div>
  )
}
