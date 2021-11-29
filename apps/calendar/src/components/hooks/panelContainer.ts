import { RefObject } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { cls } from '@src/helpers/css';

// @TODO: merge 'usePanel' hooks after apply layout component to month component
export function usePanelContainer(containerRef: RefObject<HTMLDivElement>, selector: string) {
  const [panel, setPanel] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const panelContainer: HTMLElement | null = containerRef.current.querySelector(
        `${cls('panel')}${selector}`
      );

      if (panelContainer) {
        setPanel(panelContainer);
      }
    }
  }, [containerRef, selector]);

  return panel;
}