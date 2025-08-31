import React, { useEffect, useState } from 'react';
import { useLoader } from '../context/LoaderContext';

export default function withDynamicLoader(WrappedComponent) {
  return function LoaderWrappedComponent({ isDataReady, ...props }) {
    const { startLoader, stopLoader } = useLoader();
    const [isComponentReady, setIsComponentReady] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
      let isMounted = true;

      const loadComponent = async () => {
        await startLoader(); // Show loader
        if (!isMounted) return;

        setIsComponentReady(true); // Component is lazy-loaded
      };

      loadComponent();

      return () => {
        isMounted = false;
        stopLoader();
      };
    }, []);

    // 🚀 Combine both conditions: component + data
    useEffect(() => {
      if (isComponentReady && isDataReady) {
        setShouldShow(true);
        stopLoader(); // Stop loader only when BOTH are ready
      }
    }, [isComponentReady, isDataReady, stopLoader]);

    return shouldShow ? <WrappedComponent {...props} /> : null;
  };
}
