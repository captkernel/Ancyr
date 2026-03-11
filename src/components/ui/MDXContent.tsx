'use client';

import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class MDXErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 text-center">
          <p className="font-sans text-sm text-stone-500">
            This article could not be rendered. Please try refreshing the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
